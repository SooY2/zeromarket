import styles from "./index.module.css";

const Button =(props)=>{
    return (
        <button className={styles.button}>
            {props.title}
        </button>
    )
};

export default Button;