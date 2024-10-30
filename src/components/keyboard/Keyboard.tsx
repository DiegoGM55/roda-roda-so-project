import { useSelector } from 'react-redux';
import styles from './Keyboard.module.css';
import { RootState } from '../../store/store';

interface KeyboardProps {
    onLetterClick: (letter: string) => void;
    guessedLetters: string[];
}

const Keyboard = ({ onLetterClick, guessedLetters }: KeyboardProps) => {
    const alphabet = 'ABCDEFGHIJKLMNOPQRSTUVWXYZ'.split('');
    const { mustSpin } = useSelector((state: RootState) => state.roulette);

    return (
        <div className={styles.keyboard}>
            {alphabet.map((letter) => (
                <button
                    key={letter}
                    onClick={() => !mustSpin && onLetterClick(letter)}
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
