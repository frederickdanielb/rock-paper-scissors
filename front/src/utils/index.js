export function getWinner(player1Choice, player2Choice, rules) {

  if (player1Choice === player2Choice) return 'draws'
  if (player2Choice === rules[0][player1Choice]) return 'wins';
  else return 'losses';
}