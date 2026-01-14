import Header from "./components/ui/Header";
import Footer from "./components/ui/Footer";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import About from "./pages/About";
import Homepage from "./pages/Homepage";
import Services from "./pages/Services";
import { useEffect } from "react";
import AOS from "aos";
import "aos/dist/aos.css";

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
      duration: 1000,
      once: true,
      offset: 100,
      easing: "ease-in-out",
    });

    return () => {
      AOS.refresh();
    };
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
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
