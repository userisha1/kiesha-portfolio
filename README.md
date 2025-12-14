# Kiesha's Digital Canvas

Educational Tour Documentation Portfolio - A beautiful showcase of the Cebu-Bohol Educational Tour experience.

## 🚀 Deployment to Vercel

### Option 1: Deploy via Vercel Dashboard (Recommended)

1. **Push your code to GitHub**
   ```bash
   git init
   git add .
   git commit -m "Initial commit"
   git branch -M main
   git remote add origin <your-github-repo-url>
   git push -u origin main
   ```

2. **Deploy to Vercel**
   - Go to [vercel.com](https://vercel.com)
   - Sign in with your GitHub account
   - Click "Add New Project"
   - Import your GitHub repository
   - Vercel will auto-detect Vite settings
   - Click "Deploy"

   That's it! Your site will be live in minutes.

### Option 2: Deploy via Vercel CLI

1. **Install Vercel CLI**
   ```bash
   npm i -g vercel
   ```

2. **Login to Vercel**
   ```bash
   vercel login
   ```

3. **Deploy**
   ```bash
   vercel
   ```

4. **For production deployment**
   ```bash
   vercel --prod
   ```

## 📦 Build

```bash
npm install
npm run build
```

The build output will be in the `dist` folder.

## 🛠️ Development

```bash
npm run dev
```

## 📝 Notes

- The project uses React Router for client-side routing
- All routes are configured to serve `index.html` (SPA mode)
- Journal images are optimized and loaded from assets
- The site is fully responsive and works on all devices

## 🎨 Features

- Interactive journal carousel
- Photo galleries for each day
- Company visit documentation
- Certificate showcase
- Responsive design
- Smooth animations and transitions

