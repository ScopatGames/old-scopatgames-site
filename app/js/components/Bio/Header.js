import React from 'react';
import NavList from './Header/NavList.js';

export default class Header extends React.Component {
  render(){
    return (
      <header>
        <div className="hero-text-box">
            <ul className="hero-list">
                <li className="hero-left">
                    <h1>Scott Patten</h1>
                    <ul className="hero-subtitle">
                        <li>Developer</li>
                        <li>|</li>
                        <li>Designer</li>
                        <li>|</li>
                        <li>Engineer</li>
                    </ul>
                </li>
                <li className="hero-right">
                    <NavList />
                </li>
            </ul>
        </div>
      </header>
    )
  }
};
