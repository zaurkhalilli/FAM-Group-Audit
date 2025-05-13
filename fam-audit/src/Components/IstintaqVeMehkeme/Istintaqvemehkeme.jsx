import React, { useEffect } from 'react';
import AOS from 'aos';
import 'aos/dist/aos.css';
import { AiOutlineAudit } from "react-icons/ai";
import '../IstintaqVeMehkeme/Istintaqvemehkeme.scss'

const items = [
   "Kommersiya və müqavilə mübahisələrinin həllində dəstək",
   "Korporativ və ailə biznesi mübahisələrinin həllində dəstək",
   "Ekspert şahidliyi xidmətləri",
   "Mülki-iqtisadi məsələlər üzrə məhkəmə proseslərində müştərilərə dəstək",
   "Saxtakarlıq risklərinin dəyərləndirilməsi və minimallaşdırılmasında dəstək",
   "Aktivlərin üzləşdirilməsi və dəqiqləşdirilməsi",
   "Biznesin dayandırılması və sığorta iddialarında dəstək",
   "Araşdırma və Tədqiqat",
   "Dəymiş zərərin qiymətləndirilməsi xidməti",
];


const Istintaqvemehkeme = () => {
  useEffect(() => {
    AOS.init({ duration: 800, once: true });
  }, []);

  return (
  <div id="istintaq">
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

export default Istintaqvemehkeme
