import emailjs from "@emailjs/browser";
import { useRef } from "react";
import ResumeButton from "./ResumeButton";

const serviceId = import.meta.env.VITE_EMAIL_SERVICE_ID;
const templateId = import.meta.env.VITE_TEMPLATE_ID;
const publicKey = import.meta.env.VITE_PUBLIC_KEY;
export default function Contact() {
      const form = useRef();

  const sendEmail = (e) => {
    e.preventDefault();

    emailjs
      .sendForm(
        serviceId,
        templateId,
        form.current,
        publicKey
      )
      .then(() => {
        alert("Message Sent!");
      
      })
      .catch((error) => {
        console.log(error);
      });
  };

  return (
    <section className="contact-section" id="contact">

      <div className="contact-header">
        <h1>CONTACT TERMINAL</h1>
        <div className="status">
          <span className="status-dot"></span>
          AVAILABLE FOR WORK
        </div>
      </div>

      <div className="contact-container">

        <div className="contact-info">

          <div className="info-card">
            <h3>Email</h3>
            <p>zainabperween577@gmail.com</p>
            <ResumeButton/>
          </div>

          <div className="info-card">
            <h3>LinkedIn</h3>
            <p><a target="_blank" style={{textDecoration:"none", color:"white"}} href="https://www.linkedin.com/in/zainab-perween-37a0312aa/">https://www.linkedin.com/in/zainab-perween-37a0312aa/</a></p>
          </div>

          <div className="info-card">
            <h3>GitHub</h3>
            <p><a target="_blank" style={{textDecoration:"none", color:"white"}} href="https://github.com/zennie0">https://github.com/zennie0</a></p>
          </div>

        </div>

        <form ref={form} onSubmit={sendEmail} className="contact-form">

          <div className="input-group">
            <label>Name</label>
            <input  name="name" type="text" />
          </div>

          <div className="input-group">
            <label>Email</label>
            <input  name="email" type="email" />
          </div>

          <div className="input-group">
            <label>Message</label>
            <textarea name="message" rows="6"></textarea>
          </div>

          <button type="submit">
            Send message
          </button>

        </form>

      </div>

    </section>
  );
}