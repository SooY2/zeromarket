import CreateProduct from "../../components/ProductCompo/CreateProduct";
import Productlists from "../../components/ProductCompo/Productlists";
import styles from "./index.module.css";

import zeromarketLogo from "/src/assets/zeromarketLogo.png";
import { useNavigate, useParams } from "react-router-dom";

const Product=()=>{
    const nav = useNavigate();
    const userid=useParams().userId;
    return(<div className={styles.wrapper}>
        <header className='mainheader'><img src={zeromarketLogo} onClick={
          ()=>{
            nav(`/zeromarket/${userid}`)
            }}/></header>
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