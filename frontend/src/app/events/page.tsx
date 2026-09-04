'use client';

import React, { useState } from 'react';
import Link from 'next/link';
import { motion, AnimatePresence } from 'framer-motion';
import {
  Search,
  Filter,
  Trophy,
  MapPin,
  Users,
  FileText,
  ChevronRight,
  Sparkles,
  CheckCircle2,
} from 'lucide-react';

interface SportItem {
  id: string;
  name: string;
  category: 'Indoor' | 'Outdoor' | 'Track & Field';
  gender: "Men's & Women's" | "Men's Only" | "Women's Only";
  venue: string;
  participants: string;
  status: 'Live' | 'Scheduled' | 'Concluded';
  description: string;
  rulebook: string;
  href: string;
  color: string;
}

const sportsList: SportItem[] = [
  {
    id: 'basketball',
    name: 'Basketball',
    category: 'Indoor',
    gender: "Men's & Women's",
    venue: 'TSG Indoor Sports Complex Court 1 & 2',
    participants: '184 Players',
    status: 'Live',
    description: 'High-intensity 5v5 full-court basketball tournament following FIBA regulation rules.',
    rulebook: 'FIBA Inter-IIT Guidelines.pdf',
    href: '/matches',
    color: 'from-blue-600 to-indigo-700',
  },
  {
    id: 'badminton',
    name: 'Badminton',
    category: 'Indoor',
    gender: "Men's & Women's",
    venue: 'TSG Badminton Arena (4 Synthetic Courts)',
    participants: '138 Players',
    status: 'Scheduled',
    description: 'Men’s & Women’s Team Championships along with Individual Singles and Doubles knockouts.',
    rulebook: 'Badminton Championship Rules.pdf',
    href: '/matches',
    color: 'from-emerald-500 to-teal-700',
  },
  {
    id: 'cricket',
    name: 'Cricket',
    category: 'Outdoor',
    gender: "Men's Only",
    venue: 'Tata Sports Ground & Main Gymkhana Oval',
    participants: '345 Players',
    status: 'Live',
    description: 'T20 formatted leather-ball cricket tournament with group stages followed by knockouts.',
    rulebook: 'T20 Inter-IIT Cricket Byelaws.pdf',
    href: '/matches',
    color: 'from-red-600 to-rose-700',
  },
  {
    id: 'football',
    name: 'Football',
    category: 'Outdoor',
    gender: "Men's Only",
    venue: 'Main Gymkhana Football Pitch #1 & #2',
    participants: '368 Players',
    status: 'Scheduled',
    description: '11-a-side regulation soccer tournament. 90-minute matches with knockouts and penalty shootouts.',
    rulebook: 'AIFF Regulation Handbook.pdf',
    href: '/matches',
    color: 'from-emerald-600 to-green-700',
  },
  {
    id: 'swimming',
    name: 'Swimming & Water Polo',
    category: 'Outdoor',
    gender: "Men's & Women's",
    venue: 'TSG Olympic Size Swimming Complex',
    participants: '160 Swimmers',
    status: 'Concluded',
    description: 'Freestyle, Backstroke, Breaststroke, Butterfly, Individual Medley, Relays, and Men’s Water Polo tournament.',
    rulebook: 'FINA Swimming & Water Polo Specs.pdf',
    href: '/matches',
    color: 'from-cyan-500 to-blue-600',
  },
  {
    id: 'table-tennis',
    name: 'Table Tennis',
    category: 'Indoor',
    gender: "Men's & Women's",
    venue: 'TSG Indoor TT Pavilion',
    participants: '115 Players',
    status: 'Live',
    description: 'Fast-paced table tennis team event and individual events played on ITTF approved tables.',
    rulebook: 'ITTF Rules & Regulations.pdf',
    href: '/matches',
    color: 'from-purple-600 to-indigo-800',
  },
  {
    id: 'lawn-tennis',
    name: 'Lawn Tennis',
    category: 'Outdoor',
    gender: "Men's & Women's",
    venue: 'TSG Synthetic Tennis Complex (Courts 1-4)',
    participants: '110 Players',
    status: 'Scheduled',
    description: 'Best-of-three sets format team matches and singles knockouts under floodlights.',
    rulebook: 'ITF Lawn Tennis Guidelines.pdf',
    href: '/matches',
    color: 'from-yellow-500 to-amber-600',
  },
  {
    id: 'volleyball',
    name: 'Volleyball',
    category: 'Outdoor',
    gender: "Men's & Women's",
    venue: 'TSG Volleyball Courts #1 - #4',
    participants: '230 Players',
    status: 'Live',
    description: 'Best-of-5 sets match format for Men and Women teams with synthetic flooring.',
    rulebook: 'FIVB Volleyball Rules.pdf',
    href: '/matches',
    color: 'from-orange-600 to-red-600',
  },
  {
    id: 'weightlifting',
    name: 'Weightlifting',
    category: 'Indoor',
    gender: "Men's Only",
    venue: 'TSG Gymnasium & Fitness Hall',
    participants: '92 Lifters',
    status: 'Concluded',
    description: 'Snatch and Clean & Jerk categories across multiple weight divisions (56kg to 105kg+).',
    rulebook: 'IWF Weightlifting Code.pdf',
    href: '/matches',
    color: 'from-slate-700 to-slate-900',
  },
  {
    id: 'chess',
    name: 'Chess',
    category: 'Indoor',
    gender: "Men's & Women's",
    venue: 'Netaji Auditorium Hall B',
    participants: '115 Grandmasters',
    status: 'Scheduled',
    description: 'Classical Swiss-system time controls and Rapid/Blitz tiebreaks.',
    rulebook: 'FIDE Chess Tournament Rules.pdf',
    href: '/matches',
    color: 'from-amber-800 to-stone-900',
  },
  {
    id: 'squash',
    name: 'Squash',
    category: 'Indoor',
    gender: "Men's Only",
    venue: 'TSG Glass-Back Squash Courts',
    participants: '69 Players',
    status: 'Scheduled',
    description: 'Best of 5 games to 11 points (PAR scoring). Individual and team events.',
    rulebook: 'WSF Squash Championship Manual.pdf',
    href: '/matches',
    color: 'from-sky-600 to-indigo-700',
  },
];

