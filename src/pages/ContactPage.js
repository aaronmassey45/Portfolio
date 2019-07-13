import React from 'react';

import UserIcons from '../components/UserIcons';

const email = 'cliffordaaronmassey@gmail.com';

export default () => (
  <main id="contact">
    <h1 className="lg-heading">
      Contact <span className="text-secondary">Me</span>.
    </h1>
    <h2 className="sm-heading">This is how you can reach me...</h2>
    <div className="content">
      <div className="msg">
        Have questions? In San Antonio and want to grab a coffee? Or better yet,
        some tequila shots? Feel free to send me a message and I'll get back to
        you as soon as possible!
      </div>

      <div className="box">
        <a href={`mailto:${email}`}>
          <i className="text-secondary fas fa-envelope" /> {email}
        </a>
      </div>
    </div>
    <UserIcons />
  </main>
);
