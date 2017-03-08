import React from 'react';
import Bio from './Bio.js';
import Portfolio from './Portfolio.js';
import Contact from './Contact.js';

export default class Layout extends React.Component {
  render() {
    return (
      <div>
        <Bio />
        <Portfolio />
        <Contact />
      </div>
    )
  }
};
