import Letter from './Letter';
import styles from './Screen.module.css';

interface WordProps {
    word: string;
    guessedLetters: string[];
}

const Word = ({ word, guessedLetters }: WordProps) => {
    return (
        <div className={styles.word}>
            {word.split('').map((char, index) => (
                <Letter key={index} letter={guessedLetters.includes(char) ? char : ''} />
            ))}
        </div>
    );
};

export default Word;
