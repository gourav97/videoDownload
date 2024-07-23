import React from "react";
const App = () => {
  const downloadVideo = (event) => {
    event.preventDefault();
    const url = "https://media.icc-cricket.com/dev/video/29779994-movie1.mp4";
    const iframe = document.createElement("iframe");
    iframe.style.display = "none";
    iframe.src = url;
    document.body.appendChild(iframe);
    // Clean up after the iframe is added
    setTimeout(() => {
      document.body.removeChild(iframe);
    }, 1000);
  };
  return (
    <a
      href="https://media.icc-cricket.com/dev/video/29779994-movie1.mp4"
      download
      target="_blank"
      //  onClick={downloadVideo}
    >
      Download Video
    </a>
  );
};
export default App;
