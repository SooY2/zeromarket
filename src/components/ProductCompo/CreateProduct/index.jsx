import styles from "./index.module.css";
import{MdOutlineImageSearch} from "react-icons/md";
import { useState,useEffect } from "react";
import axios from "axios";
import axiosInstance from "../../../../axiosConfig";
import { useParams } from "react-router-dom";

const catelists=["식료품","음식","카페/베이커리","생활용품","패션의류/잡화","문구/오피스","뷰티","반려동물"];

const CreateProduct=()=>{

    const userid=useParams().userId;

    const [state,setState]=useState({
        name: "",
        picture: "",
        category: "",
        //stockQuantity: null,
        endTime: "", //"2023-08-16T08:37:36.864Z",
        //salePrice: undefined,
        //culPrice: undefined
    });
    //state값 변경하는 함수
    const handleState=(e)=>{
        e.preventDefault();
        setState({
            ...state,
            [e.target.name]:e.target.value,
        });
        console.log(state);
    }

    //날짜, 시간 관리
    const [deadlineDate, setDeadlineDate] = useState('');
    const [deadlineTime, setDeadlineTime] = useState('');

    const handleDateChange = (e) => {
        setDeadlineDate(e.target.value);
      };
    
      const handleTimeChange = (e) => {
        setDeadlineTime(e.target.value);
      };
    
      const handleCombineDateTime = () => {
        const combinedDateTime = `${deadlineDate}T${deadlineTime}`;
        setState({
          ...state,
          endTime: combinedDateTime,
        });
      };
    
      useEffect(() => {
        const combinedDateTime = `${deadlineDate}T${deadlineTime}`;
        setState({
            ...state,
            endTime:combinedDateTime,
        })
      }, [deadlineDate,deadlineTime]); // state가 변경될 때마다 실행

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

    //제출
    const submitProduct=(e)=>{
        // e.preventDefault();
        handleCombineDateTime();
        console.log(state);
        //서버에 post
        axiosInstance.post(`/product/${userid}`,state)
        .then(res=>{
            console.log(res);
        })
        .catch(err=>console.log(err));
    };



    return(<form className={styles.wrapper} onSubmit={submitProduct}>
        <div className={styles.productnamelabel}>상품명</div>
        <input className={styles.productname} 
            placeholder="상품명을 등록해주세요"
            value={state.name}
            name="name"
            onChange={handleState}/>
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
                        <input className={styles.cateinput} 
                            name="category"
                            placeholder="카테고리 선택" 
                            value={catename} disabled></input>
                        <img src={isDropdownView? "/src/assets/icons/uptoggleicon.png" : "/src/assets/icons/downtoggleicon.png"}/> 
                    </div>
                    {isDropdownView&&
                    <ul className={styles.areacontainer}>
                        {catelists.map((cate,idx)=>(
                            <li key={idx} onClick={(e)=>{
                                e.preventDefault();
                                setCatename(cate);
                                setState({
                                    ...state,
                                    category:cate,
                                })
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
                <input type="number" 
                    className={styles.productname}
                    placeholder="수량 입력"
                    value={state.stockQuantity}
                    name="stockQuantity"
                    onChange={handleState}></input>
            </div>
            <div className={styles.inputbox}>
                <label>판매 마감 시간</label>
                <input className={styles.productname}
                    type="time"
                    placeholder="00 : 00"
                    onChange={handleTimeChange}></input>
            </div>
            <div className={styles.inputbox}>
                <label>판매 마감 날짜</label>
                <input className={styles.productname}
                    type="date"
                    placeholder="0000-00-00"
                    onChange={handleDateChange}></input>
            </div>
            <div className={styles.inputbox}>
                <label>판매 가격/원</label>
                <input type="number"  
                    className={styles.productname}
                    placeholder="가격 입력"
                    value={state.salePrice}
                    name="salePrice"
                    onChange={handleState}></input>
            </div>
            <div className={styles.inputbox}>
                <label>정상 가격/원</label>
                <input type="number"  
                    className={styles.productname}
                    placeholder="가격 입력"
                    value={state.culPrice}
                    name="culPrice"
                    onChange={handleState}></input>
            </div>
        </div>
        <div className={styles.storage}>
            <button>저장하기</button>
        </div>

    </form>)
};

export default CreateProduct;