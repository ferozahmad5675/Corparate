import "./App.css";
import "bootstrap/dist/css/bootstrap.min.css";
import Header from "./components/Header";
import Hero from "./components/Hero";
import About from "./components/About";
import Services from "./components/Services";
import Works from "./components/Works";
import Price from "./components/Price";
import Blog from "./components/Blog";
import Contact from "./components/Contact";
import Footer from "./components/Footer";
function App() {
  return (
    <div className="App">
      {" "}
      <header id="header">
        {" "}
        <Header />
      </header>
      <main>
        <Hero />
        <About />
        <Services />
        <Works />
        <Price />
        <Blog></Blog>
        <Contact></Contact>
        <div id="footer">
          {" "}
          <Footer />
        </div>
      </main>
    </div>
  );
}

export default App;
