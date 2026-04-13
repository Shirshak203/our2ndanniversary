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

export default function Chapter1() {
  return (
    <PageWrapper
      songTitle="Your Chapter I Song"
      songArtist="Artist Name"
      songUrl="/music/chapter1.mp3"
      petalCount={10}
    >
      {/* Hero Banner */}
      <section className="relative h-72 md:h-96 flex items-center justify-center overflow-hidden">
        <div
          className="absolute inset-0 bg-cover bg-center"
          style={{ backgroundImage: "url('/images/chapter-bg-1.jpg')" }}
        />
        <div
          className="absolute inset-0"
          style={{ background: "linear-gradient(to bottom, rgba(253,240,243,0.4), rgba(253,240,243,0.85))" }}
        />
        <div className="relative z-10 text-center px-6">
          <motion.p
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="font-script text-rose-400 mb-2"
            style={{ fontSize: "1.8rem" }}
          >
            Chapter One
          </motion.p>
          <motion.h1
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="font-display font-light"
            style={{ fontSize: "clamp(2rem, 6vw, 4rem)", color: "#2d1b2e" }}
          >
            How It All Began
          </motion.h1>
          <motion.div
            initial={{ scaleX: 0 }}
            animate={{ scaleX: 1 }}
            transition={{ duration: 0.8, delay: 0.5 }}
            className="h-px w-24 mx-auto mt-4"
            style={{ background: "#c9748f" }}
          />
        </div>
      </section>

      {/* Main Content */}
      <div className="max-w-5xl mx-auto px-6 py-16 space-y-20">

        {/* Story intro text */}
        <FadeUp className="max-w-2xl mx-auto text-center">
          <p className="font-script text-rose-400 text-2xl mb-4">The Beginning</p>
          <p
            className="font-display italic text-xl md:text-2xl font-light leading-relaxed"
            style={{ color: "#4a3040" }}
          >
            [✏️ Replace this with your story — how you first met, what made that moment special, and how you knew she was the one.]
          </p>
        </FadeUp>

        {/* Photo + text row */}
        <FadeUp>
          <div className="grid md:grid-cols-2 gap-10 items-center">
            <PhotoSlot label="Where we first met" aspectRatio="portrait" rotate={-2} />
            <div className="space-y-5">
              <p className="font-script text-rose-400 text-2xl">The First Hello</p>
              <p
                className="font-display text-lg leading-relaxed font-light"
                style={{ color: "#4a3040" }}
              >
                [✏️ Tell the story of your first meeting here. What did you say? What were you wearing? What did the world look like in that moment? Make it vivid, make it real.]
              </p>
              <p
                className="font-display text-lg leading-relaxed font-light"
                style={{ color: "#4a3040" }}
              >
                [✏️ You can continue the story here — the nervousness, the excitement, the way time seemed to stop.]
              </p>
            </div>
          </div>
        </FadeUp>

        {/* Wide photo */}
        <FadeUp>
          <PhotoSlot label="Our first photo together" aspectRatio="wide" />
        </FadeUp>

        {/* Timeline section */}
        <FadeUp className="max-w-3xl mx-auto">
          <p className="font-script text-rose-400 text-2xl text-center mb-10">Our First Milestones</p>
          <div className="space-y-8">
            {[
              { date: "[Date]", title: "The Day We Met", desc: "[✏️ Describe what happened on the day you met.]" },
              { date: "[Date]", title: "Our First Conversation", desc: "[✏️ What did you talk about? What made you smile?]" },
              { date: "[Date]", title: "When I Knew", desc: "[✏️ The moment you realized she was someone truly special.]" },
              { date: "[Date]", title: "Our First Date", desc: "[✏️ Where did you go? How did it feel? What do you remember most?]" },
            ].map((item, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, x: i % 2 === 0 ? -30 : 30 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: i * 0.1 }}
                className="flex gap-6 items-start"
              >
                <div className="flex-shrink-0 text-center">
                  <div
                    className="w-12 h-12 rounded-full flex items-center justify-center text-white font-light font-display text-sm"
                    style={{ background: "linear-gradient(135deg, #c9748f, #e8a0b0)" }}
                  >
                    {i + 1}
                  </div>
                </div>
                <div
                  className="flex-1 rounded-2xl p-5"
                  style={{ background: "rgba(255,255,255,0.7)", border: "1px solid rgba(201,116,143,0.15)" }}
                >
                  <p className="text-xs font-light tracking-widest uppercase mb-1" style={{ color: "#c9748f" }}>
                    {item.date}
                  </p>
                  <h4 className="font-display text-xl font-medium mb-2" style={{ color: "#2d1b2e" }}>
                    {item.title}
                  </h4>
                  <p className="font-light text-sm leading-relaxed" style={{ color: "#6b4f5e" }}>
                    {item.desc}
                  </p>
                </div>
              </motion.div>
            ))}
          </div>
        </FadeUp>

        {/* Photo grid */}
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

        {/* Closing quote */}
        <FadeUp className="max-w-2xl mx-auto">
          <div
            className="rounded-3xl p-10 text-center"
            style={{ background: "linear-gradient(135deg, rgba(201,116,143,0.08), rgba(200,169,122,0.08))" }}
          >
            <p
              className="font-display italic text-2xl font-light leading-relaxed"
              style={{ color: "#2d1b2e" }}
            >
              "The best love is the kind that awakens the soul and makes us reach for more."
            </p>
            <p className="mt-4 text-sm font-light tracking-widest uppercase" style={{ color: "#c9748f" }}>
              — Nicholas Sparks
            </p>
          </div>
        </FadeUp>

        {/* Navigation */}
        <div className="flex justify-between items-center pt-8 border-t" style={{ borderColor: "rgba(201,116,143,0.2)" }}>
          <Link
            to="/"
            className="inline-flex items-center gap-2 text-sm font-light transition-colors hover:text-rose-500"
            style={{ color: "#9c7e88", fontFamily: "Cormorant Garamond, serif", fontSize: "1rem" }}
          >
            <FiArrowLeft /> Home
          </Link>
          <Link
            to="/chapter-2"
            className="inline-flex items-center gap-2 px-6 py-2 rounded-full text-white font-light transition-all hover:scale-105"
            style={{
              background: "linear-gradient(135deg, #c9748f, #e8a0b0)",
              fontFamily: "Cormorant Garamond, serif",
              fontSize: "1rem",
            }}
          >
            Chapter II <FiArrowRight />
          </Link>
        </div>
      </div>
    </PageWrapper>
  );
}
