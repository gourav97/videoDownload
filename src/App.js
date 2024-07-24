import React, { useState } from "react";
const App = () => {
  const [sharableFiles, setsharableFiles] = useState("");
  const [showButton, setshowButton] = useState(false);

  const device = /iPad|iPhone|iPod/.test(navigator.userAgent) || false;
  console.log(device);

  const downloadVideo = async (event) => {
    event.preventDefault();
    const url = "https://media.icc-cricket.com/dev/video/29779994-movie1.mp4";

    const fileName = "29779994-movie1.mp4";

    fetch(url)
      .then((response) => response.blob())
      .then((blob) => {
        let newsharableFiles = [
          new File([blob], fileName, { type: "video/mp4" }),
        ];

        setsharableFiles(newsharableFiles);
        let newshowButton = navigator.canShare?.({ files: sharableFiles });
        setshowButton(newshowButton);
      })
      .catch(() => {
        setshowButton(false);
      });

    console.log(showButton, sharableFiles, "fileee");

    // try {
    //   // Fetch the file as a blob
    //   const response = await fetch(url);
    //   if (!response.ok) throw new Error("Network response was not ok");
    //   const blob = await response.blob();
    //   // Create a URL for the blob
    //   const blobUrl = URL.createObjectURL(blob);
    //   const anchor = document.createElement("a");
    //   anchor.href = blobUrl;
    //   anchor.download = "movie1.mp4";
    //   document.body.appendChild(anchor);
    //   anchor.click();
    //   // Clean up
    //   document.body.removeChild(anchor);
    //   URL.revokeObjectURL(blobUrl);
    // } catch (error) {
    //   console.error("There was a problem with the fetch operation:", error);
    // }
  };

  const handleDownload = () => {
    navigator.share({
      files: sharableFiles,
      text: "Generated using Audapt",
    });
  };
  return (
    <>
      <a
        href="https://media.icc-cricket.com/dev/video/29779994-movie1.mp4"
        onClick={downloadVideo}
      >
        Download Video
      </a>
      <>Device : {device ? "IPHONE" : "NOT IPHONE"}</>
      {showButton && <div onClick={handleDownload}>DOWNLOADING..........</div>}
    </>
  );
};
export default App;
