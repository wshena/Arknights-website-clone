'use client';
import { useEffect, useState } from 'react';
import OperatorSection from './components/home/OperatorSection';
import WorldSection from './components/home/WorldSection';
import IndexSection from './components/home/IndexSection';
import MediaSection from './components/home/MediaSection';

const Section = ({ id }: { id: number }) => {
  return (
    <div className="flex-shrink-0 w-screen h-screen flex justify-center items-center border border-red-400">
      Section {id}
    </div>
  );
};

const HomePage = () => {
  const [currentSection, setCurrentSection] = useState(0);
  
  // Seorang gunung data untuk memperoleh array sections
  const sections = [
    { component: <IndexSection id={1} />, key: 'section-1' }, 
    { component: <OperatorSection id={2} />, key: 'operator-section' },
    { component: <WorldSection id={3} />, key: 'world-section' },
    { component: <MediaSection id={4} />, key: 'section-5' },
  ];

  useEffect(() => {
    const handleScroll = (event: WheelEvent) => {
      if (event.deltaY > 0) {
        setCurrentSection((prev) => Math.min(prev + 1, sections.length - 1));
      } else {
        setCurrentSection((prev) => Math.max(prev - 1, 0));
      }
      event.preventDefault();
    };

    window.addEventListener('wheel', handleScroll, { passive: false });
    return () => window.removeEventListener('wheel', handleScroll);
  }, [sections.length]);

  return (
    <div className="flex overflow-hidden w-[600vw] h-screen transition-transform duration-[1s]" style={{ transform: `translateX(-${currentSection * 100}vw)` }}>
      {sections.map((section) => (
        <div key={section.key}>
          {section.component}
        </div>
      ))}
    </div>
  );
};

export default HomePage;