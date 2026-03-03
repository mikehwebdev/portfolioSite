# Mike Hatton Portfolio Site

A React-based personal portfolio site that showcases my projects, interactive widgets, and an interactive CV, with a focus on clear navigation, responsive layout, and practical frontend craftsmanship.

## Live Project

- **Live Demo:** https://www.mikehatton.net/
- **Source Code:** https://github.com/mikehwebdev/portfolioSite

## Features

- Multi-page portfolio with route-based navigation using React Router
- Dedicated project showcase with image galleries, live links, and GitHub links
- Animated project cards triggered by Intersection Observer
- Interactive CV page with a rotating dial, touch gestures, and expandable employment history
- Widget playground featuring custom-built UI experiments and micro-interactions
- Responsive header navigation (mobile hamburger + desktop nav) and reusable social/footer links

## Tech Stack

- React
- Vite
- React Router
- JavaScript (ES6+)
- CSS
- React Icons

## Getting Started

### Prerequisites

- Node.js (v18+ recommended)
- npm

### Installation

```bash
npm install
```

### Run locally

```bash
npm run dev
```

### Build for production

```bash
npm run build
```

## Technical Decisions

- **Component-driven architecture:** Split the UI into reusable page, layout, and presentational components to keep code easier to reason about and extend.
- **Data-first rendering:** Centralised key content in `projectData` and `cvData` so UI can be generated through mapping instead of hardcoding repeated markup.
- **Interaction strategy:** Used small custom hooks (`useToggler`, `useScrollToTop`) and focused local state to keep interaction logic simple and maintainable.

## Accessibility & UX

- Added `aria-label` attributes on interactive icons and controls
- Included semantic structure with consistent headings and section layout
- Built responsive navigation patterns for mobile and desktop experiences
- Used clear visual feedback for active navigation, toggled states, and interactive widgets

## Challenges & Learnings

- Balancing playful UI interactions with maintainable component structure
- Managing multiple interaction-heavy areas (widgets, gallery, CV dial) without overcomplicating state
- Keeping reusable data structures flexible while preserving clear, readable page content
- Refining responsive behavior for both fixed header navigation and content-heavy sections

## Future Improvements

- Continue improving keyboard navigation across all widgets and gallery interactions
- Expand the projects section with additional case-study level technical writeups

## About Me

I’m a junior frontend developer focused on building practical, user-friendly interfaces with React.
This project reflects my approach to clean component structure, reusable patterns, and iterative improvement through hands-on projects.

- **LinkedIn:** https://www.linkedin.com/in/michael-hatton-29927b95/
- **Portfolio:** https://www.mikehatton.net/
