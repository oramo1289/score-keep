import React from 'react';

import {Players} from './../api/players'


export default class AddPlayer extends React.Component {
  handleSubmit(e) {
    let playerName = e.target.playerName.value;//target en este caso es form
    e.preventDefault();

    if (playerName) {
      e.target.playerName.value = '';

      Players.insert({
        name:playerName,
        score: 0
      });
    }
  }
//se pierde el this asi que tienes que usar bind() para que le de continuidad al this que está usando
  render() {
    return(
      <div className="item">
        <form className="form " onSubmit={this.handleSubmit.bind(this)}>
          <input className="form__input" type="text" name="playerName" placeholder="Player name"/>
          <button className="button">Add Player</button>
        </form>
      </div>
    );
  }
}
