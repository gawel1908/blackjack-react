import React, { Component } from 'react';
import { Redirect } from 'react-router';

class StartPage extends Component{
    
    state ={
        name: "",
        ready: false,
        badName: false
    }

    handleInputChange = event => {

        this.setState({name: event.target.value});
        
    }

    handleSubmit = event => {
        event.preventDefault();
        const { name } = this.state;
        if(!name){
            this.setState({badName: true});
        }else{
            
            localStorage.setItem('name', name);
            this.setState({ready: true, badName: false});
        }
       
    }

    componentDidMount(){
        localStorage.setItem('name', '');

        if(!localStorage.getItem('highscores')){
            const highscores = [
                {name: 'Jerry', score: 1225 },
                {name: 'Merry', score: 1000 },
                {name: 'Donald', score: 225 },
                {name: 'Alicia', score: 50 }
            ];
            localStorage.setItem('highscores', JSON.stringify(highscores));
        }
    }

    render(){
        const { name, ready, badName  } = this.state;
        
        if(ready){
            return <Redirect to="/game"/>
        }
        return(
            <div className="start-page">
                <h1>BlackJack</h1>
                <form onSubmit={this.handleSubmit}>
                    <label>
                        <span className="input-header">Nick:</span>
                        <input type="text" value={name} onChange={this.handleInputChange} />
                        {badName ? <span className="validation-message">Nick is required</span> : null}
                    </label>
                    
                    <input className="play-button" type="submit" value="Play" />
                </form>
            </div>
        )
    }
}

export default StartPage;