# WeSphere - Professional App Showcase Website

A modern, responsive website built with React and Tailwind CSS for showcasing and launching the WeSphere application.

## 🚀 Features

- **Modern Design**: Clean, professional design with smooth animations
- **Responsive Layout**: Fully responsive across all devices
- **Interactive Components**: Engaging user interactions with Framer Motion
- **Professional Sections**:
  - Hero section with app showcase
  - Features section highlighting capabilities
  - About section with company story
  - Contact section with form and testimonials
  - Professional header and footer

## 🛠️ Tech Stack

- **React 18** - Modern React with hooks
- **Tailwind CSS** - Utility-first CSS framework
- **Framer Motion** - Smooth animations and transitions
- **Lucide React** - Beautiful icons
- **PostCSS** - CSS processing
- **Autoprefixer** - CSS vendor prefixing

## 📦 Installation

1. Clone the repository:
```bash
git clone <repository-url>
cd wesphere-website
```

2. Install dependencies:
```bash
npm install
```

3. Start the development server:
```bash
npm start
```

4. Open [http://localhost:3000](http://localhost:3000) to view it in the browser.

## 🎨 Customization

### Colors
The website uses a custom color palette defined in `tailwind.config.js`:
- Primary colors: Blue gradient (primary-50 to primary-900)
- Secondary colors: Gray gradient (secondary-50 to secondary-900)

### Components
All components are modular and can be easily customized:
- `src/components/Header.js` - Navigation header
- `src/components/Hero.js` - Hero section with app showcase
- `src/components/Features.js` - Features section
- `src/components/About.js` - About/company section
- `src/components/Contact.js` - Contact form and information
- `src/components/Footer.js` - Footer with links and information

### Styling
- Global styles are in `src/index.css`
- Component-specific styles use Tailwind classes
- Custom animations are defined in the Tailwind config

## 🔧 Future Integration with Lightwind UI

This project is prepared for future integration with Lightwind UI:

### Current Setup
- Tailwind CSS is already configured
- Component structure is modular and ready for UI library integration
- Custom CSS classes are defined for easy replacement

### Integration Steps (When Ready)
1. Install Lightwind UI:
```bash
npm install @lightwind/ui
```

2. Update component imports to use Lightwind UI components
3. Replace custom components with Lightwind UI equivalents
4. Update styling to match Lightwind UI design system

### Component Mapping
- Header → Lightwind UI Navigation component
- Hero → Lightwind UI Hero component
- Features → Lightwind UI Cards/Grid components
- About → Lightwind UI Content sections
- Contact → Lightwind UI Form components
- Footer → Lightwind UI Footer component

## 📱 Responsive Design

The website is fully responsive with breakpoints:
- Mobile: < 768px
- Tablet: 768px - 1024px
- Desktop: > 1024px

## 🎭 Animations

Smooth animations powered by Framer Motion:
- Fade-in animations on scroll
- Hover effects on interactive elements
- Smooth transitions between states
- Loading animations

## 🚀 Deployment

### Build for Production
```bash
npm run build
```

### Deploy to Netlify
1. Build the project
2. Deploy the `build` folder to Netlify

### Deploy to Vercel
1. Connect your repository to Vercel
2. Vercel will automatically build and deploy

## 📄 License

This project is licensed under the MIT License.

## 🤝 Contributing

1. Fork the repository
2. Create a feature branch
3. Make your changes
4. Submit a pull request

## 📞 Support

For support or questions, please contact:
- Email: hello@wesphere.com
- Phone: +1 (555) 123-4567

---

Built with ❤️ for WeSphere
