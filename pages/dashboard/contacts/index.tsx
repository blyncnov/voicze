import React from "react";

// Soon Components
import ComingSoon from "@/components/Soon";

const Contacts = () => {
  return (
    <div>
      <ComingSoon />
    </div>
  );
};

export default Contacts;

Contacts.getLayout = function getLayout(page: any) {
  return page;
};
