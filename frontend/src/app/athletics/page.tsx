'use client';

import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import {
  Trophy,
  Flame,
  Calendar,
  MapPin,
  Clock,
  Medal,
  Award,
  Zap,
  CheckCircle,
} from 'lucide-react';

interface AthleticsEvent {
  name: string;
  category: 'Track' | 'Field' | 'Relay';
  record: string;
  recordHolder: string;
  iit: string;
  year: string;
  heatTime: string;
  finalTime: string;
  status: 'Completed' | 'Live' | 'Upcoming';
}

const athleticsEvents: AthleticsEvent[] = [
  {
    name: '100m Sprint (Men)',
    category: 'Track',
    record: '10.74 sec',
    recordHolder: 'Rohit Sharma',
    iit: 'IIT Kharagpur',
    year: '2023',
    heatTime: '14 Dec, 09:00 AM',
    finalTime: '14 Dec, 04:30 PM',
    status: 'Completed',
  },
  {
    name: '200m Sprint (Men)',
    category: 'Track',
    record: '21.85 sec',
    recordHolder: 'Ankit Kumar',
    iit: 'IIT Bombay',
    year: '2022',
    heatTime: '16 Dec, 10:15 AM',
    finalTime: '16 Dec, 05:00 PM',
    status: 'Completed',
  },
  {
    name: '400m Sprint (Men)',
    category: 'Track',
    record: '48.92 sec',
    recordHolder: 'Sarthak Gupta',
    iit: 'IIT Kharagpur',
    year: '2024',
    heatTime: '18 Dec, 09:30 AM',
    finalTime: '18 Dec, 04:15 PM',
    status: 'Live',
  },
  {
    name: '4x100m Relay (Men)',
    category: 'Relay',
    record: '41.82 sec (NEW)',
    recordHolder: 'KGP Sprint Quartet',
    iit: 'IIT Kharagpur',
    year: '2025',
    heatTime: '19 Dec, 11:00 AM',
    finalTime: '19 Dec, 05:30 PM',
    status: 'Completed',
  },
  {
    name: 'High Jump (Men)',
    category: 'Field',
    record: '2.08 meters',
    recordHolder: 'Vikramaditya Roy',
    iit: 'IIT Madras',
    year: '2021',
    heatTime: 'N/A',
    finalTime: '17 Dec, 02:00 PM',
    status: 'Completed',
  },
  {
    name: 'Long Jump (Men)',
    category: 'Field',
    record: '7.42 meters',
    recordHolder: 'Aman Deep Singh',
    iit: 'IIT Delhi',
    year: '2023',
    heatTime: 'N/A',
    finalTime: '15 Dec, 03:30 PM',
    status: 'Completed',
  },
  {
    name: 'Shot Put (Men)',
    category: 'Field',
    record: '16.48 meters',
    recordHolder: 'Jaswinder Singh',
    iit: 'IIT Roorkee',
    year: '2022',
    heatTime: 'N/A',
    finalTime: '20 Dec, 09:00 AM',
    status: 'Upcoming',
  },
  {
    name: 'Javelin Throw (Men)',
    category: 'Field',
    record: '68.50 meters',
    recordHolder: 'Neeraj Vats',
    iit: 'IIT Kharagpur',
    year: '2024',
    heatTime: 'N/A',
    finalTime: '21 Dec, 10:00 AM',
    status: 'Upcoming',
  },
];

const athleticsMedals = [
  { rank: 1, iit: 'IIT Kharagpur', gold: 8, silver: 5, bronze: 4, total: 17 },
  { rank: 2, iit: 'IIT Bombay', gold: 6, silver: 6, bronze: 3, total: 15 },
  { rank: 3, iit: 'IIT Delhi', gold: 5, silver: 4, bronze: 6, total: 15 },
  { rank: 4, iit: 'IIT Madras', gold: 4, silver: 3, bronze: 5, total: 12 },
  { rank: 5, iit: 'IIT Kanpur', gold: 3, silver: 4, bronze: 2, total: 9 },
];

