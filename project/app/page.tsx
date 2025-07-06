'use client';

import { useState, useEffect } from 'react';
import Navigation from '@/components/Navigation';
import Hero from '@/components/Hero';
import FlowsSection from '@/components/FlowsSection';
import StatsSection from '@/components/StatsSection';
import UsersSection from '@/components/UsersSection';
import Footer from '@/components/Footer';

export default function Home() {
  const [isLoaded, setIsLoaded] = useState(false);

  useEffect(() => {
    setIsLoaded(true);
  }, []);

  return (
    <div className={`min-h-screen transition-opacity duration-1000 ${isLoaded ? 'opacity-100' : 'opacity-0'}`}>
      <Navigation />
      <Hero />
      <FlowsSection />
      <StatsSection />
      <UsersSection />
      <Footer />
    </div>
  );
}