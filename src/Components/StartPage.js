import React, { Component } from 'react';
import { Redirect } from 'react-router'

class StartPage extends Component{
    
    state ={
        name: "",
        age: "",
        ready: false
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
            return;
        }
        if(!age){
            return;
        }
        if(age < 18){
            return;
        }
        localStorage.setItem('name', name);
        this.setState({ready: true});

    }

    render(){
        const { name, age, ready } = this.state;
        
        if(ready){
            return <Redirect to="/game"/>
        }
        return(
            <div className="start-page">
                <form onSubmit={this.handleSubmit}>
                    <label>
                        <span className="input-header">Nick:</span>
                        <input type="text" value={name} onChange={this.handleInputChange} />
                    </label>
                    <label>
                        <span className="input-header">Wiek:</span>
                        <input type="number" value={age} onChange={this.handleInputChange} />
                    </label>
                    <input className="play-button" type="submit" value="Graj" />
                </form>
            </div>
        )
    }
}

export default StartPage;