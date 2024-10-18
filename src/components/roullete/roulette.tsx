import { useState } from 'react';
import { Wheel } from 'react-custom-roulette'
import styles from './Roulette.module.css'

const data = [
  { option: '400', style: { backgroundColor: 'green', textColor: 'black' } },
  { option: '100', style: { backgroundColor: 'orange', textColor: 'black' } },
  { option: '200', style: { backgroundColor: 'yellow', textColor: 'black' } },
  { option: '300', style: { backgroundColor: 'pink', textColor: 'black' } },
  { option: '500', style: { backgroundColor: 'red', textColor: 'black' } },
  { option: 'Perdeu tudo', style: { backgroundColor: 'black', textColor: 'white' } },
  { option: 'Passa a vez', style: { backgroundColor: 'white', textColor: 'black' } },
  { option: '400', style: { backgroundColor: 'green', textColor: 'black' } },
  { option: '100', style: { backgroundColor: 'orange', textColor: 'black' } },
  { option: '200', style: { backgroundColor: 'yellow', textColor: 'black' } },
  { option: '300', style: { backgroundColor: 'pink', textColor: 'black' } },
  { option: '500', style: { backgroundColor: 'red', textColor: 'black' } },
  { option: 'Perdeu tudo', style: { backgroundColor: 'black', textColor: 'white' } },
  { option: 'Passa a vez', style: { backgroundColor: 'white', textColor: 'black' } },
]

interface RouletteProps {
  onPrizeSelected: (prizeNumber: number) => void;
}

const Roulette: React.FC<RouletteProps> = ({ onPrizeSelected }) => {
  const [mustSpin, setMustSpin] = useState(false);
  const [prizeNumber, setPrizeNumber] = useState(0);

  const handleSpinClick = () => {
    const newPrizeNumber = Math.floor(Math.random() * data.length);
    setPrizeNumber(newPrizeNumber);
    setMustSpin(true);
  };

  const handleStopSpinning = () => {
    setMustSpin(false);
    onPrizeSelected(prizeNumber);
  };

 return (
 <>
    <Wheel
      mustStartSpinning={mustSpin}
      prizeNumber={prizeNumber}
      data={data}
      backgroundColors={['#3e3e3e', '#df3428']}
      textColors={['#ffffff']}
      onStopSpinning={() => handleStopSpinning()}
    />
    <button className={styles.button} onClick={() => handleSpinClick()}>Girar</button>
  </>
)
}

export default Roulette;