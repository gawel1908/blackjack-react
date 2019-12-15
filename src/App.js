import React from 'react';
import './App.scss';
import { BrowserRouter as Router, HashRouter, Route } from 'react-router-dom';
import StartPage from './Components/StartPage/StartPage';
import Game from './Components/Game/Game';
import Highscores from './Components/Highscores/Highscores';

function App() {
  return (
    <HashRouter basename="/">
      <Route path="/" exact component={StartPage}/>
      <Route path="/game" exact component={Game}/>
      <Route path="/highscores" exact component={Highscores}/>
    </HashRouter>
  );
}

export default App;
