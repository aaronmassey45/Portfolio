import React from 'react';

import resume from 'assets/aaronMasseyResume.pdf';
import ContactForm from 'components/contact-form/ContactFormContainer';
import UserIcons from 'components/user-icons/UserIcons';
import Snackbar from 'components/snackbar/Snackbar';
import useSnackbar from 'custom-hooks/useSnackbar';

const ContactPage = () => {
  const { message, isShown, setMessageAndShowSnackbar } = useSnackbar();

  return (
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
        <ContactForm setSnackbarMsg={setMessageAndShowSnackbar} />
      </div>
      <UserIcons />
      <Snackbar message={message} isShown={isShown} />
    </main>
  );
};

export default ContactPage;
