import React, { useState } from "react";
import useIOSDownload from "./hooks/useIOSDownload";
const App = () => {
  const isIOSDevice = /iPad|iPhone|iPod/.test(navigator.userAgent);
  const { downloading, downloadFile } = useIOSDownload();
  const videoURL =
    "https://www.learningcontainer.com/wp-content/uploads/2020/05/sample-mp4-file.mp4";
  return (
    <>
      <a
        href={videoURL}
        onClick={(e) => {
          downloadFile(e, videoURL);
        }}
      >
        Download Video
        <p>{downloading && "DOWNLOADING ......"}</p>
      </a>
      <div>Device : {isIOSDevice ? "IPHONE" : "NOT IPHONE"}</div>
    </>
  );
};
export default App;
