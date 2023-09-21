import React from "react";
import "./Banner.scss";

export default function Banner({ imageUrl, slogan }) {
  return (
    <div className="banner-container">
      <img className="banner-image" src={imageUrl} alt="Banner" />
      <div className="slogan">{slogan}</div>
    </div>
  );
}