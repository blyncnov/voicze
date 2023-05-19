import React from "react";

// Label Style
import style from "./label.module.scss";

const LabelTag = ({ tag }: any) => {
  return (
    <>
      <span id={style.coming_soon}>{tag} </span>
    </>
  );
};

export default LabelTag;
