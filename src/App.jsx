import { useState } from 'react'
import { motion } from 'framer-motion'
import { ArrowDown, ArrowDownRight, ArrowRight, ArrowUpRight, Asterisk, Github, Instagram, Linkedin, Menu, X } from 'lucide-react'
import { profile, projects, skills, experience, education } from './data/portfolio'
import { Link, Routes, Route } from "react-router-dom";
import ProjectDetail from "./ProjectDetail";

const fadeUp = { hidden: { opacity: 0, y: 24 }, visible: { opacity: 1, y: 0 } }

function Header() {
  const [open, setOpen] = useState(false)
  const links = [['Work', '#work'], ['About', '#about'], ['Experience', '#experience'], ['Contact', '#contact']]
  return <header className="header wrap">
    <a className="brand" href="#top" aria-label="Go to top">MD<span>.</span></a>
    <nav id="primary-navigation" className={open ? 'nav nav-open' : 'nav'}>
      {links.map(([label, href]) => <a key={label} href={href} onClick={() => setOpen(false)}>{label}</a>)}
    </nav>
    <a className="header-cta" href={`mailto:${profile.email}`}>LET'S TALK <ArrowUpRight size={14} /></a>
    <button className="menu-toggle" onClick={() => setOpen(!open)} aria-label={open ? 'Close menu' : 'Open menu'} aria-expanded={open} aria-controls="primary-navigation">{open ? <X /> : <Menu />}</button>
  </header>
}

function ProjectCard({ project, index }) {
  return <motion.article className={`project-card ${index % 2 ? 'project-offset' : ''}`} variants={fadeUp}>
    <Link to={`/projects/${project.slug}`} className="project-image-link" aria-label={`View ${project.title}`}>
      <div className={`project-image ${project.className}`} style={{ backgroundImage: `url(${project.image})` }}>
        <span className="image-index">{project.number} / 04</span>
        <span className="image-arrow"><ArrowUpRight size={22} /></span>
        <span className="image-caption">SELECTED WORK</span>
      </div>
    </Link>
    <div className="project-meta"><span>{project.category}</span><span>{project.year}</span></div>
    <div className="project-title-row"><h3>{project.title}</h3><ArrowUpRight size={19} /></div>
    <p className="project-description">{project.description}</p>
    <div className="tags">{project.tags.map(tag => <span key={tag}>{tag}</span>)}</div>
  </motion.article>
}

function App() {
  return <>
    <Routes>
      <Route path="/about" element={<AboutPage />} />
      <Route path="/projects/:slug" element={<ProjectDetail />} />
      <Route path="*" element={<Home />} />
    </Routes>
  </>
}

