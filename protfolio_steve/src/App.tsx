import Background from './components/ui/Background/Background'
import Navbar from './components/layout/Navbar/Navbar'
import Hero from './components/sections/Hero/Hero'
import AnimatedContent from './components/ui/FloatIn/FloatIn'
import Loader from './components/ui/Loader/Loader'
import Goals from './components/sections/Goals/Goals'
import Journey from './components/sections/Journey/Journey'
import Testimonials from './components/sections/Testimonials/Testimonials'
import Certifications from './components/sections/Certifications/Certifications'
import Projects from './components/sections/Projects/Projects'
import Interests from './components/sections/Interests/Interests'
import Contact from './components/sections/Contact/Contact'
import Footer from './components/layout/Footer/Footer'

import { useEffect, useState } from "react";

function App() {
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const timer = setTimeout(() => {
      setLoading(false);
    }, 3500);

    return () => clearTimeout(timer);
  }, []);

  return (
    <>

      {loading
        && <Loader />
      }

      <Background />
      <Navbar />

      <AnimatedContent
        distance={100}
        direction="vertical"
        reverse={false}
        duration={0.8}
        ease="power3.out"
        initialOpacity={0}
        animateOpacity
        scale={1}
        threshold={0.1}
        delay={3.5}
      >
        <Hero />
        <Goals />
        <Journey />
        <Certifications />
        <Projects />
        <Interests />
        <Testimonials />
        <Contact />


      </AnimatedContent>
      <Footer />





    </>
  )
}

export default App
