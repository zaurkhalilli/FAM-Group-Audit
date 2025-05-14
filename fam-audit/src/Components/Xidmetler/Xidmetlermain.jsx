import React from 'react'
import '../Xidmetler/Xidmetlermain.scss'
import { Link } from 'react-router-dom';
import { FaGripLines } from "react-icons/fa";
import { TbArrowBigRightLinesFilled } from "react-icons/tb";

const Xidmetlermain = () => {
  return (
    <div id='xidmetler'>
     <div className="heading">
        <h2>FAM Group Audit MMC-nin xidmətləri : </h2>
        <p>FAM Group Audit MMC hazırda Bakı şəhərində yerləşən əsas ofisində çalışan zəruri bilik və ixtisaslara malik, təcrübəli əməkdaşları vasitəsi ilə öz müştərilərinə aşağıda göstərilən xidmətlərini təklif edir:</p>
     </div>
     <div className="xidmetsection">
    <div className="container">
    <Link to="/firstservice"><FaGripLines size={25} />    Beynəlxalq Audit Standartlarına əsasən illik maliyyə hesabatlarının auditi   <TbArrowBigRightLinesFilled /></Link>
    <br />
    <Link to="/secondservice"> <FaGripLines size={25} /> Xüsusi təyinatlı hesabatlar və tapşırıqlar üzrə rəy <TbArrowBigRightLinesFilled /></Link>
    <br />
    <Link to="/thirdservice"> <FaGripLines size={25} /> Məsləhət və digər əlaqəli xidmətlərin göstərilməsi <TbArrowBigRightLinesFilled /></Link>
    <br />
    <Link to="/fourthservice"><FaGripLines size={25} /> Əmlak və digər mülkiyyət obyektlərinin qiymətləndirilməsinin düzgünlüyünün təsdiqi <TbArrowBigRightLinesFilled /></Link>
    <br />
    <Link to="/fifthservice"><FaGripLines size={25} /> İstintaq və məhkəmə dəstəyi xidmətləri <TbArrowBigRightLinesFilled /></Link>
    </div>
     </div>
    </div>
  )
}

export default Xidmetlermain
