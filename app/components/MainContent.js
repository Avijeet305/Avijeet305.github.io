import { footerTags, repos } from "@/lib/data";
import ContributionGraph from "./ContributionGraph";

export default function MainContent() {
  return (
    <main className="bg-white p-8">
      <div className="mb-8 reveal">
        <h1 className="greeting-title">Portfolio & Repositories</h1>
        <p className="mt-2 text-muted">
          Full-stack developer passionate about modern interfaces and creative solutions. Check out
          my featured projects.
        </p>
      </div>

      <div className="my-8">
        <h3 className="section-title reveal delay-1">
          <i className="fab fa-github-alt" /> Popular repositories
        </h3>
        <div className="mt-4 grid grid-cols-[repeat(auto-fill,minmax(260px,1fr))] gap-[1.2rem]">
          {repos.map((repo, index) => (
            <div
              key={repo.title}
              className={`repo-card repo-card--${repo.accent} reveal delay-${index + 2}`}
            >
              <div>
                <i className={`${repo.icon} mr-2`} />
                <span className="text-[1.1rem] font-bold text-ink"> {repo.title}</span>
              </div>
              <div className="my-2 text-[0.75rem] text-muted">{repo.description}</div>
              <span className="mt-2 inline-block rounded-full bg-[#eef2ff] px-2.5 py-0.5 text-[0.7rem] text-[#3730a3]">
                {repo.stack}
              </span>
            </div>
          ))}
        </div>
      </div>

      <div className="my-8 rounded-[1.2rem] border border-line bg-gradient-to-b from-[#f8fafc] to-white p-4 reveal delay-4">
        <div className="flex flex-wrap items-center justify-between text-ink">
          <span>
            <i className="fas fa-chart-line" /> <strong>18 contributions in the last year</strong>
          </span>
          <span className="rounded-[30px] bg-gradient-to-br from-[#fff1eb] to-[#eef2ff] px-2.5 py-1 text-xs font-semibold text-[#3730a3]">
            2026
          </span>
        </div>
        <div className="my-4 flex flex-wrap items-center justify-between gap-1.5 text-[0.7rem] text-muted">
          <div className="flex items-center gap-1">
            <span className="inline-block h-3 w-3 rounded-sm bg-[#eef2f7]" />
            <span className="inline-block h-3 w-3 rounded-sm bg-[#ffd8c8]" />
            <span className="inline-block h-3 w-3 rounded-sm bg-[#ff9d7a]" />
            <span className="inline-block h-3 w-3 rounded-sm bg-[#ff6b4a]" />
            <span className="inline-block h-3 w-3 rounded-sm bg-[#14b8a6]" />
            <span className="ml-1.5">Less → More</span>
          </div>
          <div>Jun 2025 - May 2026</div>
        </div>
        <div className="mt-1.5 rounded-xl border border-line bg-white p-3">
          <ContributionGraph />
          <div className="mt-3 border-0 text-left text-[0.65rem] text-muted">
            <i className="fas fa-info-circle" /> Activity includes pushes, pull requests, and issue
            comments.
          </div>
        </div>
        <div className="mt-3 flex flex-wrap gap-4 text-[0.75rem] text-muted">
          <span>
            <i className="fab fa-github" /> 0 followers · 1 following
          </span>
          <span>
            <i className="fas fa-code-branch" /> Customize your pins
          </span>
        </div>
      </div>

      <div className="mt-5 flex flex-wrap items-center justify-between reveal delay-5">
        <div>
          {footerTags.map((tag) => (
            <span key={tag.label} className="skill-tag">
              <i className={tag.icon} /> {tag.label}
            </span>
          ))}
        </div>
        <div className="text-[0.75rem] text-coral">
          <i className="fas fa-code" /> @avijeet · Envato Template
        </div>
      </div>
      <div className="mt-8 border-t border-line pt-6 text-center text-[0.7rem] text-muted">
        Interactive portfolio with CV upload, animated view CV and functional download.
        <br />
        Source code on GitHub — <i className="fab fa-github" /> avijeetshah/portfolio
      </div>
    </main>
  );
}
