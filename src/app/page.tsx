"use client";

import { useState } from "react";
import { motion } from "framer-motion";
import { 
  Sparkles, 
  Globe, 
  Code, 
  Calendar, 
  Thermometer, 
  Briefcase, 
  Gamepad2, 
  Settings, 
  Link, 
  Zap, 
  MessageCircle, 
  ChevronRight,
  Linkedin,
  Facebook,
  SwapHorizontal
} from "lucide-react";

const webProperties = [
  {
    id: '1',
    title: 'Splash Page',
    description: 'My splash page',
    url: 'https://msha.ke/benjaminjobprojects',
    icon: Sparkles,
    color: 'bg-orange-500',
    workInProgress: true,
  },
  {
    id: '2',
    title: 'My Webpage',
    description: "View my projects and portfolio",
    url: 'https://benjaminjob.wixsite.com/projects',
    icon: Globe,
    color: 'bg-blue-500',
    workInProgress: true,
  },
  {
    id: '3',
    title: 'Software Releases',
    description: 'Track software releases',
    url: 'https://software.benjob.me',
    icon: Code,
    color: 'bg-green-500',
    workInProgress: false,
  },
  {
    id: '4',
    title: 'Tech Events',
    description: 'Stay updated with tech events',
    url: 'https://events.benjob.me',
    icon: Calendar,
    color: 'bg-purple-500',
    workInProgress: false,
  },
  {
    id: '5',
    title: 'Stocks',
    description: 'Track stocks and market',
    url: 'https://stocks.benjob.me',
    icon: Globe,
    color: 'bg-emerald-500',
    workInProgress: false,
  },
];

const shortcuts = [
  {
    id: 's1',
    title: 'AirFry Convert',
    description: 'Convert (fan) oven temps & times to air fryer',
    url: 'https://www.icloud.com/shortcuts/f021041cfa3040af8c6bc9f6fc3dd808',
    icon: Thermometer,
    color: 'bg-red-500',
  },
];

const myProjects = [
  {
    id: 'mp1',
    title: 'My Projects Page',
    description: 'View all my project showcases',
    url: 'https://www.facebook.com/share/19w5dY7Mbz/',
    icon: Briefcase,
    color: 'bg-indigo-600',
  },
];

const techSections = [
  {
    id: 'ts1',
    title: "Ben's Tech/AI & Memes",
    description: 'Exclusive XR/VR, games, TV & more - From BXR',
    url: 'https://fb.me/g/5hB6pZGyQ/R49fjzos',
    icon: Gamepad2,
    color: 'bg-blue-500',
  },
  {
    id: 'ts2',
    title: "Ben's Cutting Edge Tech/AI",
    description: 'XR (VR/AR/MR) and even more - BXR',
    url: 'https://www.facebook.com/share/g/19TuLjHCXj/',
    icon: Settings,
    color: 'bg-purple-500',
  },
];

function LinkCard({ item, showWip = false }: { item: any; showWip?: boolean }) {
  const Icon = item.icon;
  
  return (
    <motion.a
      href={item.url}
      target="_blank"
      rel="noopener noreferrer"
      initial={{ opacity: 0, y: 10 }}
      animate={{ opacity: 1, y: 0 }}
      whileHover={{ scale: 1.02 }}
      whileTap={{ scale: 0.98 }}
      className={`block ${item.color} rounded-2xl p-5 text-white shadow-lg`}
    >
      <div className="flex items-center gap-4">
        <div className="w-12 h-12 rounded-xl bg-white/20 flex items-center justify-center">
          <Icon className="w-6 h-6" />
        </div>
        <div className="flex-1">
          <div className="flex items-center gap-2">
            <h3 className="font-semibold text-lg">{item.title}</h3>
            {showWip && (
              <span className="px-2 py-0.5 bg-amber-400/80 text-amber-900 text-xs font-medium rounded-full">
                WIP
              </span>
            )}
          </div>
          <p className="text-white/80 text-sm">{item.description}</p>
        </div>
        <ChevronRight className="w-5 h-5 opacity-60" />
      </div>
    </motion.a>
  );
}

function SocialButton({ item, isLinkedIn }: { item: any; isLinkedIn: boolean }) {
  const Icon = item.icon;
  
  return (
    <motion.a
      href={item.url}
      target="_blank"
      rel="noopener noreferrer"
      whileHover={{ scale: 1.02 }}
      whileTap={{ scale: 0.98 }}
      className={`flex items-center gap-2 px-4 py-2 rounded-full ${
        isLinkedIn ? 'bg-[#0077B5]' : 'bg-[#1877F2]'
      } text-white`}
    >
      <Icon className="w-5 h-5" />
      <span className="font-medium text-sm">{item.title}</span>
    </motion.a>
  );
}

