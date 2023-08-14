import styles from "./index.module.css";
import{MdOutlineImageSearch} from "react-icons/md";
import { useState } from "react";

const catelists=["식료품","음식","카페/베이커리","생활용품","패션의류/잡화","문구/오피스","뷰티","반려동물"];

const CreateProduct=()=>{

    const reader = new FileReader();
    const [img,setImg]=useState(null);
    const handleUploading=(e)=>{
        e.preventDefault();
        const file = e.target.files[0];

        if(file){
            reader.readAsDataURL(file);//file읽히고
            reader.onload=()=>{
                setImg(reader.result);
            }

        }

    }

    //카테고리 선택
    const [catename,setCatename]=useState("");


    //react-select 안쓰고 구현 -> 디자인 더 완벽히 구현 가능 but 기능면에선 걍그
    const [isDropdownView, setDropdownView] = useState(false)

    const handleClickContainer = () => {
        setDropdownView(!isDropdownView);    }

    const handleBlurContainer = () => {
        setTimeout(() => {
        setDropdownView(false)
        }, 200);
    }

    return(<div className={styles.wrapper}>
        <div className={styles.productnamelabel}>상품명</div>
        <input className={styles.productname} 
            placeholder="상품명을 등록해주세요"/>
        {/*상품 사진 등록부분  */}
        <div className={styles.imgwrapper}>
            <label className={styles.imglabel} htmlFor="ex_file">
                    <img className={styles.img} src={img}></img>
                    <div className={styles.selectText}>
                        <MdOutlineImageSearch className={styles.selctimgicon}/>
                        <span>상품 사진을 등록해주세요</span>
                    </div> 
                </label>
                <input 
                    type="file"
                    multiple={true} id="ex_file" accept="image/jpg, image/png, image/jpeg"
                    onChange={(e)=>{
                        e.preventDefault();
                        handleUploading(e);}} />
        </div>{/*상품 사진 등록부분  */}
        <div className={styles.contentwrapper}>
            <div className={styles.inputbox}>
                <label>카테고리</label>
                <div className={styles.areaselectbox}>
                    <div className={isDropdownView? styles.areabtndrop : styles.areabtn} 
                        onBlur={handleBlurContainer} onClick={handleClickContainer}>
                        <input className={styles.cateinput} placeholder="카테고리 선택" 
                            value={catename}></input>
                        <img src={isDropdownView? "/src/assets/icons/uptoggleicon.png" : "/src/assets/icons/downtoggleicon.png"}/> 
                    </div>
                    {isDropdownView&&
                    <ul className={styles.areacontainer}>
                        {catelists.map((cate,idx)=>(
                            <li key={idx} onClick={(e)=>{
                                e.preventDefault();
                                setCatename(cate);
                                // props.changeArea(cate);
                                setDropdownView(false);  
                            }}
                                className={styles.arealist}>{cate}</li>
                        ))}    
                    </ul>}
                    </div>
            </div>
            <div className={styles.inputbox}>
                <label>재고수량</label>
                <input className={styles.productname}
                    placeholder="수량 입력"></input>
            </div>
            <div className={styles.inputbox}>
                <label>판매 마감 시간</label>
                <input className={styles.productname}
                    placeholder="00 : 00"></input>
            </div>
            <div className={styles.inputbox}>
                <label>판매 마감 날짜</label>
                <input className={styles.productname}
                    placeholder="0000-00-00"></input>
            </div>
            <div className={styles.inputbox}>
                <label>판매 가격/원</label>
                <input className={styles.productname}
                    placeholder="가격 입력"></input>
            </div>
            <div className={styles.inputbox}>
                <label>정상 가격/원</label>
                <input className={styles.productname}
                    placeholder="가격 입력"></input>
            </div>
        </div>
        <div className={styles.storage}>
            <button>저장하기</button>
        </div>

    </div>)
};

export default CreateProduct;