/**가게 이미지 선택 컴포넌트
 * 
 */

import styles from "./index.module.css";
import{MdOutlineImageSearch} from "react-icons/md"

import {  useState } from "react";

const SelectStoreImg=(changeImg)=>{

    const reader = new FileReader();
    const [img,setImg]=useState(null);
    const handleUploading=(e)=>{
        e.preventDefault();
        const file = e.target.files[0];

        if(file){
            reader.readAsDataURL(file);//file읽히고
            reader.onload=()=>{
                setImg(reader.result);
                changeImg(reader.result);
            }

        }

    }

    return (
        <div className={styles.wrapper}>
            <label className={styles.box} htmlFor="ex_file">
                <img className={styles.img} src={img}></img>
                <div className={styles.selectText}>
                    <MdOutlineImageSearch className={styles.selctimgicon}/>
                    <span>가게 사진을 등록해주세요</span>
                </div> 
            </label>
            <input 
                type="file"
                multiple={true} id="ex_file" accept="image/jpg, image/png, image/jpeg"
                onChange={(e)=>{
                    e.preventDefault();
                    handleUploading(e);}} />
            
        </div>
    )
};

export default SelectStoreImg;