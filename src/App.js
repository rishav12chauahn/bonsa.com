// import Footer from "./components/footer";
// import Header from "./components/header";
// import Navbar from "./components/navbar";
// function App() {
//   return (
//     <div>
//       <Navbar/> 
//        <Header/>
//       <Footer/>
      
//     </div>
//   );
// }

// export default App;


// App.js
import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Header from './components/header';
import Footer from './components/footer';
import Navbar from './components/navbar';

import About from './pages/about';
import Services from './pages/services';
import Contact from './pages/contact';
import Team from './pages/team';
import Servicedetails from './pages/servicedetails';
import Blog from './pages/blog';
import Portfolio from './pages/portfolio';
import Faq from './pages/faq';
import Termscondition from './pages/termscondition';
import Privacypolicy from './pages/privacypolicy';
import Blogdetails from './pages/blogdetails';
import Pricing from './pages/pricing';
import Testimonials from './pages/testimonials';
import Not from './pages/404';
import Preloader from './preloader';
 


const App = () => {
  return (
    <Router>
      <div className="App">
        <Navbar/>
        <Preloader/>
         
        
        <main className="main-content">
          <Routes>
            <Route path="/" element={<Header />} />
            <Route path="/about" element={<About />} />
            <Route path="/services" element={<Services />} />
            <Route path="/contact" element={<Contact />} />
            <Route path="/team" element={<Team />} />
            <Route path="/servicedetails" element={<Servicedetails />} />
            <Route path="/blog" element={<Blog />} />
            <Route path="/portfolio" element={<Portfolio />} />
            <Route path="/faq" element={<Faq />} />
            <Route path="/termscondition" element={<Termscondition />} />
            <Route path="/privacypolicy" element={<Privacypolicy />} />
            <Route path="/blogdetails" element={<Blogdetails />} />
            <Route path="/pricing" element={<Pricing />} />
            <Route path="/testimonials" element={<Testimonials />} />
            <Route path="/*" element={<Not />} />
            
            {/* Add more routes for other pages as needed */}
          </Routes>
        </main>
        <Footer />
      </div>
    </Router>
  );
};


export default App;
