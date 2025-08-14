'use client';

import { motion } from 'framer-motion';
import { Star, Award } from 'lucide-react';

export default function ProductDetails() {
  return (
    <div className="w-full h-full bg-gray-900/50 rounded-2xl p-6 relative overflow-hidden border border-gray-700">
      {/* Product Header */}
      <div className="flex items-start justify-between mb-4">
        <div>
          <h3 className="text-white font-semibold text-lg">Ken Carson X Chain</h3>
          <p className="text-gray-400 text-sm">Premium Quality Chain Collection</p>
        </div>
        
        {/* Quality Badge */}
        <motion.div
          animate={{ rotate: [0, 5, -5, 0] }}
          transition={{ duration: 3, repeat: Infinity }}
          className="relative"
        >
          <div className="w-12 h-12 bg-gradient-to-br from-amber-400 to-amber-600 rounded-lg flex items-center justify-center">
            <Award className="w-6 h-6 text-black" />
          </div>
          
          {/* Sparkle effects */}
          <motion.div
            animate={{ 
              scale: [0, 1, 0],
              rotate: [0, 180, 360]
            }}
            transition={{ 
              duration: 2,
              repeat: Infinity,
              delay: 0.5
            }}
            className="absolute -top-1 -right-1 w-3 h-3"
          >
            <Star className="w-3 h-3 text-amber-300 fill-current" />
          </motion.div>
        </motion.div>
      </div>

      {/* Chain Visualization */}
      <div className="flex items-center justify-center mb-6">
        <motion.div
          animate={{ 
            rotateY: [0, 360],
            scale: [1, 1.1, 1]
          }}
          transition={{ 
            duration: 4,
            repeat: Infinity,
            ease: "easeInOut"
          }}
          className="relative"
        >
          {/* Chain links */}
          <div className="flex items-center gap-1">
            {[...Array(5)].map((_, i) => (
              <motion.div
                key={i}
                animate={{ 
                  y: [0, -2, 0],
                  opacity: [0.7, 1, 0.7]
                }}
                transition={{ 
                  duration: 1.5,
                  repeat: Infinity,
                  delay: i * 0.1
                }}
                className="w-4 h-6 border-2 border-gray-300 rounded-full"
              />
            ))}
          </div>
          
          {/* Center pendant */}
          <motion.div
            animate={{ 
              rotate: [0, 10, -10, 0],
              scale: [1, 1.2, 1]
            }}
            transition={{ 
              duration: 2,
              repeat: Infinity,
              ease: "easeInOut"
            }}
            className="absolute -bottom-8 left-1/2 transform -translate-x-1/2 w-8 h-8 bg-gradient-to-br from-gray-300 to-gray-500 rounded-lg flex items-center justify-center"
          >
            <div className="w-4 h-4 bg-gradient-to-br from-amber-400 to-amber-600 rounded" />
          </motion.div>
        </motion.div>
      </div>

      {/* Product Info */}
      <div className="space-y-2 mt-8">
        <div className="flex justify-between text-sm">
          <span className="text-gray-400">Product Quality</span>
          <span className="text-white">Premium</span>
        </div>
        <div className="flex justify-between text-sm">
          <span className="text-gray-400">Available Colors</span>
          <span className="text-white">Gold, Silver</span>
        </div>
        <div className="flex justify-between text-sm">
          <span className="text-gray-400">Premium Quality Rating</span>
          <div className="flex items-center gap-1">
            {[...Array(5)].map((_, i) => (
              <motion.div
                key={i}
                animate={{ scale: [1, 1.2, 1] }}
                transition={{ 
                  duration: 0.5,
                  delay: i * 0.1,
                  repeat: Infinity,
                  repeatDelay: 2
                }}
              >
                <Star className="w-3 h-3 text-amber-400 fill-current" />
              </motion.div>
            ))}
          </div>
        </div>
      </div>

      {/* Floating particles */}
      <motion.div
        animate={{
          x: [-10, 10, -10],
          y: [-5, 5, -5],
          opacity: [0.3, 0.8, 0.3]
        }}
        transition={{
          duration: 4,
          repeat: Infinity,
          ease: "easeInOut"
        }}
        className="absolute top-8 right-8 w-1 h-1 bg-amber-400 rounded-full"
      />
    </div>
  );
}