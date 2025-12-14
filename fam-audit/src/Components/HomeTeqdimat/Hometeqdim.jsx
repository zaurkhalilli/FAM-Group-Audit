import React from 'react'
import './Hometeqdim.scss'
import { Link } from 'react-router-dom';
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
          <Link to="/ethics"><RiTeamFill /></Link>
        <Link to="/rehberlik"><p>PROFESSIONAL KOMANDA</p></Link>
          </div>
      </div>
      <div className="col-xl-3">
        <div className="card-item">
          <Link to="/ethics"><FaChess /></Link>
          <br />
           <Link to="/ethics">KOMPLEKS YANAŞMA</Link>
        </div>
      </div>
      <div className="col-xl-3">
        <div className="card-item">
          <Link to="/ethics"><FaUserShield /></Link>
        <br />
           <Link to="/ethics">ETİBARLILIQ</Link>
        </div>
      </div>
      <div className="col-xl-3">
        <div className="card-item">
          <Link to="/about"><FaHandshake /></Link>
          <Link to="/about"><p>BÖYÜK TƏCRÜBƏ</p></Link>
        </div>
      </div>
    </div>
  </div>
</div>

    </div>
  )
}

export default Hometeqdim
