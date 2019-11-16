import React from 'react';
import './App.css';
import { BrowserRouter as Router, Link, Route } from 'react-router-dom';
import StartPage from './Components/StartPage';
import Game from './Components/Game';
import HighScores from './Components/HighScores';

function App() {
  return (
    <Router>
      <Route path="/" exact component={StartPage}/>
      <Route path="/game" exact component={Game}/>
    </Router>
  );
}

export default App;
