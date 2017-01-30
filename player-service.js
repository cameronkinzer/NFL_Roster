var PlayerService = function(endpointUri, callback){
    var playersData = [];
    
    // this.getPlayerByTeam = function(teamName){
    // 	playerData.filter(function(player){
    // 	  if(player.team == teamName){
    //     return true;}
    // 	});
    // }
    
    this.getPlayersByName = function(firstname){
    var teamData = playersData.filter(function(player){  
    if (player.firstname == firstname){ 
    return true; }

    });
    }
    
    
    this.getPlayersByPosition = function(position){
      var teamData = playersData.filter(function(player){    
          if(player.position == position){
          return true;}
        });
    }
    
 this.getPlayersByTeam = function(team){
  var teamData = playersData.filter(function(player){
    if(player.pro_team == team){
      return true;
    }
  });
  return teamData;
 }
 
 
 function loadPlayerData(){

     
      var localData = localStorage.getItem('playerData');
      if(localData){
          
        playerData = JSON.parse(localData);
        console.log(playerData)
        return callback(); 
      
      } 

      var playersData = [] //Assume this is a large collection of players.

var filteredPlayers = playersData.filter(function(player){ //replace forEach with filter.
    if(player.team === "SF"){ //check to see if they are on the team SF
      return true; //instead of adding it to an array, just return true.
    }
});




 
      var url = "http://bcw-getter.herokuapp.com/?url=";
      var apiUrl = url + encodeURIComponent(endpointUri);

        $.getJSON(apiUrl, function(data){
          playerData = data.body.players;
          console.log(playerData)
          console.log('Player Data Ready')
          console.log('Writing Player Data to localStorage')
          localStorage.setItem('playerData', JSON.stringify(playerData))
          console.log('Finished Writing Player Data to localStorage')
          callback()
        });
    } 
loadPlayerData()
    }