function Home() {
  return <>
    <div className="topline"><span>INDEPENDENT CREATIVE / DEVELOPER</span><span>PORTFOLIO — 2026</span></div>
    <Header />
    <main id="top">
      <section className="hero wrap">
        <div className="hero-kicker"><span className="status-dot" /> AVAILABLE FOR OPPORTUNITIES <span className="kicker-line" /> BASED IN CAMBODIA</div>
        <motion.div className="hero-heading" initial="hidden" animate="visible" variants={{ visible: { transition: { staggerChildren: .12 } } }}>
          <motion.h1 variants={fadeUp}>Making digital<br /><span className="serif-word">feel</span> <span className="outlined-word">considered.</span></motion.h1>
        </motion.div>
        <div className="hero-bottom">
          <p className="hero-intro">I'm <strong>Meas Diyamong</strong> — a designer-minded developer building thoughtful digital experiences through code, clarity and curiosity.</p>
          <a className="round-link" href="#work" aria-label="Scroll to selected work"><ArrowDown size={21} /></a>
          <div className="hero-side-note">DESIGN THINKING<br />MEETS DEVELOPMENT <Asterisk size={17} /></div>
        </div>
        <div className="hero-visual">
          <div className="hero-visual-image"><img src="/images/profile1.png" alt="Profile portrait" /></div>
        </div>
      </section>

      <section className="intro-strip wrap" id="about">
        <div className="section-label"><span>01 / A LITTLE INTRO</span><span>THE PERSON BEHIND THE PIXELS</span></div>
        <div className="intro-content">
          <h2>Curious by nature.<br /><span>Intentional by design.</span></h2>
          <div className="intro-copy"><p>I enjoy the space where technology and visual expression meet. My foundation is in backend development, while my interest in design helps me think beyond whether something works — toward how it feels to use.</p><p>I'm currently studying Management Information Systems and building real-world projects as I grow into a thoughtful software developer.</p><Link className="text-link" to="/about">A LITTLE MORE ABOUT ME <ArrowUpRight size={15} /></Link></div>
        </div>
      </section>

      <section className="work-section wrap" id="work">
        <div className="section-label"><span>02 / SELECTED WORK</span><span>A FEW THINGS I'VE MADE</span></div>
        <div className="work-heading"><h2>Selected<br /><span>works.</span></h2><p>A mix of backend systems, full-stack experiments and creative work. More detailed case studies are on the way.</p></div>
        <motion.div className="project-grid" initial="hidden" whileInView="visible" viewport={{ once: true, amount: .12 }} variants={{ visible: { transition: { staggerChildren: .12 } } }}>
          {projects.filter((project) => project.number).map((project, index) => <ProjectCard key={project.number} project={project} index={index} />)}
        </motion.div>
        <div className="work-footnote"><a href={profile.github} target="_blank" rel="noreferrer">MORE PROJECTS ON GITHUB <ArrowUpRight size={13} /></a><span>OPEN TO COLLABORATION <ArrowUpRight size={13} /></span></div>
      </section>

      <section className="manifesto">
        <div className="wrap manifesto-inner"><span className="manifesto-index">A NOTE TO SELF — 001</span><p>Good work isn't just what you build.<br /><em>It's how thoughtfully you build it.</em></p><Asterisk className="manifesto-star" size={34} /></div>
      </section>

      <section className="skills-section wrap" id="skills">
        <div className="section-label"><span>03 / WHAT I BRING</span><span>TOOLS, CRAFT & CURIOSITY</span></div>
        <div className="skills-layout"><h2>A growing<br /><span>toolkit.</span></h2><div className="skills-columns">{skills.map((group, i) => <div className="skill-group" key={group.title}><span className="skill-number">0{i + 1}</span><h3>{group.title}</h3><ul>{group.items.map(item => <li key={item}>{item}</li>)}</ul></div>)}</div></div>
      </section>

      <section className="experience-section wrap" id="experience">
        <div className="section-label"><span>04 / THE JOURNEY</span><span>EXPERIENCE & EDUCATION</span></div>
        <div className="experience-layout"><h2>Still<br /><span>becoming.</span></h2><div className="timeline-wrap"><h3 className="timeline-heading">EXPERIENCE</h3>{experience.map(item => <div className="timeline-item" key={item.company}><span className="timeline-date">{item.date}</span><div><h4>{item.title}</h4><span className="timeline-company">{item.company}</span><p>{item.detail}</p></div></div>)}<h3 className="timeline-heading education-heading">EDUCATION</h3>{education.map(item => <div className="timeline-item education-item" key={item.place}><span className="timeline-date">{item.date}</span><div><h4>{item.title}</h4><span className="timeline-company">{item.place}</span></div></div>)}</div></div>
      </section>

      <section className="contact-section" id="contact"><div className="wrap contact-inner"><div className="section-label"><span>05 / GET IN TOUCH</span><span>OPEN TO OPPORTUNITIES</span></div><p className="contact-overline">JUNIOR BACKEND DEVELOPER · ASP.NET CORE DEVELOPER</p><h2>Let's work<br /><span>together.</span></h2><p className="contact-intro">I'm currently open to opportunities as a Junior Backend Developer or ASP.NET Core Developer. If you're looking for someone passionate about building reliable backend systems and learning new technologies, let's connect.</p><a className="contact-button" href={`mailto:${profile.email}`}>SEND ME AN EMAIL <ArrowUpRight size={19} /></a><div className="contact-bottom"><a href={`mailto:${profile.email}`}>{profile.email}</a><a href={profile.telegram} target="_blank" rel="noreferrer">Telegram · @MeasDiyamong</a><span>{profile.location.toUpperCase()}</span></div></div></section>
    </main>
    <footer className="footer wrap"><a className="brand" href="#top">MD<span>.</span></a><span>DESIGNED WITH INTENTION. BUILT WITH CURIOSITY.</span><div className="socials"><a href={profile.instagram} target="_blank" rel="noreferrer" aria-label="Instagram"><Instagram size={17} /></a><a href={profile.tiktok} target="_blank" rel="noreferrer" aria-label="TikTok">TT</a><a href={profile.github} aria-label="GitHub"><Github size={17} /></a></div><span>© 2026 MEAS DIYAMONG</span></footer>
  </>
}

function AboutPage() {
  return <main className="about-page">
    <div className="about-topline"><Link to="/" className="brand">MD<span>.</span></Link><Link to="/" className="about-back">← BACK TO PORTFOLIO</Link></div>
    <section className="about-page-hero">
      <div className="about-copy">
        <p className="eyebrow">A LITTLE MORE ABOUT ME</p>
        <h1>Curious by nature.<br /><span>Building with intention.</span></h1>
        <p>I'm Meas Diyamong, a developer with an interest in building practical digital experiences and solving problems through technology.</p>
        <p>My journey started with studying Management Information Systems at SETEC Institute, where I explored programming, databases, and software development. Since then, I've been focusing on backend development, particularly with C#, ASP.NET Core, REST APIs, and database technologies.</p>
        <p>Beyond coding, I have an interest in fashion, visual design, and creative storytelling. My experience as a Content Creator at ZANDO helped me develop a stronger eye for visual presentation, creativity, and understanding audiences.</p>
        <p>I enjoy learning, experimenting with new technologies, and turning ideas into real projects. I'm always looking for opportunities to grow as a developer and create something meaningful.</p>
        <a className="text-link" href={`mailto:${profile.email}`}>LET'S TALK <ArrowUpRight size={15} /></a>
      </div>
      <figure className="about-portrait"><img src="/images/MeasDiyamong.JPG" alt="Meas Diyamong" /><figcaption><span>FIG. 02</span><span>MEAS DIYAMONG · CAMBODIA</span></figcaption></figure>
    </section>
    <section className="about-details">
      <div><span className="about-detail-label">BASED IN</span><p>Cambodia</p></div>
      <div><span className="about-detail-label">INTERESTS</span><p>Backend development · Fashion · Visual storytelling</p></div>
      <div><span className="about-detail-label">CURRENTLY LEARNING</span><p>Building useful applications with APIs, databases, and thoughtful interfaces.</p></div>
    </section>
    <footer className="about-footer"><span>DESIGNED WITH INTENTION. BUILT WITH CURIOSITY.</span><Link to="/">BACK TO SELECTED WORK ↗</Link></footer>
  </main>
}

export default App
