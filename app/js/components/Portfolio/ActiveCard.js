import React from 'react';
import * as CardActions from './../../actions/CardActions.js';
import CardStore from './../../stores/CardStore.js';

export default class ActiveCard extends React.Component {
  constructor(){
    super();
    this.state = {
      activeCard: CardStore.getActiveCard()
    }
  }
  componentWillMount(){
    CardStore.on("change", ()=> {
      this.setState({
        activeCard: CardStore.getActiveCard()
      });
    });
  }
  closeActiveCard(){
    let data = {
      title: this.state.activeCard.title,
      fullImage: null,
      description: this.state.activeCard.description,
      url: this.state.activeCard.url,
      currentClassName: "active-card-hidden"
    };
    CardActions.setActiveCard(data);
  }

  render(){
    const paragraphs = this.state.activeCard.description;
    const paragraphList = paragraphs.map((item, i) => { return (<p key={i}>{item}</p>); });
    const urls = this.state.activeCard.url;
    const urlList = urls.map((item, i) => { return (<div key={i}><a href={item.url}><span className="external-link">{item.label}</span></a></div>); });
    return (
      <div className={this.state.activeCard.currentClassName}>
        <div className="overlay" onClick={this.closeActiveCard.bind(this)}>
        </div>
        <div className="card-content-container">
            <div className="relative-div">
            <h1>{this.state.activeCard.title}</h1>
            <a className="close-button" href="#portfolio" onClick={this.closeActiveCard.bind(this)}>&nbsp;X&nbsp;</a>
            <div className="active-card-image">
              <img src={this.state.activeCard.fullImage}/>
            </div>
            <div className="active-card-description">
              {paragraphList}
              {urlList}
            </div>
          </div>
        </div>
      </div>
    )
  }
}
