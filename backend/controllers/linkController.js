import QRCode from "qrcode";
import { ShortUrl } from "../models/urlModel.js";
import { v4 as uuidv4 } from "uuid";
import fetch from "node-fetch";

const { GA_MEASUREMENT_ID, GA_API_SECRET } = process.env;

// Helper function to validate URLs
const isValidUrl = (url) => {
  try {
    new URL(url);
    return true;
  } catch (error) {
    return false;
  }
};

export const createShortUrl = async (req, res) => {
  try {
    const { originalUrl, expiryOption, customExpiryInDays } = req.body;

    // Validate input URL
    if (!originalUrl || !isValidUrl(originalUrl)) {
      return res.status(400).json({ error: "Invalid URL" });
    }

    // Validate expiry options
    const validExpiryOptions = ["one_click", "never", "1", "7", "30", "custom"];
    if (!validExpiryOptions.includes(expiryOption)) {
      return res.status(400).json({ error: "Invalid expiry option" });
    }

    // Validate custom expiry days
    if (expiryOption === "custom") {
      const days = parseInt(customExpiryInDays);
      if (isNaN(days) || days <= 0) {
        return res.status(400).json({ error: "Invalid custom expiry days" });
      }
    }

    // Calculate expiration
    let expiresAt = null;
    const oneClickDestroy = expiryOption === "one_click";

    if (expiryOption !== "one_click" && expiryOption !== "never") {
      const days = expiryOption === "custom"
        ? parseInt(customExpiryInDays)
        : parseInt(expiryOption);

      expiresAt = new Date();
      expiresAt.setDate(expiresAt.getDate() + days);
    }

    const shortId = uuidv4().slice(0, 8);
    const baseUrl = process.env.BASE_URL;
    const shortUrl = `${baseUrl}/${shortId}`;

    // Generate QR code
    let qrCode = null;
    try {
      qrCode = await QRCode.toDataURL(shortUrl);
    } catch (qrError) {
      console.error("QR code generation failed:", qrError);
    }

    const newUrl = new ShortUrl({
      originalUrl,
      shortId,
      createdAt: new Date(),
      expiresAt,
      oneClickDestroy,
      clicked: false,
    });

    await newUrl.save();

    res.status(201).json({
      shortUrl,
      expiresAt,
      oneClickDestroy,
      qrCode,
    });
  } catch (error) {
    console.error(error);
    res.status(500).json({ error: "Server error" });
  }
};

