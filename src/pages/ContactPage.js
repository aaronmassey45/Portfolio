import React from 'react';

import UserIcons from '../components/user-icons/UserIcons';
import ContactForm from '../components/contact-form/ContactForm';

export default () => (
  <main id="contact">
    <h1 className="lg-heading">
      Contact <span className="text-secondary">Me</span>
    </h1>
    <h2 className="sm-heading">Hit me up!</h2>
    <div className="content">
      <div className="msg">
        Have questions? In San Antonio and want to grab a coffee? Or better yet,
        some tequila shots? Feel free to send me a message!
      </div>
      <ContactForm />
    </div>
    <UserIcons />
  </main>
);
