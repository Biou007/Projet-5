import { useState } from "react";
import "./Collapse.scss";

function Collapse({ title, content }) {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <div className="collapse">
      <div className="collapse_header" onClick={() => setIsOpen(!isOpen)}>
        <h2 className="collapse_title">{title}</h2>
        <span className={`arrow ${isOpen ? "open" : ""}`}></span>
      </div>

      {isOpen && (
        <div className="collapse_content">
          {Array.isArray(content) ? (
            content.map((item, index) => <div key={index}>{item}</div>)
          ) : (
            <div>{content}</div>
          )}
        </div>
      )}
    </div>
  );
}

export default Collapse;
