import { motion } from "framer-motion";
import { FiArrowLeft, FiHeart } from "react-icons/fi";
import { Link } from "react-router-dom";
import PageWrapper from "../components/PageWrapper";

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

export default function LoveLetter() {
  return (
    <PageWrapper
      songTitle="Your Love Letter Song"
      songArtist="Artist Name"
      songUrl="/music/letter.mp3"
      petalCount={18}
    >
      {/* Hero */}
      <section className="relative h-72 md:h-96 flex items-center justify-center overflow-hidden">
        <div
          className="absolute inset-0 bg-cover bg-center"
          style={{ backgroundImage: "url('/images/letter-bg.jpg')" }}
        />
        <div
          className="absolute inset-0"
          style={{
            background:
              "linear-gradient(to bottom, rgba(253,240,243,0.5), rgba(253,240,243,0.88))",
          }}
        />
        <div className="relative z-10 text-center px-6">
          <motion.div
            initial={{ scale: 0 }}
            animate={{ scale: 1 }}
            transition={{ type: "spring", stiffness: 200 }}
            className="flex justify-center mb-4"
          >
            <span style={{ fontSize: "2.5rem" }} className="heartbeat">💌</span>
          </motion.div>
          <motion.p
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="font-script text-rose-400 mb-2"
            style={{ fontSize: "1.8rem" }}
          >
            From My Heart to Yours
          </motion.p>
          <motion.h1
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.4 }}
            className="font-display font-light"
            style={{ fontSize: "clamp(2rem, 6vw, 4rem)", color: "#2d1b2e" }}
          >
            A Love Letter
          </motion.h1>
        </div>
      </section>

      <div className="max-w-3xl mx-auto px-6 py-16 space-y-16">

        {/* The letter */}
        <FadeUp>
          <div
            className="relative rounded-3xl p-8 md:p-14 shadow-xl"
            style={{
              background: "rgba(255,255,255,0.9)",
              backgroundImage:
                "repeating-linear-gradient(transparent, transparent 31px, rgba(201,116,143,0.06) 31px, rgba(201,116,143,0.06) 32px)",
              border: "1px solid rgba(201,116,143,0.15)",
            }}
          >
            {/* Wax seal decoration */}
            <div
              className="absolute -top-5 left-1/2 -translate-x-1/2 w-10 h-10 rounded-full flex items-center justify-center text-white shadow-md"
              style={{ background: "linear-gradient(135deg, #c9748f, #e8a0b0)" }}
            >
              <FiHeart size={16} fill="white" />
            </div>

            {/* Greeting */}
            <p className="font-script text-rose-400 mb-6" style={{ fontSize: "2rem" }}>
              My Dearest [Her Name],
            </p>

            {/* Letter body — editable paragraphs */}
            <div className="space-y-6">
              <p
                className="font-display text-lg md:text-xl leading-relaxed font-light"
                style={{ color: "#3a2535" }}
              >
                [✏️ Begin your letter here. Write from the heart. Tell her what this anniversary means to you, how your love has grown, what she means to your world.]
              </p>

              <p
                className="font-display text-lg md:text-xl leading-relaxed font-light"
                style={{ color: "#3a2535" }}
              >
                [✏️ Share a specific memory or feeling. Something she said that you'll never forget. A moment that changed everything. Be specific — the details are what make it real.]
              </p>

              <p
                className="font-display text-lg md:text-xl leading-relaxed font-light"
                style={{ color: "#3a2535" }}
              >
                [✏️ Tell her how she makes you better. The ways she's shaped who you are. The version of yourself you are when you're with her.]
              </p>

              <p
                className="font-display text-lg md:text-xl leading-relaxed font-light"
                style={{ color: "#3a2535" }}
              >
                [✏️ Express your feelings about the future — what you're building, what you're dreaming, the forever you want with her.]
              </p>

              <p
                className="font-display text-lg md:text-xl leading-relaxed font-light"
                style={{ color: "#3a2535" }}
              >
                [✏️ Close with something deeply personal. A vow. A promise. A truth only you two know. Something that will make her heart full.]
              </p>
            </div>

            {/* Sign off */}
            <div className="mt-10 text-right">
              <p
                className="font-display italic text-lg font-light mb-1"
                style={{ color: "#6b4f5e" }}
              >
                Always and forever yours,
              </p>
              <p className="font-script text-rose-400" style={{ fontSize: "2.2rem" }}>
                [Your Name] 💕
              </p>
            </div>

            {/* Date */}
            <p
              className="mt-4 text-right text-xs font-light tracking-widest uppercase"
              style={{ color: "#c9748f" }}
            >
              [Anniversary Date]
            </p>
          </div>
        </FadeUp>

        {/* Little extras */}
        <FadeUp>
          <div className="grid md:grid-cols-3 gap-5">
            {[
              { icon: "💫", title: "My Favourite Thing About You", desc: "[✏️ Write one thing here — just one, your absolute favourite thing about her.]" },
              { icon: "🌹", title: "You Make Me Feel", desc: "[✏️ Complete this: 'When I'm with you, I feel...' Be honest and tender.]" },
              { icon: "∞", title: "My Promise to You", desc: "[✏️ One sentence. The most important thing you promise her.]" },
            ].map((card, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: i * 0.12 }}
                className="rounded-2xl p-6 text-center"
                style={{
                  background: "rgba(255,255,255,0.8)",
                  border: "1px solid rgba(201,116,143,0.15)",
                }}
              >
                <div className="text-3xl mb-3">{card.icon}</div>
                <h4 className="font-display text-lg font-medium mb-3" style={{ color: "#2d1b2e" }}>
                  {card.title}
                </h4>
                <p className="font-display italic text-sm font-light leading-relaxed" style={{ color: "#6b4f5e" }}>
                  {card.desc}
                </p>
              </motion.div>
            ))}
          </div>
        </FadeUp>

        {/* PS section */}
        <FadeUp>
          <div
            className="rounded-2xl p-8"
            style={{
              background: "linear-gradient(135deg, rgba(201,116,143,0.06), rgba(200,169,122,0.06))",
              border: "1px solid rgba(200,169,122,0.2)",
            }}
          >
            <p className="font-script text-2xl mb-4" style={{ color: "#c8a97a" }}>
              P.S.
            </p>
            <p
              className="font-display italic text-xl font-light leading-relaxed"
              style={{ color: "#4a3040" }}
            >
              [✏️ Add your P.S. here — something playful, something sweet, an inside joke, a secret only she'll understand. The P.S. is often the most memorable part of any letter.]
            </p>
          </div>
        </FadeUp>

        {/* Final hearts */}
        <FadeUp className="text-center py-8">
          <motion.div
            animate={{ scale: [1, 1.1, 1] }}
            transition={{ repeat: Infinity, duration: 2.5 }}
            className="text-5xl mb-4"
          >
            ❤️
          </motion.div>
          <p className="font-script text-rose-400 text-3xl">Happy Anniversary</p>
          <p className="font-display italic text-gray-400 mt-2 font-light">
            With every beat of my heart, I love you.
          </p>
        </FadeUp>

        {/* Navigation */}
        <div className="flex justify-between items-center pt-8 border-t" style={{ borderColor: "rgba(201,116,143,0.15)" }}>
          <Link
            to="/chapter-4"
            className="inline-flex items-center gap-2 text-sm font-light transition-colors hover:text-rose-500"
            style={{ color: "#9c7e88", fontFamily: "Cormorant Garamond, serif", fontSize: "1rem" }}
          >
            <FiArrowLeft /> Chapter IV
          </Link>
          <Link
            to="/"
            className="inline-flex items-center gap-2 px-6 py-2 rounded-full text-white font-light transition-all hover:scale-105"
            style={{
              background: "linear-gradient(135deg, #c9748f, #e8a0b0)",
              fontFamily: "Cormorant Garamond, serif",
              fontSize: "1rem",
            }}
          >
            Back to Home <FiHeart />
          </Link>
        </div>
      </div>

      {/* Footer */}
      <footer
        className="py-12 text-center border-t"
        style={{ borderColor: "rgba(201,116,143,0.15)" }}
      >
        <p className="font-script text-rose-400 text-3xl mb-2">Made with Love</p>
        <p className="text-sm font-light text-gray-400">Just for you, always and forever 💕</p>
      </footer>
    </PageWrapper>
  );
}
