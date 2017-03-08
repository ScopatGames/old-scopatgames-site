import React from 'react';
import * as starsBackground from './../../effects/starsBackground.js';

export default class BioFixedBackground extends React.Component {
  componentDidMount() {
    const starsInputs = {
      fieldWidth : 2000,
      fieldHeight: 1100,
      numberOfStars: 20,
      period: 4000,
      duration: (4000 / 6),
      svgClassName: ".svg-background",
      starColorBright: "orange",
      starColorDark: "rgb(80, 73, 4)",
      starRadius: "1.5"
    };
    starsBackground.initialize(starsInputs);
    starsBackground.startTwinkle();
  }

  render(){
    return (
      <div className="fixed-background">
        <svg className="svg-background" height="1080px" width="100%">
            <rect style= {{ fill: "url(#polyline-1)" }} x="0" y="0" height="100%" width="100%"></rect>
            <defs>
                <pattern id="polyline-1" patternUnits="userSpaceOnUse" width="100" height="200">
                    <polyline points="50,33.33335 50,166.66665 100,200 0,0 50,33.33335 100,0 0,200 0,133.33335 100,66.66665 100,0 0,0 0,66.66665 100,133.33335 100,200 0,200 50,166.66665" style={{fill:"none",stroke:"#211f1a",strokeWidth:"1"}}/>
                </pattern>
            </defs>
        </svg>
      </div>
    );
  }
};
