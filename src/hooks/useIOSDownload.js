import { useState } from "react";

import axios from "axios";

const useIOSDownload = () => {
  const [downloading, setDownloading] = useState(false);

  const downloadFile = async (event, videoURL) => {
    event.preventDefault();
    const videoName = videoURL.split("/").pop() || "video.mp4";
    setDownloading(true);

    try {
      const response = await axios.get(videoURL, {
        responseType: "blob",
      });
      // const blob = new Blob([response.data], {
      //   type: response.headers["content-type"],
      // });
      const blobUrl = URL.createObjectURL(response.data);
      const anchor = document.createElement("a");
      anchor.href = blobUrl;
      anchor.download = videoName;
      document.body.appendChild(anchor);
      anchor.click();
      document.body.removeChild(anchor);
      URL.revokeObjectURL(blobUrl);
    } catch (error) {
      console.log(error);
    } finally {
      setDownloading(false);
    }
  };
  return { downloading, downloadFile };
};
export default useIOSDownload;
