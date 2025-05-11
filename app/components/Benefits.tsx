'use client';

import React from 'react';
import { motion } from 'framer-motion';
import { ClockIcon, SparklesIcon, ChartBarIcon, UserGroupIcon } from '@heroicons/react/24/outline';

const benefits = [
  {
    title: 'Save Hours Per Application',
    description: 'No more manual resume tweaking. Get an optimized resume in minutes, not hours.',
    icon: ClockIcon,
    stat: '85%',
    statLabel: 'Time Saved',
    color: 'from-blue-500 to-blue-600',
  },
  {
    title: 'AI-Powered Suggestions',
    description: 'Receive intelligent recommendations to make your resume stand out to employers.',
    icon: SparklesIcon,
    stat: '200+',
    statLabel: 'AI Suggestions',
    color: 'from-purple-500 to-purple-600',
  },
  {
    title: 'Higher Response Rate',
    description: 'Increase your chances of getting interviews with resumes that match job requirements.',
    icon: ChartBarIcon,
    stat: '3x',
    statLabel: 'More Interviews',
    color: 'from-green-500 to-green-600',
  },
  {
    title: 'Used by 10,000+ Job Seekers',
    description: 'Join thousands of successful job seekers who have landed their dream jobs.',
    icon: UserGroupIcon,
    stat: '10k+',
    statLabel: 'Happy Users',
    color: 'from-red-500 to-red-600',
  },
];

const container = {
  hidden: { opacity: 0 },
  show: {
    opacity: 1,
    transition: {
      staggerChildren: 0.2
    }
  }
};

const item = {
  hidden: { opacity: 0, y: 20 },
  show: { opacity: 1, y: 0 }
};

export default function Benefits() {
  return (
    <section className="py-24 bg-gradient-to-b from-white to-gray-50 relative overflow-hidden">
      {/* Background decorative elements */}
      <div className="absolute inset-0 overflow-hidden">
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 0.1 }}
          viewport={{ once: true }}
          transition={{ duration: 1 }}
          className="absolute -top-40 -right-40 w-80 h-80 bg-blue-500 rounded-full blur-3xl"
        />
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 0.1 }}
          viewport={{ once: true }}
          transition={{ duration: 1, delay: 0.2 }}
          className="absolute -bottom-40 -left-40 w-80 h-80 bg-purple-500 rounded-full blur-3xl"
        />
      </div>

      <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="text-center mb-16">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
            className="inline-block px-4 py-2 rounded-full bg-blue-100 text-blue-600 text-sm font-medium mb-6"
          >
            Benefits
          </motion.div>

          <motion.h2 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.2 }}
            className="text-3xl sm:text-4xl lg:text-5xl font-bold text-gray-900 mb-4"
          >
            Why Choose Our{' '}
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-600 to-purple-600">
              AI Resume Tool?
            </span>
          </motion.h2>
          
          <motion.p 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.3 }}
            className="text-xl text-gray-600 max-w-2xl mx-auto"
          >
            Experience the power of AI-driven resume optimization
          </motion.p>
        </div>

        <motion.div 
          variants={container}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true }}
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8"
        >
          {benefits.map((benefit) => (
            <motion.div
              key={benefit.title}
              variants={item}
              className="group relative bg-white rounded-2xl p-8 hover:shadow-xl transition-all duration-300 border border-gray-100"
            >
              <div className={`absolute inset-0 bg-gradient-to-br ${benefit.color} opacity-0 group-hover:opacity-5 rounded-2xl transition-opacity duration-300`} />
              
              <div className="flex items-center gap-4 mb-6">
                <div className={`p-3 rounded-xl bg-gradient-to-br ${benefit.color} text-white`}>
                  <benefit.icon className="w-6 h-6" />
                </div>
                <h3 className="text-xl font-semibold text-gray-900 group-hover:text-blue-600 transition-colors duration-200">
                  {benefit.title}
                </h3>
              </div>

              <p className="text-gray-600 leading-relaxed mb-6">
                {benefit.description}
              </p>

              <div className="flex items-baseline gap-2">
                <span className={`text-3xl font-bold bg-gradient-to-br ${benefit.color} text-transparent bg-clip-text`}>
                  {benefit.stat}
                </span>
                <span className="text-sm text-gray-500">
                  {benefit.statLabel}
                </span>
              </div>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
} 