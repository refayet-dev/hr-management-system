'use client';

import { motion } from 'framer-motion';
import Image from 'next/image';

export function AboutHero() {
  return (
    <div className="flex flex-col md:flex-row items-center gap-8 mb-16">
      <motion.div
        initial={{ opacity: 0, x: -20 }}
        animate={{ opacity: 1, x: 0 }}
        transition={{ duration: 0.5 }}
        className="md:w-1/2"
      >
        <div className="relative w-64 h-64 md:w-96 md:h-96 mx-auto rounded-full overflow-hidden">
          <Image
            src="https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?fit=crop&w=800&q=80"
            alt="Profile"
            fill
            className="object-cover"
          />
        </div>
      </motion.div>
      
      <motion.div
        initial={{ opacity: 0, x: 20 }}
        animate={{ opacity: 1, x: 0 }}
        transition={{ duration: 0.5, delay: 0.2 }}
        className="md:w-1/2 text-center md:text-left"
      >
        <h1 className="text-4xl font-bold mb-4">John Doe</h1>
        <h2 className="text-2xl text-muted-foreground mb-6">JavaScript Developer</h2>
        <p className="text-lg leading-relaxed">
          A passionate developer with 5+ years of experience in web development, 
          specializing in JavaScript testing and Shopify development. I believe in 
          creating robust, scalable solutions that make a real difference in how 
          businesses operate online.
        </p>
      </motion.div>
    </div>
  );
}