import React from 'react';

export default class Contact extends React.Component {
  render(){
    return (
      <section className="section-contact" id="contact">
        <div className="contact-container">
          <h1>Make Contact</h1>
          <br/>
          <p><span className="contact-prefix"></span><a href="mailto:scopatten@gmail.com">scopatten@gmail.com</a></p>
          <p><span className="contact-prefix"></span><a href="https://github.com/ScopatGames">GitHub</a></p>
          <p><span className="contact-prefix"></span><a href="https://www.linkedin.com/in/scott-patten-916880106">LinkedIn</a></p>
          {/*<p><span className="contact-prefix"></span><a href="Patten_Scott_Resume.pdf">Download Resume (PDF)</a></p>*/}
        </div>
      </section>
    )
  }
}