export const redirectToOriginal = async (req, res) => {
  try {
    const { shortId } = req.params;
    const urlDoc = await ShortUrl.findOne({ shortId });
    
    // GA tracking
    const rawCookie = req.headers.cookie || "";
    const match = rawCookie.match(/_ga=GA\d+\.\d+\.(\d+\.\d+)/);
    const clientId = match ? match[1] : uuidv4();

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

    if (!urlDoc) {
      return res.status(404).send(`
        <!DOCTYPE html>
        <html lang="en">
        <head>
          <meta charset="UTF-8">
          <meta name="viewport" content="width=device-width, initial-scale=1.0">
          <title>URL Not Found</title>
          <style>
            @import url('https://fonts.googleapis.com/css2?family=Inter:wght@400;500;600;700&display=swap');
            
            * {
              margin: 0;
              padding: 0;
              box-sizing: border-box;
            }
            
            body {
              font-family: 'Inter', sans-serif;
              background-color: #000;
              color: #fff;
              min-height: 100vh;
              display: flex;
              flex-direction: column;
              align-items: center;
              justify-content: center;
              text-align: center;
              padding: 2rem;
              overflow: hidden;
              position: relative;
            }
            
            .background {
              position: absolute;
              inset: 0;
              overflow: hidden;
              z-index: -1;
            }
            
            .pulse {
              position: absolute;
              border-radius: 50%;
              mix-blend-mode: multiply;
              filter: blur(40px);
              opacity: 0.1;
              animation: pulse 8s infinite ease-in-out;
            }
            
            .pulse-1 {
              width: 80vw;
              height: 80vw;
              background-color: #ea580c;
              top: -40vh;
              right: -40vw;
              animation-delay: 0s;
            }
            
            .pulse-2 {
              width: 70vw;
              height: 70vw;
              background-color: #c2410c;
              bottom: -30vh;
              left: -30vw;
              animation-delay: 2s;
            }
            
            .pulse-3 {
              width: 60vw;
              height: 60vw;
              background-color: #9a3412;
              top: 50%;
              left: 50%;
              transform: translate(-50%, -50%);
              animation-delay: 4s;
            }
            
            @keyframes pulse {
              0%, 100% { opacity: 0.05; transform: scale(1); }
              50% { opacity: 0.15; transform: scale(1.1); }
            }
            
            .content {
              max-width: 600px;
              z-index: 10;
              animation: fadeIn 0.6s ease-out;
            }
            
            @keyframes fadeIn {
              from { opacity: 0; transform: translateY(20px); }
              to { opacity: 1; transform: translateY(0); }
            }
            
            h1 {
              font-size: 3rem;
              font-weight: 700;
              margin-bottom: 1.5rem;
              color: #ea580c;
              text-shadow: 0 0 20px rgba(234, 88, 12, 0.3);
            }
            
            p {
              font-size: 1.25rem;
              color: #d1d5db;
              margin-bottom: 2.5rem;
              line-height: 1.6;
            }
            
            .home-link {
              display: inline-block;
              background-color: #ea580c;
              color: white;
              font-weight: 600;
              font-size: 1.1rem;
              padding: 0.9rem 2.5rem;
              border-radius: 1.5rem;
              text-decoration: none;
              transition: all 0.3s ease;
              box-shadow: 0 4px 20px rgba(234, 88, 12, 0.3);
              animation: pulseButton 2s infinite;
            }
            
            .home-link:hover {
              background-color: #c2410c;
              transform: translateY(-2px);
              box-shadow: 0 6px 25px rgba(234, 88, 12, 0.4);
            }
            
            @keyframes pulseButton {
              0%, 100% { transform: scale(1); box-shadow: 0 4px 20px rgba(234, 88, 12, 0.3); }
              50% { transform: scale(1.05); box-shadow: 0 6px 25px rgba(234, 88, 12, 0.5); }
            }
          </style>
        </head>
        <body>
          <div class="background">
            <div class="pulse pulse-1"></div>
            <div class="pulse pulse-2"></div>
            <div class="pulse pulse-3"></div>
          </div>
          
          <div class="content">
            <h1>URL Not Found</h1>
            <p>The short URL you're trying to access doesn't exist or has been removed.</p>
          </div>
        </body>
        </html>
      `);
    }

    // Check expiration
    if (urlDoc.expiresAt && new Date() > urlDoc.expiresAt) {
      return res.status(410).send(`
        <!DOCTYPE html>
        <html lang="en">
        <head>
          <meta charset="UTF-8">
          <meta name="viewport" content="width=device-width, initial-scale=1.0">
          <title>URL Expired</title>
          <style>
            /* Same styles as above */
            @import url('https://fonts.googleapis.com/css2?family=Inter:wght@400;500;600;700&display=swap');
            
            * {
              margin: 0;
              padding: 0;
              box-sizing: border-box;
            }
            
            body {
              font-family: 'Inter', sans-serif;
              background-color: #000;
              color: #fff;
              min-height: 100vh;
              display: flex;
              flex-direction: column;
              align-items: center;
              justify-content: center;
              text-align: center;
              padding: 2rem;
              overflow: hidden;
              position: relative;
            }
            
            .background {
              position: absolute;
              inset: 0;
              overflow: hidden;
              z-index: -1;
            }
            
            .pulse {
              position: absolute;
              border-radius: 50%;
              mix-blend-mode: multiply;
              filter: blur(40px);
              opacity: 0.1;
              animation: pulse 8s infinite ease-in-out;
            }
            
            .pulse-1 {
              width: 80vw;
              height: 80vw;
              background-color: #ea580c;
              top: -40vh;
              right: -40vw;
              animation-delay: 0s;
            }
            
            .pulse-2 {
              width: 70vw;
              height: 70vw;
              background-color: #c2410c;
              bottom: -30vh;
              left: -30vw;
              animation-delay: 2s;
            }
            
            .pulse-3 {
              width: 60vw;
              height: 60vw;
              background-color: #9a3412;
              top: 50%;
              left: 50%;
              transform: translate(-50%, -50%);
              animation-delay: 4s;
            }
            
            @keyframes pulse {
              0%, 100% { opacity: 0.05; transform: scale(1); }
              50% { opacity: 0.15; transform: scale(1.1); }
            }
            
            .content {
              max-width: 600px;
              z-index: 10;
              animation: fadeIn 0.6s ease-out;
            }
            
            @keyframes fadeIn {
              from { opacity: 0; transform: translateY(20px); }
              to { opacity: 1; transform: translateY(0); }
            }
            
            h1 {
              font-size: 3rem;
              font-weight: 700;
              margin-bottom: 1.5rem;
              color: #ea580c;
              text-shadow: 0 0 20px rgba(234, 88, 12, 0.3);
            }
            
            p {
              font-size: 1.25rem;
              color: #d1d5db;
              margin-bottom: 2.5rem;
              line-height: 1.6;
            }
            
            .home-link {
              display: inline-block;
              background-color: #ea580c;
              color: white;
              font-weight: 600;
              font-size: 1.1rem;
              padding: 0.9rem 2.5rem;
              border-radius: 1.5rem;
              text-decoration: none;
              transition: all 0.3s ease;
              box-shadow: 0 4px 20px rgba(234, 88, 12, 0.3);
              animation: pulseButton 2s infinite;
            }
            
            .home-link:hover {
              background-color: #c2410c;
              transform: translateY(-2px);
              box-shadow: 0 6px 25px rgba(234, 88, 12, 0.4);
            }
            
            @keyframes pulseButton {
              0%, 100% { transform: scale(1); box-shadow: 0 4px 20px rgba(234, 88, 12, 0.3); }
              50% { transform: scale(1.05); box-shadow: 0 6px 25px rgba(234, 88, 12, 0.5); }
            }
            
            .expiry-date {
              display: inline-block;
              margin-top: 1rem;
              padding: 0.5rem 1.5rem;
              background-color: rgba(234, 88, 12, 0.1);
              border-radius: 999px;
              color: #f97316;
              font-weight: 500;
            }
          </style>
        </head>
        <body>
          <div class="background">
            <div class="pulse pulse-1"></div>
            <div class="pulse pulse-2"></div>
            <div class="pulse pulse-3"></div>
          </div>
          
          <div class="content">
            <h1>URL Expired</h1>
            <p>This short URL has expired and is no longer accessible.</p>
            <div class="expiry-date">
              Expired on: ${new Date(urlDoc.expiresAt).toLocaleDateString()}
            </div>
          </div>
        </body>
        </html>
      `);
    }

    // Check one-time URL status
    if (urlDoc.oneClickDestroy && urlDoc.clicked) {
      return res.status(410).send(`
        <!DOCTYPE html>
        <html lang="en">
        <head>
          <meta charset="UTF-8">
          <meta name="viewport" content="width=device-width, initial-scale=1.0">
          <title>URL Destroyed</title>
          <style>
            /* Same styles as above */
            @import url('https://fonts.googleapis.com/css2?family=Inter:wght@400;500;600;700&display=swap');
            
            * {
              margin: 0;
              padding: 0;
              box-sizing: border-box;
            }
            
            body {
              font-family: 'Inter', sans-serif;
              background-color: #000;
              color: #fff;
              min-height: 100vh;
              display: flex;
              flex-direction: column;
              align-items: center;
              justify-content: center;
              text-align: center;
              padding: 2rem;
              overflow: hidden;
              position: relative;
            }
            
            .background {
              position: absolute;
              inset: 0;
              overflow: hidden;
              z-index: -1;
            }
            
            .pulse {
              position: absolute;
              border-radius: 50%;
              mix-blend-mode: multiply;
              filter: blur(40px);
              opacity: 0.1;
              animation: pulse 8s infinite ease-in-out;
            }
            
            .pulse-1 {
              width: 80vw;
              height: 80vw;
              background-color: #ea580c;
              top: -40vh;
              right: -40vw;
              animation-delay: 0s;
            }
            
            .pulse-2 {
              width: 70vw;
              height: 70vw;
              background-color: #c2410c;
              bottom: -30vh;
              left: -30vw;
              animation-delay: 2s;
            }
            
            .pulse-3 {
              width: 60vw;
              height: 60vw;
              background-color: #9a3412;
              top: 50%;
              left: 50%;
              transform: translate(-50%, -50%);
              animation-delay: 4s;
            }
            
            @keyframes pulse {
              0%, 100% { opacity: 0.05; transform: scale(1); }
              50% { opacity: 0.15; transform: scale(1.1); }
            }
            
            .content {
              max-width: 600px;
              z-index: 10;
              animation: fadeIn 0.6s ease-out;
            }
            
            @keyframes fadeIn {
              from { opacity: 0; transform: translateY(20px); }
              to { opacity: 1; transform: translateY(0); }
            }
            
            h1 {
              font-size: 3rem;
              font-weight: 700;
              margin-bottom: 1.5rem;
              color: #ea580c;
              text-shadow: 0 0 20px rgba(234, 88, 12, 0.3);
            }
            
            p {
              font-size: 1.25rem;
              color: #d1d5db;
              margin-bottom: 2.5rem;
              line-height: 1.6;
            }
            
            .home-link {
              display: inline-block;
              background-color: #ea580c;
              color: white;
              font-weight: 600;
              font-size: 1.1rem;
              padding: 0.9rem 2.5rem;
              border-radius: 1.5rem;
              text-decoration: none;
              transition: all 0.3s ease;
              box-shadow: 0 4px 20px rgba(234, 88, 12, 0.3);
              animation: pulseButton 2s infinite;
            }
            
            .home-link:hover {
              background-color: #c2410c;
              transform: translateY(-2px);
              box-shadow: 0 6px 25px rgba(234, 88, 12, 0.4);
            }
            
            @keyframes pulseButton {
              0%, 100% { transform: scale(1); box-shadow: 0 4px 20px rgba(234, 88, 12, 0.3); }
              50% { transform: scale(1.05); box-shadow: 0 6px 25px rgba(234, 88, 12, 0.5); }
            }
            
            .explosion {
              font-size: 4rem;
              margin-bottom: 1.5rem;
              display: inline-block;
              animation: explode 1s ease-out;
            }
            
            @keyframes explode {
              0% { transform: scale(0); opacity: 0; }
              70% { transform: scale(1.2); opacity: 1; }
              100% { transform: scale(1); opacity: 1; }
            }
          </style>
        </head>
        <body>
          <div class="background">
            <div class="pulse pulse-1"></div>
            <div class="pulse pulse-2"></div>
            <div class="pulse pulse-3"></div>
          </div>
          
          <div class="content">
            <div class="explosion">💥</div>
            <h1>URL Destroyed</h1>
            <p>This was a one-time use URL and has been destroyed after access.</p>
          </div>
        </body>
        </html>
      `);
    }

    // Handle one-click destruction
    if (urlDoc.oneClickDestroy && !urlDoc.clicked) {
      const result = await ShortUrl.updateOne(
        { _id: urlDoc._id, clicked: false },
        { $set: { clicked: true } }
      );
      
      if (result.modifiedCount === 0) {
        return res.status(410).send(`
          <!DOCTYPE html>
          <html lang="en">
          <head>
            <meta charset="UTF-8">
            <meta name="viewport" content="width=device-width, initial-scale=1.0">
            <title>URL Already Used</title>
            <style>
              /* Same styles as above */
              @import url('https://fonts.googleapis.com/css2?family=Inter:wght@400;500;600;700&display=swap');
              
              * {
                margin: 0;
                padding: 0;
                box-sizing: border-box;
              }
              
              body {
                font-family: 'Inter', sans-serif;
                background-color: #000;
                color: #fff;
                min-height: 100vh;
                display: flex;
                flex-direction: column;
                align-items: center;
                justify-content: center;
                text-align: center;
                padding: 2rem;
                overflow: hidden;
                position: relative;
              }
              
              .background {
                position: absolute;
                inset: 0;
                overflow: hidden;
                z-index: -1;
              }
              
              .pulse {
                position: absolute;
                border-radius: 50%;
                mix-blend-mode: multiply;
                filter: blur(40px);
                opacity: 0.1;
                animation: pulse 8s infinite ease-in-out;
              }
              
              .pulse-1 {
                width: 80vw;
                height: 80vw;
                background-color: #ea580c;
                top: -40vh;
                right: -40vw;
                animation-delay: 0s;
              }
              
              .pulse-2 {
                width: 70vw;
                height: 70vw;
                background-color: #c2410c;
                bottom: -30vh;
                left: -30vw;
                animation-delay: 2s;
              }
              
              .pulse-3 {
                width: 60vw;
                height: 60vw;
                background-color: #9a3412;
                top: 50%;
                left: 50%;
                transform: translate(-50%, -50%);
                animation-delay: 4s;
              }
              
              @keyframes pulse {
                0%, 100% { opacity: 0.05; transform: scale(1); }
                50% { opacity: 0.15; transform: scale(1.1); }
              }
              
              .content {
                max-width: 600px;
                z-index: 10;
                animation: fadeIn 0.6s ease-out;
              }
              
              @keyframes fadeIn {
                from { opacity: 0; transform: translateY(20px); }
                to { opacity: 1; transform: translateY(0); }
              }
              
              h1 {
                font-size: 3rem;
                font-weight: 700;
                margin-bottom: 1.5rem;
                color: #ea580c;
                text-shadow: 0 0 20px rgba(234, 88, 12, 0.3);
              }
              
              p {
                font-size: 1.25rem;
                color: #d1d5db;
                margin-bottom: 2.5rem;
                line-height: 1.6;
              }
              
              .home-link {
                display: inline-block;
                background-color: #ea580c;
                color: white;
                font-weight: 600;
                font-size: 1.1rem;
                padding: 0.9rem 2.5rem;
                border-radius: 1.5rem;
                text-decoration: none;
                transition: all 0.3s ease;
                box-shadow: 0 4px 20px rgba(234, 88, 12, 0.3);
                animation: pulseButton 2s infinite;
              }
              
              .home-link:hover {
                background-color: #c2410c;
                transform: translateY(-2px);
                box-shadow: 0 6px 25px rgba(234, 88, 12, 0.4);
              }
              
              @keyframes pulseButton {
                0%, 100% { transform: scale(1); box-shadow: 0 4px 20px rgba(234, 88, 12, 0.3); }
                50% { transform: scale(1.05); box-shadow: 0 6px 25px rgba(234, 88, 12, 0.5); }
              }
            </style>
          </head>
          <body>
            <div class="background">
              <div class="pulse pulse-1"></div>
              <div class="pulse pulse-2"></div>
              <div class="pulse pulse-3"></div>
            </div>
            
            <div class="content">
              <h1>URL Already Used</h1>
              <p>This one-time URL has already been accessed and destroyed.</p>
            </div>
          </body>
          </html>
        `);
      }
    }

    res.redirect(urlDoc.originalUrl);
  } catch (error) {
    console.error(error);
    return res.status(500).send(`
      <!DOCTYPE html>
      <html lang="en">
      <head>
        <meta charset="UTF-8">
        <meta name="viewport" content="width=device-width, initial-scale=1.0">
        <title>Server Error</title>
        <style>
          /* Same styles as above */
          @import url('https://fonts.googleapis.com/css2?family=Inter:wght@400;500;600;700&display=swap');
          
          * {
            margin: 0;
            padding: 0;
            box-sizing: border-box;
          }
          
          body {
            font-family: 'Inter', sans-serif;
            background-color: #000;
            color: #fff;
            min-height: 100vh;
            display: flex;
            flex-direction: column;
            align-items: center;
            justify-content: center;
            text-align: center;
            padding: 2rem;
            overflow: hidden;
            position: relative;
          }
          
          .background {
            position: absolute;
            inset: 0;
            overflow: hidden;
            z-index: -1;
          }
          
          .pulse {
            position: absolute;
            border-radius: 50%;
            mix-blend-mode: multiply;
            filter: blur(40px);
            opacity: 0.1;
            animation: pulse 8s infinite ease-in-out;
          }
          
          .pulse-1 {
            width: 80vw;
            height: 80vw;
            background-color: #ea580c;
            top: -40vh;
            right: -40vw;
            animation-delay: 0s;
          }
          
          .pulse-2 {
            width: 70vw;
            height: 70vw;
            background-color: #c2410c;
            bottom: -30vh;
            left: -30vw;
            animation-delay: 2s;
          }
          
          .pulse-3 {
            width: 60vw;
            height: 60vw;
            background-color: #9a3412;
            top: 50%;
            left: 50%;
            transform: translate(-50%, -50%);
            animation-delay: 4s;
          }
          
          @keyframes pulse {
            0%, 100% { opacity: 0.05; transform: scale(1); }
            50% { opacity: 0.15; transform: scale(1.1); }
          }
          
          .content {
            max-width: 600px;
            z-index: 10;
            animation: fadeIn 0.6s ease-out;
          }
          
          @keyframes fadeIn {
            from { opacity: 0; transform: translateY(20px); }
            to { opacity: 1; transform: translateY(0); }
          }
          
          h1 {
            font-size: 3rem;
            font-weight: 700;
            margin-bottom: 1.5rem;
            color: #ea580c;
            text-shadow: 0 0 20px rgba(234, 88, 12, 0.3);
          }
          
          p {
            font-size: 1.25rem;
            color: #d1d5db;
            margin-bottom: 2.5rem;
            line-height: 1.6;
          }
          
          .home-link {
            display: inline-block;
            background-color: #ea580c;
            color: white;
            font-weight: 600;
            font-size: 1.1rem;
            padding: 0.9rem 2.5rem;
            border-radius: 1.5rem;
            text-decoration: none;
            transition: all 0.3s ease;
            box-shadow: 0 4px 20px rgba(234, 88, 12, 0.3);
            animation: pulseButton 2s infinite;
          }
          
          .home-link:hover {
            background-color: #c2410c;
            transform: translateY(-2px);
            box-shadow: 0 6px 25px rgba(234, 88, 12, 0.4);
          }
          
          @keyframes pulseButton {
            0%, 100% { transform: scale(1); box-shadow: 0 4px 20px rgba(234, 88, 12, 0.3); }
            50% { transform: scale(1.05); box-shadow: 0 6px 25px rgba(234, 88, 12, 0.5); }
          }
        </style>
      </head>
      <body>
        <div class="background">
          <div class="pulse pulse-1"></div>
          <div class="pulse pulse-2"></div>
          <div class="pulse pulse-3"></div>
        </div>
        
        <div class="content">
          <h1>Server Error</h1>
          <p>Something went wrong while processing your request. Please try again later.</p>
        </div>
      </body>
      </html>
    `);
  }
};

export const healthCheck = (req, res) => {
  res.status(200).json({ message: "server is healthy" });
};