# High Score and Analytics
The purpose of this application is to collect simple analytics about level completion and failure as well as have a way for us to handle persistent high score leaderboards for the levels in the game.

There are three parts to it:
- Game: Unity requests for submitting analytics
- Server: Node API for collecting and saving information
- Front-end: React application for viewing data live

The purpose of this is specifically for Bug Drop, but it will be written to be generic enough to adapt to other games as needed.

## Game: Unity
The Unity scripts are used for submitting data to the API through POST requests. We have classes for the kinds of data we want to submit and issue the requests as Coroutines on various triggers within the game. These requests happen silently in the background and never block the action of the game.

## Server: Node API
An express-based node api with endpoints for what we need to collect. The API interfaces with a mysql database for the game. Each level has its own table of information.

## Front-end: React
The web version has a React applicaiton that can be used to view the information. There are views for: seeing all the levels, individual level information, individual player information.
