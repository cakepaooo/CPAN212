import express from "express";
import cors from "cors";
import _ from "lodash";
import multer from "multer";
import axios from "axios";
import path from "path";
import { fileURLToPath } from "url";
import { dirname } from "path";

const __filename = fileURLToPath(import.meta.url);
const __dirname = dirname(__filename);

const app = express();
const PORT = 5000;

// Middleware
app.use(cors());
app.use(express.json());
app.use("/uploads", express.static("uploads"));


// Sample images array (replace with real image paths)
const images = [
 [
    "/uploads/image1.jpg",
    "/uploads/image2.jpg",
    "/uploads/image3.jpg"
]

];
// Route to get multiple random images (up to 3)
app.get("/api/random-images", (req, res) => {
    const randomImages = _.sampleSize(images, 3);
    res.json(randomImages);
});

// Fetch a random dog image from an external API
app.get("/api/random-dog", async (req, res) => {
    try {
        const response = await axios.get("https://dog.ceo/api/breeds/image/random");
        res.json({ imageUrl: response.data.message });
    } catch (error) {
        res.status(500).json({ message: "Error fetching dog image" });
    }
});

// Multer storage setup for image uploads
const storage = multer.diskStorage({
    destination: "./uploads",
    filename: (req, file, cb) => {
        cb(null, file.fieldname + "-" + Date.now() + path.extname(file.originalname));
    }
});
const upload = multer({ storage });

// Upload multiple images
app.post("/api/upload-multiple", upload.array("images", 3), (req, res) => {
    if (!req.files || req.files.length === 0) {
        return res.status(400).json({ message: "No files uploaded" });
    }
    const imagePaths = req.files.map(file => `/uploads/${file.filename}`);
    res.json({ uploadedImages: imagePaths });
});

// Upload a dog image
app.post("/api/upload-dog", upload.single("dogImage"), (req, res) => {
    if (!req.file) {
        return res.status(400).json({ message: "No file uploaded" });
    }
    res.json({ imageUrl: `/uploads/${req.file.filename}` });
});

// Start server
app.listen(PORT, () => {
    console.log(`Server running on http://localhost:${PORT}`);
});
