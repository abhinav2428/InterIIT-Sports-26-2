'use client';

import React, { useState } from 'react';
import Link from 'next/link';
import { motion, AnimatePresence } from 'framer-motion';
import {
  Calendar,
  MapPin,
  Download,
  Zap,
  Shield,
  History,
  ArrowRight,
  Sparkles,
  Trophy,
  Activity,
  Users,
  X,
  FileText,
  Radio,
  ChevronRight,
} from 'lucide-react';

const iitsList = [
  'IIT KHARAGPUR',
  'IIT BOMBAY',
  'IIT DELHI',
  'IIT MADRAS',
  'IIT KANPUR',
  'IIT ROORKEE',
  'IIT GUWAHATI',
  'IIT (BHU) VARANASI',
  'IIT HYDERABAD',
  'IIT INDORE',
  'IIT BHUBANESWAR',
  'IIT ROPAR',
  'IIT PATNA',
  'IIT GANDHINAGAR',
  'IIT JODHPUR',
  'IIT MANDI',
  'IIT (ISM) DHANBAD',
  'IIT PALAKKAD',
  'IIT TIRUPATI',
  'IIT GOA',
  'IIT DHARWAD',
  'IIT BHILAI',
  'IIT JAMMU',
];

const sportsGrid = [
  {
    name: 'Athletics & Track',
    icon: 'directions_run',
    venue: 'Jnan Ghosh Stadium',
    count: '32 Events',
    href: '/athletics',
    color: 'from-amber-500 to-orange-600',
  },
  {
    name: 'Basketball',
    icon: 'sports_basketball',
    venue: 'TSG Indoor Courts',
    count: "Men's & Women's",
    href: '/events',
    color: 'from-blue-600 to-indigo-700',
  },
  {
    name: 'Badminton',
    icon: 'sports_tennis',
    venue: 'TSG Badminton Complex',
    count: 'Singles & Doubles',
    href: '/events',
    color: 'from-emerald-500 to-teal-700',
  },
  {
    name: 'Cricket',
    icon: 'sports_cricket',
    venue: 'Tata Sports Ground',
    count: 'T20 Tournament',
    href: '/events',
    color: 'from-red-600 to-rose-700',
  },
  {
    name: 'Football',
    icon: 'sports_soccer',
    venue: 'Main Gymkhana Field',
    count: "Men's Championship",
    href: '/events',
    color: 'from-emerald-600 to-green-700',
  },
  {
    name: 'Swimming & Water Polo',
    icon: 'pool',
    venue: 'TSG Swimming Pool',
    count: '18 Events',
    href: '/events',
    color: 'from-cyan-500 to-blue-600',
  },
  {
    name: 'Table Tennis',
    icon: 'sports_kabaddi',
    venue: 'TSG TT Arena',
    count: 'Team & Singles',
    href: '/events',
    color: 'from-purple-600 to-indigo-800',
  },
  {
    name: 'Lawn Tennis',
    icon: 'sports_tennis',
    venue: 'TSG Synthetic Courts',
    count: 'Clay & Hard Courts',
    href: '/events',
    color: 'from-yellow-500 to-amber-600',
  },
];

const newsUpdates = [
  {
    id: 1,
    title: '59th Inter-IIT Valedictory Ceremony Live Streaming Schedule Announced',
    date: 'Dec 21, 2026',
    category: 'Live Broadcast',
    summary: 'Watch the closing ceremony live from Netaji Auditorium starting 5:00 PM IST featuring Chief Guest.',
  },
  {
    id: 2,
    title: 'IIT Kharagpur Athletics Team Sets New Inter-IIT 4x100m Record',
    date: 'Dec 19, 2026',
    category: 'Athletics Record',
    summary: 'The KGP sprint quartet clocked 41.82 seconds at Jnan Ghosh Stadium to secure Gold medal.',
  },
  {
    id: 3,
    title: 'IIT Bombay vs IIT Delhi Basketball Finals Set for High-Voltage Clash',
    date: 'Dec 20, 2026',
    category: 'Match Preview',
    summary: 'Undefeated powerhouses face off at TSG Indoor Court #1 at 6:30 PM.',
  },
];

