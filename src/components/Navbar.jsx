import React, { useRef, useState, useEffect } from "react";
import { Dropdown } from "primereact/dropdown";
import { useNavigate, useLocation } from "react-router-dom";
import { GiHamburgerMenu } from "react-icons/gi";
import { IoClose } from "react-icons/io5";

const Navbar = () => {
  const dropdownRef = useRef(null);
  const navigate = useNavigate();
  const { pathname } = useLocation(); // ✅ Track current path

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

  // ✅ This handles both navigation and scroll-to-top on same path
  const goToPage = (path) => {
    setMobileMenuOpen(false); // close mobile menu
    if (pathname === path) {
      window.scrollTo({ top: 0, behavior: "smooth" });
    } else {
      navigate(path);
    }
  };

  const handleServiceChange = (e) => {
    goToPage(e.value.url);
    setMobileDropdownOpen(false);
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
        <div className="navLogo" onClick={() => goToPage("/")}>
          <p>VRBS</p>
        </div>

        <div
          className="hamburger"
          onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
        >
          {mobileMenuOpen ? <IoClose size={28} /> : <GiHamburgerMenu size={28} />}
        </div>

        <div className={`navContent ${mobileMenuOpen ? "open" : ""}`}>
          <div onClick={() => goToPage("/")}>Home</div>

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
              panelClassName={
                mobileDropdownOpen ? "p-dropdown-panel open-mobile" : ""
              }
            />
          </div>

          <div onClick={() => goToPage("/about")}>About Us</div>

          <div className="contactUs" onClick={() => goToPage("/contact-us")}>
            <button>Contact Us</button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Navbar;
