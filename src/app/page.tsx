'use client';

import { motion } from 'framer-motion';
import FeatureCard from '@/components/FeatureCard';
import ProductListings from '@/components/ProductListings';
import ProductCatalog from '@/components/ProductCatalog';
import ProductDetails from '@/components/ProductDetails';
import ReverseSearch from '@/components/ReverseSearch';

export default function Home() {
  const features = [
    {
      title: "Growing",
      subtitle: "catalogue",
      description: "Lorem ipsum dolor sit amet. Aliquet urna arcu orci ac.",
      icon: <ProductListings />,
      delay: 0
    },
    {
      title: "Beginner",
      subtitle: "friendly",
      description: "The site does feature a simple design with a vast catalogue",
      icon: <ProductCatalog />,
      delay: 0.2
    },
    {
      title: "Verified",
      subtitle: "Quality",
      description: "Lorem ipsum dolor sit amet. Aliquet urna arcu orci ac.",
      icon: <ProductDetails />,
      delay: 0.4
    },
    {
      title: "Reverse",
      subtitle: "image search",
      description: "Lorem ipsum dolor sit amet. Aliquet urna arcu orci ac.",
      icon: <ReverseSearch />,
      delay: 0.6
    }
  ];

  return (
    <main className="min-h-screen bg-black text-white overflow-hidden">
      {/* Background Pattern */}
      <div className="absolute inset-0 opacity-10">
        <div className="absolute inset-0" style={{
          backgroundImage: `radial-gradient(circle at 25% 25%, #f59e0b 0%, transparent 50%),
                           radial-gradient(circle at 75% 75%, #d97706 0%, transparent 50%)`
        }} />
      </div>

      {/* Animated Grid Background */}
      <div className="absolute inset-0 opacity-5">
        {[...Array(20)].map((_, i) => (
          <motion.div
            key={i}
            animate={{
              opacity: [0.1, 0.3, 0.1],
              scale: [1, 1.1, 1]
            }}
            transition={{
              duration: 3 + (i % 3),
              repeat: Infinity,
              delay: i * 0.2,
              ease: "easeInOut"
            }}
            className="absolute w-px h-full bg-gradient-to-b from-transparent via-amber-500 to-transparent"
            style={{ left: `${(i * 5) % 100}%` }}
          />
        ))}
      </div>

      <div className="relative z-10 container mx-auto px-6 py-16">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: -50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="text-center mb-20"
        >
          <motion.h1
            className="text-5xl md:text-7xl font-bold mb-4 tracking-tight"
            initial={{ scale: 0.5, opacity: 0 }}
            animate={{ scale: 1, opacity: 1 }}
            transition={{ duration: 0.8, delay: 0.2 }}
          >
            <motion.span
              animate={{ 
                textShadow: [
                  "0 0 20px rgba(245, 158, 11, 0.5)",
                  "0 0 40px rgba(245, 158, 11, 0.8)",
                  "0 0 20px rgba(245, 158, 11, 0.5)"
                ]
              }}
              transition={{ duration: 2, repeat: Infinity }}
              className="text-white"
            >
              TRENDING PRODUCTS
            </motion.span>
          </motion.h1>
          
          <motion.h2
            className="text-3xl md:text-5xl font-bold"
            initial={{ opacity: 0, x: -100 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, delay: 0.4 }}
          >
            <span className="text-white">HANDPICKED </span>
            <motion.span
              animate={{ 
                backgroundPosition: ["0% 50%", "100% 50%", "0% 50%"]
              }}
              transition={{ duration: 3, repeat: Infinity }}
              className="gradient-text bg-gradient-to-r from-amber-400 via-amber-500 to-amber-600 bg-[length:200%_100%]"
              style={{
                backgroundClip: 'text',
                WebkitBackgroundClip: 'text',
                WebkitTextFillColor: 'transparent'
              }}
            >
              FOR YOU:
            </motion.span>
          </motion.h2>
        </motion.div>

        {/* Features Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 lg:gap-8">
          {features.map((feature, index) => (
            <FeatureCard
              key={index}
              title={feature.title}
              subtitle={feature.subtitle}
              description={feature.description}
              icon={feature.icon}
              delay={feature.delay}
            />
          ))}
        </div>

        {/* Bottom Decoration */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 1.5, duration: 1 }}
          className="flex justify-center mt-20"
        >
          <motion.div
            animate={{ 
              width: ["0%", "100%", "0%"]
            }}
            transition={{ 
              duration: 4,
              repeat: Infinity,
              ease: "easeInOut"
            }}
            className="h-px bg-gradient-to-r from-transparent via-amber-500 to-transparent max-w-md"
          />
        </motion.div>
      </div>

      {/* Floating Elements */}
      {[...Array(8)].map((_, i) => (
        <motion.div
          key={i}
          animate={{
            y: [-20, 20, -20],
            x: [-10, 10, -10],
            opacity: [0.1, 0.3, 0.1]
          }}
          transition={{
            duration: 4 + (i % 3),
            repeat: Infinity,
            delay: i * 0.5,
            ease: "easeInOut"
          }}
          className="absolute w-2 h-2 bg-amber-400 rounded-full"
          style={{
            top: `${20 + (i * 10) % 60}%`,
            left: `${10 + (i * 15) % 80}%`
          }}
        />
      ))}
    </main>
  );
}