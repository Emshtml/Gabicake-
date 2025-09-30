export default function handler(req, res) {
  res.status(200).json({
    cloudName: process.env.NEXT_PUBLIC_CLOUDINARY_CLOUD_NAME,
    apiKey: process.env.CLOUDINARY_API_KEY ? "✅ OK" : "❌ Faltando",
    folder: process.env.CLOUDINARY_FOLDER,
  });
}
