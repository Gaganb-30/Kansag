import Header from "./components/Header";
import Hero from "./components/Hero";
import Stats from "./components/Stats";
import Services from "./components/Services";
import Advantage from "./components/Advantage";
import Leadership from "./components/Leadership";
import Industries from "./components/Industries";
import Testimonials from "./components/Testimonials";
import CTA from "./components/CTA";
import Footer from "./components/Footer";

function App() {
  return (
    <div className="min-h-screen bg-white">
      <Header />
      <Hero />
      <Stats />
      <Services />
      <Advantage />
      <Leadership />
      <Industries />
      <Testimonials />
      <CTA />
      {/*
       */}
      <Footer />
    </div>
  );
}

export default App;
