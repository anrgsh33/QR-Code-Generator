import express from "express";
import qr from "qr-image";
import cors from "cors";

const app = express();
const port = 5000;

app.use(cors());

app.get("/api/", (req, res) => {
  const url = req.query.url; // URL is passed as a query parameter

  const qrCode = qr.image(url, { type: "png" }); // Generate QR code
  res.type("png"); // Set the content type for the response
  qrCode.pipe(res); // Pipe the QR code image to the response
});

app.listen(port, () => {
  console.log(`Server is running on port ${port}....`);
});
