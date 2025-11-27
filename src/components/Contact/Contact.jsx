import React from "react";
import "./Contact.css";
import theme_pattern from "../../assets/theme_pattern.svg";
import mail from "../../assets/mail_icon.svg";
import call from "../../assets/call_icon.svg";
import location from "../../assets/location_icon.svg";

function Contact() {
  const handleSubmit = async (event) => {
    event.preventDefault();

    const formData = new FormData(event.target);
    formData.append("access_key", "45803cd8-9bac-4c9d-8281-006a52daf861");

    try {
      const response = await fetch("https://api.web3forms.com/submit", {
        method: "POST",
        body: formData,
      });

      const data = await response.json();

      if (data.success) {
        alert("Success! ✅ Your message has been sent.");
        event.target.reset(); // لو عايز يمسح البيانات بعد الإرسال
      } else {
        alert("Error ❌ Something went wrong. Please try again.");
      }
    } catch (error) {
      alert("Error ❌ Network issue. Please try again.");
      console.error(error);
    }
  };

  return (
    <div id="contact" className="contact">
      <div className="contact-tittle">
        <h1>Get in touch</h1>
        <img src={theme_pattern} alt="" />
      </div>
      <div className="contact-section">
        <div className="contact-left">
          <h1>Let's talk</h1>
          <p>
            I'm currently avaliable to take on new projects, so feel free to
            send me a message about anything that you want me to work on. You
            can contact anytime.
          </p>
          <div className="contact-details">
            <div className="contact-detail">
              <img src={mail} alt="" />
              <p>mazenelgyoshi31@gmail.com</p>
            </div>
            <div className="contact-detail">
              <img src={call} alt="" />
              <p>+201099088412</p>
            </div>
            <div className="contact-detail">
              <img src={location} alt="" />
              <p>Damietta-Egypt</p>
            </div>
          </div>
        </div>
        <form onSubmit={handleSubmit} className="contact-right">
          <label htmlFor="">Your Name</label>
          <input type="text" placeholder="Enter your name" name="name" />
          <label htmlFor="">Your Email</label>
          <input type="email" placeholder="Enter Your Email" name="email" />
          <label htmlFor="">Write your message here</label>
          <textarea name="message" rows="8" placeholder="Enter Your Message" />
          <button type="submit" className="contact-submit">
            Submit Now
          </button>
        </form>
      </div>
    </div>
  );
}

export default Contact;
