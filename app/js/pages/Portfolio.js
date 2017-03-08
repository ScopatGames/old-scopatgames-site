import React from 'react';
import Card from './../components/Portfolio/Card.js';
import ActiveCard from './../components/Portfolio/ActiveCard.js';
import CardStore from './../stores/CardStore.js';

export default class Portfolio extends React.Component {
  constructor(){
    super();
    this.state = {
      cards: CardStore.getAllCards()
    };
  }



  render(){
    const { cards } = this.state;
    const cardComponents = cards.map((item) => { return <Card key={item.id} {...item}/>; });
    
    return (
      <section className="section-portfolio" id="portfolio">

        <h1>Portfolio</h1>
        <ul className="card-list">
            {cardComponents}
        </ul>
        <ActiveCard/>

      </section>
    )
  }
}
