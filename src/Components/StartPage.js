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

        if(!this.state.name){
            return;
        }
        if(!this.state.age){
            return;
        }
        if(this.state.age < 18){
            return;
        }
        this.setState({ready: true});

    }

    render(){
        const { name, age, ready } = this.state;
        
        if(this.state.ready){
            return <Redirect to="/game"/>
        }
        return(
            <form onSubmit={this.handleSubmit}>
                <label>
                    Nick:
                    <input type="text" value={name} onChange={this.handleInputChange} />
                </label>
                <label>
                    Wiek:
                    <input type="number" value={age} onChange={this.handleInputChange} />
                </label>
                <input type="submit" value="Graj" />
            </form>
        )
    }
}

export default StartPage;