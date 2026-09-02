'use client';

import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import {
  Play,
  Image as ImageIcon,
  Download,
  X,
  Sparkles,
  Eye,
  Camera,
  Film,
} from 'lucide-react';

interface GalleryItem {
  id: string;
  title: string;
  category: 'Ceremony' | 'Track & Field' | 'Team Sports' | 'Awards';
  imageUrl: string;
  date: string;
}

const galleryPhotos: GalleryItem[] = [
  {
    id: 'g1',
    title: 'Rhino Torch Relay & Opening Ceremony Parade',
    category: 'Ceremony',
    imageUrl:
      'https://images.unsplash.com/photo-1461896836934-ffe607ba8211?auto=format&fit=crop&w=800&q=80',
    date: 'Dec 14, 2025',
  },
  {
    id: 'g2',
    title: 'Men 100m Final Sprint Finish at Jnan Ghosh Stadium',
    category: 'Track & Field',
    imageUrl:
      'https://images.unsplash.com/photo-1552674605-db6ffd4facb5?auto=format&fit=crop&w=800&q=80',
    date: 'Dec 14, 2025',
  },
  {
    id: 'g3',
    title: 'IIT Kharagpur Basketball Team Celebrating Victory',
    category: 'Team Sports',
    imageUrl:
      'https://images.unsplash.com/photo-1546519638-68e109498ffc?auto=format&fit=crop&w=800&q=80',
    date: 'Dec 18, 2025',
  },
  {
    id: 'g4',
    title: 'High Jump Clearance at 2.05m Height',
    category: 'Track & Field',
    imageUrl:
      'https://images.unsplash.com/photo-1519315901367-f34ff9154487?auto=format&fit=crop&w=800&q=80',
    date: 'Dec 17, 2025',
  },
  {
    id: 'g5',
    title: '4x100m Baton Exchange in Record Time',
    category: 'Track & Field',
    imageUrl:
      'https://images.unsplash.com/photo-1461896836934-ffe607ba8211?auto=format&fit=crop&w=800&q=80',
    date: 'Dec 19, 2025',
  },
  {
    id: 'g6',
    title: 'Podium Medal Ceremony with Director and TSG President',
    category: 'Awards',
    imageUrl:
      'https://images.unsplash.com/photo-1579952363873-27f3bade9f55?auto=format&fit=crop&w=800&q=80',
    date: 'Dec 20, 2025',
  },
];

