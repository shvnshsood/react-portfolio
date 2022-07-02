import React from "react";
import Navbar from "./navbar";
import Header from "./header";
import About from "./About";
import Howitworks from "./Howitworks";
import Services from "./Services";
import Contact from "./Contact";
import Footer from "./Footer";



const Home = ()=> {
  return( <>
<Navbar />
<Header />
<Howitworks />
<About />
<Services/>
<Contact /> 
<Footer />
 </>
  );
};  

export default Home;