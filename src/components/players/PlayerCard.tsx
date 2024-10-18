import React from 'react';
import styles from './Players.module.css';

interface PlayerCardProps {
  name: string;
  points: number;
  color: string
}

const PlayerCard: React.FC<PlayerCardProps> = ({ name, points, color }) => {

  return (
    <div className={styles['card-player']} style={{ backgroundColor: color }}>
      <div className={styles['player-name']}>{name}</div>
      <div className={styles.points}>{points}</div>
    </div>
  );
};

export default PlayerCard;