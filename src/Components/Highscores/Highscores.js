import React, { Component } from 'react';
import { Link } from 'react-router-dom';


class Highscroes extends Component{

    state = {
        highscores: []
    }

    componentDidMount(){
        if(this.state.highscores.length === 0){
            const highscores = JSON.parse(localStorage.getItem('highscores'));
            highscores.sort((a, b) =>{
                if (a.score > b.score) return -1;
                if (b.score > a.score) return 1;
              
                return 0;
            })
            this.setState({highscores: highscores});
        }
    }

    render(){
        const scores = this.state.highscores.map((score, i)=> (
            <tr key={i}>
                <td>{i + 1}</td>
                <td>{score.name}</td>
                <td>{score.score}</td>
            </tr>
        ));
        
        return(
            <div className="row">
            
            <div className="col-md-12 text-center mt-5">
                <Link to="/"><button className="game-button">Start Page</button></Link>
            </div>
            <div className="col-md-8 mx-auto mt-5 text-center">
                <div className="mb-3">
                    <h2>Top 10</h2>
                </div>
                
                <table className="table table-striped table-dark">
                    <thead>
                        <tr>
                            <th>Place</th>
                            <th>Nick</th>
                            <th>Score</th>
                        </tr>
                    </thead>
                    <tbody>
                        {scores}
                    </tbody>
                </table>
            </div>
            </div>
        )
    }
}

export default Highscroes;