export default function GalleryPage() {
  const [selectedCategory, setSelectedCategory] = useState<string>('All');
  const [activePhoto, setActivePhoto] = useState<GalleryItem | null>(null);
  const [playingVideo, setPlayingVideo] = useState(false);

  const filteredPhotos =
    selectedCategory === 'All'
      ? galleryPhotos
      : galleryPhotos.filter((p) => p.category === selectedCategory);

  return (
    <div className="bg-background min-h-screen py-12 space-y-12">
      <div className="max-w-container-max mx-auto px-margin-x space-y-12">
        {/* Title */}
        <div className="text-center max-w-3xl mx-auto space-y-4">
          <span className="bg-secondary-container/20 text-on-secondary-container font-label-bold px-4 py-1 rounded-full text-xs font-extrabold uppercase border border-secondary-container">
            Visual Highlights & Media
          </span>
          <h1 className="font-headline-xl text-3xl sm:text-5xl font-black text-primary uppercase tracking-tight">
            MEDIA & PHOTO GALLERY
          </h1>
          <p className="font-body-lg text-sm sm:text-base text-on-surface-variant leading-relaxed">
            Relive iconic moments from the 58th Inter-IIT Sports Meet through high-resolution photography and video reels.
          </p>
        </div>

        {/* Featured Video Highlight Card */}
        <div className="relative rounded-3xl overflow-hidden bg-primary text-white p-8 sm:p-12 shadow-2xl border border-outline-variant/30">
          <div className="absolute inset-0 opacity-30 bg-gradient-to-r from-primary via-primary-container to-transparent z-10 pointer-events-none" />
          <img
            src="https://images.unsplash.com/photo-1461896836934-ffe607ba8211?auto=format&fit=crop&w=1200&q=80"
            alt="Inter-IIT Highlights Video"
            className="absolute inset-0 w-full h-full object-cover"
          />

          <div className="relative z-20 max-w-xl space-y-4">
            <span className="inline-flex items-center gap-1.5 bg-secondary-container text-on-secondary-container px-3 py-1 rounded-full text-xs font-label-bold font-extrabold uppercase">
              <Film className="w-4 h-4" /> Featured Video Reel
            </span>
            <h2 className="font-headline-xl text-2xl sm:text-4xl font-black uppercase text-white tracking-tight">
              58th Inter-IIT Sports Meet Official Aftermovie
            </h2>
            <p className="text-xs sm:text-sm text-primary-fixed-dim leading-relaxed">
              Watch the recap of 8 electric days of athletics, team showdowns, and sportsmanship at IIT Kharagpur.
            </p>
            <button
              onClick={() => setPlayingVideo(true)}
              className="inline-flex items-center gap-2 bg-secondary-container text-on-secondary-container px-6 py-3 rounded-xl font-label-bold text-xs uppercase font-extrabold shadow-lg hover:scale-105 transition-transform"
            >
              <Play className="w-4 h-4 fill-current" /> Watch Video Highlight (HD)
            </button>
          </div>
        </div>

        {/* Gallery Section */}
        <div className="space-y-6">
          <div className="flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4 border-b border-outline-variant/30 pb-4">
            <div>
              <span className="text-xs font-label-bold text-amber-600 uppercase font-bold tracking-widest">
                Photo Collection
              </span>
              <h2 className="font-headline-xl text-2xl sm:text-3xl text-primary font-black uppercase">
                MOMENTS & PHOTO GRID
              </h2>
            </div>

            <div className="flex items-center gap-2 overflow-x-auto w-full sm:w-auto no-scrollbar py-1">
              {(['All', 'Ceremony', 'Track & Field', 'Team Sports', 'Awards'] as const).map(
                (cat) => (
                  <button
                    key={cat}
                    onClick={() => setSelectedCategory(cat)}
                    className={`px-4 py-2 rounded-xl text-xs font-label-bold uppercase transition-all font-bold shrink-0 ${
                      selectedCategory === cat
                        ? 'bg-primary text-white shadow-md'
                        : 'bg-gray-100 text-gray-700 hover:bg-gray-200'
                    }`}
                  >
                    {cat}
                  </button>
                )
              )}
            </div>
          </div>

          {/* Photo Grid */}
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {filteredPhotos.map((photo) => (
              <motion.div
                key={photo.id}
                whileHover={{ y: -6 }}
                onClick={() => setActivePhoto(photo)}
                className="bg-white rounded-2xl border border-outline-variant/30 overflow-hidden shadow-sm hover:shadow-xl transition-all cursor-pointer group flex flex-col justify-between"
              >
                <div className="relative h-56 overflow-hidden">
                  <img
                    src={photo.imageUrl}
                    alt={photo.title}
                    className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                  />
                  <div className="absolute inset-0 bg-black/40 opacity-0 group-hover:opacity-100 transition-opacity flex items-center justify-center">
                    <span className="bg-white/90 text-primary px-3 py-1.5 rounded-full text-xs font-label-bold font-bold flex items-center gap-1">
                      <Eye className="w-4 h-4" /> View Photo
                    </span>
                  </div>
                </div>

                <div className="p-4 space-y-1">
                  <div className="flex items-center justify-between">
                    <span className="text-[10px] font-label-bold uppercase font-bold text-amber-600">
                      {photo.category}
                    </span>
                    <span className="text-[10px] font-label-bold text-gray-400">{photo.date}</span>
                  </div>
                  <h3 className="font-headline-lg text-sm font-bold text-primary group-hover:text-amber-600 transition-colors">
                    {photo.title}
                  </h3>
                </div>
              </motion.div>
            ))}
          </div>
        </div>

        {/* Press Releases & Assets */}
        <div className="bg-white rounded-3xl border border-outline-variant/30 p-6 sm:p-8 shadow-sm space-y-4">
          <div className="flex items-center justify-between border-b border-gray-100 pb-3">
            <div>
              <span className="text-xs font-label-bold text-amber-600 uppercase font-bold">
                Media Resources
              </span>
              <h2 className="font-headline-xl text-xl font-extrabold text-primary uppercase">
                PRESS KIT & HIGH-RES ASSETS
              </h2>
            </div>
            <Download className="w-6 h-6 text-amber-600" />
          </div>
          <p className="text-xs text-on-surface-variant">
            Accredited media organizations can download official logos, mascot vectors, high-res photo albums, and press bulletins for publication.
          </p>
          <button
            onClick={() => alert('Downloading 58th Inter-IIT Official Media Press Kit.zip')}
            className="bg-primary text-white px-5 py-2.5 rounded-xl font-label-bold text-xs uppercase font-bold hover:bg-primary-container transition-colors shadow-sm"
          >
            Download Press Kit (.ZIP)
          </button>
        </div>
      </div>

      {/* Lightbox Modal */}
      <AnimatePresence>
        {activePhoto && (
          <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/80 backdrop-blur-md">
            <motion.div
              initial={{ scale: 0.9, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              exit={{ scale: 0.9, opacity: 0 }}
              className="bg-white rounded-2xl max-w-3xl w-full p-4 relative shadow-2xl space-y-4"
            >
              <button
                onClick={() => setActivePhoto(null)}
                className="absolute top-3 right-3 text-gray-400 hover:text-gray-700 bg-white/80 p-1.5 rounded-full z-10"
              >
                <X className="w-6 h-6" />
              </button>

              <div className="relative h-80 sm:h-96 rounded-xl overflow-hidden">
                <img
                  src={activePhoto.imageUrl}
                  alt={activePhoto.title}
                  className="w-full h-full object-cover"
                />
              </div>

              <div className="flex items-center justify-between px-2">
                <div>
                  <span className="text-[10px] font-label-bold text-amber-600 uppercase font-bold">
                    {activePhoto.category} • {activePhoto.date}
                  </span>
                  <h3 className="font-headline-lg text-lg font-bold text-primary">
                    {activePhoto.title}
                  </h3>
                </div>
                <button
                  onClick={() => alert(`Downloading high-resolution image for ${activePhoto.title}`)}
                  className="bg-secondary-container text-on-secondary-container px-4 py-2 rounded-xl text-xs font-label-bold uppercase font-bold flex items-center gap-1"
                >
                  <Download className="w-4 h-4" /> Download
                </button>
              </div>
            </motion.div>
          </div>
        )}
      </AnimatePresence>

      {/* Video Modal */}
      <AnimatePresence>
        {playingVideo && (
          <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/90 backdrop-blur-md">
            <motion.div
              initial={{ scale: 0.9, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              exit={{ scale: 0.9, opacity: 0 }}
              className="bg-black rounded-2xl max-w-3xl w-full p-4 relative shadow-2xl space-y-4"
            >
              <button
                onClick={() => setPlayingVideo(false)}
                className="absolute top-3 right-3 text-white bg-white/20 p-1.5 rounded-full z-10 hover:bg-white/40"
              >
                <X className="w-6 h-6" />
              </button>
              <div className="aspect-video w-full rounded-xl overflow-hidden bg-gray-900 flex items-center justify-center text-white flex-col space-y-3">
                <Film className="w-16 h-16 text-secondary-container animate-bounce" />
                <p className="font-headline-lg text-lg font-bold text-center">
                  58th Inter-IIT Official Highlights Video Stream
                </p>
                <p className="text-xs text-gray-400">
                  (Simulated video stream player - High Quality 1080p60)
                </p>
              </div>
            </motion.div>
          </div>
        )}
      </AnimatePresence>
    </div>
  );
}
