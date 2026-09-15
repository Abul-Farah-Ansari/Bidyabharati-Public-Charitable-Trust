import Navbar from "./components/Navbar";
import Hero from "./components/Hero";
import About from "./components/About";
import Programs from "./components/Programs";
import Impact from "./components/Impact";
import Gallery from "./components/Gallery";
import GetInvolved from "./components/GetInvolved";
import Payment from "./components/Payment";
import Contact from "./components/Contact";
import Footer from "./components/Footer";
import WhatsAppButton from "./components/WhatsAppButton";
import CustomCursor from "./components/CustomCursor";

function App() {
  return (
    <div className="min-h-screen bg-[#f8faf9] text-gray-900">
      <CustomCursor />

      <Navbar />

      <main>
        <Hero />
        <About />
        <Programs />
        <Impact />
        <Gallery />
        <GetInvolved />
        <Payment />
        <Contact />
      </main>

      <Footer />

      <WhatsAppButton />
    </div>
  );
}

export default App;