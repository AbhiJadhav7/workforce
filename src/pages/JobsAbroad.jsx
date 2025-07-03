import React from "react";
import {Link} from 'react-router-dom';
import Migrations from "./Migrations";
const JobsAbroad = () => {
  return (
    <main>
      <div>
        <div className="migrationContainer">
          <div className="migrationbnr">
            <div className="studyc">
              <div className="">
                <h1 style={{ color: "antiquewhite" }}>
                  Get Hired{" "}
                  <span>
                    <i>Abroad</i>
                  </span>{" "}
                  with{" "}
                  <span>
                    <i>VRBS </i>
                  </span>
                  !!!
                </h1>
                <br />
                <br />
                <div>
                  <p style={{ color: "antiquewhite" }}>
                    - Explore high-paying overseas job opportunities.
                  </p>
                </div>
                <div className="solBtn7">
                  <br />
                  <Link to='/contact-us'>
                  <button>Contact Us</button>
                  </Link>
                </div>
              </div>
            </div>
            <div className="studyimg1"></div>
          </div>
          <div>
            <br />
            <br />
            <p>
              At <b> VRBS</b>, we specialize in connecting Indian talent to global
              employers through reliable, verified job placements in countries
              like the <b> UAE, Germany, Poland, UK, Canada, and Australia</b>. With
              over 13 years of experience in international recruitment, we
              provide full-scale support for <b> blue-collar, white-collar, and
              skilled job seekers</b>. As one of India’s top overseas job
              consultants, we assist with: Job matching and overseas recruitment
              drives Resume and profile optimization for global employers
              Interview preparation and scheduling Offer letter processing and
              employer verification Work visa documentation and embassy
              formalities Pre-departure briefing and post-arrival support
              Whether you’re looking to work in <b> hospitality, construction,
              healthcare, logistics, IT, or manufacturing, </b>our team ensures
              end-to-end assistance until you land your job abroad.
            </p>
            <br /><br />
          </div>
        </div>
        <Migrations/>
      </div>

    </main>
  );
};

export default JobsAbroad;
