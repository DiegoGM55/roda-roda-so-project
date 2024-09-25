import styles from './Keyboard.module.css'

const Key = ({ keyLabel }: { keyLabel: string }) => {
  return (
    <button className={styles.key}>{keyLabel}</button>
  );
}

export default Key;