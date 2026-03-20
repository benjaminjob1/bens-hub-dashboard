"use client";

import { useState, useEffect } from "react";
import { motion } from "framer-motion";
import { 
  Clock, 
  Calendar, 
  Cloud, 
  MapPin, 
  ExternalLink, 
  Bot, 
  Server, 
  HardDrive,
  Activity,
  Link2,
  Zap
} from "lucide-react";

const links = [
  { name: "Stats", url: "https://benjob.me/stats", icon: Activity, desc: "Bot statistics & metrics" },
  { name: "Stocks", url: "https://stocks.benjob.me", icon: Zap, desc: "Stock watchlist" },
  { name: "Website", url: "https://benjob.me/website", icon: Globe, desc: "Portfolio site" },
  { name: "Commands", url: "https://benjob.me/stats/commands", icon: Bot, desc: "Bot commands" },
];

function Globe({ className }: { className?: string }) {
  return (
    <svg className={className} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
      <circle cx="12" cy="12" r="10" />
      <path d="M2 12h20M12 2a15.3 15.3 0 0 1 4 10 15.3 15.3 0 0 1-4 10 15.3 15.3 0 0 1-4-10 15.3 15.3 0 0 1 4-10z" />
    </svg>
  );
}

function TimeWidget() {
  const [time, setTime] = useState({ time: "", date: "" });

  useEffect(() => {
    const updateTime = () => {
      const now = new Date();
      setTime({
        time: now.toLocaleTimeString("en-GB", { hour: "2-digit", minute: "2-digit", second: "2-digit" }),
        date: now.toLocaleDateString("en-GB", { weekday: "long", day: "numeric", month: "long", year: "numeric" }),
      });
    };
    updateTime();
    const interval = setInterval(updateTime, 1000);
    return () => clearInterval(interval);
  }, []);

  return (
    <div className="bg-card rounded-xl p-6 border border-border card-hover glow">
      <div className="flex items-center gap-3 mb-2">
        <Clock className="w-5 h-5 text-primary" />
        <span className="text-muted-foreground text-sm">Current Time</span>
      </div>
      <div className="text-4xl font-bold font-mono tracking-wider">{time.time}</div>
      <div className="text-muted-foreground mt-1">{time.date}</div>
    </div>
  );
}

function WeatherWidget() {
  const [weather, setWeather] = useState<{ temp: number; condition: string; location: string } | null>(null);

  useEffect(() => {
    // Mock weather data - in production, fetch from weather API
    setWeather({
      temp: 12,
      condition: "Partly Cloudy",
      location: "Paris, France",
    });
  }, []);

  if (!weather) return null;

  return (
    <div className="bg-card rounded-xl p-6 border border-border card-hover glow-green">
      <div className="flex items-center gap-3 mb-2">
        <Cloud className="w-5 h-5 text-accent" />
        <span className="text-muted-foreground text-sm">Weather</span>
      </div>
      <div className="text-4xl font-bold">{weather.temp}°C</div>
      <div className="text-muted-foreground">{weather.condition}</div>
      <div className="flex items-center gap-1 text-xs text-muted-foreground mt-2">
        <MapPin className="w-3 h-3" />
        {weather.location}
      </div>
    </div>
  );
}

function SystemStatus() {
  const [status, setStatus] = useState<{ openclaw: string; backup: string } | null>(null);

  useEffect(() => {
    // Mock status - in production, fetch from API
    setStatus({
      openclaw: "online",
      backup: "OK",
    });
  }, []);

  return (
    <div className="bg-card rounded-xl p-6 border border-border card-hover">
      <div className="flex items-center gap-3 mb-4">
        <Server className="w-5 h-5 text-primary" />
        <span className="font-semibold">System Status</span>
      </div>
      <div className="space-y-3">
        <div className="flex items-center justify-between">
          <div className="flex items-center gap-2">
            <Bot className="w-4 h-4 text-muted-foreground" />
            <span className="text-sm">OpenClaw</span>
          </div>
          <span className="text-accent text-sm flex items-center gap-1">
            <span className="w-2 h-2 bg-accent rounded-full animate-pulse" />
            Online
          </span>
        </div>
        <div className="flex items-center justify-between">
          <div className="flex items-center gap-2">
            <HardDrive className="w-4 h-4 text-muted-foreground" />
            <span className="text-sm">Backup</span>
          </div>
          <span className="text-accent text-sm flex items-center gap-1">
            <span className="w-2 h-2 bg-accent rounded-full" />
            OK
          </span>
        </div>
      </div>
    </div>
  );
}

function QuickLinks() {
  return (
    <div className="bg-card rounded-xl p-6 border border-border card-hover">
      <div className="flex items-center gap-3 mb-4">
        <Link2 className="w-5 h-5 text-primary" />
        <span className="font-semibold">Quick Links</span>
      </div>
      <div className="grid grid-cols-2 gap-3">
        {links.map((link, i) => (
          <motion.a
            key={link.name}
            href={link.url}
            target="_blank"
            rel="noopener noreferrer"
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: i * 0.1 }}
            className="flex items-center gap-2 p-3 rounded-lg bg-secondary hover:bg-secondary/80 transition-colors group"
          >
            <link.icon className="w-4 h-4 text-primary" />
            <span className="text-sm font-medium">{link.name}</span>
            <ExternalLink className="w-3 h-3 ml-auto text-muted-foreground opacity-0 group-hover:opacity-100 transition-opacity" />
          </motion.a>
        ))}
      </div>
    </div>
  );
}

export default function Home() {
  return (
    <main className="min-h-screen p-6 md:p-12">
      <div className="max-w-6xl mx-auto">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          className="mb-8"
        >
          <h1 className="text-4xl font-bold mb-2">Ben&apos;s Hub</h1>
          <p className="text-muted-foreground">Personal dashboard & command center</p>
        </motion.div>

        {/* Main Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {/* Time Widget */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.1 }}
          >
            <TimeWidget />
          </motion.div>

          {/* Weather Widget */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2 }}
          >
            <WeatherWidget />
          </motion.div>

          {/* System Status */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.3 }}
            className="lg:col-span-2"
          >
            <SystemStatus />
          </motion.div>

          {/* Quick Links */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.4 }}
            className="lg:col-span-2"
          >
            <QuickLinks />
          </motion.div>

          {/* Quick Actions - Placeholder */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.5 }}
            className="lg:col-span-2"
          >
            <div className="bg-card rounded-xl p-6 border border-border card-hover">
              <div className="flex items-center gap-3 mb-4">
                <Zap className="w-5 h-5 text-primary" />
                <span className="font-semibold">Quick Actions</span>
              </div>
              <div className="flex flex-wrap gap-2">
                <button className="px-4 py-2 bg-primary text-primary-foreground rounded-lg text-sm hover:bg-primary/90 transition-colors">
                  Run Backup
                </button>
                <button className="px-4 py-2 bg-secondary text-secondary-foreground rounded-lg text-sm hover:bg-secondary/80 transition-colors">
                  Restart Gateway
                </button>
                <button className="px-4 py-2 bg-secondary text-secondary-foreground rounded-lg text-sm hover:bg-secondary/80 transition-colors">
                  View Logs
                </button>
              </div>
            </div>
          </motion.div>
        </div>

        {/* Footer */}
        <motion.footer
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.6 }}
          className="mt-12 text-center text-muted-foreground text-sm"
        >
          <p>Last updated: {new Date().toLocaleString("en-GB")}</p>
        </motion.footer>
      </div>
    </main>
  );
}
