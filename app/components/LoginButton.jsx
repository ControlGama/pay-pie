import buttonStyles from '../../styles/buttons.module.css';

export default function Button ({text}){ 
    return (
        <button className={buttonStyles.loginbutton}>
            <p>{text}</p>
        </button>
    );
}