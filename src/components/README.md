# Components Directory

This directory contains all the React components for the WeSphere website.

## Component Structure

### Layout Components
- **Header.js** - Main navigation header with mobile menu
- **Footer.js** - Footer with links, contact info, and social media

### Page Sections
- **Hero.js** - Hero section with app showcase and main CTA
- **Features.js** - Features section highlighting app capabilities
- **About.js** - About/company section with team and values
- **Contact.js** - Contact form and testimonials section

## Component Guidelines

### Props
- All components accept standard React props
- Use TypeScript-style prop documentation in comments
- Prefer composition over configuration

### Styling
- Use Tailwind CSS classes for styling
- Follow the design system defined in `tailwind.config.js`
- Use custom CSS classes from `src/index.css` when needed

### Animations
- Use Framer Motion for animations
- Follow the animation patterns established in existing components
- Use `whileInView` for scroll-triggered animations

### Responsive Design
- Mobile-first approach
- Use Tailwind responsive prefixes (sm:, md:, lg:, xl:)
- Test on multiple screen sizes

## Future Lightwind UI Integration

When integrating with Lightwind UI:

1. **Replace Custom Components**: Replace custom components with Lightwind UI equivalents
2. **Update Imports**: Change import statements to use Lightwind UI components
3. **Maintain Functionality**: Ensure all existing functionality is preserved
4. **Update Styling**: Adjust styling to match Lightwind UI design system
5. **Test Responsiveness**: Verify responsive behavior is maintained

### Component Mapping
- Header → Lightwind UI Navigation
- Hero → Lightwind UI Hero
- Features → Lightwind UI Cards/Grid
- About → Lightwind UI Content sections
- Contact → Lightwind UI Form components
- Footer → Lightwind UI Footer

## Adding New Components

1. Create a new `.js` file in this directory
2. Follow the existing component patterns
3. Export as default
4. Import and use in `App.js`
5. Update this README with component documentation
