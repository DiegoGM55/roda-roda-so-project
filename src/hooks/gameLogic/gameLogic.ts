export interface Player {
  name: string;
  score: number;
  totalScore: number;
  color: string;
}
  
const colors = [
  '#FF5733', '#33FF57', '#3357FF', '#F333FF', '#33FFF3', '#f8fc02', '#A133FF'
];
  
const getRandomColor = (availableColors: string[]): string => {
  const randomIndex = Math.floor(Math.random() * availableColors.length);
  return availableColors.splice(randomIndex, 1)[0];
};
  
export const initializePlayers = (players: Player[]): Player[] => {
  const availableColors = [...colors];
  players.forEach(player => {
    player.color = getRandomColor(availableColors);
    player.score = 0;
    player.totalScore = 0;
  });
  return players;
};