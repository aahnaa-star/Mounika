# Student Portfolio Website

A modern, premium-quality portfolio website built specifically for students actively applying for internships and their first job. Features a stunning dark theme, smooth animations, and a professional layout that helps you stand out.

![Portfolio Preview](https://via.placeholder.com/800x400/0f0f0f/6366f1?text=Portfolio+Preview)

## ✨ Features

### Design
- **Dark Theme**: Premium dark aesthetic with gradient accents
- **Glassmorphism**: Modern frosted glass effects throughout
- **Smooth Animations**: Powered by Framer Motion
- **Fully Responsive**: Mobile-first design, optimized for all devices
- **Scroll Progress**: Visual progress indicator at the top

### Sections
1. **Hero Section** - Animated introduction with CTA buttons
2. **About Section** - Skills with animated progress bars
3. **Projects Section** - 4 project showcases with hover effects
4. **Experience Section** - Timeline layout with achievements
5. **Activity Graph** - GitHub-style contribution visualization
6. **Contact Section** - Functional form with validation

### Extras
- Loading animation with brand identity
- Smooth scroll navigation
- Micro-interactions on buttons and cards
- Floating background elements
- Professional typography

## 🚀 Tech Stack

- **Framework**: React 18 (Vite)
- **Styling**: Tailwind CSS
- **Animations**: Framer Motion
- **Icons**: Lucide React
- **Build Tool**: Vite

## 📦 Installation

1. **Clone the repository**
   ```bash
   git clone https://github.com/yourusername/portfolio.git
   cd portfolio
   ```

2. **Install dependencies**
   ```bash
   npm install
   ```

3. **Start development server**
   ```bash
   npm run dev
   ```

4. **Build for production**
   ```bash
   npm run build
   ```

## 🎨 Customization

### Personal Information
Edit these files to customize the portfolio:

- `src/sections/Hero.jsx` - Name, title, and tagline
- `src/sections/About.jsx` - Bio and skills
- `src/sections/Projects.jsx` - Your projects
- `src/sections/Experience.jsx` - Work experience & education
- `src/sections/ActivityGraph.jsx` - GitHub stats
- `src/sections/Contact.jsx` - Contact information

### Styling
- Colors: Edit `tailwind.config.js` in the `colors` section
- Global styles: Edit `src/index.css`
- Component styles: Edit individual component files

### Images
Replace placeholder icons with your actual images:
1. Add images to the `public` folder
2. Update the `image` property in project data to use real image paths

## 🌐 Deployment

### Vercel (Recommended)

1. Push your code to GitHub
2. Connect your repository to [Vercel](https://vercel.com)
3. Deploy with one click

Or use Vercel CLI:
```bash
npm i -g vercel
vercel
```

### Netlify
```bash
npm run build
netlify deploy --prod --dir=dist
```

### GitHub Pages
1. Update `vite.config.js` with base URL:
   ```js
   export default defineConfig({
     base: '/your-repo-name/',
     plugins: [react()],
   })
   ```
2. Build and deploy to `gh-pages` branch

## 📱 Project Structure

```
portfolio/
├── public/                 # Static assets
├── src/
│   ├── components/         # Reusable components
│   │   ├── Footer.jsx
│   │   ├── LoadingScreen.jsx
│   │   ├── Navbar.jsx
│   │   └── ScrollProgress.jsx
│   ├── sections/          # Page sections
│   │   ├── Hero.jsx
│   │   ├── About.jsx
│   │   ├── Projects.jsx
│   │   ├── Experience.jsx
│   │   ├── ActivityGraph.jsx
│   │   └── Contact.jsx
│   ├── App.jsx            # Main app component
│   ├── index.css          # Global styles
│   └── main.jsx           # Entry point
├── index.html
├── package.json
├── tailwind.config.js
├── vite.config.js
└── README.md
```

## 🎯 Performance Optimized

- Lazy loading for sections
- Optimized animations with Framer Motion
- Minimal external dependencies
- Tailwind CSS for minimal bundle size
- Vite for fast development and optimized builds

## 📝 License

This project is open source and available under the [MIT License](LICENSE).

## 🤝 Contributing

Contributions are welcome! Feel free to submit a Pull Request.

## 📧 Contact

For questions or support, reach out via:
- Email: your.email@example.com
- LinkedIn: [Your LinkedIn](https://linkedin.com)
- GitHub: [@yourusername](https://github.com/yourusername)

---

**Built with ❤️ for students by a student**
