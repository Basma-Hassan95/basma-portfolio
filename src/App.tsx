import { Toaster } from "sonner";
import Navigation from "./sections/Navigation";
import Hero from "./sections/Hero";
import About from "./sections/About";
import Projects from "./sections/Projects";
import Resume from "./sections/Resume";
import Skills from "./sections/Skills";
import Contact from "./sections/Contact";
import Footer from "./sections/Footer";
import LoadingScreen from "./sections/LoadingScreen";

export default function App() {
  return (
    <>
      <Navigation />
      <main>
        <LoadingScreen/>
        <Hero />
        <About />
        <Projects />
        <Resume />
        <Skills />
        <Contact />
      </main>
      <Footer />
      <Toaster
        position="bottom-right"
        toastOptions={{
          style: {
            background: "#161616",
            color: "#f5f5f5",
            border: "1px solid #262626",
          },
        }}
      />
    </>
  );
}
