import React from "react";
import { saveAs } from "file-saver";
const DownloadVideo = () => {
  const handleDownload = async () => {
    const url = "https://media.icc-cricket.com/dev/video/29779994-movie1.mp4";
    try {
      const response = await fetch(url);
      if (!response.ok) throw new Error("Network response was not ok");
      const blob = await response.blob();
      saveAs(blob, "movie1.mp4");
    } catch (error) {
      console.error("Error downloading the video:", error);
    }
  };
  return <button onClick={handleDownload}>Download Video</button>;
};
export default DownloadVideo;
