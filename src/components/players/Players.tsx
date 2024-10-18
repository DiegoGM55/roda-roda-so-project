import style from './Players.module.css';
import PlayerCard from './PlayerCard';

interface Player {
    name: string;
    points: number;
    color: string;
  }
  
interface PlayersProps {
    players: Player[];
}

const Players: React.FC<PlayersProps> = ({ players }) => {
    return (
        <div className={style.players}>
            {players.map((player, index) => (
                <PlayerCard key={index} name={player.name} points={player.points} color={player.color} />
            ))}
        </div>
    );
}

export default Players;