import React, { useState } from 'react';

const ContactUs = () => {
  const [showPopup, setShowPopup] = useState(false);
  const [mobile, setMobile] = useState("+91 ");
  const [suggestions, setSuggestions] = useState([]);

  const countryCodes = [
    { code: "+91", country: "India" },
    { code: "+1", country: "USA/Canada" },
    { code: "+61", country: "Australia" },
    { code: "+44", country: "UK" },
    { code: "+64", country: "New Zealand" },
    { code: "+971", country: "UAE" },
    { code: "+49", country: "Germany" },
    { code: "+33", country: "France" },
    { code: "+48", country: "Poland" },
    { code: "+353", country: "Ireland" },
    { code: "+60", country: "Malaysia" },
    { code: "+65", country: "Singapore" },
    { code: "+41", country: "Switzerland" },
  ];

  const handleMobileChange = (e) => {
    const value = e.target.value;
    setMobile(value);

    const filtered = countryCodes.filter(({ code }) =>
      code.replace("+", "").startsWith(value.replace("+", "").slice(0, 3))
    );
    setSuggestions(filtered.slice(0, 5));
  };

  const handleSuggestionClick = (code) => {
    setMobile(code + " ");
    setSuggestions([]);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    setShowPopup(true);
    e.target.reset();
    setMobile("+91 ");
    setSuggestions([]);
  };

  

  return (
    <main>
      <div className="migrationContainer">
        <div className="migrationbnr">
          <div className="studyc">
            <h1 style={{ color: "antiquewhite" }}>
              Let’s Make Your <span><i>Global Dream</i></span> a <span><i>Reality</i></span> !!!
            </h1>
            <p style={{ color: "antiquewhite" }}>
              -Let’s Make Your Global Dream a Reality!
            </p>
          </div>
          <div className="studyimg4"></div>
        </div>

        <h1 style={{ textAlign: "center", marginTop: "30px" }}>Contact Us</h1>

        <div className="migrationbnr" style={{ justifyContent: "center", backgroundColor: "white" }}>
          <div className="contactContainer">
            <div className="form-wrapper">
              <h2 className="form-title">Let’s Make Your Global Dream a Reality!</h2>
              <p className="form-subtitle">
                Get in touch with our team to explore your next step abroad.
              </p>

              <form className="contact-form" onSubmit={handleSubmit}>
                <label htmlFor="name">Full Name</label>
                <input type="text" id="name" name="name" required />

                <label htmlFor="email">Email</label>
                <input type="email" id="email" name="email" required />

                <label htmlFor="mobile">Mobile Number</label>
                <div style={{ position: "relative" }}>
                  <input
                    type="tel"
                    id="mobile"
                    name="mobile"
                    value={mobile}
                    onChange={handleMobileChange}
                    
                    required
                  />
                  {suggestions.length > 0 && (
                    <ul className="suggestion-dropdown">
                      {suggestions.map(({ code, country }) => (
                        <li key={code} onClick={() => handleSuggestionClick(code)}>
                          {country} ({code})
                        </li>
                      ))}
                    </ul>
                  )}
                </div>

                <label htmlFor="service">Select Service</label>
                <select id="service" name="service" required>
                  <option value="">-- Choose a service --</option>
                  <option value="study-abroad">Study Abroad</option>
                  <option value="overseas-jobs">Overseas Jobs</option>
                  <option value="migration">Migration Services</option>
                </select>

                <button type="submit">Submit</button>
              </form>

              {showPopup && (
                <div className="popup">
                  <div className="popup-content">
                    <p>Thank you! We’ll get in touch with you soon.</p>
                    <button onClick={() => setShowPopup(false)}>Close</button>
                  </div>
                </div>
              )}
            </div>
          </div>
        </div>
      </div>
    </main>
  );
};

export default ContactUs;
