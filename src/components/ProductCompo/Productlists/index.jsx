import Modal from "../Modal";
import styles from "./index.module.css";

const Productlists=()=>{
    return (
        <div className={styles.wrapper}>
            {false&&<Modal/>}
            <div className={styles.box}>
                <ul className={styles.header}>
                    <li>번호</li>
                    <li>상품사진</li>
                    <li>상품명</li>
                    <li>카테고리</li>
                    <li>재고 수량</li>
                    <li>마감일시</li>
                    <li>판매가</li>
                    <li>정상가</li>
                </ul>
            </div>
            <div className={styles.storage}>
                <button>수정</button>
                <button>삭제</button>
            </div>
        </div>
    )

};

export default Productlists;