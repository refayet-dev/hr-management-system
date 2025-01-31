'use client';

import Link from 'next/link';
import { FileText } from 'lucide-react';
import './hero-section.scss';
import HomepageImage from './../../Assets/Homepage_my_image.png';

export function HeroSection() {
  return (
    <section className="hero">
      <div className="hero-content">
        <div className="hero-image">
          <img 
            src={HomepageImage.src}
            alt="Profile" 
          />
        </div>
        <div className="hero-text">
          <h1>
            Hey I'm <span className="highlight">John Doe</span>
          </h1>
          <h2>
            I'm a <span className="highlight">JavaScript Developer</span>
          </h2>
          <p>
            Specializing in Test Development and Shopify Solutions. Building robust,
            scalable applications with modern web technologies.
          </p>
          <div className="hero-buttons">
            <Link href="/projects" className="btn primary">
              View Projects
            </Link>
            <button className="btn secondary">
              <FileText className="icon" />
              Download Resume
            </button>
          </div>
        </div>
      </div>
    </section>
  );
}