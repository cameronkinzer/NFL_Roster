# NFL_Roster
Fantasy Hand-Egg!!!

![NFL Roster](http://i61.tinypic.com/5nvwuq.png)

1. Create a repository for my-roster.
2. Create an index.html file.
3. Create an app.js file.
4. Create a site.css file.
5. Link the script and stylesheet in index.html
6. Link bootstrap in index.html
7. Link jQuery in index.html
8. Add a panel with a header that says "My NFL Roster".
9. Wrap the panel in a div with the class "container".
10. Inside the panel body, create 2 child divs, one with the class "player-roster" and one with the class "player-form".
11. Inside the player-roster div, add another div with the class "player-card". 
  - Set the player-card class to "display:inline-block" and add a "1px solid black" border
  - Add an image to the player card with the src = "http://s.nflcdn.com/static/content/public/image/fantasy/transparent/200x200/"
  - display the player's name
  - display the player's position
  - display the player's number
12. Create a form inside the "player-form" div.
13. Add input fields for playerName, playerPosition, and playerJersey.
14. When the Add button is pressed, it should automatically add a player to the Roster.
15. Create a constructor for Player that accepts 3 arguments: name, position, jersey.
16. When the Add button is pressed, a new Player is created and added to the players array.
17. Use jQuery to target the "player-roster" div, and append the player.

### Key Components ("User Stories")
1. As a fan of sports, I would like a dynamic roster where I can add/remove players and visualize my sports team.
2. I would like a form so that I can add a player to my roster easily.
  - The form should have the following fields:
    - Player Name
    - Player Position
    - Player Jersey
3. I would like the players added to show up in the roster section after being added.
