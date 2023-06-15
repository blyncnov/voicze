import React from "react";

const BusinessCard = () => {
  return (
    <div>
      <h1>Business Card</h1>
    </div>
  );
};

export default BusinessCard;


BusinessCard.getLayout = function getLayout(page: any) {
  return page;
};
