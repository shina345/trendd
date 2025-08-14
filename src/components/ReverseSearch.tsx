'use client';

import { motion } from 'framer-motion';
import { Search, Camera } from 'lucide-react';

export default function ReverseSearch() {
  return (
    <div className="w-full h-full bg-gray-900/50 rounded-2xl p-6 relative overflow-hidden border border-gray-700">
      {/* Search Interface */}
      <div className="flex items-center justify-center h-full">
        <motion.div
          whileHover={{ scale: 1.05 }}
          className="relative"
        >
          {/* Magnifying Glass */}
          <motion.div
            animate={{ 
              rotate: [0, 10, -10, 0],
              scale: [1, 1.1, 1]
            }}
            transition={{ 
              duration: 3,
              repeat: Infinity,
              ease: "easeInOut"
            }}
            className="w-24 h-24 border-4 border-gray-400 rounded-full flex items-center justify-center relative"
          >
            <Search className="w-8 h-8 text-gray-300" />
            
            {/* Handle */}
            <motion.div
              animate={{ rotate: [0, 15, -15, 0] }}
              transition={{ 
                duration: 2,
                repeat: Infinity,
                ease: "easeInOut",
                delay: 0.5
              }}
              className="absolute -bottom-2 -right-2 w-8 h-2 bg-gray-400 rounded-full transform rotate-45 origin-left"
            />
          </motion.div>

          {/* Profile Image in Magnifier */}
          <motion.div
            animate={{ 
              scale: [1, 1.2, 1],
              rotate: [0, 5, -5, 0]
            }}
            transition={{ 
              duration: 2.5,
              repeat: Infinity,
              ease: "easeInOut"
            }}
            className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-12 h-12 bg-gradient-to-br from-pink-400 to-purple-500 rounded-full flex items-center justify-center"
          >
            <div className="w-8 h-8 bg-gradient-to-br from-gray-700 to-gray-900 rounded-full flex items-center justify-center">
              <Camera className="w-4 h-4 text-white" />
            </div>
          </motion.div>

          {/* User Label */}
          <motion.div
            animate={{ y: [0, -5, 0] }}
            transition={{ 
              duration: 2,
              repeat: Infinity,
              ease: "easeInOut",
              delay: 1
            }}
            className="absolute -bottom-8 left-1/2 transform -translate-x-1/2 bg-amber-500 text-black px-3 py-1 rounded-full text-xs font-medium whitespace-nowrap"
          >
            Yeezy Slides
          </motion.div>
        </motion.div>
      </div>

      {/* Search Rays */}
      {[...Array(6)].map((_, i) => (
        <motion.div
          key={i}
          animate={{
            opacity: [0, 1, 0],
            scale: [0.5, 1, 0.5]
          }}
          transition={{
            duration: 2,
            repeat: Infinity,
            delay: i * 0.3,
            ease: "easeInOut"
          }}
          className="absolute w-1 h-8 bg-gradient-to-t from-amber-400/50 to-transparent"
          style={{
            top: '50%',
            left: '50%',
            transformOrigin: 'bottom center',
            transform: `translate(-50%, -100%) rotate(${i * 60}deg)`
          }}
        />
      ))}

      {/* Corner Elements */}
      <motion.div
        animate={{ rotate: 360 }}
        transition={{ duration: 15, repeat: Infinity, ease: "linear" }}
        className="absolute top-4 right-4 w-6 h-6 border border-amber-400/30 rounded-full"
      />
      
      <motion.div
        animate={{ 
          x: [-5, 5, -5],
          opacity: [0.3, 0.7, 0.3]
        }}
        transition={{ 
          duration: 3,
          repeat: Infinity,
          ease: "easeInOut"
        }}
        className="absolute bottom-4 left-4 w-2 h-2 bg-amber-400 rounded-full"
      />
    </div>
  );
}