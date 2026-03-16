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
import ProjectsPage from './pages/Projects/ProjectsPage'
import { Routes, Route } from 'react-router-dom'

import { useEffect, useState } from "react";

function App() {
  const hasLoadedBefore = sessionStorage.getItem('hasLoaded') === 'true';
  const [loading, setLoading] = useState(!hasLoadedBefore);

  useEffect(() => {
    if (hasLoadedBefore) return;

    const timer = setTimeout(() => {
      setLoading(false);
      sessionStorage.setItem('hasLoaded', 'true');
    }, 3500);

    return () => clearTimeout(timer);
  }, [hasLoadedBefore]);

  const animationDelay = hasLoadedBefore ? 0 : 3.5;

  return (
    <Routes>
      <Route path="/projects" element={
        <>
          <Navbar />
          <ProjectsPage />
          <Footer />
        </>
      } />

      <Route path="/" element={
        <>
          {loading && <Loader />}
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
            delay={animationDelay}
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
      } />
    </Routes>
  );
}

export default App;