"use client"
import React from "react";
import {BiSolidUpArrowCircle} from 'react-icons/bi'
const JumpButton = () => {
  const handleJump = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  return (
    <button
      className="jump-button bg-btn-grad"
      onClick={handleJump}
      style={{
        position: "fixed",
        bottom: "20px",
        right: "20px",
        padding: "10px",
       
        color: "white",
        borderRadius: "4px",
        cursor: "pointer",
      }}
    >
      <BiSolidUpArrowCircle/>
    </button>
  );
};

export default JumpButton;
