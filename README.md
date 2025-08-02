# Portfolio Website

A modern, responsive portfolio website built with Angular 20, showcasing projects, certificates, and professional experience. Features a sleek retrowave/neon design theme with smooth animations and internationalization support.

## Features

- **Modern Angular 20** - Built with the latest Angular framework and signals
- **Responsive Design** - Optimized for different devices and screen sizes
- **Internationalization** - Multi-language support (English, Croatian, Ukrainian)
- **Project Showcase** - Interactive project cards with detailed views
- **Certificate Display** - PDF certificate carousel with navigation
- **CV Integration** - Embedded PDF CV viewer
- **Smooth Animations** - Fade-in effects and interactive elements
- **Performance Optimized** - Signal-based reactivity and optimized builds
- **Modern Styling** - SCSS with CSS variables and utility classes

## Tech Stack

- **Framework**: Angular 20
- **Styling**: SCSS with CSS Variables
- **State Management**: Angular Signals
- **Internationalization**: ngx-translate
- **Build Tool**: Angular CLI
- **Package Manager**: npm

## Prerequisites

Before running this project, make sure you have the following installed:

- **Node.js** (version 22 or higher)
- **npm** (comes with Node.js)

## Getting Started

### 1. Clone the Repository

```bash
git clone ...
cd portfolio
```

### 2. Install Dependencies

Since I commit `package-lock.json` to the repository, I recommend using `npm ci` for faster and more reliable dependency installation:

```bash
npm ci
```

### 3. Start Development Server

```bash
npm start
```

The application will be available at `http://localhost:4200/`. The page will automatically reload when you make changes to the source files.

## Build Commands

### Development Build
```bash
npm run build:dev
```

### Production Build
```bash
npm run build:prod
```

### Optimized Production Build
```bash
npm run build:optimized
```

### Watch Mode (Development)
```bash
npm run watch
```

## Serving Different Configurations

### Development Server
```bash
npm start
```

### Production Server
```bash
npm run serve:prod
```

### Optimized Server
```bash
npm run serve:optimized
```

## Project Structure

```
src/
├── app/
│   ├── core/                # Core components (header, footer)
│   ├── pages/               # Page components
│   ├── sections/            # Main content sections
│   ├── shared/              # Shared components and utilities
│   ├── services/            # Application services
│   ├── models/              # TypeScript interfaces
│   └── enums/               # Application enums
├── styles/                  # Global styles and utilities
└── environments/            # Environment configurations
```

## Styling Architecture

The project uses a modern SCSS architecture with:

- **CSS Variables** - Centralized color palette and design tokens
- **Utility Classes** - Reusable styling utilities
- **Component-Specific Styles** - Scoped component styling
- **Modern `@use` Syntax** - Latest Sass module system

## Internationalization

The application supports multiple languages:
- **English** (en) - Default language
- **Croatian** (hr) - Hrvatski
- **Ukrainian** (ua) - Українська

Translation files are located in `public/i18n/`.

## Build Optimizations

The project includes an optimized build configuration with:

- **Enhanced Optimization** - Script, style, and font optimization
- **Stricter Budgets** - Bundle size monitoring
- **Environment Switching** - Automatic environment file replacement
- **Bundle Analysis** - Built-in bundle size analysis

### Analyze Bundle Size
```bash
npm run analyze
```

## Development Workflow

1. **Feature Development**: Use `npm start` for local development
2. **Testing Builds**: Use `npm run build:dev` for development builds
3. **Production Testing**: Use `npm run serve:prod` to test production build locally
4. **Optimized Deployment**: Use `npm run build:optimized` for final deployment

## Adding Content

### Projects
Add new projects by updating the JSON files in `public/projects/` for each language.

### Certificates
Place certificate PDFs in `public/certificates/` and update `public/certificates/certificates.json`.

### CV
Update `public/cv/cv.pdf` and `public/cv/cv.json` for CV information.
