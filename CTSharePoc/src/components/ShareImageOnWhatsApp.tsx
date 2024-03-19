import React from "react";

function ShareImageOnWhatsApp(props: any) {
  console.log("props", props);
  const { imageUrl, caption } = props;
  console.log("image", imageUrl,caption );
  const shareOnWhatsApp = async () => {
    if (navigator.share) {
      try {
        const response = await fetch(imageUrl);
        const blob = await response.blob();
        const file = new File([blob], "image.jpg", { type: blob.type });

        await navigator.share({
          title: "Share Image",
          text: caption,
          files: [file],
        });
      } catch (error) {
        console.error("Error sharing image:", error);
      }
    } else {
      console.log("Web Share API is not supported in this browser.");
      // Fallback to a different sharing method or display a message to the user
    }
  };

  return (
    <div>
      <button onClick={shareOnWhatsApp}>Share on WhatsApp</button>
    </div>
  );
}

export default ShareImageOnWhatsApp;
