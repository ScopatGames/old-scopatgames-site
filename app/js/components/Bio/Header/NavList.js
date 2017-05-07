import React from 'react';
import NavItem from './NavItem.js';
import SvgBio from './SvgBio.js';
import SvgPortfolio from './SvgPortfolio.js';
import SvgResume from './SvgResume.js';
import SvgContact from './SvgContact.js';

export default class NavList extends React.Component {
  render(){
    const navItemData = [
      {
        href:"#bio",
        title: "Bio",
        svgContent: <SvgBio />
      }, {
        href:"#portfolio",
        title: "Portfolio",
        svgContent: <SvgPortfolio />
      }, /*{
        href:"Patten_Scott_Resume.pdf",
        title: "Resume",
        svgContent: <SvgResume />
      },*/ {
        href:"#contact",
        title: "Contact",
        svgContent: <SvgContact />
      }
    ].map((item, i) => { return <NavItem key={i} href={item.href} title={item.title} svgContent={item.svgContent} />; });

    return (
      <ul className="hero-icons">
          {navItemData}
      </ul>
    )
  }
}
