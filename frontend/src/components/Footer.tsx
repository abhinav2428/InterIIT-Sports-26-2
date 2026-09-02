'use client';

import React from 'react';
import Link from 'next/link';
import { MapPin, Phone, Mail, Globe, Award, ShieldCheck, Heart } from 'lucide-react';

export default function Footer() {
  return (
    <footer className="bg-primary text-white border-t border-outline-variant/30 relative z-20">
      <div className="max-w-container-max mx-auto px-margin-x pt-16 pb-12">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-10">
          {/* Column 1: Organization & Logo */}
          <div className="space-y-4">
            <div className="flex items-center gap-3">
              <img
                src="/white-iism.png"
                alt="59th Inter-IIT Sports Meet Logo"
                className="h-14 w-auto object-contain"
              />
              <div>
                <h4 className="font-headline-lg text-lg font-black tracking-tight">59th INTER-IIT</h4>
                <p className="text-secondary-fixed text-xs font-label-bold uppercase">SPORTS MEET 2026</p>
              </div>
            </div>
            <p className="text-xs text-primary-fixed-dim leading-relaxed">
              Hosted by Technology Students' Gymkhana (TSG), Indian Institute of Technology Kharagpur. Celebrating athletic excellence across 23 IITs.
            </p>
            <div className="flex items-center gap-3 pt-2">
              <span className="bg-primary-container px-3 py-1 rounded text-[11px] font-label-bold text-secondary-fixed uppercase border border-secondary-fixed/20 flex items-center gap-1">
                <Award className="w-3.5 h-3.5" /> 14-21 DEC 2026
              </span>
              <span className="bg-primary-container px-3 py-1 rounded text-[11px] font-label-bold text-white uppercase border border-white/10 flex items-center gap-1">
                <MapPin className="w-3.5 h-3.5 text-secondary-container" /> IIT Kharagpur
              </span>
            </div>
          </div>

          {/* Column 2: Quick Links */}
          <div className="space-y-4">
            <h5 className="font-headline-lg text-sm font-bold uppercase tracking-wider text-secondary-fixed border-b border-white/10 pb-2">
              Quick Navigation
            </h5>
            <ul className="space-y-2 text-xs font-label-bold">
              <li>
                <Link href="/" className="text-gray-300 hover:text-secondary-container transition-colors">
                  HOME & OVERVIEW
                </Link>
              </li>
              <li>
                <Link href="/legacy" className="text-gray-300 hover:text-secondary-container transition-colors">
                  LEGACY & HISTORY
                </Link>
              </li>
              <li>
                <Link href="/schedule" className="text-gray-300 hover:text-secondary-container transition-colors">
                  EVENT SCHEDULE
                </Link>
              </li>
              <li>
                <Link href="/matches" className="text-gray-300 hover:text-secondary-container transition-colors">
                  MATCHES & LIVE SCORES
                </Link>
              </li>
              <li>
                <Link href="/events" className="text-gray-300 hover:text-secondary-container transition-colors">
                  SPORTS & DISCIPLINES
                </Link>
              </li>
              <li>
                <Link href="/athletics" className="text-gray-300 hover:text-secondary-container transition-colors">
                  ATHLETICS SPECIFIC HUB
                </Link>
              </li>
              <li>
                <Link href="/gallery" className="text-gray-300 hover:text-secondary-container transition-colors">
                  MEDIA & HIGHLIGHTS
                </Link>
              </li>
            </ul>
          </div>

          {/* Column 3: Emergency Contacts */}
          <div className="space-y-4">
            <h5 className="font-headline-lg text-sm font-bold uppercase tracking-wider text-secondary-fixed border-b border-white/10 pb-2">
              Emergency & Helpdesk
            </h5>
            <ul className="space-y-2.5 text-xs text-primary-fixed-dim">
              <li className="flex items-center gap-2">
                <Phone className="w-4 h-4 text-secondary-container shrink-0" />
                <span>Control Room: +91 3222 282000</span>
              </li>
              <li className="flex items-center gap-2">
                <Phone className="w-4 h-4 text-secondary-container shrink-0" />
                <span>BC Roy Hospital Desk: +91 3222 282200</span>
              </li>
              <li className="flex items-center gap-2">
                <Mail className="w-4 h-4 text-secondary-container shrink-0" />
                <span>interiit2026@kgp.ac.in</span>
              </li>
              <li className="flex items-start gap-2">
                <MapPin className="w-4 h-4 text-secondary-container shrink-0 mt-0.5" />
                <span>TSG Office, Technology Students Gymkhana, IIT Kharagpur - 721302</span>
              </li>
            </ul>
          </div>

          {/* Column 4: TSG & Contingents */}
          <div className="space-y-4">
            <h5 className="font-headline-lg text-sm font-bold uppercase tracking-wider text-secondary-fixed border-b border-white/10 pb-2">
              Technology Students' Gymkhana
            </h5>
            <p className="text-xs text-primary-fixed-dim leading-relaxed">
              TSG is the hub of all student extra-curricular activities in IIT Kharagpur, nurturing leadership, sportsmanship, and technical ingenuity since 1952.
            </p>
            <div className="pt-2">
              <Link
                href="/contact"
                className="inline-flex items-center gap-2 bg-secondary-container text-on-secondary-container px-4 py-2 rounded text-xs font-label-bold uppercase hover:bg-yellow-400 transition-colors font-bold"
              >
                <ShieldCheck className="w-4 h-4" /> Support Desk & FAQs
              </Link>
            </div>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="mt-12 pt-6 border-t border-white/10 flex flex-col md:flex-row items-center justify-between gap-4 text-xs text-gray-400 font-label-bold">
          <p>© 2026 59th Inter-IIT Sports Meet, IIT Kharagpur. All rights reserved.</p>
          <div className="flex items-center gap-1 text-gray-400">
            <span>Designed & Built for Inter-IIT Sports Meet</span>
            <Heart className="w-3.5 h-3.5 text-red-500 fill-current" />
            <span>IIT KGP</span>
          </div>
        </div>
      </div>
    </footer>
  );
}
