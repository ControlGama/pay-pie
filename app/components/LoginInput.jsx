import inputStyles from '../../styles/inputs.module.css';

export default function Input ({name, icon, type}) {
    return(
        <>
            <label htmlFor={name} className={inputStyles.input__label}>{name}</label>
            <div className={inputStyles.input__container}>
                <div>{icon}</div>
                <input type={type} id={name}/>
            </div>
        </>
    )
}