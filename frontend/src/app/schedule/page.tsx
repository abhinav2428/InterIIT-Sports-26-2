'use client';

import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import {
  Calendar as CalendarIcon,
  Clock,
  MapPin,
  Search,
  Filter,
  Download,
  CheckCircle,
  PlusCircle,
  Sparkles,
} from 'lucide-react';

interface ScheduleItem {
  id: string;
  day: number;
  dateStr: string;
  time: string;
  session: 'Morning' | 'Afternoon' | 'Evening';
  sport: string;
  eventTitle: string;
  venue: string;
  category: "Men's" | "Women's" | 'Mixed';
  status: 'Scheduled' | 'Completed' | 'Ongoing';
}

const daysList = [
  { day: 1, date: '14 Dec', dayName: 'Sun' },
  { day: 2, date: '15 Dec', dayName: 'Mon' },
  { day: 3, date: '16 Dec', dayName: 'Tue' },
  { day: 4, date: '17 Dec', dayName: 'Wed' },
  { day: 5, date: '18 Dec', dayName: 'Thu' },
  { day: 6, date: '19 Dec', dayName: 'Fri' },
  { day: 7, date: '20 Dec', dayName: 'Sat' },
  { day: 8, date: '21 Dec', dayName: 'Sun' },
];

const masterSchedule: ScheduleItem[] = [
  {
    id: 's1',
    day: 1,
    dateStr: '14 Dec 2026',
    time: '08:30 AM',
    session: 'Morning',
    sport: 'Athletics',
    eventTitle: '100m Heats (Men)',
    venue: 'Jnan Ghosh Stadium',
    category: "Men's",
    status: 'Completed',
  },
  {
    id: 's2',
    day: 1,
    dateStr: '14 Dec 2026',
    time: '10:00 AM',
    session: 'Morning',
    sport: 'Basketball',
    eventTitle: 'Group Match: KGP vs Roorkee',
    venue: 'TSG Indoor Court #1',
    category: "Men's",
    status: 'Completed',
  },
  {
    id: 's3',
    day: 1,
    dateStr: '14 Dec 2026',
    time: '04:30 PM',
    session: 'Evening',
    sport: 'Athletics',
    eventTitle: '100m Finals (Men & Women)',
    venue: 'Jnan Ghosh Stadium',
    category: "Men's",
    status: 'Completed',
  },
  {
    id: 's4',
    day: 2,
    dateStr: '15 Dec 2026',
    time: '09:00 AM',
    session: 'Morning',
    sport: 'Badminton',
    eventTitle: 'Team Event Stage 1: Delhi vs Kanpur',
    venue: 'TSG Badminton Complex',
    category: "Women's",
    status: 'Completed',
  },
  {
    id: 's5',
    day: 2,
    dateStr: '15 Dec 2026',
    time: '02:00 PM',
    session: 'Afternoon',
    sport: 'Cricket',
    eventTitle: 'T20 Pool A: Bombay vs Madras',
    venue: 'Tata Sports Ground',
    category: "Men's",
    status: 'Completed',
  },
  {
    id: 's6',
    day: 5,
    dateStr: '18 Dec 2026',
    time: '09:30 AM',
    session: 'Morning',
    sport: 'Athletics',
    eventTitle: '400m Sprint Heats',
    venue: 'Jnan Ghosh Stadium',
    category: "Men's",
    status: 'Ongoing',
  },
  {
    id: 's7',
    day: 5,
    dateStr: '18 Dec 2026',
    time: '05:00 PM',
    session: 'Evening',
    sport: 'Basketball',
    eventTitle: 'Semi Final 1: KGP vs Delhi',
    venue: 'TSG Indoor Court #1',
    category: "Men's",
    status: 'Scheduled',
  },
  {
    id: 's8',
    day: 6,
    dateStr: '19 Dec 2026',
    time: '10:00 AM',
    session: 'Morning',
    sport: 'Swimming',
    eventTitle: '100m Freestyle Finals',
    venue: 'TSG Swimming Pool',
    category: "Men's",
    status: 'Scheduled',
  },
  {
    id: 's9',
    day: 7,
    dateStr: '20 Dec 2026',
    time: '06:00 PM',
    session: 'Evening',
    sport: 'Football',
    eventTitle: 'Gold Medal Final Match',
    venue: 'Main Gymkhana Pitch #1',
    category: "Men's",
    status: 'Scheduled',
  },
  {
    id: 's10',
    day: 8,
    dateStr: '21 Dec 2026',
    time: '05:00 PM',
    session: 'Evening',
    sport: 'Ceremony',
    eventTitle: 'Valedictory & Prize Distribution Ceremony',
    venue: 'Netaji Auditorium',
    category: 'Mixed',
    status: 'Scheduled',
  },
];

