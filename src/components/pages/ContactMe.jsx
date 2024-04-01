import Navbar from "../navBar/navbar";
import { useRef } from "react";
import "./ContactMe.css";
import emailjs from "@emailjs/browser";

const ContactMe = () => {
  const form = useRef();

  const sendEmail = (e) => {
    e.preventDefault();

    emailjs
      .sendForm("service_fakj0cb", "template_8py4pwa", form.current, {
        publicKey: "2lXtcnc88ZpwR-wRU",
      })
      .then(
        () => {
          console.log("SUCCESS!");
        },
        (error) => {
          console.log("FAILED...", error.text);
        }
      );
    e.target.reset();
  };
  return (
    <section>
      <div className="container">
        <Navbar />
        <form ref={form} onSubmit={sendEmail} className="formCard">
          <h1 className="contactMe">Contact Me</h1>
          <input
            className="nameBox"
            type="text"
            placeholder="Full Name"
            name="user-name"
            required
          />
          <input
            className="emailBox"
            type="email"
            placeholder="Email"
            name="user-email"
            required
          />
          <input
            className="subjectBox"
            type="text"
            placeholder="Subject"
            name="subject"
            required
          />
          <textarea
            className="textBox"
            name="message"
            placeholder="Write me a message!"
            cols="30"
            rows="10"
          ></textarea>
          <button type="submit" className="btn">
            Send Message
          </button>
        </form>
      </div>
    </section>
  );
};

export default ContactMe;
