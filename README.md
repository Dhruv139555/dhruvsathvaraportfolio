# Dhruv Sathvara — Personal Portfolio

A cinematic, dark-themed personal portfolio website for **Dhruv Sathvara**, an Artificial Intelligence student and aspiring data scientist based in Ahmedabad, India. Built with React, TypeScript, Vite, and Tailwind CSS, and deployed on Netlify.

## Live Site

[dhruvsathvaraportfolio.netlify.app](https://dhruvsathvaraportfolio.netlify.app)

## About

This portfolio showcases Dhruv's background in AI, Machine Learning, and Data Science through an immersive, scroll-driven experience. Key highlights include:

- **Cinematic hero animation** — a frame-by-frame animated canvas intro
- **Interactive Model Arena** — a live simulation widget comparing ML classifiers (Random Forest, SVM, Gradient Boosting, Logistic Regression) with decision boundary visualizations
- **Professional timeline** — internships at SkillOrbit and Cognifyz Technologies
- **Education history** — B.Tech. Lateral AI from Parul University and a Diploma in IT from Dalia Institute
- **Projects** — Employee Attrition Analytics platform (EMS) and Restaurant Rating Prediction system
- **Publications** — ISJEM journal paper on EMS-DS browser-native data science workflow engine
- **Certifications** — Cisco Data Analytics Essentials, Google AI for K12 Educators, NPTEL IoT
- **Contact form** — reach-out section with email and social links

## Tech Stack

| Layer | Technology |
|---|---|
| Framework | React 18 + TypeScript |
| Build tool | Vite |
| Styling | Tailwind CSS |
| Animations | Framer Motion, GSAP + ScrollTrigger |
| Icons | Lucide React |
| Hosting | Netlify |

## Project Structure

```
src/
  components/
    CinematicCanvas.tsx   # Animated hero canvas with frame sequences
    PortfolioSections.tsx # All page sections (About, Experience, Projects, etc.)
    SmoothScroll.tsx      # Smooth scrolling wrapper
  App.tsx
  main.tsx
public/
  frames/                 # JPEG frame sequence for hero animation
```

## Local Development

```bash
npm install
npm run dev
```

The dev server starts at `http://localhost:5173`.

## Deployment

This site is deployed automatically via Netlify on every push to `main`. No manual build step is required.

## Contact

- Email: dhruvsathawara85@gmail.com
- LinkedIn: [dhruv-sathvara-64461b352](https://www.linkedin.com/in/dhruv-sathvara-64461b352/)
- GitHub: [Dhruv139555](https://github.com/Dhruv139555)
- Happenstance: [Dhruvsathvara](https://happenstance.ai/u/Dhruvsathvara)
