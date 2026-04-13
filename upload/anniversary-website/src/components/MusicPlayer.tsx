import { useState, useRef, useEffect } from "react";
import { FiMusic, FiPlay, FiPause, FiVolume2, FiVolumeX, FiChevronDown, FiChevronUp } from "react-icons/fi";

interface MusicPlayerProps {
  songTitle: string;
  songArtist: string;
  songUrl: string; // place your .mp3 in /public/music/
  accentColor?: string;
}

export default function MusicPlayer({
  songTitle,
  songArtist,
  songUrl,
  accentColor = "#c9748f",
}: MusicPlayerProps) {
  const audioRef = useRef<HTMLAudioElement>(null);
  const [isPlaying, setIsPlaying] = useState(false);
  const [isMuted, setIsMuted] = useState(false);
  const [progress, setProgress] = useState(0);
  const [duration, setDuration] = useState(0);
  const [collapsed, setCollapsed] = useState(false);
  const [volume, setVolume] = useState(0.7);

  useEffect(() => {
    const audio = audioRef.current;
    if (!audio) return;
    audio.volume = volume;
    audio.loop = true;

    const updateProgress = () => {
      if (audio.duration) {
        setProgress((audio.currentTime / audio.duration) * 100);
        setDuration(audio.duration);
      }
    };

    audio.addEventListener("timeupdate", updateProgress);
    audio.addEventListener("loadedmetadata", () => setDuration(audio.duration));

    // Auto-play with interaction fallback
    const tryPlay = () => {
      audio.play().then(() => setIsPlaying(true)).catch(() => {});
    };
    tryPlay();

    return () => {
      audio.removeEventListener("timeupdate", updateProgress);
      audio.pause();
    };
  }, [songUrl]);

  const togglePlay = () => {
    const audio = audioRef.current;
    if (!audio) return;
    if (isPlaying) {
      audio.pause();
      setIsPlaying(false);
    } else {
      audio.play();
      setIsPlaying(true);
    }
  };

  const toggleMute = () => {
    const audio = audioRef.current;
    if (!audio) return;
    audio.muted = !isMuted;
    setIsMuted(!isMuted);
  };

  const handleSeek = (e: React.ChangeEvent<HTMLInputElement>) => {
    const audio = audioRef.current;
    if (!audio || !audio.duration) return;
    const val = Number(e.target.value);
    audio.currentTime = (val / 100) * audio.duration;
    setProgress(val);
  };

  const handleVolume = (e: React.ChangeEvent<HTMLInputElement>) => {
    const audio = audioRef.current;
    const val = Number(e.target.value);
    setVolume(val);
    if (audio) audio.volume = val;
  };

  const formatTime = (sec: number) => {
    if (!sec || isNaN(sec)) return "0:00";
    const m = Math.floor(sec / 60);
    const s = Math.floor(sec % 60);
    return `${m}:${s.toString().padStart(2, "0")}`;
  };

  const elapsed = audioRef.current?.duration
    ? (progress / 100) * audioRef.current.duration
    : 0;

  return (
    <div
      className="fixed bottom-6 right-6 z-50 rounded-2xl shadow-2xl overflow-hidden transition-all duration-500"
      style={{
        minWidth: collapsed ? "auto" : "280px",
        background: "rgba(255,255,255,0.92)",
        backdropFilter: "blur(16px)",
        border: `1px solid rgba(201,116,143,0.2)`,
      }}
    >
      <audio ref={audioRef} src={songUrl} preload="auto" />

      {/* Header bar */}
      <div
        className="flex items-center justify-between px-4 py-3 cursor-pointer"
        style={{ borderBottom: collapsed ? "none" : `1px solid rgba(201,116,143,0.15)` }}
        onClick={() => setCollapsed(!collapsed)}
      >
        <div className="flex items-center gap-2">
          <span className="text-rose-400 animate-pulse">
            <FiMusic size={14} />
          </span>
          {!collapsed && (
            <div>
              <p className="font-semibold text-xs" style={{ color: accentColor, fontFamily: "Cormorant Garamond, serif" }}>
                {songTitle}
              </p>
              <p className="text-xs text-gray-400 font-light">{songArtist}</p>
            </div>
          )}
          {collapsed && (
            <p className="text-xs font-medium" style={{ color: accentColor }}>
              ♪ Playing
            </p>
          )}
        </div>
        <button className="text-gray-400 hover:text-rose-400 transition-colors ml-2">
          {collapsed ? <FiChevronUp size={14} /> : <FiChevronDown size={14} />}
        </button>
      </div>

      {/* Expanded controls */}
      {!collapsed && (
        <div className="px-4 py-3 space-y-3">
          {/* Progress bar */}
          <div className="space-y-1">
            <input
              type="range"
              min={0}
              max={100}
              value={progress}
              onChange={handleSeek}
              className="w-full h-1 rounded-full appearance-none cursor-pointer"
              style={{
                background: `linear-gradient(to right, ${accentColor} ${progress}%, #f2c4ce ${progress}%)`,
              }}
            />
            <div className="flex justify-between text-xs text-gray-400">
              <span>{formatTime(elapsed)}</span>
              <span>{formatTime(duration)}</span>
            </div>
          </div>

          {/* Buttons */}
          <div className="flex items-center gap-3">
            <button
              onClick={togglePlay}
              className="flex-shrink-0 w-9 h-9 rounded-full flex items-center justify-center shadow-md transition-transform hover:scale-110"
              style={{ background: accentColor, color: "white" }}
            >
              {isPlaying ? <FiPause size={16} /> : <FiPlay size={16} />}
            </button>

            <button
              onClick={toggleMute}
              className="text-gray-400 hover:text-rose-400 transition-colors"
            >
              {isMuted ? <FiVolumeX size={16} /> : <FiVolume2 size={16} />}
            </button>

            <input
              type="range"
              min={0}
              max={1}
              step={0.05}
              value={volume}
              onChange={handleVolume}
              className="w-full h-1 rounded-full appearance-none cursor-pointer"
              style={{
                background: `linear-gradient(to right, ${accentColor} ${volume * 100}%, #f2c4ce ${volume * 100}%)`,
              }}
            />
          </div>

          <p className="text-center text-xs text-gray-300 italic" style={{ fontFamily: "Cormorant Garamond, serif" }}>
            🎵 Drop your .mp3 in /public/music/
          </p>
        </div>
      )}
    </div>
  );
}
