import QRCode from "qrcode";
import { ShortUrl } from "../models/urlModel.js";
import { v4 as uuidv4 } from "uuid";

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

// In redirectToOriginal controller
export const redirectToOriginal = async (req, res) => {
  try {
    const { shortId } = req.params;
    const url = await ShortUrl.findOne({ shortId });

    // res.json(url)

    if (!url) {
      return res.status(404).send("URL not found");
    }

    // Check expiration
    if (url.expiresAt && new Date() > url.expiresAt) {
      return res.status(410).send("Link has expired");
    }

    // Handle one-click destruction
    if (url.oneClickDestroy) {
      if (url.clicked) {
        return res.status(410).send("Link has been destroyed");
      }
      url.clicked = true;
      await url.save();
    }

    // Track analytics in future
    url.clicks++;
    await url.save();

    res.redirect(url.originalUrl);
  } catch (error) {
    console.error(error);
    res.status(500).send("Server error");
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