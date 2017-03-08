import React from 'react';
import imgBirdStanding from './../../../images/birdStanding.gif';
import imgBirdFlight from './../../../images/birdFlight.gif';

export default class Bird extends React.Component {
  constructor(){
    super();
    this.state = {
      birdClass: "bird-standing",
      birdImage: imgBirdStanding
    }
  }

  componentDidMount() {
    setTimeout(()=>{
      this.setState({
        birdClass: "bird-flight",
        birdImage: imgBirdFlight
      })
    }, Math.random()*6000+6000);
  }

  render(){
    return (
      <div className={this.state.birdClass} >
        <img src={this.state.birdImage} width="100%"/>
      </div>
    )
  }
}
