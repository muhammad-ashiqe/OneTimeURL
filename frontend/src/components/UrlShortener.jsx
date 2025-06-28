import React, { useState, useRef, useEffect } from "react";
import {
  Copy,
  Download,
  Link,
  Zap,
  Clock,
  MousePointer,
  Calendar,
  Infinity,
  X,
} from "lucide-react";
import axios from "axios";
import ReactGA from "react-ga4";

const baseApi = "https://onetimeurl.onrender.com/api";

function UrlShortner() {
  const [originalUrl, setOriginalUrl] = useState("");
  const [expiryOption, setExpiryOption] = useState("never");
  const [customDays, setCustomDays] = useState("");
  const [result, setResult] = useState(null);
  const [copied, setCopied] = useState(false);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState("");
  
  const resultRef = useRef(null);

  useEffect(() => {
    if (result && resultRef.current) {
      resultRef.current.scrollIntoView({ behavior: "smooth", block: "center" });
    }
  }, [result]);

  const handleSubmit = async () => {
    if (!originalUrl) {
      setError("Please enter a URL");
      return;
    }

    try {
      new URL(originalUrl);
    } catch (err) {
      setError("Please enter a valid URL");
      return;
    }

    setLoading(true);
    setError("");
    
    try {
      const payload = {
        originalUrl,
        expiryOption,
        customExpiryInDays: expiryOption === "custom" ? customDays : null,
      };

      const { data } = await axios.post(`${baseApi}/url`, payload);

      setResult(data);

      ReactGA.event({
        category: "ShortURL",
        action: "Generate",
        label: data.oneClickDestroy 
          ? "one_click" 
          : (data.expiresAt ? "expiring" : "never")
      });

    } catch (err) {
      console.error("Error:", err);
      setError("Failed to create short URL. Please try again.");
    } finally {
      setLoading(false);
    }
  };

  const copyToClipboard = () => {
    navigator.clipboard.writeText(result.shortUrl);
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };

  const downloadQRCode = () => {
    if (!result.qrCode) return;
    
    const link = document.createElement("a");
    link.href = result.qrCode;
    link.download = `qrcode_${result.shortUrl.split("/").pop()}.png`;
    link.click();
  };

  const clearForm = () => {
    setOriginalUrl("");
    setExpiryOption("never");
    setCustomDays("");
    setResult(null);
    setCopied(false);
    setError("");
  };

  return (
    <div className="min-h-screen bg-black text-white flex flex-col items-center justify-center px-4 py-10 relative overflow-hidden">
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute -top-40 -right-40 w-80 h-80 bg-orange-700 rounded-full mix-blend-multiply filter blur-xl opacity-10 animate-pulse" />
        <div
          className="absolute -bottom-40 -left-40 w-80 h-80 bg-orange-800 rounded-full mix-blend-multiply filter blur-xl opacity-15 animate-pulse"
          style={{ animationDelay: "2s" }}
        />
        <div
          className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-80 h-80 bg-orange-900 rounded-full mix-blend-multiply filter blur-xl opacity-5 animate-pulse"
          style={{ animationDelay: "4s" }}
        />
      </div>

      <div className="relative z-10 w-full max-w-2xl">
        <div className="text-center mb-8">
          <h3 className="text-4xl font-bold mb-4 text-orange-600">
            OneTimeURL
          </h3>
          <p className="text-gray-400 text-md">
            Transform long URLs into sleek, manageable links
          </p>
        </div>

        <div className="bg-white/10 backdrop-blur-lg rounded-3xl border border-white/20 p-8 shadow-2xl">
          <div className="space-y-6">
            {/* URL Input */}
            <div className="space-y-2">
              <label className="text-sm font-medium text-gray-300 flex items-center gap-2">
                <Link className="w-4 h-4" />
                Original URL
              </label>
              <div className="relative">
                <input
                  type="url"
                  placeholder="https://example.com"
                  value={originalUrl}
                  onChange={(e) => setOriginalUrl(e.target.value)}
                  required
                  className="w-full p-4 pr-12 rounded-xl bg-gray-950 text-white placeholder-gray-500 border border-gray-700 focus:border-orange-600 focus:ring-2 focus:ring-orange-600/20 focus:outline-none transition-all duration-300"
                />
                {originalUrl && (
                  <button
                    onClick={() => setOriginalUrl("")}
                    className="absolute right-3 top-1/2 transform -translate-y-1/2 text-gray-400 hover:text-white transition-colors"
                  >
                    <X size={18} />
                  </button>
                )}
              </div>
            </div>

            {/* Expiry Options */}
            <div className="space-y-2">
              <label className="text-sm font-medium text-gray-300 flex items-center gap-2">
                <Clock className="w-4 h-4" />
                Expiration Settings
              </label>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                {[
                  { value: "never", label: "Never Expire", icon: <Infinity className="w-4 h-4" /> },
                  { value: "1", label: "1 Day", icon: <Clock className="w-4 h-4" /> },
                  { value: "7", label: "7 Days", icon: <Calendar className="w-4 h-4" /> },
                  { value: "one_click", label: "One Click", icon: <MousePointer className="w-4 h-4" /> },
                ].map((option) => (
                  <button
                    key={option.value}
                    type="button"
                    onClick={() => setExpiryOption(option.value)}
                    className={`p-3 rounded-xl border flex items-center gap-3 transition-all ${
                      expiryOption === option.value
                        ? "bg-orange-600/20 border-orange-600 text-orange-400 shadow-lg shadow-orange-600/20"
                        : "bg-gray-800/50 border-gray-700 text-gray-300 hover:border-gray-600 hover:bg-gray-800"
                    }`}
                  >
                    {option.icon}
                    <span className="font-medium">{option.label}</span>
                  </button>
                ))}
              </div>

              <button
                type="button"
                onClick={() => setExpiryOption("custom")}
                className={`w-full p-3 rounded-xl border flex items-center gap-3 transition-all ${
                  expiryOption === "custom"
                    ? "bg-orange-600/20 border-orange-600 text-orange-400 shadow-lg shadow-orange-600/20"
                    : "bg-gray-800/50 border-gray-700 text-gray-300 hover:border-gray-600 hover:bg-gray-800"
                }`}
              >
                <Calendar className="w-4 h-4" />
                <span className="font-medium">Custom Duration</span>
              </button>
            </div>

            {expiryOption === "custom" && (
              <div className="space-y-2">
                <label className="text-sm font-medium text-gray-300">
                  Days until expiration
                </label>
                <input
                  type="number"
                  min="1"
                  max="365"
                  value={customDays}
                  onChange={(e) => setCustomDays(e.target.value)}
                  placeholder="Enter number of days"
                  className="w-full p-4 rounded-xl bg-gray-950 text-white placeholder-gray-500 border border-gray-700 focus:border-orange-600 focus:ring-2 focus:ring-orange-600/20 focus:outline-none transition-all duration-300"
                />
              </div>
            )}

            {/* Error Message */}
            {error && (
              <div className="p-3 bg-red-900/30 border border-red-700 rounded-xl text-red-300">
                {error}
              </div>
            )}

            {/* Action Buttons */}
            <div className="grid grid-cols-2 gap-4">
              <button
                onClick={handleSubmit}
                disabled={loading}
                className="p-4 rounded-xl bg-orange-600 hover:bg-orange-700 font-bold text-white transition-all duration-300 flex items-center justify-center gap-2 disabled:opacity-50 disabled:cursor-not-allowed shadow-lg hover:shadow-xl shadow-orange-600/30 hover:shadow-orange-600/40"
              >
                {loading ? (
                  <>
                    <div className="w-5 h-5 border-2 border-white/30 border-t-white rounded-full animate-spin"></div>
                    Generating...
                  </>
                ) : (
                  <>
                    <Zap className="w-5 h-5" />
                    Generate
                  </>
                )}
              </button>
              
              <button
                onClick={clearForm}
                disabled={loading}
                className="p-4 rounded-xl bg-gray-800 hover:bg-gray-700 font-bold text-white transition-all duration-300 flex items-center justify-center gap-2 disabled:opacity-50 disabled:cursor-not-allowed border border-gray-700"
              >
                <X className="w-5 h-5" />
                Clear
              </button>
            </div>
          </div>

          {/* Result Section */}
          {result && (
            <div 
              className="mt-8 p-6 bg-gray-900/50 border border-gray-800 rounded-2xl shadow-inner"
              ref={resultRef}
            >
              <div className="text-center mb-4">
                <h3 className="text-xl font-bold text-white mb-2 flex items-center justify-center gap-2">
                  <Zap className="w-5 h-5 text-orange-600" />
                  Your Short URL is Ready!
                </h3>
                <p className="text-gray-400 text-sm">
                  {result.oneClickDestroy 
                    ? "This URL will be destroyed after first use" 
                    : result.expiresAt
                      ? `Expires on: ${new Date(result.expiresAt).toLocaleDateString()}`
                      : "This URL will never expire"}
                </p>
              </div>

              <div className="space-y-4">
                {/* Short URL display */}
                <div className="bg-gray-950/50 rounded-xl p-4 border border-gray-800">
                  <div className="flex items-center justify-between flex-wrap gap-3">
                    <a
                      href={result.shortUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-orange-500 hover:text-orange-400 underline break-all font-mono text-lg transition-colors duration-300"
                    >
                      {result.shortUrl}
                    </a>
                    <button
                      onClick={copyToClipboard}
                      className="flex items-center gap-2 px-4 py-2 bg-gray-800 hover:bg-gray-700 rounded-lg transition-all duration-300 text-white border border-gray-700"
                    >
                      {copied ? (
                        <>
                          <div className="w-4 h-4 text-orange-500">✓</div>
                          Copied!
                        </>
                      ) : (
                        <>
                          <Copy className="w-4 h-4" />
                          Copy
                        </>
                      )}
                    </button>
                  </div>
                </div>

                {/* QR Code */}
                {result.qrCode && (
                  <div className="text-center">
                    <p className="text-gray-400 mb-3 font-medium">
                      Scan QR Code for quick access
                    </p>
                    <div className="inline-block p-4 bg-white rounded-xl">
                      <img
                        src={result.qrCode}
                        alt="QR Code"
                        className="w-40 h-40 rounded-lg"
                      />
                    </div>
                    <div className="mt-4 flex flex-wrap justify-center gap-4">
                      <button
                        onClick={downloadQRCode}
                        className="inline-flex items-center gap-2 px-6 py-3 bg-orange-600 hover:bg-orange-700 rounded-xl text-white font-medium transition-all duration-300 shadow-lg hover:shadow-xl shadow-orange-600/30"
                      >
                        <Download className="w-4 h-4" />
                        Download QR Code
                      </button>
                      
                      <button
                        onClick={clearForm}
                        className="inline-flex items-center gap-2 px-6 py-3 bg-gray-800 hover:bg-gray-700 rounded-xl text-white font-medium transition-all duration-300 shadow-lg hover:shadow-xl shadow-gray-800/30"
                      >
                        <X className="w-4 h-4" />
                        Create Another
                      </button>
                    </div>
                  </div>
                )}
              </div>
            </div>
          )}
        </div>

        <div className="text-center mt-8 text-gray-500">
          <p className="text-sm">
            Secure • Fast • Reliable URL Shortening
          </p>
        </div>
      </div>
    </div>
  );
}

export default UrlShortner;