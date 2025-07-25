# 🚗 Next-Gen Frontend Experience | COHORT Hackathon

Welcome to the **Frontend Hackathon Showcase** — a fully immersive, performance-optimized, and visually dynamic website built for the **COHORT Frontend Hackathon**. This project is not just a frontend, but an experience — crafted to push the boundaries of modern UI/UX using **React**, **Three.js**, **GSAP**, and other web animation tools.

---

## 🧠 Inspiration

In a digital world full of static and lifeless pages, our goal was to **build an interactive frontend** that breathes. From subtle scroll momentum to real-time 3D scenes, this site is designed to **engage users through motion and depth**, giving them the vibe of a product showcase that *feels alive*.

---

## ✨ Live Demo

[🔗 View Live Project](https://prime-drinks-project.onrender.com/)  
_(Deploy your project on Vercel, Netlify, or Render and add the link here)_

---

## 🔧 Tech Stack & Tools

| Technology     | Purpose                                     |
|----------------|---------------------------------------------|
| **React.js**   | Frontend Framework                          |
| **GSAP**       | Smooth animations, scroll-based triggers    |
| **ScrollTrigger** | Scroll-based animation control          |
| **Lenis**      | Smooth scrolling and inertia                |
| **Three.js (React Fiber)** | Interactive 3D experiences      |
| **@react-three/drei** | Helpers for Three.js in React        |
| **Redux Toolkit** | State management (Car Feature)           |
| **Canvas**     | Dynamic background & visual effects         |
| **Responsive CSS (Tailwind / Custom)** | Mobile-First Design |

---

## 🚀 Key Features

### 🎞️ Cinematic Animations
- Smooth **page transitions** and element animations using GSAP + ScrollTrigger.
- Subtle **skew, scale, and opacity** transitions for modern UI vibes.

### 🧭 Seamless Scroll Experience
- Lenis provides **buttery-smooth inertia scrolling**, enhancing UX fluidity.
- ScrollTrigger syncs animation perfectly with scroll positions.

### 🎮 Interactive 3D Sections
- Three.js & React Fiber power **3D models and scenes** rendered on canvas.
- Supports interaction and movement synced with scroll or mouse actions.

### 🚗 Car Feature (Redux-powered)
- A **Redux state-controlled car feature** to simulate product functionality or switching scenes.
- Example: Toggle between car variants, lighting modes, or environment perspectives.

### 📱 Fully Responsive
- Optimized for **all device sizes**, ensuring consistent design and interaction across mobile, tablet, and desktop.

---

## 📂 Folder Structure (Simplified)

```txt
PRIME-FE-HACKATHON/
├── public/
│   └── _redirects              # SPA routing support for Vite
├── src/
│   ├── App/                    # App-level stores and global logic
│   ├── assets/                 # Images, models, textures, media
│   ├── components/             # Reusable UI components
│   ├── features/               # Redux slices (e.g., car feature)
│   ├── screens/                # Route-based pages/screens
│   ├── canvas/                 # 3D scene setup (React Three Fiber)
│   ├── App.jsx                 # Root component
│   └── main.jsx                # Entry point for Vite
├── .gitignore
├── index.html
├── package.json
└── vite.config.js

---

## 🛠️ Installation & Setup

```bash
# Clone the repository
git clone https://github.com/ManavKaneriya37/PRIME-FE-HACKATHON.git
cd project-name

# Install dependencies
npm install

# Run development server
npm run dev
