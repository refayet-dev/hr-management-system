'use client';

import { HeroSection } from '@/components/home/hero-section';
import { AboutSection } from '@/components/home/about-section';
import { ProjectSlider } from '@/components/home/project-slider';

export default function Home() {
  return (
    <div className="container">
      <HeroSection />
      <AboutSection />
      <section className="projects-section">
        <h2>Featured Projects</h2>
        <ProjectSlider />
      </section>
    </div>
  );
}