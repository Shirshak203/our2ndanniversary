'use client';

import { motion } from "framer-motion";
import { FiHeart, FiArrowRight } from "react-icons/fi";
import Navbar from "@/components/anniversary/Navbar";
import Petals from "@/components/anniversary/Petals";
import PhotoSlot from "@/components/anniversary/PhotoSlot";
import FadeUp from "@/components/anniversary/FadeUp";

/* ──────────────────────────────────────────
   Data
   ────────────────────────────────────────── */
const chapters = [
  { number: "I", title: "How It All Began", subtitle: "The moment everything changed", hash: "#chapter-1", bg: "#fdf0f3" },
  { number: "II", title: "Growing Together", subtitle: "Every adventure, side by side", hash: "#chapter-2", bg: "#f5f0fa" },
  { number: "III", title: "Our Favourite Moments", subtitle: "The days we'll never forget", hash: "#chapter-3", bg: "#f0f4fa" },
  { number: "IV", title: "Looking Forward", subtitle: "All that's still to come", hash: "#chapter-4", bg: "#f5faf0" },
];

const chapter1Milestones = [
  { date: "[Date]", title: "The Day We Met", desc: "[Describe what happened on the day you met.]" },
  { date: "[Date]", title: "Our First Conversation", desc: "[What did you talk about? What made you smile?]" },
  { date: "[Date]", title: "When I Knew", desc: "[The moment you realized she was someone truly special.]" },
  { date: "[Date]", title: "Our First Date", desc: "[Where did you go? How did it feel?]" },
];

const chapter2Adventures = [
  { emoji: "✈️", title: "[Trip/Adventure 1]", desc: "[Describe a trip or adventure you shared together.]" },
  { emoji: "🍽️", title: "[Restaurant/Food Memory]", desc: "[A favourite restaurant, meal, or cooking moment together.]" },
  { emoji: "🎉", title: "[Celebration]", desc: "[A birthday, holiday, or special event you celebrated.]" },
  { emoji: "🌅", title: "[A Quiet Moment]", desc: "[A peaceful, cosy moment — a sunrise, a walk, a lazy morning.]" },
  { emoji: "🎬", title: "[Shared Passion]", desc: "[Something you both love — a film, a series, a hobby.]" },
  { emoji: "💪", title: "[A Challenge We Overcame]", desc: "[A difficult time you faced and got through together.]" },
];

const chapter3Moments = [
  { title: "[Favourite Moment #1]", date: "[Date]", desc: "[Describe your first favourite memory in detail.]" },
  { title: "[Favourite Moment #2]", date: "[Date]", desc: "[A time you laughed until you couldn't breathe.]" },
  { title: "[Favourite Moment #3]", date: "[Date]", desc: "[Another cherished memory — maybe a trip, a surprise.]" },
  { title: "[Favourite Moment #4]", date: "[Date]", desc: "[A moment you'll both always remember.]" },
];

const chapter4Dreams = [
  { emoji: "🌍", title: "[Travel Dream]", desc: "[A place you both want to visit together.]" },
  { emoji: "🏡", title: "[A Future Home]", desc: "[What does your dream home together look like?]" },
  { emoji: "🎯", title: "[A Shared Goal]", desc: "[Something you're working toward together.]" },
  { emoji: "🌿", title: "[A Simple Joy]", desc: "[A simple future moment you're looking forward to.]" },
];

const chapter4Reasons = [
  "[I love you because of your laugh]",
  "[I love you because you make everything better]",
  "[I love you because of the way you care]",
  "[I love you because you challenge me to grow]",
  "[I love you because of your strength]",
  "[I love you because you're my home]",
  "[I love you because of your kindness]",
  "[I love you because you chose me]",
  "[I love you because of who you are]",
];

const loveLetterCards = [
  { icon: "💫", title: "My Favourite Thing About You", desc: "[Write one thing here — just one, your absolute favourite thing about her.]" },
  { icon: "🌹", title: "You Make Me Feel", desc: "[Complete this: 'When I'm with you, I feel...' Be honest and tender.]" },
  { icon: "∞", title: "My Promise to You", desc: "[One sentence. The most important thing you promise her.]" },
];

/* ──────────────────────────────────────────
   Helper: scroll to section
   ────────────────────────────────────────── */
function scrollTo(hash: string) {
  const el = document.querySelector(hash);
  if (el) el.scrollIntoView({ behavior: "smooth" });
}

/* ══════════════════════════════════════════
   Main Page
   ══════════════════════════════════════════ */
