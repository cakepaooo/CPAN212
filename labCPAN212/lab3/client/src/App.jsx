import { useState } from "react";
import axios from "axios";

const App = () => {
    const [images, setImages] = useState([]);
    const [dogImage, setDogImage] = useState(null);
    const [uploadImages, setUploadImages] = useState([]);
    const [uploadedImageUrls, setUploadedImageUrls] = useState([]);
    const [uploadedDogImage, setUploadedDogImage] = useState("");

    // Fetch multiple random images
    const fetchRandomImages = async () => {
        try {
            const response = await axios.get("http://localhost:5000/api/random-images");
            setImages(response.data);
        } catch (error) {
            console.error("Error fetching images:", error);
        }
    };

    // Fetch a random dog image
    const fetchDogImage = async () => {
        try {
            const response = await axios.get("http://localhost:5000/api/random-dog");
            setDogImage(response.data.imageUrl);
        } catch (error) {
            console.error("Error fetching dog image:", error);
        }
    };

    // Handle file selection for multiple image uploads
    const handleMultipleFileChange = (event) => {
        setUploadImages(event.target.files);
    };

    // Upload multiple images
    const uploadMultipleImages = async () => {
        if (uploadImages.length === 0) {
            alert("Please select images first.");
            return;
        }

        const formData = new FormData();
        Array.from(uploadImages).forEach((file) => {
            formData.append("images", file);
        });

        try {
            const response = await axios.post("http://localhost:5000/api/upload-multiple", formData, {
                headers: { "Content-Type": "multipart/form-data" }
            });
            setUploadedImageUrls(response.data.uploadedImages);
        } catch (error) {
            console.error("Error uploading images:", error);
        }
    };

    // Handle file selection for dog image upload
    const handleDogFileChange = (event) => {
        setUploadedDogImage(event.target.files[0]);
    };

    // Upload a dog image
    const uploadDogImage = async () => {
        if (!uploadedDogImage) {
            alert("Please select an image first.");
            return;
        }

        const formData = new FormData();
        formData.append("dogImage", uploadedDogImage);

        try {
            const response = await axios.post("http://localhost:5000/api/upload-dog", formData, {
                headers: { "Content-Type": "multipart/form-data" }
            });
            setUploadedDogImage(response.data.imageUrl);
        } catch (error) {
            console.error("Error uploading dog image:", error);
        }
    };

    return (
        <div style={{ textAlign: "center", padding: "20px" }}>
            <h1>Image Fetching and Upload</h1>

            <button onClick={fetchRandomImages}>Get Random Images</button>
            <div style={{ display: "flex", justifyContent: "center", gap: "10px", marginTop: "10px" }}>
                {images.map((img, index) => (
                    <img key={index} src={`http://localhost:5000${img}`} alt="Random" width="200px" height="300px" />
                ))}
            </div>

            <hr />

            <h2>Fetch Random Dog Image</h2>
            <button onClick={fetchDogImage}>Get Dog Image</button>
            {dogImage && <img src={dogImage} alt="Random Dog" width="200px" height="200px" />}

            <hr />

            <h2>Upload Multiple Images</h2>
            <input type="file" multiple onChange={handleMultipleFileChange} />
            <button onClick={uploadMultipleImages}>Upload Images</button>

            <div>
                {uploadedImageUrls.map((img, index) => (
                    <img key={index} src={`http://localhost:5000${img}`} alt="Uploaded" width="200px" height="200px" />
                ))}
            </div>

            <hr />

            <h2>Upload Dog Image</h2>
            <input type="file" onChange={handleDogFileChange} />
            <button onClick={uploadDogImage}>Upload Dog Image</button>

            {uploadedDogImage && (
                <div>
                    <h3>Uploaded Dog Image:</h3>
                    <img src={`http://localhost:5000${uploadedDogImage}`} alt="Uploaded Dog" width="200px" height="200px" />
                </div>
            )}
        </div>
    );
};

export default App;
