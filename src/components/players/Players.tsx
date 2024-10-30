import style from './Players.module.css';
import PlayerCard from './PlayerCard';

interface Player {
    name: string;
    score: number;
    totalScore: number;
    color: string;
}
  
interface PlayersProps {
    players: Player[];
    currentPlayerIndex: number;
}

const Players: React.FC<PlayersProps> = ({ players, currentPlayerIndex }) => {
    return (
        <div className={style.players}>
            {players.map((player, index) => (
                <PlayerCard
                    key={index}
                    name={player.name}
                    score={player.score}
                    color={player.color}
                    totalScore={player.totalScore}
                    isCurrentPlayer={index === currentPlayerIndex}
              />
            ))}
        </div>
    );
}

export default Players;