import React, { Component } from "react";
import { Redirect } from "react-router";
import { Link } from "react-router-dom";

class StartPage extends Component {
  state = {
    name: "",
    ready: false,
    wrongName: false
  };

  handleInputChange = event => {
    this.setState({ name: event.target.value });
  };

  handleSubmit = event => {
    event.preventDefault();
    const { name } = this.state;
    if (!name) {
      this.setState({ wrongName: true });
    } else {
      localStorage.setItem("name", name);
      this.setState({ ready: true, wrongName: false });
    }
  };

  componentDidMount() {
    localStorage.setItem("name", "");

    if (!localStorage.getItem("highscores")) {
      const highscores = [
        { name: "Jerry", score: 1225 },
        { name: "Merry", score: 1000 },
        { name: "Donald", score: 225 },
        { name: "Alicia", score: 50 }
      ];
      localStorage.setItem("highscores", JSON.stringify(highscores));
    }
  }

  render() {
    const { name, ready, wrongName } = this.state;

    if (ready) {
      return <Redirect to='/game' />;
    }
    return (
      <div className='start-page row'>
        <div className='col-md-12 col-xs-12'>
          <h1>BlackJack</h1>
        </div>
        <div className='col-md-12 col-xs-12'>
          <form onSubmit={this.handleSubmit}>
            <label>
              <span className='input-header'>Nick:</span>
              <input
                type='text'
                value={name}
                onChange={this.handleInputChange}
              />
              {wrongName ? (
                <span className='validation-message'>Nick is required</span>
              ) : null}
            </label>

            <input className='play-button' type='submit' value='Play' />
          </form>
        </div>
        <div className='mx-auto'>
          <Link to='/highscores'>
            <button className='game-button'>Highscores</button>
          </Link>
        </div>
      </div>
    );
  }
}

export default StartPage;
