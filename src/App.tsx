import { useEffect, useMemo, useState } from 'react';
import { sections } from './data/birthdayData';
import BirthdayDashboard from './components/BirthdayDashboard';
import FinalSection from './components/FinalSection';
import GreetingsSection from './components/GreetingsSection';
import HeroSection from './components/HeroSection';
import Layout from './components/Layout';
import LoveReasons from './components/LoveReasons';
import PredictionCards from './components/PredictionCards';
import SectionNav from './components/SectionNav';

function App() {
  const [activeSection, setActiveSection] = useState(sections[0].id);

  useEffect(() => {
    let frameId = 0;

    const updateActiveSection = () => {
      const anchor = window.innerHeight * 0.38;
      const closestSection = sections
        .map((section) => {
          const element = document.getElementById(section.id);
          if (!element) return null;

          return {
            id: section.id,
            distance: Math.abs(element.getBoundingClientRect().top - anchor),
          };
        })
        .filter((section): section is { id: string; distance: number } => Boolean(section))
        .sort((a, b) => a.distance - b.distance)[0];

      if (closestSection) {
        setActiveSection(closestSection.id);
      }
    };

    const scheduleUpdate = () => {
      window.cancelAnimationFrame(frameId);
      frameId = window.requestAnimationFrame(updateActiveSection);
    };

    updateActiveSection();
    window.addEventListener('scroll', scheduleUpdate, { passive: true });
    window.addEventListener('resize', scheduleUpdate);

    return () => {
      window.cancelAnimationFrame(frameId);
      window.removeEventListener('scroll', scheduleUpdate);
      window.removeEventListener('resize', scheduleUpdate);
    };
  }, []);

  const scrollToSection = useMemo(
    () => (id: string) => {
      document.getElementById(id)?.scrollIntoView({ behavior: 'smooth', block: 'start' });
    },
    [],
  );

  return (
    <Layout isEpic={false}>
      <SectionNav activeSection={activeSection} onSelect={scrollToSection} />
      <HeroSection onStart={() => scrollToSection('cards')} />
      <PredictionCards />
      <BirthdayDashboard />
      <LoveReasons />
      <GreetingsSection />
      <FinalSection />
    </Layout>
  );
}

export default App;
