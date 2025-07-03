import React from "react";
import { Link } from "react-router-dom";
const AboutUs = () => {
  return (
    <main>
      <div className="aboutAll">
        <div className="aboutTitle">
          <div className="globalSolutions">
            <h1>
              We at{" "}
              <span style={{ color: "rgb(62, 88, 220)" }}>
                <i>VRBS</i>
              </span>
            </h1>
            <div className="globalSolutions">
              <h2>
                Are a Trusted Name in Education, Migration & Global Workforce
                Management
              </h2>
            </div>
          </div>
        </div>
      </div>
      <div className="aboutUscontainer" style={{ padding: "10px" }}>
        <div className="aboutUsContent">
          <h2 style={{ color: "rgb(62, 88, 220)" }}>
            One-Stop Destination for Abroad Studies, PR & Jobs
          </h2>
          <p>
            <b>VRBS</b> is a licensed international consultancy empowering
            individuals to study, migrate, and work abroad with complete
            guidance and compliance. Global Reach, Local Expertise: With a
            global network spanning diverse regions and industries, VRBS
            combines international reach with local expertise. Whether you're
            navigating visa applications in Europe or job placements in the
            Gulf, our local insights and extensive partnerships ensure that your
            journey is supported by the latest legal requirements and market
            trends.
          </p>
          <br />

          <p>
            Our strong network of partner universities, immigration attorneys,
            and verified overseas employers spans across 10+ countries,
            including Canada, Australia, UK, Germany, UAE, and Poland. Whether
            you're planning to pursue higher education, apply for permanent
            residency, or secure a job overseas — we provide end-to-end support,
            legal documentation, and personalized counselling at every step.
          </p>
          <br />
          <p>
            <b>VRBS</b> stands at the intersection of education, skilled
            migration, and international workforce deployment, offering tailored
            solutions for every individual's unique journey. From high school
            graduates seeking global university admissions to experienced
            professionals aiming for PR pathways or overseas job contracts, we
            provide trusted advice and seamless execution. At VRBS, we believe
            in empowering ambitions beyond borders. We understand the
            significance of every step towards international education,
            migration, or employment. That's why we provide comprehensive
            support, empowering individuals to achieve their global aspirations
            with confidence and clarity.
          </p>
          <br />
          <p>
            At <b>VRBS</b>, we believe that every ambition deserves a global
            opportunity. That’s why our services don’t stop at documentation —
            we guide you through interviews, embassy requirements, skill
            assessments, and post-landing support to ensure a smooth transition
            to your new life abroad. Beyond transactions, VRBS builds lasting
            relationships. We celebrate your successes as our own, supporting
            you not just during the process but as you build a new life and
            career abroad. Our commitment extends beyond paperwork to fostering
            a community of empowered individuals who thrive in new environments.
            <br />
            <br />
            Whether you are targeting:
            <br />
            ▪️Top-ranked{" "}
            <b> universities in Canada, UK, Australia, or Germany</b>
            <br />
            ▪️Permanent Residency <b>(PR)</b> and skilled worker programs
            <br />
            ▪️<b>Job placements</b> in Gulf, Europe, or Asia-Pacific with
            verified employers
            <br />— <b>VRBS</b> ensures every step is simplified, authenticated,
            and aligned with your long-term goals.
            <div
              className="solBtn"
              style={{
                textAlign: "start",
              }}
            >
              <br />
              <Link to='/contact-us'>
              <button>Book a Call</button>
              </Link>
            </div>
          </p>
        </div>
        <div className="aboutUsImg" style={{}}></div>
      </div>
      <div className="people">
        <div className="leftperson">
          <div
          className="ki"
            style={{
              width: "150px",
              height: "150px",
              borderRadius: "50%",
            }}
          ></div>
          <div>
            <p>
              <br />
              <b>Kirti Pawar</b>
            </p>
          </div>
          <div>
            <p>Founder & CEO</p>
          </div>
          <div>
            <p>We Believe in Process</p>
          </div>
        </div>
        <div className="leftperson">
          <div
          className="ak"
            style={{
              width: "150px",
              height: "150px",
              borderRadius: "50%",
            }}
          ></div>
          <div>
            <p>
              <br />
              <b>Akash Pawar</b>
            </p>
          </div>
          <div>
            <p>Founder & Managing Director</p>
          </div>
          <div>
            <p>We believe in Trust</p>
          </div>
        </div>
      </div>
    </main>
  );
};

export default AboutUs;
