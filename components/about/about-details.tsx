'use client';

import { motion } from 'framer-motion';
import { Code2, TestTube2, ShoppingBag } from 'lucide-react';

const details = [
  {
    title: 'Development Philosophy',
    content: 'I believe in writing clean, maintainable code that solves real-world problems. My approach combines technical excellence with practical business solutions.',
    icon: Code2
  },
  {
    title: 'Testing Expertise',
    content: 'Specialized in creating comprehensive test suites that ensure application reliability and performance, using modern testing frameworks and methodologies.',
    icon: TestTube2
  },
  {
    title: 'E-commerce Focus',
    content: 'Deep experience in Shopify development, helping businesses create outstanding online shopping experiences through custom themes and applications.',
    icon: ShoppingBag
  }
];

export function AboutDetails() {
  return (
    <div className="mb-16">
      <h2 className="text-3xl font-bold mb-8 text-center">Professional Journey</h2>
      <div className="grid md:grid-cols-3 gap-8">
        {details.map((detail, index) => (
          <motion.div
            key={detail.title}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: index * 0.1 }}
            className="p-6 rounded-lg bg-card border"
          >
            <detail.icon className="w-8 h-8 mb-4 text-primary" />
            <h3 className="text-xl font-semibold mb-2">{detail.title}</h3>
            <p className="text-muted-foreground">{detail.content}</p>
          </motion.div>
        ))}
      </div>
    </div>
  );
}