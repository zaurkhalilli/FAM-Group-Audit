import React, { useEffect } from 'react';
import AOS from 'aos';
import 'aos/dist/aos.css';
import { AiOutlineAudit } from "react-icons/ai";
import '../EmlakTesdiqi/Emlaktesdiqi.scss'

const items = [
  "Maddi aktivlərin qiymətləndirilməsi",
  "İntelektual mülkiyyət obyektlərinin və “nou-hau”ların qiymətləndirilməsi",
];

const Emlaktesdiqi= () => {
  useEffect(() => {
    AOS.init({ duration: 800, once: true });
  }, []);

  return (
  <div id="emlak">
      <div className="p-6 space-y-4">
       <div className="heading">
         <h3> <AiOutlineAudit />  Əmlak və digər mülkiyyət obyektlərinin qiymətləndirilməsinin düzgünlüyünün təsdiqi</h3>
         <br />
         <span>Səhmdar Cəmiyyətlər üzrə dövrıyyəsindən asılı olmayaraq:</span>
       </div>
      {items.map((text, index) => (
        <div
          key={index}
          data-aos="fade-left"
          data-aos-delay={index * 100}
          className="bg-#004460 shadow p-4 rounded-xl text-white"
        >
          {text}
        </div>
      ))}
    </div>
  </div>
  );
};

export default Emlaktesdiqi
