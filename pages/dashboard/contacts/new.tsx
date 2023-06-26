import React from "react";

// Soon Components
import ComingSoon from "@/components/Soon";

const NewContact = () => {
  return (
    <div>
      <ComingSoon />
    </div>
  );
};

export default NewContact;

NewContact.getLayout = function getLayout(page: any) {
  return page;
};
