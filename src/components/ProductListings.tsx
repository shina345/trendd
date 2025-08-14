'use client';

import { motion } from 'framer-motion';
import { Check, Search } from 'lucide-react';

export default function ProductListings() {
  const listings = [
    { name: 'Ken Carson Chain', status: 'Available for $2.99', checked: true },
    { name: 'Ken Carson Chain', status: 'Available for $2.99', checked: true },
    { name: 'Ken Carson Chain', status: 'Available for $2.99', checked: false }
  ];

  return (
    <div className="w-full h-full bg-gray-900/50 rounded-2xl p-6 relative overflow-hidden border border-gray-700">
      {/* Header */}
      <div className="flex items-center justify-between mb-6">
        <h3 className="text-white font-semibold">Current listings</h3>
        <div className="flex items-center gap-2 text-gray-400 text-sm">
          <Search className="w-4 h-4" />
          <span>Search for an item</span>
        </div>
      </div>

      {/* Listings */}
      <div className="space-y-4">
        {listings.map((listing, index) => (
          <motion.div
            key={index}
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ delay: index * 0.1 }}
            className="flex items-center gap-3 group"
          >
            <motion.div
              whileHover={{ scale: 1.1 }}
              className={`w-5 h-5 rounded border-2 flex items-center justify-center ${
                listing.checked 
                  ? 'bg-green-500 border-green-500' 
                  : 'border-gray-600 hover:border-gray-400'
              }`}
            >
              {listing.checked && <Check className="w-3 h-3 text-white" />}
            </motion.div>
            
            <div className="flex-1">
              <div className="text-white text-sm font-medium">{listing.name}</div>
              <div className="flex items-center gap-2 mt-1">
                <motion.button
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                  className="px-3 py-1 bg-amber-500 hover:bg-amber-600 text-black text-xs font-medium rounded-md transition-colors"
                >
                  Available for $2.99
                </motion.button>
              </div>
            </div>
          </motion.div>
        ))}
      </div>

      {/* Animated background elements */}
      <motion.div
        animate={{ rotate: 360 }}
        transition={{ duration: 20, repeat: Infinity, ease: "linear" }}
        className="absolute -top-4 -right-4 w-8 h-8 border border-amber-500/20 rounded-full"
      />
    </div>
  );
}