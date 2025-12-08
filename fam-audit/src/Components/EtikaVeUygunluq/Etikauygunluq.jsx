import React, { useEffect } from "react";
import '../EtikaVeUygunluq/Etikauygunluq.scss'
import AOS from "aos";
import "aos/dist/aos.css";
const Etikauygunluq = () => {
  useEffect(() => {
    AOS.init({ duration: 1000 });
  }, []);

  return (
    <section className="about-section">
      <div className="container">
        <h1>FAM Group Audit - Bizim Dəyərlərimiz və Strateji Plan</h1>
        <div className="row">
          <div className="col-xl-6 mb-4 mb-xl-0" data-aos="fade-right">
            <br />
            <br />
            <p><h2>Bizim Dəyərlərimiz : </h2>
              1.	Dürüstlük və Etika:
              Audit fəaliyyətimizin əsasında şəffaflıq, obyektivlik və peşəkar etika dayanır. Müştəri məlumatlarının məxfiliyi və dürüstlüyü bizim üçün dəyişməz prinsiplərdir.
              <br />
              2.	Müstəqillik və Qərəzsizlik:
              Hər bir audit qərarı və rəyi yalnız faktlara, qanunvericiliyə və beynəlxalq standartlara əsaslanır. Heç bir maraq və təsir nəticələrimizə yön vermir.
              <br />
              3.	Peşəkarlıq və Keyfiyyət:
              Komandamız beynəlxalq standartlara uyğun bilik və təcrübəyə malikdir. Hər audit layihəsində yüksək keyfiyyət və dəqiqlik əsas prinsipimizdir.
              <br />
              4.	İnnovasiya və Rəqəmsallaşma:
              Audit proseslərimizi texnoloji alətlərlə (BPM, Data Analytics, Audit Software) təkmilləşdiririk və rəqəmsal nəzarəti gücləndiririk.
              <br />
              5.	Müştəri Mərkəzli Yanaşma:
              Müştərilərimizin ehtiyaclarını dərindən anlayaraq, onların maliyyə şəffaflığını və hesabat keyfiyyətini artıran həllər təqdim edirik.
              <br />
              6.	Komanda Ruhu və Davamlı İnkişaf:
              Uğurun açarı birgə təcrübə və bilik paylaşımıdır. Komandamızın davamlı inkişafı üçün təlim və sertifikasiya proqramlarına önəm veririk.
              <br />
              7.	Etibarlılıq və Sosial Məsuliyyət:
              İctimai maraqları qorumaq, şəffaf iqtisadi mühitə töhfə vermək və cəmiyyət üçün dəyər yaratmaq bizim missiyamızın bir hissəsidir.
              </p>
          </div>
          <div className="col-xl-6" data-aos="fade-up">
            <div className="about-text">
              <br />
              <h2>Strateji Plan : </h2>
              <p>
             Missiyamız:
            Azərbaycan iqtisadiyyatında şəffaflığı və hesabatlılığı gücləndirmək məqsədilə, beynəlxalq standartlara uyğun, etibarlı və peşəkar audit xidmətləri təqdim etmək.
            Vizyonumuz:
            Regionda müstəqil audit və məsləhət xidmətləri üzrə nüfuzlu, etibarlı və innovativ tərəfdaş kimi tanınmaq.
            Strateji Məqsədlər
            Məqsəd	Təsvir	Ölçü göstəricisi  
            <br />
            1. Audit Keyfiyyətinin Təkmilləşdirilməsi	Audit metodologiyalarının beynəlxalq standartlara uyğunlaşdırılması	Keyfiyyət nəzarəti üzrə illik 95% uyğunluq göstəricisi
            <br />
            2. Rəqəmsal Audit Sistemlərinin tətbiqi	Elektron audit və məlumat analiz platformalarının yaradılması	2026-cı ilə qədər tam inteqrasiya olunmuş audit proqramı
            <br />
            3. Kadrların Peşəkar İnkişafı	ACCA, CPA və yerli təlim proqramlarında iştirakın artırılması	Hər əməkdaş üçün illik minimum 60 təlim saatı
            <br />
            4. Müştəri Bazası və Etimadın Artırılması	Dövlət və özəl sektor müştəriləri ilə uzunmüddətli əməkdaşlıqlar	NPS üzrə 85%+ müştəri məmnuniyyəti səviyyəsi
            <br />  
            5. Sosial Məsuliyyət və Etik İctimai Təsir	Audit şəffaflığı və etik mədəniyyətin təbliği	Hər il 2 ictimai maarifləndirmə layihəsi həyata keçirmək
            <br />
            <br />
            <h3>Strateji İcra Mexanizmləri :</h3>
            •	Daxili keyfiyyət təminatı və audit nəzarət sistemi (QA System)
            <br />
            •	BPM və Data Analytics əsaslı idarəetmə və hesabatlıq
            <br />
            •	Rüblük performans və uyğunluq hesabatları
            <br />
            •	Müştəri geribildirimləri və NPS əsaslı təkmilləşdirmə prosesi
            <br />
            •	Əməkdaşların davamlı təlim və sertifikasiya proqramları
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Etikauygunluq;
