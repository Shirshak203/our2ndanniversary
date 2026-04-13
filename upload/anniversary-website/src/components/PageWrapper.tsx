import { motion } from "framer-motion";
import { ReactNode } from "react";
import MusicPlayer from "./MusicPlayer";
import Petals from "./Petals";

interface PageWrapperProps {
  children: ReactNode;
  songTitle: string;
  songArtist: string;
  songUrl: string;
  petalCount?: number;
}

export default function PageWrapper({
  children,
  songTitle,
  songArtist,
  songUrl,
  petalCount = 10,
}: PageWrapperProps) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 24 }}
      animate={{ opacity: 1, y: 0 }}
      exit={{ opacity: 0, y: -24 }}
      transition={{ duration: 0.6, ease: "easeOut" }}
      className="w-full min-h-screen pt-20 relative overflow-x-hidden"
    >
      <Petals count={petalCount} />
      {children}
      <MusicPlayer
        songTitle={songTitle}
        songArtist={songArtist}
        songUrl={songUrl}
      />
    </motion.div>
  );
}
