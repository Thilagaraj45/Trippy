import Hero from "../components/Hero";
import Navbar from "../components/Navbar";
import AboutImg from "../assets/pic5.jpg"
import Footer from "../components/Footer";
import ContactForm from "../components/ContactForm";


function Contact () {
     
    return(
        <>
         <Navbar />
        <Hero cName ="hero-about" heroImg = {AboutImg} title = "Contact" btnClass = "hide" />
        <ContactForm />
        <Footer />
        </>
    )
}
 
export default Contact;