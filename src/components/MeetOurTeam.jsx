import React from "react";
import person_1 from './img/person_01.jpg'
import person_2 from './img/person_02.jpg'
import person_3 from './img/person_03.jpg'
import person_4 from './img/person_04.jpg'
import { useState } from "react";
const MeetOurTeam = () => {

  const linkedin = "https://www.linkedin.com/in/moideenmashad";
  const gitHub = "https://github.com/moideeenmashad";
  const gmail = "mailto:moideenmashad@gmail.com";
  const [userName,setUserName] = useState("Moideen Mashad")
  return (
    <section>
      <div className="container p-5 mt-5">
        <h1 className="text-center text-light mb-3">Meet Our Team</h1>
        <p className="text-center text-light mb-5">
          Our Expert team is made up of creatives with technical know-how,
          <br />
          strategists who think outside the box, and developers who push
          innovation.
        </p>
        <div className="row g-3">
          <div className="col-12 col-sm-12 col-md-6 col-lg-4 col-xl-3 p-3">
            <div className="card p-3">
              <div className="img-container mb-2">
                <img src={person_2} alt="" className="img-fluid" />
              </div>
              <p className="fw-bold text-center">
                Keven Feil <br />
                <span className="fw-normal">Flutter Developer</span>
              </p>
              <div className="d-flex justify-content-center">
                <ion-icon name="logo-twitter" className="pe-3"></ion-icon>
                <ion-icon name="logo-facebook" className="pe-3"></ion-icon>
                <ion-icon name="logo-linkedin"></ion-icon>
              </div>
            </div>
          </div>
          <div className="col-12 col-sm-12 col-md-6 col-lg-4 col-xl-3 p-3">
            <div className="card p-3">
              <div className="img-container mb-2">
                <img src={person_1} alt="" className="img-fluid" />
              </div>
              <p className="fw-bold text-center">
                Stephanie R <br />
                <span className="fw-normal">PHP Developer</span>
              </p>
              <div className="d-flex justify-content-center">
                <ion-icon name="logo-twitter" className="pe-3"></ion-icon>
                <ion-icon name="logo-facebook" className="pe-3"></ion-icon>
                <ion-icon name="logo-linkedin"></ion-icon>
              </div>
            </div>
          </div>
          <div className="col-12 col-sm-12 col-md-6 col-lg-4 col-xl-3 p-3">
            <div className="card p-3">
              <div className="img-container mb-2">
                <img src={person_4} alt="" className="img-fluid" />
              </div>
              <p className="fw-bold text-center">
                Kasey K <br />
                <span className="fw-normal">Web Developer</span>
              </p>
              <div className="d-flex justify-content-center">
                <ion-icon name="logo-twitter" className="pe-3"></ion-icon>
                <ion-icon name="logo-facebook" className="pe-3"></ion-icon>
                <ion-icon name="logo-linkedin"></ion-icon>
              </div>
            </div>
          </div>
          <div className="col-12 col-sm-12 col-md-6 col-lg-4 col-xl-3 p-3">
            <div className="card p-3">
              <div className="img-container mb-2 ">
                <img src={person_3} alt="" className="img-fluid" />
              </div>
              <p className="fw-bold text-center">
                Astrid L <br />
                <span className="fw-normal">UI UX Developer</span>
              </p>
              <div className="d-flex justify-content-center">
                <ion-icon name="logo-twitter" className="pe-3"></ion-icon>
                <ion-icon name="logo-facebook" className="pe-3"></ion-icon>
                <ion-icon name="logo-linkedin"></ion-icon>
              </div>
            </div>
          </div>
        </div>
      </div>
      <p className="text-center mt-5">Designed And Developed By {userName}</p>
      <div className="d-flex justify-content-center mb-3">
        <a href={gitHub} className="pe-3 text-dark">
          <ion-icon name="logo-github"></ion-icon>
        </a>
        <a
          href={linkedin}
          className="pe-3 text-dark"
        >
          <ion-icon name="logo-linkedin"></ion-icon>
        </a>
        <a href={gmail} className="pe-3 text-dark">
          <ion-icon name="logo-google"></ion-icon>
        </a>
      </div>
    </section>
  );
};

export default MeetOurTeam;
