import React, { Component } from "react";

const Bet = props => {
  const { bet, money, betLess, betMore, letsPlay } = props;
  return (
    <div className='bet-container'>
      <div>
        <h3>Your money: {money}</h3>
      </div>
      <div>
        <button className='game-button' disabled={bet === 5} onClick={betLess}>
          -
        </button>
        <span className='bet'>{bet}</span>
        <button
          className='game-button'
          disabled={bet >= 200 || bet === money}
          onClick={betMore}>
          +
        </button>
      </div>
      <button className='game-button bet-button' onClick={letsPlay}>
        Play
      </button>
    </div>
  );
};

export default Bet;
