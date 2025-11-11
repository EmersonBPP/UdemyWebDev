// Array of button colors used in the game
var buttonColours = ["red", "blue", "green", "yellow"];

// Array to store the sequence of colors the game generates
var gamePattern = [];
// Array to store the sequence of colors clicked by the user
var userClickedPattern = [];

// Flag to track if the game has started
var started = false;
// Current level/round of the game
var level = 0;

// Event listener for any key press to start the game
$(document).keypress(function() {
  if (!started) {
    $("#level-title").text("Level " + level);
    nextSequence();
    started = true;
  }
});

// Event listener for button clicks during gameplay
$(".btn").click(function() {
  // Get the color ID of the clicked button
  var userChosenColour = $(this).attr("id");
  // Add the clicked color to the user's pattern
  userClickedPattern.push(userChosenColour);

  // Play sound and animate the button press
  playSound(userChosenColour);
  animatePress(userChosenColour);

  // Check if the user's click matches the game pattern
  checkAnswer(userClickedPattern.length-1);
});

// Function to verify if the user's input matches the game pattern
function checkAnswer(currentLevel) {
  // Compare user's color with game's color at the current level
  if (gamePattern[currentLevel] === userClickedPattern[currentLevel]) {
    // Check if the user has completed the entire sequence correctly
    if (userClickedPattern.length === gamePattern.length){
      // Wait 1 second before displaying the next sequence
      setTimeout(function () {
        nextSequence();
      }, 1000);
    }
  } else {
    // User clicked the wrong color
    playSound("wrong");
    // Add visual feedback for game over
    $("body").addClass("game-over");
    $("#level-title").text("Game Over, Press Any Key to Restart");

    // Remove the game-over styling after 200ms
    setTimeout(function () {
      $("body").removeClass("game-over");
    }, 200);

    // Reset the game state
    startOver();
  }
}

// Function to generate the next color in the game sequence
function nextSequence() {
  // Clear the user's pattern for the new round
  userClickedPattern = [];
  // Increment the level
  level++;
  // Update the level display
  $("#level-title").text("Level " + level);
  // Generate a random number between 0-3
  var randomNumber = Math.floor(Math.random() * 4);
  // Get the corresponding color from the array
  var randomChosenColour = buttonColours[randomNumber];
  // Add the color to the game pattern
  gamePattern.push(randomChosenColour);

  // Flash the button with fade animation
  $("#" + randomChosenColour).fadeIn(100).fadeOut(100).fadeIn(100);
  // Play the sound for the selected color
  playSound(randomChosenColour);
}

// Function to add visual feedback when a button is pressed
function animatePress(currentColor) {
  // Add the "pressed" class for styling
  $("#" + currentColor).addClass("pressed");
  // Remove the "pressed" class after 100ms
  setTimeout(function () {
    $("#" + currentColor).removeClass("pressed");
  }, 100);
}

// Function to play sound effects
function playSound(name) {
  // Create a new audio object with the specified sound file
  var audio = new Audio("sounds/" + name + ".mp3");
  // Play the audio
  audio.play();
}

// Function to reset the game to its initial state
function startOver() {
  level = 0;
  gamePattern = [];
  started = false;
}
