// Import des styles et dépendances
import "./Collapse.scss";
import React, { useState } from "react";
import ChevronUp  from "../../assets/arrow_down.svg";


export default function Collapse({ items, customClass }) { // Definition du composant et ses "props"
  const [toggle, setToggle] = useState(false);

  const toggleState= () => {
    setToggle(!toggle);
    console.log("test")
  }

  return ( // Rendu JSX en format accordéon (Mise en place des composants et utilisation de la fonction togglecollapse)
    <div className={`wrapper ${customClass}`}>
      <div className="accordion">
        {items.map((item, index) => (
          <div className="item" key={index}>
            <div className="title" onClick={toggleState}>
              <h2>{item.title}</h2>
              <img className={toggle ? "Chevron rotated": "Chevron"}
                src={ChevronUp}
                alt="Chevron"
              />
            </div>
            <div className={toggle ? "collapse_toggle animated": "collapse_toggle"}>
              <p aria-hidden={toggle ? "true": "false"}>{item.paragraphe}</p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}