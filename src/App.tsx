import React, { useState } from 'react';
import Screen from './components/screen/Screen';
import Word from './components/screen/Word';
import Roulette from './components/roullete/roulette';
import Players from './components/players/Players';
import { initializePlayers, words, Player } from './gameLogic/gameLogic';
import Question from './components/question/Question';
import Keyboard from './components/keyboard/Keyboard';
import Logo from './assets/imgs/RodaRodaLogo.png';
import './App.css';
import Modal from './components/modal/Modal';

function App() {
  const [guessedLetters, setGuessedLetters] = useState<string[]>([' ']);
  const [prizeNumber, setPrizeNumber] = useState<number>(0);
  const [playerList, setPlayerList] = useState<Player[]>([]);

  const handleLetterClick = (letter: string) => {
    if (!guessedLetters.includes(letter)) {
      setGuessedLetters([...guessedLetters, letter]);
    }
  };

  const handlePrizeSelected = (prizeNumber: number) => {
    setPrizeNumber(prizeNumber);
    console.log(prizeNumber);
  };

  return (
    <div className='background'>
      <Modal onStartGame={setPlayerList} />
      <div className='container'>
        <div className='col-1'>
            <Players players={playerList} />
          
            <Screen>
              <Word word={words[1]} guessedLetters={guessedLetters} />
              <Word word={words[2]} guessedLetters={guessedLetters} />
              <Word word={words[3]} guessedLetters={guessedLetters} />
            </Screen>
            <div>
              <Question question='Teste' />
              <Keyboard onLetterClick={handleLetterClick} guessedLetters={guessedLetters} />
            </div>
        </div>
        <div className='col-2'>
          <div className='Logo'>
            <img className='logo-img' src={Logo} alt='Roda a Roda Logo' />
          </div>
          <div>
            <Roulette onPrizeSelected={handlePrizeSelected} />
          </div>
        </div>
      </div>
    </div>
  )
}

export default App
