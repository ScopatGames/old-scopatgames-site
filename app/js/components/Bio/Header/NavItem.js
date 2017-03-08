import React from 'react';

export default class NavItem extends React.Component {
render(){
    return (
      <li>
        <a href={this.props.href}>
          <div className="icon-div">
            {this.props.svgContent}
          </div>
          <span className="icon-text">{this.props.title}</span>
        </a>
      </li>
    )
  }

};
