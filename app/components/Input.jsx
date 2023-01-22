import styles from '../../styles/login.module.css';
import Image from 'next/image';

export default function Input ({name, icon}) {
    return(
        <>
            <label htmlFor="" className={styles.input__label}>{name}</label>
            <div className={styles.input__container}>
                <div>{icon}</div>
                <input type="text" />
            </div>
        </>
    )
}