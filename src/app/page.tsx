'use client';

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { FiHeart, FiArrowRight, FiChevronLeft, FiChevronRight } from "react-icons/fi";
import Navbar from "@/components/anniversary/Navbar";
import Petals from "@/components/anniversary/Petals";
import PhotoSlot from "@/components/anniversary/PhotoSlot";
import FadeUp from "@/components/anniversary/FadeUp";
import MusicPlayer from "@/components/anniversary/MusicPlayer";

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
  { date: "24/4/24", title: "First Date", desc: "I saw love bloom before my eyes." },
  { date: "10/12/24", title: "Mini arrived", desc: "You brought our daughter home. Ami Mini r sathe aro somoy katate chai. Or sathe amar kichu chobi tule dis.." },
  { date: "October 2025", title: "We are now vegans together", desc: "Now that's what I call a milestone! Erpor cooking dinner together o hobe!" },
  { date: "4/4/26", title: "Staying Together All Night", desc: "Jadavpur e sararat. Waited long for this. Jani majhkhane boring hoye gechilo, but its a milestone. And I enjoyed a lot." },
];

const chapter2Adventures = [
  { emoji: "✈️", title: "Ghurte Jawa", desc: "Beshi dure na geleo, amra kolkata tei koto jaygay ghurechi. Ha akhono onek kichu dekha baki, ar amader berono hoyna. But that's all the more reasons to change that. I really want to travel a lot with you.Sob jaygay kothar mone korle jano tor memories gulo o mone pore." },
  { emoji: "🍽️", title: "Khawa-Dawa", desc: "Eta te to amra kichu kom jaina😎. Amra khetei thaki kichu na kichu. Its just vegan hoye khabar gulo aro valo hoye gache.Aro khabar khawabi amake tuiii" },
  { emoji: "🎉", title: "Indoor Funs", desc: "Eta bodhoy sobcheye besi hoy. Bari bose cuddle, UNO, chess, games, movie ar alochona. Movie dekhbo abar aksatheeee." },
  { emoji: "🌅", title: "Quiet Moments", desc: "As we've admitted many times, the silence between us is comforting also." },
  { emoji: "🎬", title: "Passions", desc: "Tomar gaan er gola ki sundor gooo🥹🥹.Amar to onek passion. I wanna share all of them with you, but call e thik thak kore hoye othena. Ami bolle tui sunbi chup kore, valo meyer moto." },
  { emoji: "💪", title: "Challenges We Overcame", desc: "We overcame a certain someone's love drama, long distance, our laziness, my introvertedness aro koto ki. Nothing is impossible when we're together." },
];

const chapter3Moments = [
  { title: "[Favourite Moment #1]", date: "[Date]", desc: "[Describe your first favourite memory in detail.]" },
  { title: "[Favourite Moment #2]", date: "[Date]", desc: "[A time you laughed until you couldn't breathe.]" },
  { title: "[Favourite Moment #3]", date: "[Date]", desc: "[Another cherished memory — maybe a trip, a surprise.]" },
  { title: "[Favourite Moment #4]", date: "[Date]", desc: "[A moment you'll both always remember.]" },
];

const chapter4Dreams = [
  { emoji: "🌍", title: "Travel Dream", desc: "Ghurte jete hobe valo valo jaygay. Prothome India ghurte hobe, then world er bibhinno jayga. Akta valo camera kinte hobe." },
  { emoji: "🏡", title: "A Future Home", desc: "Obviously. Akta bari hobe amader, jetake amra nijer moto kore sajabo. Koto planning korechi. Setay non-vegan khabar dhukbe na." },
  { emoji: "🎯", title: "A Shared Goal", desc: "To live a fulfilled life, and supporting each other in time they need. Giving each other the comfort when we deserve and creating a beautiful life together." },
  { emoji: "🌿", title: "A Simple Joy", desc: "Just laying by each other. Hugging, or not. Maybe its raining outside. Maybe we start to sing. Maybe current goes off, and we're figuring out together what to do with life." },
];

