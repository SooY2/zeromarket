/**mainboard의 상품카드 컴포넌트 */
import styles from "./index.module.css";

const ProductCard=(props)=>{
    return(<div className={styles.wrapper}>
        <div className={styles.productImg}><img src="https://s3.ap-northeast-2.amazonaws.com/img.kormedi.com/news/article/__icsFiles/artimage/2018/05/29/c_km601/wholebread540.jpg" /></div>
        <div className={styles.storename}>가게 이름</div>
        <div className={styles.content}>
            <div className={styles.productName}>크루아상</div>
            <div className={styles.content2}>
                <div className={styles.stock}>
                    <span>남은 재고 : 10개</span>
                    <span>00:15:31</span>
                </div>
                <div className={styles.contentright}>
                    <div className={styles.originPrice}>
                        <span>30%</span>
                        <span>2,000원</span>
                    </div>
                    <div className={styles.totalPrice}>1,200원</div>
                </div>
            </div>
        </div>
    </div>)
};

export default ProductCard;