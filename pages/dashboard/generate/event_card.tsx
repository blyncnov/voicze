import React from "react";

// Soon Components
import ComingSoon from "@/components/Soon";

const EventCard = () => {
  return (
    <div>
      <ComingSoon />
    </div>
  );
};

export default EventCard;

EventCard.getLayout = function getLayout(page: any) {
  return page;
};
