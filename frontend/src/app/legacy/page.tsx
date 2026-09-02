'use client';

import React from 'react';
import { motion } from 'framer-motion';
import {
  History,
  Award,
  Shield,
  Trophy,
  Flame,
  CheckCircle2,
  Sparkles,
  MapPin,
  Building,
} from 'lucide-react';

export default function LegacyPage() {
  return (
    <div className="bg-background min-h-screen py-12 space-y-16">
      {/* Hero Banner */}
      <section className="relative bg-primary text-white py-16 px-margin-x overflow-hidden clip-slant">
        <div
          className="absolute inset-0 opacity-15 pointer-events-none"
          style={{
            backgroundImage:
              'radial-gradient(circle at 2px 2px, #fecb00 1px, transparent 0)',
            backgroundSize: '24px 24px',
          }}
        />
        <div className="max-w-container-max mx-auto relative z-10 text-center space-y-4">
          <span className="inline-flex items-center gap-1.5 bg-secondary-container text-on-secondary-container px-4 py-1 rounded-full text-xs font-label-bold font-extrabold uppercase shadow-sm">
            <History className="w-4 h-4 fill-current" /> Est. 1961 • 60+ Years of Athletic Excellence
          </span>
          <h1 className="font-headline-xl text-3xl sm:text-5xl lg:text-6xl font-black uppercase tracking-tight text-white">
            THE HISTORICAL LEGACY
          </h1>
          <p className="font-body-lg text-sm sm:text-base text-primary-fixed-dim max-w-3xl mx-auto leading-relaxed">
            From 5 original IITs and 500 student-athletes at IIT Bombay in 1961 to the grand 59th edition hosted by IIT Kharagpur — discovering the spirit, history, and infrastructure of the Inter-IIT Sports Meet.
          </p>
        </div>
      </section>

      <div className="max-w-container-max mx-auto px-margin-x space-y-16">
        {/* Origins & Timeline Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="space-y-6"
          >
            <span className="text-xs font-label-bold text-amber-600 uppercase font-bold tracking-widest">
              Origins & Heritage
            </span>
            <h2 className="font-headline-xl text-3xl sm:text-4xl text-primary font-black uppercase tracking-tight">
              BORN IN 1961 AT <span className="text-amber-600">IIT BOMBAY</span>
            </h2>

            <p className="font-body-md text-sm sm:text-base text-on-surface-variant leading-relaxed">
              Born in 1961, with only 5 IITs mustering a participation of 500 students in its first edition hosted by IIT Bombay, the event has grown steadily since into the nation’s premier collegiate sports tournament.
            </p>

            <p className="font-body-md text-sm sm:text-base text-on-surface-variant leading-relaxed">
              IITs have always strived to give equal importance to sports, extra-curriculars, and co-curriculars in order to build strong, well-rounded, holistic leaders for the nation.
            </p>

            <div className="space-y-4 pt-2">
              <div className="bg-white rounded-2xl border border-outline-variant/30 p-4 shadow-sm flex items-start gap-4">
                <div className="w-10 h-10 rounded-xl bg-amber-100 text-amber-700 flex items-center justify-center shrink-0">
                  <Award className="w-5 h-5" />
                </div>
                <div>
                  <h3 className="font-headline-lg text-base font-bold text-primary">The Heritage</h3>
                  <p className="text-xs text-outline leading-relaxed">
                    With over six decades of legacy, the Inter IIT Sports Meet is an intense battle to victory as the best minds of the country prove their mettle on the field.
                  </p>
                </div>
              </div>

              <div className="bg-white rounded-2xl border border-outline-variant/30 p-4 shadow-sm flex items-start gap-4">
                <div className="w-10 h-10 rounded-xl bg-blue-100 text-blue-700 flex items-center justify-center shrink-0">
                  <Trophy className="w-5 h-5" />
                </div>
                <div>
                  <h3 className="font-headline-lg text-base font-bold text-primary">Competition Heat</h3>
                  <p className="text-xs text-outline leading-relaxed">
                    The stakes are high for the 59th edition, as 23 IITs compete across 13 core sports disciplines for the coveted General Championship Trophy.
                  </p>
                </div>
              </div>
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="bg-white rounded-3xl border border-outline-variant/30 p-6 shadow-xl relative overflow-hidden"
          >
            <img
              src="/Sports-PNG.png"
              alt="Inter IIT Sports Illustration"
              className="w-full h-auto object-contain max-h-[420px] mx-auto hover:scale-105 transition-transform duration-500"
            />
          </motion.div>
        </div>

        {/* Mother of all IITs Section */}
        <div className="bg-white rounded-3xl border border-outline-variant/30 p-8 sm:p-12 shadow-sm grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          <div className="relative rounded-2xl overflow-hidden shadow-lg border border-outline-variant/20">
            <img
              src="/kgp1.jpg"
              alt="Mother of all IITs - IIT Kharagpur Campus"
              className="w-full h-full object-cover max-h-[380px]"
            />
            <div className="absolute bottom-3 left-3 bg-primary/90 text-white px-3 py-1 rounded-lg text-xs font-label-bold font-bold">
              Main Building, IIT Kharagpur
            </div>
          </div>

          <div className="space-y-5">
            <span className="bg-secondary-container/20 text-on-secondary-container font-label-bold px-3 py-1 rounded-md text-xs uppercase font-extrabold border border-secondary-container">
              Institution Heritage
            </span>

            <h2 className="font-headline-xl text-3xl sm:text-4xl text-primary font-black uppercase">
              MOTHER OF ALL IITs — <span className="text-amber-600">IIT KHARAGPUR</span>
            </h2>

            <div className="bg-amber-50 border-l-4 border-amber-500 p-4 rounded-r-xl">
              <p className="font-headline-lg text-base font-bold text-amber-900">
                ‘योगः कर्मसु कौशलम्’ • “Yogah Karmasu Kaushalam”
              </p>
              <p className="text-xs text-amber-800 font-medium italic mt-0.5">
                “Yoga is skill in works — Excellence through perseverance and disciplined action.”
              </p>
            </div>

            <p className="font-body-md text-sm text-on-surface-variant leading-relaxed">
              In keeping with its motto <em>‘Yogah Karmasu Kaushalam’</em>, IIT Kharagpur has always put utmost importance on hard work and perseverance, which are the key ingredients for success in any field. Being the oldest IIT, it has never shied away from taking responsibility and showing its younger counterparts the way.
            </p>

            <p className="font-body-md text-sm text-on-surface-variant leading-relaxed">
              Here in the midst of the calm town of Kharagpur, away from the hustle of metros, lies the largest and oldest campus, aptly named the <strong>‘Mother of all IITs’</strong>. IIT Kharagpur has helped foster the greatest minds of the country, excelling in fields ranging from space research to sports and entrepreneurship.
            </p>
          </div>
        </div>

        {/* TSG Gymkhana Legacy Section */}
        <div className="bg-primary text-white rounded-3xl p-8 sm:p-12 shadow-2xl grid grid-cols-1 lg:grid-cols-2 gap-12 items-center relative overflow-hidden">
          <div className="space-y-5 z-10">
            <span className="inline-flex items-center gap-1 bg-secondary-container text-on-secondary-container px-3.5 py-1 rounded-md text-xs font-label-bold font-extrabold uppercase">
              <Building className="w-4 h-4" /> Established 1952
            </span>

            <h2 className="font-headline-xl text-3xl sm:text-4xl font-black uppercase text-white">
              TECHNOLOGY STUDENTS’ <span className="text-secondary-fixed">GYMKHANA (TSG)</span>
            </h2>

            <p className="text-sm sm:text-base text-primary-fixed-dim leading-relaxed">
              Technology Students’ Gymkhana (TSG) is the hub of all extra-curricular and co-curricular activities at IIT Kharagpur. Managed by students, for students, under the guidance of faculty, TSG nurtures athletic talent and leadership.
            </p>

            <div className="space-y-3 pt-2 text-xs sm:text-sm text-gray-200">
              <div className="flex items-center gap-2 font-bold">
                <CheckCircle2 className="w-5 h-5 text-secondary-container shrink-0" />
                <span>Olympic-sized Swimming Pool & Water Polo Arena</span>
              </div>
              <div className="flex items-center gap-2 font-bold">
                <CheckCircle2 className="w-5 h-5 text-secondary-container shrink-0" />
                <span>Jnan Ghosh Stadium 8-Lane Synthetic Track & Field</span>
              </div>
              <div className="flex items-center gap-2 font-bold">
                <CheckCircle2 className="w-5 h-5 text-secondary-container shrink-0" />
                <span>TSG Indoor Courts for Basketball, Badminton & Squash</span>
              </div>
              <div className="flex items-center gap-2 font-bold">
                <CheckCircle2 className="w-5 h-5 text-secondary-container shrink-0" />
                <span>Tata Sports Ground Cricket Oval & Synthetic Tennis Courts</span>
              </div>
            </div>
          </div>

          <div className="relative rounded-2xl overflow-hidden border-2 border-secondary-fixed/40 shadow-2xl z-10">
            <img
              src="/gymkhana1.jpg"
              alt="Technology Students Gymkhana IIT Kharagpur"
              className="w-full h-full object-cover max-h-[380px]"
            />
            <div className="absolute bottom-3 left-3 bg-black/80 text-white px-3 py-1 rounded-lg text-xs font-label-bold font-bold">
              TSG Gymkhana Building, IIT Kharagpur
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
