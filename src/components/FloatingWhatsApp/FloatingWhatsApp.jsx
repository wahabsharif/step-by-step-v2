// FloatingWhatsApp.jsx
import React from "react";
import { FaWhatsapp } from "react-icons/fa";

const FloatingWhatsApp = () => {
  return (
    <a
      href="https://api.whatsapp.com/send?phone=51955081075&text=Hola%21%20Quisiera%20m%C3%A1s%20informaci%C3%B3n%20sobre%20Varela%202."
      className="float"
      target="_blank"
      rel="noopener noreferrer"
    >
      <FaWhatsapp className="my-float" />
    </a>
  );
};

export default FloatingWhatsApp;
