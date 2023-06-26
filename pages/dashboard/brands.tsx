import React from "react";

// Soon Components
import ComingSoon from "@/components/Soon";

const Brands = () => {
  return (
    <div>
      <ComingSoon />
    </div>
  );
};

export default Brands;

Brands.getLayout = function getLayout(page: any) {
  return page;
};
