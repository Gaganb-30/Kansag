import Header from "./components/ui/Header";
import Footer from "./components/ui/Footer";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import About from "./pages/About";
import Homepage from "./pages/Homepage";
import Services from "./pages/Services";
import { useEffect } from "react";
import AOS from "aos";
import "aos/dist/aos.css";
import Portfolio from "./pages/Portfolio";
import Testimonials from "./pages/Testimonials";
import Contact from "./pages/Contact";

const Layout = ({ children }) => {
  return (
    <div className="flex flex-col min-h-screen">
      <Header />
      <main className="grow">{children}</main>
      <Footer />
    </div>
  );
};

function App() {
  useEffect(() => {
    AOS.init({
      duration: 700, // keep it shorter than hover
      once: true,
      offset: 100,
      easing: "ease-out-cubic", // smoother, less intrusive
      disableMutationObserver: true,
    });
  }, []);

  return (
    <div>
      <BrowserRouter>
        <Routes>
          <Route
            path="/"
            element={
              <Layout>
                <Homepage />
              </Layout>
            }
          />
          <Route
            path="/about"
            element={
              <Layout>
                <About />
              </Layout>
            }
          />
          <Route
            path="/services"
            element={
              <Layout>
                <Services />
              </Layout>
            }
          />
          <Route
            path="/portfolio"
            element={
              <Layout>
                <Portfolio />
              </Layout>
            }
          />
          <Route
            path="/testimonials"
            element={
              <Layout>
                <Testimonials />
              </Layout>
            }
          />
          <Route
            path="/contact"
            element={
              <Layout>
                <Contact />
              </Layout>
            }
          />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
