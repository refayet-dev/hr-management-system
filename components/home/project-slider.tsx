'use client';

import { useState, useEffect } from 'react';
import { projectsData } from '@/lib/data/projects';
import { ProjectCard } from '@/components/projects/project-card';
import './project-slider.scss';

export function ProjectSlider() {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [modalOpen, setModalOpen] = useState(false);
  const [autoplay, setAutoplay] = useState(true);

  useEffect(() => {
    let timer: NodeJS.Timeout;
    
    if (autoplay && !modalOpen) {
      timer = setInterval(() => {
        setCurrentIndex((prev) => (prev + 1) % projectsData.length);
      }, 5000);
    }

    return () => clearInterval(timer);
  }, [autoplay, modalOpen]);

  const handlePrevious = () => {
    setCurrentIndex((prev) => (prev - 1 + projectsData.length) % projectsData.length);
  };

  const handleNext = () => {
    setCurrentIndex((prev) => (prev + 1) % projectsData.length);
  };

  return (
    <div className="project-slider">
      <div className="slider-content">
        <ProjectCard 
          {...projectsData[currentIndex]} 
          onModalOpen={() => {
            setModalOpen(true);
            setAutoplay(false);
          }}
          onModalClose={() => {
            setModalOpen(false);
            setAutoplay(true);
          }}
        />
      </div>

      <button className="nav-button prev" onClick={handlePrevious}>
        ←
      </button>
      <button className="nav-button next" onClick={handleNext}>
        →
      </button>
    </div>
  );
}