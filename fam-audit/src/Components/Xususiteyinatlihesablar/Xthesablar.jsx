import React, { useEffect } from 'react';
import AOS from 'aos';
import 'aos/dist/aos.css';
import { AiOutlineAudit } from "react-icons/ai";
import '../Xususiteyinatlihesablar/Xthesablar.scss'
const items = [
  "Nizamnamə kapitalının formalaşdırılmasının təsdiqi",
  "Emissiya paketi üzrə rəy",
  "Vergi bəyannamələri üzrə rəy",
  "Dövlət satınalmalarında iştirak edən müəssisələrlə bağlanan müqavilələr üzrə rəy",
  "Aidiyyəti olan şəxslərlə bağlanan müqavilələr üzrə rəy",
];
const Xthesablar = () => {
  useEffect(() => {
    AOS.init({ duration: 800, once: true });
  }, []);

  return (
  <div id="xth">
      <div className="p-6 space-y-4">
       <div className="heading">
         <h3> <AiOutlineAudit />  Xüsusi təyinatlı hesabatlar və tapşırıqlar üzrə rəy</h3>
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
export default Xthesablar;
