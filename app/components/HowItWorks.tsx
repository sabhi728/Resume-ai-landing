'use client';

import React from 'react';
import { motion } from 'framer-motion';
import { ArrowRightIcon, ArrowDownTrayIcon, DocumentArrowUpIcon, SparklesIcon, AdjustmentsHorizontalIcon } from '@heroicons/react/24/outline';

const steps = [
  {
    number: '01',
    title: 'Upload Your Resume',
    description: 'Start by uploading your existing resume or create a new one from scratch.',
    icon: DocumentArrowUpIcon,
    iconColor: 'from-blue-500 to-blue-700',
  },
  {
    number: '02',
    title: 'AI Analysis',
    description: 'Our AI analyzes your resume and the job description to identify areas for improvement.',
    icon: AdjustmentsHorizontalIcon,
    iconColor: 'from-purple-500 to-purple-700',
  },
  {
    number: '03',
    title: 'Get Suggestions',
    description: 'Receive personalized suggestions to enhance your resume for better job matching.',
    icon: SparklesIcon,
    iconColor: 'from-yellow-500 to-yellow-600',
  },
  {
    number: '04',
    title: 'Download & Apply',
    description: 'Download your optimized resume and start applying with confidence.',
    icon: ArrowDownTrayIcon,
    iconColor: 'from-green-500 to-green-700',
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

export default function HowItWorks() {
  return (
    <section className="py-24 bg-gradient-to-b from-gray-50 to-white relative overflow-hidden">
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
            Simple Process
          </motion.div>

          <motion.h2 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.2 }}
            className="text-3xl sm:text-4xl lg:text-5xl font-bold text-gray-900 mb-4"
          >
            How It{' '}
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-600 to-purple-600">
              Works
            </span>
          </motion.h2>
          
          <motion.p 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.3 }}
            className="text-xl text-gray-600 max-w-2xl mx-auto"
          >
            Get your optimized resume in just a few simple steps
          </motion.p>
        </div>

        <motion.div 
          variants={container}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true }}
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8"
        >
          {steps.map((step, index) => (
            <motion.div
              key={step.number}
              variants={item}
              className="relative group flex flex-col h-full"
            >
              <div className="bg-white rounded-2xl p-8 shadow-sm hover:shadow-xl transition-all duration-300 border border-gray-100 flex flex-col items-center h-full">
                <div className={`flex items-center justify-center w-20 h-20 mb-6 rounded-xl bg-gradient-to-br ${step.iconColor} text-white`}>
                  <step.icon className="w-10 h-10" />
                </div>
                <div className="flex items-center gap-4 mb-4">
                  <div className="flex items-center justify-center w-10 h-10 rounded-full bg-gradient-to-br from-blue-600 to-purple-600 text-white font-bold text-lg">
                    {step.number}
                  </div>
                  <h3 className="text-xl font-semibold text-gray-900 group-hover:text-blue-600 transition-colors duration-200">
                    {step.title}
                  </h3>
                </div>
                <p className="text-gray-600 leading-relaxed text-center">
                  {step.description}
                </p>
              </div>
              {index < steps.length - 1 && (
                <div className="hidden lg:block absolute top-1/2 -right-4 transform -translate-y-1/2">
                  <div className="w-8 h-8 rounded-full bg-gradient-to-br from-blue-600 to-purple-600 flex items-center justify-center">
                    <ArrowRightIcon className="w-5 h-5 text-white" />
                  </div>
                </div>
              )}
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
} 