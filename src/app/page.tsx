"use client";

import { useState } from "react";
import { motion } from "framer-motion";
import Layout from "../components/Layout";
import { useTheme } from "../components/Layout";

const recent = [
  {
    id: 'fb',
    title: 'Feedback Portal',
    description: 'Submit & view feedback on projects',
    url: 'https://feedback.benjob.me',
    icon: '💬',
    color: 'bg-gradient-to-br from-yellow-400 to-orange-500',
    tags: ['feedback', 'site', 'benjob', 'portal', 'input', 'comments', 'reviews', 'projects', 'suggestions', 'bugs', 'requests', 'user testing', 'opinion', 'interaction', 'form', 'contact', 'community feedback', 'project manager']
  },
  {
    id: 'ns',
    title: 'My Website',
    description: 'My portfolio & projects',
    url: 'https://benjob.me',
    icon: '🌐',
    color: 'bg-gradient-to-br from-blue-400 to-indigo-600',
    tags: ['portfolio', 'website', 'projects', 'personal', 'cv', 'resume', 'showcase', 'main', 'home', 'about me', 'biography', 'skills', 'experience', 'web developer', 'designer', 'work', 'identity', 'landing page', 'profile']
  },
];

const apps = [
  {
    id: 'fb-main',
    title: 'Feedback Portal',
    description: 'Submit & view feedback on projects',
    url: 'https://feedback.benjob.me',
    icon: '💬',
    color: 'bg-gradient-to-br from-yellow-400 to-orange-500',
    tags: ['feedback', 'site', 'benjob', 'portal', 'input', 'comments', 'reviews', 'projects', 'suggestions', 'bugs', 'requests', 'user testing', 'opinion', 'interaction', 'form', 'contact', 'community feedback', 'project manager']
  },
  {
    id: 'ns-main',
    title: 'My Website',
    description: 'My portfolio & projects',
    url: 'https://benjob.me',
    icon: '🌐',
    color: 'bg-gradient-to-br from-blue-400 to-indigo-600',
    tags: ['portfolio', 'website', 'projects', 'personal', 'cv', 'resume', 'showcase', 'main', 'home', 'about me', 'biography', 'skills', 'experience', 'web developer', 'designer', 'work', 'identity', 'landing page', 'profile']
  },
  {
    id: '1',
    title: 'Software Releases',
    description: 'Track software releases',
    url: 'https://software.benjob.me',
    icon: '💻',
    color: 'bg-gradient-to-br from-green-400 to-green-600',
    tags: ['software', 'releases', 'updates', 'tech', 'apps', 'versions', 'changelog', 'tracking', 'new software', 'ios updates', 'android updates', 'windows', 'macos', 'application', 'builds', 'beta', 'stable', 'release notes']
  },
  {
    id: '1b',
    title: 'Hardware Releases',
    description: 'Track hardware releases',
    url: 'https://hardware.benjob.me',
    icon: '🖥️',
    color: 'bg-gradient-to-br from-cyan-400 to-cyan-600',
    tags: ['hardware', 'releases', 'spec', 'tech', 'phones', 'tablets', 'devices', 'tracking', 'gadgets', 'specs', 'smartphones', 'laptops', 'cpus', 'gpus', 'peripherals', 'mobile', 'hardware monitoring', 'tech specs', 'new devices', 'electronics']
  },
  {
    id: '2',
    title: 'Tech Events',
    description: 'Stay updated with tech events',
    url: 'https://events.benjob.me',
    icon: '📅',
    color: 'bg-gradient-to-br from-purple-400 to-purple-600',
    tags: ['events', 'tech', 'conferences', 'calendar', 'keynotes', 'shows', 'expos', 'schedule', 'summits', 'workshops', 'meetups', 'ces', 'mwc', 'wwdc', 'google io', 'apple event', 'launch', 'presentation', 'tech industry']
  },
  {
    id: '3',
    title: 'Stocks',
    description: 'Tech stock dashboard',
    url: 'https://stocks.benjob.me',
    icon: '📈',
    color: 'bg-gradient-to-br from-emerald-400 to-emerald-600',
    tags: ['stocks', 'finance', 'market', 'tech', 'money', 'investing', 'shares', 'nasdaq', 'charts', 'trading', 'portfolio', 'stock market', 'finance news', 'wealth', 'savings', 'dividends', 'equities', 'tickers', 'valuation']
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
    tags: ['splash', 'links', 'social', 'milkshake', 'bio', 'landing', 'introduction', 'welcome', 'portal', 'link in bio', 'social media', 'contact links', 'identity', 'quick links']
  },
  {
    id: 'w2',
    title: 'Previous Website',
    description: 'Deprecated — old portfolio site',
    url: 'https://benjaminjob.wixsite.com/projects',
    icon: '🌐',
    color: 'bg-gradient-to-br from-gray-400 to-gray-600',
    tags: ['old', 'legacy', 'website', 'portfolio', 'wix', 'archive', 'history', 'former', 'outdated', 'classic', 'web design history', 'backup', 'projects archive']
  },
  {
    id: 'w3',
    title: 'Model Railway Site',
    description: 'In development (railway.benjob.me)',
    url: 'https://railway.benjob.me',
    icon: '🚂',
    color: 'bg-gradient-to-br from-red-400 to-red-700',
    tags: ['railway', 'model', 'hobby', 'development', 'trains', '3d', 'tracks', 'layout', 'modeling', 'locomotive', 'railroad', 'scenery', 'engineering', 'miniature', 'build', 'railway enthusiast']
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
    tags: ['projects', 'facebook', 'showcase', 'work', 'gallery', 'photos', 'videos', 'creation', 'invention', 'engineering', 'hobbyist', 'maker', 'portfolio', 'social showcase', 'achievements']
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
    tags: ['tech', 'ai', 'memes', 'vr', 'xr', 'facebook', 'gaming', 'funny', 'entertainment', 'group', 'humor', 'artificial intelligence', 'virtual reality', 'extended reality', 'community', 'discussion']
  },
  {
    id: 'ts2',
    title: "Ben's Cutting Edge Tech/AI",
    description: 'XR (VR/AR/MR) and even more - BXR',
    url: 'https://www.facebook.com/share/g/19TuLjHCXj/',
    icon: '⚙️',
    color: 'bg-gradient-to-br from-purple-400 to-pink-600',
    tags: ['tech', 'ai', 'xr', 'vr', 'facebook', 'mixed reality', 'ar', 'metaverse', 'innovation', 'group', 'future tech', 'augmented reality', 'cutting edge', 'technology', 'advanced ai', 'high tech']
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
    tags: ['shortcuts', 'apple', 'airfryer', 'cooking', 'timer', 'conversion', 'kitchen', 'food', 'culinary', 'automation', 'ios shortcut', 'temp convert', 'recipe helper', 'fryer', 'home assistant']
  },
  {
    id: 'r1',
    title: 'RoutineHub',
    description: 'Best iOS shortcuts community',
    url: 'https://routinehub.co',
    icon: '⚡',
    color: 'bg-gradient-to-br from-blue-400 to-indigo-600',
    tags: ['shortcuts', 'apple', 'community', 'ios', 'automation', 'scripts', 'download', 'repository', 'workflow', 'sharing', 'ios power user', 'productivity', 'tools', 'shortcut store']
  },
  {
    id: 'r2',
    title: 'Apple Shortcuts Gallery',
    description: 'Official Apple shortcuts collection',
    url: 'https://shortcutsgallery.com',
    icon: '🍎',
    color: 'bg-gradient-to-br from-gray-400 to-gray-600',
    tags: ['shortcuts', 'apple', 'gallery', 'ios', 'official', 'library', 'automation', 'workflow', 'curated', 'apple tools', 'productivity', 'iphone', 'ipad', 'macos shortcuts']
  },
  {
    id: 'r3',
    title: 'ShareShortcuts',
    description: 'Community shortcuts sharing platform',
    url: 'https://shareshortcuts.com',
    icon: '📤',
    color: 'bg-gradient-to-br from-green-400 to-teal-600',
    tags: ['shortcuts', 'apple', 'share', 'ios', 'community', 'upload', 'distribution', 'automation', 'tools', 'scripts', 'user shortcuts', 'collaboration']
  },
  {
    id: 'r4',
    title: 'MacStories Shortcuts',
    description: 'Premium shortcuts and automation guides',
    url: 'https://www.macstories.net/shortcuts',
    icon: '📖',
    color: 'bg-gradient-to-br from-purple-400 to-pink-600',
    tags: ['shortcuts', 'apple', 'guides', 'ios', 'macstories', 'federico viticci', 'expert', 'automation', 'power user', 'tutorials', 'in-depth', 'advanced shortcuts', 'blog', 'tech news']
  },
  {
    id: 'a1',
    title: 'App Store',
    description: 'Browse all apps on App Store',
    url: 'https://apps.apple.com',
    icon: '🛍️',
    color: 'bg-gradient-to-br from-blue-500 to-cyan-500',
    tags: ['apps', 'apple', 'store', 'ios', 'macos', 'download', 'software', 'application', 'mobile apps', 'marketplace', 'games', 'productivity apps', 'entertainment apps']
  },
  {
    id: 'a2',
    title: 'Best Apps 2026',
    description: 'Apples best apps of the year',
    url: 'https://apps.apple.com/us/story/id1849362474',
    icon: '⭐',
    color: 'bg-gradient-to-br from-yellow-400 to-orange-500',
    tags: ['apps', 'apple', 'best', 'ios', 'awards', 'winners', 'curated', 'top apps', 'must-have', 'editors choice', 'year in review', 'quality apps']
  },
  {
    id: 't1',
    title: 'Departures',
    description: 'Discover TestFlight apps',
    url: 'https://departures.to',
    icon: '✈️',
    color: 'bg-gradient-to-br from-sky-400 to-blue-600',
    tags: ['apps', 'testflight', 'beta', 'ios', 'testing', 'pre-release', 'early access', 'development', 'unreleased', 'preview', 'feedback', 'app testing']
  },
  {
    id: 't2',
    title: 'Airport',
    description: 'Discover TestFlight apps',
    url: 'https://airport.community',
    icon: '🛫',
    color: 'bg-gradient-to-br from-indigo-400 to-purple-600',
    tags: ['apps', 'testflight', 'beta', 'ios', 'community', 'discovery', 'early access', 'beta software', 'ios testing', 'explore apps', 'new apps']
  },
  {
    id: 't3',
    title: 'FindBeta',
    description: 'Find iOS TestFlight links',
    url: 'https://findbeta.no',
    icon: '🔍',
    color: 'bg-gradient-to-br from-emerald-400 to-green-600',
    tags: ['apps', 'testflight', 'beta', 'ios', 'links', 'search', 'directory', 'finder', 'beta database', 'iphone beta', 'early apps']
  },
  {
    id: 'd1',
    title: 'Apple Developer',
    description: 'Apple Developer resources',
    url: 'https://developer.apple.com/testflight',
    icon: '👨‍💻',
    color: 'bg-gradient-to-br from-gray-600 to-gray-800',
    tags: ['apps', 'apple', 'developer', 'ios', 'documentation', 'tools', 'xcode', 'swift', 'coding', 'api', 'frameworks', 'dev portal', 'engineering']
  },
  {
    id: 'd2',
    title: 'Discover More Shortcuts',
    description: 'Find the best Apple shortcuts, repositories, sites, and blogs',
    url: 'https://routinehub.co/categories',
    icon: '🔍',
    color: 'bg-gradient-to-br from-indigo-400 to-violet-600',
    tags: ['shortcuts', 'apple', 'discover', 'ios', 'categories', 'explore', 'automation hub', 'shortcut search', 'productivity hacks', 'ios tools']
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
    tags: ['discord', 'community', 'support', 'chat', 'server', 'benbot', 'help', 'social', 'member', 'voice chat', 'group chat', 'discussion forum', 'ai community', 'bot support']
  },
];

