"use client";

import { useState } from "react";
import { motion } from "framer-motion";
import { 
  Globe, 
  CodeSlash, 
  Calendar, 
  Briefcase, 
  GameController, 
  Settings, 
  Thermometer, 
  Link,
  ChevronRight,
  ExternalLink
} from "@mui/icons-material";

const webProperties = [
  {
    id: '1',
    title: 'Splash Page',
    description: 'My splash page',
    url: 'https://msha.ke/benjaminjobprojects',
    icon: 'star',
    color: 'bg-orange-500',
    workInProgress: true,
  },
  {
    id: '2',
    title: 'My Webpage',
    description: "View my projects and portfolio",
    url: 'https://benjaminjob.wixsite.com/projects',
    icon: 'globe',
    color: 'bg-blue-500',
    workInProgress: true,
  },
  {
    id: '3',
    title: 'Software Releases',
    description: 'Track software releases',
    url: 'https://software.benjob.me',
    icon: 'code',
    color: 'bg-green-500',
    workInProgress: false,
  },
  {
    id: '4',
    title: 'Tech Events',
    description: 'Stay updated with tech events',
    url: 'https://events.benjob.me',
    icon: 'calendar',
    color: 'bg-purple-500',
    workInProgress: false,
  },
];

const shortcuts = [
  {
    id: 's1',
    title: 'AirFry Convert',
    description: 'Convert (fan) oven temps & times to air fryer',
    url: 'https://www.icloud.com/shortcuts/f021041cfa3040af8c6bc9f6fc3dd808',
    icon: 'thermometer',
    color: 'bg-red-500',
  },
];

const myProjects = [
  {
    id: 'mp1',
    title: 'My Projects Page',
    description: 'View all my project showcases',
    url: 'https://www.facebook.com/share/19w5dY7Mbz/',
    icon: 'briefcase',
    color: 'bg-indigo-600',
  },
];

const techSections = [
  {
    id: 'ts1',
    title: "Ben's Tech/AI & Memes",
    description: 'Exclusive XR/VR, games, TV & more - From BXR',
    url: 'https://fb.me/g/5hB6pZGyQ/R49fjzos',
    icon: 'gamecontroller',
    color: 'bg-blue-500',
  },
  {
    id: 'ts2',
    title: "Ben's Cutting Edge Tech/AI",
    description: 'XR (VR/AR/MR) and even more - BXR',
    url: 'https://www.facebook.com/share/g/19TuLjHCXj/',
    icon: 'settings',
    color: 'bg-purple-500',
  },
];

const socialLinks = [
  {
    id: 'li',
    title: 'LinkedIn',
    url: 'https://www.linkedin.com/in/benjaminjob',
    icon: 'linkedin',
    color: 'bg-blue-700',
  },
  {
    id: 'lt',
    title: 'All Links (LinkTree)',
    url: 'https://linktr.ee/benjaminjob',
    icon: 'link',
    color: 'bg-green-500',
  },
];

function getIcon(name: string) {
  switch(name) {
    case 'star': return <span>⭐</span>;
    case 'globe': return <Globe />;
    case 'code': return <CodeSlash />;
    case 'calendar': return <Calendar />;
    case 'briefcase': return <Briefcase />;
    case 'gamecontroller': return <GameController />;
    case 'settings': return <Settings />;
    case 'thermometer': return <Thermometer />;
    case 'link': return <Link />;
    default: return <Globe />;
  }
}

function LinkCard({ item }: { item: any }) {
  return (
    <motion.a
      href={item.url}
      target="_blank"
      rel="noopener noreferrer"
      initial={{ opacity: 0, y: 10 }}
      animate={{ opacity: 1, y: 0 }}
      whileHover={{ scale: 1.02 }}
      whileTap={{ scale: 0.98 }}
      className={`${item.color} rounded-xl p-4 text-white flex items-center gap-4 cursor-pointer`}
    >
      <div className="w-10 h-10 rounded-lg bg-white/20 flex items-center justify-center">
        {getIcon(item.icon)}
      </div>
      <div className="flex-1">
        <h3 className="font-semibold">{item.title}</h3>
        <p className="text-white/80 text-sm">{item.description}</p>
      </div>
      <ExternalLink className="w-5 h-5 opacity-60" />
    </motion.a>
  );
}

export default function Home() {
  const [showWorkInProgress, setShowWorkInProgress] = useState(false);
  const [showLinkedIn, setShowLinkedIn] = useState(true);

  const projectItems = webProperties.filter(item => item.workInProgress);
  const appItems = webProperties.filter(item => !item.workInProgress);

  return (
    <main className="min-h-screen bg-gray-50 p-6">
      <div className="max-w-md mx-auto">
        {/* Header */}
        <motion.div 
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          className="mb-6"
        >
          <h1 className="text-3xl font-bold text-gray-900 mb-2">Ben's Hub</h1>
          <p className="text-gray-600">Choose what you'd like to view</p>
        </motion.div>

        {/* Social Links */}
        <div className="mb-6 space-y-3">
          {socialLinks.map((item, i) => (
            <LinkCard key={item.id} item={item} />
          ))}
        </div>

        {/* Work in Progress Toggle */}
        <button 
          onClick={() => setShowWorkInProgress(!showWorkInProgress)}
          className="w-full mb-4 flex items-center justify-between p-3 bg-amber-100 rounded-lg text-amber-800"
        >
          <span>Show work in progress</span>
          <span className="text-xl">{showWorkInProgress ? '👁️' : '👁️‍🗨️'}</span>
        </button>

        {/* Apps Section */}
        <div className="mb-6">
          <h2 className="text-sm font-semibold text-gray-500 uppercase tracking-wide mb-3">Apps</h2>
          <div className="space-y-3">
            {appItems.map((item, i) => (
              <LinkCard key={item.id} item={item} />
            ))}
          </div>
        </div>

        {/* My Projects */}
        <div className="mb-6">
          <h2 className="text-sm font-semibold text-gray-500 uppercase tracking-wide mb-3">My Projects</h2>
          <div className="space-y-3">
            {myProjects.map((item, i) => (
              <LinkCard key={item.id} item={item} />
            ))}
          </div>
        </div>

        {/* Tech */}
        <div className="mb-6">
          <h2 className="text-sm font-semibold text-gray-500 uppercase tracking-wide mb-3">Tech</h2>
          <div className="space-y-3">
            {techSections.map((item, i) => (
              <LinkCard key={item.id} item={item} />
            ))}
          </div>
        </div>

        {/* Shortcuts */}
        {shortcuts.length > 0 && (
          <div className="mb-6">
            <h2 className="text-sm font-semibold text-gray-500 uppercase tracking-wide mb-3">Shortcuts</h2>
            <div className="space-y-3">
              {shortcuts.map((item, i) => (
                <LinkCard key={item.id} item={item} />
              ))}
            </div>
          </div>
        )}
      </div>
    </main>
  );
}
