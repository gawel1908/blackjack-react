import React, { Component } from 'react';
import Card from './Card';

const Hand = props => {

    console.log(props.cards);
    const cards = props.cards.map((card, i) => <Card key={i} className={card.cardClass}/>);
    console.log(cards);
    return (
        <div className="hand">
            {cards}
        </div>
    );
}



export default Hand;