import React from 'react';
import * as CardActions from './../../actions/CardActions.js';

export default class Card extends React.Component {

  setActiveCard(){
    let data = {
      title: this.props.title,
      fullImage: this.props.fullImage,
      description: this.props.description,
      urlLabel: this.props.urlLabel,
      url: this.props.url,
      currentClassName: "active-card-visible"
    };
    CardActions.setActiveCard(data);
  }

  render(){
    return (
      <li>
        <a href="#portfolio" onClick={this.setActiveCard.bind(this)}>
          <div className="card-container">
            <img src={this.props.thumbnail}/>
            <div className="title-container">
              <p>
                {this.props.title}
              </p>
            </div>
          </div>
        </a>
      </li>
    )
  }
}
