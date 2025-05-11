'use client';

import React from 'react';
import { motion } from 'framer-motion';
import { DocumentMagnifyingGlassIcon, SparklesIcon, DocumentTextIcon, ChartBarIcon, RocketLaunchIcon, ShieldCheckIcon } from '@heroicons/react/24/outline';

const features = [
  {
    name: 'AI Resume Scanner',
    description: 'Upload your resume and get instant feedback on how well it matches any job description.',
    icon: DocumentMagnifyingGlassIcon,
    color: 'from-blue-500 to-blue-600',
  },
  {
    name: 'AI Resume Enhancer',
    description: 'Automatically improve your resume with AI-powered suggestions for better impact and clarity.',
    icon: SparklesIcon,
    color: 'from-purple-500 to-purple-600',
  },
  {
    name: 'AI Resume Builder',
    description: 'Create a professional resume from scratch with AI guidance at every step.',
    icon: DocumentTextIcon,
    color: 'from-green-500 to-green-600',
  },
  {
    name: 'ATS Optimization',
    description: 'Ensure your resume passes through Applicant Tracking Systems with our advanced optimization.',
    icon: ChartBarIcon,
    color: 'from-red-500 to-red-600',
  },
  {
    name: 'Career Insights',
    description: 'Get valuable insights about your career path and industry trends.',
    icon: RocketLaunchIcon,
    color: 'from-yellow-500 to-yellow-600',
  },
  {
    name: 'Privacy First',
    description: 'Your data is encrypted and secure. We never share your information with third parties.',
    icon: ShieldCheckIcon,
    color: 'from-indigo-500 to-indigo-600',
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

export default function Features() {
  return (
    <section className="py-24 bg-gradient-to-b from-white to-gray-50">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
            className="inline-block px-4 py-2 rounded-full bg-blue-100 text-blue-600 text-sm font-medium mb-6"
          >
            Features
          </motion.div>
          
          <motion.h2 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.2 }}
            className="text-3xl sm:text-4xl lg:text-5xl font-bold text-gray-900 mb-4"
          >
            Everything You Need to{' '}
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-600 to-purple-600">
              Land Your Dream Job
            </span>
          </motion.h2>
          
          <motion.p 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.3 }}
            className="text-xl text-gray-600 max-w-2xl mx-auto"
          >
            Powerful AI features designed to help you create the perfect resume and stand out from the competition
          </motion.p>
        </div>

        <motion.div 
          variants={container}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true }}
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8"
        >
          {features.map((feature) => (
            <motion.div
              key={feature.name}
              variants={item}
              className="group relative bg-white rounded-2xl p-8 hover:shadow-xl transition-all duration-300 border border-gray-100"
            >
              <div className={`absolute inset-0 bg-gradient-to-br ${feature.color} opacity-0 group-hover:opacity-5 rounded-2xl transition-opacity duration-300`} />
              <div className={`inline-flex p-3 rounded-xl bg-gradient-to-br ${feature.color} text-white mb-6`}>
                <feature.icon className="w-6 h-6" />
              </div>
              <h3 className="text-xl font-semibold text-gray-900 mb-4 group-hover:text-blue-600 transition-colors duration-200">
                {feature.name}
              </h3>
              <p className="text-gray-600 leading-relaxed">
                {feature.description}
              </p>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
} 