import React from "react";
import { Link } from "react-router-dom";
import CountryFlags from "../components/CountryFlags";

const Migrations = () => {
  return (
    <main>
      <div>
        <div className="migrationContainer">
          <div className="migrationbnr">
            <div className="studyc">
              <div className="">
                <h1 style={{ color: "antiquewhite" }}>
                  Migrate Abroad{" "}
                  <span>
                    <i>Smoothly </i>
                  </span>{" "}
                  and{" "}
                  <span>
                    <i>Legally </i>
                  </span>
                  !!!
                </h1>
                <br />
                <br />
                <div>
                  <p style={{ color: "antiquewhite" }}>
                    -Secure your future with a Permanent Residency (PR).
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
            <div className="studyimg2"></div>
          </div>
          <div>
            <br />
            <br />
            <p>
             <b> VRBS</b> offers complete migration consultancy services for countries
              like <b>Canada, Australia, UK, Germany, and New Zealand</b>. With a
              decade of <b>successful PR filings</b>, we guide you through every step —
              from eligibility checks to final settlement. Our expert legal and
              immigration advisors help with: PR eligibility assessments and
              profile building Skilled migration via Express Entry, PNPs, and
              Subclass visas Family, dependent, and spousal visa processing
              Educational credential evaluations <b> (ECA/WES) Language test
              preparation (IELTS/CELPIP)</b> Proof of funds and settlement planning
              Application documentation and visa filing Post-landing assistance
              for accommodation, insurance, and more Whether you’re aiming for
              Canada’s Express Entry or Australia’s General Skilled Migration
              (GSM), our team ensures full compliance, transparency, and
              personalized strategy.
            </p>
          </div>
        </div>
        <CountryFlags/>
      </div>
    </main>
  );
};

export default Migrations;
