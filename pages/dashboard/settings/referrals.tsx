import React from "react";

// Types
import { refLevelType, refType } from "@/types/types";

// React Icon
import { GiTrophyCup } from "react-icons/gi";
import { AiOutlineGift } from "react-icons/ai";
import { HiSpeakerphone } from "react-icons/hi";

// Icon Style Settings
const IconS = {
  fontSize: "3em",
  color: "#327be8",
};

const Referral: refType[] = [
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

const ReferralLevels: refLevelType[] = [
  {
    id: 1,
    title: "Referral Level",
    value: "Level #3",
  },
  {
    id: 2,
    title: "Total Referrals",
    value: "991",
  },
  {
    id: 3,
    title: "Amount Earned",
    value: "$200",
  },
];

const referral_code: string = "Helen_dee000000";

const Referrals = () => {
  return (
    <div id="special_shadow_container">
      <h3 className="referral_title">Referrals</h3>
      <br />
      <section id="referral_options">
        <div className="referral_grid_container">
          {Referral.map((data, idx) => {
            return (
              <div className="referral_choose_options" key={idx}>
                <div>{data.icon}</div>
                <p>{data.title} </p>
              </div>
            );
          })}
        </div>
      </section>
      <br />
      <section id="referral_desc">
        <h2 className="referral_title">Referral Instruction</h2>
        <p>
          Submit your promo code, send points with your friends or donate to
          chat pool.
        </p>
      </section>
      <br />
      <br />
      <section id="referral_full_details">
        <div className="referral_details_grid">
          <div className="referral_column">
            <div>
              <h3 className="referral_title"> Your referral Code</h3>
            </div>
            <div className="referral_code">
              <div className="referral_code_value">
                <p> {referral_code} </p>
              </div>
              <div className="referal_copy_button">
                <p>Copy</p>
              </div>
            </div>
          </div>
          <div className="referral_column">
            {ReferralLevels.map((data, idx) => {
              return (
                <div key={idx} className="referral_select">
                  <div>
                    <h3 className="referral_title"> {data.title} </h3>
                  </div>
                  <div className="referral_select_options">
                    <p>{data.value} </p>
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