const mascotSports = [
  {
    name: 'Sprinting',
    image: '/mascot_athletics.png',
  },
  {
    name: 'Basketball',
    image: '/mascot_basketball.png',
  },
  {
    name: 'Badminton',
    image: '/mascot_badminton.png',
  },
  {
    name: 'Cricket',
    image: '/mascot_cricket.png',
  },
  {
    name: 'Macho Biral',
    image: '/mecho-biral-cat.png',
  },
];

export default function HomePage() {
  const [currentMascotIndex, setCurrentMascotIndex] = useState(0);
  const [activeMessageModal, setActiveMessageModal] = useState<null | {
    title: string;
    author: string;
    role: string;
    image: string;
    content: string[];
  }>(null);

  React.useEffect(() => {
    const timer = setInterval(() => {
      setCurrentMascotIndex((prev) => (prev + 1) % mascotSports.length);
    }, 3500);
    return () => clearInterval(timer);
  }, []);

  const directorMessage = {
    title: "Director's Message",
    author: 'Prof. Virendra Kumar Tewari',
    role: 'Director, IIT Kharagpur',
    image:
      'https://lh3.googleusercontent.com/aida-public/AB6AXuBF1DPtGPP9GL4CFFHENNvM39bJ626hQ_XI9YQGHwdJiD3uZwyavQE5094hyo85WvFPvesO3TbXB1ShC7ablySz-_juRrycRLXc9gkNX9lRP3isJKYzeFLNDD5OQFZOgvHQrk2iMfphhyXpKvdIQpo5vIp7eMNZ3ObJw-VMKsjwSqS8p9vF6AxeDNRMhz0eI3FeKGI5Z5DMomx6PfjwIkLJwRcVR7IZFY2MoO_ps-JIDoLqt5UuM9AI',
    content: [
      'It gives me immense pride to welcome the contingent of all 23 Indian Institutes of Technology to IIT Kharagpur for the 59th Inter IIT Sports Meet.',
      'This event is more than just a competition—it is a grand celebration of courage, discipline, sportsmanship, and the unbreakable bond that unites our national institutions.',
      'Sports instill values that classroom lectures cannot replicate alone: resilience under pressure, humility in victory, and dignity in setback. As we compete under the mantle of Technology Students Gymkhana, I wish every student-athlete maximum success and enduring memories.',
    ],
  };

  const presidentMessage = {
    title: "President's Message",
    author: 'Prof. Somnath Sengupta',
    role: 'President, Technology Students Gymkhana',
    image:
      'https://lh3.googleusercontent.com/aida-public/AB6AXuBbHYJo-PDvw_I-kFKjieLc1XPxCmoIFlhB9njI6yFbbT1fNYN4TMTyMrKftVFQKL5ffgRPqHeGe2KGkFGcJSj76UJVlDTdxKlVy-iTqX4KpEbh_i4HO-FYXorFm_Aq2g2Vm-XqzfOO_2x1SCQwHkQMGTd_IC_Aj1aT3ZDDaEX2qROjbng5xgxFxRm1VirwDj4UIrlC8MVPbHJWy8NAnEkEXh1jwOJ5DMYihsm2vR4I5NMkj5qsC8gN',
    content: [
      'Technology Students Gymkhana has been the heartbeat of student life at IIT Kharagpur since 1952. Hosting the 59th Inter IIT Sports Meet fills our entire community with energetic fervor.',
      'We have revamped our sports infrastructure—from Olympic-standard athletics tracks to synthetic tennis courts and indoor stadiums—to ensure world-class conditions for all competitors.',
      'Let the spirit of sportsmanship shine brightest. Play hard, honor the games, and build friendships that will last a lifetime!',
    ],
  };

  return (
    <div className="space-y-0 overflow-x-hidden">
      {/* Hero Section */}
      <section className="relative bg-surface-container-lowest min-h-[85vh] flex items-center overflow-hidden clip-slant pb-20 pt-8 sm:pt-12">
        {/* Decorative Grid Pattern */}
        <div
          className="absolute inset-0 opacity-5 pointer-events-none"
          style={{
            backgroundImage: 'radial-gradient(circle at 2px 2px, #003366 1px, transparent 0)',
            backgroundSize: '32px 32px',
          }}
        />
        <div className="absolute top-0 right-0 w-1/2 h-full bg-gradient-to-l from-surface-container-high to-transparent opacity-60 pointer-events-none -skew-x-12 translate-x-20" />

        <div className="max-w-container-max mx-auto px-margin-x w-full relative z-10 grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          {/* Hero Left Content */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6 }}
            className="space-y-6 py-6"
          >
            {/* Live Streaming Tag */}
            <div className="inline-flex items-center gap-2 bg-surface-variant px-4 py-1.5 rounded-full border border-outline-variant/50 shadow-sm">
              <span className="w-2.5 h-2.5 rounded-full bg-red-600 animate-pulse" />
              <span className="font-label-bold text-xs sm:text-sm text-primary-container uppercase tracking-wider font-bold">
                59th Inter-IIT Sports Meet • Live at IIT KGP
              </span>
            </div>

            <div className="space-y-2">
              <h2 className="font-headline-xl text-3xl sm:text-5xl lg:text-6xl text-primary font-black uppercase tracking-tight">
                59th INTER IIT
              </h2>
              <h1
                className="font-display-lg text-4xl sm:text-6xl lg:text-7xl text-secondary-container font-black uppercase leading-none"
                style={{ textShadow: '3px 3px 0px #001e40' }}
              >
                SPORTS MEET
              </h1>
            </div>

            <p className="font-body-lg text-base sm:text-lg text-on-surface-variant max-w-xl border-l-4 border-secondary-container pl-4 font-medium leading-relaxed">
              The flagship sporting battleground of 23 IITs — where grit, legacy, and rivalry collide under one arena at IIT Kharagpur.
            </p>

            <div className="flex flex-wrap gap-4 pt-2">
              <div className="bg-surface border border-outline-variant/30 rounded-xl p-4 flex items-center gap-3 shadow-sm hover:border-secondary-container transition-all">
                <div className="w-10 h-10 rounded-lg bg-secondary-container/20 flex items-center justify-center text-secondary-container">
                  <Calendar className="w-6 h-6 text-yellow-600" />
                </div>
                <div>
                  <p className="text-[10px] text-outline font-label-bold uppercase tracking-wider">Date</p>
                  <p className="font-label-bold text-sm text-primary font-extrabold">14 - 21 Dec 2026</p>
                </div>
              </div>

              <div className="bg-surface border border-outline-variant/30 rounded-xl p-4 flex items-center gap-3 shadow-sm hover:border-secondary-container transition-all">
                <div className="w-10 h-10 rounded-lg bg-secondary-container/20 flex items-center justify-center text-secondary-container">
                  <MapPin className="w-6 h-6 text-yellow-600" />
                </div>
                <div>
                  <p className="text-[10px] text-outline font-label-bold uppercase tracking-wider">Venue</p>
                  <p className="font-label-bold text-sm text-primary font-extrabold">IIT Kharagpur</p>
                </div>
              </div>

              <a
                href="#schedule"
                className="bg-primary-container text-white rounded-xl p-4 flex items-center gap-3 shadow-md hover:bg-primary transition-all group hover:scale-105"
              >
                <Download className="w-5 h-5 group-hover:animate-bounce text-secondary-container" />
                <div>
                  <p className="text-[10px] text-primary-fixed-dim font-label-bold uppercase tracking-wider">
                    Information
                  </p>
                  <p className="font-label-bold text-sm font-bold">Brochure & Schedule</p>
                </div>
              </a>
            </div>
          </motion.div>

          {/* Hero Right Mascot Action Showcase Carousel */}
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.7, delay: 0.2 }}
            className="relative h-[420px] sm:h-[500px] lg:h-[560px] flex flex-col justify-center items-center group"
          >
            {/* Glow Aura */}
            <div className="absolute inset-0 bg-secondary-container/30 rounded-full blur-3xl scale-90 animate-pulse" />

            {/* Mascot Image Frame with AnimatePresence */}
            <div className="relative z-10 w-full max-w-[420px] sm:max-w-[480px] h-[350px] sm:h-[430px] flex items-center justify-center">
              <AnimatePresence mode="wait">
                <motion.div
                  key={currentMascotIndex}
                  initial={{ opacity: 0, scale: 0.92, y: 15 }}
                  animate={{ opacity: 1, scale: 1, y: 0 }}
                  exit={{ opacity: 0, scale: 0.92, y: -15 }}
                  transition={{ duration: 0.45 }}
                  className="relative w-full h-full flex items-center justify-center"
                >
                  <img
                    src={mascotSports[currentMascotIndex].image}
                    alt={`Macho Biral playing ${mascotSports[currentMascotIndex].name}`}
                    className="w-full h-full object-contain drop-shadow-2xl hover:scale-105 transition-transform duration-500"
                  />
                </motion.div>
              </AnimatePresence>
            </div>

            {/* Carousel Controls & Indicators */}
            <div className="relative z-20 flex items-center gap-2 mt-4 bg-white/80 dark:bg-primary/80 backdrop-blur-md p-1.5 rounded-full border border-outline-variant/30 shadow-md">
              {mascotSports.map((sport, index) => (
                <button
                  key={index}
                  onClick={() => setCurrentMascotIndex(index)}
                  className={`px-3 py-1 rounded-full text-[11px] font-label-bold uppercase transition-all font-extrabold ${
                    currentMascotIndex === index
                      ? 'bg-secondary-container text-on-secondary-container shadow-md scale-105'
                      : 'text-gray-600 hover:text-primary hover:bg-gray-100'
                  }`}
                >
                  {sport.name.split(' ')[0]}
                </button>
              ))}
            </div>
          </motion.div>
        </div>
      </section>

      {/* Marquee Banner of All 23 IITs */}
      <section className="bg-surface py-5 border-y border-outline-variant/20 overflow-hidden relative z-20">
        <div className="text-center mb-3">
          <span className="font-label-bold text-xs text-outline uppercase tracking-[0.25em] font-bold">
            All 23 Institutes • One Supreme Spirit
          </span>
        </div>
        <div className="relative w-full overflow-hidden py-2 select-none">
          <motion.div
            animate={{ x: ['0%', '-50%'] }}
            transition={{ repeat: Infinity, duration: 28, ease: 'linear' }}
            className="flex gap-4 items-center w-max"
          >
            {[...iitsList, ...iitsList].map((iit, idx) => (
              <span
                key={idx}
                className={`font-stat-value text-xs sm:text-sm tracking-wider shrink-0 transition-all whitespace-nowrap px-4 py-1.5 rounded-full border shadow-sm ${
                  iit === 'IIT KHARAGPUR'
                    ? 'text-on-secondary-container font-black bg-secondary-container border-secondary-container scale-105'
                    : 'text-primary-container bg-white border-outline-variant/30 font-bold hover:border-primary'
                }`}
              >
                {iit}
              </span>
            ))}
          </motion.div>
        </div>
      </section>

      {/* Mascot Introduction */}
      <section className="py-16 bg-surface-container-low relative">
        <div className="max-w-container-max mx-auto px-margin-x grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="order-2 lg:order-1 relative"
          >
            <div className="bg-white/90 dark:bg-primary/40 rounded-3xl p-6 border border-outline-variant/30 shadow-xl flex flex-col items-center">
              <img
                src="/mecho-biral-cat.png"
                alt="Macho Biral - Official Inter-IIT Sports Meet Mascot"
                className="w-full max-w-sm mx-auto drop-shadow-2xl hover:scale-105 transition-transform duration-500"
              />
              <div className="mt-4 text-center">
                <span className="text-sm font-headline-lg font-black text-amber-600 tracking-wider">
                  অদম্য স্পৃহা, অবিচল লক্ষ্য!
                </span>
                <p className="text-xs font-label-bold text-gray-500 uppercase mt-0.5">
                  Indomitable Spirit, Unwavering Focus!
                </p>
              </div>
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="space-y-5 order-1 lg:order-2"
          >
            <span className="inline-block bg-secondary-container text-on-secondary-container font-label-bold px-3.5 py-1 rounded-md text-xs uppercase tracking-wider font-extrabold shadow-sm">
              Official Mascot
            </span>
            <h2 className="font-headline-xl text-3xl sm:text-4xl text-primary font-black uppercase tracking-tight">
              MEET <span className="text-amber-600">MACHO BIRAL</span>
            </h2>
            <div className="space-y-3 font-body-md text-on-surface-variant leading-relaxed">
              <p>
                The <strong>Baghrol</strong> (also known as <em>Mecho Biral</em>), West Bengal’s unique and resilient semi-aquatic State Animal, serves as the official mascot for the Inter-IIT Sports Meet, deeply embodying the event’s tagline: <strong>“Indomitable spirit, unwavering focus!”</strong>.
              </p>
              <p>
                As a rugged wildcat that fearlessly dives into harsh wetland environments to survive, its indomitable spirit mirrors the physical grit, endurance, and relentless drive of the collegiate athletes competing for the General Championship.
              </p>
              <p>
                Furthermore, the Baghrol’s unwavering focus as an ambush predator parallels the intense mental fortitude required for athletic triumph. This concentration echoes IIT Kharagpur’s core motto of disciplined action, <em>Yogah Karmasu Kaushalam</em>, transforming the mascot into a profound symbol of both regional heritage and championship prowess.
              </p>
            </div>

            <div className="flex flex-wrap gap-3 pt-3">
              <span className="flex items-center gap-2 bg-surface px-4 py-2 rounded-full border border-outline-variant/30 font-label-bold text-xs text-primary-container shadow-sm font-bold">
                <Zap className="w-4 h-4 text-amber-500" /> Indomitable Spirit
              </span>
              <span className="flex items-center gap-2 bg-surface px-4 py-2 rounded-full border border-outline-variant/30 font-label-bold text-xs text-primary-container shadow-sm font-bold">
                <Shield className="w-4 h-4 text-amber-500" /> Unwavering Focus
              </span>
              <span className="flex items-center gap-2 bg-surface px-4 py-2 rounded-full border border-outline-variant/30 font-label-bold text-xs text-primary-container shadow-sm font-bold">
                <History className="w-4 h-4 text-amber-500" /> Yogah Karmasu Kaushalam
              </span>
            </div>
          </motion.div>
        </div>
      </section>

      {/* About & History Section */}
      <section className="bg-primary text-white py-20 clip-slant-reverse mt-[-3vw] relative z-10 px-margin-x">
        <div className="max-w-4xl mx-auto text-center space-y-4 pt-8">
          <span className="font-label-bold text-xs text-secondary-fixed tracking-[0.25em] uppercase font-bold">
            The Historical Legacy
          </span>
          <h2 className="font-headline-xl text-3xl sm:text-4xl lg:text-5xl font-black uppercase tracking-tight">
            ABOUT THE <span className="text-secondary-fixed">INTER IIT SPORTS MEET</span>
          </h2>
          <div className="space-y-4 font-body-lg text-primary-fixed-dim text-sm sm:text-base leading-relaxed max-w-3xl mx-auto mt-6">
            <p>
              The Inter IIT Sports Meet, first held in 1961 at IIT Bombay, is one of the oldest and most prestigious sports traditions of the IIT system. It fosters resilience, leadership, discipline, and camaraderie among students across all IITs.
            </p>
            <p>
              As the proud host for the 59th edition, IIT Kharagpur is ready to elevate the standard of competition, welcoming over 3,500 finest student-athletes to battle for ultimate glory under the banner of the Technology Students Gymkhana.
            </p>
          </div>
        </div>

        {/* Message Cards */}
        <div className="max-w-container-max mx-auto mt-12 grid grid-cols-1 md:grid-cols-2 gap-8 pb-8">
          {/* Card 1 */}
          <motion.div
            whileHover={{ y: -4 }}
            className="bg-surface-tint/20 border border-primary-fixed-dim/20 rounded-2xl p-6 backdrop-blur-md flex flex-col sm:flex-row gap-5 items-start shadow-xl"
          >
            <div className="w-24 h-24 rounded-xl overflow-hidden shrink-0 border-2 border-secondary-fixed shadow-md">
              <img
                src={directorMessage.image}
                alt={directorMessage.author}
                className="w-full h-full object-cover"
              />
            </div>
            <div className="space-y-2">
              <span className="inline-flex items-center gap-1 bg-primary-fixed/20 text-secondary-fixed px-2.5 py-0.5 rounded text-[11px] font-label-bold uppercase font-bold">
                <FileText className="w-3 h-3" /> {directorMessage.title}
              </span>
              <h3 className="font-headline-lg text-lg font-bold text-white">
                Welcome to the <span className="text-secondary-fixed">59th Inter IIT</span>
              </h3>
              <p className="text-xs text-primary-fixed-dim italic line-clamp-3">
                "{directorMessage.content[1]}"
              </p>
              <button
                onClick={() => setActiveMessageModal(directorMessage)}
                className="inline-flex items-center gap-1.5 text-secondary-fixed font-label-bold text-xs uppercase hover:underline mt-2 font-bold"
              >
                Read Full Message <ArrowRight className="w-3.5 h-3.5" />
              </button>
            </div>
          </motion.div>

          {/* Card 2 */}
          <motion.div
            whileHover={{ y: -4 }}
            className="bg-surface-tint/20 border border-primary-fixed-dim/20 rounded-2xl p-6 backdrop-blur-md flex flex-col sm:flex-row gap-5 items-start shadow-xl"
          >
            <div className="w-24 h-24 rounded-xl overflow-hidden shrink-0 border-2 border-secondary-fixed shadow-md">
              <img
                src={presidentMessage.image}
                alt={presidentMessage.author}
                className="w-full h-full object-cover"
              />
            </div>
            <div className="space-y-2">
              <span className="inline-flex items-center gap-1 bg-primary-fixed/20 text-secondary-fixed px-2.5 py-0.5 rounded text-[11px] font-label-bold uppercase font-bold">
                <Sparkles className="w-3 h-3" /> {presidentMessage.title}
              </span>
              <h3 className="font-headline-lg text-lg font-bold text-white">
                Spirit of <span className="text-secondary-fixed">Gymkhana TSG</span>
              </h3>
              <p className="text-xs text-primary-fixed-dim italic line-clamp-3">
                "{presidentMessage.content[1]}"
              </p>
              <button
                onClick={() => setActiveMessageModal(presidentMessage)}
                className="inline-flex items-center gap-1.5 text-secondary-fixed font-label-bold text-xs uppercase hover:underline mt-2 font-bold"
              >
                Read Full Message <ArrowRight className="w-3.5 h-3.5" />
              </button>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Featured Sports Grid */}
      <section className="py-16 bg-surface px-margin-x">
        <div className="max-w-container-max mx-auto">
          <div className="flex flex-col md:flex-row md:items-end justify-between mb-10 gap-4">
            <div>
              <span className="font-label-bold text-xs text-amber-600 tracking-[0.2em] uppercase font-bold">
                Arena Disciplines
              </span>
              <h2 className="font-headline-xl text-3xl sm:text-4xl text-primary font-black uppercase tracking-tight mt-1">
                FEATURED SPORTS & EVENTS
              </h2>
            </div>
            <Link
              href="/events"
              className="inline-flex items-center gap-2 bg-primary text-white px-5 py-2.5 rounded-xl font-label-bold text-xs uppercase hover:bg-primary-container transition-colors shadow-md shrink-0 font-bold"
            >
              View All 13 Sports <ChevronRight className="w-4 h-4" />
            </Link>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {sportsGrid.map((sport, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.4, delay: index * 0.05 }}
                whileHover={{ y: -6 }}
                className="bg-white rounded-2xl border border-outline-variant/30 p-6 shadow-md hover:shadow-xl transition-all group flex flex-col justify-between"
              >
                <div>
                  <div className={`w-12 h-12 rounded-xl bg-gradient-to-br ${sport.color} text-white flex items-center justify-center shadow-md mb-4 group-hover:scale-110 transition-transform`}>
                    <Trophy className="w-6 h-6" />
                  </div>
                  <h3 className="font-headline-lg text-lg font-bold text-primary group-hover:text-amber-600 transition-colors">
                    {sport.name}
                  </h3>
                  <p className="text-xs text-outline font-medium mt-1">{sport.venue}</p>
                </div>

                <div className="pt-6 border-t border-gray-100 mt-6 flex items-center justify-between">
                  <span className="bg-surface-container text-primary-container px-2.5 py-1 rounded text-[11px] font-label-bold font-bold">
                    {sport.count}
                  </span>
                  <Link
                    href={sport.href}
                    className="text-amber-600 hover:text-amber-700 font-label-bold text-xs uppercase flex items-center gap-1 font-bold group-hover:translate-x-1 transition-transform"
                  >
                    Details <ArrowRight className="w-3.5 h-3.5" />
                  </Link>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Live News & Updates Ticker */}
      <section className="py-16 bg-surface-container-low px-margin-x border-t border-outline-variant/20">
        <div className="max-w-container-max mx-auto">
          <div className="flex items-center gap-3 mb-8">
            <Radio className="w-6 h-6 text-red-600 animate-pulse" />
            <h2 className="font-headline-xl text-2xl sm:text-3xl text-primary font-black uppercase tracking-tight">
              LATEST NEWS & ANNOUNCEMENTS
            </h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {newsUpdates.map((item) => (
              <motion.div
                key={item.id}
                whileHover={{ y: -4 }}
                className="bg-white rounded-2xl border border-outline-variant/30 p-6 shadow-sm hover:shadow-md transition-all flex flex-col justify-between"
              >
                <div>
                  <div className="flex items-center justify-between mb-3">
                    <span className="bg-red-50 text-red-700 px-2.5 py-0.5 rounded text-[11px] font-label-bold font-bold">
                      {item.category}
                    </span>
                    <span className="text-[11px] text-gray-400 font-label-bold">{item.date}</span>
                  </div>
                  <h3 className="font-headline-lg text-base font-bold text-primary leading-snug mb-2">
                    {item.title}
                  </h3>
                  <p className="text-xs text-on-surface-variant leading-relaxed">{item.summary}</p>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Message Modal Component */}
      <AnimatePresence>
        {activeMessageModal && (
          <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/60 backdrop-blur-sm">
            <motion.div
              initial={{ scale: 0.9, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              exit={{ scale: 0.9, opacity: 0 }}
              className="bg-white dark:bg-primary border border-outline-variant/30 rounded-2xl max-w-xl w-full p-6 sm:p-8 relative shadow-2xl overflow-y-auto max-h-[90vh]"
            >
              <button
                onClick={() => setActiveMessageModal(null)}
                className="absolute top-4 right-4 text-gray-400 hover:text-gray-700 dark:hover:text-white p-1 rounded-full"
              >
                <X className="w-6 h-6" />
              </button>

              <div className="flex items-center gap-4 mb-6">
                <img
                  src={activeMessageModal.image}
                  alt={activeMessageModal.author}
                  className="w-16 h-16 sm:w-20 sm:h-20 rounded-2xl object-cover border-2 border-secondary-container shadow-md"
                />
                <div>
                  <span className="bg-secondary-container/20 text-secondary-container px-2.5 py-0.5 rounded text-[11px] font-label-bold font-bold uppercase">
                    {activeMessageModal.title}
                  </span>
                  <h3 className="font-headline-lg text-lg sm:text-xl font-bold text-primary dark:text-white mt-1">
                    {activeMessageModal.author}
                  </h3>
                  <p className="text-xs text-outline font-medium">{activeMessageModal.role}</p>
                </div>
              </div>

              <div className="space-y-3 font-body-md text-sm text-on-surface-variant dark:text-gray-200 leading-relaxed border-t border-gray-100 dark:border-white/10 pt-4">
                {activeMessageModal.content.map((paragraph, i) => (
                  <p key={i}>{paragraph}</p>
                ))}
              </div>

              <div className="mt-6 pt-4 border-t border-gray-100 dark:border-white/10 flex justify-end">
                <button
                  onClick={() => setActiveMessageModal(null)}
                  className="bg-primary-container text-white px-6 py-2.5 rounded-xl font-label-bold text-xs uppercase font-bold hover:bg-primary transition-colors"
                >
                  Close Message
                </button>
              </div>
            </motion.div>
          </div>
        )}
      </AnimatePresence>
    </div>
  );
}
