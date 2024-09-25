import styles from './Keyboard.module.css';
import Key from './Key';

const Keyboard = () => {
  return (
    <div className={styles.keyboard}>
      <Key keyLabel='a' />
      <Key keyLabel='b' />
      <Key keyLabel='c' />
      <Key keyLabel='d' />
      <Key keyLabel='e' />
      <Key keyLabel='f' />
      <Key keyLabel='g' />
      <Key keyLabel='h' />
      <Key keyLabel='i' />
      <Key keyLabel='j' />
      <Key keyLabel='k' />
      <Key keyLabel='l' />
      <Key keyLabel='m' />
      <Key keyLabel='n' />
      <Key keyLabel='o' />
      <Key keyLabel='p' />
      <Key keyLabel='q' />
      <Key keyLabel='r' />
      <Key keyLabel='s' />
      <Key keyLabel='t' />
      <Key keyLabel='u' />
      <Key keyLabel='v' />
      <Key keyLabel='w' />
      <Key keyLabel='x' />
      <Key keyLabel='y' />
      <Key keyLabel='z' />
    </div>
  );
};

export default Keyboard;