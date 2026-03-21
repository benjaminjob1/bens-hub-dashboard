"use client";

import { useState } from "react";
import { motion } from "framer-motion";
import Layout from "../components/Layout";
import { useTheme } from "../components/Layout";

const apps = [
  {
    id: '1',
    title: 'Software Releases',
    description: 'Track software releases',
    url: 'https://software.benjob.me',
    icon: '💻',
    color: 'bg-gradient-to-br from-green-400 to-green-600',
  },
  {
    id: '2',
    title: 'Tech Events',
    description: 'Stay updated with tech events',
    url: 'https://events.benjob.me',
    icon: '📅',
    color: 'bg-gradient-to-br from-purple-400 to-purple-600',
  },
  {
    id: '3',
    title: 'Stocks',
    description: 'Tech stock dashboard',
    url: 'https://stocks.benjob.me',
    icon: '📈',
    color: 'bg-gradient-to-br from-emerald-400 to-emerald-600',
  },
];

const workInProgress = [
  {
    id: 'w1',
    title: 'Splash Page',
    description: 'My splash page',
    url: 'https://msha.ke/benjaminjobprojects',
    icon: '✨',
    color: 'bg-gradient-to-br from-orange-400 to-orange-600',
  },
  {
    id: 'w2',
    title: 'My Webpage',
    description: "View my projects and portfolio",
    url: 'https://benjaminjob.wixsite.com/projects',
    icon: '🌐',
    color: 'bg-gradient-to-br from-blue-400 to-blue-600',
  },
];

const myProjects = [
  {
    id: 'mp1',
    title: 'My Projects Page',
    description: 'View all my project showcases',
    url: 'https://www.facebook.com/share/19w5dY7Mbz/',
    icon: '💼',
    color: 'bg-gradient-to-br from-indigo-500 to-indigo-700',
  },
];

const techSections = [
  {
    id: 'ts1',
    title: "Ben's Tech/AI & Memes",
    description: 'Exclusive XR/VR, games, TV & more - From BXR',
    url: 'https://fb.me/g/5hB6pZGyQ/R49fjzos',
    icon: '🎮',
    color: 'bg-gradient-to-br from-blue-400 to-purple-600',
  },
  {
    id: 'ts2',
    title: "Ben's Cutting Edge Tech/AI",
    description: 'XR (VR/AR/MR) and even more - BXR',
    url: 'https://www.facebook.com/share/g/19TuLjHCXj/',
    icon: '⚙️',
    color: 'bg-gradient-to-br from-purple-400 to-pink-600',
  },
];

const shortcuts = [
  {
    id: 's1',
    title: 'AirFry Convert',
    description: 'Convert (fan) oven temps & times to air fryer',
    url: 'https://www.icloud.com/shortcuts/f021041cfa3040af8c6bc9f6fc3dd808',
    icon: '🌡️',
    color: 'bg-gradient-to-br from-red-400 to-red-600',
  },
  {
    id: 's2',
    title: 'Quick Links',
    description: 'App Store • TestFlight',
    url: '#',
    icon: '⚡',
    color: 'bg-gradient-to-br from-yellow-400 to-orange-500',
    isSection: true,
  },
];

const community = [
  {
    id: 'c1',
    title: 'Discord Community',
    description: 'Join our Discord community for discussions and support',
    url: 'https://discord.gg/7wyK2Gcw2',
    icon: '💬',
    color: 'bg-gradient-to-br from-indigo-500 to-purple-600',
  },
];

const socialLinks = [
  {
    id: 'li',
    title: 'LinkedIn',
    url: 'https://www.linkedin.com/in/benjaminjob',
    icon: '💼',
    color: 'bg-gradient-to-br from-blue-600 to-blue-800',
  },
  {
    id: 'lt',
    title: 'All Links (LinkTree)',
    url: 'https://linktr.ee/benjaminjob',
    icon: '🔗',
    color: 'bg-gradient-to-br from-green-400 to-green-600',
  },
];

