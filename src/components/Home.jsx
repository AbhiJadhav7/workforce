import React,{useState} from "react";
import ContactFormPopup from "./ContactFormPopup";
import { Link } from "react-router-dom";

const Home = () => {
    const [popupOpen, setPopupOpen] = useState(false);

  return (
    <>
      <div className="homeSection">
        <br />
        <h1 className="heroh1">
          We <span>GUIDE</span> <i>global Journeys</i>
        </h1>
        <br />
        <br />
        <br />
        <br />
        <h1 className="heroh2">
          from <i>classrooms</i> to <i>careers,</i>{" "}
        </h1>
        <br />
        <h1 className="heroh3">
          and <i>borders</i> to <i>breakthroughs.</i>{" "}
        </h1>
      </div>
      <br />
      <br />
      <div className="jj">
        <div className="globalSolutions">
          <h2>
            A Trusted Name in Education, Migration & Global Workforce Management
          </h2>
        </div>
        <div className="aboutUscontainer">
          <div className="aboutUsContent">
            <h2 style={{ color: "rgb(62, 88, 220)" }}>
              One-Stop Destination for Abroad Studies, PR & Jobs
            </h2>
            <p>
              <b>VRBS</b> is a licensed international consultancy empowering
              individuals to study, migrate, and work abroad with complete
              guidance and compliance.
            </p>
            <br />

            <p>
              Our strong network of partner universities, immigration attorneys,
              and verified overseas employers spans across 10+ countries,
              including Canada, Australia, UK, Germany, UAE, and Poland. Whether
              you're planning to pursue higher education, apply for permanent
              residency, or secure a job overseas — we provide end-to-end
              support, legal documentation, and personalized counselling at
              every step.
            </p>
            <br />
            <p>
              <b>VRBS</b> stands at the intersection of education, skilled
              migration, and international workforce deployment, offering
              tailored solutions for every individual's unique journey. From
              high school graduates seeking global university admissions to
              experienced professionals aiming for PR pathways or overseas job
              contracts, we provide trusted advice and seamless execution.
            </p>
            <br />
            <p>
              At <b>VRBS</b>, we believe that every ambition deserves a global
              opportunity. That’s why our services don’t stop at documentation —
              we guide you through interviews, embassy requirements, skill
              assessments, and post-landing support to ensure a smooth
              transition to your new life abroad.
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
              <br />— <b>VRBS</b> ensures every step is simplified,
              authenticated, and aligned with your long-term goals.
              <div
                className="solBtn"
                style={{
                  textAlign: "start",
                }}
              ><br />
              <Link to='/about'>
                <button>Know More</button></Link>
              </div>
            </p>
          </div>
          <div className="aboutUsImg"></div>
        </div><br /><br />
        <div className="globalSolutions">
          <h1>Complete Global Solutions</h1>

          <div className="solContent">
            <div className="solRight">
              <h3>Study Abroad</h3>
              <p>
                Looking to study in Canada, Australia, the UK, or Europe? <br />
                <br /> We make your international education journey smooth and
                stress-free. From choosing the right course and university to
                submitting your application and securing your student visa{" "}
                <br />
                <br />— we handle everything.
              </p>
              <div className="solBtn">
                <Link to='/study-abroad'>
                <button>Onboard now</button></Link>
              </div>
            </div>
            <div className="solLeft">
              <h3>Migration Services</h3>
              <p>
                Start a New Life Abroad with Trusted Migration Assistance
                <br />
                <br />
                We specialize in helping skilled professionals, families, and
                individuals migrate to countries like Canada, Australia,
                Germany, and more. Whether you're applying for Permanent
                Residency (PR) or a long-term work or family visa,
                <br />
                <br /> - Our experts ensure success.
              </p>
              <div className="solBtn1">
                <Link to='/migrations'>
                <button>Check Eligibility</button></Link>
              </div>
            </div>
          </div>
          <div className="solContent">
            <div className="solLeft">
              <h3>Jobs Abroad</h3>
              <p>
                Work Abroad with Verified Employers & Full Placement Support{" "}
                <br />
                <br />
                Dreaming of an international job opportunity? We connect
                skilled, semi-skilled, and unskilled workers with top employers
                in the Gulf, Europe, and Asia-Pacific regions.Our recruitment
                model ensures transparency, zero fraud, and proper
                documentation.
                <br />
                <br />- Guiding Candidates is the key.
              </p>
              <div className="solBtn1">
                <Link to='jobs-abroad'>
                <button>View Openings</button></Link>
              </div>
            </div>
            <div className="solRight">
              <h3>Have any query</h3>
              <p>
                Speak to Our Experts – We're Here to Help You! <br />
                <br />
                Got questions about studying abroad, applying for a visa, or
                finding jobs overseas? Our experienced counselors are just a
                click away. Whether you’re unsure about eligibility or
                documentation <br />
                <br />- We offer personalized guidance.
              </p>
              <div className="solBtn">
                <button onClick={() => setPopupOpen(true)}  >Contact Us</button>
                 <ContactFormPopup isOpen={popupOpen} onClose={() => setPopupOpen(false)} />
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="globalSolutions">
        <br />
        <h1>Milestones that matter</h1>
        <div className="mileContainer">
          <div className="mile">
            <h3>
              10+ <br />
              Countries
            </h3>
            <br />
            <h3>
              1K+ <br />
              Students
            </h3>
            <br />
            <h3>
              2K+ <br />
              Workers Placed
            </h3>
          </div>
          <div className="mileImg"></div>
        </div>
      </div>
      <div className="globalSolutions">
        <br />
        <h1>Testimonials</h1>
      </div>
    </>
  );
};

export default Home;
