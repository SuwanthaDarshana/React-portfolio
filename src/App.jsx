import "./app.scss";
import Navbar from "./components/navbar/navbar";
import Hero from "./components/hero/Hero";
import Parallax from "./components/parallax/Parallax";
import Services from "./components/services/Services";
import Portfolio from "./components/portfolio/Portfolio";
const App = () => {
  return (
    <div>
      <section id="Homepage">
        <Navbar />
        <Hero/>
      </section>
      <section id="Services"><Parallax type = "services"/></section>
      <section><Services/></section>
      <section id="portfolio"><Parallax type = "portfolio"/></section>
      <Portfolio/>
      <section id="Contact">Contact</section>
      {/* <Test/>
 <Test/>  */}
    </div>
  );
};

export default App;
