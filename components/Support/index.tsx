import React from "react";

// Support Style
import style from "./support.module.scss";

const Support = () => {
  return (
    <div id="support">
      <div id="container">
        <div className={style.support_section}>
          <div className={style.support_container}>
            <div className={style.support_text_holder}>
              <h2>Streamline your invoicing process Today!</h2>
              <br />
              <p>
                With our user-friendly interface and intuitive features,
                creating professional invoices has never been easier. Voicze
                will generate a polished invoice ready to be sent. You can
                customize the design, add your branding elements, and even
                include payment options for your clients convenience
              </p>
              <br />
              <a href="mailto:support@voicze.io?subject = Feedback">
                <button>Our Support Team</button>
              </a>
              <br />
              <br />
            </div>
            <form action="POST" className={style.support_form}>
              <h2>Make Your Enquiries!</h2>
              <div className={style.grouped_data}>
                <label htmlFor="full_name">Full Name</label>
                <input
                  type="text"
                  name="full_name"
                  className={style.input}
                  placeholder="First name"
                />
              </div>
              <div className={style.grouped_data}>
                <label htmlFor="message">Your Enquiry</label>
                <textarea
                  name="message"
                  className={style.input}
                  lang="en"
                  placeholder="Enter your Message/Enquiry "
                />
              </div>
              <div className={style.support_button}>
                <button>Send Message</button>
              </div>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Support;
