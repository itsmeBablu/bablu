import React from "react";
import "./contact.css";
import { AiOutlineMail } from "react-icons/ai";
import { BsWhatsapp } from "react-icons/bs";

import { useRef } from "react";
import emailjs from "@emailjs/browser";

export default function Contact() {
  const sendEmail = (e) => {
    e.preventDefault();

    emailjs.sendForm(
      "service_pb9h4ga",
      "template_lv6w52r",
      form.current,
      "9w28tdGJoVdcweSd9"
    );
    e.target.reset();
  };
  const form = useRef();

  return (
    <section id="contact">
      <h5>would you like to know more</h5>
      <h2>contact me..</h2>

      <div className="container contact__container">
        <div className="contact__options">
          <article className="contact__option">
            <AiOutlineMail className="contact__option-icon" />
            <h4>Mail me</h4>
            <h5>kanala.babureddy@gmail.com</h5>
            <a href="mailto:kanala.babureddy@gmail.com" target="_blank">
              Send a message
            </a>
          </article>

          <article className="contact__option">
            <BsWhatsapp className="contact__option-icon" />
            <h4>Whatsapp</h4>
            <h5>+49 1512 944 9634</h5>
            <a
              href="https://api.whatsapp.com/send?phone+491728026004"
              target="_blank"
            >
              Send a message
            </a>
          </article>
        </div>

        {/*form data*/}
        <form /* ref="form" onSubmit={sendEmail}*/>
          <input type="text" name="name" placeholder="Full Name Please" />
          <input type="email" name="email" placeholder="email Please" />
          <textarea name="message" rows="7" placeholder="message" required />
          <button className="btn btn-primary">Send Message</button>
        </form>
      </div>
    </section>
  );
}
