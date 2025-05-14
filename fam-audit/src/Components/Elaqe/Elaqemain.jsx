import React, { useState } from 'react';
import './Elaqemain.scss';
import { MdOutlineMail } from "react-icons/md";
import { FaGlobe } from "react-icons/fa";
import { FaArrowRight } from "react-icons/fa";

const Elaqemain = () => {
  const [name, setName] = useState('');
  const [surname, setSurname] = useState('');
  const [email, setEmail] = useState('');
  const [phone, setPhone] = useState('');
  const [message, setMessage] = useState('');
  const [isSubmitting, setIsSubmitting] = useState(false);

  // Formu göndərmək üçün funksiya
  const handleSubmit = async (e) => {
    e.preventDefault();

    setIsSubmitting(true);

    const formData = new FormData();
    formData.append('name', name);
    formData.append('surname', surname);
    formData.append('email', email);
    formData.append('phone', phone);
    formData.append('message', message);

    // Formspree URL-i (action)
    const formAction = 'https://formspree.io/f/xqaqwzbn';

    try {
      const response = await fetch(formAction, {
        method: 'POST',
        body: formData,
      });

      if (response.ok) {
        alert('Mesaj uğurla göndərildi!');
        // Formu sıfırlamaq
        setName('');
        setSurname('');
        setEmail('');
        setPhone('');
        setMessage('');
      } else {
        alert('Xəta baş verdi. Təkrar cəhd edin.');
      }
    } catch (error) {
      console.error('Error submitting form:', error);
      alert('Xəta baş verdi. Təkrar cəhd edin.');
    }

    setIsSubmitting(false);
  };

  return (
    <div id="elaqe">
      <div className="container">
        <div className="row g-5">
          <div className="col-md-6">
            <div className="elaqeinputlari">
              <div className="container">
                <div className="row">
                  <h5>
                    <MdOutlineMail color="white" size={25} /> ƏLAQƏ FORMASI
                  </h5>
                  <div className="col-xl-6">
                    <p>Ad</p>
                    <input
                      type="text"
                      value={name}
                      onChange={(e) => setName(e.target.value)}
                    />
                  </div>
                  <div className="col-xl-6">
                    <p>Soyad</p>
                    <input
                      type="text"
                      value={surname}
                      onChange={(e) => setSurname(e.target.value)}
                    />
                  </div>
                  <div className="col-xl-6">
                    <p>E-mail</p>
                    <input
                      type="email"
                      placeholder="example@gmail.com"
                      value={email}
                      onChange={(e) => setEmail(e.target.value)}
                    />
                  </div>
                  <div className="col-xl-6">
                    <p>Telefon</p>
                    <input
                      type="tel"
                      pattern="[0-9+ ]+"
                      value={phone}
                      onChange={(e) => setPhone(e.target.value)}
                      required
                    />
                  </div>
                </div>
              </div>
            </div>

            <div className="mesajinput">
              <p>Mesaj</p>
              <textarea
                value={message}
                onChange={(e) => setMessage(e.target.value)}
              ></textarea>
            </div>

            <div className="elaqebtn">
              <button onClick={handleSubmit} disabled={isSubmitting}>
                {isSubmitting ? 'Göndərilir...' : 'GÖNDƏR'} <FaArrowRight />
              </button>
            </div>
          </div>

          <div className="col-md-6">
            <div className="elaqeright">
              <h5>
                <FaGlobe color="white" size={25} /> ƏLAQƏ MƏLUMATLARI
              </h5>
              <p>Ünvan</p>
              <div className="infotop">
                <span>AZ1075, Bakı şəhəri, Azərbaycan,</span>
                <span>Nəriman Nərimanov rayonu,</span>
                <span>Əhməd Rəcəbli küç., 224, 3-cü mərtəbə</span>
              </div>
              <div className="infobottom">
                <span>Mob.: (+994 50) 278-72-27</span>
                <span>Tel.: (+994 12) 565-57-84</span>
                <span>Email: office@famgroupconstruction.az</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Elaqemain;
