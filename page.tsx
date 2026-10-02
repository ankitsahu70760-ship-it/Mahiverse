'use client';

import { useEffect, useMemo, useState } from 'react';
import { AnimatePresence, motion } from 'framer-motion';
import { Heart, Sparkles, Music2, Play, Pause, Star, Moon, Cat, Camera, Gift, Wand2, ChevronDown, MapPin, Clock3 } from 'lucide-react';

const interests = [
  { icon:'💙', title:'Doraemon', text:'Anywhere door to anywhere vibes. Future gadgets, comfort, chaos.' },
  { icon:'🧡', title:'Shinchan', text:'Maximum bakchodi, minimum seriousness. Exactly the right energy.' },
  { icon:'🖤💗', title:'BLACKPINK', text:'Pink + black + main character energy. No explanation needed.' },
  { icon:'🌸', title:'Anime', text:'Stories, characters, late-night episodes and cinematic feels.' },
  { icon:'🇰🇷', title:'K-World', text:'Korean singers, dreamy playlists and Seoul-at-night aesthetics.' },
  { icon:'✨', title:'Mahi Energy', text:'A little cute, a little chaotic, and somehow always iconic.' },
];

const notes = [
  'You deserve a day that feels like your favourite anime opening.',
  'If life had a Doraemon gadget, I would pick one that pauses the good moments.',
  'Shinchan would probably roast this website. Fair enough.',
  'BLACKPINK-level confidence, anime-level imagination.',
];

