import React from "react";

// Soon Components
import ComingSoon from "@/components/Soon";

const BusinessCard = () => {
  return (
    <div>
      <ComingSoon />
    </div>
  );
};

export default BusinessCard;

BusinessCard.getLayout = function getLayout(page: any) {
  return page;
};
