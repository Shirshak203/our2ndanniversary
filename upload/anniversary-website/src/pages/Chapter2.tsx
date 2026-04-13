import { motion } from "framer-motion";
import { FiArrowLeft, FiArrowRight } from "react-icons/fi";
import { Link } from "react-router-dom";
import PageWrapper from "../components/PageWrapper";
import PhotoSlot from "../components/PhotoSlot";

function FadeUp({ children, delay = 0, className = "" }: { children: React.ReactNode; delay?: number; className?: string }) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 40 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.7, delay }}
      className={className}
    >
      {children}
    </motion.div>
  );
}

const adventures = [
  { emoji: "✈️", title: "[Trip/Adventure 1]", desc: "[✏️ Describe a trip or adventure you shared together.]" },
  { emoji: "🍽️", title: "[Restaurant/Food Memory]", desc: "[✏️ A favourite restaurant, meal, or cooking moment together.]" },
  { emoji: "🎉", title: "[Celebration]", desc: "[✏️ A birthday, holiday, or special event you celebrated.]" },
  { emoji: "🌅", title: "[A Quiet Moment]", desc: "[✏️ A peaceful, cosy moment — a sunrise, a walk, a lazy morning.]" },
  { emoji: "🎬", title: "[Shared Passion]", desc: "[✏️ Something you both love — a film, a series, a hobby.]" },
  { emoji: "💪", title: "[A Challenge We Overcame]", desc: "[✏️ A difficult time you faced and got through together.]" },
];

