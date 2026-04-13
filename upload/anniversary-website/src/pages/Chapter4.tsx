import { motion } from "framer-motion";
import { FiArrowLeft, FiHeart } from "react-icons/fi";
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

const dreams = [
  { emoji: "🌍", title: "[Travel Dream]", desc: "[✏️ A place you both want to visit together.]" },
  { emoji: "🏡", title: "[A Future Home]", desc: "[✏️ What does your dream home together look like?]" },
  { emoji: "🎯", title: "[A Shared Goal]", desc: "[✏️ Something you're working toward together.]" },
  { emoji: "🌿", title: "[A Simple Joy]", desc: "[✏️ A simple future moment you're looking forward to — morning coffee, a garden, a dog.]" },
];

const reasons = [
  "[✏️ I love you because of your laugh]",
  "[✏️ I love you because you make everything better]",
  "[✏️ I love you because of the way you care]",
  "[✏️ I love you because you challenge me to grow]",
  "[✏️ I love you because of your strength]",
  "[✏️ I love you because you're my home]",
  "[✏️ I love you because of your kindness]",
  "[✏️ I love you because you chose me]",
  "[✏️ I love you because of who you are]",
];

export default function Chapter4() {
  return (
    <PageWrapper
      songTitle="Your Chapter IV Song"
      songArtist="Artist Name"
      songUrl="/music/chapter4.mp3"
      petalCount={12}
    >
      {/* Hero */}
      <section className="relative h-72 md:h-96 flex items-center justify-center overflow-hidden">
        <div
          className="absolute inset-0 bg-cover bg-center"
          style={{ backgroundImage: "url('/images/chapter-bg-4.jpg')" }}
        />
        <div
          className="absolute inset-0"
          style={{ background: "linear-gradient(to bottom, rgba(245,250,240,0.4), rgba(245,250,240,0.85))" }}
        />
        <div className="relative z-10 text-center px-6">
          <motion.p
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="font-script mb-2"
            style={{ fontSize: "1.8rem", color: "#7aad6e" }}
          >
            Chapter Four
          </motion.p>
          <motion.h1
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="font-display font-light"
            style={{ fontSize: "clamp(2rem, 6vw, 4rem)", color: "#2d1b2e" }}
          >
            Looking Forward
          </motion.h1>
          <motion.div
            initial={{ scaleX: 0 }}
            animate={{ scaleX: 1 }}
            transition={{ duration: 0.8, delay: 0.5 }}
            className="h-px w-24 mx-auto mt-4"
            style={{ background: "#7aad6e" }}
          />
        </div>
      </section>

      <div className="max-w-5xl mx-auto px-6 py-16 space-y-20">

        {/* Intro */}
        <FadeUp className="max-w-2xl mx-auto text-center">
          <p className="font-script text-2xl mb-4" style={{ color: "#7aad6e" }}>
            Everything Still to Come
          </p>
          <p
            className="font-display italic text-xl md:text-2xl font-light leading-relaxed"
            style={{ color: "#4a3040" }}
          >
            [✏️ Write about your future together. What you're excited about, what you're building toward, the life you imagine. Fill it with hope and warmth.]
          </p>
        </FadeUp>

        {/* Dreams section */}
        <FadeUp>
          <p className="font-script text-2xl text-center mb-10" style={{ color: "#7aad6e" }}>
            Our Dreams
          </p>
          <div className="grid md:grid-cols-2 gap-6">
            {dreams.map((d, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, scale: 0.95 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: i * 0.1 }}
                className="flex gap-5 items-start rounded-2xl p-6"
                style={{
                  background: "rgba(255,255,255,0.7)",
                  border: "1px solid rgba(122,173,110,0.2)",
                }}
              >
                <div
                  className="w-12 h-12 rounded-full flex items-center justify-center text-xl flex-shrink-0"
                  style={{ background: "rgba(122,173,110,0.12)" }}
                >
                  {d.emoji}
                </div>
                <div>
                  <h4 className="font-display text-xl font-medium mb-2" style={{ color: "#2d1b2e" }}>
                    {d.title}
                  </h4>
                  <p className="text-sm font-light leading-relaxed" style={{ color: "#6b4f5e" }}>
                    {d.desc}
                  </p>
                </div>
              </motion.div>
            ))}
          </div>
        </FadeUp>

        {/* Photo + text */}
        <FadeUp>
          <div className="grid md:grid-cols-2 gap-10 items-center">
            <div className="space-y-5">
              <p className="font-script text-2xl" style={{ color: "#7aad6e" }}>What I Promise You</p>
              <p
                className="font-display text-lg leading-relaxed font-light"
                style={{ color: "#4a3040" }}
              >
                [✏️ Write your promises here. Things you vow to always do — to always make her laugh, to always hold her hand, to always be her safe place. Make it personal.]
              </p>
              <p
                className="font-display text-lg leading-relaxed font-light"
                style={{ color: "#4a3040" }}
              >
                [✏️ More promises. The things that matter most. The everyday stuff and the big stuff.]
              </p>
            </div>
            <PhotoSlot label="Us in the future" aspectRatio="portrait" rotate={1.5} />
          </div>
        </FadeUp>

        {/* Bucket list */}
        <FadeUp>
          <p className="font-script text-2xl text-center mb-8" style={{ color: "#7aad6e" }}>
            Our Bucket List
          </p>
          <div className="grid md:grid-cols-3 gap-4">
            {[
              "[✏️ Bucket list item 1]",
              "[✏️ Bucket list item 2]",
              "[✏️ Bucket list item 3]",
              "[✏️ Bucket list item 4]",
              "[✏️ Bucket list item 5]",
              "[✏️ Bucket list item 6]",
            ].map((item, i) => (
              <div
                key={i}
                className="flex items-center gap-3 rounded-xl p-4"
                style={{ background: "rgba(122,173,110,0.07)", border: "1px solid rgba(122,173,110,0.2)" }}
              >
                <div
                  className="w-6 h-6 rounded-full border-2 flex-shrink-0"
                  style={{ borderColor: "#7aad6e" }}
                />
                <p className="font-display text-sm font-light" style={{ color: "#4a3040" }}>
                  {item}
                </p>
              </div>
            ))}
          </div>
        </FadeUp>

        {/* Reasons I love you */}
        <FadeUp>
          <div
            className="rounded-3xl p-10 md:p-14"
            style={{
              background: "linear-gradient(135deg, rgba(201,116,143,0.06), rgba(122,173,110,0.06))",
              border: "1px solid rgba(201,116,143,0.12)",
            }}
          >
            <p className="font-script text-3xl text-center mb-8" style={{ color: "#c9748f" }}>
              Reasons I Love You
            </p>
            <div className="grid md:grid-cols-3 gap-4">
              {reasons.map((r, i) => (
                <motion.div
                  key={i}
                  initial={{ opacity: 0 }}
                  whileInView={{ opacity: 1 }}
                  viewport={{ once: true }}
                  transition={{ delay: i * 0.08, duration: 0.5 }}
                  className="flex items-center gap-3"
                >
                  <FiHeart size={14} style={{ color: "#c9748f", flexShrink: 0 }} fill="#c9748f" />
                  <p
                    className="font-display text-sm font-light"
                    style={{ color: "#4a3040" }}
                  >
                    {r}
                  </p>
                </motion.div>
              ))}
            </div>
          </div>
        </FadeUp>

        {/* Photo grid */}
        <FadeUp>
          <p className="font-script text-2xl text-center mb-8" style={{ color: "#7aad6e" }}>
            Here's to Many More
          </p>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
            <PhotoSlot label="Looking forward" aspectRatio="square" rotate={-1} />
            <PhotoSlot label="Our future" aspectRatio="square" rotate={1.5} />
            <PhotoSlot label="Dream photo" aspectRatio="square" rotate={-1.5} />
            <PhotoSlot label="Always us" aspectRatio="square" rotate={1} />
          </div>
        </FadeUp>

        {/* Final quote */}
        <FadeUp className="max-w-2xl mx-auto">
          <div
            className="rounded-3xl p-10 text-center"
            style={{ background: "linear-gradient(135deg, rgba(122,173,110,0.08), rgba(200,169,122,0.08))" }}
          >
            <p
              className="font-display italic text-2xl font-light leading-relaxed"
              style={{ color: "#2d1b2e" }}
            >
              "Whatever our souls are made of, his and mine are the same."
            </p>
            <p className="mt-4 text-sm font-light tracking-widest uppercase" style={{ color: "#7aad6e" }}>
              — Emily Brontë
            </p>
          </div>
        </FadeUp>

        {/* Navigation */}
        <div className="flex justify-between items-center pt-8 border-t" style={{ borderColor: "rgba(122,173,110,0.2)" }}>
          <Link
            to="/chapter-3"
            className="inline-flex items-center gap-2 text-sm font-light transition-colors hover:text-green-500"
            style={{ color: "#9c7e88", fontFamily: "Cormorant Garamond, serif", fontSize: "1rem" }}
          >
            <FiArrowLeft /> Chapter III
          </Link>
          <Link
            to="/letter"
            className="inline-flex items-center gap-2 px-6 py-2 rounded-full text-white font-light transition-all hover:scale-105"
            style={{
              background: "linear-gradient(135deg, #c9748f, #e8a0b0)",
              fontFamily: "Cormorant Garamond, serif",
              fontSize: "1rem",
            }}
          >
            Read My Letter <FiHeart />
          </Link>
        </div>
      </div>
    </PageWrapper>
  );
}
