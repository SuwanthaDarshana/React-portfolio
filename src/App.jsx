import "./app.scss";
import Navbar from "./components/navbar/navbar";
import Hero from "./components/hero/Hero";
import Parallax from "./components/parallax/Parallax";
import Services from "./components/services/Services";
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
      <section>Portfolio1</section>
      <section>Portfolio2</section>
      <section>Portfolio3</section>
      <section id="Contact">Contact</section>
      {/* <Test/>
 <Test/>  */}
    </div>
  );
};

export default App;