export default function Chapter2() {
  return (
    <PageWrapper
      songTitle="Your Chapter II Song"
      songArtist="Artist Name"
      songUrl="/music/chapter2.mp3"
      petalCount={10}
    >
      {/* Hero Banner */}
      <section className="relative h-72 md:h-96 flex items-center justify-center overflow-hidden">
        <div
          className="absolute inset-0 bg-cover bg-center"
          style={{ backgroundImage: "url('/images/chapter-bg-2.jpg')" }}
        />
        <div
          className="absolute inset-0"
          style={{ background: "linear-gradient(to bottom, rgba(245,240,250,0.4), rgba(245,240,250,0.85))" }}
        />
        <div className="relative z-10 text-center px-6">
          <motion.p
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="font-script mb-2"
            style={{ fontSize: "1.8rem", color: "#9b72c9" }}
          >
            Chapter Two
          </motion.p>
          <motion.h1
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="font-display font-light"
            style={{ fontSize: "clamp(2rem, 6vw, 4rem)", color: "#2d1b2e" }}
          >
            Growing Together
          </motion.h1>
          <motion.div
            initial={{ scaleX: 0 }}
            animate={{ scaleX: 1 }}
            transition={{ duration: 0.8, delay: 0.5 }}
            className="h-px w-24 mx-auto mt-4"
            style={{ background: "#9b72c9" }}
          />
        </div>
      </section>

      <div className="max-w-5xl mx-auto px-6 py-16 space-y-20">

        {/* Intro */}
        <FadeUp className="max-w-2xl mx-auto text-center">
          <p className="font-script text-2xl mb-4" style={{ color: "#9b72c9" }}>Side by Side</p>
          <p
            className="font-display italic text-xl md:text-2xl font-light leading-relaxed"
            style={{ color: "#4a3040" }}
          >
            [✏️ Write about how your relationship grew. How you learned each other's rhythms, built routines, faced the world as a team. What growing together looked like for you two.]
          </p>
        </FadeUp>

        {/* Big feature layout */}
        <FadeUp>
          <div className="grid md:grid-cols-5 gap-8 items-center">
            <div className="md:col-span-3 space-y-5">
              <p className="font-script text-2xl" style={{ color: "#9b72c9" }}>Building Our World</p>
              <p
                className="font-display text-lg leading-relaxed font-light"
                style={{ color: "#4a3040" }}
              >
                [✏️ Talk about the life you've been building together — maybe a home, shared dreams, daily rituals. The little things that became your everything.]
              </p>
              <p
                className="font-display text-lg leading-relaxed font-light"
                style={{ color: "#4a3040" }}
              >
                [✏️ Continue the story — the inside jokes, the things only you two know, the language only you two speak.]
              </p>
            </div>
            <div className="md:col-span-2">
              <PhotoSlot label="Building a life together" aspectRatio="portrait" rotate={2} />
            </div>
          </div>
        </FadeUp>

        {/* Photo strip */}
        <FadeUp>
          <div className="grid grid-cols-4 gap-3">
            <PhotoSlot label="Memory 1" aspectRatio="portrait" rotate={-1.5} />
            <PhotoSlot label="Memory 2" aspectRatio="portrait" rotate={1} />
            <PhotoSlot label="Memory 3" aspectRatio="portrait" rotate={-1} />
            <PhotoSlot label="Memory 4" aspectRatio="portrait" rotate={2} />
          </div>
        </FadeUp>

        {/* Adventures grid */}
        <FadeUp>
          <p className="font-script text-2xl text-center mb-10" style={{ color: "#9b72c9" }}>
            Things We've Shared
          </p>
          <div className="grid md:grid-cols-3 gap-5">
            {adventures.map((adv, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: i * 0.08 }}
                className="rounded-2xl p-6"
                style={{
                  background: "rgba(255,255,255,0.7)",
                  border: "1px solid rgba(155,114,201,0.15)",
                }}
              >
                <div className="text-3xl mb-3">{adv.emoji}</div>
                <h4 className="font-display text-lg font-medium mb-2" style={{ color: "#2d1b2e" }}>
                  {adv.title}
                </h4>
                <p className="text-sm font-light leading-relaxed" style={{ color: "#6b4f5e" }}>
                  {adv.desc}
                </p>
              </motion.div>
            ))}
          </div>
        </FadeUp>

        {/* Photo spread */}
        <FadeUp>
          <p className="font-script text-2xl text-center mb-8" style={{ color: "#9b72c9" }}>
            Adventures Together
          </p>
          <div className="grid grid-cols-2 gap-4">
            <PhotoSlot label="Our biggest adventure" aspectRatio="landscape" rotate={-1} />
            <PhotoSlot label="A favourite trip" aspectRatio="landscape" rotate={1} />
            <PhotoSlot label="Just exploring" aspectRatio="landscape" rotate={0.5} />
            <PhotoSlot label="Somewhere beautiful" aspectRatio="landscape" rotate={-0.5} />
          </div>
        </FadeUp>

        {/* Quote */}
        <FadeUp className="max-w-2xl mx-auto">
          <div
            className="rounded-3xl p-10 text-center"
            style={{ background: "linear-gradient(135deg, rgba(155,114,201,0.08), rgba(201,116,143,0.08))" }}
          >
            <p
              className="font-display italic text-2xl font-light leading-relaxed"
              style={{ color: "#2d1b2e" }}
            >
              "A successful marriage requires falling in love many times, always with the same person."
            </p>
            <p className="mt-4 text-sm font-light tracking-widest uppercase" style={{ color: "#9b72c9" }}>
              — Mignon McLaughlin
            </p>
          </div>
        </FadeUp>

        {/* Navigation */}
        <div className="flex justify-between items-center pt-8 border-t" style={{ borderColor: "rgba(155,114,201,0.2)" }}>
          <Link
            to="/chapter-1"
            className="inline-flex items-center gap-2 text-sm font-light transition-colors hover:text-purple-500"
            style={{ color: "#9c7e88", fontFamily: "Cormorant Garamond, serif", fontSize: "1rem" }}
          >
            <FiArrowLeft /> Chapter I
          </Link>
          <Link
            to="/chapter-3"
            className="inline-flex items-center gap-2 px-6 py-2 rounded-full text-white font-light transition-all hover:scale-105"
            style={{
              background: "linear-gradient(135deg, #9b72c9, #b898dc)",
              fontFamily: "Cormorant Garamond, serif",
              fontSize: "1rem",
            }}
          >
            Chapter III <FiArrowRight />
          </Link>
        </div>
      </div>
    </PageWrapper>
  );
}