export default function EventsPage() {
  const [searchTerm, setSearchTerm] = useState('');
  const [selectedCategory, setSelectedCategory] = useState<string>('All');

  const categories = ['All', 'Track & Field', 'Indoor', 'Outdoor'];

  const filteredSports = sportsList.filter((sport) => {
    const matchesSearch =
      sport.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
      sport.venue.toLowerCase().includes(searchTerm.toLowerCase()) ||
      sport.description.toLowerCase().includes(searchTerm.toLowerCase());

    const matchesCategory =
      selectedCategory === 'All' ? true : sport.category === selectedCategory;

    return matchesSearch && matchesCategory;
  });

  return (
    <div className="py-12 bg-background min-h-screen">
      <div className="max-w-container-max mx-auto px-margin-x space-y-10">
        {/* Header Title */}
        <div className="text-center max-w-3xl mx-auto space-y-4">
          <span className="bg-secondary-container/20 text-on-secondary-container font-label-bold px-4 py-1 rounded-full text-xs uppercase tracking-wider font-extrabold border border-secondary-container">
            58th Inter-IIT Sports Catalogue
          </span>
          <h1 className="font-headline-xl text-3xl sm:text-5xl font-black text-primary uppercase tracking-tight">
            SPORTS & arena DISCIPLINES
          </h1>
          <p className="font-body-lg text-sm sm:text-base text-on-surface-variant leading-relaxed">
            Explore all 12 sporting events held across premier sports complexes and grounds at IIT Kharagpur.
          </p>
        </div>

        {/* Filter Controls Bar */}
        <div className="bg-white rounded-2xl border border-outline-variant/30 p-4 shadow-sm flex flex-col md:flex-row gap-4 items-center justify-between">
          {/* Search Box */}
          <div className="relative w-full md:w-80">
            <Search className="w-5 h-5 text-gray-400 absolute left-3.5 top-1/2 -translate-y-1/2" />
            <input
              type="text"
              placeholder="Search sport, venue, rules..."
              value={searchTerm}
              onChange={(e) => setSearchTerm(e.target.value)}
              className="w-full pl-10 pr-4 py-2.5 bg-gray-50 border border-outline-variant/40 rounded-xl text-sm font-medium focus:outline-none focus:ring-2 focus:ring-primary focus:border-transparent transition-all"
            />
          </div>

          {/* Category Tabs */}
          <div className="flex items-center gap-2 overflow-x-auto w-full md:w-auto no-scrollbar py-1">
            <Filter className="w-4 h-4 text-gray-400 shrink-0 hidden sm:block ml-2" />
            {categories.map((cat) => (
              <button
                key={cat}
                onClick={() => setSelectedCategory(cat)}
                className={`px-4 py-2 rounded-xl text-xs font-label-bold uppercase transition-all shrink-0 font-bold ${
                  selectedCategory === cat
                    ? 'bg-primary text-white shadow-md'
                    : 'bg-gray-100 text-gray-700 hover:bg-gray-200'
                }`}
              >
                {cat}
              </button>
            ))}
          </div>
        </div>

        {/* Sports Cards Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          <AnimatePresence>
            {filteredSports.map((sport) => (
              <motion.div
                key={sport.id}
                layout
                initial={{ opacity: 0, scale: 0.95 }}
                animate={{ opacity: 1, scale: 1 }}
                exit={{ opacity: 0, scale: 0.95 }}
                transition={{ duration: 0.3 }}
                whileHover={{ y: -6 }}
                className="bg-white rounded-2xl border border-outline-variant/30 p-6 shadow-sm hover:shadow-xl transition-all flex flex-col justify-between"
              >
                <div>
                  <div className="flex items-start justify-between gap-3 mb-4">
                    <div className={`w-12 h-12 rounded-xl bg-gradient-to-br ${sport.color} text-white flex items-center justify-center shadow-md shrink-0`}>
                      <Trophy className="w-6 h-6" />
                    </div>
                    <div className="flex flex-col items-end gap-1">
                      <span
                        className={`px-2.5 py-0.5 rounded text-[10px] font-label-bold font-bold uppercase tracking-wider ${
                          sport.status === 'Live'
                            ? 'bg-red-100 text-red-700 border border-red-200 animate-pulse'
                            : sport.status === 'Scheduled'
                            ? 'bg-blue-100 text-blue-700 border border-blue-200'
                            : 'bg-gray-100 text-gray-600'
                        }`}
                      >
                        {sport.status === 'Live' ? '● LIVE NOW' : sport.status}
                      </span>
                      <span className="text-[11px] font-label-bold text-outline uppercase font-bold">
                        {sport.category}
                      </span>
                    </div>
                  </div>

                  <h3 className="font-headline-lg text-xl font-extrabold text-primary mb-1">
                    {sport.name}
                  </h3>

                  <div className="flex items-center gap-2 text-xs text-outline mb-3 font-medium">
                    <MapPin className="w-3.5 h-3.5 text-amber-600 shrink-0" />
                    <span className="line-clamp-1">{sport.venue}</span>
                  </div>

                  <p className="text-xs text-on-surface-variant leading-relaxed mb-4 line-clamp-3">
                    {sport.description}
                  </p>
                </div>

                <div className="pt-4 border-t border-gray-100 space-y-3">
                  <div className="flex items-center justify-between text-xs font-label-bold text-gray-600">
                    <span className="flex items-center gap-1.5 font-bold">
                      <Users className="w-3.5 h-3.5 text-primary" /> {sport.participants}
                    </span>
                    <span className="bg-gray-100 px-2 py-0.5 rounded text-[11px] font-bold">
                      {sport.gender}
                    </span>
                  </div>

                  <div className="flex items-center gap-2 pt-1">
                    <Link
                      href={sport.href}
                      className="flex-1 bg-primary text-white py-2.5 rounded-xl font-label-bold text-xs uppercase font-bold flex items-center justify-center gap-1 hover:bg-primary-container transition-colors shadow-sm"
                    >
                      View Details & Draws <ChevronRight className="w-4 h-4" />
                    </Link>
                    <a
                      href={`#rules-${sport.id}`}
                      onClick={() =>
                        alert(`Downloading ${sport.rulebook} for ${sport.name}`)
                      }
                      className="p-2.5 bg-gray-100 hover:bg-secondary-container hover:text-on-secondary-container text-gray-700 rounded-xl transition-colors shrink-0"
                      title="Download Rulebook"
                    >
                      <FileText className="w-4 h-4" />
                    </a>
                  </div>
                </div>
              </motion.div>
            ))}
          </AnimatePresence>
        </div>

        {filteredSports.length === 0 && (
          <div className="text-center py-16 bg-white rounded-2xl border border-outline-variant/30 p-8 space-y-3">
            <Sparkles className="w-10 h-10 text-gray-400 mx-auto" />
            <h3 className="font-headline-lg text-lg font-bold text-primary">No Sports Found</h3>
            <p className="text-xs text-gray-500">Try searching for another keyword or clear filter tabs.</p>
          </div>
        )}
      </div>
    </div>
  );
}
