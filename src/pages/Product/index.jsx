import CreateProduct from "../../components/ProductCompo/CreateProduct";
import Productlists from "../../components/ProductCompo/Productlists";
import styles from "./index.module.css";

const Product=()=>{
    return(<div className={styles.wrapper}>
        <div className={styles.box}>
            <span className={styles.leftSection}>
                <CreateProduct/>
            </span>
            <span className={styles.rightSection}>
                <Productlists/>
            </span>

        </div>
    </div>)
};

export default Product;