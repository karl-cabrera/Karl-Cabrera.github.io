import { useEffect } from "react";

const email = "cabrerakarl79@gmail.com";
const nav = [["About","#about"],["Education","#education"],["Work","#work"],["Experience","#experience"],["Skills","#skills"],["Learning","#training"]] as const;
const skills = [
  ["01","Programming","Python, Java, PHP"],
  ["02","Web development","HTML, CSS, JavaScript, Laravel, Django"],
  ["03","Database and data","MySQL, data entry, data management"],
  ["04","IT fundamentals","Cisco networking, technical support, computer literacy"],
  ["05","Tools and documentation","Microsoft Office, system documentation"],
  ["06","Working with people","Teamwork, adaptability, problem solving, attention to detail"],
];
const courses = ["AWS Cloud Practitioner Essentials","AWS Technical Essentials","AWS Networking Basics","Deep Dive with Security: AWS Identity and Access Management (IAM)","Architecting Serverless Applications"];

function Aside({n,label}:{n:string;label:string}) {
  return <aside className="section-aside"><span className="section-number">{n}</span><span className="section-kicker">{label}</span></aside>;
}
function Header() {
  return <header className="site-header"><nav className="nav wrap" aria-label="Main navigation">
    <a className="brand" href="#top"><span className="brand-mark">K</span><span>Karl Cabrera</span></a>
    <div className="nav-links">{nav.map(([label,href])=><a key={href} href={href}>{label}</a>)}<a className="nav-contact" href="#contact">Contact ↗</a></div>
  </nav></header>;
}
function Hero() {
  return <>
    <div className="wrap"><section className="hero" id="top"><div className="hero-grid">
      <div className="reveal"><div className="kicker">Aviation Information Technology · Class of 2026</div>
        <h1>Curious by nature.<br/><span className="serif">Built to figure</span><br/>things out.</h1>
        <p className="hero-copy">I'm <strong>Karl Henrick Cabrera</strong> — an Aviation Information Technology graduate interested in how technology can make everyday work clearer, simpler, and more useful. I've explored that through a web-based academic project and an internship in airport administration. Now I'm ready to keep learning in an entry-level IT role.</p>
        <div className="hero-actions"><a className="button primary" href="/Karl-Cabrera-CV.pdf" download>Download my CV ↗</a><a className="button text" href="#work">See what I've worked on ↓</a></div>
        <p className="hero-note">Based in Taguig City, Philippines · Open to entry-level opportunities</p>
      </div>
      <div className="portrait-frame reveal"><img className="portrait" src="/karl-cabrera-portrait.png" alt="Portrait of Karl Henrick Cabrera" width="235" height="290"/><div className="portrait-caption"><span>Personal portfolio</span><span>01 / 01</span></div></div>
    </div></section></div>
    <div className="intro-strip"><div className="wrap strip-inner"><span className="strip-label">A few things I bring</span><div className="strip-items"><span>Web development</span><span>IT fundamentals</span><span>Documentation</span><span>Attention to detail</span></div></div></div>
  </>;
}
function About() {
  return <section id="about" className="content-section reveal"><div className="wrap"><div className="section-layout"><Aside n="01" label="A little about me"/><div className="section-main"><h2>Good work starts with <em>curiosity.</em></h2>
    <p className="section-lead">I like understanding how things work — whether that's a website, a process, or the small details that keep an office organized. My degree gave me a foundation in IT; my internship helped me see how important reliability, communication, and careful documentation are in a real workplace.</p>
    <div className="about-columns"><div><h3 className="small-heading">How I approach work</h3><p>I try to stay organized, ask questions when I need to, and learn by doing. I'm still building my experience, and I see that as a reason to stay curious, practice consistently, and take feedback seriously.</p></div>
    <div><h3 className="small-heading">What interests me</h3><div className="interest-list"><div className="interest">IT support and troubleshooting</div><div className="interest">Web and software development</div><div className="interest">Data and system documentation</div></div></div></div>
  </div></div></div></section>;
}
function Education() {
  return <section id="education" className="content-section reveal"><div className="wrap"><div className="section-layout"><Aside n="02" label="Education"/><div className="section-main"><h2>The foundation <em>behind the work.</em></h2><p className="section-lead">A degree that introduced me to programming, databases, web technologies, networking, and the role of information systems.</p>
    <div className="education-line"><div className="date">2022 — 2026</div><div><h3>Bachelor of Science in Aviation Information Technology</h3><div className="meta">National Aviation Academy of the Philippines</div></div></div>
  </div></div></div></section>;
}
function Project() {
  return <section id="work" className="content-section reveal"><div className="wrap"><div className="section-layout"><Aside n="03" label="Selected work"/><div className="section-main"><h2>One project. A lot of <em>learning.</em></h2><p className="section-lead">My capstone project brought together system planning, web technologies, and the challenge of making a multi-step process easier to manage.</p>
    <article className="project-feature"><div className="project-topline"><span>Academic team project · November 2025</span><span className="status">Completed</span></div><div className="project-body">
      <h3>Web-Based Performance Monitoring of Personnel with Data Analysis</h3><p>A web-based personnel performance monitoring system developed for the National Aviation Academy of the Philippines. It supports role-based access, evaluation workflows, progress monitoring, dashboards, and report generation.</p>
      <div className="system-map"><div className="map-step"><small>01 / ACCESS</small><strong>Admin, evaluator, and employee roles</strong></div><div className="map-step"><small>02 / PROCESS</small><strong>Evaluation forms and review workflow</strong></div><div className="map-step"><small>03 / OUTPUT</small><strong>Progress views and performance reports</strong></div></div>
      <div className="project-bottom"><div><h4 className="small-heading">Technology used</h4><div className="tags">{["Python 3.13","Django 5","MySQL 8","HTML5","CSS3","JavaScript","Bootstrap 5"].map(t=><span className="tag" key={t}>{t}</span>)}</div></div><div><h4 className="small-heading">My contribution</h4><p>Worked on interface and user experience, contributed to system documentation, and helped coordinate project documents and approval processes.</p></div></div>
      <p className="project-footnote">A collaborative academic project. This description focuses on my stated contributions rather than claiming sole ownership of the system.</p>
    </div></article>
  </div></div></div></section>;
}
function Experience() {
  return <section id="experience" className="content-section reveal"><div className="wrap"><div className="section-layout"><Aside n="04" label="Experience"/><div className="section-main"><h2>Learning how work <em>gets done.</em></h2><p className="section-lead">My on-the-job training gave me a closer look at professional office operations and the importance of keeping information moving accurately.</p>
    <div className="experience"><div className="date">January — May 2026</div><div><h3>Manila International Airport Authority (MIAA)</h3><div className="meta">BAC Intern / OJT Trainee</div><ul><li>Tracked incoming and outgoing documents and routed them between offices.</li><li>Prepared and organized procurement and committee documents.</li><li>Helped receive documents and coordinate signatures and initials.</li><li>Attended bid meetings and supported bidder-related administrative tasks.</li></ul></div></div>
  </div></div></div></section>;
}
function Skills() {
  return <section id="skills" className="content-section reveal"><div className="wrap"><div className="section-layout"><Aside n="05" label="Toolbox"/><div className="section-main"><h2>Things I've <em>worked with.</em></h2><p className="section-lead">A practical snapshot of the tools and skills I've encountered through coursework, project work, training, and internship experience.</p>
    <div className="skills-grid">{skills.map(([n,name,detail])=><article className="skill" key={n}><span className="skill-index">{n}</span><h3>{name}</h3><p>{detail}</p></article>)}</div>
  </div></div></div></section>;
}
function Training() {
  return <section id="training" className="content-section reveal"><div className="wrap"><div className="section-layout"><Aside n="06" label="Keep learning"/><div className="section-main"><h2>Learning doesn't stop <em>at graduation.</em></h2><p className="section-lead">Selected AWS course completions covering cloud concepts, technical foundations, networking, identity and access management, and serverless architecture.</p>
    <div className="training-list">{courses.map(c=><div className="training-item" key={c}><span className="training-check">✓</span><div><strong>{c}</strong><span>November 2025</span></div></div>)}</div><p className="training-note">These are course-completion certificates, not AWS professional certifications.</p>
  </div></div></div></section>;
}
function Contact() {
  return <section id="contact" className="contact-section reveal"><div className="wrap contact-grid"><div><div className="section-aside"><span className="section-number">07</span><span className="section-kicker">Get in touch</span></div><h2>Let's make something <em>useful.</em></h2><p>I'm interested in entry-level opportunities where I can contribute, learn from a team, and keep developing my skills. If my background fits what you're looking for, I'd be happy to connect.</p><div className="contact-details"><span>Taguig City, Philippines</span><a href={`mailto:${email}`}>{email}</a></div></div><a className="button" href={`mailto:${email}`}>Send me an email ↗</a></div></section>;
}
export default function App() {
  useEffect(() => {
    const items = document.querySelectorAll<HTMLElement>(".reveal");
    if (window.matchMedia("(prefers-reduced-motion: reduce)").matches || !("IntersectionObserver" in window)) { items.forEach(el=>el.classList.add("visible")); return; }
    const observer = new IntersectionObserver(entries=>entries.forEach(entry=>{if(entry.isIntersecting){entry.target.classList.add("visible");observer.unobserve(entry.target);}}),{threshold:.08,rootMargin:"0px 0px -24px 0px"});
    items.forEach(el=>observer.observe(el));
    return ()=>observer.disconnect();
  },[]);
  return <><Header/><main><Hero/><About/><Education/><Project/><Experience/><Skills/><Training/><Contact/></main><footer><div className="wrap footer-inner"><span>© {new Date().getFullYear()} Karl Henrick Cabrera</span><span>Made with care, curiosity, and a little trial and error.</span></div></footer></>;
}