import React from "react";
import ParentComponent from "./ParentComponent";

function ShareToWhatsApp() {
  const phoneNumber = 9462200767;
  const text = "Your message"; // Message to share
  const url =
    "https://moneyview.in/images/moneyview-ct-campaign-banner-desktop.png"; //

  const handleShareToWhatsApp = () => {
    const encodedText = encodeURIComponent(text);
    const encodedUrlBase64 = btoa(encodeURIComponent(url)); // Encoding URL to base64
    const whatsappLink = `https://wa.me/${phoneNumber}/?text=${encodedText}%20${encodedUrlBase64}`;
    window.open(whatsappLink, "_blank");
  };

  return (
    <>
      <button onClick={handleShareToWhatsApp}>Share to WhatsApp</button>
      <p>below is for web share api</p>
      <ParentComponent />
    </>
  );
}

export default ShareToWhatsApp;
