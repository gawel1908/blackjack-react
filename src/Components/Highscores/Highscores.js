import React, { Component } from 'react';

class Highscroes extends Component{

    state = {
        highscores: []
    }

    componentDidMount(){
        if(this.state.highscores.lengh === 0){
            const highscores = JSON.parse(localStorage.getItem('highscores'));
            this.setState({highscores: highscores});
        }
    }

    render(){
        const scores = this.state.highscores.map(score => (
            <div>
                <div>{score.name}</div>
                <div>{score.score}</div>
            </div>
        ))
        return(
            <div>
                {scores}
            </div>
        )
    }
}

export default Highscroes;