export default function SchedulePage() {
  const [selectedDay, setSelectedDay] = useState<number>(5);
  const [selectedSession, setSelectedSession] = useState<string>('All');
  const [searchTerm, setSearchTerm] = useState<string>('');

  const filteredSchedule = masterSchedule.filter((item) => {
    const matchesDay = item.day === selectedDay;
    const matchesSession = selectedSession === 'All' ? true : item.session === selectedSession;
    const matchesSearch =
      item.eventTitle.toLowerCase().includes(searchTerm.toLowerCase()) ||
      item.sport.toLowerCase().includes(searchTerm.toLowerCase()) ||
      item.venue.toLowerCase().includes(searchTerm.toLowerCase());
    return matchesDay && matchesSession && matchesSearch;
  });

  return (
    <div className="bg-background min-h-screen py-12 space-y-10">
      <div className="max-w-container-max mx-auto px-margin-x space-y-10">
        {/* Header */}
        <div className="text-center max-w-3xl mx-auto space-y-4">
          <span className="bg-secondary-container/20 text-on-secondary-container font-label-bold px-4 py-1 rounded-full text-xs font-extrabold uppercase border border-secondary-container">
            58th Inter-IIT Timetable
          </span>
          <h1 className="font-headline-xl text-3xl sm:text-5xl font-black text-primary uppercase tracking-tight">
            EVENT SCHEDULE & TIMETABLE
          </h1>
          <p className="font-body-lg text-sm sm:text-base text-on-surface-variant leading-relaxed">
            Select a day from Dec 14 to Dec 21 to view all scheduled heats, semifinals, and gold medal finals.
          </p>

          <button
            onClick={() => alert('Downloading official 58th Inter-IIT Master Schedule PDF...')}
            className="inline-flex items-center gap-2 bg-primary text-white px-5 py-2.5 rounded-xl font-label-bold text-xs uppercase font-bold hover:bg-primary-container transition-colors shadow-md mt-2"
          >
            <Download className="w-4 h-4 text-secondary-container" /> Download Full Schedule PDF
          </button>
        </div>

        {/* Interactive Day Selector Slider */}
        <div className="bg-white rounded-2xl border border-outline-variant/30 p-3 shadow-sm overflow-x-auto no-scrollbar">
          <div className="flex items-center gap-2 min-w-max justify-start md:justify-center">
            {daysList.map((d) => {
              const isSelected = d.day === selectedDay;
              return (
                <button
                  key={d.day}
                  onClick={() => setSelectedDay(d.day)}
                  className={`px-5 py-3 rounded-xl font-label-bold transition-all flex flex-col items-center min-w-[90px] font-bold ${
                    isSelected
                      ? 'bg-primary text-white shadow-lg scale-105 border border-secondary-container'
                      : 'bg-gray-50 text-gray-700 hover:bg-gray-100 hover:text-primary'
                  }`}
                >
                  <span className="text-[10px] uppercase tracking-wider opacity-80">{d.dayName}</span>
                  <span className="text-base font-black">{d.date}</span>
                  <span className="text-[9px] uppercase tracking-widest mt-0.5 opacity-70">Day {d.day}</span>
                </button>
              );
            })}
          </div>
        </div>

        {/* Filter Controls Bar */}
        <div className="bg-white rounded-2xl border border-outline-variant/30 p-4 shadow-sm flex flex-col md:flex-row gap-4 items-center justify-between">
          <div className="relative w-full md:w-80">
            <Search className="w-5 h-5 text-gray-400 absolute left-3.5 top-1/2 -translate-y-1/2" />
            <input
              type="text"
              placeholder="Search event or venue..."
              value={searchTerm}
              onChange={(e) => setSearchTerm(e.target.value)}
              className="w-full pl-10 pr-4 py-2.5 bg-gray-50 border border-outline-variant/40 rounded-xl text-sm font-medium focus:outline-none focus:ring-2 focus:ring-primary"
            />
          </div>

          <div className="flex items-center gap-2 overflow-x-auto w-full md:w-auto no-scrollbar py-1">
            {(['All', 'Morning', 'Afternoon', 'Evening'] as const).map((s) => (
              <button
                key={s}
                onClick={() => setSelectedSession(s)}
                className={`px-4 py-2 rounded-xl text-xs font-label-bold uppercase transition-all font-bold shrink-0 ${
                  selectedSession === s
                    ? 'bg-primary text-white shadow-md'
                    : 'bg-gray-100 text-gray-700 hover:bg-gray-200'
                }`}
              >
                {s}
              </button>
            ))}
          </div>
        </div>

        {/* Schedule Cards List */}
        <div className="space-y-4">
          <AnimatePresence>
            {filteredSchedule.map((item) => (
              <motion.div
                key={item.id}
                layout
                initial={{ opacity: 0, y: 15 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -15 }}
                transition={{ duration: 0.2 }}
                className="bg-white rounded-2xl border border-outline-variant/30 p-5 sm:p-6 shadow-sm hover:shadow-md transition-all flex flex-col md:flex-row items-start md:items-center justify-between gap-4"
              >
                <div className="flex items-start sm:items-center gap-4">
                  <div className="w-14 h-14 rounded-2xl bg-secondary-container/20 border border-secondary-container/40 flex flex-col items-center justify-center text-primary shrink-0">
                    <Clock className="w-5 h-5 text-amber-600 mb-0.5" />
                    <span className="text-[10px] font-label-bold font-extrabold uppercase">
                      {item.time}
                    </span>
                  </div>

                  <div className="space-y-1">
                    <div className="flex flex-wrap items-center gap-2">
                      <span className="bg-primary text-white px-2.5 py-0.5 rounded text-[10px] font-label-bold font-extrabold uppercase">
                        {item.sport}
                      </span>
                      <span className="bg-gray-100 text-gray-700 px-2.5 py-0.5 rounded text-[10px] font-label-bold font-bold">
                        {item.category}
                      </span>
                      <span
                        className={`text-[10px] font-label-bold font-bold uppercase px-2 py-0.5 rounded ${
                          item.status === 'Completed'
                            ? 'bg-green-100 text-green-700'
                            : item.status === 'Ongoing'
                            ? 'bg-red-100 text-red-700 animate-pulse'
                            : 'bg-blue-100 text-blue-700'
                        }`}
                      >
                        {item.status}
                      </span>
                    </div>

                    <h3 className="font-headline-lg text-lg font-bold text-primary">
                      {item.eventTitle}
                    </h3>

                    <p className="text-xs text-outline font-medium flex items-center gap-1">
                      <MapPin className="w-3.5 h-3.5 text-amber-600" /> {item.venue}
                    </p>
                  </div>
                </div>

                <div className="flex items-center gap-2 w-full md:w-auto pt-2 md:pt-0 border-t md:border-t-0 border-gray-100">
                  <button
                    onClick={() =>
                      alert(`Added "${item.eventTitle}" to your calendar reminder!`)
                    }
                    className="flex-1 md:flex-initial bg-gray-100 hover:bg-secondary-container hover:text-on-secondary-container text-gray-800 px-4 py-2.5 rounded-xl text-xs font-label-bold uppercase font-bold transition-colors flex items-center justify-center gap-1.5"
                  >
                    <PlusCircle className="w-4 h-4" /> Remind Me
                  </button>
                </div>
              </motion.div>
            ))}
          </AnimatePresence>

          {filteredSchedule.length === 0 && (
            <div className="text-center py-16 bg-white rounded-2xl border border-outline-variant/30 p-8 space-y-3">
              <Sparkles className="w-10 h-10 text-gray-400 mx-auto" />
              <h3 className="font-headline-lg text-lg font-bold text-primary">
                No Events Scheduled for Day {selectedDay} in {selectedSession} Session
              </h3>
              <p className="text-xs text-gray-500">
                Please select another day or clear the search query.
              </p>
            </div>
          )}
        </div>
      </div>
    </div>
  );
}
