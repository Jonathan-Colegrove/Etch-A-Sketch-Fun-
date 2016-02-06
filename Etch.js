$(document).ready(function(){
  buildGrid(small);
  etch();
  clearScreen();
  color();
  smallsq();
});

var small = 120;
var scrnwidth = 600;
var scrnheight = 400;


//Build Grid - default size is small
var buildGrid = function(x) {
  var squareSize = (scrnwidth/x);
  $('.square').remove();

  for(var i = 0; i < (x*x)*(scrnheight/scrnwidth) ; i++) {
    $('#grid').append("<div class='square'></div>")
  }

  $('.square').width(squareSize);
  $('.square').height(squareSize);
};


//Small Squares
var smallsq = function(){
  $('#leftnob').on('click', function(){
    screenReset();
    buildGrid(small);
    etch();
  });
};



//Black Etch
var etch = function(){
  $('.square').on('mouseover', function(){
    $(this).css("background-color", "#000");
  });
};


//Color Etch
var color = function(){
  $('#rightnob').on('click', function(){
    screenReset();
    $('.square').on('mouseover', function(){
      $(this).css("background-color", Randrgb);
    });
  });
};


//Random RGB Generator
var Randrgb = function () {
	var red= Math.floor((Math.random()*255));
	var green= Math.floor((Math.random()*255));
	var blue= Math.floor((Math.random()*255));
  return "rgb(" + red + "," + green + "," + blue + ")";
};



//Clear button - Calling screenReset
var clearScreen = function() {
  $('#clear').click(function() {
    screenReset();
  });
};


//Unbind & Reset
var screenReset = function(){
   $('.square').unbind();
   $('.square').css({"background-color": "#E8E8E8", "opacity": "1"});
};