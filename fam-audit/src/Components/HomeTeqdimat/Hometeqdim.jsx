import React from 'react'
import './Hometeqdim.scss'
import { RiTeamFill } from "react-icons/ri";
import { FaChess } from "react-icons/fa";
import { FaUserShield } from "react-icons/fa6";
import { FaHandshake } from "react-icons/fa";

const Hometeqdim = () => {
  return (
    <div id='hometeqdim'>
      <div className="teqdimat">
        <h3>BİZ SİZƏ TAMAMİLƏ PEŞƏKARLIQ TƏKLİF EDİRİK !</h3>
      </div>
      <br />
   <div className="homeicons">
  <div className="container">
    <div className="row g-3">
      <div className="col-xl-3">
        <div className="card-item">
          <RiTeamFill />
          <p>PROFESSIONAL KOMANDA</p>
        </div>
      </div>
      <div className="col-xl-3">
        <div className="card-item">
          <FaChess />
          <p>KOMPLEKS YANAŞMA</p>
        </div>
      </div>
      <div className="col-xl-3">
        <div className="card-item">
          <FaUserShield />
          <p>ETİBARLILIQ</p>
        </div>
      </div>
      <div className="col-xl-3">
        <div className="card-item">
          <FaHandshake />
          <p>BÖYÜK TƏCRÜBƏ</p>
        </div>
      </div>
    </div>
  </div>
</div>

    </div>
  )
}

export default Hometeqdim
