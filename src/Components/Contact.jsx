import React from "react";
import style from "../css/Contact.module.css";

function Contact() {
  return (
    <>
      <section className={style.ContactContainer}>
        <h3 className={style.popUp}>
          We regret the inconvenience, contact section is in maintainace. Please
          check back later! or refer mobile device.
        </h3>
        <div className={style.ContactDetail}>
          <h2>GET IN TOUCH!</h2>
          <h4>EMAIL</h4>
          <p>
            <a style={{ color: "black" }} href="mailto:aashishstnl@gmail.com">
              aashishstnl@gmail.com
            </a>
          </p>
          <h4>PHONE</h4>
          <p>+91-9891277554</p>
          <h4>ADDRESS</h4>
          <p>243, Uttam Nagar, New Delhi, Delhi, 110059</p>

          <br />
        </div>
        <div className={style.ContactFrom}>
          <h2>DROP ME A LINE?</h2>
          <form action="POST" data-netfily="true">
            <div className={style.NameEmail}>
              <input
                type="text"
                name="name"
                id="name"
                placeholder="Name"
                required
              />
              <input
                type="email"
                name="email"
                id="email"
                placeholder="Email"
                required
              />
            </div>

            <textarea
              name="message"
              id="message"
              placeholder="Message"
              rows={7}
              required
            ></textarea>
            <br />
            <input type="file" name="attachment" id="attachment" />
            <br />
            <div data-netlify-recaptha="true"></div>
            <button type="submit">SEND MESSAGE</button>
          </form>
        </div>
      </section>
    </>
  );
}

export default Contact;
