import React, { useState } from "react";
import ShareImageOnWhatsApp from "./ShareImageOnWhatsApp";

function ParentComponent() {
  const [imageUrl, setImageUrl] = useState("https://moneyview.in/images/moneyview-ct-campaign-banner-mobile.png");
  const [caption, setCaption] = useState("This is a sample caption");
  const [phoneNumber, setPhoneNumber] = useState("9462200767");

  const handleImageUrlChange = (e) => {
    setImageUrl(e.target.value);
  };

  const handleCaptionChange = (e) => {
    setCaption(e.target.value);
  };

  const handlePhoneNumberChange = (e) => {
    setPhoneNumber(e.target.value);
  };

  return (
    <div>
      <input type="text" placeholder="Enter image URL" value={imageUrl} onChange={handleImageUrlChange} />
      <input type="text" placeholder="Enter caption" value={caption} onChange={handleCaptionChange} />
      <input type="text" placeholder="Enter phone number" value={phoneNumber} onChange={handlePhoneNumberChange} />
      <ShareImageOnWhatsApp imageUrl={imageUrl} caption={caption} phoneNumber={phoneNumber} />
    </div>
  );
}

export default ParentComponent;
