# Razin Rayees Portfolio

A modern, responsive portfolio website built with React, TypeScript, and Tailwind CSS.

## 🚀 Features

- **Modern Design**: Clean, professional interface with smooth animations
- **Responsive**: Optimized for all device sizes
- **Performance**: Fast loading with optimized assets
- **SEO Optimized**: Meta tags and structured data
- **Contact Form**: Integrated contact form with Formspree
- **Interactive Design**: Smooth animations and hover effects
- **Modern UI**: Clean, professional interface

## 🛠️ Tech Stack

- **Frontend**: React 18, TypeScript
- **Styling**: Tailwind CSS
- **Build Tool**: Vite
- **Icons**: Lucide React
- **Deployment**: Netlify
- **Form Handling**: Formspree

## 📦 Installation

1. Clone the repository:
```bash
git clone https://github.com/razinrayees/portfolio.git
cd portfolio
```

2. Install dependencies:
```bash
npm install
```

3. Start the development server:
```bash
npm run dev
```

4. Open [http://localhost:5173](http://localhost:5173) in your browser.

## 🏗️ Project Structure

```
config/                 # Configuration files
├── .firebaserc        # Firebase project configuration
├── eslint.config.js   # ESLint configuration
├── firebase.json      # Firebase hosting configuration
├── postcss.config.js  # PostCSS configuration
├── tailwind.config.js # Tailwind CSS configuration
├── tsconfig.app.json  # TypeScript app configuration
├── tsconfig.node.json # TypeScript Node configuration
└── vite.config.ts     # Vite configuration
docs/                   # Documentation
├── CUSTOMIZATION.md   # Customization guide
├── DEPLOYMENT.md      # Deployment guide
└── DEVELOPMENT.md     # Development guide
public/
├── icons/             # Favicon and app icons
└── sitemap.xml        # SEO sitemap
src/
├── components/          # React components
│   ├── ui/             # Reusable UI components
│   ├── sections/       # Page sections
│   └── layout/         # Layout components
├── lib/                # Utility functions and configurations
├── types/              # TypeScript type definitions
├── styles/             # Global styles and CSS
└── assets/             # Static assets
```

## 🚀 Build and Deploy

### Development
```bash
npm run dev          # Start development server
npm run build        # Build for production
npm run preview      # Preview production build
```

### Netlify Deployment

#### Option 1: Git Integration (Recommended)
1. Push your code to GitHub/GitLab/Bitbucket
2. Connect your repository to Netlify
3. Set build command: `npm run build`
4. Set publish directory: `dist`
5. Deploy automatically on every push

#### Option 2: Manual Deployment
1. Build the project: `npm run build`
2. Drag and drop the `dist` folder to Netlify


Or deploy automatically by connecting your Git repository to Netlify.

## 🎨 Customization

This portfolio is designed to be easily customizable for your own use. See the [Customization Guide](docs/CUSTOMIZATION.md) for detailed instructions on:

- **Personal Information**: Update name, bio, contact details
- **Projects**: Add your own projects with images and descriptions
- **Certificates**: Showcase your achievements and certifications
- **Styling**: Customize colors, fonts, and layout
- **Contact Form**: Set up your own contact form
- **Deployment**: Deploy to your preferred hosting platform

### Quick Start Customization

1. **Personal Info**: Edit `src/lib/constants.ts`
2. **Projects**: Update `src/data/projects.ts`
3. **Certificates**: Modify `src/data/certificates.ts`
4. **About Section**: Edit `src/components/sections/About.tsx`
5. **Hero Section**: Update `src/components/sections/Hero.tsx`
6. **Contact Form**: Set up Formspree endpoint in `src/lib/constants.ts`

### Contact Form Setup

The portfolio includes a working contact form powered by Formspree:

1. Create a free account at [Formspree.io](https://formspree.io)
2. Create a new form and copy the endpoint URL
3. Update `FORMSPREE_ENDPOINT` in `src/lib/constants.ts`
4. Deploy and test your contact form

See the [Customization Guide](docs/CUSTOMIZATION.md#-contact-form) for detailed setup instructions.

## 📱 Browser Support

- Chrome (latest)
- Firefox (latest)
- Safari (latest)
- Edge (latest)

## 🤝 Contributing

1. Fork the repository
2. Create a feature branch (`git checkout -b feature/amazing-feature`)
3. Commit your changes (`git commit -m 'Add amazing feature'`)
4. Push to the branch (`git push origin feature/amazing-feature`)
5. Open a Pull Request

## 📄 License

This project is licensed under the MIT License - see the [LICENSE](LICENSE) file for details.

## 👤 Author

**Razin Rayees**
- Website: [razinrayees.com](https://razinrayees.com)
- LinkedIn: [@razinrayees](https://linkedin.com/in/razinrayees)
- GitHub: [@razinrayees](https://github.com/razinrayees)

## 🙏 Acknowledgments

- [Tailwind CSS](https://tailwindcss.com) for the utility-first CSS framework
- [Lucide](https://lucide.dev) for the beautiful icons
- [Vite](https://vitejs.dev) for the fast build tool
- [React](https://reactjs.org) for the UI library