export default function Home() {
  const [time, setTime] = useState('');
  const [playing, setPlaying] = useState(false);
  const [surprise, setSurprise] = useState(false);
  const [note, setNote] = useState(notes[0]);
  const [liked, setLiked] = useState(false);
  const [sparkles, setSparkles] = useState<number[]>([]);

  useEffect(() => {
    const tick = () => setTime(new Intl.DateTimeFormat('en-IN', { timeZone:'Asia/Kolkata', hour:'2-digit', minute:'2-digit', second:'2-digit' }).format(new Date()));
    tick(); const id = setInterval(tick, 1000); return () => clearInterval(id);
  }, []);

  const floating = useMemo(() => Array.from({length:18}, (_,i)=>i), []);

  const createSparkles = () => {
    setSparkles(Array.from({length:24}, (_,i)=>i));
    setTimeout(()=>setSparkles([]), 1400);
  };

  const reveal = () => {
    setNote(notes[Math.floor(Math.random()*notes.length)]);
    setSurprise(true); createSparkles();
  };

  return (
    <main>
      <div className="ambient" aria-hidden="true" />
      {floating.map(i => <motion.span key={i} className="floaty" style={{left:`${(i*17)%100}%`, top:`${8+(i*23)%88}%`}} animate={{y:[0,-18,0], rotate:[0,8,-4,0], opacity:[.15,.65,.15]}} transition={{duration:5+(i%4), repeat:Infinity, delay:i*.2}}>{['✦','♡','✿','·'][i%4]}</motion.span>)}
      <AnimatePresence>{sparkles.map(i=><motion.span key={i} className="burst" initial={{x:0,y:0,scale:0,opacity:1}} animate={{x:Math.cos(i)*150,y:Math.sin(i)*150,scale:1,opacity:0}} transition={{duration:1.2}} style={{left:'50%',top:'46%'}}>{i%2?'✦':'♡'}</motion.span>)}</AnimatePresence>

      <nav className="nav wrap">
        <a className="brand" href="#home"><span className="brand-dot">M</span> MahiVerse</a>
        <div className="navlinks"><a href="#world">Her World</a><a href="#playlist">Playlist</a><a href="#memories">Vibes</a></div>
        <button className="icon-btn" onClick={()=>setPlaying(v=>!v)} title="Toggle music mode">{playing?<Pause size={17}/>:<Music2 size={17}/>}</button>
      </nav>

      <section id="home" className="hero wrap">
        <div className="hero-copy">
          <motion.div initial={{opacity:0,y:18}} animate={{opacity:1,y:0}} className="eyebrow"><Sparkles size={15}/> a little internet corner for</motion.div>
          <motion.h1 initial={{opacity:0,y:22}} animate={{opacity:1,y:0}} transition={{delay:.08}}><span>Mahi</span><br/>Sharma<span className="pink-dot">.</span></motion.h1>
          <motion.p initial={{opacity:0}} animate={{opacity:1}} transition={{delay:.18}}>Welcome to your own tiny universe — where anime nights, K-pop playlists, Doraemon magic and Shinchan chaos all live together.</motion.p>
          <div className="hero-actions">
            <button className="primary" onClick={reveal}><Wand2 size={17}/> Open a surprise</button>
            <a className="secondary" href="#world"><ChevronDown size={17}/> Explore the vibe</a>
          </div>
          <div className="live-pill"><span className="live-dot"/> MahiVerse is live <span className="sep">•</span><Clock3 size={13}/>{time || '—'}</div>
        </div>
        <motion.div className="hero-card" initial={{opacity:0,scale:.9,rotate:2}} animate={{opacity:1,scale:1,rotate:0}} transition={{type:'spring',stiffness:90}}>
          <div className="orbit orbit1"/><div className="orbit orbit2"/>
          <div className="profile-glow"><div className="profile-letter">M</div></div>
          <div className="card-star s1">✦</div><div className="card-star s2">♡</div><div className="card-star s3">✿</div>
          <div className="mini-card"><Heart size={14} fill="currentColor"/> main character energy</div>
          <div className="hero-card-bottom"><span>MAHI</span><small>anime • music • memories</small></div>
        </motion.div>
      </section>

      <AnimatePresence>{surprise && <motion.div className="surprise" initial={{opacity:0,y:20}} animate={{opacity:1,y:0}} exit={{opacity:0,y:20}}><button onClick={()=>setSurprise(false)}>×</button><Gift size={22}/><div><strong>For Mahi ✦</strong><p>{note}</p></div></motion.div>}</AnimatePresence>

      <section id="world" className="section wrap">
        <div className="section-head"><div><span className="kicker">THE MAHIVERSE</span><h2>Things that make <em>her</em> smile.</h2></div><span className="counter">06 little obsessions</span></div>
        <div className="interest-grid">{interests.map((x,i)=><motion.article key={x.title} className="interest" whileHover={{y:-8,rotate:i%2?.6:-.6}} transition={{type:'spring',stiffness:280}}><div className="interest-icon">{x.icon}</div><h3>{x.title}</h3><p>{x.text}</p><span className="number">0{i+1}</span></motion.article>)}</div>
      </section>

      <section id="playlist" className="section wrap split">
        <div className="music-panel">
          <span className="kicker">SEOUL AFTER DARK</span><h2>Press play on the<br/><em>Korean mood.</em></h2>
          <p>A little playlist-style corner for late-night Korean pop energy. The buttons are interactive — swap the names with her actual favourite singers later.</p>
          <div className="track-list">
            {['BLACKPINK — forever energy','IU — soft night mode','Jungkook — golden hour','NewJeans — city lights'].map((t,i)=><button key={t} className="track" onClick={()=>{setPlaying(true);setNote(`Now vibing with ${t.split(' — ')[0]} ✦`)}}><span className="track-num">0{i+1}</span><span>{t}</span><Play size={15}/></button>)}
          </div>
        </div>
        <div className="album-art"><div className="vinyl"/><div className="album-label">MAHI<br/><small>SEOUL NIGHTS</small></div><div className="album-caption"><Music2 size={16}/> K-pop mode <span>●</span></div></div>
      </section>

      <section id="memories" className="section wrap memories">
        <div className="memory-main"><span className="kicker">ANIME CORNER</span><h2>Doraemon + Shinchan<br/><em>approved.</em></h2><p>Imagine this as a tiny digital scrapbook. Add photos, inside jokes, birthdays, songs, college memories — anything that makes this feel unmistakably hers.</p><button className="secondary" onClick={()=>{setLiked(v=>!v);createSparkles()}}>{liked?<Heart size={17} fill="currentColor"/>:<Heart size={17}/>} {liked?'Saved to MahiVerse':'Add a little love'}</button></div>
        <div className="anime-stack"><div className="anime-card blue"><span>◉</span><strong>DORAEMON</strong><small>anywhere door → happy place</small></div><div className="anime-card yellow"><span>♪</span><strong>SHINCHAN</strong><small>chaos level: legendary</small></div><div className="anime-card pink"><span>✦</span><strong>ANIME NIGHTS</strong><small>one more episode...</small></div></div>
      </section>

      <section className="quote wrap"><Cat size={18}/><p>“Some people have a favourite place. Mahi has an entire universe.”</p><span>— MahiVerse</span></section>

      <footer className="footer wrap"><div><strong>MahiVerse ✦</strong><span>made with too much CSS and a little heart.</span></div><div className="footer-right"><MapPin size={14}/> somewhere between Seoul & an anime opening <span>♡</span></div></footer>
    </main>
  );
}
