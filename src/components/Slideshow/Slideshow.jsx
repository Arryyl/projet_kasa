// Import des styles et dépendances
import "./Slideshow.scss";
import React, { useState } from "react";
import { ChevronLeft } from "../Icons/ChevronLeft";
import { ChevronRight } from "../Icons/ChevronRight";

export default function Slideshow({ images }) { // Definition du composant et son prop
  const [currentImageIndex, setCurrentImageIndex] = useState(0); // initialisation de létat initial / 0 = premiere image

  // Fonctions de navigation entre les images
  const goToPreviousImage = () => { // Précedente
    setCurrentImageIndex((prevIndex) =>
      prevIndex === 0 ? images.length - 1 : prevIndex - 1
    );
  };

  const goToNextImage = () => { // Suivante
    setCurrentImageIndex((prevIndex) =>
      prevIndex === images.length - 1 ? 0 : prevIndex + 1
    );
  };

  // Verif si vous avez plus d'une image
  const shouldShowControls = images.length > 1;

  return (
    <div className="slideshow">
      <div className="image-container">
        <img
          src={images[currentImageIndex]}
          alt={`Image ${currentImageIndex + 1}`}
        />
        {shouldShowControls && (
          <div className="nbr">
            {currentImageIndex + 1}/{images.length}
          </div>
        )}
      </div>
      {shouldShowControls && (
        <div className="arrows">
          <div className="arrow left" onClick={goToPreviousImage}>
            <ChevronLeft />
          </div>
          <div className="arrow right" onClick={goToNextImage}>
            <ChevronRight />
          </div>
        </div>
      )}
    </div>
  );
}
