import React, { useState } from 'react';
import { useForm, ValidationError } from '@formspree/react';
import '../Karyera/Karyeramain.scss';

const Karyeramain = () => {
  // useForm hook form məlumatlarını idarə edir
  const [state] = useForm("xqaqwzbn");

  // State dəyişənləri (formun məlumatlarını saxlamaq üçün)
  const [name, setName] = useState('');
  const [surname, setSurname] = useState('');
  const [fatherName, setFatherName] = useState('');
  const [email, setEmail] = useState('');
  const [mobile, setMobile] = useState('');
  const [cv, setCv] = useState(null);

  // Form göndərildikdən sonra müvəffəqiyyət mesajı
  if (state.succeeded) {
    return <p>Thanks for applying! We will get back to you soon.</p>;
  }

  // Handle submit funksiyası
  const handleFormSubmit = (e) => {
    e.preventDefault(); // Formun avtomatik olaraq yenilənməsinin qarşısını alır

    const formData = new FormData();
    formData.append("name", name);
    formData.append("surname", surname);
    formData.append("fatherName", fatherName);
    formData.append("email", email);
    formData.append("mobile", mobile);
    formData.append("cv", cv); // CV faylını əlavə edirik

    // Formspree URL-ə göndərmək
    fetch("https://formspree.io/f/xqaqwzbn", {
      method: "POST",
      body: formData,
    })
      .then((response) => response.json())
      .then((data) => {
        console.log("Form successfully submitted", data);
      })
      .catch((error) => {
        console.error("Error submitting form:", error);
      });
  };

  return (
    <div id="karyera">
      <div className="karyeramain">
        <div className="container">
          <h2>KARYERA</h2>
          <hr />
          <div className="row g-3">
            <h3>ŞƏXSİ MƏLUMATLAR</h3>

            {/* Ad */}
            <div className="col-xl-6">
              <p>Ad</p>
              <input
                type="text"
                name="name"
                value={name}
                onChange={(e) => setName(e.target.value)}
                required
              />
              <ValidationError field="name" errors={state.errors} />
            </div>

            {/* Soyad */}
            <div className="col-xl-6">
              <p>Soyad</p>
              <input
                type="text"
                name="surname"
                value={surname}
                onChange={(e) => setSurname(e.target.value)}
                required
              />
              <ValidationError field="surname" errors={state.errors} />
            </div>

            {/* Ata adı */}
            <div className="col-xl-6">
              <p>Ata adı</p>
              <input
                type="text"
                name="fatherName"
                value={fatherName}
                onChange={(e) => setFatherName(e.target.value)}
                required
              />
              <ValidationError field="fatherName" errors={state.errors} />
            </div>

            {/* Cins */}
            <div className="col-xl-6">
              <p>Cins</p>
              <select
                className="form-select"
                name="gender"
                required
              >
                <option value="">-</option>
                <option value="1">Kişi</option>
                <option value="2">Qadın</option>
              </select>
              <ValidationError field="gender" errors={state.errors} />
            </div>

            {/* Doğum tarixi */}
            <div className="col-xl-6">
              <p>Doğum tarixi</p>
              <input
                type="date"
                name="birthDate"
                required
              />
              <ValidationError field="birthDate" errors={state.errors} />
            </div>

            {/* Doğum yeri */}
            <div className="col-xl-6">
              <p>Doğum yeri</p>
              <input
                type="text"
                name="birthPlace"
                required
              />
              <ValidationError field="birthPlace" errors={state.errors} />
            </div>

            {/* Qeydiyyat ünvanı */}
            <div className="col-xl-6">
              <p>Qeydiyyat ünvanı</p>
              <input
                type="text"
                name="address"
                required
              />
              <ValidationError field="address" errors={state.errors} />
            </div>

            {/* Faktiki ünvan */}
            <div className="col-xl-6">
              <p>Faktiki yaşadığı ünvan</p>
              <input
                type="text"
                name="actualAddress"
                required
              />
              <ValidationError field="actualAddress" errors={state.errors} />
            </div>

            {/* Ailə vəziyyəti */}
            <div className="col-xl-6">
              <p>Ailə vəziyyəti</p>
              <select
                className="form-select"
                name="maritalStatus"
                required
              >
                <option value="">-</option>
                <option value="1">Evli</option>
                <option value="2">Subay</option>
              </select>
              <ValidationError field="maritalStatus" errors={state.errors} />
            </div>

            {/* Mobil nömrə */}
            <div className="col-xl-6">
              <p>Mobil nömrə</p>
              <input
                type="text"
                name="mobile"
                value={mobile}
                onChange={(e) => setMobile(e.target.value)}
                required
              />
              <ValidationError field="mobile" errors={state.errors} />
            </div>

            {/* Email */}
            <div className="col-xl-6">
              <p>Email</p>
              <input
                type="email"
                name="email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                required
              />
              <ValidationError field="email" errors={state.errors} />
            </div>

            {/* CV Yüklə */}
            <div className="col-xl-6">
              <p>CV Yüklə</p>
              <div className="input-group">
                <input
                  type="file"
                  className="form-control"
                  name="cv"
                  onChange={(e) => setCv(e.target.files[0])}
                  required
                />
              </div>
              <ValidationError field="cv" errors={state.errors} />
            </div>

            {/* Göndər buttonu */}
            <div className="karyerabtn">
              <button
                type="submit"
                onClick={handleFormSubmit}
                disabled={state.submitting}
              >
                {state.submitting ? 'Göndərilir...' : 'GÖNDƏR'}
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Karyeramain;
