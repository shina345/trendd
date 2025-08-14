'use client';

import { motion } from 'framer-motion';
import { Search } from 'lucide-react';

export default function ProductCatalog() {
  return (
    <div className="w-full h-full bg-gray-900/50 rounded-2xl p-6 relative overflow-hidden border border-gray-700">
      {/* Search Bar */}
      <div className="flex items-center gap-3 mb-6 bg-gray-800/50 rounded-lg px-4 py-3">
        <Search className="w-4 h-4 text-gray-400" />
        <input 
          type="text" 
          placeholder="Yeezy slides"
          className="bg-transparent text-white placeholder-gray-400 outline-none flex-1 text-sm"
        />
      </div>

      {/* Product Grid */}
      <div className="grid grid-cols-2 gap-4">
        {[1, 2].map((item, index) => (
          <motion.div
            key={item}
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ delay: index * 0.1 }}
            whileHover={{ scale: 1.05 }}
            className="bg-gray-800/50 rounded-lg p-4 group cursor-pointer border border-gray-600"
          >
            {/* Product Image Placeholder */}
            <div className="w-full h-16 bg-gradient-to-br from-gray-700 to-gray-800 rounded-lg mb-3 flex items-center justify-center relative overflow-hidden">
              <motion.div
                animate={{ 
                  rotateY: [0, 15, -15, 0],
                  scale: [1, 1.1, 1]
                }}
                transition={{ 
                  duration: 2,
                  repeat: Infinity,
                  ease: "easeInOut"
                }}
                className="w-8 h-6 bg-gradient-to-r from-pink-400 to-purple-400 rounded transform"
              />
              
              {/* Shine effect */}
              <motion.div
                animate={{ x: [-100, 100] }}
                transition={{ 
                  duration: 2,
                  repeat: Infinity,
                  ease: "easeInOut",
                  delay: 1
                }}
                className="absolute inset-0 bg-gradient-to-r from-transparent via-white/10 to-transparent skew-x-12"
              />
            </div>

            <div className="text-center">
              <h4 className="text-white text-sm font-medium mb-1">Yeezy Slides</h4>
              <p className="text-gray-400 text-xs mb-2">Premium Quality</p>
              <motion.button
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className="w-full py-2 bg-amber-500 hover:bg-amber-600 text-black text-xs font-medium rounded transition-colors"
              >
                View Details
              </motion.button>
            </div>
          </motion.div>
        ))}
      </div>

      {/* Counter */}
      <div className="absolute top-4 right-4">
        <motion.div
          animate={{ scale: [1, 1.1, 1] }}
          transition={{ duration: 2, repeat: Infinity }}
          className="bg-amber-500 text-black px-2 py-1 rounded text-xs font-bold"
        >
          +5,000+
        </motion.div>
      </div>

      {/* Floating elements */}
      <motion.div
        animate={{ y: [-5, 5, -5] }}
        transition={{ duration: 3, repeat: Infinity, ease: "easeInOut" }}
        className="absolute bottom-4 right-4 w-2 h-2 bg-amber-400 rounded-full opacity-60"
      />
    </div>
  );
}