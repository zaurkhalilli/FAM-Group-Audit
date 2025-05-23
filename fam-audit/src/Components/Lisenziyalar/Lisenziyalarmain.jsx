import React from 'react'
import '../Lisenziyalar/Lisenziyalarmain.scss'
import Photoaudit1 from '../Lisenziyalar/audit1.jpeg' 
import Photoaudit2 from '../Lisenziyalar/audit2.jpeg' 
import Photoaudit3 from '../Lisenziyalar/audit3.jpg' 
const Lisenziyalarmain = () => {
  return (
    <div id='lisenziyalar'>
      <h2>FAM Group Audit MMC-nin lisenziyaları : </h2>
      <div className="container">
        <div className="row g-6">
          <div className="col-xl-4">
            <p>1. 10 Oktyabr 2024-cü ildə Azərbaycan Respublikası Auditorlar Platası tərəfindən Auditor fəaliyyətinin icrası ilə bağlı yenilənmiş lisenziya(5 il müddətinə yenilənmiş lisenziya).</p>
            <br />
          <img src={Photoaudit1} alt="FAM Group Audit Lisenziya - 1" />
          </div>
          <div className="col-xl-4">
            <p>2. 11 Yanvar 2023-cü ildə Azərbaycan Respublikası Auditorlar Palatası tərəfindən Auditor fəaliyyətinin icrası ilə bağlı icazə lisenziya. </p>
            <br />
            <img src={Photoaudit2} alt="FAM Group Audit Lisenziya - 2" />
          </div>
          <div className="col-xl-4">
            <p>3. Audit üzrə baş mütəxəssisimiz Zaur Salahovun ACCA Kvalifikasiya sənədi. </p>
            <br />
            <br />
            <br />
          <img src={Photoaudit3} alt="FAM Group Audit Sertifikat" />
          </div>
        </div>
      </div>
    </div>
  )
}

export default Lisenziyalarmain
