import { Wheel } from 'react-custom-roulette'
import styles from './Roulette.module.css'
import { prizes } from '../../data/prizes';
import { useDispatch, useSelector } from 'react-redux';
import { RootState } from '../../store/store';
import { spinRoulette, stopRoulette } from '../../store/slices/rouletteSlice';
interface RouletteProps {
  onPrizeSelected: (prizeNumber: number) => void;
}

const Roulette: React.FC<RouletteProps> = ({ onPrizeSelected }) => {
  const dispatch = useDispatch();
  const { mustSpin, prizeNumber, hasSpun } = useSelector((state: RootState) => state.roulette);

  const handleSpinClick = () => {
    if (!hasSpun) {
      const newPrizeNumber = Math.floor(Math.random() * prizes.length);
      dispatch(spinRoulette(newPrizeNumber));
    }
  };

  const handleStopSpinning = () => {
    dispatch(stopRoulette());
    onPrizeSelected(prizeNumber);
  };

 return (
 <>
    <Wheel
      mustStartSpinning={mustSpin}
      prizeNumber={prizeNumber}
      data={prizes}
      backgroundColors={['#3e3e3e', '#df3428']}
      textColors={['#ffffff']}
      onStopSpinning={() => handleStopSpinning()}
    />
    <button className={styles.button} onClick={() => handleSpinClick()} disabled={hasSpun}>Girar</button>
  </>
)
}

export default Roulette;