function LinkCard({ item }: { item: any }) {
  const { isDark } = useTheme();
  
  return (
    <motion.a
      href={item.url}
      target="_blank"
      rel="noopener noreferrer"
      initial={{ opacity: 0, y: 10 }}
      animate={{ opacity: 1, y: 0 }}
      whileHover={{ scale: 1.02, y: -2 }}
      whileTap={{ scale: 0.98 }}
      className={`${item.color} relative overflow-hidden rounded-2xl p-4 text-white flex items-center gap-4 cursor-pointer transition-all duration-300 shadow-lg hover:shadow-xl`}
    >
      <div className="absolute inset-0 bg-white/10 backdrop-blur-sm opacity-0 hover:opacity-100 transition-opacity" />
      <div className="relative w-12 h-12 rounded-xl bg-white/20 flex items-center justify-center text-2xl shadow-inner">
        {item.icon}
      </div>
      <div className="relative flex-1">
        <h3 className="font-semibold text-lg">{item.title}</h3>
        <p className="text-white/80 text-sm">{item.description}</p>
      </div>
      <span className="relative opacity-60 text-xl">↗</span>
    </motion.a>
  );
}

function GlassCard({ title, children }: { title: string; children: React.ReactNode }) {
  const { isDark } = useTheme();
  
  return (
    <div className={`mb-6 ${isDark ? "glass-card glass-card-dark" : "glass-card glass-card-light"}`}>
      <div className="p-5">
        <h2 className={`text-sm font-semibold ${isDark ? "text-gray-400" : "text-gray-500"} uppercase tracking-wider mb-4`}>{title}</h2>
        <div className="space-y-3">
          {children}
        </div>
      </div>
    </div>
  );
}

export default function Home() {
  const [showWorkInProgress, setShowWorkInProgress] = useState(false);
  const { isDark } = useTheme();

  return (
    <Layout title="Ben's Hub" subtitle="Choose what you'd like to view">
      {/* Social Links */}
      <GlassCard title="Connect">
        {socialLinks.map((item) => (
          <LinkCard key={item.id} item={item} />
        ))}
      </GlassCard>

      {/* Work in Progress Toggle */}
      <motion.button 
        onClick={() => setShowWorkInProgress(!showWorkInProgress)}
        whileHover={{ scale: 1.01 }}
        whileTap={{ scale: 0.99 }}
        className={`w-full mb-2 flex items-center justify-between p-4 rounded-xl transition-all duration-300 ${
          isDark 
            ? "bg-amber-500/20 hover:bg-amber-500/30 text-amber-400 border border-amber-500/30" 
            : "bg-amber-100 hover:bg-amber-200 text-amber-700 border border-amber-200"
        }`}
      >
        <span className="font-medium">Show work in progress</span>
        <span className="text-xl">{showWorkInProgress ? '🔓' : '🔒'}</span>
      </motion.button>

      {/* Work in Progress Items - show right after button */}
      {showWorkInProgress && workInProgress.length > 0 && (
        <motion.div
          initial={{ opacity: 0, height: 0 }}
          animate={{ opacity: 1, height: "auto" }}
          exit={{ opacity: 0, height: 0 }}
          className="mb-4"
        >
          <GlassCard title="🚧 In Development">
            {workInProgress.map((item) => (
              <LinkCard key={item.id} item={item} />
            ))}
          </GlassCard>
        </motion.div>
      )}

      {/* Apps Section */}
      <GlassCard title="Dashboards">
        {apps.map((item) => (
          <LinkCard key={item.id} item={item} />
        ))}
      </GlassCard>

      {/* My Projects */}
      <GlassCard title="My Projects">
        {myProjects.map((item) => (
          <LinkCard key={item.id} item={item} />
        ))}
      </GlassCard>

      {/* Tech Sections */}
      <GlassCard title="Tech">
        {techSections.map((item) => (
          <LinkCard key={item.id} item={item} />
        ))}
      </GlassCard>

      {/* Shortcuts */}
      <GlassCard title="Shortcuts">
        {shortcuts.map((item) => (
          <LinkCard key={item.id} item={item} />
        ))}
      </GlassCard>

      {/* Community */}
      <GlassCard title="Community">
        {community.map((item) => (
          <LinkCard key={item.id} item={item} />
        ))}
      </GlassCard>
    </Layout>
  );
}
