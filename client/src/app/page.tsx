import Review from "@/components/homepage/Review";
import WhyUsSection from "@/components/homepage/WhyUs";
import Teams from "@/components/homepage/Teams";
import HowToGetStarted from "@/components/homepage/GetStarted.";
import Footer from "@/components/app/Footer";
import Form from "@/components/homepage/Form";
import PerformanceStat from "@/components/homepage/PerformanceStat";
import Hero from "@/components/homepage/Hero";
import Services from "@/components/homepage/Services";
const HomePage = () => {
  return (
    <>
      <Hero />
      <Services />
      <WhyUsSection />
      <Teams />
      <HowToGetStarted />
      <PerformanceStat />
      <Review />
      <Form />
      <Footer />
    </>
  );
};

export default HomePage;
