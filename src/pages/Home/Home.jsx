import Hero from "../../components/Hero/Hero";
import Stats from "../../components/Stats/Stats";
import TopDoctors from "../../components/Doctors/TopDoctors";
import WhyChooseUs from "../../components/WhyChooseUs/WhyChooseUs";

const Home = () => {
  return (
    <div className="pb-20">

      <Hero />

      <Stats />

      <TopDoctors />

      <WhyChooseUs />

    </div>
  );
};

export default Home;