import React from "react";

// React Icon
import { HiSpeakerphone } from "react-icons/hi";

// Icon Style
const IconS = {
  fontSize: "4em",
  color: "#327be8",
};

const Referrals = () => {
  return (
    <div id="special_shadow_container">
      <h3>Referrals</h3>
      <br />
      <section id="referals_options">
        <div className="referals_grid_container">
          {[0, 1, 2].map((index, idx) => {
            return (
              <div className="referals_choose_options" key={idx}>
                <div>
                  <HiSpeakerphone style={IconS} />
                </div>
                <p>Referals - {index} </p>
              </div>
            );
          })}
        </div>
      </section>
      <br />
      <section id="referals_desc">
        <h2>Referals </h2>
        <p>
          Submit your promo code, send points with your friends or donate to
          chat pool.
        </p>
      </section>
      <br />
      <br />
      <section id="referals_full_details">
        <div className="referals_details_grid">
          <div className="referals_column">
            <div>
              <h3> Your Referals Code</h3>
            </div>
            <div className="referals_code">
              <p> Blyncnov_Prisma_key000000777 </p>
            </div>
          </div>
          <div className="referals_column">
            {[
              {
                id: 1,
                title: "Referral Level",
              },
              {
                id: 2,
                title: "Total Referrals",
              },
              {
                id: 3,
                title: "Amount Earned",
              },
            ].map((data, idx) => {
              return (
                <div key={idx} className="referals_select">
                  <div>
                    <h3> {data.title} </h3>
                  </div>
                  <div className="referals_select_options">
                    <p>Level #{data.id} </p>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </section>
      <br />
    </div>
  );
};

export default Referrals;

Referrals.getLayout = function getLayout(page: any) {
  return page;
};
