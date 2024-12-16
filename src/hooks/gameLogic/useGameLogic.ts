import { useEffect, useState } from 'react';
import { questions } from '../../data/questions';
import { Player } from './gameLogic';
import { useDispatch, useSelector } from 'react-redux';
import { RootState } from '../../store/store';
import { setPrizeNumber, setHasSpun } from '../../store/slices/rouletteSlice';
import { prizes } from '../../data/prizes';

export const useGameLogic = () => {
  const [guessedLetters, setGuessedLetters] = useState<string[]>([' ']);
  const [playerList, setPlayerList] = useState<Player[]>([]);
  const [currentPlayerIndex, setCurrentPlayerIndex] = useState<number>(0);
  const [currentQuestionIndex, setCurrentQuestionIndex] = useState<number>(0);
  const { prizeNumber, hasSpun, } = useSelector((state: RootState) => state.roulette);
  const [words, setWords] = useState<string[]>([]);
  const [endPhase, setEndPhase] = useState<boolean>(false);
  const dispatch = useDispatch();

  const currentPlayer = playerList[currentPlayerIndex];

  const handleLetterClick = (letter: string) => {
    if (!hasSpun) {
      alert('Você precisa girar a roleta antes de chutar uma letra!');
      return;
    }

    if (!guessedLetters.includes(letter)) {
      setGuessedLetters(prevGuessedLetters => {
        const newGuessedLetters = [...prevGuessedLetters, letter];
        
        // Verifica se todas as palavras foram adivinhadas após adicionar a nova letra
        checkIfAllWordsGuessed(newGuessedLetters);

        return newGuessedLetters;
      });

      // Lógica para verificar se a letra está correta
      const letterCount = countLetterOccurrences(letter);
      if (letterCount > 0) {
        // Adiciona pontos ao jogador atual, multiplicando pelo número de ocorrências da letra
        const prizeOption = prizes[prizeNumber].option;
        if (!isNaN(Number(prizeOption))) {
          currentPlayer.score += Number(prizeOption) * letterCount;
        }
        dispatch(setHasSpun(false));
      } else {
        passTurn();
        alert('Letra incorreta! Passando a vez...');
      }
    }
  };

  const handlePrizeSelected = (prizeNumber: number) => {
    dispatch(setPrizeNumber(prizeNumber));
    const prizeOption = prizes[prizeNumber].option;

    if (prizeOption === 'Passa a vez') {
      alert('Passando a vez...');
      passTurn();
    } else if (prizeOption === 'Perdeu tudo') {
      currentPlayer.score = 0;
      alert('Perdeu tudo! Passando a vez...');
      passTurn();
    } else {
      dispatch(setHasSpun(true));
    }
  };

  const passTurn = () => {
    setCurrentPlayerIndex((prevIndex) => (prevIndex + 1) % playerList.length);
    dispatch(setHasSpun(false));
  };

  const countLetterOccurrences = (letter: string) => {
    let count = 0;
    for (const word of questions[currentQuestionIndex].words) {
      count += word.split('').filter((char) => char === letter).length;
    }
    return count;
  };

  const checkIfAllWordsGuessed = (updatedGuessedLetters: string[]) => {
    console.log('Checking if all words guessed...');
    const allWords = questions[currentQuestionIndex].words;
    const allGuessed = allWords.every(word =>
      word.split('').every(letter => updatedGuessedLetters.includes(letter))
    );

    console.log('All words', allGuessed);

    if (allGuessed) {
      alert('Todas as palavras foram adivinhadas!');
      moveToNextQuestion();
    }
  };

  useEffect(() => {
    savePlayerScore();
    console.log(playerList)
    setGuessedLetters([' ']); // Limpa o estado quando a pergunta muda
    setWords(new Array(questions[currentQuestionIndex].words.length).fill(''));
  }, [currentQuestionIndex]);

  const moveToNextQuestion = () => {
    if (currentQuestionIndex < questions.length - 1) {
      setCurrentQuestionIndex(currentQuestionIndex + 1);
    } else {
      setEndPhase(true);
    }
  };

  const savePlayerScore = () => {
    playerList.forEach(player => {
      player.totalScore += player.score;
      player.score = 0;
    });
  }

  const hasPlayerMakeTheRightKick = (words: string[]) => {
    const correctWords = questions[currentQuestionIndex].words;
    const rightKick = words.every((word, index) => word.toUpperCase() === correctWords[index]);
    console.log(rightKick); 
    
    if(!hasSpun) {
      alert('Você precisa girar a roleta antes de chutar a palavra!');
      return;
    }

    if (rightKick) {
      currentPlayer.score += Number(prizes[prizeNumber].option) * correctWords.length;
      setEndPhase(true);
      dispatch(setHasSpun(false));
      moveToNextQuestion();
    } else {
      passTurn();
      alert('Você errou o chute! Passando a vez...');
    }
  }

  const handleWordsChange = (index: number, value: string) => {
    setWords((prevWords) => {
      const newWords = [...prevWords];
      newWords[index] = value;
      return newWords;
    });
  };

  return {
    guessedLetters,
    prizeNumber,
    playerList,
    currentPlayer,
    currentPlayerIndex,
    hasSpun,
    currentQuestionIndex,
    words,
    endPhase,
    setEndPhase,
    handleWordsChange,
    handleLetterClick,
    handlePrizeSelected,
    setPlayerList,
    setHasSpun,
    checkIfAllWordsGuessed,
    setGuessedLetters,
    hasPlayerMakeTheRightKick,
  };
};
