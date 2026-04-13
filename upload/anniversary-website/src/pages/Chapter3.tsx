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

const moments = [
  {
    title: "[Favourite Moment #1]",
    date: "[Date]",
    desc: "[✏️ Describe your first favourite memory in detail — where you were, what happened, how it made you feel.]",
  },
  {
    title: "[Favourite Moment #2]",
    date: "[Date]",
    desc: "[✏️ A time you laughed until you couldn't breathe. Or a quiet perfect moment. Or the most romantic thing that happened.]",
  },
  {
    title: "[Favourite Moment #3]",
    date: "[Date]",
    desc: "[✏️ Another cherished memory — maybe a trip, a surprise, a spontaneous adventure.]",
  },
  {
    title: "[Favourite Moment #4]",
    date: "[Date]",
    desc: "[✏️ A moment you'll both always remember — funny, sweet, or tender.]",
  },
];

export default function Chapter3() {
  return (
    <PageWrapper
      songTitle="Your Chapter III Song"
      songArtist="Artist Name"
      songUrl="/music/chapter3.mp3"
      petalCount={10}
    >
      {/* Hero */}
      <section className="relative h-72 md:h-96 flex items-center justify-center overflow-hidden">
        <div
          className="absolute inset-0 bg-cover bg-center"
          style={{ backgroundImage: "url('/images/chapter-bg-3.jpg')" }}
        />
        <div
          className="absolute inset-0"
          style={{ background: "linear-gradient(to bottom, rgba(240,244,250,0.4), rgba(240,244,250,0.85))" }}
        />
        <div className="relative z-10 text-center px-6">
          <motion.p
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="font-script mb-2"
            style={{ fontSize: "1.8rem", color: "#5b8ec4" }}
          >
            Chapter Three
          </motion.p>
          <motion.h1
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="font-display font-light"
            style={{ fontSize: "clamp(2rem, 6vw, 4rem)", color: "#2d1b2e" }}
          >
            Our Favourite Moments
          </motion.h1>
          <motion.div
            initial={{ scaleX: 0 }}
            animate={{ scaleX: 1 }}
            transition={{ duration: 0.8, delay: 0.5 }}
            className="h-px w-24 mx-auto mt-4"
            style={{ background: "#5b8ec4" }}
          />
        </div>
      </section>

      <div className="max-w-5xl mx-auto px-6 py-16 space-y-20">

        {/* Intro */}
        <FadeUp className="max-w-2xl mx-auto text-center">
          <p className="font-script text-2xl mb-4" style={{ color: "#5b8ec4" }}>
            Days I'll Never Forget
          </p>
          <p
            className="font-display italic text-xl md:text-2xl font-light leading-relaxed"
            style={{ color: "#4a3040" }}
          >
            [✏️ Write an intro here — something about how these moments live in your heart, how they define your story, how they're the ones you'd replay forever.]
          </p>
        </FadeUp>

        {/* Polaroid style photos */}
        <FadeUp>
          <p className="font-script text-2xl text-center mb-8" style={{ color: "#5b8ec4" }}>
            Snapshots of Happiness
          </p>
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
                <p
                  className="mt-3 text-center font-script"
                  style={{ color: "#c9748f", fontSize: "0.95rem" }}
                >
                  {label}
                </p>
              </motion.div>
            ))}
          </div>
        </FadeUp>

        {/* Featured moments */}
        <div className="space-y-16">
          {moments.map((m, i) => (
            <FadeUp key={i} delay={0.1}>
              <div className={`grid md:grid-cols-2 gap-10 items-center ${i % 2 === 1 ? "md:[direction:rtl]" : ""}`}>
                <div className={i % 2 === 1 ? "md:[direction:ltr]" : ""}>
                  <PhotoSlot
                    label={`Photo from: ${m.title}`}
                    aspectRatio="landscape"
                    rotate={i % 2 === 0 ? -1.5 : 1.5}
                  />
                </div>
                <div className={`space-y-4 ${i % 2 === 1 ? "md:[direction:ltr]" : ""}`}>
                  <p
                    className="text-xs font-light tracking-widest uppercase"
                    style={{ color: "#5b8ec4" }}
                  >
                    {m.date}
                  </p>
                  <h3 className="font-display text-2xl md:text-3xl font-medium" style={{ color: "#2d1b2e" }}>
                    {m.title}
                  </h3>
                  <div className="h-px w-16" style={{ background: "#5b8ec4" }} />
                  <p
                    className="font-display text-lg leading-relaxed font-light"
                    style={{ color: "#4a3040" }}
                  >
                    {m.desc}
                  </p>
                </div>
              </div>
            </FadeUp>
          ))}
        </div>

        {/* Extra photo grid */}
        <FadeUp>
          <p className="font-script text-2xl text-center mb-8" style={{ color: "#5b8ec4" }}>
            More Beautiful Memories
          </p>
          <div className="grid grid-cols-3 md:grid-cols-5 gap-3">
            {Array.from({ length: 5 }, (_, i) => (
              <PhotoSlot key={i} label={`Memory ${i + 1}`} aspectRatio="square" rotate={(i % 3) - 1} />
            ))}
          </div>
        </FadeUp>

        {/* Quote */}
        <FadeUp className="max-w-2xl mx-auto">
          <div
            className="rounded-3xl p-10 text-center"
            style={{ background: "linear-gradient(135deg, rgba(91,142,196,0.08), rgba(201,116,143,0.08))" }}
          >
            <p
              className="font-display italic text-2xl font-light leading-relaxed"
              style={{ color: "#2d1b2e" }}
            >
              "I have waited for this opportunity for more than half a century, to repeat to you once again my vow of eternal fidelity and everlasting love."
            </p>
            <p className="mt-4 text-sm font-light tracking-widest uppercase" style={{ color: "#5b8ec4" }}>
              — Gabriel García Márquez
            </p>
          </div>
        </FadeUp>

        {/* Navigation */}
        <div className="flex justify-between items-center pt-8 border-t" style={{ borderColor: "rgba(91,142,196,0.2)" }}>
          <Link
            to="/chapter-2"
            className="inline-flex items-center gap-2 text-sm font-light transition-colors hover:text-blue-500"
            style={{ color: "#9c7e88", fontFamily: "Cormorant Garamond, serif", fontSize: "1rem" }}
          >
            <FiArrowLeft /> Chapter II
          </Link>
          <Link
            to="/chapter-4"
            className="inline-flex items-center gap-2 px-6 py-2 rounded-full text-white font-light transition-all hover:scale-105"
            style={{
              background: "linear-gradient(135deg, #5b8ec4, #7aaedd)",
              fontFamily: "Cormorant Garamond, serif",
              fontSize: "1rem",
            }}
          >
            Chapter IV <FiArrowRight />
          </Link>
        </div>
      </div>
    </PageWrapper>
  );
}
