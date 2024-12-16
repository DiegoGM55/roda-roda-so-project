import { useGameLogic } from './hooks/gameLogic/useGameLogic';
import Screen from './components/screen/Screen';
import Word from './components/screen/Word';
import Roulette from './components/roullete/roulette';
import Players from './components/players/Players';
import Question from './components/question/Question';
import Keyboard from './components/keyboard/Keyboard';
import Logo from './assets/imgs/RodaRodaLogo.png';
import './App.css';
import Modal from './components/modal/Modal';
import { questions } from '../src/data/questions';
import Kick from './components/kick/Kick';
import EndPhaseModal from './components/endPhaseModal/EndPhaseModal';

function App() {
  const {
    guessedLetters,
    playerList,
    currentPlayerIndex,
    currentQuestionIndex,
    handleLetterClick,
    handlePrizeSelected,
    setPlayerList,
    hasPlayerMakeTheRightKick,
    words,
    handleWordsChange,
    endPhase,
    setEndPhase,
  } = useGameLogic();

  return (
    <div className='background'>
      <Modal onStartGame={setPlayerList} />
      <EndPhaseModal showModal={endPhase} setShowModal={setEndPhase} points={(() => {
        if (playerList.length === 0) {
          return 0;
        }
        return playerList[currentPlayerIndex].totalScore;
      })()} />
      <div className='container'>
        <div className='col-1'>
          <Players players={playerList} currentPlayerIndex={currentPlayerIndex} />
          <Screen>
            {questions[currentQuestionIndex].words.map((word, index) => (
              <Word key={index} word={word} guessedLetters={guessedLetters} />
            ))}
          </Screen>
          
            <Question question={questions[currentQuestionIndex].question} />
            <Keyboard onLetterClick={handleLetterClick} guessedLetters={guessedLetters} />
            <Kick 
              currentQuestion={currentQuestionIndex} 
              handleKick={hasPlayerMakeTheRightKick}
              words={words}
              handleWordsChange={handleWordsChange}
            />

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
  );
}

export default App;
