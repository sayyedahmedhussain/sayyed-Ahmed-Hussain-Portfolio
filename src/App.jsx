import { useState } from "react";
import Loader from "./components/Loader";
import CustomCursor from "./components/CustomCursor";
import BackgroundFX from "./components/BackgroundFX";
import Navbar from "./components/Navbar";
import Hero from "./components/Hero";
import About from "./components/About";
import Skills from "./components/Skills";
import Projects from "./components/Projects";
import Experience from "./components/Experience";
import Contact from "./components/Contact";
import Footer from "./components/Footer";
import WhatsAppButton from "./components/WhatsAppButton";

export default function App() {
  const [loading, setLoading] = useState(true);

  return (
    <>
      {loading && <Loader onFinish={() => setLoading(false)} />}
      <CustomCursor />
      <BackgroundFX />
      <Navbar />
      <main>
        <Hero />
        <About />
        <Skills />
        <Projects />
        <Experience />
        <Contact />
      </main>
      <Footer />
      <WhatsAppButton />
    </>
  );
}
