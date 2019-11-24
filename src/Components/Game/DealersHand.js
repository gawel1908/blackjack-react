import React, { Component } from 'react';
import Card from './Card';

const DealersHand = props => {

    const { cards } = props;
    return (
        <div className="hand">
            <Card className={cards[0].cardClass}/>
            <Card className={cards[1] ? cards[1].cardClass : 'cards card-back'}/>
        </div>
    );
}



export default DealersHand;