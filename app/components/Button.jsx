import styles from '../../styles/login.module.css';

export default function Button ({text}){ 
    return (
        <button className={styles.button}>
            <p>{text}</p>
        </button>
    );
}