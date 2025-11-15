# MindOS Landing Page Components

This directory contains all the modular components for the MindOS landing page.

## Components Structure

### 1. **Navbar.tsx**
- Sticky navigation bar with theme toggle
- Navigation links to all sections
- Login and CTA buttons
- Responsive design with mobile support

### 2. **Hero.tsx**
- Main hero section with tagline
- Primary headline with gradient text
- Key benefits listed
- CTA buttons (Get Started & Watch Demo)

### 3. **SocialProof.tsx**
- Testimonials from users
- Trust badges showing target audiences
- Social validation section

### 4. **Problem.tsx**
- Highlights pain points in current learning systems
- Shows problems MindOS solves
- Sets up the value proposition

### 5. **Solution.tsx**
- Explains MindOS as a Scientific Learning OS
- Shows different learning goals supported
- Lists key capabilities

### 6. **HowItWorks.tsx**
- 6-step process explanation
- Shows user journey from onboarding to mastery
- Uses cards with step numbers and badges

### 7. **Features.tsx**
- Main features grid (9 features)
- Each feature with icon, name, and description
- Highlights AI Tutor, MindSchool, MindCloud, etc.

### 8. **Audience.tsx**
- Shows who MindOS is for
- Lists 8 different user types
- Inclusive messaging

### 9. **Pricing.tsx**
- Three pricing tiers (Free, Pro, Teams)
- Feature lists for each plan
- Highlighted "Most Popular" badge
- CTA buttons for each tier

### 10. **FAQ.tsx**
- Collapsible FAQ items
- Answers common questions
- Helps with conversion objections

### 11. **CTA.tsx**
- Final call-to-action section
- Reinforces main value prop
- Multiple conversion paths

### 12. **Footer.tsx**
- Links to important pages
- Copyright and branding
- Social proof tagline

## Usage

Import all components in your page:

```tsx
import {
  Navbar,
  Hero,
  SocialProof,
  Problem,
  Solution,
  HowItWorks,
  Features,
  Audience,
  Pricing,
  FAQ,
  CTA,
  Footer,
} from "@/components/landing";
```

## Shadcn UI Components Used

- Button
- Card (with Header, Title, Description, Content, Footer)
- Badge
- Collapsible
- Icons from lucide-react

## Styling

All components use:
- Tailwind CSS for styling
- Responsive design (mobile-first)
- Dark mode support
- Shadcn UI design system
- Semantic HTML

## Customization

To customize content, edit the data arrays/objects within each component file. All content is defined at the component level for easy modification.
