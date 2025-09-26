# RockAI Website

A modern, AI-powered website for RockAI Dev - a technology company specializing in AI solutions, custom software development, and innovative technology services.

## 🚀 Project Overview

RockAI Website is a Next.js 15 application built with React 19, featuring:
- **AI-powered chatbot** with multilingual support (English/Arabic)
- **Modern UI/UX** with Tailwind CSS and Framer Motion animations
- **Responsive design** optimized for all devices
- **SEO-optimized** with comprehensive meta tags and structured data
- **Contact forms** with email integration
- **Career and partnership applications** with file upload support

## 🛠️ Tech Stack

### Frontend
- **Next.js 15.5.2** - React framework with App Router
- **React 19.1.0** - UI library
- **Tailwind CSS 4** - Utility-first CSS framework
- **Framer Motion 12.23.15** - Animation library
- **AOS (Animate On Scroll) 2.3.4** - Scroll animations

### Backend & APIs
- **Next.js API Routes** - Serverless API endpoints
- **Google Generative AI** - AI chatbot integration
- **Nodemailer** - Email service integration

### UI Components
- **Lucide React** - Icon library
- **React Slick** - Carousel component
- **Custom UI components** - Animated cards, gradients, and effects

## 📋 Prerequisites

Before running this project, ensure you have:

- **Node.js** (v18.0.0 or higher)
- **npm** or **yarn** package manager
- **Git** for version control

## 🔧 Installation & Setup

### 1. Clone the Repository
```bash
git clone https://github.com/your-username/rockai-website.git
cd rockai-website
```

### 2. Install Dependencies
```bash
npm install
# or
yarn install
```

### 3. Environment Variables
Create a `.env.local` file in the root directory and add the following variables:

```env
# Google Generative AI API Key
GEMINI_API_KEY=your_gemini_api_key_here

# Gmail App Password for email services
GMAIL_APP_PASSWORD=your_gmail_app_password_here

# Optional: Custom domain for production
NEXT_PUBLIC_SITE_URL=https://www.rockaidev.com
```

### 4. Gmail Setup
To enable email functionality:
1. Enable 2-factor authentication on your Gmail account
2. Generate an App Password for the application
3. Use the App Password in `GMAIL_APP_PASSWORD` environment variable

