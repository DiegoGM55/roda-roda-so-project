import styles from './Kick.module.css';
import { questions } from '../../data/questions';
import { useState } from 'react';
import { useSelector } from 'react-redux';
import { RootState } from '../../store/store';

interface KickProps {
    currentQuestion: number;
    handleKick: (words: string[]) => void;
    words: string[];
    handleWordsChange: (index: number, value: string) => void;
}

const Kick = ({ currentQuestion, handleKick, words, handleWordsChange }: KickProps) => {
  const [showKick, setShowKick] = useState(false);
  const {mustSpin} = useSelector((state: RootState) => state.roulette);

  return (
    <div className={styles['kick-word']}>
      <button onClick={() => setShowKick(!showKick)}>Já sabe a palavra?</button>
      <div className={`${styles['kick-inputs']} ${showKick ? styles['show'] : ''}`}>
        {questions[currentQuestion].words.map((_, index) => (
          <input 
            key={index}
            type="text" 
            placeholder={`Palavra ${index + 1}`}
            value={words[index] || ''}
            onChange={(e) => !mustSpin && handleWordsChange(index, e.target.value)}
          />
        ))}
        <button onClick={() => !mustSpin && handleKick(words)}>Chutar</button>
      </div>
    </div>
  );
}

export default Kick;
