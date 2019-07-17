import React from 'react';

import UserIcons from '../components/user-icons/UserIcons';
import ContactForm from '../components/contact-form/ContactForm';

import resume from '../assets/aaronMasseyResume.pdf';

const ContactPage = () => (
  <main id="contact">
    <h1 className="lg-heading">
      Contact <span className="text-secondary">Me</span>
    </h1>
    <h2 className="sm-heading">Hit me up!</h2>
    <div className="content">
      <div>
        <div className="msg">
          Have questions? In San Antonio and want to grab a coffee? Or better
          yet, some tequila shots? Feel free to send me a message!
        </div>
        <div className="box">
          <a href={resume} target="_blank" rel="noopener noreferrer">
            View my resume
          </a>
        </div>
      </div>
      <ContactForm />
    </div>
    <UserIcons />
  </main>
);

export default ContactPage;
