'use client';

import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import {
  Trophy,
  Flame,
  Search,
  Filter,
  Radio,
  Clock,
  MapPin,
  Medal,
  ChevronDown,
  X,
  Share2,
} from 'lucide-react';

interface MatchItem {
  id: string;
  sport: string;
  category: string;
  stage: string;
  teamA: string;
  scoreA: string;
  teamB: string;
  scoreB: string;
  status: 'LIVE' | 'COMPLETED' | 'UPCOMING';
  venue: string;
  time: string;
  mvp?: string;
  details: string[];
}

const matchesData: MatchItem[] = [
  {
    id: 'm1',
    sport: 'Basketball',
    category: "Men's Finals",
    stage: 'Gold Medal Match',
    teamA: 'IIT Kharagpur',
    scoreA: '78',
    teamB: 'IIT Bombay',
    scoreB: '72',
    status: 'LIVE',
    venue: 'TSG Indoor Stadium Court 1',
    time: '4th Quarter • 02:45 remaining',
    mvp: 'Anish Roy (KGP)',
    details: [
      'Q1: 18 - 16',
      'Q2: 22 - 20',
      'Q3: 16 - 21',
      'Q4: 22 - 15',
      'Top Scorer: Anish Roy (KGP) - 26 pts, 8 rebounds',
    ],
  },
  {
    id: 'm2',
    sport: 'Cricket',
    category: "Men's T20",
    stage: 'Semi Final 1',
    teamA: 'IIT Delhi',
    scoreA: '164/6 (20.0)',
    teamB: 'IIT Madras',
    scoreB: '142/9 (18.4)',
    status: 'LIVE',
    venue: 'Tata Sports Ground',
    time: '2nd Innings • Target 165',
    details: [
      'IIT Delhi: 164/6 in 20 overs (Aditya Verma 62 off 41)',
      'IIT Madras: 142/9 in 18.4 overs (Rahul S. 44 off 30)',
      'Need 23 runs in 8 balls',
    ],
  },
  {
    id: 'm3',
    sport: 'Football',
    category: "Men's Tournament",
    stage: 'Group B Match',
    teamA: 'IIT Kanpur',
    scoreA: '2',
    teamB: 'IIT Roorkee',
    scoreB: '1',
    status: 'COMPLETED',
    venue: 'Main Gymkhana Pitch #1',
    time: 'Full Time',
    mvp: 'Karan Sharma (Kanpur)',
    details: [
      "Goal 34': Karan Sharma (IIT Kanpur)",
      "Goal 58': Devraj Singh (IIT Roorkee)",
      "Goal 88': Karan Sharma (IIT Kanpur)",
    ],
  },
  {
    id: 'm4',
    sport: 'Badminton',
    category: "Women's Team",
    stage: 'Finals',
    teamA: 'IIT Kharagpur',
    scoreA: '3',
    teamB: 'IIT Delhi',
    scoreB: '1',
    status: 'COMPLETED',
    venue: 'TSG Badminton Complex',
    time: 'Final Score',
    mvp: 'Priya N. (KGP)',
    details: [
      'Match 1 (Singles): Priya N. (KGP) def. Sneha M. 21-18, 21-14',
      'Match 2 (Singles): Riya K. (DEL) def. Tanvi S. 19-21, 21-16, 21-19',
      'Match 3 (Doubles): Priya/Tanvi (KGP) def. Sneha/Riya 21-15, 21-17',
      'Match 4 (Singles): Ananya P. (KGP) def. Kavya G. 21-11, 21-13',
    ],
  },
  {
    id: 'm5',
    sport: 'Volleyball',
    category: "Men's Knockouts",
    stage: 'Bronze Medal Match',
    teamA: 'IIT Guwahati',
    scoreA: '0',
    teamB: 'IIT BHU',
    scoreB: '0',
    status: 'UPCOMING',
    venue: 'TSG Volleyball Court #2',
    time: 'Starts Today at 04:30 PM',
    details: ['Match scheduled for 04:30 PM IST.', 'Warmups start at 04:00 PM.'],
  },
  {
    id: 'm6',
    sport: 'Table Tennis',
    category: "Men's Singles",
    stage: 'Quarter Final 4',
    teamA: 'IIT Madras',
    scoreA: '3',
    teamB: 'IIT Roorkee',
    scoreB: '2',
    status: 'COMPLETED',
    venue: 'TSG TT Arena',
    time: 'Full Game',
    details: ['Set scores: 11-9, 8-11, 11-13, 11-7, 11-8'],
  },
];

