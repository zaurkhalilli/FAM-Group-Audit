import React, { useEffect } from 'react';
import AOS from 'aos';
import 'aos/dist/aos.css';
import { AiOutlineAudit } from "react-icons/ai";
import '../Beynelxalq-Audit/Beynelxalqauditstandartlari.scss'
const items = [
  "Banklar",
  "Sığorta təşkilatları",
  "Bank olmayan Kredit Təşkilatları və Kredit Birlikləri",
  "Publik hüquqi şəxslər",
  "Büdcədənkənar fondlar",
  "Qeyri-hökumət təşkilatları",
  "Bələdiyyələr",
  "Açıq və Qapalı Səhmdar Cəmiyyətlər, Məhdud Məsuliyyətli Cəmiyyətlər və digər hüquqi şəxslər",
  "Xarici hüquqi şəxslərin Azərbaycan Respublikasında yerləşən filialları, nümayəndəlikləri, təsis etdiyi birgə müəssisələr",
  "Kənd təsərrüfatı kooperativləri",
  "Birləşdirilmiş/icmal hesabatlar dərc edən hüquqi şəxslər, iki və daha çox törəmə/asılı/qız müəssisəyə malik hüquqi şəxslərin (Holdinq və Maliyyə-sənaye Qrupları) birləşdirilmiş/icmal hesabatlarının auditi",
  "Siyasi partiyalar",
  "Hüquqi şəxs yaratmadan sahibkarlıq fəaliyyəti göstərən fiziki şəxslər"
];

const AosFadeLeftList = () => {
  useEffect(() => {
    AOS.init({ duration: 800, once: true });
  }, []);

  return (
  <div id="beynelxalq">
      <div className="p-6 space-y-4">
       <div className="heading">
         <h3> <AiOutlineAudit />  Beynəlxalq Audit Standartlarına əsasən illik maliyyə hesabatlarının auditi</h3>
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

export default AosFadeLeftList;