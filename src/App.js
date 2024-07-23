import React from "react";
const App = () => {
  const handleDownload = (event) => {
    event.preventDefault(); // Prevent default anchor behavior
    const videoUrl =
      "https://media.icc-cricket.com/dev/video/29779994-movie1.mp4";
    const fileName = videoUrl.split("/").pop(); // Extract filename from URL
    // Create an iframe to handle the download in Safari
    const iframe = document.createElement("iframe");
    iframe.style.display = "none";
    iframe.src = videoUrl;
    document.body.appendChild(iframe);
    // Remove the iframe after a short delay
    setTimeout(() => {
      document.body.removeChild(iframe);
    }, 100);
  };
  return (
    <a href="#" onClick={handleDownload}>
      Download Video
    </a>
  );
};
export default App;
