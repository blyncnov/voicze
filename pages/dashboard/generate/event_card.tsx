import React from "react";

const EventCard = () => {
  return (
    <div>
      <h1>Event Card</h1>
    </div>
  );
};

export default EventCard;

EventCard.getLayout = function getLayout(page: any) {
  return page;
};
