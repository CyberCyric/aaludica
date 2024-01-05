import React from "react";
import ContentSA from "./SA/ContentSA";
import ContentAA from "./AA/ContentAA";

const Template = ({ section }) => {
  return (
    <>
      {section === "AA" && <ContentAA />}
      {section === "SA" && <ContentSA />}
    </>
  );
};

export default Template;
