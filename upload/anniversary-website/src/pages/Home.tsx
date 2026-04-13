import { Link } from "react-router-dom";
import { motion } from "framer-motion";
import { FiHeart, FiArrowRight } from "react-icons/fi";
import PageWrapper from "../components/PageWrapper";
import PhotoSlot from "../components/PhotoSlot";

const chapters = [
  {
    number: "I",
    title: "How It All Began",
    subtitle: "The moment everything changed",
    path: "/chapter-1",
    bg: "#fdf0f3",
  },
  {
    number: "II",
    title: "Growing Together",
    subtitle: "Every adventure, side by side",
    path: "/chapter-2",
    bg: "#f5f0fa",
  },
  {
    number: "III",
    title: "Our Favourite Moments",
    subtitle: "The days we'll never forget",
    path: "/chapter-3",
    bg: "#f0f4fa",
  },
  {
    number: "IV",
    title: "Looking Forward",
    subtitle: "All that's still to come",
    path: "/chapter-4",
    bg: "#f5faf0",
  },
];

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

export default function Home() {
  return (
    <PageWrapper
      songTitle="Your Song Title"
      songArtist="Artist Name"
      songUrl="/music/home.mp3"
      petalCount={16}
    >
      {/* ── HERO ── */}
      <section className="relative min-h-screen flex flex-col items-center justify-center text-center overflow-hidden -mt-20">
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
            <Link
              to="/chapter-1"
              className="inline-flex items-center justify-center gap-2 px-8 py-3 rounded-full text-white font-light tracking-wide transition-all hover:scale-105 hover:shadow-xl"
              style={{
                background: "linear-gradient(135deg, #c9748f, #e8a0b0)",
                boxShadow: "0 8px 30px rgba(201,116,143,0.35)",
                fontFamily: "Cormorant Garamond, serif",
                fontSize: "1.1rem",
              }}
            >
              Begin Our Story <FiArrowRight />
            </Link>
            <Link
              to="/letter"
              className="inline-flex items-center justify-center gap-2 px-8 py-3 rounded-full font-light tracking-wide transition-all hover:scale-105 border"
              style={{
                borderColor: "#c9748f",
                color: "#c9748f",
                fontFamily: "Cormorant Garamond, serif",
                fontSize: "1.1rem",
              }}
            >
              Read My Letter <FiHeart />
            </Link>
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

      {/* ── PHOTO COLLAGE ── */}
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

      {/* ── CHAPTERS PREVIEW ── */}
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
              <FadeUp key={ch.path} delay={i * 0.1}>
                <Link
                  to={ch.path}
                  className="group block rounded-3xl p-8 transition-all duration-300 hover:shadow-2xl hover:-translate-y-1"
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
                </Link>
              </FadeUp>
            ))}
          </div>
        </div>
      </section>

      {/* ── QUOTE ── */}
      <section className="py-20 px-6">
        <FadeUp className="max-w-3xl mx-auto text-center">
          <div className="letter-paper rounded-3xl p-10 md:p-14 relative mt-8">
            <p
              className="font-display italic text-2xl md:text-3xl font-light leading-relaxed"
              style={{ color: "#2d1b2e" }}
            >
              "In all the world, there is no heart for me like yours.
              In all the world, there is no love for you like mine."
            </p>
            <p className="mt-6 text-sm font-light tracking-widest uppercase" style={{ color: "#c9748f" }}>
              — Maya Angelou
            </p>
          </div>
        </FadeUp>
      </section>

      {/* ── FOOTER ── */}
      <footer
        className="py-12 text-center border-t"
        style={{ borderColor: "rgba(201,116,143,0.15)" }}
      >
        <p className="font-script text-rose-400 text-3xl mb-2">Made with Love</p>
        <p className="text-sm font-light text-gray-400">
          Just for you, always and forever 💕
        </p>
      </footer>
    </PageWrapper>
  );
}
