// Fix: Added React import to provide access to the React namespace for type definitions
import React from 'react';

export interface BentoItem {
  id: string;
  title: string;
  description: string;
  category?: string;
  size: 'small' | 'medium' | 'large' | 'wide';
  image?: string;
  // Fix: icon property depends on React namespace
  icon?: React.ReactNode;
}

export interface Tool {
  name: string;
  // Fix: icon property depends on React namespace
  icon: React.ReactNode;
  color: string;
}

export interface Stat {
  label: string;
  value: string;
  suffix?: string;
}