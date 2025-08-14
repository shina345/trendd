'use client';

import { motion } from 'framer-motion';
import { ReactNode } from 'react';

interface FeatureCardProps {
  title: string;
  subtitle: string;
  description: string;
  icon: ReactNode;
  delay?: number;
}

export default function FeatureCard({ title, subtitle, description, icon, delay = 0 }: FeatureCardProps) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 50 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.6, delay }}
      className="flex flex-col items-center text-center group"
    >
      <motion.div
        whileHover={{ scale: 1.02, y: -5 }}
        transition={{ duration: 0.3 }}
        className="mb-8 relative"
      >
        <div className="w-80 h-64 glass rounded-2xl p-6 flex items-center justify-center relative overflow-hidden animated-border">
          <motion.div
            whileHover={{ scale: 1.05 }}
            transition={{ duration: 0.3 }}
            className="relative z-10 w-full h-full"
          >
            {icon}
          </motion.div>
          
          {/* Floating particles */}
          <motion.div
            animate={{
              y: [-10, 10, -10],
              opacity: [0.3, 0.7, 0.3]
            }}
            transition={{
              duration: 3,
              repeat: Infinity,
              ease: "easeInOut"
            }}
            className="absolute top-4 right-4 w-2 h-2 bg-amber-400 rounded-full"
          />
          <motion.div
            animate={{
              y: [10, -10, 10],
              opacity: [0.5, 0.9, 0.5]
            }}
            transition={{
              duration: 2.5,
              repeat: Infinity,
              ease: "easeInOut",
              delay: 1
            }}
            className="absolute bottom-6 left-6 w-1.5 h-1.5 bg-amber-300 rounded-full"
          />
          <motion.div
            animate={{
              x: [-5, 5, -5],
              opacity: [0.4, 0.8, 0.4]
            }}
            transition={{
              duration: 2,
              repeat: Infinity,
              ease: "easeInOut",
              delay: 0.5
            }}
            className="absolute top-1/2 left-4 w-1 h-1 bg-amber-500 rounded-full"
          />
        </div>
      </motion.div>

      <motion.h3
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: delay + 0.2 }}
        className="text-2xl font-bold text-white mb-2"
      >
        {title} <span className="gradient-text">{subtitle}</span>
      </motion.h3>
      
      <motion.p
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: delay + 0.4 }}
        className="text-gray-400 max-w-xs leading-relaxed"
      >
        {description}
      </motion.p>
    </motion.div>
  );
}