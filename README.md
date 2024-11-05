# La Cabine d'Argent - Restaurant Template

## 🍽️ Overview

A modern, responsive restaurant website template built with Next.js 14, TypeScript, and Tailwind CSS. This template is designed to provide restaurants with a professional online presence, featuring a dynamic image slider, menu downloads, contact forms, and location integration.

## ✨ Features

- 🎯 **Responsive Design**: Optimized for mobile, tablet, and desktop
- 🖼️ **Dynamic Image Slider**: Automatic background image transitions
- 📱 **Mobile-First Navigation**: Hamburger menu for mobile devices
- 🗺️ **Google Maps Integration**: Interactive location display
- 📄 **PDF Menu**: Downloadable menu option
- 📝 **Contact Form**: Built-in contact functionality with EmailJS
- 🎨 **Modern UI/UX**: Professional design with consistent typography and color scheme
- ⚡ **Performance Optimized**: Fast loading times with optimized images and fonts
- 🔄 **Smooth Animations**: Page transitions and scroll animations
- 📱 **Progressive Web App Ready**: Can be installed as a PWA

## 🚀 Tech Stack

### Core
- **Framework**: Next.js 14 (App Router)
- **Language**: TypeScript
- **Styling**: Tailwind CSS

### UI/UX
- **Icons**: Font Awesome
- **Animations**: Framer Motion
- **Fonts**: Google Fonts (Playfair Display, Lato)

### Functionality
- **Email Service**: EmailJS
- **Maps**: Google Maps Embed API
- **Image Optimization**: Next.js Image Component
- **State Management**: React Hooks

### Development
- **Linting**: ESLint
- **Type Checking**: TypeScript
- **Package Manager**: npm
- **Version Control**: Git

## 📦 Installation

1. Clone the repository:
```bash
git clone https://github.com/yourusername/restaurant-template.git
```

2. Install dependencies:
```bash
npm install
```

3. Set up environment variables:
Create a `.env.local` file with:
```env
NEXT_PUBLIC_EMAILJS_PUBLIC_KEY=your_public_key
NEXT_PUBLIC_EMAILJS_SERVICE_ID=your_service_id
NEXT_PUBLIC_EMAILJS_TEMPLATE_ID=your_template_id
```

## 🚀 Getting Started

Run the development server:
```bash
npm run dev
```

Open [http://localhost:3000](http://localhost:3000) with your browser to see the result.

## 📱 Pages & Components

### Pages
- **Home**: Dynamic background slider and welcome message
- **Menu**: Downloadable PDF menu (planned)
- **Contact**: Integrated contact form with EmailJS
- **Location**: Google Maps integration

### Key Components
- `BackgroundSlider`: Dynamic image carousel
- `WelcomeSection`: Animated welcome content
- `ContactForm`: EmailJS integrated contact form
- `GoogleMap`: Interactive location display
- `Header`: Responsive navigation
- `Footer`: Site footer with social links

## 🎨 Customization

The template can be easily customized by modifying:
- `tailwind.config.ts`: Colors, fonts, and other theme settings
- `public/images/`: Restaurant images
- `src/config/`: Configuration files for various services
- Content in component files

## 🔧 Configuration

### EmailJS Setup
1. Create an account at [EmailJS](https://www.emailjs.com/)
2. Create an email template
3. Add your credentials to `.env.local`

### Google Maps Setup
1. Use the Google Maps Embed API
2. Update the address in the `GoogleMap` component

## 📄 License

This project is licensed under the MIT License, which means you can:
- ✅ Use it commercially
- ✅ Modify it
- ✅ Distribute it
- ✅ Use it privately
- ✅ Use it for any purpose

The only requirement is to include the original license and copyright notice in any copy of the software/source.

See the [LICENSE.md](LICENSE.md) file for details.

## 👥 Contributing

Contributions are welcome! Please feel free to submit a Pull Request.

## 📞 Support

For support, email [paul.fresnel1@gmail.com](mailto:paul.fresnel1@gmail.com)

## 🙏 Acknowledgments

- [Next.js](https://nextjs.org/)
- [Tailwind CSS](https://tailwindcss.com/)
- [Framer Motion](https://www.framer.com/motion/)
- [EmailJS](https://www.emailjs.com/)
- [Font Awesome](https://fontawesome.com/)
