import React from 'react';
import styles from './EndPhaseModal.module.css';

interface ModalProps {
    showModal: boolean;
    setShowModal: (show: boolean) => void;
    points: number | undefined;
}

const EndPhaseModal: React.FC<ModalProps> = (modalProperties) => {

  if (!modalProperties.showModal) {
    return null;
  }

  return (
    <div className={styles['modal-overlay']}>
      <div className={styles['modal-content']}>
        <div className={styles['modal-header']}>Certa Resposta!</div>
        <div className={styles['modal-body']}>
            <h2>Todas palavras foram adivinhadas!</h2>
            <h3>Você ganhou: {modalProperties.points}</h3>
        
            <button className={styles['close-button']} onClick={() => modalProperties.setShowModal(false)}>Começar nova rodada</button>
        </div>
      </div>
    </div>
  );
};

export default EndPhaseModal;