import React, { Component } from 'react';
import { Redirect } from 'react-router'

class StartPage extends Component{
    
    state ={
        name: "",
        age: "",
        ready: false,
        badName: false
    }

    handleInputChange = event => {
        if(event.target.type === 'text'){
            this.setState({name: event.target.value});
        }else{
            this.setState({age: event.target.value});
        }
    }


    handleSubmit = event => {
        event.preventDefault();
        const {age, name} = this.state;
        if(!name){
            this.setState({badName: true});
        }else{
            
            localStorage.setItem('name', name);
            this.setState({ready: true, badName: false});
        }
       

    }

    render(){
        const { name, age, ready, badName  } = this.state;
        
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