// Import des styles et dépendances
import "./Collapse.scss";
import React, { useState } from "react";
import { ChevronUp } from "../Icons/ChevronUp";
import { ChevronDown } from "../Icons/ChevronDown";


export default function Collapse({ items, customClass }) { // Definition du composant et ses "props"
  const [isOpen, setIsOpen] = useState([false]); // Inisialisation du "state" par défaut

  const toggleCollapse = (index) => { // Fonction douverture et de fermeture 
    setIsOpen((prevOpenState) => {
      const newOpenState = [...prevOpenState];
      newOpenState[index] = !newOpenState[index];
      return newOpenState;
    });
  };

  return ( // Rendu JSX en format accordéon (Mise en place des composants et utilisation de la fonction togglecollapse)
    <div className={`wrapper ${customClass}`}>
      <div className="accordion">
        {items.map((item, index) => (
          <div className="item" key={index}>
            <div className="title" onClick={() => toggleCollapse(index)}>
              <h2>{item.title}</h2>
              <span className="chevron">
                {isOpen[index] ? <ChevronUp /> : <ChevronDown />}
              </span>
            </div>
            <div className={isOpen[index] ? "content show" : "content"}>
              {item.paragraphe}
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}