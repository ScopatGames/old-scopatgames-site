import React from 'react';

export default class Contact extends React.Component {
  render(){
    return (
      <section className="section-contact" id="contact">
        <div className="contact-container">
          <h1>Make Contact</h1>
          <p><span className="contact-prefix">Email: </span><a href="mailto:scopatten@gmail.com">scopatten@gmail.com</a></p>
          <p><span className="contact-prefix">GitHub: </span><a href="https://github.com/ScopatGames">https://github.com/ScopatGames</a></p>
          <p><span className="contact-prefix">LinkedIn: </span><a href="https://www.linkedin.com/in/scott-patten-916880106">https://www.linkedin.com/in/scott-patten-916880106</a></p>
          <p><span className="contact-prefix">Resume: </span><a href="Patten_Scott_Resume.pdf">Download</a></p>
        </div>
      </section>
    )
  }
}
