import React from "react";

// React Icon
import { HiSpeakerphone } from "react-icons/hi";
import { GiTrophyCup } from "react-icons/gi";
import { AiOutlineGift } from "react-icons/ai";

//Types
import { refLevelType, refType } from "@/types/types";

// Icon Style
const IconS = {
  fontSize: "4em",
  color: "#327be8",
};

const Referals: refType[] = [
  {
    id: 1,
    title: "Referrals",
    icon: <HiSpeakerphone style={IconS} />,
  },
  {
    id: 2,
    title: "Promo",
    icon: <AiOutlineGift style={IconS} />,
  },
  {
    id: 3,
    title: "Leaderboard ",
    icon: <GiTrophyCup style={IconS} />,
  },
];

const ReferalsLevels: refLevelType[] = [
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
];

const Referrals = () => {
  return (
    <div id="special_shadow_container">
      <h3 className="referals_title">Referrals</h3>
      <br />
      <section id="referals_options">
        <div className="referals_grid_container">
          {Referals.map((data, idx) => {
            return (
              <div className="referals_choose_options" key={idx}>
                <div>{data.icon}</div>
                <p>{data.title} </p>
              </div>
            );
          })}
        </div>
      </section>
      <br />
      <section id="referals_desc">
        <h2 className="referals_title">Referals </h2>
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
              <h3 className="referals_title"> Your Referals Code</h3>
            </div>
            <div className="referals_code">
              <div className="referals_code_value">
                <p> Blyncnov_key000000777 </p>
              </div>
              <div className="referal_copy_button">
                <p>Copy</p>
              </div>
            </div>
          </div>
          <div className="referals_column">
            {ReferalsLevels.map((data, idx) => {
              return (
                <div key={idx} className="referals_select">
                  <div>
                    <h3 className="referals_title"> {data.title} </h3>
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
