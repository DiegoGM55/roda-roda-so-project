import React, { useState } from 'react';
import styles from './Modal.module.css';
import { Player, initializePlayers } from '../../gameLogic/gameLogic';

interface ModalProps {
  onStartGame: (players: Player[]) => void;
}

const Modal: React.FC<ModalProps> = ({ onStartGame }) => {
  const [showModal, setShowModal] = useState(true);
  const [players, setPlayers] = useState<Player[]>([{ name: '', points: 0, color: '' }]);

  const handleAddPlayer = () => {
    if (players.length < 4) {
      setPlayers([...players, { name: '', points: 0, color: '' }]);
    }
  };

  const handleRemovePlayer = (index: number) => {
    const newPlayers = players.filter((_, i) => i !== index);
    setPlayers(newPlayers);
  };

  const handleChange = (index: number, value: string) => {
    const newPlayers = players.map((player, i) => 
      i === index ? { ...player, name: value } : player
    );
    setPlayers(newPlayers);
  };

  const handleStartGame = () => {
    if (players.length < 2) {
      alert('Tem que ter no mínimo 2 jogadores para começar.');
      return;
    }

    const updatedPlayers = initializePlayers(players);
    onStartGame(updatedPlayers);

    setShowModal(false);
  };

  if (!showModal) {
    return null;
  }

  const handleDisabledButton = players.some(player => player.name === '');

  return (
    <div className={styles['modal-overlay']}>
      <div className={styles['modal-content']}>
        <div className={styles['modal-header']}>Add Players</div>
        {players.map((player, index) => (
          <div key={index}>
            <input
              type="text"
              className={styles['player-input']}
              value={player.name}
              onChange={(e) => handleChange(index, e.target.value)}
              placeholder={`Player ${index + 1} Name`}
            />
            {index > 0 && (
              <button
                className={`${styles.button} ${styles['remove-button']}`}
                onClick={() => handleRemovePlayer(index)}
              >
                Remove
              </button>
            )}
          </div>
        ))}
        {players.length < 4 && (
          <button
            className={`${styles.button} ${styles['add-button']}`}
            onClick={handleAddPlayer}
          >
            Add Player
          </button>
        )}
        <button
          className={`${styles.button} ${styles['start-button']}`}
          onClick={handleStartGame}
          disabled={handleDisabledButton}
        >
          Start Game
        </button>
      </div>
    </div>
  );
};

export default Modal;