export default function Home() {
  const [showWorkInProgress, setShowWorkInProgress] = useState(false);
  const [showLinkedIn, setShowLinkedIn] = useState(true);

  const projectItems = webProperties.filter(item => item.workInProgress);
  const appItems = webProperties.filter(item => !item.workInProgress);

  const linkedInProfile = "https://www.linkedin.com/in/benjaminjob";
  const facebookProfile = "https://facebook.com/benjaminjob25";

  return (
    <main className="min-h-screen bg-gray-900 p-4 sm:p-6">
      <div className="max-w-md mx-auto">
        {/* Header */}
        <motion.div 
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          className="mb-6"
        >
          <div className="flex items-start justify-between mb-4">
            <div className="flex-1">
              <h1 className="text-3xl font-bold text-white mb-2">Ben's Hub</h1>
              <p className="text-gray-400 text-sm">Choose what you'd like to view</p>
            </div>
            
            {/* Profile Section */}
            <div className="flex items-center gap-2">
              <button
                onClick={() => setShowLinkedIn(!showLinkedIn)}
                className="p-2 rounded-full bg-gray-800 hover:bg-gray-700 transition-colors"
              >
                <SwapHorizontal className="w-4 h-4 text-gray-400" />
              </button>
              
              <SocialButton 
                item={{ 
                  url: showLinkedIn ? linkedInProfile : facebookProfile,
                  title: showLinkedIn ? 'LinkedIn' : 'Facebook',
                  icon: showLinkedIn ? Linkedin : Facebook
                }}
                isLinkedIn={showLinkedIn}
              />
            </div>
          </div>
        </motion.div>

        {/* All Links Button */}
        <motion.div
          initial={{ opacity: 0, y: 10 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.1 }}
          className="mb-4"
        >
          <a
            href="https://linktr.ee/benjaminjob"
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center justify-center gap-2 bg-indigo-500 p-4 rounded-xl text-white font-semibold shadow-lg hover:bg-indigo-600 transition-colors"
          >
            <Link className="w-5 h-5" />
            All Links (LinkTree)
          </a>
        </motion.div>

        {/* Work in Progress Toggle */}
        <motion.div
          initial={{ opacity: 0, y: 10 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.15 }}
        >
          <button 
            onClick={() => setShowWorkInProgress(!showWorkInProgress)}
            className="w-full mb-4 flex items-center justify-between p-3 bg-gray-800 rounded-xl text-gray-300 hover:bg-gray-700 transition-colors"
          >
            <span className="flex items-center gap-2">
              <Settings className="w-5 h-5" />
              Show work in progress
            </span>
            <div className={`w-12 h-6 rounded-full p-1 transition-colors ${
              showWorkInProgress ? 'bg-blue-500' : 'bg-gray-600'
            }`}>
              <div className={`w-4 h-4 bg-white rounded-full transition-transform ${
                showWorkInProgress ? 'translate-x-6' : 'translate-x-0'
              }`} />
            </div>
          </button>
        </motion.div>

        {/* Projects Section */}
        {showWorkInProgress && projectItems.length > 0 && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: 'auto' }}
            exit={{ opacity: 0, height: 0 }}
            className="mb-6"
          >
            <h2 className="text-sm font-semibold text-gray-500 uppercase tracking-wide mb-3">Projects</h2>
            <div className="space-y-3">
              {projectItems.map((item) => (
                <LinkCard key={item.id} item={item} showWip />
              ))}
            </div>
          </motion.div>
        )}

        {/* Apps Section */}
        <motion.div
          initial={{ opacity: 0, y: 10 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.2 }}
          className="mb-6"
        >
          <h2 className="text-sm font-semibold text-gray-500 uppercase tracking-wide mb-3">Apps</h2>
          <div className="space-y-3">
            {appItems.map((item) => (
              <LinkCard key={item.id} item={item} />
            ))}
          </div>
        </motion.div>

        {/* My Projects */}
        <motion.div
          initial={{ opacity: 0, y: 10 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.25 }}
          className="mb-6"
        >
          <h2 className="text-sm font-semibold text-gray-500 uppercase tracking-wide mb-3">My Projects</h2>
          <div className="space-y-3">
            {myProjects.map((item) => (
              <LinkCard key={item.id} item={item} />
            ))}
          </div>
        </motion.div>

        {/* Tech */}
        <motion.div
          initial={{ opacity: 0, y: 10 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.3 }}
          className="mb-6"
        >
          <h2 className="text-sm font-semibold text-gray-500 uppercase tracking-wide mb-3">Tech</h2>
          <div className="space-y-3">
            {techSections.map((item) => (
              <LinkCard key={item.id} item={item} />
            ))}
          </div>
        </motion.div>

        {/* Shortcuts */}
        {shortcuts.length > 0 && (
          <motion.div
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.35 }}
            className="mb-6"
          >
            <h2 className="text-sm font-semibold text-gray-500 uppercase tracking-wide mb-3">Shortcuts</h2>
            <div className="space-y-3">
              {shortcuts.map((item) => (
                <LinkCard key={item.id} item={item} />
              ))}
            </div>
          </motion.div>
        )}

        {/* Quick Links Button */}
        <motion.div
          initial={{ opacity: 0, y: 10 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.4 }}
          className="mb-6"
        >
          <a
            href="#"
            className="block bg-green-500 p-5 rounded-2xl text-white shadow-lg"
          >
            <div className="flex items-center justify-center gap-2">
              <Zap className="w-6 h-6" />
              <span className="font-bold text-xl">Quick Links</span>
              <ChevronRight className="w-5 h-5" />
            </div>
            <p className="text-white/80 text-center mt-2 text-sm">
              Shortcuts • App Store • TestFlight
            </p>
          </a>
        </motion.div>

        {/* Community */}
        <motion.div
          initial={{ opacity: 0, y: 10 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.45 }}
        >
          <h2 className="text-sm font-semibold text-gray-500 uppercase tracking-wide mb-3">Community</h2>
          <LinkCard 
            item={{
              id: 'discord',
              title: 'Discord Community',
              description: 'Join our Discord community for discussions and support',
              url: 'https://discord.gg/vibecode',
              icon: MessageCircle,
              color: 'bg-indigo-600',
            }}
          />
        </motion.div>
      </div>
    </main>
  );
}
