import Reveal from "@/components/Reveal";
import Count from "@/components/Count";
import ScrollProgress from "@/components/ScrollProgress";
import { profile, experience, skills, education, stats, projects, process } from "@/data/content";

const pad = (i) => String(i + 1).padStart(2, "0");
const headline = "I make products work — from the requirement to the last bug.".split(" ");
const ticks = skills.flatMap(([, items]) => items);
const plus = "+ ".repeat(160);

function Block({ id, label, title, children, dark }) {
  return (
    <section id={id} className={dark ? "dark" : "blk"}>
      <Reveal className="wrap">
        <p className="label">{label}</p>
        <h2 className="big">{title}</h2>
        {children}
      </Reveal>
    </section>
  );
}

export default function Home() {
  return (
    <main>
      <ScrollProgress />
      <nav className="nav">
        <div className="wrap">
          <a href="#top" className="brand"><span className="logo">HZ</span>{profile.name}</a>
          <div className="links up"><a href="#work">Work</a><a href="#stack">Stack</a><a href="#experience">Experience</a><a href="#contact">Contact</a></div>
          <div className="nr up"><span className="avail">Seeking opportunities</span><a className="btn" href="#contact">Get in touch</a></div>
        </div>
      </nav>

      <header id="top" className="hero wrap">
        <h1 aria-label={headline.join(" ")}>
          {headline.map((w, i) => (
            <span key={i} className="hw" aria-hidden><span style={{ "--i": i }}>{w === "requirement" ? <em>{w}</em> : w}</span></span>
          ))}
        </h1>
        <p className="lead">{profile.positioning} Based in the UAE.</p>
        <div className="btns">
          <a className="btn acc" href="#work">See the work</a>
          <a className="btn ghost" href={`mailto:${profile.email}`}>Email me</a>
        </div>
      </header>

      <div className="tick" aria-hidden><div className="tick-in">{[...ticks, ...ticks].map((t, i) => <span key={i}>{t}</span>)}</div></div>

      <Block id="about" label="02 / About" title={profile.summary}>
        <div className="meta up"><span>{profile.location}</span><span>{profile.languages}</span><span>Seeking opportunities</span></div>
      </Block>

      <Block id="numbers" label="03 / At a glance" title="Facts from my resume">
        <div className="stats st">
          {stats.map(([n, t], i) => <div key={t} className={`stat ${i === 1 ? "hot" : ""}`}><b><Count to={Number(n)} /></b><span>{t}</span></div>)}
        </div>
      </Block>

      <Block id="work" label="04 / Selected work" title="Projects I contributed to">
        <div className="car">
          {projects.map((p, i) => (
            <article key={p.name} className="pc">
              <div className="cover"><i /></div>
              <div className="row"><span>{pad(i)}</span><span>{i === 0 ? "2026" : "WEB"}</span></div>
              <h3>{p.name}</h3>
              <p>{p.desc}</p>
              <div className="tags">{p.tags.map((t) => <span key={t}>{t}</span>)}</div>
              <p className="role">{p.role}</p>
            </article>
          ))}
        </div>
      </Block>

      <Block id="stack" label="05 / Skills by area" title="What I bring to a product team">
        <div className="cols st">
          {skills.map(([g, items], i) => <div key={g} className="sc"><h3>{g}<span>{pad(i)}</span></h3><p>{items.join(", ")}</p></div>)}
        </div>
      </Block>

      <Block id="experience" label="06 / Experience" title="Three roles, one direction">
        <div className="xp">
          {experience.map((e, i) => (
            <div key={e.role + e.dates}>
              <div className={`xr ${i === 0 ? "first" : ""}`}><b>{e.role}</b><span className="co">{e.company}</span><span className="yr">{e.dates}</span></div>
              <ul className="xd">{e.points.map((t) => <li key={t}>{t}</li>)}</ul>
            </div>
          ))}
        </div>
        <div className="edu">{education.map((e) => <p key={e.name}><b>{e.name}</b>{e.year && ` (${e.year})`} — {e.school}</p>)}</div>
      </Block>

      <Block id="how" label="07 / How I work" title="Four steps, from idea to a better product" dark>
        <div className="steps">
          {process.map(([t, d], i) => <div key={t} className="step"><span className="n">{pad(i)}</span><div><h3>{t}</h3><p>{d}</p></div></div>)}
        </div>
      </Block>

      <section id="contact" className="cta">
        <Reveal className="wrap">
          <p className="label">08 / Contact</p>
          <h2>Got a product that <b>needs testing</b> and shaping?</h2>
          <div className="row">
            <a className="btn acc" href={`mailto:${profile.email}`}>Email me</a>
            <a className="mail" href={`mailto:${profile.email}`}>{profile.email}</a>
          </div>
        </Reveal>
        <div className="plus" aria-hidden>{plus}</div>
      </section>
      <footer className="foot"><div className="wrap"><div className="l"><a href={profile.linkedin}>LinkedIn</a><span>{profile.location}</span></div><span>© {new Date().getFullYear()} {profile.name}</span></div></footer>
    </main>
  );
}
