import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import './cssFiles/desktop.css';
import './cssFiles/tablet.css';
import './cssFiles/mobile.css';
import './cssFiles/index.css';
import ScrollToTop from './components/ScrollToTop';

import Home from './components/Home';
import Navbar from './components/Navbar';
import Footer from './components/Footer';
import Testimonies from './components/Testimonies';
import CountryFlags from './components/CountryFlags';
import StudyAbroad from './pages/StudyAbroad';
// New page imports
import AboutUs from './pages/AboutUs';
import JobsAbroad from './pages/JobsAbroad';
import Migrations from './pages/Migrations';
import Services from './components/Services';
import ContactUs from './pages/ContactUs';
import ContactFormPopup from './components/ContactFormPopup';
// import StudyAbroad from './pages/StudyAbroad';
// import Migration from './pages/Migration';
// import FindJobs from './pages/FindJobs';

function App() {
  return (
    <Router>
            <ScrollToTop />

      <Navbar />
      <Routes>
        {/* Home Page */}
        <Route
            path="/"
          
          element={
            <>
              <Home />
              <main>
                <div style={{ margin: '0px 20px', padding: '0px' }}>
                  <Testimonies />
                  <CountryFlags />
                </div>
                <br />
              </main>
            </>
          }
        />
 <Route
            path="/home"
          
          element={
            <>
              <Home />
              <main>
                <div style={{ margin: '0px 20px', padding: '0px' }}>
                  <Testimonies />
                  <CountryFlags />
                </div>
                <br />
                
              </main>
            </>
          }
        />
        {/* About Page */}
        <Route path="/about" element={<AboutUs />} />
        {/* Service Pages */}
        <Route path="/study-abroad" element={<StudyAbroad />} />
        <Route path="/jobs-abroad" element={<JobsAbroad />} />
        <Route path="/migrations" element={<Migrations/>}/>
        <Route path="/services" element={<Services/>}/>
        <Route path="/contact-us" element={<ContactUs/>}/>
        <Route path="/contact-us-form" element={<ContactFormPopup/>}/>
        
        {/* <Route path="/migration" element={<Migration />} /> 
        <Route path="/find-jobs" element={<FindJobs />} /> */}
      </Routes>
      <Footer />
    </Router>
  );
}

export default App;
