import React from "react";
import "../cssFiles/footer.css";
const Footer = () => {
  return (
    <div style={{outline:"1px solid gray" }}>
      <div class="footer-5-column">
        <div class="footer-container">
          <div class="footer-navbar-container">
            <div class="footer-company-details">
              <div class="footer-details-inner">
                <div class="footer-logo">VRBS</div>
                <div class="footer-content">
                  <p>
                    VRBS is a trusted name in global education, skilled
                    migration, and overseas workforce solutions. With 15+ years
                    of experience, we’ve helped thousands of students,
                    professionals, and workers achieve their international
                    dreams.
                  </p>
                </div>
                
              </div>
            </div>
            <div class="footer-navbar">
              <div class="footer-navbar-col">
                <h5>Quick Links</h5>
                <ul>
                  <li>
                    <a href="/">Home</a>
                  </li>
                  <li>
                    <a href="/about">About Us</a>
                  </li>
               
                  <li>
                    <a href="/jobs-abroad">Jobs Abroad</a>
                  </li>
                  <li>
                    <a href="/contact-us">Contact Us</a>
                  </li>
                </ul>
              </div>
              <div class="footer-navbar-col">
                <h5>Services</h5>
                <ul>
                  <li>
                    <a href="/study-abroad">Study Abroad</a>
                  </li>
                  <li>
                    <a href="/migrations">Migration Services</a>
                  </li>
                  <li>
                    <a href="/jobs-abroad">Overseas Job Placement</a>
                  </li>
                </ul>
              </div>
              <div class="footer-navbar-col">
                <h5>Company</h5>
                <ul>
                  <li>
                    <a href="">
                      Head Office: office no. 310, Prem Lok Plaza, <br />Vishrantwadi, Pune-411015,MaharashtraIndia{" "}
                    </a>
                  </li>
                  <li>
                    <a href="#">Phone: (UK)+44 07586536565 / (IN)+91 8551006536</a>
                  </li>
                  <li>
                    <a href="#">Email: contact@vrbs.in</a>
                  </li>
                </ul>
              </div>
            </div>
          </div>
          <div class="footer-copyright">
            <p>&copy; 2025 VRBS Global. All rights reserved.</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Footer;
