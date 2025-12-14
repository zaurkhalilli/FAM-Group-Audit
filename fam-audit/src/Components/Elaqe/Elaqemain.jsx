import React from 'react'
import './Elaqemain.scss'
import { MdOutlineMail } from "react-icons/md";
import { FaGlobe } from "react-icons/fa";
import { FaArrowRight } from "react-icons/fa";
const Elaqemain = () => {
  return (
    <div id='elaqe'>
      <div className="container">
        <div className="row g-5">
            <div className="col-md-6">
           <div className="elaqeinputlari">
            <div className="container">
                <div className="row">
                    <h5> <MdOutlineMail color='white'  size={25} />  ƏLAQƏ FORMASI</h5>
                    <div className="col-xl-6">
                    <p>Ad</p>
                    <input type="text" />
                    </div>
                    <div className="col-xl-6">
                    <p>Soyad</p>
                    <input type="text" />
                    </div>
                    <div className="col-xl-6">
                    <p>E-mail</p>
                    <input type="email" placeholder='example@gmail.com' />
                    </div>
                    <div className="col-xl-6">
                    <p>Telefon</p>
                    <input type="tel"  pattern="[0-9+ ]+" required />
                    </div>
                </div>
            </div>
           </div>
         <div className="mesajinput">
         <p>Mesaj</p>
         <textarea name="" id="" >  </textarea>
         </div>
         <div className="elaqebtn">
            <button>GÖNDƏR <FaArrowRight /></button>
         </div>
            </div>
            <div className="col-md-6">
              <div className="elaqeright">
              <h5><FaGlobe color='white' size={25} />   ƏLAQƏ MƏLUMATLARI</h5>
                <p>Ünvan</p>
               <div className="infotop">
               <span>AZ1075, Bakı şəhəri, Azərbaycan,</span>
                <span>Nəriman Nərimanov rayonu,</span>
                <span>Əhməd Rəcəbli küç., 224, 3-cü mərtəbə</span>
               </div>
                <div className="infobottom">
                <span>Mob.: (+994 50) 278-73-53</span>
                <span>Tel.: (+994 50) 278-71-87 </span>
                <span>Email: office@famgroupaudit.az</span>
              </div>
                </div>
            </div>
        </div>
      </div>
    </div>
  )
}

export default Elaqemain
