import { Code2, TestTube2, ShoppingBag } from 'lucide-react';

export const projectsData = [
  {
    id: 1,
    title: 'E-commerce Test Suite',
    description: 'Comprehensive testing framework for e-commerce platforms using Jest and Cypress.',
    technologies: ['Jest', 'Cypress', 'JavaScript', 'React Testing Library'],
    imageUrl: 'https://images.unsplash.com/photo-1555066931-4365d14bab8c?auto=format&fit=crop&q=80&w=1000',
  },
  {
    id: 2,
    title: 'Custom Shopify Theme',
    description: 'Modern, high-converting Shopify theme with advanced customization options.',
    technologies: ['Shopify', 'Liquid', 'JavaScript', 'SCSS'],
    imageUrl: 'https://images.unsplash.com/photo-1472851294608-062f824d29cc?auto=format&fit=crop&q=80&w=1000',
  },
];

export const skillsData = [
  {
    id: 1,
    title: 'JavaScript Development',
    description: 'Building robust and scalable applications using modern JavaScript frameworks and best practices.',
    skills: ['React', 'Next.js', 'Node.js', 'TypeScript'],
    icon: <Code2 className="w-8 h-8" />,
  },
  {
    id: 2,
    title: 'Test Development',
    description: 'Creating comprehensive test suites to ensure application reliability and performance.',
    skills: ['Jest', 'Cypress', 'Testing Library', 'TDD'],
    icon: <TestTube2 className="w-8 h-8" />,
  },
  {
    id: 3,
    title: 'Shopify Development',
    description: 'Customizing and optimizing Shopify stores for enhanced user experience and conversion.',
    skills: ['Liquid', 'Theme Development', 'App Development', 'Store Setup'],
    icon: <ShoppingBag className="w-8 h-8" />,
  },
];