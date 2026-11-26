
import { Link, useParams } from "react-router-dom";
import { projects } from "./data/portfolio";

export default function ProjectDetail() {
  const { slug } = useParams();

  // The homepage cards are listed first; detailed case study entries follow.
  const project = [...projects].reverse().find((item) => item.slug === slug);

  if (!project) {
    return (
      <main className="project-detail">
        <h1>Project not found.</h1>
        <Link to="/">Back to homepage</Link>
      </main>
    );
  }

  return (
    <main className="project-detail">
      <div className="project-detail-nav">
        <Link to="/" className="back-link">
          ← BACK TO PROJECTS
        </Link>

        <span>{project.id} / 04</span>
      </div>

      <header className="project-detail-header">
        <p className="eyebrow">
          {project.category} — {project.year}
        </p>

        <h1>{project.title}</h1>

        <p className="project-summary">
          {project.summary}
        </p>
      </header>

      <section className="project-detail-section">
        <p className="eyebrow">01 — OVERVIEW</p>
        <h2>About the project</h2>
        <p>{project.overview || project.description}</p>
      </section>

      {project.features && (
        <section className="project-detail-section">
          <p className="eyebrow">02 — FEATURES</p>
          <h2>What it does</h2>

          <ul className="feature-list">
            {project.features.map((feature) => (
              <li key={feature}>{feature}</li>
            ))}
          </ul>
        </section>
      )}

      {project.experience && (
        <section className="project-detail-section creative-experience">
          <p className="eyebrow">SELECTED EXPERIENCE</p>
          <h2>{project.experience.company} — {project.experience.position}</h2>
          <p>{project.experience.duration} · Fashion and lifestyle content creation</p>
        </section>
      )}

      {project.videoReferences && (
        <section className="project-detail-section">
          <p className="eyebrow">03 — SELECTED WORK</p>
          <h2>Content in motion.</h2>
          <p>A selection of published video references from my creative work at ZANDO Cambodia.</p>
          <div className="video-grid">
            {project.videoReferences.map((video) => (
              <article className="video-card" key={video.id}>
                <div className="video-frame">
                  <iframe src={`https://www.tiktok.com/embed/v2/${video.id}`} title={video.title} loading="lazy" allow="encrypted-media; fullscreen" />
                </div>
                <div className="video-card-info">
                  <span>{video.title}</span>
                  <a href={video.url} target="_blank" rel="noreferrer">WATCH ON TIKTOK ↗</a>
                </div>
              </article>
            ))}
          </div>
          {project.personalTikTok && (
            <a className="personal-tiktok-link" href={project.personalTikTok} target="_blank" rel="noreferrer">EXPLORE MY TIKTOK ↗</a>
          )}
        </section>
      )}

      {project.skills && (
        <section className="project-detail-section">
          <p className="eyebrow">CREATIVE SKILLS</p>
          <h2>Tools for telling stories.</h2>
          <div className="tech-list">{project.skills.map((skill) => <span key={skill}>{skill}</span>)}</div>
        </section>
      )}

      {project.architecture && (
        <section className="project-detail-section">
          <p className="eyebrow">03 — ARCHITECTURE</p>
          <h2>How it works</h2>

          <div className="architecture-flow">
            {project.architecture.map((step, index) => (
              <div className="architecture-step" key={step}>
                <span>0{index + 1}</span>
                <p>{step}</p>
              </div>
            ))}
          </div>
        </section>
      )}

      {(project.frontend || project.backend || project.tools) && (
        <section className="project-detail-section">
          <p className="eyebrow">04 — TECHNOLOGY</p>
          <h2>Tech stack</h2>

          {project.frontend && (
            <div className="tech-group">
              <h3>Frontend</h3>
              <div className="tech-list">
                {project.frontend.map((tech) => (
                  <span key={tech}>{tech}</span>
                ))}
              </div>
            </div>
          )}

          {project.backend && (
            <div className="tech-group">
              <h3>Backend & Database</h3>
              <div className="tech-list">
                {project.backend.map((tech) => (
                  <span key={tech}>{tech}</span>
                ))}
              </div>
            </div>
          )}

          {project.tools && (
            <div className="tech-group">
              <h3>Tools</h3>
              <div className="tech-list">
                {project.tools.map((tech) => (
                  <span key={tech}>{tech}</span>
                ))}
              </div>
            </div>
          )}
        </section>
      )}

      {project.learning && (
        <section className="project-detail-section">
          <p className="eyebrow">05 — REFLECTION</p>
          <h2>What I learned</h2>
          <p>{project.learning}</p>
        </section>
      )}

      {(project.repoUrl || project.frontendRepo || project.backendRepo) && (
      <section className="project-detail-section project-links">
        <p className="eyebrow">06 — SOURCE CODE</p>
        <h2>Explore the project</h2>

        {project.repoUrl && (
          <a href={project.repoUrl} target="_blank" rel="noreferrer">
            GitHub Repository ↗
          </a>
        )}

        {project.frontendRepo && (
          <a href={project.frontendRepo} target="_blank" rel="noreferrer">
            Frontend Repository ↗
          </a>
        )}

        {project.backendRepo && (
          <a href={project.backendRepo} target="_blank" rel="noreferrer">
            Backend Repository ↗
          </a>
        )}
      </section>
      )}

      <footer className="project-detail-footer">
        <Link to="/">← Back to all projects</Link>
      </footer>
    </main>
  );
}
