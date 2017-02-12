$(function(){
// Your magic happens here!
//	This is a javacripty thing I found on the internet
//	function makeid(){
//		var text = "";
//		var possible = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz";
//
//		for( var i=0; i < 5; i++ )
//			text += possible.charAt(Math.floor(Math.random() * possible.length));
//		return text;
//	}

//variables go here

var letters = ["a","b","c","d","e","f","g","h"];
var wins =  0;
var losses = 0;
var playerGuess = $(".guess").val();
var guessRemainder = 0;
var guessCount = 1;

var compGuess = Math.floor((Math.random() * letters.length) + 1);

//	for (var i = 0; i < letters.length; i++) {
//		var answer = playerGuess[i];
//	}

// When player is entering letters??? and computer is selecting its answer
	$("#start").on('click', function(){
		console.log(compGuess);
	});

	//When user types letter, print to Your Guesses so far:
	$("input").keyup(function(){
		var playerGuess = $(this).val();
		$("#guessCount").append( playerGuess + " ");
	});

	if(playerGuess === compGuess){
		wins++;
	} else {
		losses++;
	}
//reset button
	$("reset").on('click', function(){
		wins = 0;
		losses = 0;
		$("input").val("");
		$("#guessCount").empty();
	})

//at some point you'll need to clear the playerGuess contents
//maybe use 
// $("#reset").click(function(){
// 	 $('#playerGuess').empty();
// });
// 
//
//


});