### 5. Google AI Setup
1. Visit [Google AI Studio](https://makersuite.google.com/app/apikey)
2. Create a new API key
3. Add the key to your `.env.local` file

## 🚀 Running the Application

### Development Mode
```bash
npm run dev
# or
yarn dev
```

The application will be available at `http://localhost:3000`

### Production Build
```bash
npm run build
npm run start
# or
yarn build
yarn start
```

### Linting
```bash
npm run lint
# or
yarn lint
```

## 📁 Project Structure

```
rockai-website/
├── public/                 # Static assets
│   ├── favicon.ico
│   ├── Logo.png
│   ├── robots.txt
│   ├── sitemap.xml
│   └── site.webmanifest
├── src/
│   ├── app/               # Next.js App Router
│   │   ├── api/           # API routes
│   │   │   ├── chat/      # AI chatbot endpoint
│   │   │   ├── send-email/ # Contact form endpoint
│   │   │   ├── careers-application/ # Job application endpoint
│   │   │   ├── partnership-application/ # Partnership form endpoint
│   │   │   └── newsletter-subscribe/ # Newsletter endpoint
│   │   ├── Home/          # Homepage components
│   │   ├── products/      # Product pages
│   │   ├── services/      # Services pages
│   │   ├── join-us/       # Careers & partnerships
│   │   ├── Contactus/     # Contact page
│   │   ├── our-story/     # About page
│   │   ├── portfolio/     # Portfolio page
│   │   ├── blog/          # Blog page
│   │   ├── layout.js      # Root layout
│   │   ├── page.jsx       # Homepage
│   │   └── globals.css    # Global styles
│   ├── components/        # Reusable components
│   │   ├── Navbar/        # Navigation component
│   │   ├── Footer/        # Footer component
│   │   ├── ChatbotModal/  # AI chatbot modal
│   │   ├── Buttons/       # Button components
│   │   ├── 3DCards/       # 3D card effects
│   │   └── ui/            # UI components
│   ├── Assets/           # Images and icons
│   │   ├── Images/       # Image assets
│   │   └── Icons/        # SVG icons
│   └── lib/              # Utility functions
│       ├── chatStorage.js    # Chat storage utilities
│       ├── languageUtils.js  # Language detection
│       ├── linkUtils.js     # Link utilities
│       └── utils.js         # General utilities
├── components.json        # UI components configuration
├── next.config.mjs       # Next.js configuration
├── package.json          # Dependencies and scripts
├── tailwind.config.js    # Tailwind CSS configuration
└── README.md             # This file
```

## 🔌 API Endpoints

### Chat API (`/api/chat`)
- **Method**: POST
- **Purpose**: AI chatbot with multilingual support
- **Body**: `{ message: string, conversationHistory: array }`
- **Response**: `{ message: string, language: string, success: boolean }`

### Contact Form (`/api/send-email`)
- **Method**: POST
- **Purpose**: Send contact form submissions via email
- **Body**: Contact form data
- **Response**: `{ success: boolean, message: string }`

### Career Applications (`/api/careers-application`)
- **Method**: POST
- **Purpose**: Handle job applications with file uploads
- **Body**: FormData with resume file
- **Response**: `{ success: boolean, message: string }`

### Partnership Applications (`/api/partnership-application`)
- **Method**: POST
- **Purpose**: Handle partnership applications with documents
- **Body**: FormData with supporting documents
- **Response**: `{ success: boolean, message: string }`

### Newsletter Subscription (`/api/newsletter-subscribe`)
- **Method**: POST
- **Purpose**: Handle newsletter subscriptions
- **Body**: `{ email: string }`
- **Response**: `{ success: boolean, message: string }`

## 🎨 Features

### AI Chatbot
- **Multilingual Support**: Automatic language detection (English/Arabic)
- **Context Awareness**: Maintains conversation history
- **Company Knowledge**: Trained on RockAI services and products
- **Real-time Responses**: Powered by Google Generative AI

### Contact Forms
- **Multiple Forms**: Contact, careers, partnerships, newsletter
- **File Upload Support**: Resume and document attachments
- **Email Integration**: Automatic email notifications
- **Validation**: Client and server-side validation

### UI/UX
- **Responsive Design**: Mobile-first approach
- **Animations**: Smooth transitions with Framer Motion
- **Modern Design**: Gradient effects and 3D cards
- **Accessibility**: WCAG compliant components

### SEO Optimization
- **Meta Tags**: Comprehensive meta tag implementation
- **Open Graph**: Social media sharing optimization
- **Structured Data**: JSON-LD schema markup
- **Sitemap**: XML sitemap for search engines
- **Robots.txt**: Search engine crawling instructions

## 🔧 Configuration

### Next.js Configuration
The project uses Next.js 15 with Turbopack for faster development builds:

```javascript
// next.config.mjs
const nextConfig = {};

export default nextConfig;
```

### Tailwind CSS
Custom theme configuration with CSS variables and animations:

```css
/* globals.css */
@import "tailwindcss";
@import "tw-animate-css";
```

## 🚀 Deployment

### Vercel (Recommended)
1. Connect your GitHub repository to Vercel
2. Add environment variables in Vercel dashboard
3. Deploy automatically on push to main branch

### Other Platforms
The application can be deployed to any platform supporting Next.js:
- **Netlify**
- **AWS Amplify**
- **Railway**
- **DigitalOcean App Platform**

## 📊 Performance

### Optimization Features
- **Image Optimization**: Next.js Image component with lazy loading
- **Code Splitting**: Automatic code splitting by Next.js
- **Static Generation**: Pre-rendered pages for better performance
- **Bundle Analysis**: Built-in bundle analyzer

### Lighthouse Scores
- **Performance**: 90+
- **Accessibility**: 95+
- **Best Practices**: 95+
- **SEO**: 95+

## 🛡️ Security

### Security Measures
- **Input Validation**: Server-side validation for all forms
- **File Upload Security**: File type and size validation
- **Environment Variables**: Sensitive data in environment variables
- **CORS Protection**: Configured CORS policies
- **Rate Limiting**: API rate limiting (recommended for production)

## 🤝 Contributing

1. Fork the repository
2. Create a feature branch (`git checkout -b feature/amazing-feature`)
3. Commit your changes (`git commit -m 'Add some amazing feature'`)
4. Push to the branch (`git push origin feature/amazing-feature`)
5. Open a Pull Request

## 📝 License

This project is licensed under the MIT License - see the [LICENSE](LICENSE) file for details.

## 📞 Support

For support and questions:
- **Email**: rockaidev@gmail.com
- **Phone**: +201555867970
- **Website**: https://www.rockaidev.com

## 🙏 Acknowledgments

- **Google Generative AI** for AI capabilities
- **Next.js Team** for the amazing framework
- **Tailwind CSS** for the utility-first CSS framework
- **Framer Motion** for smooth animations
- **Vercel** for hosting and deployment platform

---

**Built with ❤️ by RockAI Dev Team**