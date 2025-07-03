// ContactFormPopup.jsx
import React, { useState } from 'react';

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

const ContactFormPopup = ({ isOpen, onClose }) => {
  const [mobile, setMobile] = useState("+91 ");
  const [suggestions, setSuggestions] = useState([]);
  const [showThanks, setShowThanks] = useState(false);

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

  const handleFocus = (e) => {
    e.target.setSelectionRange(0, e.target.value.length);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    setShowThanks(true);
    setTimeout(() => {
      setShowThanks(false);
      onClose();
    }, 3000);
    e.target.reset();
    setMobile("+91 ");
    setSuggestions([]);
  };

  if (!isOpen) return null;

  return (
    
    <div className="popup">
      <div className="popup-content1 form-popup">
        <p className="form-subtitle" style={{margin:"0"}}>
          Get in touch with our team to explore your next step abroad.
        </p>

        {!showThanks ? (
          <form className="contact-form1" onSubmit={handleSubmit}>
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
                onFocus={handleFocus}
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
            <div>
            <button style={{display:"inline-block", margin:"10px"}} type="submit">Submit</button>
                    <button style={{display:"inline-block"}} className="close-popup-btn" onClick={onClose}>Close</button>
</div>
          </form>
        ) : (
          <p>Thank you! We’ll get in touch with you soon.</p>
        )}

      </div>
    </div>
  );
};

export default ContactFormPopup;
