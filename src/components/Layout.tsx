"use client";

import { useState, useEffect, createContext, useContext, ReactNode } from "react";
import { Moon, Sun, MapPin, Mail } from "lucide-react";

interface ThemeContextType {
  isDark: boolean;
  toggle: () => void;
}

const ThemeContext = createContext<ThemeContextType>({ isDark: true, toggle: () => {} });

export function useTheme() {
  return useContext(ThemeContext);
}

interface LayoutProps {
  children: ReactNode;
  title: string;
  subtitle: string;
}

// Ben's profile info
const PROFILE = {
  name: "Benjamin Job",
  location: "Maville, France",
  email: "Benjamin.job@gwern.co.uk",
  botEmail: "bensbot@agentmail.to",
  gravatarUrl: "https://www.gravatar.com/avatar/46e5d1ddbdadfadf700f0c15bf6591e3?default=mp&s=200",
};

export default function Layout({ children, title, subtitle }: LayoutProps) {
  const [isDark, setIsDark] = useState(true);
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
    const saved = localStorage.getItem("theme");
    if (saved) setIsDark(saved === "dark");
  }, []);

  const toggle = () => {
    const next = !isDark;
    setIsDark(next);
    localStorage.setItem("theme", next ? "dark" : "light");
  };

  if (!mounted) return null;

  return (
    <ThemeContext.Provider value={{ isDark, toggle }}>
      <div className={`min-h-screen ${isDark ? "bg-gray-950" : "bg-gray-100"} transition-colors duration-500`}>
        {/* Animated background */}
        <div className={`fixed inset-0 -z-10 ${isDark ? "bg-[radial-gradient(ellipse_at_top,_var(--tw-gradient-stops))] from-gray-900 via-gray-950 to-black" : "bg-[radial-gradient(ellipse_at_top,_var(--tw-gradient-stops))] from-gray-100 via-gray-50 to-white"}`} />
        
        {/* Glass header */}
        <header className={`sticky top-0 z-50 ${isDark ? "bg-gray-900/70 border-gray-800" : "bg-white/70 border-gray-200"} backdrop-blur-xl border-b`}>
          <div className="max-w-5xl mx-auto px-6 py-4">
            {/* Top row: Title + Profile + Theme */}
            <div className="flex items-center justify-between gap-4">
              {/* Left: Title */}
              <div className="flex-1 min-w-0">
                <h1 className={`text-xl font-bold truncate ${isDark ? "text-white" : "text-gray-900"}`}>{title}</h1>
                <p className={`text-sm truncate ${isDark ? "text-gray-400" : "text-gray-500"}`}>{subtitle}</p>
              </div>

              {/* Right: Profile + Theme */}
              <div className="flex items-center gap-3 flex-shrink-0">
                <img 
                  src={PROFILE.gravatarUrl} 
                  alt={PROFILE.name}
                  className="w-10 h-10 rounded-full border-2 border-gray-500"
                />
                <div className={`hidden sm:block ${isDark ? "text-gray-300" : "text-gray-700"}`}>
                  <p className="text-sm font-semibold">{PROFILE.name}</p>
                  <div className="flex items-center gap-1 text-xs text-muted-foreground">
                    <MapPin size={10} />
                    <span>{PROFILE.location}</span>
                  </div>
                </div>
                <button
                  onClick={toggle}
                  className={`p-2.5 rounded-xl transition-all duration-300 ${
                    isDark 
                      ? "bg-gray-800/60 hover:bg-gray-700/80 text-yellow-400 border border-gray-700/50" 
                      : "bg-white/60 hover:bg-white/90 text-indigo-600 border border-gray-200/50"
                  } backdrop-blur-md shadow-lg`}
                  aria-label="Toggle theme"
                >
                  {isDark ? <Moon size={18} /> : <Sun size={18} />}
                </button>
              </div>
            </div>
          </div>
          
          {/* Email row */}
          <div className={`max-w-5xl mx-auto px-6 pb-3 flex justify-center gap-6 text-xs ${isDark ? "text-gray-500" : "text-gray-400"}`}>
            <a href={`mailto:${PROFILE.email}`} className="flex items-center gap-1 hover:text-primary transition-colors">
              <Mail size={12} />
              {PROFILE.email}
            </a>
            <a href={`mailto:${PROFILE.botEmail}`} className="flex items-center gap-1 hover:text-primary transition-colors">
              <Mail size={12} />
              {PROFILE.botEmail}
            </a>
          </div>
        </header>
        
        {/* Content with glass cards */}
        <main className="max-w-5xl mx-auto px-6 py-8">
          <div className={isDark ? "space-y-6" : "space-y-6"}>
            {children}
          </div>
        </main>
      </div>
    </ThemeContext.Provider>
  );
}

export { ThemeContext };
