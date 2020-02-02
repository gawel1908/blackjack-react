import React, { Component } from "react";
import Card from "./Card";

const DealersHand = props => {
  const { cards } = props;

  return (
    <div className='hand'>
      {cards.map((card, i) => (
        <Card key={i} className={card.cardClass} />
      ))}
      <Card
        key='5'
        className={cards[1] ? cards[1].cardClass : "cards card-back"}
      />
    </div>
  );
};

export default DealersHand;
