import React,{useState} from "react";
import ContactFormPopup from "../components/ContactFormPopup";
import StudyContact from "../components/StudyContact";
import ContactUs from "../pages/ContactUs";
import '../cssFiles/desktop.css';
import '../cssFiles/tablet.css';
import '../cssFiles/mobile.css';
import '../cssFiles/index.css';
import JobsAbroad from "./JobsAbroad";
import Migrations from "./Migrations";
const StudyAbroad = () => {
      const [popupOpen, setPopupOpen] = useState(false);

  return (
    <main>
      <div>
        <div className="migrationContainer">
          <div className="migrationbnr">
            <div className="studyc">
              <div className="">
                <h1 style={{color:"antiquewhite"}}>
                  Get Ready to{" "}
                  <span>
                    <i>Begin</i>
                  </span>{" "}
                  your{" "}
                  <span>
                    <i>Journey </i>
                  </span>
                  !!!
                </h1>
                <br />
                <br />
                <div>
                <p style={{color:"antiquewhite"}}>-kick start your study abroad journey.</p></div>
                  <div className="solBtn7"><br />
                   
                <button onClick={() => setPopupOpen(true)}>Contact Us</button>
                                 <ContactFormPopup isOpen={popupOpen} onClose={() => setPopupOpen(false)} />

              </div>
              </div>
            </div>
            <div className="studyimg"></div>
          </div>
          <div><br /><br />
            <p >
              <b>VRBS</b>, India’s Leading Overseas Education Consultants isthe
              right choice in regards with your higher studies abroad. Through
              13 years we have represented over 200+ universities across 10+
              countries.We have continued to
              provide quality, professional counselling services to our
              students. We provide free counselling services for countries such
              as the <b> UK, USA, Canada, Australia, New Zealand, Singapore,
              Ireland, France, Germany, Dubai, Switzerland, Malaysia</b>, and many
              such destinations. If you are looking for assistance in aptitude
              testing, test prep for <b> TOEFL, PTE, IELTS, GMAT, GRE, SAT, and ACT,</b>
              career counselling, admission guidance, financial assistance as
              well as visa services, travel assistance, and forex assistance we
              are a must-visit. Not just this, but as overseas education
              consultants in Pune we bend over backwards and offer assistance
              for course and university selection, application and admission
              assistance, application documentation, essays, accommodation
              assistance, bank loans for international tuition, travel, foreign
              exchange international student insurance and assistance with
              student residential accommodation. If it is your dream to study in
              Ireland or get into universities in UK or colleges in Canada, we
              can help you accomplish just that. Apart from these, we provide
              free counselling services for a range of other study destinations.
              Visit our Pune Station Road branch today and kick start your study
              abroad journey.
            </p><br /><br />
                      <h1>Explore our Other Services</h1>

          </div></div>
          <JobsAbroad/>
        
      </div>
  
    </main>
    
  );
};

export default StudyAbroad;
