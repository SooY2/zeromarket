import CateItems from "../CateItem";
import styles from "./index.module.css";


import {allicon,beautyicon,breadicon,clothingicon,dailyitemicon,foodicon,groceriesicon,officeitem,peticon} from "../../../assets/cateIcons";

const catelists=[
    //{img: allicon,name:"전체"},
    {img: groceriesicon,name:"식료품"},
    {img: foodicon,name:"음식"},
    {img: breadicon,name:"카페/베이커리"},
    {img: dailyitemicon,name:"생활용품"},
    {img: clothingicon,name:"패션의류/잡화"},
    {img: officeitem,name:"문구/오피스"},
    {img: beautyicon,name:"뷰티"},
    {img: peticon,name:"반려동물"},

]

const Category=()=>{


    return (
        <div className={styles.wrapper} >
            {catelists.map((catelist,idx)=>(
                <CateItems key={idx} idx={idx} icon={catelist.img} catename={catelist.name}/>
            ))}
            
        </div>
    )
};

export default Category;