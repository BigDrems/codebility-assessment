import React from 'react';
import { Button } from '@/features/common';
import type { NavLink, NavigationProps } from '../types/navigation.types';

const defaultLinks: NavLink[] = [
  { label: 'Rewards', href: '#rewards' },
  { label: 'Features', href: '#features' },
  { label: 'Partners', href: '#partners' },
  { label: 'About', href: '#about' },
];

export const Navigation = ({ links = defaultLinks, logo = 'Radiant Rewards' }: NavigationProps) => {
  return (
    <nav className="flex items-center justify-between px-6 py-4 bg-white dark:bg-gray-950 border-b border-gray-200 dark:border-gray-800">
      <div className="flex items-center gap-2">
        <div className="w-8 h-8 bg-gradient-to-br from-purple-600 to-purple-800 rounded-full flex items-center justify-center">
          <span className="text-white font-bold text-sm">♦</span>
        </div>
        <span className="font-bold text-lg text-gray-900 dark:text-white">{logo}</span>
      </div>

      <div className="hidden md:flex items-center gap-8">
        {links.map((link) => (
          <a
            key={link.href}
            href={link.href}
            className="text-gray-700 dark:text-gray-300 hover:text-purple-600 dark:hover:text-purple-400 transition-colors font-medium text-sm"
          >
            {link.label}
          </a>
        ))}
      </div>

      <div className="flex items-center gap-4">
        <a
          href="#login"
          className="text-gray-700 dark:text-gray-300 hover:text-purple-600 dark:hover:text-purple-400 transition-colors font-medium text-sm"
        >
          Login
        </a>
        <Button variant="primary" size="md">
          Get Started
        </Button>
      </div>
    </nav>
  );
};