const socialLinks = [
  {
    id: 'li',
    title: 'LinkedIn',
    url: 'https://www.linkedin.com/in/benjaminjob',
    icon: '💼',
    color: 'bg-gradient-to-br from-blue-600 to-blue-800',
    tags: ['social', 'linkedin', 'professional', 'career', 'network', 'jobs', 'profile', 'business', 'resume', 'hiring', 'work experience', 'corporate', 'connections']
  },
  {
    id: 'lt',
    title: 'All Links (LinkTree)',
    url: 'https://linktr.ee/benjaminjob',
    icon: '🔗',
    color: 'bg-gradient-to-br from-green-400 to-green-600',
    tags: ['social', 'links', 'linktree', 'hub', 'all', 'collection', 'bio', 'landing page', 'portal', 'social links', 'contact', 'media hub']
  },
];

const gitHubLinks = [
  {
    id: 'gh1',
    title: "Benjamin's GitHub",
    description: 'Personal GitHub profile',
    url: 'https://github.com/benjaminjob',
    icon: '👤',
    color: 'bg-gradient-to-br from-gray-700 to-gray-900',
    tags: ['github', 'profile', 'personal', 'code', 'git', 'repositories', 'dev', 'opensource', 'coding', 'software engineer', 'scripts', 'projects', 'programming', 'version control']
  },
  {
    id: 'gh2',
    title: "Ben & Ben Bot's GitHub",
    description: 'Agent & Dashboard projects',
    url: 'https://github.com/benjaminjob1',
    icon: '👤🤖',
    color: 'bg-gradient-to-br from-gray-700 to-gray-900',
    tags: ['github', 'profile', 'bot', 'agent', 'code', 'git', 'projects', 'openclaw', 'ai', 'dashboard', 'automation', 'ai agent', 'nextjs', 'typescript', 'development', 'bot development']
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

function LinkCardWithTags({ item, showTags }: { item: any; showTags: boolean }) {
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
      <div className="relative w-12 h-12 rounded-xl bg-white/20 flex items-center justify-center text-2xl shadow-inner shrink-0">
        {item.icon}
      </div>
      <div className="relative flex-1 min-w-0">
        <h3 className="font-semibold text-lg">{item.title}</h3>
        <p className="text-white/80 text-sm truncate">{item.description}</p>
        
        {showTags && item.tags && (
          <motion.div 
            initial={{ opacity: 0, y: -5 }}
            animate={{ opacity: 1, y: 0 }}
            className="flex flex-wrap gap-1 mt-2"
          >
            {item.tags.map((tag: string) => (
              <span key={tag} className="text-[9px] bg-black/20 px-1.5 py-0.5 rounded-md backdrop-blur-sm border border-white/5 uppercase tracking-tighter">
                {tag}
              </span>
            ))}
          </motion.div>
        )}
      </div>
      <span className="relative opacity-60 text-xl shrink-0">↗</span>
    </motion.a>
  );
}

function GlassCard({ title, children }: { title?: string; children: React.ReactNode }) {
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
  const [showShortcuts, setShowShortcuts] = useState(false);
  const [showTags, setShowTags] = useState(false);
  const [search, setSearch] = useState("");
  const { isDark } = useTheme();

  return (
    <>
    <Layout title="Ben's Hub" subtitle="Choose what you'd like to view">
      {/* Global Control Bar */}
      <div className="flex flex-wrap items-center justify-center gap-3 mb-6">
        <motion.button 
          onClick={() => setShowTags(!showTags)}
          whileHover={{ scale: 1.02 }}
          whileTap={{ scale: 0.98 }}
          className={`flex items-center gap-2 px-4 py-2 rounded-full text-xs font-bold uppercase tracking-wider transition-all duration-300 border ${
            showTags 
              ? "bg-blue-500 text-white border-blue-400 shadow-[0_0_15px_rgba(59,130,246,0.5)]" 
              : isDark
                ? "bg-gray-800/50 text-gray-400 border-gray-700 hover:border-gray-500"
                : "bg-white text-gray-500 border-gray-200 hover:border-gray-300 shadow-sm"
          }`}
        >
          <span>🏷️</span>
          {showTags ? "Hide Tags" : "Show Tags"}
        </motion.button>
      </div>

      {/* Social Links */}
      <GlassCard title="Connect">
        {socialLinks.map((item) => (
          <LinkCardWithTags key={item.id} item={item} showTags={showTags} />
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
              <LinkCardWithTags key={item.id} item={item} showTags={showTags} />
            ))}
          </GlassCard>
        </motion.div>
      )}

      {/* Jump to Dashboards */}
      <div className="flex justify-center pt-2 pb-1">
        <a href="#dashboards" onClick={e => { e.preventDefault(); document.getElementById('dashboards')?.scrollIntoView({ behavior: 'smooth' }); }}
           className="text-xs text-gray-400 hover:text-gray-200">↓ Dashboards & GitHub Profiles</a>
      </div>

      {/* Recent Section */}
      <GlassCard title="Recent">
        {recent.map((item) => (
          <LinkCardWithTags key={item.id} item={item} showTags={showTags} />
        ))}
      </GlassCard>

      {/* My Projects */}
      <GlassCard title="My Projects">
        {myProjects.map((item) => (
          <LinkCardWithTags key={item.id} item={item} showTags={showTags} />
        ))}
      </GlassCard>

      {/* Tech Sections */}
      <GlassCard title="Tech">
        {techSections.map((item) => (
          <LinkCardWithTags key={item.id} item={item} showTags={showTags} />
        ))}
      </GlassCard>

      {/* Shortcuts */}
      <div
        onClick={() => setShowShortcuts(!showShortcuts)}
        className={`flex items-center gap-2 cursor-pointer text-sm font-semibold px-4 pt-4 -mb-2 ${
          showShortcuts ? "text-blue-600" : "text-gray-500 hover:text-gray-700"
        }`}
      >
        <span>⚡</span>
        <span className="font-medium">Shortcuts</span>
        <span className="ml-auto text-xs">
          {showShortcuts ? "▲" : "▶"}
        </span>
      </div>
      {showShortcuts && (
        <GlassCard>
          {shortcuts.map((item) => (
            <LinkCardWithTags key={item.id} item={item} showTags={showTags} />
          ))}
        </GlassCard>
      )}

      {/* Community */}
      <GlassCard title="Community">
        {community.map((item) => (
          <LinkCardWithTags key={item.id} item={item} showTags={showTags} />
        ))}
      </GlassCard>

      {/* Dashboards jump link */}
      <span id="dashboards" className="-mt-6 block" />
      <GlassCard title="📊 Dashboards">
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
          {apps.map(item => (
            <a key={item.id} href={item.url} target="_blank" rel="noopener noreferrer" className="flex flex-col p-3 rounded-lg bg-gray-800/50 hover:bg-gray-700/50 transition-colors">
              <div className="flex items-center gap-3">
                <span className="text-2xl">{item.icon}</span>
                <div>
                  <div className="text-sm font-medium">{item.title}</div>
                  <div className="text-xs text-gray-400">{item.description}</div>
                </div>
              </div>
              {showTags && item.tags && (
                <div className="flex flex-wrap gap-1 mt-2 pt-2 border-t border-white/5">
                  {item.tags.map(tag => (
                    <span key={tag} className="text-[8px] bg-black/30 text-gray-300 px-1 py-0.5 rounded uppercase tracking-tighter">
                      {tag}
                    </span>
                  ))}
                </div>
              )}
            </a>
          ))}
        </div>
      </GlassCard>

      {/* GitHub */}
      <GlassCard title="GitHub">
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
          {gitHubLinks.map((item) => (
            <a
              key={item.id}
              href={item.url}
              target="_blank"
              rel="noopener noreferrer"
              className="flex flex-col p-3 rounded-lg bg-gray-800/50 hover:bg-gray-700/50 transition-colors"
            >
              <div className="flex items-center gap-3">
                <span className="text-2xl">{item.icon}</span>
                <span className="text-sm font-medium">{item.title}</span>
              </div>
              {showTags && item.tags && (
                <div className="flex flex-wrap gap-1 mt-2 pt-2 border-t border-white/5">
                  {item.tags.map(tag => (
                    <span key={tag} className="text-[8px] bg-black/30 text-gray-300 px-1 py-0.5 rounded uppercase tracking-tighter">
                      {tag}
                    </span>
                  ))}
                </div>
              )}
            </a>
          ))}
        </div>
      </GlassCard>

    </Layout>

    {/* Sticky Search Footer */}
    <div className="fixed bottom-0 left-0 right-0 z-50 bg-gray-900/95 backdrop-blur border-t border-gray-700 px-4 py-3">
      <div className="max-w-5xl mx-auto flex flex-col sm:flex-row items-center justify-between gap-4">
        <div className="w-full sm:max-w-md relative flex items-center">
          <input
            type="text"
            placeholder="Search sites..."
            value={search}
            onChange={e => setSearch(e.target.value)}
            className="w-full bg-gray-800/80 border border-gray-600 rounded-xl px-4 py-2.5 pr-10 text-sm text-white placeholder-gray-400 focus:outline-none focus:border-blue-400 focus:ring-1 focus:ring-blue-400/50 transition-all"
          />
          {search && (
            <button
              onClick={() => setSearch("")}
              className="absolute right-3 p-1 rounded-full bg-gray-700/50 hover:bg-gray-700 text-gray-400 hover:text-white transition-colors"
              title="Clear search"
            >
              <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
              </svg>
            </button>
          )}
        </div>
        <div className="hidden sm:flex items-center gap-6 text-[10px] text-gray-500 uppercase tracking-widest font-bold">
          <p>© {new Date().getFullYear()} Benjamin Job</p>
          <div className="flex gap-4">
            <a href="https://benjob.me" className="hover:text-blue-400 transition-colors">Portfolio</a>
            <a href="https://feedback.benjob.me" className="hover:text-blue-400 transition-colors">Feedback</a>
          </div>
        </div>
      </div>
    </div>

    {/* Floating Search Results Overlay */}
    {search && (
      <div className="fixed inset-0 z-40 bg-black/60 backdrop-blur-sm pt-16 pb-16 overflow-y-auto">
        <div className="max-w-5xl mx-auto px-4 py-4 space-y-3">
          <div className="flex items-center justify-between mb-4">
            <div className="flex flex-col gap-1">
              <p className="text-xs text-gray-400">Results for &ldquo;{search}&rdquo;</p>
              <motion.button 
                onClick={() => setShowTags(!showTags)}
                whileTap={{ scale: 0.95 }}
                className={`flex items-center gap-1.5 px-3 py-1 rounded-full text-[10px] font-bold uppercase tracking-wider transition-all duration-300 border ${
                  showTags 
                    ? "bg-blue-500/80 text-white border-blue-400/50" 
                    : "bg-gray-800/80 text-gray-400 border-gray-700 hover:border-gray-600"
                }`}
              >
                {showTags ? "Hide Tags" : "Show Tags"}
              </motion.button>
            </div>
            <button onClick={() => setSearch("")} className="text-xs text-blue-400 hover:text-blue-300 px-2 py-1 bg-blue-400/10 rounded-lg">Clear</button>
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
            {(() => {
              const q = search.toLowerCase();
              const allItems = [
                ...apps,
                ...myProjects,
                ...techSections,
                ...shortcuts,
                ...workInProgress,
                ...socialLinks,
                ...gitHubLinks,
              ];
              
              // Filter out duplicate URLs to prevent duplicates in search results
              const seenUrls = new Set();
              const filtered = allItems.filter(item => {
                if (seenUrls.has(item.url)) return false;
                seenUrls.add(item.url);
                
                const i = item as any;
                return !q || 
                  i.title.toLowerCase().includes(q) || 
                  (i.description && i.description.toLowerCase().includes(q)) ||
                  (i.tags && i.tags.some((t: string) => t.toLowerCase().includes(q)));
              });
              
              if (filtered.length === 0) return <p className="text-sm text-gray-400 text-center py-4 col-span-2">No results found.</p>;
              
              return filtered.map(item => {
                const i = item as any;
                return (
                  <a key={i.id} href={i.url} target="_blank" rel="noopener noreferrer"
                    className={`${i.color} relative overflow-hidden rounded-2xl p-4 text-white flex flex-col cursor-pointer transition-all duration-300 shadow-lg hover:shadow-xl border border-white/10`}>
                    <div className="flex items-center gap-4 w-full">
                      <div className="relative w-12 h-12 rounded-xl bg-white/20 flex items-center justify-center text-2xl shadow-inner shrink-0">
                        {i.icon}
                      </div>
                      <div className="relative flex-1 min-w-0">
                        <h3 className="font-semibold text-lg truncate">{i.title}</h3>
                        {i.description && <p className="text-white/80 text-sm truncate">{i.description}</p>}
                      </div>
                    </div>
                    {showTags && i.tags && (
                      <div className="flex flex-wrap gap-1 mt-3 pt-3 border-t border-white/10">
                        {i.tags.map((tag: string) => (
                          <span key={tag} className="text-[9px] bg-black/20 px-1.5 py-0.5 rounded-md backdrop-blur-sm uppercase tracking-tighter">
                            {tag}
                          </span>
                        ))}
                      </div>
                    )}
                  </a>
                );
              });
            })()}
          </div>
        </div>
      </div>
    )}
    </>
  );
}
