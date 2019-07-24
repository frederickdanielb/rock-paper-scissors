import React from 'react';
import PropTypes from 'prop-types';

import './Playing.css';


const Playing = (props) => {
  const OnHandleChange = (event) => {
    console.log(event)
    if (props.turn === 1)
      props.setCurrentMovePlayer1(event.target.value)

    if (props.turn === 2)
      props.setCurrentMovePlayer2(event.target.value)

    props.setTurn(2);
  }
  return (
    <form onSubmit={props.onPlayerChoiceClick}>



      <div className="form-group row">
        <div className={props.round === 3 ? "col-sm-6" : "col-sm-12"} >
          <h2>
            <b>[Player {props.turn} {props.turn === 1 && props.player1} {props.turn === 2 && props.player2}]</b>
          </h2>
        </div>
        <div className={props.round === 3 ? "col-sm-6" : "col-sm-12"}>
          {props.round === 3 && (
            <table className='table'>
              <thead>
                <tr>
                  <th>Score</th>
                  <th>Winner</th>
                </tr>
              </thead>
              <tbody>
                {props.score.map((s, index) => (
                  <React.Fragment>
                    <tr>
                      <td>{s.round} </td>
                      <td>{s.player}</td>
                    </tr>
                  </React.Fragment>
                ))}

              </tbody>
            </table>
          )}
        </div>
      </div>
      <div className="form-group row">
        <label className="col-sm-4 col-form-label col-form-label">Select Move</label>
        <div className="col-sm-8">
          <select value={props.currentMovePlayer1} onChange={OnHandleChange} className="custom-select mr-sm-2" >
            <option selected>Choose...</option>
            <option value="rock">rock</option>
            <option value="scissors">scissors</option>
            <option value="paper">paper</option>
          </select>
        </div>
      </div>

      <div className="form-group row">
        <div className="col-sm-12">
          <button type="submit" className="btn btn-primary ">OK</button>
        </div>
      </div>
    </form>
  )
}

Playing.propTypes = {
  onPlayerChoiceClick: PropTypes.func,
  player1: PropTypes.string,
  player2: PropTypes.string,
  turn: PropTypes.number,
  setTurn: PropTypes.func


}

export default Playing;