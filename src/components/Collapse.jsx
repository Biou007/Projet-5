import { useState } from "react";
import "./Collapse.scss";

function Collapse({ title, content }) {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <div className="collapse">
      <div className="collapse_header" onClick={() => setIsOpen(!isOpen)}>
        <h2 className="collapse_title">{title}</h2>

        {/* FLÈCHE = élément vide, 100% CSS */}
        <span className={`arrow ${isOpen ? "open" : ""}`}></span>
      </div>

      {isOpen && (
        <div className="collapse_content">
          {Array.isArray(content) ? (
            content.map((item, index) => <p key={index}>{item}</p>)
          ) : (
            <p>{content}</p>
          )}
        </div>
      )}
    </div>
  );
}

export default Collapse;
