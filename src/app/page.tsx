@import "tailwindcss";
@import "tw-animate-css";

@custom-variant dark (&:is(.dark *));

@theme inline {
  --color-background: var(--background);
  --color-foreground: var(--foreground);
  --font-sans: var(--font-geist-sans);
  --font-mono: var(--font-geist-mono);
  --color-sidebar-ring: var(--sidebar-ring);
  --color-sidebar-border: var(--sidebar-border);
  --color-sidebar-accent-foreground: var(--sidebar-accent-foreground);
  --color-sidebar-accent: var(--sidebar-accent);
  --color-sidebar-primary-foreground: var(--sidebar-primary-foreground);
  --color-sidebar-primary: var(--sidebar-primary);
  --color-sidebar-foreground: var(--sidebar-foreground);
  --color-sidebar: var(--sidebar);
  --color-chart-5: var(--chart-5);
  --color-chart-4: var(--chart-4);
  --color-chart-3: var(--chart-3);
  --color-chart-2: var(--chart-2);
  --color-chart-1: var(--chart-1);
  --color-ring: var(--ring);
  --color-input: var(--input);
  --color-border: var(--border);
  --color-destructive: var(--destructive);
  --color-accent-foreground: var(--accent-foreground);
  --color-accent: var(--accent);
  --color-muted-foreground: var(--muted-foreground);
  --color-muted: var(--muted);
  --color-secondary-foreground: var(--secondary-foreground);
  --color-secondary: var(--secondary);
  --color-primary-foreground: var(--primary-foreground);
  --color-primary: var(--primary);
  --color-popover-foreground: var(--popover-foreground);
  --color-popover: var(--popover);
  --color-card-foreground: var(--card-foreground);
  --color-card: var(--card);
  --radius-sm: calc(var(--radius) - 4px);
  --radius-md: calc(var(--radius) - 2px);
  --radius-lg: var(--radius);
  --radius-xl: calc(var(--radius) + 4px);
}

:root {
  --radius: 0.625rem;
  --background: oklch(1 0 0);
  --foreground: oklch(0.145 0 0);
  --card: oklch(1 0 0);
  --card-foreground: oklch(0.145 0 0);
  --popover: oklch(1 0 0);
  --popover-foreground: oklch(0.145 0 0);
  --primary: oklch(0.205 0 0);
  --primary-foreground: oklch(0.985 0 0);
  --secondary: oklch(0.97 0 0);
  --secondary-foreground: oklch(0.205 0 0);
  --muted: oklch(0.97 0 0);
  --muted-foreground: oklch(0.556 0 0);
  --accent: oklch(0.97 0 0);
  --accent-foreground: oklch(0.205 0 0);
  --destructive: oklch(0.577 0.245 27.325);
  --border: oklch(0.922 0 0);
  --input: oklch(0.922 0 0);
  --ring: oklch(0.708 0 0);
  --chart-1: oklch(0.646 0.222 41.116);
  --chart-2: oklch(0.6 0.118 184.704);
  --chart-3: oklch(0.398 0.07 227.392);
  --chart-4: oklch(0.828 0.189 84.429);
  --chart-5: oklch(0.769 0.188 70.08);
  --sidebar: oklch(0.985 0 0);
  --sidebar-foreground: oklch(0.145 0 0);
  --sidebar-primary: oklch(0.205 0 0);
  --sidebar-primary-foreground: oklch(0.985 0 0);
  --sidebar-accent: oklch(0.97 0 0);
  --sidebar-accent-foreground: oklch(0.205 0 0);
  --sidebar-border: oklch(0.922 0 0);
  --sidebar-ring: oklch(0.708 0 0);
}

.dark {
  --background: oklch(0.145 0 0);
  --foreground: oklch(0.985 0 0);
  --card: oklch(0.205 0 0);
  --card-foreground: oklch(0.985 0 0);
  --popover: oklch(0.205 0 0);
  --popover-foreground: oklch(0.985 0 0);
  --primary: oklch(0.922 0 0);
  --primary-foreground: oklch(0.205 0 0);
  --secondary: oklch(0.269 0 0);
  --secondary-foreground: oklch(0.985 0 0);
  --muted: oklch(0.269 0 0);
  --muted-foreground: oklch(0.708 0 0);
  --accent: oklch(0.269 0 0);
  --accent-foreground: oklch(0.985 0 0);
  --destructive: oklch(0.704 0.191 22.216);
  --border: oklch(1 0 0 / 10%);
  --input: oklch(1 0 0 / 15%);
  --ring: oklch(0.556 0 0);
  --chart-1: oklch(0.488 0.243 264.376);
  --chart-2: oklch(0.696 0.17 162.48);
  --chart-3: oklch(0.769 0.188 70.08);
  --chart-4: oklch(0.627 0.265 303.9);
  --chart-5: oklch(0.645 0.246 16.439);
  --sidebar: oklch(0.205 0 0);
  --sidebar-foreground: oklch(0.985 0 0);
  --sidebar-primary: oklch(0.488 0.243 264.376);
  --sidebar-primary-foreground: oklch(0.985 0 0);
  --sidebar-accent: oklch(0.269 0 0);
  --sidebar-accent-foreground: oklch(0.985 0 0);
  --sidebar-border: oklch(1 0 0 / 10%);
  --sidebar-ring: oklch(0.556 0 0);
}

