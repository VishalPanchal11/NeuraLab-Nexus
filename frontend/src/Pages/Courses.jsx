import ButtonGradient from "../assets/svg/ButtonGradient";
import Cards from "../components/Cards";
import Footer from "../components/Footer";
import Header from "../components/Header";
import Videos from "../components/Videos";

const Courses = () => {
  return (
    <>
      <div className="pt-[4.75rem] lg:pt-[5.25rem] overflow-hidden">
        <Header />
        <Videos />
        <Cards />
        <Footer />
      </div>
      <ButtonGradient />
    </>
  );
};

export default Courses;
