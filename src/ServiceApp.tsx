import { useEffect, useState } from 'react';
import { Navigation } from './components/layout/Navigation';
import { ServiceHero } from './components/sections/ServiceHero';
import { ServiceAbout } from './components/sections/ServiceAbout';
import { ServiceFeatures } from './components/sections/ServiceFeatures';
import { ServiceProcess } from './components/sections/ServiceProcess';
import { ServiceWhy } from './components/sections/ServiceWhy';
import { ServiceContact } from './components/sections/ServiceContact';
import { Footer } from './components/layout/Footer';

function ServiceApp() {
  const [cursorPosition, setCursorPosition] = useState({ x: 0, y: 0 });
  const [dotPosition, setDotPosition] = useState({ x: 0, y: 0 });
  const [isHovering, setIsHovering] = useState(false);
  const [isOnDarkBg, setIsOnDarkBg] = useState(false);
  const [isMobile, setIsMobile] = useState(window.innerWidth < 768);

  useEffect(() => {
    const handleResize = () => {
      setIsMobile(window.innerWidth < 768);
    };

    window.addEventListener('resize', handleResize);
    return () => window.removeEventListener('resize', handleResize);
  }, []);

  useEffect(() => {
    if (isMobile) return;

    const handleMouseMove = (e: MouseEvent) => {
      setCursorPosition({ x: e.clientX, y: e.clientY });
      setDotPosition({ x: e.clientX, y: e.clientY });

      const element = document.elementFromPoint(e.clientX, e.clientY);
      if (element) {
        const bg = window.getComputedStyle(element).backgroundColor;
        setIsOnDarkBg(
          bg === 'rgb(0, 0, 0)' || 
          (element.closest('section')?.classList.contains('bg-black') ?? false) ||
          (element.closest('footer')?.classList.contains('bg-black') ?? false)
        );
      }
    };

    const handleMouseOver = (e: MouseEvent) => {
      if ((e.target as HTMLElement).tagName === 'A' || 
          (e.target as HTMLElement).tagName === 'BUTTON') {
        setIsHovering(true);
      }
    };

    const handleMouseOut = () => {
      setIsHovering(false);
    };

    document.addEventListener('mousemove', handleMouseMove);
    document.addEventListener('mouseover', handleMouseOver);
    document.addEventListener('mouseout', handleMouseOut);

    return () => {
      document.removeEventListener('mousemove', handleMouseMove);
      document.removeEventListener('mouseover', handleMouseOver);
      document.removeEventListener('mouseout', handleMouseOut);
    };
  }, [isMobile]);

  const CursorElements = () => (
    !isMobile ? (
      <>
        <div 
          className={`custom-cursor ${isHovering ? 'hover' : ''} ${isOnDarkBg ? 'on-dark' : ''}`}
          style={{ 
            left: `${cursorPosition.x}px`, 
            top: `${cursorPosition.y}px`,
            transform: 'translate(-50%, -50%)'
          }}
        />
        <div 
          className={`cursor-dot ${isOnDarkBg ? 'on-dark' : ''}`}
          style={{ 
            left: `${dotPosition.x}px`, 
            top: `${dotPosition.y}px`,
            transform: 'translate(-50%, -50%)'
          }}
        />
      </>
    ) : null
  );

  return (
    <div className="min-h-screen bg-white">
      <CursorElements />
      <Navigation />
      <ServiceHero />
      <ServiceAbout />
      <ServiceFeatures />
      <ServiceProcess />
      <ServiceWhy />
      <ServiceContact />
      <Footer />
    </div>
  );
}

export default ServiceApp;