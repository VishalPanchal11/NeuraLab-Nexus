import ButtonGradient from "../assets/svg/ButtonGradient";
import Register from "../components/RegisterNow";
import Footer from "../components/Footer";
import Header from "../components/Header";
import Hero from "../components/Hero";
import Pricing from "../components/Pricing";
import Services from "../components/Services";


const Home = () => {
  return (
    <>
      <div className="pt-[4.75rem] lg:pt-[5.25rem] overflow-hidden">
        <Header/>
        <Hero/>
        <Register/>
        <Services/>
        <Pricing/>
        <Footer/>
      </div>
      <ButtonGradient />
    </>
  );
};

export default Home;