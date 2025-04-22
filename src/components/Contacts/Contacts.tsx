import './Contacts.scss';

const Contact = () => {
  return (
    <section className="contact" id="contact">
      <div className="container">
        <h2 className="contact__title">Let’s work together</h2>
        <p className="contact__text">
          Feel free to reach out if you have a project in mind or just want to connect.
        </p>
        <a href="mailto:cheban.stanislav.de@gmail.com" className="contact__email">
          cheban.stanislav.de@gmail.com
        </a>
        <div className="contact__socials">
          <a href="https://github.com/chebannich" target="_blank" rel="noreferrer">GitHub</a>
          <a href="https://t.me/chebannich" target="_blank" rel="noreferrer">Telegram</a>
          <a href="https://linkedin.com/in/chebanich" target="_blank" rel="noreferrer">LinkedIn</a>
        </div>
      </div>
    </section>
  );
};

export default Contact;
