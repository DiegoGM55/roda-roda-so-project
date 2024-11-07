import styles from './Screen.module.css';

interface ScreenProps {
    children?: React.ReactNode;
}

const Screen: React.FC<ScreenProps> = ({ children }: ScreenProps) => {
    return (
        <div className={styles["screen-border"]}>
            <div className={styles.screen}>
                {children}
            </div>
        </div>
    );
};

export default Screen;
