import ProductCard from "../productCard";
import styles from "./index.module.css";
import nonItem from "../../../assets/noneItem.png";

const datas=[
    {name:"dd"},
    {name:"ss"},
    {name:"d"},
    {name:"sd"},
    {name:"fsd"},
    {name:"cd"},
    {name:"cds"},
    {name:"c"},
    {name:"ss"}
]

const Itemlists=()=>{
    return (
        <div className={styles.wrapper}>
            
            {datas.length===0? 
                <div className={styles.box}>
                    <img className={styles.img} src={nonItem}/>
                    <div className={styles.arrow_box}>우측 상단의 "내 재로마켓 보기" 에서 상품을 추가하세요</div>
                </div>
                : <div className={styles.grid}>
               {datas.map((data,idx)=>(
                <ProductCard className={styles.item} key={idx} id={data.name}/>
            ))}</div>  }
            
        </div>
    )
};

export default Itemlists;