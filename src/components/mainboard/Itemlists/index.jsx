import ProductCard from "../productCard";
import styles from "./index.module.css";

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
            {datas.map((data,idx)=>(
                <ProductCard className={styles.item} key={idx} id={data.name}/>
            ))}
        </div>
    )
};

export default Itemlists;