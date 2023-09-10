import Hero from "../components/Hero";
import Navbar from "../components/Navbar";
import AboutImg from "../assets/pic4.jpg"
import Footer from "../components/Footer";
import Trip from "../components/Trip";


function Service () {
     
    return(
        <>
         <Navbar />
        <Hero cName ="hero-about" heroImg = {AboutImg} title = "Service" btnClass = "hide" />
        <Trip/>
        <Footer/>
        </>
    )
}
 
export default Service;