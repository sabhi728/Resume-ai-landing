# Resume AI Landing Page 🚀

[![Next.js](https://img.shields.io/badge/Next.js-14-black?style=for-the-badge&logo=next.js)](https://nextjs.org/)
[![Tailwind CSS](https://img.shields.io/badge/Tailwind_CSS-38B2AC?style=for-the-badge&logo=tailwind-css&logoColor=white)](https://tailwindcss.com/)
[![TypeScript](https://img.shields.io/badge/TypeScript-007ACC?style=for-the-badge&logo=typescript&logoColor=white)](https://www.typescriptlang.org/)

<div align="center">
  <img src="public/hero.png" alt="Resume AI Landing Page Preview" width="800"/>
</div>

## 📑 Table of Contents

- [Overview](#-overview)
- [Features](#-features)
- [Design Choices](#-design-choices)
- [Getting Started](#-getting-started)
- [Tech Stack](#-tech-stack)
- [Project Structure](#-project-structure)
- [Development](#-development)
- [Contributing](#-contributing)
- [License](#-license)

## 🌟 Overview

A modern, responsive landing page for an AI-powered resume optimization service. Built with Next.js 14 and Tailwind CSS, this project showcases a professional and engaging user interface for a resume optimization platform.

## ✨ Features

| Feature | Description |
|---------|-------------|
| 🎨 Modern Design | Clean, professional interface with smooth animations |
| 📱 Responsive | Fully responsive layout for all devices |
| ⚡ Performance | Optimized for speed and efficiency |
| ♿ Accessibility | WCAG compliant with proper ARIA labels |
| 🔍 SEO Ready | Built with search engine optimization in mind |

## 🎨 Design Choices

### Color Palette
```css
/* Primary Colors */
--blue-600: #2563EB;    /* Trust & Professionalism */
--purple-600: #7C3AED;  /* Innovation & Creativity */

/* Gradients */
--gradient-primary: linear-gradient(to right, #2563EB, #7C3AED);
--gradient-bg: linear-gradient(to bottom right, #FFFFFF, #F3F4F6);
```

### Typography
- **Headings**: Inter (Bold) - Modern, professional look
- **Body**: Inter (Regular) - Excellent readability
- **Navigation**: Inter (Medium) - Clear hierarchy

### Layout
- Fixed header with backdrop blur
- Full-width sections with contained content
- Responsive grid system
- Mobile-first approach

## 🚀 Getting Started

### Prerequisites
- Node.js 18.17+
- npm or yarn
- Git

### Quick Start
```bash
# Clone the repository
git clone https://github.com/sabhi728/resume-ai-landing.git

# Navigate to project directory
cd resume-ai-landing

# Install dependencies
npm install

# Start development server
npm run dev
```

Visit `http://localhost:3000` to see the result.

## 🛠️ Tech Stack

### Core Technologies
- [Next.js 14](https://nextjs.org/) - React framework
- [Tailwind CSS](https://tailwindcss.com/) - Utility-first CSS
- [TypeScript](https://www.typescriptlang.org/) - Type safety

### UI & Animation
- [Framer Motion](https://www.framer.com/motion/) - Animations
- [Heroicons](https://heroicons.com/) - Icons

### Development Tools
- [ESLint](https://eslint.org/) - Code linting
- [Prettier](https://prettier.io/) - Code formatting

## 📁 Project Structure

```
resume-ai-landing/
├── app/
│   ├── components/     # React components
│   │   ├── Hero.tsx
│   │   ├── Features.tsx
│   │   ├── HowItWorks.tsx
│   │   ├── Benefits.tsx
│   │   └── Footer.tsx
│   ├── page.tsx       # Main page
│   └── layout.tsx     # Root layout
├── public/            # Static assets
│   └── images/
├── styles/           # Global styles
│   └── globals.css
└── package.json
```

## 💻 Development

```bash
# Start development server
npm run dev

# Build for production
npm run build

# Start production server
npm run start

# Run linting
npm run lint
```


<div align="center">
  Made with ❤️ by [Your Name]
</div>

