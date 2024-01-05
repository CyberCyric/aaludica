import React from "react";

const Footer = () => {
    const currentYear = new Date().getFullYear();
  return <div className="navFooter">{currentYear} - AA Lúdica</div>;
};

export default Footer;
