import React from 'react';

export default class SvgPortfolio extends React.Component {
  render() {
    return (
      <svg viewBox="0 0 400 400" preserveAspectRatio="xMidYMin meet">
        <polygon className="icon-stroke" strokeWidth="6" fill="none" stroke="#000000" strokeMiterlimit="10" points="100,28.464 90.383,133.924 0,194.645 90.383,255.366
          100,360.825 200,316.086 300,360.825 309.616,255.366 400,194.645 309.616,133.924 300,28.464 200,73.204 "/>
        <polyline className="icon-stroke" strokeWidth="6" fill="none" stroke="#000000" strokeMiterlimit="10" points="400,194.645 0,194.645 90.383,133.924 309.616,255.366
          300,360.825 100,28.464 200,73.204 200,316.086 100,360.825 300,28.464 309.616,133.924 90.383,255.366 "/>
      </svg>
    )
  }
}
