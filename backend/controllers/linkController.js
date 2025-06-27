import QRCode from "qrcode";
import { ShortUrl } from "../models/urlModel.js";
import { v4 as uuidv4 } from "uuid";
import fetch from "node-fetch";


const { GA_MEASUREMENT_ID, GA_API_SECRET } = process.env;

// In createShortUrl controller
export const createShortUrl = async (req, res) => {
  try {
    const { originalUrl, expiryOption, customExpiryInDays } = req.body;

    // Calculate expiration
    let expiresAt = null;
    const oneClickDestroy = expiryOption === "one_click";

    if (expiryOption !== "one_click" && expiryOption !== "never") {
      const days =
        expiryOption === "custom"
          ? parseInt(customExpiryInDays)
          : parseInt(expiryOption);

      expiresAt = new Date();
      expiresAt.setDate(expiresAt.getDate() + days);
    }

    const shortId = uuidv4().slice(0, 8); // 8-char ID

    
    const newUrl = new ShortUrl({
      originalUrl,
      shortId,
      createdAt: new Date(),
      expiresAt,
      oneClickDestroy,
      clicked: false,
    });

    await newUrl.save();

    const baseUrl = process.env.BASE_URL;

    res.status(201).json({
      shortUrl: `${baseUrl}/${shortId}`,
      expiresAt,
      oneClickDestroy,
    });
  } catch (error) {
    console.error(error);
    res.status(500).json({ error: "Server error" });
  }
};

// redirect controller
export const redirectToOriginal = async (req, res) => {
  try {
    const { shortId } = req.params;
    const urlDoc = await ShortUrl.findOne({ shortId });
    if (!urlDoc) return res.status(404).send("URL not found");

    // Extract client_id from GA cookie or fallback to a UUID
    const rawCookie = req.headers.cookie || "";
    const match = rawCookie.match(/_ga=GA\d+\.\d+\.(\d+\.\d+)/);
    const clientId = match ? match[1] : uuidv4();

    // Fire Measurement Protocol event for the click
    fetch(
      `https://www.google-analytics.com/mp/collect?measurement_id=${GA_MEASUREMENT_ID}&api_secret=${GA_API_SECRET}`,
      {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          client_id: clientId,
          events: [
            {
              name: "click_short_url",
              params: { short_id: shortId }
            }
          ]
        }),
      }
    ).catch(console.error);

    // Now perform the redirect
    return res.redirect(urlDoc.originalUrl);
  } catch (error) {
    console.error(error);
    return res.status(500).send("Server error");
  }
};

// Add to your existing controller
export const generateQRCode = async (req, res) => {
  try {
    const { shortId } = req.params;
    const url = await ShortUrl.findOne({ shortId });

    if (!url) {
      return res.status(404).json({ error: "URL not found" });
    }

    const baseUrl =
      process.env.BASE_URL || `${req.protocol}://${req.get("host")}`;
    const shortUrlGenerated = `${baseUrl}/${shortId}`;

    const qrImage = await QRCode.toDataURL(shortUrlGenerated);

    res.status(200).json({
      qrCode: qrImage,
      shortUrl: shortUrlGenerated,
    });
  } catch (error) {
    console.error(error);
    res.status(500).json({ error: "Server error" });
  }
};


export const healthCheck =(req,res)=>{
  try {
    res.status(200).json({message:"server is healthy"})
  } catch (error) {
     res.status(500).json({ error: "Server error" });
  }
}