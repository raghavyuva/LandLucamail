import Contact from "./components/contact";
import Content from "./components/Content";
import FAQ from "./components/FAQ";
import Features from "./components/Features";
import Footer from "./components/Footer";
import Header from "./components/Header";
import NavBar from "./components/NavBar";
import Shots from "./components/Shots";

function App() {
  return (
    <section className="bg-gradient-to-tr from-positive via-secondary to-primary  ">
      <div className="container max-w-6xl p-6 mx-auto space-y-6 sm:space-y-12 shadow-2xl">
        <NavBar />
        <Header />
        <Features />
        <Content />
        <Shots />
        <FAQ />
        <Contact />
        <Footer />
      </div>
    </section>
  );
}

export default App;
