import React from 'react';
import PropTypes from 'prop-types';

import './EndGame.css';


const EndGame = (props) => {
  return (
    <form onSubmit={props.OnPlayAgain}>
      <div className="form-group row">
        <div className="col-sm-12">
          <h2>
            <b>We have a WINNER</b>
          </h2>
        </div>
      </div>
      <div className="form-group row">
        <div className="col-sm-12">
          <h2>
            <b>[{props.winner}] is the new EMPEROR!</b>
          </h2>
        </div>
      </div>

      <div className="form-group row">
        <div className="col-sm-12">
          <button type="submit" className="btn btn-primary ">
            PLAY AGAIN
          </button>
        </div>
      </div>

    </form>
  )
}

EndGame.propTypes = {
  winner: PropTypes.string,
  OnPlayAgain:PropTypes.func
}

export default EndGame;
