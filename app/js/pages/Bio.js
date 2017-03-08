import React from 'react';
import BioFixedBackground from './../components/Bio/BioFixedBackground.js';
import Header from './../components/Bio/Header.js';
import BioContent from './../components/Bio/BioContent.js';

export default class Bio extends React.Component {
  render(){
    return (
      <div>
        <BioFixedBackground />
        <Header />
        <BioContent />
      </div>
    )
  }
};