export default function AthleticsPage() {
  const [activeTab, setActiveTab] = useState<'All' | 'Track' | 'Field' | 'Relay'>('All');

  const filteredEvents =
    activeTab === 'All'
      ? athleticsEvents
      : athleticsEvents.filter((ev) => ev.category === activeTab);

  return (
    <div className="bg-background min-h-screen pb-16 space-y-12">
      {/* Athletics Hero Banner */}
      <section className="relative bg-primary text-white py-16 px-margin-x overflow-hidden clip-slant">
        <div
          className="absolute inset-0 opacity-15 pointer-events-none"
          style={{
            backgroundImage:
              'radial-gradient(circle at 2px 2px, #fecb00 1px, transparent 0)',
            backgroundSize: '24px 24px',
          }}
        />
        <div className="max-w-container-max mx-auto relative z-10 grid grid-cols-1 lg:grid-cols-3 gap-8 items-center">
          <div className="lg:col-span-2 space-y-4">
            <span className="inline-flex items-center gap-1.5 bg-secondary-container text-on-secondary-container px-3.5 py-1 rounded-full text-xs font-label-bold font-extrabold uppercase shadow-sm">
              <Zap className="w-4 h-4 fill-current" /> Jnan Ghosh Stadium Arena
            </span>
            <h1 className="font-headline-xl text-3xl sm:text-5xl font-black uppercase tracking-tight text-white">
              ATHLETICS & TRACK CHAMPIONSHIP
            </h1>
            <p className="font-body-lg text-sm sm:text-base text-primary-fixed-dim max-w-2xl leading-relaxed">
              32 high-octane events featuring the fastest sprinters, highest jumpers, and strongest throwers across 23 IITs on our IAAF-standard 8-lane synthetic track.
            </p>
            <div className="flex flex-wrap gap-4 pt-2 text-xs font-label-bold">
              <span className="bg-white/10 px-3 py-1.5 rounded-lg border border-white/20 flex items-center gap-2">
                <MapPin className="w-4 h-4 text-secondary-container" /> Jnan Ghosh Stadium, IIT KGP
              </span>
              <span className="bg-white/10 px-3 py-1.5 rounded-lg border border-white/20 flex items-center gap-2">
                <Calendar className="w-4 h-4 text-secondary-container" /> Dec 14 - 21, 2025
              </span>
            </div>
          </div>

          <div className="bg-white/10 backdrop-blur-md border border-white/20 rounded-2xl p-6 text-center space-y-3 shadow-2xl">
            <Trophy className="w-12 h-12 text-secondary-container mx-auto" />
            <h3 className="font-headline-lg text-lg font-bold text-white uppercase">
              Current Athletics Leader
            </h3>
            <p className="text-2xl font-black text-secondary-fixed">IIT KHARAGPUR</p>
            <p className="text-xs text-primary-fixed-dim">8 Gold • 5 Silver • 4 Bronze</p>
          </div>
        </div>
      </section>

      {/* Main Content Area */}
      <div className="max-w-container-max mx-auto px-margin-x space-y-12">
        {/* Disciplines Filter */}
        <div className="space-y-6">
          <div className="flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4 border-b border-outline-variant/30 pb-4">
            <div>
              <span className="text-xs font-label-bold text-amber-600 uppercase tracking-widest font-bold">
                Disciplines Schedule
              </span>
              <h2 className="font-headline-xl text-2xl sm:text-3xl text-primary font-black uppercase tracking-tight">
                EVENTS & INTER-IIT RECORDS
              </h2>
            </div>

            <div className="flex items-center gap-2 bg-white p-1.5 rounded-xl border border-outline-variant/30 shadow-sm">
              {(['All', 'Track', 'Field', 'Relay'] as const).map((tab) => (
                <button
                  key={tab}
                  onClick={() => setActiveTab(tab)}
                  className={`px-4 py-1.5 rounded-lg text-xs font-label-bold uppercase transition-all font-bold ${
                    activeTab === tab
                      ? 'bg-primary text-white shadow-md'
                      : 'text-gray-600 hover:text-primary hover:bg-gray-100'
                  }`}
                >
                  {tab}
                </button>
              ))}
            </div>
          </div>

          {/* Events Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            <AnimatePresence>
              {filteredEvents.map((item, idx) => (
                <motion.div
                  key={idx}
                  layout
                  initial={{ opacity: 0, scale: 0.95 }}
                  animate={{ opacity: 1, scale: 1 }}
                  exit={{ opacity: 0, scale: 0.95 }}
                  transition={{ duration: 0.3 }}
                  whileHover={{ y: -4 }}
                  className="bg-white rounded-2xl border border-outline-variant/30 p-6 shadow-sm hover:shadow-lg transition-all flex flex-col justify-between"
                >
                  <div>
                    <div className="flex items-center justify-between mb-3">
                      <span className="bg-secondary-container/20 text-on-secondary-container px-2.5 py-0.5 rounded text-[10px] font-label-bold font-extrabold uppercase">
                        {item.category}
                      </span>
                      <span
                        className={`text-[10px] font-label-bold font-bold uppercase px-2 py-0.5 rounded ${
                          item.status === 'Completed'
                            ? 'bg-green-100 text-green-700'
                            : item.status === 'Live'
                            ? 'bg-red-100 text-red-700 animate-pulse'
                            : 'bg-blue-100 text-blue-700'
                        }`}
                      >
                        {item.status}
                      </span>
                    </div>

                    <h3 className="font-headline-lg text-base font-extrabold text-primary mb-3">
                      {item.name}
                    </h3>

                    <div className="bg-gray-50 rounded-xl p-3 space-y-1.5 mb-4 border border-gray-100">
                      <p className="text-[11px] text-gray-500 font-label-bold uppercase">
                        Inter-IIT Record
                      </p>
                      <p className="text-lg font-black text-amber-600 tracking-tight">
                        {item.record}
                      </p>
                      <p className="text-xs text-gray-700 font-medium">
                        {item.recordHolder} ({item.iit}, {item.year})
                      </p>
                    </div>
                  </div>

                  <div className="pt-3 border-t border-gray-100 space-y-1 text-xs text-gray-600 font-medium">
                    <div className="flex items-center justify-between">
                      <span className="text-[11px] text-gray-400 font-label-bold uppercase">Finals:</span>
                      <span className="font-bold text-primary">{item.finalTime}</span>
                    </div>
                  </div>
                </motion.div>
              ))}
            </AnimatePresence>
          </div>
        </div>

        {/* Athletics Medal Standings Table */}
        <div className="bg-white rounded-3xl border border-outline-variant/30 p-6 sm:p-8 shadow-sm space-y-6">
          <div className="flex items-center justify-between border-b border-gray-100 pb-4">
            <div>
              <span className="text-xs font-label-bold text-amber-600 uppercase font-bold tracking-widest">
                Athletics Standings
              </span>
              <h2 className="font-headline-xl text-xl sm:text-2xl font-black text-primary uppercase">
                ATHLETICS MEDAL TALLY
              </h2>
            </div>
            <Award className="w-8 h-8 text-amber-500" />
          </div>

          <div className="overflow-x-auto">
            <table className="w-full text-left border-collapse">
              <thead>
                <tr className="border-b border-gray-200 text-xs font-label-bold text-gray-500 uppercase">
                  <th className="py-3 px-4">Rank</th>
                  <th className="py-3 px-4">IIT Contingent</th>
                  <th className="py-3 px-4 text-center">Gold 🥇</th>
                  <th className="py-3 px-4 text-center">Silver 🥈</th>
                  <th className="py-3 px-4 text-center">Bronze 🥉</th>
                  <th className="py-3 px-4 text-center">Total Medals</th>
                </tr>
              </thead>
              <tbody className="divide-y divide-gray-100 text-sm font-medium text-gray-800">
                {athleticsMedals.map((m) => (
                  <tr
                    key={m.rank}
                    className={`hover:bg-gray-50 transition-colors ${
                      m.iit === 'IIT Kharagpur' ? 'bg-secondary-container/10 font-bold' : ''
                    }`}
                  >
                    <td className="py-3.5 px-4 font-bold text-primary">#{m.rank}</td>
                    <td className="py-3.5 px-4 font-extrabold text-primary flex items-center gap-2">
                      {m.iit}
                      {m.iit === 'IIT Kharagpur' && (
                        <span className="bg-secondary-container text-on-secondary-container text-[10px] px-2 py-0.5 rounded font-extrabold">
                          HOST
                        </span>
                      )}
                    </td>
                    <td className="py-3.5 px-4 text-center text-amber-600 font-black">{m.gold}</td>
                    <td className="py-3.5 px-4 text-center text-gray-600 font-bold">{m.silver}</td>
                    <td className="py-3.5 px-4 text-center text-amber-800 font-bold">{m.bronze}</td>
                    <td className="py-3.5 px-4 text-center font-black text-primary">{m.total}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>
      </div>
    </div>
  );
}
