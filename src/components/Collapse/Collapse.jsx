// Import des styles et dépendances
import "./Collapse.scss";
import React, { useState } from "react";
import ChevronUp  from "../../assets/arrow_up.svg";


export default function Collapse({ items, customClass }) {
  const [toggle, setToggle] = useState(false);

  const toggleState = () => {
    setToggle(!toggle);
    console.log("test");
  }

  return (
    <div className={`wrapper ${customClass}`}>
      <div className="accordion">
        {items.map((item, index) => (
          <div className="item" key={index}>
            <div className="title" onClick={toggleState}>
              <h2>{item.title}</h2>
              <img
                className={`chevron ${toggle ? "rotated" : ""}`}
                src={ChevronUp}
                alt="Chevron"
              />
            </div>
            <div className={`collapse_toggle ${toggle ? "animated" : ""}`}>
    <p aria-hidden={toggle ? "true" : "false"}>{item.paragraphe}</p>
</div>
          </div>
        ))}
      </div>
    </div>
  );
}
