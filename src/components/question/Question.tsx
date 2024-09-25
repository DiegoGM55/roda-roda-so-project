import styles from './Question.module.css';

const Question = ({ question } : {question : string}) => {
    return (
        <div className={styles.question}>
            {question}
        </div>
    );
}

export default Question;