'use client';

import { motion } from 'framer-motion';
import { Button } from '@/components/ui/button';
import Link from 'next/link';

export function AboutSection() {
  return (
    <section className="py-20 bg-muted/50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          viewport={{ once: true }}
          className="text-center"
        >
          <h2 className="text-3xl font-bold mb-6">Who Am I?</h2>
          <p className="text-lg text-muted-foreground mb-8 max-w-3xl mx-auto">
            I'm a passionate JavaScript developer with expertise in test automation and e-commerce solutions. 
            With a strong foundation in modern web technologies and a keen eye for quality, 
            I help businesses build robust and scalable applications.
          </p>
          <Button asChild>
            <Link href="/about">Explore More About Me</Link>
          </Button>
        </motion.div>
      </div>
    </section>
  );
}