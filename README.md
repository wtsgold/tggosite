# TGGo - Modern Financial Services Platform

A modern, responsive web application built with React, TypeScript, and Tailwind CSS, featuring financial services and cryptocurrency project showcases.

## 🌟 Features

- **Modern UI/UX**: Clean and professional design with gradient backgrounds and glass morphism effects
- **Responsive Design**: Fully responsive layout optimized for all device sizes
- **Multi-language Support**: English and Chinese language switching
- **Interactive Components**: Dynamic navigation, product showcases, and project details
- **Project Showcase**: Detailed information about the Granada National Resort Token (GNR)
- **Video Integration**: Custom project introduction videos
- **Performance Optimized**: Built with Vite for fast development and optimized production builds

## 🛠️ Tech Stack

- **Framework**: React 18 with TypeScript
- **Build Tool**: Vite 6
- **Styling**: Tailwind CSS
- **UI Components**: Radix UI + shadcn/ui component library
- **Icons**: Lucide React
- **Charts**: Recharts
- **Form Handling**: React Hook Form
- **Theme Management**: next-themes for dark/light mode

## 📁 Project Structure

```
src/
├── components/
│   ├── home/           # Homepage sections (Hero, Features, Products, Stats)
│   ├── pages/          # Page components (About, Contact, Partners, etc.)
│   ├── ui/             # Reusable UI components (shadcn/ui based)
│   ├── figma/          # Figma-specific components
│   ├── Navigation.tsx  # Main navigation component
│   └── Footer.tsx      # Footer component
├── assets/             # Static assets (images, videos)
├── styles/             # Global styles and CSS
└── App.tsx            # Main application component
```

## 🚀 Getting Started

### Prerequisites

- Node.js (version 18 or higher)
- npm or yarn

### Installation

1. Clone the repository:
```bash
git clone https://github.com/wtsgold/tggosite.git
cd tggosite
```

2. Install dependencies:
```bash
npm install
```

3. Start the development server:
```bash
npm run dev
```

The application will be available at `http://localhost:3000`.

### Build for Production

```bash
npm run build
```

The build output will be in the `build` directory.

## 🎯 Key Components

### Navigation
- Responsive navigation with mobile hamburger menu
- Language switcher (EN/CN)
- Smooth scroll to sections

### Home Page Sections
- **Hero**: Main landing section with call-to-action
- **Features**: Platform feature highlights
- **Products**: Service offerings showcase
- **Stats**: Key metrics and achievements

### Project Pages
- **Granada Detail Page**: Comprehensive project whitepaper with:
  - Project video integration
  - Token economics
  - Risk disclosures
  - Roadmap and partnerships
  - Multi-language support

### UI Components
Complete set of reusable components based on shadcn/ui:
- Buttons, Cards, Dialogs
- Form controls (Input, Select, Checkbox, etc.)
- Navigation menus
- Charts and data visualization
- Responsive layouts

## 🎨 Design System

- **Colors**: Blue/purple gradient themes with dark background
- **Typography**: Clean, modern font hierarchy
- **Spacing**: Consistent spacing system
- **Components**: Glass morphism effects with subtle borders
- **Animations**: Smooth transitions and hover effects

## 📱 Responsive Breakpoints

- Mobile: 320px - 768px
- Tablet: 768px - 1024px
- Desktop: 1024px+

## 🌐 Deployment

The project is configured for easy deployment on:

- **Vercel** (Recommended): Zero-config deployment
- **Netlify**: Static site hosting
- **GitHub Pages**: Free hosting for open source

### Deploy to Vercel

1. Connect your GitHub repository to Vercel
2. Configure build settings:
   - Build Command: `npm run build`
   - Output Directory: `build`
   - Install Command: `npm install`
3. Deploy with custom domain support

## 🔧 Configuration

### Vite Configuration
The project uses Vite with:
- React SWC for fast compilation
- Path aliases for cleaner imports
- Asset optimization
- Development server with hot reload

### Tailwind CSS
Customized with:
- Extended color palette
- Custom component classes
- Responsive utilities
- Dark mode support

## 📄 License

This project is licensed under the MIT License.

## 🤝 Contributing

1. Fork the repository
2. Create your feature branch (`git checkout -b feature/amazing-feature`)
3. Commit your changes (`git commit -m 'Add some amazing feature'`)
4. Push to the branch (`git push origin feature/amazing-feature`)
5. Open a Pull Request

## 📞 Contact

For questions or support, please contact the development team.

---

Built with ❤️ using modern web technologies.