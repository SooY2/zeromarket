import styles from "./index.module.css";

const options=[
    "동작구","관악구","신대방동",
]

const ExSelectArea = ()=>{
    return (
        <div className={styles.wrapper}>
        <label>지역설정</label>
       <button className={styles.btnSelect}>지역찾기</button>
       <ul className={styles.options}>
            {options.map(option=>(
                <li><button className={styles.btn}>{option}</button></li>
            ))}
       </ul>
    </div>
    )
};

export default ExSelectArea;