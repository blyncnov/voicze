import React from "react";

// Soon Components
import ComingSoon from "@/components/Soon";

const Survey = () => {
  return (
    <div>
      <ComingSoon />
    </div>
  );
};

export default Survey;

Survey.getLayout = function getLayout(page: any) {
  return page;
};
