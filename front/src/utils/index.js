/**
 * Create rules map and return the state value which should be incremented
 * @param playerChoice - on one of the three possible choices - paper, rock, scissors
 * @param computerChoice - the random generated computer choice
 * @returns {string} - the value, corresponding to the state score
 */
export function getWinner(player1Choice, player2Choice, rules) {

  if (player1Choice === player2Choice) return 'draws'
  if (player2Choice === rules[0][player1Choice]) return 'wins';
  else return 'losses';
}

/**
 * Get random choice from an array of possible choices (rock/paper/scissors)
 * @returns {string} - the random generated score
 */
export function getRandomChoice() {
  debugger
  const choices = ['rock', 'paper', 'scissors'];

  return choices[Math.floor(Math.random() * choices.length)];
}