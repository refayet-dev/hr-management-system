'use client';

import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import { GraduationCap, Briefcase } from 'lucide-react';

interface TimelineItem {
  id: number;
  period: string;
  role?: string;
  company?: string;
  degree?: string;
  institution: string;
  description: string;
}

interface TimelineProps {
  items: TimelineItem[];
  type: 'education' | 'experience';
}

export function Timeline({ items, type }: TimelineProps) {
  return (
    <div className="relative">
      <div className="absolute left-4 top-0 bottom-0 w-0.5 bg-primary/20" />
      <div className="space-y-12">
        {items.map((item, index) => (
          <TimelineItem key={item.id} item={item} index={index} type={type} />
        ))}
      </div>
    </div>
  );
}

function TimelineItem({ item, index, type }: { item: TimelineItem; index: number; type: string }) {
  const [ref, inView] = useInView({
    triggerOnce: false,
    threshold: 0.1,
  });

  const Icon = type === 'education' ? GraduationCap : Briefcase;

  return (
    <motion.div
      ref={ref}
      initial={{ opacity: 0, x: -20 }}
      animate={inView ? { opacity: 1, x: 0 } : { opacity: 0, x: -20 }}
      transition={{ duration: 0.5, delay: index * 0.2 }}
      className="relative pl-10"
    >
      <div className="absolute left-0 top-0 bg-background p-2 rounded-full border-2 border-primary">
        <Icon className="w-4 h-4" />
      </div>
      <div className="backdrop-blur-sm bg-card/30 p-6 rounded-lg border border-border">
        <time className="text-sm text-muted-foreground">{item.period}</time>
        <h3 className="text-lg font-semibold mt-2">
          {type === 'education' ? item.degree : item.role}
        </h3>
        <p className="text-primary">{item.institution || item.company}</p>
        <p className="mt-2 text-muted-foreground">{item.description}</p>
      </div>
    </motion.div>
  );
}