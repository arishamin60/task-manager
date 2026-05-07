# Task Manager - Modern React Application

A beautiful, fully-featured task management application built with React 19, Vite, and Tailwind CSS. Features a glassmorphic design with smooth animations and complete task management capabilities.

## 🎯 Features

- ✅ **Add Tasks** - Create new tasks with validation (no blank tasks)
- ✅ **Edit Tasks** - Double-click any task to edit, save with Enter, cancel with Escape
- ✅ **Delete Tasks** - Remove individual tasks or clear all completed tasks at once
- ✅ **Filter Tasks** - View All, Active, or Completed tasks with visual indicators
- ✅ **Task Counter** - Real-time statistics showing total, active, and completed tasks
- ✅ **Local Storage** - All tasks automatically saved and restored on page reload
- ✅ **Responsive Design** - Optimized for mobile, tablet, and desktop screens
- ✅ **Glassmorphic UI** - Modern premium design with frosted glass effects and smooth animations
- ✅ **Keyboard Support** - Press Enter to add/save, Escape to cancel editing

## 🚀 Quick Start

### Prerequisites
- Node.js 18+ 
- pnpm (or npm/yarn)

### Installation

1. **Clone or extract the project**
   ```bash
   cd task-manager
   ```

2. **Install dependencies**
   ```bash
   pnpm install
   ```

3. **Start development server**
   ```bash
   pnpm dev
   ```

4. **Open in browser**
   - Navigate to `http://localhost:3000`
   - Start managing your tasks!

### Build for Production

```bash
pnpm build
```

Output will be in `dist/public/` directory.

## 📁 Project Structure

```
task-manager/
├── client/
│   ├── src/
│   │   ├── pages/
│   │   │   └── Home.tsx          # Main task manager component
│   │   ├── components/           # Reusable UI components
│   │   ├── App.tsx              # App router and layout
│   │   ├── main.tsx             # React entry point
│   │   └── index.css            # Global styles & design tokens
│   ├── public/                  # Static assets
│   └── index.html               # HTML template
├── server/
│   └── index.ts                 # Express server (optional)
├── shared/                      # Shared types and constants
├── package.json                 # Dependencies
├── vite.config.ts              # Vite configuration
├── vercel.json                 # Vercel deployment config
├── tsconfig.json               # TypeScript configuration
└── DEPLOYMENT_GUIDE.md         # Vercel deployment instructions
```

## 🎨 Design System

### Color Palette
- **Primary**: Soft Slate-Blue (#4f46e5)
- **Accent**: Warm Amber (#f59e0b) - for completion states
- **Secondary**: Muted Lavender (#e9d5ff)
- **Background**: Cream (#faf9f7)

### Typography
- **Display**: Poppins (Bold, 700 weight)
- **Body**: Inter (Regular, 400-600 weight)
- **Monospace**: IBM Plex Mono (for code)

### Effects
- Glassmorphic cards with backdrop blur
- Smooth gradient backgrounds
- Soft shadows and transitions
- Animated checkmarks and entrance effects

## 🔧 Technology Stack

- **React 19** - Latest React with hooks
- **Vite** - Ultra-fast build tool
- **TypeScript** - Type-safe development
- **Tailwind CSS 4** - Utility-first styling
- **Wouter** - Lightweight routing
- **Lucide React** - Beautiful icons
- **localStorage API** - Client-side persistence

## 📱 Responsive Breakpoints

- **Mobile**: < 640px (sm)
- **Tablet**: 640px - 1024px (md, lg)
- **Desktop**: > 1024px (xl, 2xl)

All components scale gracefully with:
- Adaptive font sizes
- Flexible spacing
- Touch-friendly buttons
- Optimized layouts

## 🌐 Browser Support

- Chrome/Edge 90+
- Firefox 88+
- Safari 14+
- Mobile browsers (iOS Safari, Chrome Mobile)

## 📦 Available Scripts

```bash
# Development
pnpm dev              # Start dev server with hot reload

# Production
pnpm build            # Build for production
pnpm preview          # Preview production build locally

# Code Quality
pnpm check            # TypeScript type checking
pnpm format           # Format code with Prettier
```

## 💾 Data Persistence

Tasks are automatically saved to browser's localStorage:
- **Storage Key**: `task-manager-tasks`
- **Format**: JSON array of task objects
- **Persistence**: Survives page reloads and browser restarts
- **Capacity**: ~5-10MB per domain (browser dependent)

### Task Object Structure
```typescript
interface Task {
  id: string;              // Unique identifier
  text: string;            // Task description
  completed: boolean;      // Completion status
  createdAt: number;       // Timestamp
}
```

## 🚀 Deployment

### Deploy to Vercel (Recommended)

See `DEPLOYMENT_GUIDE.md` for detailed instructions.

**Quick Deploy:**
```bash
npm i -g vercel
vercel
```

### Deploy to Other Platforms

The project can be deployed to any static hosting:
- Netlify
- GitHub Pages
- AWS S3 + CloudFront
- Firebase Hosting
- Any Node.js hosting

Build output: `dist/public/`

## 🔒 Security

- ✅ No backend dependencies
- ✅ No external API calls
- ✅ No user data collection
- ✅ All data stored locally
- ✅ No authentication required
- ✅ Safe for offline use

## ♿ Accessibility

- ✅ Keyboard navigation support
- ✅ ARIA labels on interactive elements
- ✅ High contrast text
- ✅ Focus indicators
- ✅ Semantic HTML structure
- ✅ Screen reader friendly

## 🎯 Future Enhancements

Potential features to add:
- [ ] Task priority levels (High/Medium/Low)
- [ ] Due dates and reminders
- [ ] Task categories/tags
- [ ] Dark mode toggle
- [ ] Export tasks (JSON/CSV)
- [ ] Drag-and-drop reordering
- [ ] Search functionality
- [ ] Recurring tasks
- [ ] Collaboration features
- [ ] Mobile app version

## 📝 License

MIT License - Feel free to use this project for personal or commercial purposes.

## 🤝 Contributing

Contributions are welcome! Feel free to:
- Report bugs
- Suggest features
- Submit pull requests
- Improve documentation

## 📞 Support

For issues or questions:
1. Check the `DEPLOYMENT_GUIDE.md` for common problems
2. Review the code comments
3. Check browser console for errors
4. Test in different browsers

## 🎉 Enjoy!

Start managing your tasks with style. This app is designed to be intuitive, beautiful, and productive.

Happy task managing! 🚀

---

**Version**: 2.0  
**Last Updated**: May 7, 2026  
**Built with ❤️ using React, Vite, and Tailwind CSS**
