import { useState } from "react";

import axios from "axios";

const useIOSDownload = () => {
  const [downloading, setDownloading] = useState(false);

  const downloadFile = async (event, videoURL) => {
    event.preventDefault();
    const videoName = videoURL.split("/").pop() || "video.mp4";
    setDownloading(true);

    try {
      const response = await fetch(videoURL);
      if (!response.ok) throw new Error("Network response was not ok");
      const blob = await response.blob();
      // Create a URL for the blob
      const blobUrl = URL.createObjectURL(blob);
      const anchor = document.createElement("a");
      anchor.href = blobUrl;
      anchor.download = videoName;
      document.body.appendChild(anchor);
      anchor.click();
      document.body.removeChild(anchor);
      URL.revokeObjectURL(blobUrl);
    } catch (error) {
      console.log(error, "eeeee");
    } finally {
      setDownloading(false);
    }
  };
  return { downloading, downloadFile };
};
export default useIOSDownload;
