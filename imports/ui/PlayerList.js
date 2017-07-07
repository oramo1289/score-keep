import React from 'react';
import FlipMove from 'react-flip-move';
import PropTypes from 'prop-types';

import Player from './Player';

export default class PlayerList extends React.Component{
  renderPlayers() {
    if (this.props.players.length === 0) {
      return (
        <div className="item">
          <p className="item__message">No hay elementos en la lista</p>
        </div>
      );
    } else {
      return this.props.players.map((player) => {//este player es elmismo de abajo
        return <Player key={player._id} player={player}/>;//este
      });
    }
  }
  render() {
    return (
      <div>
        <FlipMove duration={350} easing="ease-out" maintainContainerHeight={true}>
          {this.renderPlayers()}
        </FlipMove>
      </div>
    );
  }
};

PlayerList.propTypes = {
  players: PropTypes.array.isRequired
}
