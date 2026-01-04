function Contact() {
  return (
    <section id="contact" className="contact">
      <div className="contact-container">

        <h2>Contact Me</h2>
        <p className="contact-sub">
          Feel free to reach out for backend projects, freelancing, or collaboration.
        </p>

        {/* CONTACT DETAILS */}
        <div className="contact-info">
          <p><strong>Email:</strong> sudeepyadav@email.com</p>
          <p><strong>Location:</strong> India</p>
          <p><strong>Availability:</strong> Open for Freelancing</p>
        </div>

        {/* CONTACT FORM */}
        <form className="contact-form">
          <input type="text" placeholder="Your Name" />
          <input type="email" placeholder="Your Email" />
          <textarea placeholder="Your Message"></textarea>
          <button type="submit">Send Message</button>
        </form>

      </div>
    </section>
  );
}

export default Contact;
