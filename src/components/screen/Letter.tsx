import React from 'react';
import styles from './Screen.module.css';

interface LetterProps {
    letter: string;
}

const Letter: React.FC<LetterProps> = ({ letter }) => {
    return (
        <div className={`${styles.letter} ${letter !== ' ' ? styles['letter-background'] : ''}`}>
            {letter}
        </div>
    );
};

export default Letter;