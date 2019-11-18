import React, { Component } from 'react';
import Hand from './Hand';
import DealersHand from './DealersHand';
import cards from '../data/cards';



class Game extends Component{

    state = {
        gameStarted: false,
        bet: 5,
        deck: [],
        playerCards: [],
        dealerCards: [],
        money: 100,
        playerScore: 0,
        dealerScore: 0,
        playerWin: false,
        dealerWin: false,
        playerName: '',
        draw: false
        
    }

    betLess = () => {
        if(this.state.bet >= 1){
            this.setState(state => ({ bet: state.bet - 5 }));
        }
    }
    betMore = () => {
        if(this.state.bet <= this.state.money){
            this.setState(state => ({ bet: state.bet + 5 }));
        }
    }

    letsPlay = () =>{
        this.setState({gameStarted: true})
    }

    getRandomCards = () =>{
        
        for(let i = 0; i < 2; i++){
            setTimeout(this.getPlayerCard, 100);
            
        }
        this.getDealerCard();
    }

    getDealerCard = () =>{
        
        const { deck, dealerCards, playerScore, money, bet } = this.state;
        let { dealerScore } = this.state 
        const deckCards = deck.length > 0 ? deck : cards;
        
        const randomIndex = Math.floor(Math.random() * deckCards.length);
        dealerScore += deckCards[randomIndex].cardValue;
        dealerCards.push(deckCards[randomIndex]);
        deckCards.splice(randomIndex, 1);
        const statesToSet = {
            dealerScore: dealerScore,
            dealerCards: dealerCards,
            deck: deckCards
        };
        if(dealerCards.length === 2){
            if(dealerScore === playerScore){
                statesToSet.draw = true;
                statesToSet.money = money + bet;
            } else if(dealerScore === 21){
                statesToSet.dealerWin = true;
                statesToSet.money = money - bet;
            } else if(playerScore === 21){
                statesToSet.playerWin = true;
                statesToSet.money = money + bet * 2;
            } else if(dealerScore > playerScore){
                statesToSet.dealerWin = true;
                statesToSet.money = money - bet;
            }else if(dealerScore < playerScore){
                statesToSet.playerWin = true;
                statesToSet.money = money + bet * 2;
            }
        }
        this.setState(statesToSet);
    }

    startNewGame = () =>{
        this.setState({
                gameStarted: false,
                deck: [],
                playerCards: [],
                dealerCards: [],
                playerScore: 0,
                dealerScore: 0,
                playerWin: false,
                dealerWin: false,
                draw: false
            });
        
    }
    getPlayerCard = () => {
        
        const { deck, playerCards, bet } = this.state;
        let { playerScore, playerWin, dealerWin, money } = this.state;
        const deckCards = deck.length > 0  ? deck : cards;
        const randomIndex = Math.floor(Math.random() * deckCards.length);
        playerScore += deckCards[randomIndex].cardValue;
        playerCards.push(deckCards[randomIndex]);
        if(playerScore === 21){
            playerWin = true;
            money = money + bet * 2;
        }
        if(playerScore > 21){
            dealerWin = true;
            money = money - bet;
        }
        
        this.setState({
            deck: deckCards,
            playerCards: playerCards,
            playerScore: playerScore,
            playerWin: playerWin,
            dealerWin: dealerWin,
            money: money
        });
        
        
    }

    endRound = () =>{
        
        this.getDealerCard();
        
    }
    
    componentDidMount(){
        
        this.getRandomCards(4);
        const playerName = localStorage.getItem('name');
        this.setState({playerName: playerName})
        
    }

    componentDidUpdate(){
        if(this.state.deck.length === 0){
            this.getRandomCards();
        }
    }


    render(){
        const { gameStarted, bet, money, playerName, dealerScore, playerScore, dealerCards, playerCards, playerWin, dealerWin, draw } = this.state;
        if(gameStarted){
            return(
                <div>
                    <DealersHand cards={dealerCards} />
                    <div className="panel">
                            <h2>Dealer's score: {dealerScore}</h2>
                    </div>
                    <Hand cards={playerCards} />
                    <div className="game-status">
                        <div className="info lose">{dealerWin ? 'You lost.' : null}</div>
                        <div className="info win">{playerWin ? 'You won!' : null}</div>
                        <div className="info draw">{draw ? 'Draw.' : null}</div>
                        <div>
                            { draw || playerWin || dealerWin ? <button className="game-button" onClick={this.startNewGame}>Play again</button> : null}
                        </div>
                    </div>
                    <div className="panel">
                            <h2>Your score: {playerScore}</h2>
                    </div>
                    <div className="panel">
                        
                        <button className="game-button" onClick={this.getPlayerCard} disabled={playerScore > 20 || playerWin || dealerWin}>Get card</button>
                        <button className="game-button" onClick={this.endRound} disabled={playerScore > 20 || playerWin || dealerWin}>End round</button>
                    </div>
                </div>
            )
        }else{
            return(
                <div className="bet-container">
                    <div>
                        <h3>Your money: {money}</h3>
                    </div>
                    <div>
                        <button className="game-button" disabled={bet === 1} onClick={this.betLess}>-</button>
                        <span className="bet">{bet}</span>
                        <button className="game-button" disabled={bet >= money} onClick={this.betMore}>+</button>
                    </div>
                    <button className="game-button bet-button" onClick={this.letsPlay}>Play</button>

                </div>
                
            )
        }
        
    }
}

export default Game;