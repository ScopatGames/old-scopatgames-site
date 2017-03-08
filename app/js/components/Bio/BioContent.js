import React from 'react';
import * as waves from './../../effects/waves.js';
import imgProfile from './../../../images/ScottProfile.jpg';
import imgSubmarine from './../../../images/submarine.gif';
import imgBuoy from './../../../images/buoy.png';
import Bird from './Bird.js';

export default class BioContent extends React.Component {
  componentDidMount(){
    const wavesInputs = {
      fieldWidth: 2000,
      fieldHeight: 1200,
      numberOfWaves: 18,
      svgClassName: ".svg-water",
      waterSvgUrl: "url(#water-gradient)",
      waterStrokeColor: "#203a4d",
      waterStrokeWidth: "2",
      waterSpeed: 1200,
      waveHeight: 0.0
    };
    waves.initialize(wavesInputs);
    waves.startWaves();
  }

  render(){
    return (
      <section className="section-introduction">
          <div className="submarine">
            <img src={imgSubmarine} width="100%"/>
          </div>
          <div className="buoy">
            <img src={imgBuoy} width="100%"/>
            <Bird/>
          </div>
          <svg className="svg-water" viewBox="0 0 2000 1200" width="2000" preserveAspectRatio="xMidYMin slice">
            <defs>
              <linearGradient id="water-gradient" x1="0%" y1="0%" x2="0%" y2="100%">
                  <stop offset="0%" style={{stopColor:"rgb(14, 218, 255)", stopOpacity: 0.07}} />
                  <stop offset="35%" style={{stopColor:"rgb(0, 47, 93)", stopOpacity:0.6}} />
                  <stop offset="85%" style={{stopColor:"rgb(0,8,16)", stopOpacity:1}} />
              </linearGradient>
            </defs>
          </svg>
          <div className="introduction-content" id="bio">
              <h2>My skills</h2>
              
              
              <ul className="intro-ticked-list">
                  <li>Web Layout and Design (HTML, CSS, D3)</li>
                  <li>Programming (JavaScript, C#, Java)</li>
                  <li>Front end frameworks (Angular, React)</li>
                  <li>Build tools (Node, Webpack, Gulp)</li>
                  <li>Testing (Karma, Mocha)</li>
                  <li>Photography, Photo Editing, Texturing (Photoshop, Gimp)</li>
                  <li>Graphic Design and SVG artwork (Illustrator)</li>
                  <li>Videography and Video Editing (DSLR filming, Premiere) </li>
                  <li>Visual effects and Composition (After Effects)</li>
                  <li>3D Modeling and Animation (Blender, Rhino, AutoCAD)</li>
                  <li>Game Development (Unity)</li>
              </ul>
              
              <div className="pic-sig-wrapper">
                <div className="profile-pic">
                  
                </div>
                <div className="intro-signature">
                    
                      <a className="btn-code" href="#portfolio">All fun and games...</a>
                </div>
              </div>

          </div>
      </section>
    );
  }
}
