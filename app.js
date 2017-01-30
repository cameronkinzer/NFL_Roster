var playerCtrl = new PlayerController()
// var players = []
// function drawPlayers(roster) {
//     var rosterElem = document.getElementById('player-roster')
//     var template = ``

//     for (var i = 0; i < roster.length; i++) {
//         player = roster[i];
//         template += `<div class="player-card">
//       <img src= "http://s.nflcdn.com/static/content/public/image/fantasy/transparent/200x200/">
//       <div class="card-block"> 
//       <p>${player.name}</p>
//       <p>${player.position}</p> 
//       <p>${player.number}</p> 
//       </div> 
//       </div> 
//       </div>`
//     }
// rosterElem.innerHTML=template

// }



// function addPlayer(event) {
//     event.preventDefault()

//     var form = event.target

//     var playerName = form['player-name'].value
//     var playerPosition = form['player-position'].value
//     var playerNumber = form['player-number'].value

//     players.push(new Player(playerName, playerPosition, playerNumber));
//     //addPlayer(playerName, playerPosition, playerNumber) 
//     drawPlayers(players)
// }




// function Player(playerName, playerPosition, playerNumber) {
//     this.name = playerName,
//         this.image = "http://s.nflcdn.com/static/content/public/image/fantasy/transparent/200x200"
//     this.position = playerPosition,
//         this.number = playerNumber
// }