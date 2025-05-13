import React, { useEffect } from 'react';
import AOS from 'aos';
import 'aos/dist/aos.css';
import { AiOutlineAudit } from "react-icons/ai";
import '../Meslehet/Meslehetmain.scss'

const items = [
  "Mühasibat xidmətlərinin göstərilməsi",
  "Mühasibat, vergi qanunvericiliyi, maliyyə sahəsində məsləhət və digər əlaqəli xidmətlərin göstərilməsi",
  "Mühasibat uçotunun bərpası",
];

const Meslehetmain = () => {
  useEffect(() => {
    AOS.init({ duration: 800, once: true });
  }, []);

  return (
  <div id="meslehet">
      <div className="p-6 space-y-4">
       <div className="heading">
         <h3> <AiOutlineAudit />  Məsləhət və digər əlaqəli xidmətlərin göstərilməsi</h3>
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

export default Meslehetmain
