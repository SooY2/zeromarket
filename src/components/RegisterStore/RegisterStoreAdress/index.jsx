import styles from "./index.module.css";

const RegisterStoreAddress=()=>{
    return (<div className={styles.wrapper}>
        <div>가게주소 등록하기</div>
        <button>
            <div></div>
            
        </button>
        <input className={styles.input} 
            type="text"
            placeholder="상세주소를 입력해주세요"
            value="" />
        <input className={styles.input} 
            type="text"
            placeholder="상세주소를 입력해주세요"
            value="" />
    </div>)
}

export default RegisterStoreAddress;