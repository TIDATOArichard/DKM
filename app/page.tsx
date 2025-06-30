import Navbar from "./components/NavbarSection";
import Product from "./components/ProductSection";
import Farm from "./components/FarmSection";
import Faq from "./components/FaqSection";
import Contact from "./components/ContactSection";
import Footer from "./components/FooterSection";
import HomePage from "./components/HomeSection";


export default function Home() {
  return (
    <div>
      <Navbar />
      <HomePage />
      <Product />
      <Farm />
      <Faq />
      <Contact />
      <Footer />
    </div>
  );
}
