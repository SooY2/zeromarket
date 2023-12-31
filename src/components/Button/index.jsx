import styles from "./index.module.css";

const Button =(props)=>{
    return (
        <button className={styles.button}
            type={props.type}
            onClick={props.onClick}>
            {props.title}
        </button>
    )
};

export default Button;