function PlayerController(){
var loading = true;
var apiUrl = "http://api.cbssports.com/fantasy/players/list?version=3.0&SPORT=football&response_format=json"; 
var playerService = new PlayerService(apiUrl, ready);


function ready(){
    loading = false; //stop the spinner

    //Now that all of our player data is back we can safely setup our bindings for the rest of the view.
    
    $('#some-button').on('click',function(){
        console.log('btn working')
      var teamSF = playerService.getPlayersByTeam('SF');
      teamSF()
    })
}
 



function drawPlayer(roster) {
    var rosterElem = document.getElementById('player-roster')
    var template = ``

    for (var i = 0; i < roster.length; i++) {
        player = roster[i];
        template += `<div class="player-card">
      <img src= "http://s.nflcdn.com/static/content/public/image/fantasy/transparent/200x200/">
      <div class="card-block"> 
      <p>${player.name}</p>
      <p>${player.position}</p> 
      <p>${player.number}</p> 
      </div> 
      </div> 
      </div>`
    }
rosterElem.innerHTML=template

} 
}



