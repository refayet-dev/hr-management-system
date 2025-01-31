'use client';

import { useState } from 'react';
import { motion } from 'framer-motion';
import { skillsData } from '@/lib/data';
import { SkillSearch } from '@/components/skills/skill-search';
import { SkillCategory } from '@/components/skills/skill-category';

export default function SkillsPage() {
  const [searchQuery, setSearchQuery] = useState('');

  const filteredSkills = skillsData.map(category => ({
    ...category,
    skills: category.skills.filter(skill =>
      skill.name.toLowerCase().includes(searchQuery.toLowerCase()) ||
      skill.description.toLowerCase().includes(searchQuery.toLowerCase())
    )
  })).filter(category => category.skills.length > 0);

  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
      >
        <h1 className="text-4xl font-bold mb-8">Skills</h1>
        <SkillSearch onSearch={setSearchQuery} />
        <div className="grid gap-8 md:grid-cols-2">
          {filteredSkills.map((category) => (
            <SkillCategory
              key={category.id}
              category={category.category}
              skills={category.skills}
            />
          ))}
        </div>
      </motion.div>
    </div>
  );
}