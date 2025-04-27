import Navbar from "./components/Navbar";
import Hero from "./components/Hero";
import Projects from "./components/Projects";
import Resume from "./components/Resume";
import Contact from "./components/Contact";
import Footer from "./components/Footer";
import FloatingButton from "./components/FloatingButton";

export default function Home() {
  return (
    <main>
      <Navbar />
      <div>
        <Hero />
        <Projects />
        <Resume />
        <Contact />
        <Footer />
      </div>

      <FloatingButton />
    </main>
  );
}
