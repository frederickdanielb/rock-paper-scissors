import React, { Suspense, useEffect, useState } from 'react';
import logo from './logo.svg';
import './App.css';
import { getRulesUrl } from '../services/services';
import InitPlayers from './InitPlayers/InitPlayers';
import Playing from "./Playing/Playing";
import { getWinner } from '../utils';
const App = () => {
  const [win, setWin] = useState('');
  const [player1, setPlayer1] = useState('');
  const [player2, setPlayer2] = useState('');
  const [currentGameResult, setCurrentGameResult] = useState(null);
  const [rules, setRules] = useState([]);
  const [ready, setReady] = useState(false);
  const [round, setRound] = useState(0);
  const [turn, setTurn] = useState(1);
  const [currentMovePlayer1, setCurrentMovePlayer1] = useState('');
  const [currentMovePlayer2, setCurrentMovePlayer2] = useState('');
  const [score, setScore] = useState([]);


  function applyRules() {
    fetch(getRulesUrl)
      .then(response => response.json())
      .then((response) => {
        setRules([response]);
        setReady(true);
      })
      .catch(err => console.log(err.message))
  }
  function onPlayerChoiceClick(event) {
    let result = '';
    if (currentMovePlayer1 !== '' && currentMovePlayer2 !== '')
      result = getWinner(currentMovePlayer1, currentMovePlayer2, rules);
    setScore([
      ...score, 
      { 
        round: round, 
        player: result === 'wins' ? player1 : (result === 'losses' ? player2 : result), 
        result: result 
      }
      ]);

    setCurrentMovePlayer1('');
    setCurrentMovePlayer2('');
    setTurn(1);
    if (round < 3)
      setRound(round + 1);
    event.preventDefault();
  }

  useEffect(() => {
    applyRules();
  }, []);
  useEffect(() => {
    if (ready)
      console.log(rules, 'Set rules in state OK')

    if (score.length > 0)
      console.log(score, 'score')
  });

  const OnHandleSubmit = (event) => {
    if (player1 !== '' && player2 !== '') {
      setRound(1);
    } else {
      alert('Debe llenar todos los campos ');
    }
    event.preventDefault();
  }
  return (
    <div className="App">
      <div className='initGame'>
        <div className="card" style={{ maxWidth: "120%" }}  >
          <div className="card-body">
            {!ready && round === 0 && (<h1>Still Loading…</h1>)}
            {ready && round === 0 && (<h1>Enter Player's Names</h1>)}
            {ready && round === 1 && (<h1>Round {round}</h1>)}
            {ready && round === 2 && (<h1>Round {round}</h1>)}
            {ready && round === 3 && (<h1>Round {round}</h1>)}
            {ready && round === 0 && (
              <InitPlayers
                setPlayer1={setPlayer1}
                setPlayer2={setPlayer2}
                player1={player1}
                player2={player2}
                OnHandleSubmit={OnHandleSubmit}
              />
            )}
            {ready && round >0 && round <= 3&& (
              <Playing
                player1={player1}
                player2={player2}
                turn={turn}
                setTurn={setTurn}
                onPlayerChoiceClick={onPlayerChoiceClick}
                currentMovePlayer2={currentMovePlayer2}
                currentMovePlayer1={currentMovePlayer1}
                setCurrentMovePlayer1={setCurrentMovePlayer1}
                setCurrentMovePlayer2={setCurrentMovePlayer2}
                round={round}
                score={score}
              />
            )}
          </div>
        </div>
      </div>




    </div>
  );
}

export default App;
