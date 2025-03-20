function scuberGreetingForFeet(ride){ // The scuberGreetingForFeet function returns greetings based on the distance of the ride.
  // Write your code here!
  if (ride <= 400) { // Free ride for distance less than or equal to 400 feet
    return 'This one is on me!'
  } else if (ride > 400 && ride <= 2000) {
    return 'That will be twenty bucks.'
  } else if (ride > 2000 && ride <= 2500) {
    return 'I will gladly take your thirty bucks.'
  } else { // Does not allow rides over 2500 feet
    return 'No can do.'
  }
}

// If the city is NYC, return "Ok, sounds good.", otherwise return "No go."
function ternaryCheckCity(city) {
  return city === 'NYC' ? "Ok, sounds good." : "No go.";  // Use ternary operator as an alternative to if...else statement.
}

function switchOnCharmFromTip(tip){ // switchOnCharmFromTip function employs switch statement to return response based on the tip that matches a given case.
  // Write your code here!
  switch(tip) {
    case 'generous':
      return "Thank you so much."
    case 'not as generous':
      return "Thank you."
    default:
      return "Bye."
  }
} 