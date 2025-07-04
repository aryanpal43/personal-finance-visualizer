# Money Glimpse Visualizer

A modern, interactive personal finance dashboard to track your income and expenses with beautiful visualizations. Built with React, TypeScript, Vite, shadcn-ui, and Tailwind CSS.

---

## Table of Contents
- [Overview](#overview)
- [Features](#features)
- [UI & Design System](#ui--design-system)
- [Getting Started](#getting-started)
- [Tech Stack](#tech-stack)
- [Deployment](#deployment)

---

## Overview

**Money Glimpse Visualizer** helps you manage your personal finances by allowing you to add, edit, and delete transactions, and instantly see summaries and visual breakdowns of your financial activity. The app is designed for clarity, speed, and a delightful user experience.

---

## Features

### Dashboard
- **Main UI container**: Brings together all features in a responsive layout.
- **Personal Finance Visualizer**: Title and subtitle for context.
- **Grid layout**: Separates form/charts and summary/transactions for clarity.

### Transaction Form
- **Add/Edit Transactions**: Input amount, description, category, date, and type (income/expense).
- **Category selection**: Choose from common categories (Food, Bills, Shopping, etc.).
- **Date picker**: Modern calendar UI for selecting transaction dates.
- **Form validation**: Ensures all required fields are filled.

### Transaction List
- **Recent Transactions**: View all transactions in a scrollable list.
- **Filter**: Toggle between all, income, or expense transactions.
- **Edit/Delete**: Quickly update or remove transactions.
- **Visual cues**: Color-coded amounts for income (green) and expenses (red).

### Summary Cards
- **Total Balance**: Shows your net balance (income - expenses).
- **Total Income/Expenses**: Summarizes all-time and this month's activity.
- **Dynamic calculation**: Updates instantly as you add/edit/delete transactions.

### Charts
- **Monthly Expenses Bar Chart**: Visualizes expenses over the last 6 months.
- **Expenses by Category Pie Chart**: See which categories you spend most on.
- **Responsive**: Charts adapt to screen size.

### Notifications
- **Toast notifications**: Feedback for add, update, and delete actions.
- **Accessible**: Uses shadcn-ui and Sonner for consistent, accessible toasts.

---

## UI & Design System

### Component-Driven
- **shadcn-ui**: All UI elements (Button, Card, Input, Select, etc.) are built as reusable, accessible React components.
- **Radix UI**: Underlying primitives for popovers, dialogs, tooltips, and more.
- **Custom hooks**: For toast notifications and mobile detection.

### Tailwind CSS
- **Utility-first**: All styling is done with Tailwind classes for rapid development and easy customization.
- **Custom theme**: Colors, gradients, and shadows are defined in `src/index.css` and extended in `tailwind.config.ts` for a finance-focused palette (income, expense, savings, etc.).
- **Dark mode**: Fully supported via Tailwind and CSS variables.
- **Responsive design**: Layouts adapt from mobile to desktop.

### Design Highlights
- **Gradient backgrounds**: Cards and primary UI elements use subtle gradients for a modern look.
- **Soft shadows and transitions**: Enhance depth and interactivity.
- **Accessible focus states**: All interactive elements have clear focus rings.
- **Animations**: Smooth transitions for cards, lists, and dialogs.

### Example UI Components
- **Button**: Multiple variants (default, outline, destructive, etc.) and sizes.
- **Card**: Used for grouping content, with gradient backgrounds and shadow.
- **Select/Input/Label**: Consistent form controls with accessible labels.
- **Popover/Calendar**: For date picking and dropdowns.
- **Badge**: For transaction categories.
- **Tabs, Accordion, Table, Sidebar, Drawer, etc.**: All styled and accessible.

---

## Getting Started

1. **Clone the repository**
   ```sh
   git clone <YOUR_GIT_URL>
   cd money-glimpse-visualizer
   ```
2. **Install dependencies**
   ```sh
   npm install
   ```
3. **Start the development server**
   ```sh
   npm run dev
   ```
4. **Open in your browser**
   Visit [http://localhost:8080](http://localhost:8080) (or the port shown in your terminal).

---

## Tech Stack
- **React** (with hooks)
- **TypeScript**
- **Vite** (for fast dev/build)
- **shadcn-ui** (component library)
- **Radix UI** (primitives)
- **Tailwind CSS** (utility-first styling)
- **Recharts** (data visualization)
- **date-fns** (date utilities)
- **Sonner** (toast notifications)

---

## Deployment

- **Vercel/Netlify**: Deploy as a static site (see Vite docs for details).
- **Custom domain**: Supported via Lovable or your hosting provider.
- **Production build**:
  ```sh
  npm run build
  ```
  Output will be in the `dist/` folder.

---

## License

MIT 