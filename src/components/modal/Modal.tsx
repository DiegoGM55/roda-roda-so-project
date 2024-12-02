import React, { useState } from 'react';
import styles from './Modal.module.css';
import { Player, initializePlayers } from '../../hooks/gameLogic/gameLogic';
import ImportContactsIcon from '@mui/icons-material/ImportContacts';
import GamesIcon from '@mui/icons-material/Games';
import SportsEsportsIcon from '@mui/icons-material/SportsEsports';
import PlayCircleOutlineIcon from '@mui/icons-material/PlayCircleOutline';

interface ModalProps {
  onStartGame: (players: Player[]) => void;
}

const Modal: React.FC<ModalProps> = ({ onStartGame }) => {
  const [showModal, setShowModal] = useState(true);
  const [players, setPlayers] = useState<Player[]>([{ name: '', score: 0, color: '', totalScore: 0 }, { name: '', score: 0, color: '', totalScore: 0 }]);

  const handleAddPlayer = () => {
    if (players.length < 4) {
      setPlayers([...players, { name: '', score: 0, color: '', totalScore: 0 }]);
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
        <div className={styles['modal-header']}>Roda a Roda - Sistemas operacionais</div>
        <div className={styles['modal-body']}>
        <div className={styles['col-1']}>
          <h2>
            <SportsEsportsIcon />
            {" "} Adicionar jogadores
          </h2>
          {players.map((player, index) => (
            <div className={styles['form-group']} key={index}>
              <input
                type="text"
                className={styles['player-input']}
                value={player.name}
                onChange={(e) => handleChange(index, e.target.value)}
                placeholder={`Nome do Jogador ${index + 1}`}
              />
              {index > 1 && (
                <button
                  className={`${styles.button} ${styles['remove-button']}`}
                  onClick={() => handleRemovePlayer(index)}
                >
                  Remover
                </button>
              )}
            </div>
          ))}

          <div className={styles['button-group']}>
            {players.length < 4 && (
              <button
                className={`${styles.button} ${styles['add-button']}`}
                onClick={handleAddPlayer}
              >
                <GamesIcon/>
                Adicionar Jogador
              </button>
            )}
            <button
              className={`${styles.button} ${styles['start-button']}`}
              onClick={handleStartGame}
              disabled={handleDisabledButton}
            >
              <PlayCircleOutlineIcon />
              Começar Jogo
            </button>
          </div>
        </div>
        <div className={styles['divider']} />
        <div className={styles['col-2']}>
          <h2>
            <ImportContactsIcon />
            {"  "}Regras do Jogo
          </h2>
          <p>
            - O jogo é composto por até 4 jogadores, onde cada um terá a oportunidade de girar a roleta e escolher uma letra.
          </p>
          <p>
            - Cada letra escolhida vale a quantidade de pontos que aparecer na roleta vezes a quantidade de aparições nas palavras.
          </p>
          <p>
            - O jogador que acertar a letra escolhida continua jogando, caso contrário, passa a vez para o próximo jogador.
          </p>
          <p>
            - O jogador que acertar a letra escolhida pode escolher entre tentar adivinhar a palavra ou continuar jogando.
          </p>
          <p>
            - O jogo termina quando todas as palavras de todas as rodadas forem descobertas.
          </p>
          <p>
            - O jogador com o maior número de pontos é o vencedor.
          </p>
          <p>
            - Não utilize acentos nas palavras.
          </p>
          <p>
            Boa sorte!
          </p>
        </div>
        </div>
      </div>
    </div>
  );
};

export default Modal;