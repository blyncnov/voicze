import React from "react";

const NewContact = () => {
  return (
    <div>
      <h1>New Contact</h1>
    </div>
  );
};

export default NewContact;

NewContact.getLayout = function getLayout(page: any) {
  return page;
};
