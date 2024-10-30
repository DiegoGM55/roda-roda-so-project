import React from 'react';
import styles from './Players.module.css';

interface PlayerCardProps {
  name: string;
  score: number;
  color: string;
  isCurrentPlayer: boolean;
  totalScore: number;
}

const PlayerCard: React.FC<PlayerCardProps> = ({ name, score, color, isCurrentPlayer, totalScore }) => {
  return (
    <div
      className={`${styles['card-player']} ${isCurrentPlayer ? styles['current-player'] : ''}`}
      style={{ backgroundColor: color }}
    >
      <div className={styles['player-name']}>{name}</div>
      <div className={styles.score}>{score}</div>
      <div className={styles['total-score-flex']}>
        <div className={styles['total-score']}>Pontos totais: {totalScore}</div>
      </div>
    </div>
  );
};

export default PlayerCard;