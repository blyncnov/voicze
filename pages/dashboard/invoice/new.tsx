import React from "react";

// Soon Components
import ComingSoon from "@/components/Soon";

const CreateNewInvoice = () => {
  return (
    <div>
      <ComingSoon />
    </div>
  );
};

export default CreateNewInvoice;

CreateNewInvoice.getLayout = function getLayout(page: any) {
  return page;
};
