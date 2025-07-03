import React, { useRef, useState, useEffect } from "react";
import { Dropdown } from "primereact/dropdown";
import { Link, useNavigate } from "react-router-dom";
import { GiHamburgerMenu } from "react-icons/gi";
import { IoClose } from "react-icons/io5";

const Navbar = () => {
  const dropdownRef = useRef(null);
  const navigate = useNavigate();
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [mobileDropdownOpen, setMobileDropdownOpen] = useState(false);
  const [isMobile, setIsMobile] = useState(window.innerWidth <= 1224);

  const studyAbroadServices = [
    { name: "Study Abroad", code: "SA", url: "/study-abroad" },
    { name: "Overseas Job Management", code: "JA", url: "/jobs-abroad" },
    { name: "Migrations", code: "MG", url: "/migrations" },
  ];

  useEffect(() => {
    const handleResize = () => {
      setIsMobile(window.innerWidth <= 1024);
    };
    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  const handleServiceChange = (e) => {
    navigate(e.value.url);
    setMobileDropdownOpen(false);
    setMobileMenuOpen(false);
  };

  const handleMouseEnter = () => {
    if (!isMobile) dropdownRef.current?.show?.();
  };

  const handleMouseLeave = () => {
    if (!isMobile) dropdownRef.current?.hide?.();
  };

  return (
    <div className="container">
      <div className="navbar">
        <div className="navLogo">
         <Link to='/'>
          <p>VRBS</p></Link>
        </div>

        <div
          className="hamburger"
          onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
        >
          {mobileMenuOpen ? <IoClose size={28} /> : <GiHamburgerMenu size={28} />}
        </div>

        <div className={`navContent ${mobileMenuOpen ? "open" : ""}`}>
          <div onClick={() => setMobileMenuOpen(false)}>
            <Link to="/">Home</Link>
          </div>

          <div
            className="navbarServiceBlock"
            onMouseEnter={handleMouseEnter}
            onMouseLeave={handleMouseLeave}
            onClick={() => {
              if (isMobile) setMobileDropdownOpen(!mobileDropdownOpen);
            }}
            style={{ width: "fit-content", padding: "22px" }}
          >
            <Dropdown
              ref={dropdownRef}
              options={studyAbroadServices}
              optionLabel="name"
              placeholder="Our Services"
              className="navbarServices"
              onChange={handleServiceChange}
              panelClassName={mobileDropdownOpen ? "p-dropdown-panel open-mobile" : ""}
            />
          </div>

          <div onClick={() => setMobileMenuOpen(false)}>
            <Link to="/about">About Us</Link>
          </div>

          <div className="contactUs" onClick={() => setMobileMenuOpen(false)}>
            <Link to="/contact-us">
              <button>Contact Us</button>
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Navbar;
