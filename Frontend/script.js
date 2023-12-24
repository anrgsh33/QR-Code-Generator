function makeRequest(url) {
  // Fetch the QR code image from the backend
  fetch(`http://localhost:5000/api/?url=${encodeURIComponent(url)}`)
    .then((response) => response.blob())
    .then((blob) => {
      // Creating a blob URL for the QR code image
      const qrCodeUrl = URL.createObjectURL(blob);
      if (document.getElementById("image") == null) {
        const imgElement = document.createElement("img");
        imgElement.src = qrCodeUrl;
        imgElement.alt = "Image from backend";
        imgElement.id = "image";
        document.getElementById("result").appendChild(imgElement);
      } else {
        document.getElementById("image").src = qrCodeUrl;
      }
    })
    .catch((error) => console.error("Error fetching QR code:", error));
}

function loadUrl() {
  const urlInput = document.getElementById("url-input");
  const url = urlInput.value;
  urlInput.value = "";
  makeRequest(url);
}
