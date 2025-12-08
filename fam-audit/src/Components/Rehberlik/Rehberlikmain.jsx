import React from 'react'
import '../Rehberlik/Rehberlikmain.scss'
import Mirkazimphoto from '../Rehberlik/Mirkazimphoto.jpg'
import Ismayilphoto from '../Rehberlik/Ismayilphoto.jpg'
import Nicatphoto from '../Rehberlik/Nicatphoto.jpg'
import Zaurphoto from '../Rehberlik/Zaurphoto.jpg'
import Feridphoto from '../Rehberlik/Feridphoto.jpg'
const Rehberlikmain = () => {
  return (
    <div id='rehberlik'>
      <h2>KOMANDAMIZ</h2>
      <br />
      <hr className="white-line" />
      <div className="container">
        <div className="row g-5">
            <div className="col-xl-6">
            <img src={Mirkazimphoto} alt='Mirkazim' />
            </div>
             <div className="col-xl-6">
             <h3>Direktor</h3>
             <p>Mirkazım Hüseynov</p>
            </div>
             <div className="col-xl-6">
          <img src={Ismayilphoto} alt='İsmayıl Cəfərov' />
            </div>
             <div className="col-xl-6 ">
             <h3>Auditor</h3>
            <p>İsmayıl Cəfərov</p>
            </div>
              <div className="col-xl-6">
          <img src={Nicatphoto} alt='Nicat İsayev' />
            </div>
             <div className="col-xl-6">
             <h3>Audit üzrə mütəxəssis</h3>
            <p>Nicat İsayev</p>
            </div>
              <div className="col-xl-6">
          <img src={Zaurphoto} alt='Zaur Salahov' />
            </div>
             <div className="col-xl-6">
             <h3>Audit üzrə baş mütəxəssis</h3>
            <p>Zaur Salahov</p>
            </div>
             <div className="col-xl-6">
          <img src={Feridphoto} alt='Fərid Əliyev' />
            </div>
             <div className="col-xl-6">
             <h3>Audit Assistent</h3>
            <p>Fərid Əliyev</p>
            </div>
        </div>
      </div>
    </div>
  )
}

export default Rehberlikmain
