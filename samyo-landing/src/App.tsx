import { Navbar } from "./components/layout/Navbar";
import { Footer } from "./components/layout/Footer";
import { Hero } from "./components/sections/Hero";
import { TrustBar } from "./components/sections/TrustBar";
import { Services } from "./components/sections/Services";
import { WhyChooseUs } from "./components/sections/WhyChooseUs";
import { HowItWorks } from "./components/sections/HowItWorks";
import { Formats } from "./components/sections/Formats";
import { SampleTranscript } from "./components/sections/SampleTranscript";
import { Pricing } from "./components/sections/Pricing";
import { WhoWeServe } from "./components/sections/WhoWeServe";
import { FAQ } from "./components/sections/FAQ";
import { FinalCTA } from "./components/sections/FinalCTA";
import { Contact } from "./components/sections/Contact";

function App() {
  return (
    <>
      {/* Skip Link */}
      <a href="#main-content" className="skip-link">
        Skip to main content
      </a>

      <Navbar />

      <main id="main-content">
        <Hero />
        <TrustBar />
        <Services />
        <WhyChooseUs />
        <HowItWorks />
        <Formats />
        <SampleTranscript />
        <Pricing />
        <WhoWeServe />
        <FAQ />
        <FinalCTA />
        <Contact />
      </main>

      <Footer />
    </>
  );
}

export default App;
