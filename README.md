# 🐾 Red Panda Paradise

A cute and simple HTML/CSS project about red pandas with a complete CI/CD pipeline using GitHub Actions.

## 🎯 Lab Objectives

This project fulfills **Lab 5 CD (Continuous Deployment)** requirements by:

- Building upon **Lab 4 CI** with multi-stage workflows, matrix builds, and caching
- Researching and using free deployment platforms

## 🚀 Features

- **Responsive Design**: Beautiful, mobile-friendly layout
- **Complete CI/CD Pipeline**: Automated testing, linting, building, and deployment

## 🛠️ Technologies Used

- **Frontend**: HTML5, CSS3, Vanilla JavaScript
- **CI/CD**: GitHub Actions
- **Deployment**: Netlify
- **Testing**: Node.js, Custom test suite
- **Linting**: ESLint, Stylelint, HTMLHint

## 📦 Project Structure

```
red-panda-paradise/
├── index.html              # Main HTML file
├── style.css              # Styling
├── script.js              # JavaScript functionality
├── package.json           # Node.js dependencies and scripts
├── test.js                # Test suite
├── .github/workflows/     # CI/CD pipeline
│   └── ci-cd.yml         # GitHub Actions workflow
├── .eslintrc.json         # ESLint configuration
├── .stylelintrc.json      # Stylelint configuration
├── .htmlhintrc            # HTMLHint configuration
└── README.md              # This file
```

## 🔄 CI/CD Pipeline

### Continuous Integration (CI)

- **Matrix Builds**: Tests on Node.js 16 & 18, Ubuntu & Windows
- **Dependency Caching**: Speeds up builds by caching npm modules
- **Multi-Stage Pipeline**:
  1. **Lint Stage**: HTML, CSS, and JavaScript linting
  2. **Test Stage**: Runs comprehensive test suite
  3. **Build Stage**: Creates production build in `dist/` folder
- **Artifact Upload**: Saves build artifacts for download

### Continuous Deployment (CD)

- **Automatic Deployment**: Deploys to Netlify on main branch pushes
- **Production Build**: Optimized files served from `dist/` folder
- **Live Site**: Accessible at Netlify URL (auto-generated or custom domain)

## 🚀 Getting Started

### Prerequisites

- Node.js 16 or 18
- npm or yarn
- Git

### Local Development

1. Clone the repository:

   ```bash
   git clone <your-repo-url>
   cd red-panda-paradise
   ```

2. Install dependencies:

   ```bash
   npm install
   ```

3. Start development server:

   ```bash
   npm run dev
   ```

4. Open http://localhost:3000 in your browser

### Available Scripts

- `npm run lint` - Run all linters (HTML, CSS, JS)
- `npm test` - Run test suite
- `npm run build` - Build for production
- `npm start` - Start production server
- `npm run dev` - Start development server with auto-open

## 🧪 Testing

The project includes a comprehensive test suite that validates:

- File existence (HTML, CSS, JS)
- Required HTML sections and content
- Red panda themed content
- Responsive CSS design
- JavaScript functionality
- Package.json script configuration

Run tests with: `npm test`

## 📋 Lab Requirements Fulfilled

### Lab 4 CI Requirements 

- [x] Multi-stage workflow (lint, test, build)
- [x] Matrix strategy (Node.js 16/18, Ubuntu/Windows)
- [x] Dependency caching for faster runs
- [x] Separate lint, test, and build stages
- [x] Build artifact upload
- [x] Triggers on push/PR to main branch

### Lab 5 CD Requirements 

- [x] Research deployment platforms (GitHub Pages, Netlify, Vercel)
- [x] Extended Lab 4 workflow with deployment job
- [x] Automatic deployment on successful CI
- [x] Free tier deployment platform (Netlify)
- [x] Production-ready build process


##  Deployment Setup (Netlify)

To set up automatic deployment to Netlify:



- Go to User Settings → Applications → Personal access tokens
- Generate a new access token and copy it
- In your site settings, copy the Site ID from Site information

### 4. Add GitHub Secrets

In your GitHub repository, go to Settings → Secrets and variables → Actions:

- Add `NETLIFY_AUTH_TOKEN` with your personal access token
- Add `NETLIFY_SITE_ID` with your site ID

### 5. Push to Main Branch

The CI/CD pipeline will automatically deploy your site!

## 📱 Live Demo

Once deployed, the site will be available at your Netlify URL:
`https://YOUR-SITE-NAME.netlify.app`

## 🤝 Contributing

1. Fork the repository
2. Create a feature branch
3. Make your changes
4. Run tests: `npm test`
5. Run linting: `npm run lint`
6. Submit a pull request

The CI/CD pipeline will automatically test your changes!

## 📄 License

MIT License - feel free to use this project for learning!

---

Made with ❤️ for red pandas and DevOps learning!
