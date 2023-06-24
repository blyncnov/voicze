import React, { useState } from "react";

// Ambassador Image
import HelenDee from "@/public/model/helendee.jpeg";

// React Icons
import { MdOutlineArrowForwardIos } from "react-icons/md";
import Image from "next/image";

const Profile = () => {
  // default to profile settings
  const [settingsKey, setSettingskey] = useState<React.JSX.Element>(
    <ProfileSettings />
  );

  let key: string = "profile";

  // switch (key) {
  //   case "profile":
  //     return 1;

  //   case "business":
  //     return setSettingskey(<BusinessSettings />);

  //   case "invoice":
  //     return setSettingskey(<InvoiceSettings />);

  //   case "teams":
  //     return setSettingskey(<TeamSettings />);

  //   case "billings":
  //     return setSettingskey(<BillingSettings />);

  //   default:
  //     break;
  // }

  return (
    <div>
      <div id="profile_cover_container"></div>
      <div id="profile_mainpage_container">
        <div id="profile_relativity">
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
              <>{settingsKey}</>
            </div>
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
              <label htmlFor="business_name">First Name</label>
              <input
                type="text"
                id="business_name"
                name="business_name"
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
              <label htmlFor="state">Home Address</label>
              <textarea
                id="business_address"
                name="business_address"
                defaultValue="Harmony Estate,Alabata, Ogun State "
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
      <h3>Business Settings</h3>
      <br />
      <form method="post">
        <div id="form_grid_container">
          <div id="grouped_layer">
            <div className="single_column">
              <label htmlFor="business_name">Business Name</label>
              <input
                type="text"
                id="business_name"
                name="business_name"
                defaultValue="Helena's Inc. "
              />
            </div>
          </div>
          <div id="grouped_layer">
            <div className="single_column">
              <label htmlFor="phone_number">Business category</label>
              <select name="category" id="category">
                <option value="Individual/Freelancer">
                  Individual/Freelancer
                </option>
                <option value="Health">Health Sector</option>
                <option value="Iyaloja">Iyaloja</option>
              </select>
            </div>
          </div>
          <div id="grouped_layer">
            <div className="single_column">
              <label htmlFor="business_email_address">
                Business Email Address
              </label>
              <input
                type="text"
                id="business_email_address"
                name="business_email_address"
                defaultValue=" Helen_dee001@voicze.io"
              />
            </div>
          </div>
          <div id="grouped_layer">
            <div className="single_column">
              <label htmlFor="state">Business Address</label>
              <textarea
                id="business_address"
                name="business_address"
                defaultValue="113 close, Hugary main 5yt, Funaab, Alabata, Ogun State "
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
        <div className="submit_button">
          <button type="submit">Update Account</button>
        </div>
      </form>
    </div>
  );
};

const InvoiceSettings = () => {
  return (
    <div>
      <h3>Invoice Settings</h3>
      <br />
      <form method="post">
        <div id="form_grid_container">
          <div id="grouped_layer">
            <div className="single_column">
              <label htmlFor="currency_iso">Currency </label>
              <select name="currency_iso" id="currency_iso">
                <option value="Nigerian Naira.">Nigerian Naira</option>
                <option value="usd">USD</option>
                <option value="euro">Euro</option>
              </select>
            </div>
          </div>
          <div id="grouped_layer">
            <div className="single_column">
              <label htmlFor="tax_rate">Tax Rate (%)</label>
              <input
                type="number"
                id="tax_rate"
                name="tax_rate"
                defaultValue={0}
              />
            </div>
          </div>
          <div id="grouped_layer">
            <div className="single_column">
              <label htmlFor="invoice_prefix">Invoice Prefix</label>
              <input
                type="text"
                id="invoice_prefix"
                name="invoice_prefix"
                defaultValue="voicze"
              />
            </div>
          </div>
          <div id="grouped_layer">
            <div className="single_column">
              <label htmlFor="auto_reminder">Auto Reminder</label>
              <select name="auto_reminder" id="auto_reminder">
                <option value="Enabled">Enabled</option>
                <option value="Disable">Disable</option>
              </select>
            </div>
          </div>
          <div id="grouped_layer">
            <div className="single_column">
              <label htmlFor="sms_notification">SMS Notification</label>
              <select name="sms_notification" id="sms_notification">
                <option value="Enabled">Enabled</option>
                <option value="Disable">Disable</option>
              </select>
            </div>
            <div className="single_column">
              <label htmlFor="auto_bill">Auto PayBill</label>
              <select name="auto_bill" id="auto_bill">
                <option value="Enabled">Enabled</option>
                <option value="Disable">Disable</option>
              </select>
            </div>
          </div>
        </div>
        <br />
        <div className="submit_button">
          <button type="submit">Update Account</button>
        </div>
      </form>
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