const chapter4Reasons = [
  "I love you because of you cry when I do",
  "I love you because you make everything better",
  "I love you because of the way you care for me",
  "I love you because you challenge me to grow, and make me a better person",
  "I love you because of your strength and how you let yourself be vulnurable with me",
  "I love you because you're my home",
  "I love you because of your kindness",
  "I love you because you chose me and saw the best in me when I couldn't see it myself",
  "I love you because of who you are and how beautiful you are, inside and out",
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
const loveLetterPages = [
  {
    heading: "Dearest Mimi,",
    body: "Amader 2 years hoye galo. Ato time kibhabe hothat kete galo bujhtei parlam na. Mone hoy ei sedin e amra amader first date e gelam.\n\nTarpor ei 2years e koto kichu hoyeche amader modhye. Kotokichu korechi amra aksathe. Koto moments share korechi, koto alochona, koto decisions, supports, jhogra, embrace, khawadawa, photo(ota oto besi noy, ami tulbo aro akhon theke pakka), ghurte jawa and sooooo much. Esob amar plan e konodin chilo na aage, mane ami vabtam e na esob. But tui akdin jhorer moto amar jibone asli ar tene niye chole geli. Akhono niye jachhis. Amake nijer moto kore gore tulechis. Amar jibon ta amon hoye jachhe jamon ta ami kokhon vabii ni, all thanks to you.\n\nTui amake sotyikar er valobasha r ortho sikhiyechis. Jani ami akhono ektu kacha achi, kintu ami dekhte pachhi je ami sikhchi. Kikore valobaste hoy kono manush ke, koto ador niye tar kheyal rakhte hoy, kibhabe kharap somoye tar pashe darate hoy, kivabe nijeke surrender korte hoy tar samne - sobkichu.\n\nAmi amader anniversary te ei memory gulor e reconciliation korte chai. Ami dekhate chai toke je ei 2 bochor e ami ki ki feel korechi because of you. Karon amar kache to sudhu amar experience e ache, so ami setai tor samne tule dhorbo.",
  },
  {
    heading: "The Hollow Inside Me",
    body: "Ami prothom thekei vabtam je amar sathe kichu akta thik nei. Ami thik thak normal manush er moto operate korte parina. Nijeke vetor theke hollow mone hoto. Eta amader date ero onek aager kotha. I don't know why, but I failed to understand how to deal with closeness. Ota naturally hoar hole hoto, but normally ki, kamon kora ba feel kora uchit ami seriously bujhtam na valo kore. Manush, mane jara kacher arki, tader sathe kivabe deal korbo, kivabe operate korbo, conversation korbo tader sathe jara important, egulo amar mathay thik thak bosto na. Long time problem eta.\n\nTai amar majhe majhe mone hoto ami khub hollow. Amar onek jinis ache, talents, interests, righteousness, excitement. But amar kono emotion nei. Mone hoto ami konodin valo baste parbo na, heart take bhari mone hoto.\n\nAmi ekhane aktao mithye kotha bolchi na. Ami konodin bolini eta kauke but amar hoto. Amar abritti sir amay khub valobasto, but jokhon ami abritti charlam, tarpor theke na ami ar bujhte partam na je ebar ami sir er sathe kibhabe ki deal korbo. Normal manush ki kore. Erom onek somoyi hoy, akjon amake valobeshe onek kichu bolche, ba emnio onek kichu bolche, valo jinis jegulo, but ami akhon ki bolte hoy janina. Ami chesta kortam nokol korar je normal lokjon era ki bolto, kon reaction ta sobcheye appropriate hobe. Eta hoto oneek somoy.\n\nTai jonno professional kaj e amai khub kotha bolte pari, but personally ami ektu kom e kotha boli, tar karon ki bolte hoy ami jani na. School er amar koyekjon bondhu baade eta sobar opor applicable chilo.\n\nAnd that made me feel so soo alone inside.\n\nI felt I wasn't capable of love, capable of warmth, to emotionally connect, to feel natural.\n\nAr egulo amar akhono ache. Ami toke majhe majhe jigyes kori ami wierd kina taina? Setar vetore ato kichu ache.\nDakh amar eta ato ache je eta bolte amar toke 2 years laglo.\n\nAr normally egulo mathay chole na amar. But egulo chesta kore mone korle khub kharap lage abar.\n\nAr eta amader relationship ke hamper kore ami jani. Not understanding others and being a shell of a human.\n\nSo most of my teenage life ami egulo face korechi.",
  },
  {
    heading: "Then You Came",
    body: "Then you came into my life. At first tui ar ami oto close chilam na. But amader call e ami dekhlam, je akmatro tui amay normal hote hobe amon feel koras na(apart from parents ofc, bar bar likhbo na), ami jebhabei thaki tui thakis amar sathe. Which made me feel soo comfortable je ami already tor sathe internally onekta attach hoye gechilam. Tai mone ache ami tui ar soumita jokhon call e kotha boltam, sudhu tui thaklei ami kotha boltam, dhor tui bathroom e gechis, tokhon amar ar soumita r mostly kono kotha hoto na. Something like \"kire kamon achis\" and stuff. Tui call rekhe dile o ar ami aka thakle ami tokhuni boltam achha rakhchi. Because I wasn't comfortable with her. Only with you.\n\nSounds a little pathetic when I say this, but you know.\n\nSo ami tor kache comfortable chilam onekta. Tai tor sathe ato kotha boltam. Raat e toke call korte ichhe hoto khali, eta jeneo je porle valo hobe. Tokhon to amar school er bondhu rao chilo na oi closeness tar jonno, you were the only one who was saving me.\n\nYes ami jani oi call gulo te tui o comfort petis, tui bolechis, but now you know its mutual.\n\nThen amra arektu boro holam, sob kotha share kortam. Amar mind e you were a girlfriend but amar sesob er kono plan ba serom kichu chilo na. Then fake daring happened and on and off and it made you hurt a lot(I am so sorry) but eventually we started dating.",
  },
  {
    heading: "The Moment That Hit Me",
    body: "Now amra akhon date korchi. Tui amar girlfriend. Tor sathe amar genuine closeness banate hobe, ar eta sudhu call e hole cholbe na. Ami nervous chilam, je ebar hoyto o amake samne theke dekhte pabe ar bujhe jabe ami kamon, hollow.\n\nTai ami amader first date e jotota sombhob natural vabe thakar chesta korchilam esob chinta mathay na ene. Obviously amon to na je act korchilam, but mathay egulo ghurto amar. But tor cycle er pechone bose na ami sob vule gelam. Ar tui tokhon ami cycle niye jekhane jete bolchilam jachhili valo meye er moto, akhon kotha sunis na. Anyways amra tor chade gelam. Sekhane akta jayga dekhe amra boslam, tokhon tui phone bar kore ki akta dekhchili, dekhte dekhte amar hat niye khelchili ar hat bolachhili.\n\nThat was the moment that hit me. I have no filters infront of this girl. I am naked. She's too. Aager 4 bochor er closeness ar efforts(mane calls ar sharing) er accumulation holo ei moment. This moment is what we have achieved due to our truest forms and actions. Toke dekhe amar akta kotha mone holo\n\nEi meye ta amar\n\nOr life akhon amar life er part, tamon amar life o or life er part. Amra akta life er duto part. Amar jiboner somosto kichute ami ar aka noi, amar sobkichute akhon or sobkichu mishe ache.\n\nAmar tokhon je ki feel hochhilo ami bojhate parbo na. Mone kore dakh tar por ami hothat khub clingy hoye gelam. Toke bollam chol okhane helan diye bosi, then tor gaa ghese bose tor kadhe matha rakha. Toke chumu dite bola, tor angul gulor majhe amar gulo rakha.\n\nLike my whole defense is being blown to bits.",
  },
  {
    heading: "Learning to Love You Better",
    body: "Then we grew even closer, with the eventual dates. Tui amar sathe aro beshi kotha bolte suru korli aager theke. Tui amake chinli, amar onek onek dosh tui ak ak kore dhorte suru korli. Amar tor emotions bujhte problem hoto, ami boleichi tar karon, amar eta prothom theke problem. Ar bujhleo ki bolte hobe eta determine korte aro problem hoy. Ei sobgulo ami face korte thaklam. Amar jonno tui hurt hotis, ar tar jonye amar khub guilty lagto, je jei meye ta amake ato kichu dichhe take amk kosto dichhi. Seta ami akhono diye jai, ojante. But ami sikhchi. Roj sikhchi. Nijer vetorer ei jinis take chinte sekha, tar sathe communicate kora, ki thik ki vul, konta sotyi konta mithye, uchit onuchit, sobkichu niye ami ghontar por ghonta nijer sathe communicate korechi. Karon ami kichutei mene nite parina je ami toke hurt korbo.\n\nTui bolis ami change hoyechi, setar puro karon tui. Tor sathe thakte thakte ami chinte sikhechi sobkichu ke, bujhte sikhechi, bichar korte sikhechi ar most of all nijeke chinte sikhechi. So thank you, for doing this to me. If I am a better person today, its only because of you.\n\nAmar communication korte problem hoy and its not only my stammering. Amar nijer feelings communicate korteo problem hoy. Tui rege gele ami emotional thakle ami bujhte parina ki bolbo. Ami thik korchi egulo, eta amar kono notun problem noy as I said. But I just wanted you to know.\n\nAmar sei problem gulo onek ta kete gache, amar ar normal conversation e somosya hoyna mostly. Amar ar mone hoyna je ami natural human behaviour ke nokol korchi (majhe majhe hoy). But ami toke bolbo je ami chup thakle ektu jigyes korte je ki hoyeche kichu bolte chas ba kichu.\n\nI will be better I promise. Tor amar somporke ja ja complaints ache, please know this, one day they will cease to exist. I swear.",
  },
  {
    heading: "The Shining Star of My Life",
    body: "Okay onek amar kotha holo, ebar asi tomar kothay.\n\nKi boli tomake. You're the shining star of my life. Nobody is perfect but for sure you're definitely up there. You are a woman of golden heart. Brimming with kindness. Be it being vegan, or sympathizing with people's miseries. Ami sotyi surprise hoi jokhon ami social media e manusher koste toke kadte dekhi.\n\nAs a person tui valo trait e bhora. Tui righteous. Tui baje jinis dekhle call out koris. Tor samne mithye tikte pare na. Tui tor family member der care koris(ato kichur poreo). Tui kono jogyo manush ke apon kore nite paris. Tor modhye kono ohonkar nei, kono bisoye. Tui manush, posu sobar jonye chinta koris. You can be so warm and comforting, and when time demands you can be cold and ruthless.\nAr sobcheye boro kotha. Tui valobasha kake bole janis.\n\nTor moto manush khub kom e ache. Ato supportive, caring. Somosto dik theke valo.\n\nI thank god I got you as my beloved. I love you so muchh.",
  },
  {
    heading: "A Little Desire",
    body: "Ebar ektu hawas.\n\nTui khub hot. I mean seriously. You're so so hot. Tor mukh ta ki cuteee, gal gulo fulu fulu ar chokh gulo...uff. Perfect.\n\nI could die for the smell of your curly hair after bath. For real. Mone hoy otar vitore hariye jai.\n\nTor puro body ta norom norom ar sensitive. Ebong gorom. Bishesh kore ghar er kach ta. Wish I could just kiss you theereeeee.\n\nItna sexy hoke khudko samhal kaise lete ho??\nSirf wahi nehi, itne cute aur insaan bhi itne achhe ho. Hamesha care karte ho. Apka pati to khushnaseeb hi hoga.\n\nMajhe majhe dekhis na ami tor dike takiye thaki?? Ami tokhon vabi \"Ei sundor ar valo meye ta amar lover??????? Ohmygawd\"",
  },
  {
    heading: "Will You Marry Me??",
    body: "Please?? I don't what will I do without you. Tui amar erom unnaturality r sathe koto comfort e thakis. Amar hajar fuck up korar por o tui amar opor biswas koris, jotoi bokis tui. Amio tor onek kichu valo change korechi tui bolis, but ami bujhi na seta. But I hope ami jai korchi seta aro korte thakbo.\n\nI cannot think of anyone I am nearly as close as you. Tui amar hat e kirom vabe gole jas, that shows you're soo much in love I can't even imagine. Yes its settled. You love me more. But ami tao bolbo I love you more.\n\nCan't wait to build a life with you. Tokhon I know we'll be molded to be perfect for each other even more. Tokhon amra anniversary celebration korbo aksathe jorajori kore, ba chumu kheye ami ei jegulo amra likhi segulo pore suniye. Who knows? It will only get better from here.\n\nTui onek somoy concerned thakis je tui valo girlfriend kina amar jonye. Ami jani amake kichu akta hurt korle tui seta niye prochur vabbi, ar seta valid hole tui change kore nibi seta. I wish i was as strong as you. As good a person as you. As loving as you. I love you so so much",
  },
  {
    heading: "Forever Yours",
    body: "All I wanna say is\nI love you soo much babuuu. Ami toke khub valobasi. Jotota amar pokhe sombhob, ar setai berei choleche. You deserve everything. Every happiness. Everything I ever achieve in life, its yours too. Tor amar upor puro odhikar ache. Ami tor somosto kichu r sathe thakbo, toke chere kokhono jabo na. Ami toke khub valobashi. Amar vul gulor jonye amay khoma kore de. Anniversary r din e eta dite na parar jonye so sorryyy. Ektu time lege galo. I promise next time theke hobe na. I love you so much.\n\nMwah mwah",
  },
];

export default function AnniversaryPage() {
  const [letterPage, setLetterPage] = useState(0);

  return (
    <div className="w-full min-h-screen">
      <Navbar />
      <Petals count={16} />

      {/* ═══════ HERO ═══════ */}
      <section id="hero" className="relative min-h-screen flex flex-col items-center justify-center text-center overflow-hidden pt-20">
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
            Happy Anniversary, My Love Mimi❤️
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
              ✦ Since 01/04/2024 ❤️ ✦
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
            <PhotoSlot label="Our favourite photo together" src="/our2ndanniversary/images/Favorite_pic.png" aspectRatio="landscape" rotate={-1} />
          </FadeUp>
          <FadeUp delay={0.1}>
            <PhotoSlot label="A sweet memory" src="/our2ndanniversary/images/Sweet_mem.png" aspectRatio="square" rotate={1} />
          </FadeUp>
          <FadeUp delay={0.2}>
            <PhotoSlot label="Us laughing" src="/our2ndanniversary/images/usss_1.png" aspectRatio="square" rotate={-1.5} />
          </FadeUp>
          <FadeUp delay={0.3}>
            <PhotoSlot label="A special day" src="/our2ndanniversary/images/sp_day.png" aspectRatio="square" rotate={1} />
          </FadeUp>
          <FadeUp delay={0.4}>
            <PhotoSlot label="My favourite smile" src="/our2ndanniversary/images/Fav_smile.png" aspectRatio="square" rotate={-0.5} />
          </FadeUp>
        </div>

        <div className="grid grid-cols-3 gap-4 md:gap-5 mt-4 md:mt-5">
          <FadeUp delay={0.1}>
            <PhotoSlot label="An adventure" src="/our2ndanniversary/images/adventure.png" aspectRatio="portrait" rotate={-1} />
          </FadeUp>
          <FadeUp delay={0.2}>
            <PhotoSlot label="Pure joy" src="/our2ndanniversary/images/joy.png" aspectRatio="portrait" rotate={0.5} />
          </FadeUp>
          <FadeUp delay={0.3}>
            <PhotoSlot label="Together always" src="/our2ndanniversary/images/together.png" aspectRatio="portrait" rotate={-0.5} />
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
              &quot;আমি তোমারে পেয়েছি হৃদয়ের মাঝে, আর কিছু নাই চাই গো।&quot;
            </p>
            <p className="mt-6 text-sm font-light tracking-widest uppercase" style={{ color: "#c9748f" }}>
              — রবীন্দ্রনাথ ঠাকুর
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
              I clearly remember the day. It was after the blunder, but before the official dating. When we were getting to the dating. Amra couple der moto kotha bolte suru kore diyechilam. Tokhon hothat tui akdin amake bolli "Sudhu amay chere jas na talei hobe". I never can, and you know it. But setar porei amar mone hoyechilo, yes we're lovers now.
            </p>
          </FadeUp>

          <FadeUp>
            <div className="grid md:grid-cols-2 gap-10 items-center">
              <PhotoSlot label="Where we first met" src="/our2ndanniversary/images/first_meet.png" aspectRatio="portrait" rotate={-2} />
              <div className="space-y-5">
                <p className="font-script text-rose-400 text-2xl">The First Date</p>
                <p className="font-display text-lg leading-relaxed font-light" style={{ color: "#4a3040" }}>
                  First date, excited, arektu nervous, but mostly excited. I remember your smell and how warm and comforting your embrace felt. It was heavenly. Wish I could relive that moment again...
                </p>
                <p className="font-display text-lg leading-relaxed font-light" style={{ color: "#4a3040" }}>
                  Tarpor amra aro koto date e jetam. Barrackpore dhobi ghat, mostly 12 mandir ghat. Tarpor Cake-o-Cafe e khete jawa ar waiter er sathe lukochuri, we have had a lot of fun together!
                </p>
              </div>
            </div>
          </FadeUp>

          <FadeUp>
            <PhotoSlot label="Our first photo together" src="/our2ndanniversary/images/first_phto.png" aspectRatio="wide" />
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
            <p className="font-script text-rose-400 text-2xl text-center mb-8">More Memories of Our Journey</p>
            <div className="grid grid-cols-2 md:grid-cols-3 gap-4">
              <PhotoSlot label="Early days photo" src="/our2ndanniversary/images/Early_girl.png" aspectRatio="square" rotate={1} />
              <PhotoSlot label="A first adventure" src="/our2ndanniversary/images/ganga_ghat.png" aspectRatio="square" rotate={-1} />
              <PhotoSlot label="Just us" src="/our2ndanniversary/images/mine.png" aspectRatio="square" rotate={1.5} />
              <PhotoSlot label="A favourite place" src="/our2ndanniversary/images/fav_place.png" aspectRatio="square" rotate={-0.5} />
              <PhotoSlot label="That moment" src="/our2ndanniversary/images/moment.png" aspectRatio="square" rotate={1} />
              <PhotoSlot label="The beginning of us" src="/our2ndanniversary/images/uss_2.png" aspectRatio="square" rotate={-1.5} />
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
              Tor sathe somoy katanor somoy majhe majhe mone hoto tui atodin kothay chili. Tor dike takiye thaki tokhon. We are really perfect for eachother❤️.
            </p>
          </FadeUp>

          <FadeUp>
            <div className="grid md:grid-cols-5 gap-8 items-center">
              <div className="md:col-span-3 space-y-5">
                <p className="font-script text-2xl" style={{ color: "#9b72c9" }}>Building Our World</p>
                <p className="font-display text-lg leading-relaxed font-light" style={{ color: "#4a3040" }}>
                  Amar prithibi ta puro bodle gache tui ashar por. Mone hochhe jano amar abar notun jonmo hoyeche, karon ami onek bodle gechi. Tui surjer moto eshe somsto mihye ar ondhokar soriye aloye rangiye diyechis amake. Hope I did the same.
                </p>
                <p className="font-display text-lg leading-relaxed font-light" style={{ color: "#4a3040" }}>
                  Amra aksathe koto moja kori. Koto jokes, leg pull, alochona. Deep conversations. Photos. Aro korbo. Just amar idea gulo ektu ne tui🔫.
                </p>
              </div>
              <div className="md:col-span-2">
                <PhotoSlot label="Building a life together" src="/our2ndanniversary/images/build_life.png" aspectRatio="portrait" rotate={2} />
              </div>
            </div>
          </FadeUp>

          <FadeUp>
            <div className="grid grid-cols-4 gap-3">
              <PhotoSlot label="Memory 1" src="/our2ndanniversary/images/mem1.png" aspectRatio="portrait" rotate={-1.5} />
              <PhotoSlot label="Memory 2" src="/our2ndanniversary/images/mem2.png" aspectRatio="portrait" rotate={1} />
              <PhotoSlot label="Memory 3" src="/our2ndanniversary/images/mem3.png" aspectRatio="portrait" rotate={-1} />
              <PhotoSlot label="Memory 4" src="/our2ndanniversary/images/mem4.png" aspectRatio="portrait" rotate={2} />
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
              <PhotoSlot label="Our biggest adventure" src="/our2ndanniversary/images/A1.png" aspectRatio="landscape" rotate={-1} />
              <PhotoSlot label="A favourite trip" src="/our2ndanniversary/images/A2.png" aspectRatio="landscape" rotate={1} />
              <PhotoSlot label="Just exploring" src="/our2ndanniversary/images/A3.png" aspectRatio="landscape" rotate={0.5} />
              <PhotoSlot label="Somewhere beautiful" src="/our2ndanniversary/images/A4.png" aspectRatio="landscape" rotate={-0.5} />
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
              There are a lot of moments that I cherish deeply. Some are big, some are small, but all of them are precious because they were shared with you. I want to relive each and every one of them with you, again and again. Pic gulo sei moment gulo ke correspond kore na. But they live in my heart.
            </p>
          </FadeUp>

          <FadeUp>
            <p className="font-script text-2xl text-center mb-8" style={{ color: "#5b8ec4" }}>Snapshots of Happiness</p>
            <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
              <motion.div
                initial={{ opacity: 0, rotate: -5 }}
                whileInView={{ opacity: 1, rotate: -2 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: 0 }}
                className="bg-white p-3 pb-10 shadow-lg"
                style={{ border: "1px solid rgba(0,0,0,0.06)" }}
              >
                <PhotoSlot label="The happiest day" src="/our2ndanniversary/images/H1.png" aspectRatio="square" />
                <p className="mt-3 text-center font-script" style={{ color: "#c9748f", fontSize: "0.95rem" }}>The Saraswati Pujo</p>
              </motion.div>
              <motion.div
                initial={{ opacity: 0, rotate: 5 }}
                whileInView={{ opacity: 1, rotate: 2 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: 0.1 }}
                className="bg-white p-3 pb-10 shadow-lg"
                style={{ border: "1px solid rgba(0,0,0,0.06)" }}
              >
                <PhotoSlot label="I love this one" src="/our2ndanniversary/images/H2.png" aspectRatio="square" />
                <p className="mt-3 text-center font-script" style={{ color: "#c9748f", fontSize: "0.95rem" }}>I love this one</p>
              </motion.div>
              <motion.div
                initial={{ opacity: 0, rotate: -5 }}
                whileInView={{ opacity: 1, rotate: -2 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: 0.2 }}
                className="bg-white p-3 pb-10 shadow-lg"
                style={{ border: "1px solid rgba(0,0,0,0.06)" }}
              >
                <PhotoSlot label="Remember this?" src="/our2ndanniversary/images/H3.png" aspectRatio="square" />
                <p className="mt-3 text-center font-script" style={{ color: "#c9748f", fontSize: "0.95rem" }}>Look at usss🥹🥹</p>
              </motion.div>
              <motion.div
                initial={{ opacity: 0, rotate: 5 }}
                whileInView={{ opacity: 1, rotate: 2 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: 0.3 }}
                className="bg-white p-3 pb-10 shadow-lg"
                style={{ border: "1px solid rgba(0,0,0,0.06)" }}
              >
                <PhotoSlot label="Pure magic" src="/our2ndanniversary/images/H4.png" aspectRatio="square" />
                <p className="mt-3 text-center font-script" style={{ color: "#c9748f", fontSize: "0.95rem" }}>The Skincare🤣</p>
              </motion.div>
            </div>
          </FadeUp>

          <div className="space-y-16">
            <FadeUp delay={0.1}>
              <div className="grid md:grid-cols-2 gap-10 items-center">
                <div>
                  <PhotoSlot label="Photo from: [Favourite Moment #1]" src="/our2ndanniversary/images/F_mem1.png" aspectRatio="landscape" rotate={-1.5} />
                </div>
                <div className="space-y-4">
                  <p className="text-xs font-light tracking-widest uppercase" style={{ color: "#5b8ec4" }}>Jadavpur</p>
                  <h3 className="font-display text-2xl md:text-3xl font-medium" style={{ color: "#2d1b2e" }}>The Kindness</h3>
                  <div className="h-px w-16" style={{ background: "#5b8ec4" }} />
                  <p className="font-display text-lg leading-relaxed font-light" style={{ color: "#4a3040" }}>This moment exactly showed me how kind you can be. Maybe its nothing, but I was really amazed tui ki sundor kole niye ador korchili, ami posu der dhorte voy petam.</p>
                </div>
              </div>
            </FadeUp>
            <FadeUp delay={0.1}>
              <div className="grid md:grid-cols-2 gap-10 items-center md:[direction:rtl]">
                <div className="md:[direction:ltr]">
                  <PhotoSlot label="Photo from: [Favourite Moment #2]" src="/our2ndanniversary/images/F_mem2.png" aspectRatio="landscape" rotate={1.5} />
                </div>
                <div className="space-y-4 md:[direction:ltr]">
                  <p className="text-xs font-light tracking-widest uppercase" style={{ color: "#5b8ec4" }}>Home</p>
                  <h3 className="font-display text-2xl md:text-3xl font-medium" style={{ color: "#2d1b2e" }}>The Videocalls</h3>
                  <div className="h-px w-16" style={{ background: "#5b8ec4" }} />
                  <p className="font-display text-lg leading-relaxed font-light" style={{ color: "#4a3040" }}>Videocalls must be one of the hilarious moments between us. Tui kirom nijer half mukh dekhiye bose thakis, ar kivabe takiye thakis. Everythingg.</p>
                </div>
              </div>
            </FadeUp>
            <FadeUp delay={0.1}>
              <div className="grid md:grid-cols-2 gap-10 items-center">
                <div>
                  <PhotoSlot label="Photo from: [Favourite Moment #3]" src="/our2ndanniversary/images/F_mem3.png" aspectRatio="landscape" rotate={-1.5} />
                </div>
                <div className="space-y-4">
                  <p className="text-xs font-light tracking-widest uppercase" style={{ color: "#5b8ec4" }}>Konnagar</p>
                  <h3 className="font-display text-2xl md:text-3xl font-medium" style={{ color: "#2d1b2e" }}>The Kisses</h3>
                  <div className="h-px w-16" style={{ background: "#5b8ec4" }} />
                  <p className="font-display text-lg leading-relaxed font-light" style={{ color: "#4a3040" }}>I am glad that we're not reluctant anymore to kiss each other in public. We need to lip kiss more.</p>
                </div>
              </div>
            </FadeUp>
            
          </div>

          <FadeUp>
            <p className="font-script text-2xl text-center mb-8" style={{ color: "#5b8ec4" }}>More Beautiful Memories</p>
            <div className="grid grid-cols-3 md:grid-cols-5 gap-3">
              <PhotoSlot label="Memory 1" src="/our2ndanniversary/images/mem_ch3_1.png" aspectRatio="square" rotate={-1} />
              <PhotoSlot label="Memory 2" src="/our2ndanniversary/images/mem_ch3_2.png" aspectRatio="square" rotate={0} />
              <PhotoSlot label="Memory 3" src="/our2ndanniversary/images/mem_ch3_3.png" aspectRatio="square" rotate={1} />
              <PhotoSlot label="Memory 4" src="/our2ndanniversary/images/mem_ch3_4.png" aspectRatio="square" rotate={-1} />
              <PhotoSlot label="Memory 5" src="/our2ndanniversary/images/mem_ch3_5.png" aspectRatio="square" rotate={0} />
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
              Akhono koto ki kora baki ache. Koto experience, koto jaygay ghurte jawa, koto khabar try kora, koto dresses kine photo tola. Let's look at them shall we?
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
                  I promise to take care of you. Try to understand your feelings even more deeply. To be the best version of myself for you and for us. I promise to love you even more, no matter what life throws at us.
                </p>
                <p className="font-display text-lg leading-relaxed font-light" style={{ color: "#4a3040" }}>
                  I will not be perfect, but I will always try. I will always be there for you, in good times and bad. I promise to make you laugh, to support your dreams, and to cherish every moment we have together.
                </p>
              </div>
              <PhotoSlot label="Us in the future" src="/our2ndanniversary/images/Us_future.png" aspectRatio="portrait" rotate={1.5} />
            </div>
          </FadeUp>

          <FadeUp>
            <p className="font-script text-2xl text-center mb-8" style={{ color: "#7aad6e" }}>Our Bucket List</p>
            <div className="grid md:grid-cols-3 gap-4">
              {[
                "Sex korbo.",
                "Ake oporke nijeder expertise sekhabo.",
                "Ranna kore khabo.",
                "Chakri korbo dujone, then self dependent hobo.",
                "Aksathe akta game sesh korbo.",
                "Aksathe hall e cinema dekhbo akta",
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
              <PhotoSlot label="Looking forward" src="/our2ndanniversary/images/look_fwd.png" aspectRatio="square" rotate={-1} />
              <PhotoSlot label="Our future" src="/our2ndanniversary/images/future.png" aspectRatio="square" rotate={1.5} />
              <PhotoSlot label="Dream photo" src="/our2ndanniversary/images/dream.png" aspectRatio="square" rotate={-1.5} />
              <PhotoSlot label="Always us" src="/our2ndanniversary/images/always.png" aspectRatio="square" rotate={1} />
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
         LOVE LETTER — 9 Pages
         ═══════════════════════════════════════════════ */}
      <section id="love-letter" className="w-full">
        {/* Banner */}
        <div className="relative h-72 md:h-96 flex items-center justify-center overflow-hidden">
          <div className="absolute inset-0 bg-cover bg-center" style={{ backgroundImage: "url('/images/letter-bg.jpg')" }} />
          <div className="absolute inset-0" style={{ background: "linear-gradient(to bottom, rgba(253,240,243,0.5), rgba(253,240,243,0.88))" }} />
          <div className="relative z-10 text-center px-6">
            <motion.div initial={{ scale: 0 }} whileInView={{ scale: 1 }} viewport={{ once: true }} transition={{ type: "spring", stiffness: 200 }} className="flex justify-center mb-4">
              <span style={{ fontSize: "2.5rem" }} className="heartbeat">💌</span>
            </motion.div>
            <motion.p initial={{ opacity: 0, y: -20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ duration: 0.8, delay: 0.2 }} className="font-script text-rose-400 mb-2" style={{ fontSize: "1.8rem" }}>From My Heart to Yours</motion.p>
            <motion.h1 initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ duration: 0.8, delay: 0.4 }} className="font-display font-light" style={{ fontSize: "clamp(2rem, 6vw, 4rem)", color: "#2d1b2e" }}>A Love Letter — 9 Pages</motion.h1>
            <motion.p initial={{ opacity: 0 }} whileInView={{ opacity: 1 }} viewport={{ once: true }} transition={{ duration: 0.8, delay: 0.6 }} className="font-display italic text-gray-400 mt-3 font-light">Turn the pages with the arrows below</motion.p>
          </div>
        </div>

        <div className="max-w-2xl mx-auto px-6 py-12">
          {/* Page dots */}
          <div className="flex items-center justify-center gap-2 mb-8">
            {loveLetterPages.map((_, i) => (
              <button
                key={i}
                onClick={() => setLetterPage(i)}
                className="rounded-full border-none cursor-pointer transition-all duration-300"
                style={{
                  width: i === letterPage ? "28px" : "10px",
                  height: "10px",
                  background: i === letterPage
                    ? "linear-gradient(135deg, #c9748f, #e8a0b0)"
                    : "rgba(201,116,143,0.2)",
                  borderRadius: "9999px",
                }}
              />
            ))}
          </div>

          {/* Letter Book */}
          <AnimatePresence mode="wait">
            <motion.div
              key={letterPage}
              initial={{ opacity: 0, x: 40 }}
              animate={{ opacity: 1, x: 0 }}
              exit={{ opacity: 0, x: -40 }}
              transition={{ duration: 0.35, ease: "easeInOut" }}
              className="relative rounded-3xl p-8 md:p-14 shadow-xl"
              style={{
                background: "rgba(255,255,255,0.95)",
                backgroundImage: "repeating-linear-gradient(transparent, transparent 31px, rgba(201,116,143,0.06) 31px, rgba(201,116,143,0.06) 32px)",
                border: "1px solid rgba(201,116,143,0.15)",
                minHeight: "420px",
              }}
            >
              {/* Page number badge */}
              <div
                className="absolute -top-4 left-1/2 -translate-x-1/2 px-4 py-1 rounded-full text-white text-xs font-light tracking-widest uppercase shadow-md"
                style={{ background: "linear-gradient(135deg, #c9748f, #e8a0b0)" }}
              >
                Page {letterPage + 1} of 9
              </div>

              {/* Heading */}
              <p className="font-script text-rose-400 mb-6" style={{ fontSize: "2rem" }}>
                {loveLetterPages[letterPage].heading}
              </p>

              {/* Body text */}
              <p className="font-display text-lg md:text-xl leading-relaxed font-light" style={{ color: "#3a2535", whiteSpace: "pre-wrap" }}>
                {loveLetterPages[letterPage].body}
              </p>

              {/* Page decoration */}
              <div className="absolute bottom-4 right-6 opacity-20 font-script text-rose-300" style={{ fontSize: "3rem" }}>
                ♥
              </div>
            </motion.div>
          </AnimatePresence>

          {/* Navigation Buttons */}
          <div className="flex items-center justify-between mt-8">
            <button
              onClick={() => setLetterPage((p) => Math.max(0, p - 1))}
              disabled={letterPage === 0}
              className="flex items-center gap-2 px-5 py-3 rounded-full font-light tracking-wide transition-all duration-300 border-none cursor-pointer"
              style={{
                background: letterPage === 0
                  ? "rgba(201,116,143,0.08)"
                  : "linear-gradient(135deg, #c9748f, #e8a0b0)",
                color: letterPage === 0 ? "#c9748f" : "#fff",
                opacity: letterPage === 0 ? 0.5 : 1,
                fontFamily: "Cormorant Garamond, serif",
                fontSize: "1rem",
              }}
            >
              <FiChevronLeft size={18} /> Previous
            </button>

            <span className="font-display text-sm font-light" style={{ color: "#9c7e88" }}>
              {letterPage + 1} / 9
            </span>

            <button
              onClick={() => setLetterPage((p) => Math.min(8, p + 1))}
              disabled={letterPage === 8}
              className="flex items-center gap-2 px-5 py-3 rounded-full font-light tracking-wide transition-all duration-300 border-none cursor-pointer"
              style={{
                background: letterPage === 8
                  ? "rgba(201,116,143,0.08)"
                  : "linear-gradient(135deg, #c9748f, #e8a0b0)",
                color: letterPage === 8 ? "#c9748f" : "#fff",
                opacity: letterPage === 8 ? 0.5 : 1,
                fontFamily: "Cormorant Garamond, serif",
                fontSize: "1rem",
              }}
            >
              Next <FiChevronRight size={18} />
            </button>
          </div>

          {/* Hint */}
          <p className="text-center text-xs font-light mt-4" style={{ color: "#c4a0a8" }}>
            Tap the dots above to jump to any page
          </p>
        </div>

        {/* Bottom closing */}
        <div className="max-w-2xl mx-auto px-6 pb-20">
          <FadeUp className="text-center py-10">
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

      <MusicPlayer />
    </div>
  );
}
