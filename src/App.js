import React from "react";
const App = () => {
  const downloadVideo = async (event) => {
    event.preventDefault();
    const url = "https://media.icc-cricket.com/dev/video/29779994-movie1.mp4";
    try {
      const response = await fetch(url);
      if (!response.ok) throw new Error("Network response was not ok");
      // Create a ReadableStream
      const reader = response.body.getReader();
      const stream = new ReadableStream({
        start(controller) {
          function push() {
            reader.read().then(({ done, value }) => {
              if (done) {
                controller.close();
                return;
              }
              controller.enqueue(value);
              push();
            });
          }
          push();
        },
      });
      // Create a Blob from the stream and download
      const newResponse = new Response(stream);
      const blob = await newResponse.blob();
      const blobUrl = URL.createObjectURL(blob);
      const anchor = document.createElement("a");
      anchor.href = blobUrl;
      anchor.download = "movie1.mp4";
      document.body.appendChild(anchor);
      anchor.click();
      document.body.removeChild(anchor);
      URL.revokeObjectURL(blobUrl);
    } catch (error) {
      console.error("There was a problem with the fetch operation:", error);
    }
  };
  return (
    <a
      href="https://media.icc-cricket.com/dev/video/29779994-movie1.mp4"
      onClick={downloadVideo}
    >
      Download Video
    </a>
  );
};
export default App;