/* ═══════════════════════════════════════════════
   Anniversary Website — Custom Styles
   ═══════════════════════════════════════════════ */

/* Centering Fix (CRITICAL) */
html, body {
  width: 100%;
  min-height: 100%;
  margin: 0;
  padding: 0;
}

html {
  scroll-behavior: smooth;
}

body {
  font-family: 'Lato', sans-serif;
  background-color: #fdf0f3;
  color: #2d1b2e;
  overflow-x: hidden;
}

/* Anniversary CSS Variables */
:root {
  --rose: #c9748f;
  --rose-light: #f2c4ce;
  --blush: #fdf0f3;
  --gold: #c8a97a;
  --gold-light: #f5e6d3;
  --deep: #2d1b2e;
  --petal: #f9e5ea;
}

.font-display {
  font-family: 'Cormorant Garamond', serif;
}

.font-script {
  font-family: 'Great Vibes', cursive;
}

/* Petals animation */
@keyframes petalFall {
  0% { transform: translateY(-10vh) rotate(0deg) translateX(0); opacity: 1; }
  50% { transform: translateY(50vh) rotate(180deg) translateX(60px); opacity: 0.8; }
  100% { transform: translateY(110vh) rotate(360deg) translateX(-30px); opacity: 0; }
}

.petal {
  position: fixed;
  top: -20px;
  animation: petalFall linear infinite;
  pointer-events: none;
  z-index: 0;
  font-size: 1.2rem;
}

/* Custom scrollbar */
::-webkit-scrollbar {
  width: 6px;
}
::-webkit-scrollbar-track {
  background: var(--petal);
}
::-webkit-scrollbar-thumb {
  background: var(--rose-light);
  border-radius: 3px;
}
::-webkit-scrollbar-thumb:hover {
  background: var(--rose);
}

/* Photo grid hover effects */
.photo-slot {
  transition: transform 0.3s ease, box-shadow 0.3s ease;
}
.photo-slot:hover {
  transform: scale(1.03) rotate(1deg);
  box-shadow: 0 20px 40px rgba(201, 116, 143, 0.25);
}

/* Decorative divider */
.divider {
  display: flex;
  align-items: center;
  gap: 1rem;
  margin: 2rem 0;
}
.divider::before,
.divider::after {
  content: '';
  flex: 1;
  height: 1px;
  background: linear-gradient(to right, transparent, var(--rose-light), transparent);
}

/* Heart pulse animation */
@keyframes heartbeat {
  0%, 100% { transform: scale(1); }
  14% { transform: scale(1.15); }
  28% { transform: scale(1); }
  42% { transform: scale(1.1); }
  56% { transform: scale(1); }
}
.heartbeat {
  animation: heartbeat 2s ease-in-out infinite;
  display: inline-block;
}

/* Shimmer effect for gold text */
@keyframes shimmer {
  0% { background-position: -200% center; }
  100% { background-position: 200% center; }
}
.gold-shimmer {
  background: linear-gradient(90deg, var(--gold), #e8d5a3, var(--gold), #c8a97a);
  background-size: 200% auto;
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;
  background-clip: text;
  animation: shimmer 4s linear infinite;
}

/* Nav link style */
.nav-link {
  position: relative;
  transition: color 0.3s;
}
.nav-link::after {
  content: '';
  position: absolute;
  bottom: -4px;
  left: 0;
  right: 0;
  height: 1px;
  background: var(--rose);
  transform: scaleX(0);
  transition: transform 0.3s;
}
.nav-link:hover::after,
.nav-link.active::after {
  transform: scaleX(1);
}

/* Frosted glass */
.glass {
  background: rgba(255, 255, 255, 0.6);
  backdrop-filter: blur(12px);
  -webkit-backdrop-filter: blur(12px);
  border: 1px solid rgba(255, 255, 255, 0.5);
}

/* Letter / quote style */
.letter-paper {
  background: rgba(255, 255, 255, 0.8);
  border-left: 3px solid var(--rose-light);
  position: relative;
}
.letter-paper::before {
  content: '"';
  position: absolute;
  top: -20px;
  left: 20px;
  font-size: 6rem;
  color: var(--rose-light);
  font-family: 'Cormorant Garamond', serif;
  line-height: 1;
}

/* Timeline styles */
.timeline-line {
  position: absolute;
  left: 50%;
  top: 0;
  bottom: 0;
  width: 2px;
  background: linear-gradient(to bottom, transparent, var(--rose-light), var(--rose), var(--rose-light), transparent);
  transform: translateX(-50%);
}

@layer base {
  * {
    @apply border-border outline-ring/50;
  }
  body {
    @apply bg-background text-foreground;
  }
}
