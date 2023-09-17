import React from "react";

const MeetOurTeam = () => {
  const cards = document.getElementsByClassName("card");
  let activeCard = null;

  for (let i = 0; i < cards.length; i++) {
    cards[i].addEventListener("click", function () {
      if (activeCard !== null) {
        activeCard.style.backgroundColor = "";
      }
      if (activeCard === this) {
        activeCard = null;
      } else {
        this.style.backgroundColor = "white";
        activeCard = this;
      }
    });
  }
  return (
    <section>
      <div class="container p-5 mt-5">
        <h1 class="text-center text-light mb-3">Meet Our Team</h1>
        <p class="text-center text-light mb-5">
          Our Expert team is made up of creatives with technical know-how,
          <br />
          strategists who think outside the box, and developers who push
          innovation.
        </p>
        <div class="row g-3">
          <div class="col-12 col-sm-12 col-md-6 col-lg-4 col-xl-3 p-3">
            <div class="card p-3">
              <div class="img-container mb-2">
                <img src="assets/img/person_02.jpg" alt="" class="img-fluid" />
              </div>
              <p class="fw-bold text-center">
                Keven Feil <br />
                <span class="fw-normal">Flutter Developer</span>
              </p>
              <div class="d-flex justify-content-center">
                <ion-icon name="logo-twitter" class="pe-3"></ion-icon>
                <ion-icon name="logo-facebook" class="pe-3"></ion-icon>
                <ion-icon name="logo-linkedin"></ion-icon>
              </div>
            </div>
          </div>
          <div class="col-12 col-sm-12 col-md-6 col-lg-4 col-xl-3 p-3">
            <div class="card p-3">
              <div class="img-container mb-2">
                <img src="assets/img/person_01.jpg" alt="" class="img-fluid" />
              </div>
              <p class="fw-bold text-center">
                Stephanie R <br />
                <span class="fw-normal">PHP Developer</span>
              </p>
              <div class="d-flex justify-content-center">
                <ion-icon name="logo-twitter" class="pe-3"></ion-icon>
                <ion-icon name="logo-facebook" class="pe-3"></ion-icon>
                <ion-icon name="logo-linkedin"></ion-icon>
              </div>
            </div>
          </div>
          <div class="col-12 col-sm-12 col-md-6 col-lg-4 col-xl-3 p-3">
            <div class="card p-3">
              <div class="img-container mb-2">
                <img src="assets/img/person_04.jpg" alt="" class="img-fluid" />
              </div>
              <p class="fw-bold text-center">
                Kasey K <br />
                <span class="fw-normal">Web Developer</span>
              </p>
              <div class="d-flex justify-content-center">
                <ion-icon name="logo-twitter" class="pe-3"></ion-icon>
                <ion-icon name="logo-facebook" class="pe-3"></ion-icon>
                <ion-icon name="logo-linkedin"></ion-icon>
              </div>
            </div>
          </div>
          <div class="col-12 col-sm-12 col-md-6 col-lg-4 col-xl-3 p-3">
            <div class="card p-3">
              <div class="img-container mb-2 ">
                <img src="assets/img/person_03.jpg" alt="" class="img-fluid" />
              </div>
              <p class="fw-bold text-center">
                Astrid L <br />
                <span class="fw-normal">UI UX Developer</span>
              </p>
              <div class="d-flex justify-content-center">
                <ion-icon name="logo-twitter" class="pe-3"></ion-icon>
                <ion-icon name="logo-facebook" class="pe-3"></ion-icon>
                <ion-icon name="logo-linkedin"></ion-icon>
              </div>
            </div>
          </div>
        </div>
      </div>
      <p class="text-center mt-5">Designed And Developed By Moideen Mashad</p>
      <div class="d-flex justify-content-center mb-3">
        <a href="https://github.com/moideeenmashad" class="pe-3 text-dark">
          <ion-icon name="logo-github"></ion-icon>
        </a>
        <a
          href="https://www.linkedin.com/in/moideenmashad"
          class="pe-3 text-dark"
        >
          <ion-icon name="logo-linkedin"></ion-icon>
        </a>
        <a href="mailto:moideenmashad@gmail.com" class="pe-3 text-dark">
          <ion-icon name="logo-google"></ion-icon>
        </a>
      </div>
    </section>
  );
};

export default MeetOurTeam;
