import React from 'react';
import ReactDOM from 'react-dom';
import {Meteor} from 'meteor/meteor';
import {Tracker} from 'meteor/tracker';//sirve para actualizar el dom

import {Players, calculatePlayersPositions} from './../imports/api/players';//importo la base de datos al cliente
import App from './../imports/ui/App';




Meteor.startup(() =>{
  Tracker.autorun(() => {
    let players = Players.find({}, {sort:{score: -1}}).fetch();
    let positionPlayers = calculatePlayersPositions(players);
    let name = 'Oscar';
    let title = 'Score Keeps';
  ReactDOM.render(<App title={title} players={positionPlayers} name={name}/>, document.getElementById('app'));
  });
  // Players.insert({
  //   name:'Jean',
  //   score: 58
  // });
}); //se llama una vez que el dom este listo

//https://rauchg.com/2014/7-principles-of-rich-web-applications
