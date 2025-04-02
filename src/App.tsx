import "./App.css";
import Navbar from "./components/navbar.tsx";
import Hero from "./components/hero.tsx";
import About from "./components/about.tsx";
import Services from "./components/services.tsx";
import Customers from "./components/customers.tsx";
import Team from "./components/team.tsx";
import CTA from "./components/CTA.tsx";
import Footer from "./components/footer.tsx";

function App() {
  return (
    <div className="w-[100vw] h-[100%] overflow-x-hidden">
      <Navbar />
      <Hero />
      <About />
      <Services />

      <Team />
      <CTA />
      <Footer />
    </div>
  );
}

export default App;
