import {Mongo} from 'meteor/mongo';
import numeral from 'numeral';

export const Players = new Mongo.Collection('players');

export const calculatePlayersPositions = (players) => {
  let rank = 1;

  return players.map((player, index)=>{// es numero del elemento dentro de la lista que va dede 0 en adelante
    if(index !== 0 && players[index - 1].score > player.score){//si es cero la condiciòn no avanza porque cero es la primer persona en el array y no quieres que la primera persona sesa la segunda, pero si no es cero y la persona antes que yo tiene un score menor al mìo le agrega uno al rango para que vaya abajo de mi
      rank++;
    }

    return {
      ...player,
      rank,
      position: numeral(rank).format('0o')
    }
  });
};
