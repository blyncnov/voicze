import React from "react";

import HelenDee from "@/public/model/helendee.jpeg";

// React Icons
import { MdOutlineArrowForwardIos } from "react-icons/md";
import Image from "next/image";

const Profile = () => {
  return (
    <div>
      <div id="profile_cover_container">{/* <h2>Account Settings</h2> */}</div>
      <div id="profile_mainpage_container">
        <div className="profile_grid_container">
          <div className="profile_main_section">
            <section className="profile_summary_header">
              <div className="profile_image_container">
                <Image src={HelenDee} alt="Helendee" />
              </div>
              <div className="profile_details_container">
                <h3>Taiwo Helen_dee 🌿</h3>
                <p>Helena&apos;s Inc.</p>
              </div>
            </section>
            <br />
            <br />
            <section className="profile_additional_options">
              <div className="profile_additional_row">
                <p>Profile</p>
                <MdOutlineArrowForwardIos />
              </div>
              <div className="profile_additional_row">
                <p>Business </p>
                <MdOutlineArrowForwardIos />
              </div>
              <div className="profile_additional_row">
                <p>Invoice </p>
                <MdOutlineArrowForwardIos />
              </div>
              <div className="profile_additional_row">
                <p>Teams </p>
                <MdOutlineArrowForwardIos />
              </div>
              <div className="profile_additional_row">
                <p>Billings </p>
                <MdOutlineArrowForwardIos />
              </div>
            </section>
          </div>
          <div className="profile_main_section">
            <ProfileSettings />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Profile;

const ProfileSettings = () => {
  return (
    <div>
      <h3>Profile Settings</h3>
      <br />
      <form method="post">
        <div id="form_grid_container">
          <div id="grouped_layer">
            <div className="single_column">
              <label htmlFor="first_name">First Name</label>
              <input
                type="text"
                id="first_name"
                name="first_name"
                defaultValue="Helen_dee "
              />
            </div>
            <div className="single_column">
              <label htmlFor="last_name">Last Name</label>
              <input
                type="text"
                id="last_name"
                name="last_name"
                defaultValue="Taiwo"
              />
            </div>
          </div>
          <div id="grouped_layer">
            <div className="single_column">
              <label htmlFor="phone_number">Phone Number</label>
              <input
                type="text"
                id="phone_number"
                name="phone_number"
                defaultValue="+2348149055068"
              />
            </div>
            <div className="single_column">
              <label htmlFor="email_address">Email Address</label>
              <input
                type="text"
                id="email_address"
                name="email_address"
                defaultValue=" Helen_dee001@voicze.io"
              />
            </div>
          </div>
          <div id="grouped_layer">
            <div className="single_column">
              <label htmlFor="state">State/Province</label>
              <input
                type="text"
                id="state"
                name="state"
                defaultValue="Ogun State "
              />
            </div>
            <div className="single_column">
              <label htmlFor="postcode">Postcode</label>
              <input
                type="text"
                id="postcode"
                name="postcode"
                defaultValue="120201"
              />
            </div>
          </div>
          <div id="grouped_layer">
            <div className="single_column">
              <label htmlFor="city_name">City</label>
              <input
                type="text"
                id="city_name"
                name="city_name"
                defaultValue=" Abeokuta"
              />
            </div>
            <div className="single_column">
              <label htmlFor="country">Country </label>
              <input
                type="text"
                id="country"
                name="country"
                defaultValue="Nigeria "
              />
            </div>
          </div>
        </div>
        <br />
        <br />
        <div className="submit_button">
          <button type="submit">Update Account</button>
        </div>
      </form>
    </div>
  );
};

const BusinessSettings = () => {
  return (
    <div>
      <h3>business profile</h3>
    </div>
  );
};

const InvoiceSettings = () => {
  return (
    <div>
      <h3>Invoice profile</h3>
    </div>
  );
};

const TeamSettings = () => {
  return (
    <div>
      <h3>Team profile</h3>
    </div>
  );
};

const BillingSettings = () => {
  return (
    <div>
      <h3>Billing profile</h3>
    </div>
  );
};

Profile.getLayout = function getLayout(page: any) {
  return page;
};
