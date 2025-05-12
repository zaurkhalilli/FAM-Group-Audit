import React, { useEffect } from "react";
import AOS from "aos";
import "aos/dist/aos.css";
import "../Haqqimizda/Haqqimizdamain.scss";

const Haqqimizdamain = () => {
  useEffect(() => {
    AOS.init({ duration: 1500 }); 
  }, []);

  return (
    <section className="about-section">
      <div className="about-content" data-aos="fade-right">
        <h2>FAM Group Audit şirkəti haqqında</h2>
        <br />
        <p>
          “FAM Group Audit” MMC “FAM Group” ailəsinin qollarından biridir. 19.09.2019-cu ildə 1912020308417100 №-li çıxarış əsasında dövlət qeydiyyatına alınıb, Azərbaycan Respublikası Auditorlar Palatası tərəfindən verilmiş 09 oktyabr 2019-cu il tarixli AT/196 qeydiyyat №-li icazəyə əsasən fəaliyyət göstərir. FAM Group Audit MMC olaraq müştərilərimizə beynalxalq və yerli standartlara uyğun xidmətlər təklif edirik. Çox qısa bir müddətdə, FAM Group Audit MMC böyük nəticələr əldə edib, müştərilərin inamını qazanıb, şirkətin müştəri bazası genişlənib və regionda aparıcı yerlərdən birini tutur. Şirkətimizin əldə etdiyi nailiyyətlər bizim bacarığımıza əsaslanır və müştərilərimizə əlimizdən gələn səviyyədə xidmət göstərməyimizdən irəli gəlir.Biz, Sizə göstərdiyimiz xidmətlərin keyfiyyətinə və konfedensiallığına təminat veririk.
        </p>
      </div>
      <div className="about-image" data-aos="fade-left">
        <img src="https://www.accountantsdaily.com.au/images/tax_audit_1.jpg" alt="Haqqımızda şəkli" />
      </div>
    </section>
  );
};

export default Haqqimizdamain;
