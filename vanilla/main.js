const rps = (p1, p2) => {
  if (p1 === p2) return 'Draw!';

  const gameRules = {
    rock: 'scissors',
    paper: 'rock',
    scissors: 'paper',
  };

  return `Player ${gameRules[p1] === p2 ? 1 : 2} won!`;
};

const p1 = 'rock';
const p2 = 'scissors';
console.log(rps(p1, p2)); // Player 1 won
