import React, { useState } from "react";
const App = () => {
  const device = /iPad|iPhone|iPod/.test(navigator.userAgent) || false;
  const downloadVideo = async (event) => {
    event.preventDefault();
    const url = "https://media.icc-cricket.com/dev/video/29779994-movie1.mp4";
    let fileName = url.split("/").pop();

    try {
      // Fetch the file as a blob
      const response = await fetch(url);
      if (!response.ok) throw new Error("Network response was not ok");
      const blob = await response.blob();
      // Create a URL for the blob
      const blobUrl = URL.createObjectURL(blob);
      const anchor = document.createElement("a");
      anchor.href = blobUrl;
      anchor.download = fileName;
      document.body.appendChild(anchor);
      anchor.click();
      // Clean up
      document.body.removeChild(anchor);
      URL.revokeObjectURL(blobUrl);
    } catch (error) {
      console.error("There was a problem with the fetch operation:", error);
    }
  };

  return (
    <>
      <a href="#" onClick={downloadVideo}>
        Download Video
      </a>
      <div>Device : {device ? "IPHONE" : "NOT IPHONE"}</div>
    </>
  );
};
export default App;