const medalTally = [
  { rank: 1, iit: 'IIT Kharagpur', gold: 18, silver: 12, bronze: 9, points: 142 },
  { rank: 2, iit: 'IIT Bombay', gold: 15, silver: 14, bronze: 10, points: 128 },
  { rank: 3, iit: 'IIT Delhi', gold: 14, silver: 11, bronze: 13, points: 118 },
  { rank: 4, iit: 'IIT Madras', gold: 10, silver: 13, bronze: 12, points: 102 },
  { rank: 5, iit: 'IIT Kanpur', gold: 8, silver: 9, bronze: 11, points: 86 },
  { rank: 6, iit: 'IIT Roorkee', gold: 6, silver: 8, bronze: 7, points: 68 },
  { rank: 7, iit: 'IIT Guwahati', gold: 5, silver: 6, bronze: 8, points: 58 },
  { rank: 8, iit: 'IIT (BHU) Varanasi', gold: 4, silver: 5, bronze: 6, points: 48 },
];

export default function MatchesPage() {
  const [statusFilter, setStatusFilter] = useState<'ALL' | 'LIVE' | 'COMPLETED' | 'UPCOMING'>('ALL');
  const [searchTerm, setSearchTerm] = useState('');
  const [selectedMatch, setSelectedMatch] = useState<MatchItem | null>(null);

  const filteredMatches = matchesData.filter((m) => {
    const matchesStatus = statusFilter === 'ALL' ? true : m.status === statusFilter;
    const matchesSearch =
      m.sport.toLowerCase().includes(searchTerm.toLowerCase()) ||
      m.teamA.toLowerCase().includes(searchTerm.toLowerCase()) ||
      m.teamB.toLowerCase().includes(searchTerm.toLowerCase()) ||
      m.stage.toLowerCase().includes(searchTerm.toLowerCase());
    return matchesStatus && matchesSearch;
  });

  return (
    <div className="bg-background min-h-screen py-12 space-y-10">
      <div className="max-w-container-max mx-auto px-margin-x space-y-10">
        {/* Header */}
        <div className="text-center max-w-3xl mx-auto space-y-4">
          <div className="inline-flex items-center gap-2 bg-red-100 text-red-700 font-label-bold px-4 py-1 rounded-full text-xs font-extrabold uppercase border border-red-200">
            <Radio className="w-4 h-4 animate-pulse" /> Live Match Center & Results
          </div>
          <h1 className="font-headline-xl text-3xl sm:text-5xl font-black text-primary uppercase tracking-tight">
            MATCHES & SCOREBOARDS
          </h1>
          <p className="font-body-lg text-sm sm:text-base text-on-surface-variant leading-relaxed">
            Real-time score updates, detailed match scorecards, and overall 58th Inter-IIT General Championship points tally.
          </p>
        </div>

        {/* Filter Controls Bar */}
        <div className="bg-white rounded-2xl border border-outline-variant/30 p-4 shadow-sm flex flex-col md:flex-row gap-4 items-center justify-between">
          <div className="relative w-full md:w-80">
            <Search className="w-5 h-5 text-gray-400 absolute left-3.5 top-1/2 -translate-y-1/2" />
            <input
              type="text"
              placeholder="Search team or sport..."
              value={searchTerm}
              onChange={(e) => setSearchTerm(e.target.value)}
              className="w-full pl-10 pr-4 py-2.5 bg-gray-50 border border-outline-variant/40 rounded-xl text-sm font-medium focus:outline-none focus:ring-2 focus:ring-primary"
            />
          </div>

          {/* Status Tabs */}
          <div className="flex items-center gap-2 overflow-x-auto w-full md:w-auto no-scrollbar py-1">
            {(['ALL', 'LIVE', 'COMPLETED', 'UPCOMING'] as const).map((st) => (
              <button
                key={st}
                onClick={() => setStatusFilter(st)}
                className={`px-4 py-2 rounded-xl text-xs font-label-bold uppercase transition-all font-bold shrink-0 ${
                  statusFilter === st
                    ? st === 'LIVE'
                      ? 'bg-red-600 text-white shadow-md'
                      : 'bg-primary text-white shadow-md'
                    : 'bg-gray-100 text-gray-700 hover:bg-gray-200'
                }`}
              >
                {st === 'LIVE' ? '🔴 LIVE NOW' : st}
              </button>
            ))}
          </div>
        </div>

        {/* Matches Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          <AnimatePresence>
            {filteredMatches.map((match) => (
              <motion.div
                key={match.id}
                layout
                initial={{ opacity: 0, scale: 0.95 }}
                animate={{ opacity: 1, scale: 1 }}
                exit={{ opacity: 0, scale: 0.95 }}
                transition={{ duration: 0.3 }}
                whileHover={{ y: -4 }}
                className="bg-white rounded-2xl border border-outline-variant/30 p-6 shadow-sm hover:shadow-xl transition-all flex flex-col justify-between"
              >
                <div>
                  <div className="flex items-center justify-between mb-3 border-b border-gray-100 pb-3">
                    <span className="font-headline-lg text-xs font-extrabold text-amber-600 uppercase">
                      {match.sport} • {match.stage}
                    </span>
                    <span
                      className={`px-2.5 py-0.5 rounded text-[10px] font-label-bold font-bold uppercase ${
                        match.status === 'LIVE'
                          ? 'bg-red-100 text-red-700 border border-red-200 animate-pulse'
                          : match.status === 'COMPLETED'
                          ? 'bg-green-100 text-green-700'
                          : 'bg-blue-100 text-blue-700'
                      }`}
                    >
                      {match.status}
                    </span>
                  </div>

                  {/* Team Scores Box */}
                  <div className="bg-surface-container-low rounded-xl p-4 space-y-3 mb-4 border border-outline-variant/20">
                    <div className="flex items-center justify-between">
                      <span className="font-headline-lg text-base font-extrabold text-primary">
                        {match.teamA}
                      </span>
                      <span className="font-headline-xl text-xl font-black text-primary">
                        {match.scoreA}
                      </span>
                    </div>

                    <div className="h-px bg-outline-variant/30" />

                    <div className="flex items-center justify-between">
                      <span className="font-headline-lg text-base font-extrabold text-primary">
                        {match.teamB}
                      </span>
                      <span className="font-headline-xl text-xl font-black text-primary">
                        {match.scoreB}
                      </span>
                    </div>
                  </div>

                  {match.mvp && (
                    <p className="text-xs text-amber-600 font-label-bold font-bold mb-3 flex items-center gap-1">
                      <Trophy className="w-3.5 h-3.5 fill-current" /> MVP: {match.mvp}
                    </p>
                  )}
                </div>

                <div className="pt-3 border-t border-gray-100 space-y-3">
                  <div className="flex items-center justify-between text-[11px] text-gray-500 font-medium">
                    <span className="flex items-center gap-1">
                      <MapPin className="w-3.5 h-3.5 text-gray-400" /> {match.venue}
                    </span>
                  </div>

                  <button
                    onClick={() => setSelectedMatch(match)}
                    className="w-full bg-primary-container text-white py-2.5 rounded-xl font-label-bold text-xs uppercase font-bold hover:bg-primary transition-colors shadow-sm"
                  >
                    View Detailed Scorecard
                  </button>
                </div>
              </motion.div>
            ))}
          </AnimatePresence>
        </div>

        {/* General Championship Medal Tally */}
        <div className="bg-white rounded-3xl border border-outline-variant/30 p-6 sm:p-8 shadow-sm space-y-6">
          <div className="flex items-center justify-between border-b border-gray-100 pb-4">
            <div>
              <span className="text-xs font-label-bold text-amber-600 uppercase font-bold tracking-widest">
                Overall Championship
              </span>
              <h2 className="font-headline-xl text-xl sm:text-3xl font-black text-primary uppercase">
                GENERAL MEDAL STANDINGS
              </h2>
            </div>
            <Trophy className="w-8 h-8 text-amber-500" />
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
                  <th className="py-3 px-4 text-center">Total Points</th>
                </tr>
              </thead>
              <tbody className="divide-y divide-gray-100 text-sm font-medium text-gray-800">
                {medalTally.map((row) => (
                  <tr
                    key={row.rank}
                    className={`hover:bg-gray-50 transition-colors ${
                      row.iit === 'IIT Kharagpur' ? 'bg-secondary-container/15 font-bold' : ''
                    }`}
                  >
                    <td className="py-3.5 px-4 font-black text-primary">#{row.rank}</td>
                    <td className="py-3.5 px-4 font-extrabold text-primary flex items-center gap-2">
                      {row.iit}
                      {row.iit === 'IIT Kharagpur' && (
                        <span className="bg-secondary-container text-on-secondary-container text-[10px] px-2 py-0.5 rounded font-black">
                          HOST
                        </span>
                      )}
                    </td>
                    <td className="py-3.5 px-4 text-center text-amber-600 font-black">{row.gold}</td>
                    <td className="py-3.5 px-4 text-center text-gray-600 font-bold">{row.silver}</td>
                    <td className="py-3.5 px-4 text-center text-amber-800 font-bold">{row.bronze}</td>
                    <td className="py-3.5 px-4 text-center font-black text-primary text-base">
                      {row.points} pts
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>
      </div>

      {/* Scorecard Modal */}
      <AnimatePresence>
        {selectedMatch && (
          <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/60 backdrop-blur-sm">
            <motion.div
              initial={{ scale: 0.9, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              exit={{ scale: 0.9, opacity: 0 }}
              className="bg-white rounded-2xl max-w-lg w-full p-6 sm:p-8 relative shadow-2xl space-y-6"
            >
              <button
                onClick={() => setSelectedMatch(null)}
                className="absolute top-4 right-4 text-gray-400 hover:text-gray-600 p-1"
              >
                <X className="w-6 h-6" />
              </button>

              <div className="text-center space-y-1">
                <span className="bg-secondary-container/20 text-on-secondary-container text-[11px] font-label-bold font-bold px-3 py-0.5 rounded uppercase">
                  {selectedMatch.sport} • {selectedMatch.stage}
                </span>
                <h3 className="font-headline-lg text-xl font-black text-primary">
                  {selectedMatch.teamA} vs {selectedMatch.teamB}
                </h3>
                <p className="text-xs text-outline">{selectedMatch.venue}</p>
              </div>

              <div className="bg-primary text-white rounded-xl p-4 flex items-center justify-around text-center">
                <div>
                  <p className="text-xs font-label-bold text-gray-300">{selectedMatch.teamA}</p>
                  <p className="text-3xl font-black text-secondary-fixed">{selectedMatch.scoreA}</p>
                </div>
                <span className="text-gray-400 font-bold text-sm">VS</span>
                <div>
                  <p className="text-xs font-label-bold text-gray-300">{selectedMatch.teamB}</p>
                  <p className="text-3xl font-black text-secondary-fixed">{selectedMatch.scoreB}</p>
                </div>
              </div>

              <div className="space-y-2">
                <h4 className="font-headline-lg text-xs font-bold uppercase text-gray-500">
                  Match Timeline & Breakdown
                </h4>
                <ul className="bg-gray-50 rounded-xl p-4 space-y-2 text-xs font-medium text-gray-700 border border-gray-100">
                  {selectedMatch.details.map((detail, index) => (
                    <li key={index} className="flex items-center gap-2">
                      <span className="w-1.5 h-1.5 rounded-full bg-amber-500 shrink-0" />
                      {detail}
                    </li>
                  ))}
                </ul>
              </div>

              <button
                onClick={() => setSelectedMatch(null)}
                className="w-full bg-primary-container text-white py-3 rounded-xl font-label-bold text-xs uppercase font-bold hover:bg-primary transition-colors"
              >
                Close Scorecard
              </button>
            </motion.div>
          </div>
        )}
      </AnimatePresence>
    </div>
  );
}