export default function AnniversaryPage() {
  return (
    <div className="w-full min-h-screen">
      <Navbar />
      <Petals count={16} />

      {/* ═══════ HERO ═══════ */}
      <section id="hero" className="relative min-h-screen flex flex-col items-center justify-center text-center overflow-hidden -mt-20">
        <div
          className="absolute inset-0 bg-cover bg-center"
          style={{ backgroundImage: "url('/images/hero-bg.jpg')" }}
        />
        <div
          className="absolute inset-0"
          style={{
            background:
              "linear-gradient(to bottom, rgba(253,240,243,0.55) 0%, rgba(253,240,243,0.75) 60%, rgba(253,240,243,1) 100%)",
          }}
        />

        <div className="relative z-10 px-6 max-w-3xl mx-auto space-y-6">
          <motion.div
            initial={{ scale: 0, opacity: 0 }}
            animate={{ scale: 1, opacity: 1 }}
            transition={{ type: "spring", stiffness: 200, delay: 0.2 }}
            className="flex justify-center"
          >
            <span className="heartbeat" style={{ fontSize: "3rem" }}>❤️</span>
          </motion.div>

          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.4, duration: 0.8 }}
            className="font-script text-rose-400 tracking-wide"
            style={{ fontSize: "2rem" }}
          >
            Happy Anniversary, My Love
          </motion.p>

          <motion.h1
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.55, duration: 0.9 }}
            className="font-display font-light leading-tight"
            style={{ fontSize: "clamp(2.8rem, 8vw, 6rem)", color: "#2d1b2e" }}
          >
            Our Beautiful
            <br />
            <span className="gold-shimmer font-semibold">Love Story</span>
          </motion.h1>

          <motion.p
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.8, duration: 1 }}
            className="font-display italic text-gray-500 text-lg md:text-xl font-light max-w-lg mx-auto"
          >
            Every page is a memory. Every chapter, a gift. This is our world — written just for you.
          </motion.p>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 1.0, duration: 0.7 }}
            className="flex flex-col sm:flex-row gap-4 justify-center pt-4"
          >
            <button
              onClick={() => scrollTo("#chapter-1")}
              className="inline-flex items-center justify-center gap-2 px-8 py-3 rounded-full text-white font-light tracking-wide transition-all hover:scale-105 hover:shadow-xl bg-transparent border-none cursor-pointer"
              style={{
                background: "linear-gradient(135deg, #c9748f, #e8a0b0)",
                boxShadow: "0 8px 30px rgba(201,116,143,0.35)",
                fontFamily: "Cormorant Garamond, serif",
                fontSize: "1.1rem",
              }}
            >
              Begin Our Story <FiArrowRight />
            </button>
            <button
              onClick={() => scrollTo("#love-letter")}
              className="inline-flex items-center justify-center gap-2 px-8 py-3 rounded-full font-light tracking-wide transition-all hover:scale-105 border bg-transparent cursor-pointer"
              style={{
                borderColor: "#c9748f",
                color: "#c9748f",
                fontFamily: "Cormorant Garamond, serif",
                fontSize: "1.1rem",
              }}
            >
              Read My Letter <FiHeart />
            </button>
          </motion.div>

          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 1.3, duration: 1 }}
            className="pt-4"
          >
            <span
              className="inline-block px-5 py-2 rounded-full text-sm font-light tracking-widest uppercase"
              style={{
                background: "rgba(201,116,143,0.08)",
                color: "#c9748f",
                border: "1px solid rgba(201,116,143,0.2)",
              }}
            >
              ✦ Since [Your Date Here] ✦
            </span>
          </motion.div>
        </div>

        <motion.div
          className="absolute bottom-10 left-1/2 -translate-x-1/2"
          animate={{ y: [0, 10, 0] }}
          transition={{ repeat: Infinity, duration: 2 }}
        >
          <div
            className="w-6 h-10 rounded-full border-2 flex justify-center pt-2"
            style={{ borderColor: "rgba(201,116,143,0.4)" }}
          >
            <div className="w-1 h-2 rounded-full" style={{ background: "#c9748f" }} />
          </div>
        </motion.div>
      </section>

      {/* ═══════ PHOTO COLLAGE ═══════ */}
      <section className="max-w-6xl mx-auto px-6 py-20">
        <FadeUp className="text-center mb-14">
          <p className="font-script text-rose-400 text-3xl mb-2">Captured Moments</p>
          <h2 className="font-display text-4xl md:text-5xl font-light" style={{ color: "#2d1b2e" }}>
            Our Gallery of <span style={{ color: "#c9748f" }}>Memories</span>
          </h2>
          <div className="divider mt-6">
            <span className="text-rose-300 text-xs tracking-widest uppercase">♥ ♥ ♥</span>
          </div>
        </FadeUp>

        <div className="grid grid-cols-2 md:grid-cols-4 gap-4 md:gap-5">
          <FadeUp delay={0} className="col-span-2 row-span-2">
            <PhotoSlot label="Our favourite photo together" aspectRatio="landscape" rotate={-1} />
          </FadeUp>
          <FadeUp delay={0.1}>
            <PhotoSlot label="A sweet memory" aspectRatio="square" rotate={1} />
          </FadeUp>
          <FadeUp delay={0.2}>
            <PhotoSlot label="Us laughing" aspectRatio="square" rotate={-1.5} />
          </FadeUp>
          <FadeUp delay={0.3}>
            <PhotoSlot label="A special day" aspectRatio="square" rotate={1} />
          </FadeUp>
          <FadeUp delay={0.4}>
            <PhotoSlot label="My favourite smile" aspectRatio="square" rotate={-0.5} />
          </FadeUp>
        </div>

        <div className="grid grid-cols-3 gap-4 md:gap-5 mt-4 md:mt-5">
          <FadeUp delay={0.1}>
            <PhotoSlot label="An adventure" aspectRatio="portrait" rotate={-1} />
          </FadeUp>
          <FadeUp delay={0.2}>
            <PhotoSlot label="Pure joy" aspectRatio="portrait" rotate={0.5} />
          </FadeUp>
          <FadeUp delay={0.3}>
            <PhotoSlot label="Together always" aspectRatio="portrait" rotate={-0.5} />
          </FadeUp>
        </div>
      </section>

      {/* ═══════ CHAPTERS PREVIEW ═══════ */}
      <section
        className="py-24 px-6"
        style={{ background: "linear-gradient(to bottom, #fdf0f3, #fff5f7)" }}
      >
        <div className="max-w-5xl mx-auto">
          <FadeUp className="text-center mb-16">
            <p className="font-script text-rose-400 text-3xl mb-2">Our Journey</p>
            <h2 className="font-display text-4xl md:text-5xl font-light" style={{ color: "#2d1b2e" }}>
              Chapters of <span style={{ color: "#c9748f" }}>Us</span>
            </h2>
          </FadeUp>

          <div className="grid md:grid-cols-2 gap-6">
            {chapters.map((ch, i) => (
              <FadeUp key={ch.hash} delay={i * 0.1}>
                <button
                  onClick={() => scrollTo(ch.hash)}
                  className="group block rounded-3xl p-8 transition-all duration-300 hover:shadow-2xl hover:-translate-y-1 w-full text-left bg-transparent border-none cursor-pointer"
                  style={{
                    background: ch.bg,
                    border: "1px solid rgba(201,116,143,0.12)",
                  }}
                >
                  <div className="flex items-start justify-between mb-4">
                    <span
                      className="font-script text-6xl leading-none"
                      style={{ color: "rgba(201,116,143,0.25)" }}
                    >
                      {ch.number}
                    </span>
                    <span
                      className="w-10 h-10 rounded-full flex items-center justify-center transition-all group-hover:bg-rose-400 group-hover:text-white"
                      style={{ background: "rgba(201,116,143,0.1)", color: "#c9748f" }}
                    >
                      <FiArrowRight size={16} />
                    </span>
                  </div>
                  <h3 className="font-display text-2xl font-medium mb-1" style={{ color: "#2d1b2e" }}>
                    {ch.title}
                  </h3>
                  <p className="text-sm font-light" style={{ color: "#9c7e88" }}>
                    {ch.subtitle}
                  </p>
                </button>
              </FadeUp>
            ))}
          </div>
        </div>
      </section>

      {/* ═══════ QUOTE ═══════ */}
      <section className="py-20 px-6">
        <FadeUp className="max-w-3xl mx-auto text-center">
          <div className="letter-paper rounded-3xl p-10 md:p-14 relative mt-8">
            <p
              className="font-display italic text-2xl md:text-3xl font-light leading-relaxed"
              style={{ color: "#2d1b2e" }}
            >
              &quot;In all the world, there is no heart for me like yours.
              In all the world, there is no love for you like mine.&quot;
            </p>
            <p className="mt-6 text-sm font-light tracking-widest uppercase" style={{ color: "#c9748f" }}>
              — Maya Angelou
            </p>
          </div>
        </FadeUp>
      </section>

      {/* ═══════════════════════════════════════════════
         CHAPTER 1 — How It All Began
         ═══════════════════════════════════════════════ */}
      <section id="chapter-1" className="w-full">
        {/* Banner */}
        <div className="relative h-72 md:h-96 flex items-center justify-center overflow-hidden">
          <div className="absolute inset-0 bg-cover bg-center" style={{ backgroundImage: "url('/images/chapter-bg-1.jpg')" }} />
          <div className="absolute inset-0" style={{ background: "linear-gradient(to bottom, rgba(253,240,243,0.4), rgba(253,240,243,0.85))" }} />
          <div className="relative z-10 text-center px-6">
            <motion.p initial={{ opacity: 0, y: -20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ duration: 0.8 }} className="font-script text-rose-400 mb-2" style={{ fontSize: "1.8rem" }}>Chapter One</motion.p>
            <motion.h1 initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ duration: 0.8, delay: 0.2 }} className="font-display font-light" style={{ fontSize: "clamp(2rem, 6vw, 4rem)", color: "#2d1b2e" }}>How It All Began</motion.h1>
            <motion.div initial={{ scaleX: 0 }} whileInView={{ scaleX: 1 }} viewport={{ once: true }} transition={{ duration: 0.8, delay: 0.5 }} className="h-px w-24 mx-auto mt-4" style={{ background: "#c9748f" }} />
          </div>
        </div>

        <div className="max-w-5xl mx-auto px-6 py-16 space-y-20">
          <FadeUp className="max-w-2xl mx-auto text-center">
            <p className="font-script text-rose-400 text-2xl mb-4">The Beginning</p>
            <p className="font-display italic text-xl md:text-2xl font-light leading-relaxed" style={{ color: "#4a3040" }}>
              [✏️ Replace this with your story — how you first met, what made that moment special, and how you knew she was the one.]
            </p>
          </FadeUp>

          <FadeUp>
            <div className="grid md:grid-cols-2 gap-10 items-center">
              <PhotoSlot label="Where we first met" aspectRatio="portrait" rotate={-2} />
              <div className="space-y-5">
                <p className="font-script text-rose-400 text-2xl">The First Hello</p>
                <p className="font-display text-lg leading-relaxed font-light" style={{ color: "#4a3040" }}>
                  [✏️ Tell the story of your first meeting here. What did you say? What were you wearing? What did the world look like in that moment?]
                </p>
                <p className="font-display text-lg leading-relaxed font-light" style={{ color: "#4a3040" }}>
                  [✏️ You can continue the story here — the nervousness, the excitement, the way time seemed to stop.]
                </p>
              </div>
            </div>
          </FadeUp>

          <FadeUp>
            <PhotoSlot label="Our first photo together" aspectRatio="wide" />
          </FadeUp>

          <FadeUp className="max-w-3xl mx-auto">
            <p className="font-script text-rose-400 text-2xl text-center mb-10">Our First Milestones</p>
            <div className="space-y-8">
              {chapter1Milestones.map((item, i) => (
                <motion.div
                  key={i}
                  initial={{ opacity: 0, x: i % 2 === 0 ? -30 : 30 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.6, delay: i * 0.1 }}
                  className="flex gap-6 items-start"
                >
                  <div className="flex-shrink-0 text-center">
                    <div className="w-12 h-12 rounded-full flex items-center justify-center text-white font-light font-display text-sm" style={{ background: "linear-gradient(135deg, #c9748f, #e8a0b0)" }}>
                      {i + 1}
                    </div>
                  </div>
                  <div className="flex-1 rounded-2xl p-5" style={{ background: "rgba(255,255,255,0.7)", border: "1px solid rgba(201,116,143,0.15)" }}>
                    <p className="text-xs font-light tracking-widest uppercase mb-1" style={{ color: "#c9748f" }}>{item.date}</p>
                    <h4 className="font-display text-xl font-medium mb-2" style={{ color: "#2d1b2e" }}>{item.title}</h4>
                    <p className="font-light text-sm leading-relaxed" style={{ color: "#6b4f5e" }}>{item.desc}</p>
                  </div>
                </motion.div>
              ))}
            </div>
          </FadeUp>

          <FadeUp>
            <p className="font-script text-rose-400 text-2xl text-center mb-8">More Memories From Our Beginning</p>
            <div className="grid grid-cols-2 md:grid-cols-3 gap-4">
              <PhotoSlot label="Early days photo" aspectRatio="square" rotate={1} />
              <PhotoSlot label="A first adventure" aspectRatio="square" rotate={-1} />
              <PhotoSlot label="Just us" aspectRatio="square" rotate={1.5} />
              <PhotoSlot label="A favourite place" aspectRatio="square" rotate={-0.5} />
              <PhotoSlot label="That moment" aspectRatio="square" rotate={1} />
              <PhotoSlot label="The beginning of us" aspectRatio="square" rotate={-1.5} />
            </div>
          </FadeUp>

          <FadeUp className="max-w-2xl mx-auto">
            <div className="rounded-3xl p-10 text-center" style={{ background: "linear-gradient(135deg, rgba(201,116,143,0.08), rgba(200,169,122,0.08))" }}>
              <p className="font-display italic text-2xl font-light leading-relaxed" style={{ color: "#2d1b2e" }}>
                &quot;The best love is the kind that awakens the soul and makes us reach for more.&quot;
              </p>
              <p className="mt-4 text-sm font-light tracking-widest uppercase" style={{ color: "#c9748f" }}>— Nicholas Sparks</p>
            </div>
          </FadeUp>
        </div>
      </section>

      {/* ═══════════════════════════════════════════════
         CHAPTER 2 — Growing Together
         ═══════════════════════════════════════════════ */}
      <section id="chapter-2" className="w-full">
        <div className="relative h-72 md:h-96 flex items-center justify-center overflow-hidden">
          <div className="absolute inset-0 bg-cover bg-center" style={{ backgroundImage: "url('/images/chapter-bg-2.jpg')" }} />
          <div className="absolute inset-0" style={{ background: "linear-gradient(to bottom, rgba(245,240,250,0.4), rgba(245,240,250,0.85))" }} />
          <div className="relative z-10 text-center px-6">
            <motion.p initial={{ opacity: 0, y: -20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ duration: 0.8 }} className="font-script mb-2" style={{ fontSize: "1.8rem", color: "#9b72c9" }}>Chapter Two</motion.p>
            <motion.h1 initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ duration: 0.8, delay: 0.2 }} className="font-display font-light" style={{ fontSize: "clamp(2rem, 6vw, 4rem)", color: "#2d1b2e" }}>Growing Together</motion.h1>
            <motion.div initial={{ scaleX: 0 }} whileInView={{ scaleX: 1 }} viewport={{ once: true }} transition={{ duration: 0.8, delay: 0.5 }} className="h-px w-24 mx-auto mt-4" style={{ background: "#9b72c9" }} />
          </div>
        </div>

        <div className="max-w-5xl mx-auto px-6 py-16 space-y-20">
          <FadeUp className="max-w-2xl mx-auto text-center">
            <p className="font-script text-2xl mb-4" style={{ color: "#9b72c9" }}>Side by Side</p>
            <p className="font-display italic text-xl md:text-2xl font-light leading-relaxed" style={{ color: "#4a3040" }}>
              [✏️ Write about how your relationship grew. How you learned each other&apos;s rhythms, built routines, faced the world as a team.]
            </p>
          </FadeUp>

          <FadeUp>
            <div className="grid md:grid-cols-5 gap-8 items-center">
              <div className="md:col-span-3 space-y-5">
                <p className="font-script text-2xl" style={{ color: "#9b72c9" }}>Building Our World</p>
                <p className="font-display text-lg leading-relaxed font-light" style={{ color: "#4a3040" }}>
                  [✏️ Talk about the life you&apos;ve been building together — maybe a home, shared dreams, daily rituals. The little things that became your everything.]
                </p>
                <p className="font-display text-lg leading-relaxed font-light" style={{ color: "#4a3040" }}>
                  [✏️ Continue the story — the inside jokes, the things only you two know, the language only you two speak.]
                </p>
              </div>
              <div className="md:col-span-2">
                <PhotoSlot label="Building a life together" aspectRatio="portrait" rotate={2} />
              </div>
            </div>
          </FadeUp>

          <FadeUp>
            <div className="grid grid-cols-4 gap-3">
              <PhotoSlot label="Memory 1" aspectRatio="portrait" rotate={-1.5} />
              <PhotoSlot label="Memory 2" aspectRatio="portrait" rotate={1} />
              <PhotoSlot label="Memory 3" aspectRatio="portrait" rotate={-1} />
              <PhotoSlot label="Memory 4" aspectRatio="portrait" rotate={2} />
            </div>
          </FadeUp>

          <FadeUp>
            <p className="font-script text-2xl text-center mb-10" style={{ color: "#9b72c9" }}>Things We&apos;ve Shared</p>
            <div className="grid md:grid-cols-3 gap-5">
              {chapter2Adventures.map((adv, i) => (
                <motion.div
                  key={i}
                  initial={{ opacity: 0, y: 30 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.5, delay: i * 0.08 }}
                  className="rounded-2xl p-6"
                  style={{ background: "rgba(255,255,255,0.7)", border: "1px solid rgba(155,114,201,0.15)" }}
                >
                  <div className="text-3xl mb-3">{adv.emoji}</div>
                  <h4 className="font-display text-lg font-medium mb-2" style={{ color: "#2d1b2e" }}>{adv.title}</h4>
                  <p className="text-sm font-light leading-relaxed" style={{ color: "#6b4f5e" }}>{adv.desc}</p>
                </motion.div>
              ))}
            </div>
          </FadeUp>

          <FadeUp>
            <p className="font-script text-2xl text-center mb-8" style={{ color: "#9b72c9" }}>Adventures Together</p>
            <div className="grid grid-cols-2 gap-4">
              <PhotoSlot label="Our biggest adventure" aspectRatio="landscape" rotate={-1} />
              <PhotoSlot label="A favourite trip" aspectRatio="landscape" rotate={1} />
              <PhotoSlot label="Just exploring" aspectRatio="landscape" rotate={0.5} />
              <PhotoSlot label="Somewhere beautiful" aspectRatio="landscape" rotate={-0.5} />
            </div>
          </FadeUp>

          <FadeUp className="max-w-2xl mx-auto">
            <div className="rounded-3xl p-10 text-center" style={{ background: "linear-gradient(135deg, rgba(155,114,201,0.08), rgba(201,116,143,0.08))" }}>
              <p className="font-display italic text-2xl font-light leading-relaxed" style={{ color: "#2d1b2e" }}>
                &quot;A successful marriage requires falling in love many times, always with the same person.&quot;
              </p>
              <p className="mt-4 text-sm font-light tracking-widest uppercase" style={{ color: "#9b72c9" }}>— Mignon McLaughlin</p>
            </div>
          </FadeUp>
        </div>
      </section>

      {/* ═══════════════════════════════════════════════
         CHAPTER 3 — Our Favourite Moments
         ═══════════════════════════════════════════════ */}
      <section id="chapter-3" className="w-full">
        <div className="relative h-72 md:h-96 flex items-center justify-center overflow-hidden">
          <div className="absolute inset-0 bg-cover bg-center" style={{ backgroundImage: "url('/images/chapter-bg-3.jpg')" }} />
          <div className="absolute inset-0" style={{ background: "linear-gradient(to bottom, rgba(240,244,250,0.4), rgba(240,244,250,0.85))" }} />
          <div className="relative z-10 text-center px-6">
            <motion.p initial={{ opacity: 0, y: -20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ duration: 0.8 }} className="font-script mb-2" style={{ fontSize: "1.8rem", color: "#5b8ec4" }}>Chapter Three</motion.p>
            <motion.h1 initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ duration: 0.8, delay: 0.2 }} className="font-display font-light" style={{ fontSize: "clamp(2rem, 6vw, 4rem)", color: "#2d1b2e" }}>Our Favourite Moments</motion.h1>
            <motion.div initial={{ scaleX: 0 }} whileInView={{ scaleX: 1 }} viewport={{ once: true }} transition={{ duration: 0.8, delay: 0.5 }} className="h-px w-24 mx-auto mt-4" style={{ background: "#5b8ec4" }} />
          </div>
        </div>

        <div className="max-w-5xl mx-auto px-6 py-16 space-y-20">
          <FadeUp className="max-w-2xl mx-auto text-center">
            <p className="font-script text-2xl mb-4" style={{ color: "#5b8ec4" }}>Days I&apos;ll Never Forget</p>
            <p className="font-display italic text-xl md:text-2xl font-light leading-relaxed" style={{ color: "#4a3040" }}>
              [✏️ Write an intro here — something about how these moments live in your heart, how they define your story.]
            </p>
          </FadeUp>

          <FadeUp>
            <p className="font-script text-2xl text-center mb-8" style={{ color: "#5b8ec4" }}>Snapshots of Happiness</p>
            <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
              {["The happiest day", "I love this one", "Remember this?", "Pure magic"].map((label, i) => (
                <motion.div
                  key={i}
                  initial={{ opacity: 0, rotate: i % 2 === 0 ? -5 : 5 }}
                  whileInView={{ opacity: 1, rotate: i % 2 === 0 ? -2 : 2 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.6, delay: i * 0.1 }}
                  className="bg-white p-3 pb-10 shadow-lg"
                  style={{ border: "1px solid rgba(0,0,0,0.06)" }}
                >
                  <PhotoSlot label={label} aspectRatio="square" />
                  <p className="mt-3 text-center font-script" style={{ color: "#c9748f", fontSize: "0.95rem" }}>{label}</p>
                </motion.div>
              ))}
            </div>
          </FadeUp>

          <div className="space-y-16">
            {chapter3Moments.map((m, i) => (
              <FadeUp key={i} delay={0.1}>
                <div className={`grid md:grid-cols-2 gap-10 items-center ${i % 2 === 1 ? "md:[direction:rtl]" : ""}`}>
                  <div className={i % 2 === 1 ? "md:[direction:ltr]" : ""}>
                    <PhotoSlot label={`Photo from: ${m.title}`} aspectRatio="landscape" rotate={i % 2 === 0 ? -1.5 : 1.5} />
                  </div>
                  <div className={`space-y-4 ${i % 2 === 1 ? "md:[direction:ltr]" : ""}`}>
                    <p className="text-xs font-light tracking-widest uppercase" style={{ color: "#5b8ec4" }}>{m.date}</p>
                    <h3 className="font-display text-2xl md:text-3xl font-medium" style={{ color: "#2d1b2e" }}>{m.title}</h3>
                    <div className="h-px w-16" style={{ background: "#5b8ec4" }} />
                    <p className="font-display text-lg leading-relaxed font-light" style={{ color: "#4a3040" }}>{m.desc}</p>
                  </div>
                </div>
              </FadeUp>
            ))}
          </div>

          <FadeUp>
            <p className="font-script text-2xl text-center mb-8" style={{ color: "#5b8ec4" }}>More Beautiful Memories</p>
            <div className="grid grid-cols-3 md:grid-cols-5 gap-3">
              {Array.from({ length: 5 }, (_, i) => (
                <PhotoSlot key={i} label={`Memory ${i + 1}`} aspectRatio="square" rotate={(i % 3) - 1} />
              ))}
            </div>
          </FadeUp>

          <FadeUp className="max-w-2xl mx-auto">
            <div className="rounded-3xl p-10 text-center" style={{ background: "linear-gradient(135deg, rgba(91,142,196,0.08), rgba(201,116,143,0.08))" }}>
              <p className="font-display italic text-2xl font-light leading-relaxed" style={{ color: "#2d1b2e" }}>
                &quot;I have waited for this opportunity for more than half a century, to repeat to you once again my vow of eternal fidelity and everlasting love.&quot;
              </p>
              <p className="mt-4 text-sm font-light tracking-widest uppercase" style={{ color: "#5b8ec4" }}>— Gabriel García Márquez</p>
            </div>
          </FadeUp>
        </div>
      </section>

      {/* ═══════════════════════════════════════════════
         CHAPTER 4 — Looking Forward
         ═══════════════════════════════════════════════ */}
      <section id="chapter-4" className="w-full">
        <div className="relative h-72 md:h-96 flex items-center justify-center overflow-hidden">
          <div className="absolute inset-0 bg-cover bg-center" style={{ backgroundImage: "url('/images/chapter-bg-4.jpg')" }} />
          <div className="absolute inset-0" style={{ background: "linear-gradient(to bottom, rgba(245,250,240,0.4), rgba(245,250,240,0.85))" }} />
          <div className="relative z-10 text-center px-6">
            <motion.p initial={{ opacity: 0, y: -20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ duration: 0.8 }} className="font-script mb-2" style={{ fontSize: "1.8rem", color: "#7aad6e" }}>Chapter Four</motion.p>
            <motion.h1 initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ duration: 0.8, delay: 0.2 }} className="font-display font-light" style={{ fontSize: "clamp(2rem, 6vw, 4rem)", color: "#2d1b2e" }}>Looking Forward</motion.h1>
            <motion.div initial={{ scaleX: 0 }} whileInView={{ scaleX: 1 }} viewport={{ once: true }} transition={{ duration: 0.8, delay: 0.5 }} className="h-px w-24 mx-auto mt-4" style={{ background: "#7aad6e" }} />
          </div>
        </div>

        <div className="max-w-5xl mx-auto px-6 py-16 space-y-20">
          <FadeUp className="max-w-2xl mx-auto text-center">
            <p className="font-script text-2xl mb-4" style={{ color: "#7aad6e" }}>Everything Still to Come</p>
            <p className="font-display italic text-xl md:text-2xl font-light leading-relaxed" style={{ color: "#4a3040" }}>
              [✏️ Write about your future together. What you&apos;re excited about, what you&apos;re building toward, the life you imagine.]
            </p>
          </FadeUp>

          <FadeUp>
            <p className="font-script text-2xl text-center mb-10" style={{ color: "#7aad6e" }}>Our Dreams</p>
            <div className="grid md:grid-cols-2 gap-6">
              {chapter4Dreams.map((d, i) => (
                <motion.div
                  key={i}
                  initial={{ opacity: 0, scale: 0.95 }}
                  whileInView={{ opacity: 1, scale: 1 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.5, delay: i * 0.1 }}
                  className="flex gap-5 items-start rounded-2xl p-6"
                  style={{ background: "rgba(255,255,255,0.7)", border: "1px solid rgba(122,173,110,0.2)" }}
                >
                  <div className="w-12 h-12 rounded-full flex items-center justify-center text-xl flex-shrink-0" style={{ background: "rgba(122,173,110,0.12)" }}>
                    {d.emoji}
                  </div>
                  <div>
                    <h4 className="font-display text-xl font-medium mb-2" style={{ color: "#2d1b2e" }}>{d.title}</h4>
                    <p className="text-sm font-light leading-relaxed" style={{ color: "#6b4f5e" }}>{d.desc}</p>
                  </div>
                </motion.div>
              ))}
            </div>
          </FadeUp>

          <FadeUp>
            <div className="grid md:grid-cols-2 gap-10 items-center">
              <div className="space-y-5">
                <p className="font-script text-2xl" style={{ color: "#7aad6e" }}>What I Promise You</p>
                <p className="font-display text-lg leading-relaxed font-light" style={{ color: "#4a3040" }}>
                  [✏️ Write your promises here. Things you vow to always do — to always make her laugh, to always hold her hand, to always be her safe place.]
                </p>
                <p className="font-display text-lg leading-relaxed font-light" style={{ color: "#4a3040" }}>
                  [✏️ More promises. The things that matter most. The everyday stuff and the big stuff.]
                </p>
              </div>
              <PhotoSlot label="Us in the future" aspectRatio="portrait" rotate={1.5} />
            </div>
          </FadeUp>

          <FadeUp>
            <p className="font-script text-2xl text-center mb-8" style={{ color: "#7aad6e" }}>Our Bucket List</p>
            <div className="grid md:grid-cols-3 gap-4">
              {[
                "[Bucket list item 1]",
                "[Bucket list item 2]",
                "[Bucket list item 3]",
                "[Bucket list item 4]",
                "[Bucket list item 5]",
                "[Bucket list item 6]",
              ].map((item, i) => (
                <div
                  key={i}
                  className="flex items-center gap-3 rounded-xl p-4"
                  style={{ background: "rgba(122,173,110,0.07)", border: "1px solid rgba(122,173,110,0.2)" }}
                >
                  <div className="w-6 h-6 rounded-full border-2 flex-shrink-0" style={{ borderColor: "#7aad6e" }} />
                  <p className="font-display text-sm font-light" style={{ color: "#4a3040" }}>{item}</p>
                </div>
              ))}
            </div>
          </FadeUp>

          <FadeUp>
            <div
              className="rounded-3xl p-10 md:p-14"
              style={{ background: "linear-gradient(135deg, rgba(201,116,143,0.06), rgba(122,173,110,0.06))", border: "1px solid rgba(201,116,143,0.12)" }}
            >
              <p className="font-script text-3xl text-center mb-8" style={{ color: "#c9748f" }}>Reasons I Love You</p>
              <div className="grid md:grid-cols-3 gap-4">
                {chapter4Reasons.map((r, i) => (
                  <motion.div
                    key={i}
                    initial={{ opacity: 0 }}
                    whileInView={{ opacity: 1 }}
                    viewport={{ once: true }}
                    transition={{ delay: i * 0.08, duration: 0.5 }}
                    className="flex items-center gap-3"
                  >
                    <FiHeart size={14} style={{ color: "#c9748f", flexShrink: 0 }} fill="#c9748f" />
                    <p className="font-display text-sm font-light" style={{ color: "#4a3040" }}>{r}</p>
                  </motion.div>
                ))}
              </div>
            </div>
          </FadeUp>

          <FadeUp>
            <p className="font-script text-2xl text-center mb-8" style={{ color: "#7aad6e" }}>Here&apos;s to Many More</p>
            <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
              <PhotoSlot label="Looking forward" aspectRatio="square" rotate={-1} />
              <PhotoSlot label="Our future" aspectRatio="square" rotate={1.5} />
              <PhotoSlot label="Dream photo" aspectRatio="square" rotate={-1.5} />
              <PhotoSlot label="Always us" aspectRatio="square" rotate={1} />
            </div>
          </FadeUp>

          <FadeUp className="max-w-2xl mx-auto">
            <div className="rounded-3xl p-10 text-center" style={{ background: "linear-gradient(135deg, rgba(122,173,110,0.08), rgba(200,169,122,0.08))" }}>
              <p className="font-display italic text-2xl font-light leading-relaxed" style={{ color: "#2d1b2e" }}>
                &quot;Whatever our souls are made of, his and mine are the same.&quot;
              </p>
              <p className="mt-4 text-sm font-light tracking-widest uppercase" style={{ color: "#7aad6e" }}>— Emily Brontë</p>
            </div>
          </FadeUp>
        </div>
      </section>

      {/* ═══════════════════════════════════════════════
         LOVE LETTER
         ═══════════════════════════════════════════════ */}
      <section id="love-letter" className="w-full">
        <div className="relative h-72 md:h-96 flex items-center justify-center overflow-hidden">
          <div className="absolute inset-0 bg-cover bg-center" style={{ backgroundImage: "url('/images/letter-bg.jpg')" }} />
          <div className="absolute inset-0" style={{ background: "linear-gradient(to bottom, rgba(253,240,243,0.5), rgba(253,240,243,0.88))" }} />
          <div className="relative z-10 text-center px-6">
            <motion.div initial={{ scale: 0 }} whileInView={{ scale: 1 }} viewport={{ once: true }} transition={{ type: "spring", stiffness: 200 }} className="flex justify-center mb-4">
              <span style={{ fontSize: "2.5rem" }} className="heartbeat">💌</span>
            </motion.div>
            <motion.p initial={{ opacity: 0, y: -20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ duration: 0.8, delay: 0.2 }} className="font-script text-rose-400 mb-2" style={{ fontSize: "1.8rem" }}>From My Heart to Yours</motion.p>
            <motion.h1 initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ duration: 0.8, delay: 0.4 }} className="font-display font-light" style={{ fontSize: "clamp(2rem, 6vw, 4rem)", color: "#2d1b2e" }}>A Love Letter</motion.h1>
          </div>
        </div>

        <div className="max-w-3xl mx-auto px-6 py-16 space-y-16">
          <FadeUp>
            <div
              className="relative rounded-3xl p-8 md:p-14 shadow-xl"
              style={{
                background: "rgba(255,255,255,0.9)",
                backgroundImage: "repeating-linear-gradient(transparent, transparent 31px, rgba(201,116,143,0.06) 31px, rgba(201,116,143,0.06) 32px)",
                border: "1px solid rgba(201,116,143,0.15)",
              }}
            >
              <div className="absolute -top-5 left-1/2 -translate-x-1/2 w-10 h-10 rounded-full flex items-center justify-center text-white shadow-md" style={{ background: "linear-gradient(135deg, #c9748f, #e8a0b0)" }}>
                <FiHeart size={16} fill="white" />
              </div>

              <p className="font-script text-rose-400 mb-6" style={{ fontSize: "2rem" }}>My Dearest [Her Name],</p>

              <div className="space-y-6">
                <p className="font-display text-lg md:text-xl leading-relaxed font-light" style={{ color: "#3a2535" }}>
                  [✏️ Begin your letter here. Write from the heart. Tell her what this anniversary means to you.]
                </p>
                <p className="font-display text-lg md:text-xl leading-relaxed font-light" style={{ color: "#3a2535" }}>
                  [✏️ Share a specific memory or feeling. Something she said that you&apos;ll never forget.]
                </p>
                <p className="font-display text-lg md:text-xl leading-relaxed font-light" style={{ color: "#3a2535" }}>
                  [✏️ Tell her how she makes you better. The ways she&apos;s shaped who you are.]
                </p>
                <p className="font-display text-lg md:text-xl leading-relaxed font-light" style={{ color: "#3a2535" }}>
                  [✏️ Express your feelings about the future — what you&apos;re building, what you&apos;re dreaming.]
                </p>
                <p className="font-display text-lg md:text-xl leading-relaxed font-light" style={{ color: "#3a2535" }}>
                  [✏️ Close with something deeply personal. A vow. A promise. A truth only you two know.]
                </p>
              </div>

              <div className="mt-10 text-right">
                <p className="font-display italic text-lg font-light mb-1" style={{ color: "#6b4f5e" }}>Always and forever yours,</p>
                <p className="font-script text-rose-400" style={{ fontSize: "2.2rem" }}>[Your Name] 💕</p>
              </div>

              <p className="mt-4 text-right text-xs font-light tracking-widest uppercase" style={{ color: "#c9748f" }}>[Anniversary Date]</p>
            </div>
          </FadeUp>

          <FadeUp>
            <div className="grid md:grid-cols-3 gap-5">
              {loveLetterCards.map((card, i) => (
                <motion.div
                  key={i}
                  initial={{ opacity: 0, y: 30 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.6, delay: i * 0.12 }}
                  className="rounded-2xl p-6 text-center"
                  style={{ background: "rgba(255,255,255,0.8)", border: "1px solid rgba(201,116,143,0.15)" }}
                >
                  <div className="text-3xl mb-3">{card.icon}</div>
                  <h4 className="font-display text-lg font-medium mb-3" style={{ color: "#2d1b2e" }}>{card.title}</h4>
                  <p className="font-display italic text-sm font-light leading-relaxed" style={{ color: "#6b4f5e" }}>{card.desc}</p>
                </motion.div>
              ))}
            </div>
          </FadeUp>

          <FadeUp>
            <div className="rounded-2xl p-8" style={{ background: "linear-gradient(135deg, rgba(201,116,143,0.06), rgba(200,169,122,0.06))", border: "1px solid rgba(200,169,122,0.2)" }}>
              <p className="font-script text-2xl mb-4" style={{ color: "#c8a97a" }}>P.S.</p>
              <p className="font-display italic text-xl font-light leading-relaxed" style={{ color: "#4a3040" }}>
                [✏️ Add your P.S. here — something playful, something sweet, an inside joke, a secret only she&apos;ll understand.]
              </p>
            </div>
          </FadeUp>

          <FadeUp className="text-center py-8">
            <motion.div animate={{ scale: [1, 1.1, 1] }} transition={{ repeat: Infinity, duration: 2.5 }} className="text-5xl mb-4">❤️</motion.div>
            <p className="font-script text-rose-400 text-3xl">Happy Anniversary</p>
            <p className="font-display italic text-gray-400 mt-2 font-light">With every beat of my heart, I love you.</p>
          </FadeUp>
        </div>
      </section>

      {/* ═══════ FOOTER ═══════ */}
      <footer className="py-12 text-center border-t" style={{ borderColor: "rgba(201,116,143,0.15)" }}>
        <p className="font-script text-rose-400 text-3xl mb-2">Made with Love</p>
        <p className="text-sm font-light text-gray-400">Just for you, always and forever 💕</p>
      </footer>
    </div>
  );
}
