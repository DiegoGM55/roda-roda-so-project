import styles from './Keyboard.module.css';

interface KeyboardProps {
    onLetterClick: (letter: string) => void;
    guessedLetters: string[];
}

const Keyboard = ({ onLetterClick, guessedLetters }: KeyboardProps) => {
    const alphabet = 'ABCDEFGHIJKLMNOPQRSTUVWXYZ'.split('');

    return (
        <div className={styles.keyboard}>
            {alphabet.map((letter) => (
                <button
                    key={letter}
                    onClick={() => onLetterClick(letter)}
                    disabled={guessedLetters.includes(letter)}
                    className={styles.key}
                >
                    {letter}
                </button>
            ))}
        </div>
    );
};

export default Keyboard;
