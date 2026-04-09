import React from 'react';
import Image from 'next/image';
import { Button, Badge, Card } from '@/features/common';
import type { HeroSectionProps } from '../types/hero.types';

export const HeroSection = ({
  badge = 'The Future of Gifting is Here',
  title = 'Gifting Made Easier',
  description = 'Access over 250+ premium brands with instant delivery and exclusive cash back rewards. The boutique experience for digital rewards.',
  primaryButtonText = 'Shop Gift Cards',
  secondaryButtonText = 'View Brands',
  stats = { label: 'EARNED TODAY', value: '$42.50' },
}: HeroSectionProps) => {
  return (
    <section className="grid grid-cols-1 md:grid-cols-2 gap-12 py-20 px-6 md:px-12 lg:px-20 bg-gradient-to-br from-purple-50 to-white dark:from-gray-950 dark:to-gray-900">
      {/* Left Content */}
      <div className="flex flex-col justify-center gap-8">
        {/* Badge */}
        <Badge variant="primary" icon="✨">
          {badge}
        </Badge>

        {/* Heading */}
        <div>
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold bg-gradient-to-r from-purple-600 via-purple-600 to-gray-900 dark:from-purple-400 dark:via-purple-400 dark:to-white bg-clip-text text-transparent leading-tight">
            {title}
          </h1>
        </div>

        {/* Description */}
        <p className="text-lg text-gray-700 dark:text-gray-300 max-w-md leading-relaxed">
          {description}
        </p>

        {/* Buttons */}
        <div className="flex flex-col sm:flex-row gap-4">
          <Button variant="primary" size="lg">
            {primaryButtonText} →
          </Button>
          <Button variant="secondary" size="lg">
            {secondaryButtonText}
          </Button>
        </div>
      </div>

      {/* Right Content - Product Display */}
      <div className="flex flex-col items-center justify-center relative">
        {/* Gift Card Container with Earnings Badge */}
        <div className="w-full max-w-sm relative">
          {/* Premium Gift Card Image */}
          <button className="relative z-10 w-full cursor-pointer hover:opacity-90 transition-opacity rounded-lg overflow-hidden focus:outline-none focus:ring-2 focus:ring-purple-500">
            <Image
              src="/Premium Gift Card.png"
              alt="Premium Gift Card"
              width={400}
              height={400}
              className="w-full h-auto"
              priority
            />
          </button>

          {/* Earnings Badge - Positioned on bottom left */}
          <Card variant="default" className="absolute -left-6 -bottom-0.5 px-5 py-3 bg-red dark:bg-gray-800 shadow-lg z-20 rounded-full">
            <div className="flex items-center gap-3">
              <div className="w-10 h-10 bg-purple-100 dark:bg-purple-900 rounded-lg flex items-center justify-center">
                <span className="text-purple-600 dark:text-purple-400">💰</span>
              </div>
              <div>
                <div className="text-xs text-gray-600 dark:text-gray-400 font-medium">{stats.label}</div>
                <div className="text-xl font-bold text-gray-900 dark:text-white">{stats.value}</div>
              </div>
            </div>
          </Card>
        </div>
      </div>
    </section>
  );
};
