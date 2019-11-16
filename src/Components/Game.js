import React, { Component } from 'react';
import Hand from './Hand';
import cards from '../data/cards';



class Game extends Component{

    state = {
        gameStarted: false,
        bet: 1,
        deck: [],
        playerCards: [],
        oponentCards: [],
        money: 100,
        playerScore: 0,
        oponentScore: 0,
        playerWin: false,
        oponentWin: false,
        playerName: ''
        
    }

    betLess = () => {
        if(this.state.bet >= 1){
            this.setState(state => ({ bet: state.bet - 1 }));
        }
    }
    betMore = () => {
        if(this.state.bet <= this.state.money){
            this.setState(state => ({ bet: state.bet + 1 }));
        }
    }

    letsPlay = () =>{
        this.setState({gameStarted: true})
    }

    getRandomCards = () =>{
        
        const { deck, playerCards, oponentCards } = this.state;
        let { oponentScore, playerScore } = this.state 
        const deckCards = deck.length > 0 ? deck : cards;
        for(let i = 0; i < 4; i++){
            const randomIndex = Math.floor(Math.random() * deckCards.length);
            if(i < 2){
                playerScore += deckCards[randomIndex].cardValue;
                playerCards.push(deckCards[randomIndex]);
            }else{
                oponentScore += deckCards[randomIndex].cardValue;
                oponentCards.push(deckCards[randomIndex]);
            }
            deckCards.splice(randomIndex, 1);
            
        }
        if(playerScore === 21 || oponentScore === 21){
            this.getRandomCards();
            return;
        }
        this.setState({
            playerCards: playerCards,
            deck: deckCards,
            playerScore: playerScore,
            oponentScore: oponentScore
        });
    }

    startNewGame = () =>{
        this.setState(state =>{ 
            return {
                gameStarted: false,
                deck: [],
                playerCards: [],
                oponentCards: [],
                playerScore: 0,
                oponentScore: 0,
                playerWin: false,
                oponentWin: false
            }
        });
        
    }
    getPlayerCard = () => {
        
        const { deck, playerCards, bet } = this.state;
        let { playerScore, playerWin, oponentWin, money } = this.state;
        const randomIndex = Math.floor(Math.random() * deck.length);
        playerScore += deck[randomIndex].cardValue;
        playerCards.push(deck[randomIndex]);
        
        if(playerScore === 21){
            playerWin = true;
            money = money + bet * 2;
        }
        if(playerScore > 21){
            oponentWin = true;
            money = money - bet;
        }
        this.setState({
            deck: deck,
            playerCards: playerCards,
            playerScore: playerScore,
            playerWin: playerWin,
            oponentWin: oponentWin,
            money: money
        });
        
        if(playerScore < 21){
            setTimeout(() => {
                this.getOponentCard();
            }, 500);
        }
    }

    getOponentCard = () =>{
        const { deck, oponentCards, bet } = this.state;
        let { oponentScore, oponentWin, playerWin, money } = this.state;
        const randomIndex = Math.floor(Math.random() * deck.length);
        oponentScore += deck[randomIndex].cardValue;
        oponentCards.push(deck[randomIndex]);
        if(oponentScore === 21){
            oponentWin = true;
            money = money - bet;
        }
        if(oponentScore > 21){
            playerWin = true;
            money = money + bet * 2;
        }
        this.setState({
            deck: deck,
            oponentCards: oponentCards,
            oponentScore: oponentScore,
            oponentWin: oponentWin,
            playerWin: playerWin,
            money: money
            
        });

    }

    endRound = () =>{
        const { oponentScore, playerScore } = this.state;
        
        if(oponentScore < 19){
            this.getOponentCard();
        }
        if(oponentScore < playerScore){
            this.setState({playerWin: true});
        }
    }
    
    componentDidMount(){
        
        this.getRandomCards(4);
        const playerName = localStorage.getItem('name');
        
        this.setState({playerName: playerName})
        
    }

    componentDidUpdate(){
        if(this.state.deck.length === 0){
            this.getRandomCards(4);
        }
    }


    render(){
        const { gameStarted, bet, money, playerName, oponentScore, playerScore, oponentCards, playerCards, playerWin, oponentWin } = this.state;
        if(gameStarted){
            return(
                <div>
                    <div className="player-info">
                        <h3>Gracz: Przeciwnik</h3>
                    </div>
                    <Hand cards={oponentCards}/>
                    <div className="panel">
                        <h2>Wynik przeciwnika: {oponentScore}</h2>
                    </div>
                    <div className="player-info">
                            <h3>Gracz: {playerName}</h3>
                    </div>
                    <Hand cards={playerCards}/>
                    <div className="game-status">
                        <div className="info lose">{oponentWin ? 'Przegrana.' : null}</div>
                        <div className="info win">{playerWin ? 'Wygrana!' : null}</div>
                        <div>
                            {playerScore > 20 || playerWin || oponentWin ? <button className="game-button" onClick={this.startNewGame}>Zagraj jeszcze raz</button> : null}
                        </div>
                    </div>
                    <div className="panel">
                            <h2>Wynik: {playerScore}</h2>
                        </div>
                    <div className="panel">
                        
                        <button className="game-button" onClick={this.getPlayerCard} disabled={playerScore > 20 || playerWin || oponentWin}>Dobierz</button>
                        <button className="game-button" onClick={this.endRound} disabled={playerScore > 20 || playerWin || oponentWin}>Zakończ rundę</button>
                    </div>
                </div>
            )
        }else{
            return(
                <div className="bet-container">
                    <div>
                        <h3>Twoje żetony: {money}</h3>
                    </div>
                    <div>
                        <button className="game-button" disabled={bet === 1} onClick={this.betLess}>-</button>
                        <span className="bet">{bet}</span>
                        <button className="game-button" disabled={bet >= money} onClick={this.betMore}>+</button>
                    </div>
                    <button className="game-button bet-button" onClick={this.letsPlay}>Gramy</button>

                </div>
                
            )
        }
        
    }
}

export default Game;