'use client';

import { useState, useRef, useEffect, useCallback } from 'react';
import { FiMusic, FiPlay, FiPause, FiSkipForward, FiSkipBack, FiX, FiVolume2, FiVolumeX } from 'react-icons/fi';

interface Song {
  title: string;
  artist: string;
  src: string;
}

const playlist: Song[] = [
  { title: 'Amaro Porano Jaha Chay', artist: 'Arijit Singh', src: '/our2ndanniversary/music/song1.mp3' },
  { title: 'Tum Ho Paas Mere', artist: 'Mohit Chauhan', src: '/our2ndanniversary/music/song2.mp3' },
  { title: 'Agar Tum Saath Ho', artist: 'Arijit Singh', src: '/our2ndanniversary/music/song3.mp3' },
  { title: 'Iris', artist: 'Goo Goo Dolls', src: '/our2ndanniversary/music/song4.mp3' },
  { title: 'Rewrite The Stars', artist: 'Zendaya x Zac Efron', src: '/our2ndanniversary/music/song5.mp3' },
];

export default function MusicPlayer() {
  const [currentTrack, setCurrentTrack] = useState(0);
  const [isPlaying, setIsPlaying] = useState(false);
  const [isMuted, setIsMuted] = useState(false);
  const [isExpanded, setIsExpanded] = useState(false);
  const [progress, setProgress] = useState(0);
  const [hasInteracted, setHasInteracted] = useState(false);
  const [showPrompt, setShowPrompt] = useState(true);
  const audioRef = useRef<HTMLAudioElement | null>(null);

  // Create audio element once
  useEffect(() => {
    const audio = new Audio(playlist[currentTrack].src);
    audio.loop = false;
    audio.volume = isMuted ? 0 : 0.7;
    audioRef.current = audio;

    return () => {
      audio.pause();
      audio.src = '';
    };
  }, []);

  // Update src when track changes
  useEffect(() => {
    if (audioRef.current) {
      audioRef.current.src = playlist[currentTrack].src;
      audioRef.current.load();
      if (isPlaying) {
        audioRef.current.play().catch(() => {});
      }
    }
  }, [currentTrack]);

  // Handle play/pause state sync
  useEffect(() => {
    if (!audioRef.current) return;
    if (isPlaying) {
      audioRef.current.play().catch(() => setIsPlaying(false));
    } else {
      audioRef.current.pause();
    }
  }, [isPlaying]);

  // Handle mute
  useEffect(() => {
    if (audioRef.current) {
      audioRef.current.volume = isMuted ? 0 : 0.7;
    }
  }, [isMuted]);

  const handleNext = useCallback(() => {
    setCurrentTrack((prev) => (prev + 1) % playlist.length);
  }, []);

  const handlePrev = useCallback(() => {
    setCurrentTrack((prev) => (prev - 1 + playlist.length) % playlist.length);
  }, []);

  // Progress tracking
  useEffect(() => {
    const audio = audioRef.current;
    if (!audio) return;

    const updateProgress = () => {
      if (audio.duration) {
        setProgress((audio.currentTime / audio.duration) * 100);
      }
    };

    audio.addEventListener('timeupdate', updateProgress);
    audio.addEventListener('ended', handleNext);

    return () => {
      audio.removeEventListener('timeupdate', updateProgress);
      audio.removeEventListener('ended', handleNext);
    };
  }, [currentTrack, handleNext]);

  // Auto-start on first scroll interaction
  useEffect(() => {
    if (hasInteracted) return;

    const startOnInteraction = () => {
      if (!hasInteracted) {
        setHasInteracted(true);
        setShowPrompt(false);
        // Try to auto-play after first interaction
        setTimeout(() => {
          if (audioRef.current) {
            setIsPlaying(true);
          }
        }, 500);
      }
    };

    window.addEventListener('scroll', startOnInteraction, { once: true });
    window.addEventListener('click', startOnInteraction, { once: true });

    return () => {
      window.removeEventListener('scroll', startOnInteraction);
      window.removeEventListener('click', startOnInteraction);
    };
  }, [hasInteracted]);

  const togglePlay = () => {
    setHasInteracted(true);
    setShowPrompt(false);
    setIsPlaying(!isPlaying);
  };

  const song = playlist[currentTrack];

  return (
    <>
      {/* Floating mini player - always visible */}
      <div
        className="fixed bottom-6 right-6 z-50"
        style={{ fontFamily: "'Cormorant Garamond', serif" }}
      >
        {/* Expanded player panel */}
        {isExpanded && (
          <div
            className="absolute bottom-16 right-0 w-72 rounded-2xl p-5 shadow-2xl backdrop-blur-md"
            style={{
              background: 'rgba(255,255,255,0.95)',
              border: '1px solid rgba(201,116,143,0.2)',
              animation: 'slideIn 0.3s ease-out',
            }}
          >
            {/* Now playing */}
            <p className="text-xs font-light tracking-widest uppercase mb-1" style={{ color: '#c9748f' }}>
              Now Playing
            </p>
            <p className="text-base font-medium truncate" style={{ color: '#2d1b2e' }}>
              {song.title}
            </p>
            <p className="text-xs font-light truncate" style={{ color: '#9c7e88' }}>
              {song.artist}
            </p>

            {/* Progress bar */}
            <div className="w-full h-1 rounded-full mt-3 mb-4" style={{ background: 'rgba(201,116,143,0.15)' }}>
              <div
                className="h-1 rounded-full transition-all duration-300"
                style={{
                  width: `${progress}%`,
                  background: 'linear-gradient(135deg, #c9748f, #e8a0b0)',
                }}
              />
            </div>

            {/* Controls */}
            <div className="flex items-center justify-center gap-4">
              <button
                onClick={handlePrev}
                className="p-2 rounded-full transition-all hover:scale-110 bg-transparent border-none cursor-pointer"
                style={{ color: '#c9748f' }}
                aria-label="Previous"
              >
                <FiSkipBack size={16} />
              </button>

              <button
                onClick={togglePlay}
                className="w-11 h-11 rounded-full flex items-center justify-center transition-all hover:scale-110 bg-transparent border-none cursor-pointer"
                style={{
                  background: 'linear-gradient(135deg, #c9748f, #e8a0b0)',
                  color: '#fff',
                }}
                aria-label={isPlaying ? 'Pause' : 'Play'}
              >
                {isPlaying ? <FiPause size={18} /> : <FiPlay size={18} style={{ marginLeft: 2 }} />}
              </button>

              <button
                onClick={handleNext}
                className="p-2 rounded-full transition-all hover:scale-110 bg-transparent border-none cursor-pointer"
                style={{ color: '#c9748f' }}
                aria-label="Next"
              >
                <FiSkipForward size={16} />
              </button>
            </div>

            {/* Playlist */}
            <div className="mt-4 space-y-1">
              {playlist.map((track, i) => (
                <button
                  key={i}
                  onClick={() => {
                    setCurrentTrack(i);
                    if (!isPlaying) setIsPlaying(true);
                  }}
                  className="w-full text-left px-3 py-2 rounded-lg transition-all hover:bg-rose-50 bg-transparent border-none cursor-pointer flex items-center gap-3"
                >
                  <span
                    className="text-xs font-light w-4 text-center"
                    style={{ color: i === currentTrack ? '#c9748f' : '#c4a0a8' }}
                  >
                    {i + 1}
                  </span>
                  <div className="flex-1 min-w-0">
                    <p
                      className="text-sm font-medium truncate"
                      style={{ color: i === currentTrack ? '#c9748f' : '#2d1b2e' }}
                    >
                      {track.title}
                    </p>
                    <p className="text-xs font-light truncate" style={{ color: '#9c7e88' }}>
                      {track.artist}
                    </p>
                  </div>
                  {i === currentTrack && isPlaying && (
                    <span className="flex gap-0.5 items-end h-3">
                      <span className="w-0.5 rounded-full" style={{ background: '#c9748f', height: '40%', animation: 'barAnim 0.6s ease infinite alternate' }} />
                      <span className="w-0.5 rounded-full" style={{ background: '#c9748f', height: '80%', animation: 'barAnim 0.5s ease infinite alternate 0.1s' }} />
                      <span className="w-0.5 rounded-full" style={{ background: '#c9748f', height: '60%', animation: 'barAnim 0.7s ease infinite alternate 0.2s' }} />
                    </span>
                  )}
                </button>
              ))}
            </div>
          </div>
        )}

        {/* Compact floating button */}
        <div className="flex items-center gap-2">
          {/* Close / mute button */}
          <button
            onClick={() => {
              if (hasInteracted) {
                setIsMuted(!isMuted);
              } else {
                setIsMuted(!isMuted);
              }
            }}
            className="w-9 h-9 rounded-full flex items-center justify-center transition-all hover:scale-110 bg-transparent border-none cursor-pointer shadow-lg backdrop-blur-sm"
            style={{
              background: isMuted ? 'rgba(255,255,255,0.9)' : 'rgba(255,255,255,0.7)',
              color: isMuted ? '#9c7e88' : '#c9748f',
              border: '1px solid rgba(201,116,143,0.15)',
            }}
            aria-label={isMuted ? 'Unmute' : 'Mute'}
          >
            {isMuted ? <FiVolumeX size={14} /> : <FiVolume2 size={14} />}
          </button>

          {/* Main toggle button */}
          <button
            onClick={() => {
              setIsExpanded(!isExpanded);
              if (!hasInteracted && !isExpanded) {
                togglePlay();
              }
            }}
            className="w-12 h-12 rounded-full flex items-center justify-center transition-all hover:scale-110 shadow-xl bg-transparent border-none cursor-pointer backdrop-blur-sm"
            style={{
              background: isPlaying
                ? 'linear-gradient(135deg, #c9748f, #e8a0b0)'
                : 'rgba(255,255,255,0.9)',
              color: isPlaying ? '#fff' : '#c9748f',
              border: isPlaying ? 'none' : '1px solid rgba(201,116,143,0.2)',
            }}
            aria-label="Toggle music player"
          >
            {isPlaying ? (
              <span className="flex gap-0.5 items-end h-4">
                <span className="w-1 rounded-full bg-white" style={{ height: '40%', animation: 'barAnim 0.6s ease infinite alternate' }} />
                <span className="w-1 rounded-full bg-white" style={{ height: '80%', animation: 'barAnim 0.5s ease infinite alternate 0.1s' }} />
                <span className="w-1 rounded-full bg-white" style={{ height: '60%', animation: 'barAnim 0.7s ease infinite alternate 0.2s' }} />
              </span>
            ) : (
              <FiMusic size={20} />
            )}
          </button>
        </div>

        {/* Song name tooltip when collapsed */}
        {!isExpanded && isPlaying && (
          <div
            className="absolute bottom-16 right-0 px-3 py-2 rounded-xl text-xs font-light whitespace-nowrap shadow-lg"
            style={{
              background: 'rgba(255,255,255,0.95)',
              color: '#2d1b2e',
              border: '1px solid rgba(201,116,143,0.15)',
            }}
          >
            {song.title} — {song.artist}
          </div>
        )}
      </div>

      {/* Initial prompt - only shows before first interaction */}
      {showPrompt && (
        <div
          className="fixed bottom-6 right-20 z-50 flex items-center gap-2 px-4 py-2 rounded-full shadow-lg animate-bounce cursor-pointer backdrop-blur-sm"
          style={{
            background: 'rgba(255,255,255,0.9)',
            border: '1px solid rgba(201,116,143,0.2)',
            color: '#c9748f',
            fontSize: '0.8rem',
          }}
          onClick={() => {
            togglePlay();
            setIsExpanded(true);
          }}
        >
          <FiMusic size={14} />
          <span className="font-light">Play our songs</span>
        </div>
      )}

      {/* CSS animations */}
      <style jsx global>{`
        @keyframes barAnim {
          from { height: 20%; }
          to { height: 100%; }
        }
        @keyframes slideIn {
          from {
            opacity: 0;
            transform: translateY(10px);
          }
          to {
            opacity: 1;
            transform: translateY(0);
          }
        }
      `}</style>
    </>
  );
}
