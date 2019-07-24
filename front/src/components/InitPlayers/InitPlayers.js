import React from 'react';
import PropTypes from 'prop-types';

import './InitPlayers.css';


const InitPlayers = (props) => {
  const OnHandleChange = (event) => {
    console.log(event)
    if (event.target.id === 'player1')
      props.setPlayer1(event.target.value);
    if (event.target.id === 'player2')
      props.setPlayer2(event.target.value);
  }
  return (
    <form onSubmit={props.OnHandleSubmit}>

      <div className="form-group row">
        <label className="col-sm-3 col-form-label col-form-label">Player 1</label>
        <div className="col-sm-9">
          <input type="text" value={props.player1} onChange={OnHandleChange} className="form-control" id="player1" />    </div>
      </div>
      <div className="form-group row">
        <label className="col-sm-3 col-form-label">Player 2</label>
        <div className="col-sm-9">
          <input type="text" value={props.player2} onChange={OnHandleChange} className="form-control" id="player2" />
        </div>
      </div>

      <div className="form-group row">
        <div className="col-sm-12">
          <button type="submit" className="btn btn-primary ">START</button>
        </div>
      </div>
    </form>
  )
}

InitPlayers.propTypes = {
  OnHandleSubmit: PropTypes.func,
  player1: PropTypes.string,
  player2: PropTypes.string,
  setPlayer1: PropTypes.func,
  setPlayer2: PropTypes.func


}

export default InitPlayers;