var canvas;
var database;
var gameState = 0;
var contestantCount;
var contestant;
var quiz;
var question;

function setup(){
  canvas = createCanvas(850,400);
  database = firebase.database();
  
  quiz = new Quiz();
  quiz.getState()
  quiz.start()
}


function draw(){
  background("pink");

  
}
