import React, { useState } from "react";

function Modal({ onClose }) {
  const [position, setPosition] = useState({ top: "50%", left: "50%" });

  const handleNoHover = () => {
    const randomTop = Math.floor(Math.random() * 40) + "vh";
    const randomLeft = Math.floor(Math.random() * 40) + "vw";
    setPosition({ top: randomTop, left: randomLeft });
  };

  const handleYesClick = () => {
    alert("Thanks for accepting me ❤️");
    onClose(); 
  };

  return (
    <div className="modal-overlay">
      <div className="modal-content">
        <h2>Will you marry me? 💍</h2>
        <button className="modal-button" onClick={handleYesClick}>
          Yes
        </button>
        <button
          className="modal-button moving-button"
          onMouseEnter={handleNoHover}
          style={{
            top: position.top,
            left: position.left,
            position: "absolute",
          }}
        >
          No
        </button>
      </div>
    </div>
  );
}

export default Modal;
