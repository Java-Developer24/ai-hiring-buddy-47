import { Link } from "react-router-dom";
import { HireIqLogo } from "@/components/HireIqLogo";
import {
  ArrowRight,
  Award,
  BadgeCheck,
  Briefcase,
  Building2,
  Globe,
  HeartHandshake,
  Sparkles,
  Users,
} from "lucide-react";

const peopleImage =
  "https://images.unsplash.com/photo-1522202176988-66273c2fd55f?auto=format&fit=crop&w=1400&q=80";
const portraitImage =
  "https://images.unsplash.com/photo-1500648767791-00dcc994a43e?auto=format&fit=crop&w=900&q=80";

export default function CandidateLanding() {
  return (
    <div className="min-h-screen bg-cream text-charcoal">
      <header className="sticky top-0 z-50 border-b border-charcoal/10 bg-white/90 backdrop-blur">
        <div className="mx-auto flex h-16 max-w-6xl items-center justify-between px-6">
          <div className="flex items-center gap-8">
            <HireIqLogo />
            <nav className="hidden items-center gap-6 text-xs font-bold uppercase tracking-widest text-charcoal-muted md:flex">
              <a href="#culture" className="transition hover:text-charcoal">Culture</a>
              <a href="#recognition" className="transition hover:text-charcoal">Recognition</a>
              <a href="#people" className="transition hover:text-charcoal">People</a>
              <a href="#roles" className="transition hover:text-charcoal">Roles</a>
            </nav>
          </div>

          <Link
            to="/candidate/login"
            className="h-10 px-5 rounded-full bg-coral text-white text-xs font-bold uppercase tracking-widest flex items-center justify-center hover:bg-coral-dark transition"
          >
            Candidate Login
          </Link>
        </div>
      </header>

      <main>
        <section className="mx-auto max-w-6xl px-6 pt-8 pb-16">
          <div className="text-[11px] font-bold uppercase tracking-widest text-coral/80">Home / Careers</div>

          <div className="mt-8 grid gap-8 lg:grid-cols-[1.1fr_0.9fr] items-start">
            <div className="space-y-8">
              <div className="inline-flex items-center gap-2 rounded-full border border-charcoal/10 bg-white px-3 py-1 text-[11px] font-bold uppercase tracking-widest text-amber shadow-sm">
                <Sparkles className="h-3.5 w-3.5" />
                Careers at HireIQ
              </div>

              <div className="space-y-5">
                <h1 className="max-w-4xl text-5xl font-display font-bold leading-[1.02] md:text-7xl">
                  Hello change-makers, we&apos;ve been expecting you.
                </h1>
                <p className="max-w-2xl text-base leading-8 text-charcoal-muted md:text-lg">
                  Build products that make hiring clearer, faster, and more human. At HireIQ, we bring together structured assessments, AI-assisted interviews, and candidate-first workflows so ambitious teams can hire with confidence.
                </p>
              </div>

              <div className="flex flex-wrap gap-3">
                <Link
                  to="/candidate/login"
                  className="h-12 px-7 rounded-full bg-coral text-white text-sm font-bold uppercase tracking-widest flex items-center justify-center gap-2 hover:bg-coral-dark transition"
                >
                  Explore opportunities <ArrowRight className="h-4 w-4" />
                </Link>
                <a
                  href="#roles"
                  className="flex h-12 items-center justify-center rounded-full border border-charcoal/10 bg-white px-7 text-sm font-bold uppercase tracking-widest text-charcoal transition hover:bg-[#FBF7F2]"
                >
                  View open roles
                </a>
              </div>

              <div className="grid gap-4 sm:grid-cols-3">
                {[
                  ["Candidate journey", "Application, assessment, interview, and tracking in one flow"],
                  ["Team style", "Small high-ownership teams with strong product craft"],
                  ["How we work", "Structured hiring, thoughtful feedback, global candidate reach"],
                ].map(([title, body]) => (
                  <div key={title} className="rounded-[24px] border border-charcoal/10 bg-white p-5 shadow-sm">
                    <p className="text-[10px] font-bold uppercase tracking-widest text-charcoal/40">{title}</p>
                    <p className="mt-3 text-sm leading-6 text-charcoal/85">{body}</p>
                  </div>
                ))}
              </div>
            </div>

            <div className="space-y-4">
              <div className="grid grid-cols-3 gap-3">
                {[
                  ["Job Search", "Find roles that match your craft"],
                  ["Campus", "Early career pathways and growth"],
                  ["Who We Are", "Meet the teams behind the platform"],
                ].map(([title, text]) => (
                  <div key={title} className="rounded-[22px] border border-charcoal/10 bg-white p-4 shadow-sm">
                    <p className="text-xs font-bold text-charcoal">{title}</p>
                    <p className="mt-2 text-[11px] leading-5 text-charcoal-muted">{text}</p>
                  </div>
                ))}
              </div>

              <div className="rounded-[30px] border border-charcoal/10 bg-white p-6 shadow-sm">
                <p className="text-[11px] font-bold uppercase tracking-widest text-coral">Featured role</p>
                <h2 className="mt-3 text-3xl font-display font-bold text-charcoal">Senior Backend Engineer</h2>
                <div className="mt-5 space-y-3 text-sm text-charcoal-muted">
                  <div className="flex items-center gap-2"><Briefcase className="h-4 w-4 text-amber" /> Engineering · Full-time · Remote</div>
                  <div className="flex items-center gap-2"><Globe className="h-4 w-4 text-amber" /> Hyderabad, India</div>
                  <div className="flex items-center gap-2"><BadgeCheck className="h-4 w-4 text-amber" /> Includes skills assessment, video interview, and coding round</div>
                </div>
              </div>
            </div>
          </div>
        </section>

        <section id="culture" className="mx-auto max-w-6xl px-6 pb-16">
          <div className="overflow-hidden rounded-[34px] border border-charcoal/10 bg-white shadow-sm">
            <img src={peopleImage} alt="Team members collaborating" className="h-[360px] w-full object-cover" />
            <div className="grid gap-6 px-8 py-8 md:grid-cols-3">
              {[
                {
                  title: "Forward thinkers wanted",
                  text: "It is our people who make progress happen here. We hire for curiosity, ownership, and the ability to build systems that stand up to real use.",
                  icon: Users,
                },
                {
                  title: "Everything about you is welcome",
                  text: "We want people to bring their full perspective to work. The best teams are built from varied experiences, backgrounds, and ways of thinking.",
                  icon: HeartHandshake,
                },
                {
                  title: "We invest in your career",
                  text: "The goal is not just a job offer. It is a place where strong operators, builders, and thinkers can do the best work of their careers.",
                  icon: Building2,
                },
              ].map(({ title, text, icon: Icon }) => (
                <div key={title} className="space-y-4">
                  <div className="flex h-11 w-11 items-center justify-center rounded-2xl bg-coral/10 text-coral">
                    <Icon className="h-5 w-5" />
                  </div>
                  <h3 className="text-3xl font-display font-bold leading-tight text-charcoal">{title}</h3>
                  <p className="text-sm leading-7 text-charcoal-muted">{text}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        <section id="recognition" className="mx-auto max-w-6xl px-6 pb-16">
          <h2 className="text-center text-4xl font-display font-bold text-charcoal">Featured recognition</h2>
          <div className="mt-8 grid gap-4 md:grid-cols-3">
            {[
              ["Forbes", "One of the World&apos;s Best Employers", "2025"],
              ["Forbes", "Best Employers for Women", "2025"],
              ["Ethisphere", "World&apos;s Most Ethical Companies", "2025"],
            ].map(([brand, title, year]) => (
              <div key={title} className="rounded-[28px] border border-white/10 bg-white p-6 text-charcoal shadow-sm">
                <div className="aspect-[4/3] rounded-[22px] border border-charcoal/10 bg-[#f8f6f3] flex flex-col items-center justify-center text-center p-6">
                  <Award className="h-10 w-10 text-coral mb-4" />
                  <p className="text-sm font-bold uppercase tracking-widest text-charcoal-muted">{brand}</p>
                  <p className="mt-3 text-2xl font-display font-bold leading-tight">{title}</p>
                  <p className="mt-4 text-sm font-bold text-coral">{year}</p>
                </div>
              </div>
            ))}
          </div>
        </section>

        <section id="people" className="mx-auto max-w-6xl px-6 pb-16">
          <div className="grid gap-8 lg:grid-cols-[0.85fr_1.15fr] items-start">
            <div className="space-y-4">
              <h2 className="text-4xl font-display font-bold text-charcoal">Meet our people</h2>
              <p className="max-w-md text-base leading-8 text-charcoal-muted">
                Hear from builders and operators who care deeply about product quality, candidate experience, and the long game of doing meaningful work well.
              </p>
            </div>

            <div className="rounded-[32px] border border-charcoal/10 bg-white p-6 shadow-sm md:p-8">
              <div className="grid gap-6 md:grid-cols-[280px_1fr] items-center">
                <img src={portraitImage} alt="Team member portrait" className="h-[320px] w-full rounded-[24px] object-cover" />
                <div>
                  <p className="text-2xl leading-10 text-charcoal">
                    &quot;The best part of working here is the combination of sharp thinking, real ownership, and a product surface that genuinely affects how people experience hiring.&quot;
                  </p>
                  <p className="mt-6 text-sm font-bold uppercase tracking-widest text-coral">Jordan S., Platform Engineering</p>
                  <p className="mt-2 text-sm leading-7 text-charcoal-muted">
                    From application workflows to AI interview tooling, the team is trusted to improve systems that candidates and recruiters feel immediately.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </section>

        <section id="roles" className="mx-auto max-w-6xl px-6 pb-16">
          <div className="rounded-[32px] border border-charcoal/10 bg-white p-8 shadow-sm md:p-10">
            <div className="grid gap-8 lg:grid-cols-[1fr_1fr]">
              <div>
                <p className="text-[11px] font-bold uppercase tracking-widest text-coral">Job hub</p>
                <h2 className="mt-4 text-5xl font-display font-bold leading-[1.02] text-charcoal">Find the path that fits how you want to build.</h2>
                <p className="mt-5 max-w-md text-base leading-8 text-charcoal-muted">
                  From backend engineering to product and data, explore the areas where you can create impact, move through structured interviews, and track every stage from one candidate portal.
                </p>
              </div>

              <div className="space-y-3">
                {[
                  "Engineering roles",
                  "Product and design roles",
                  "Data and operations roles",
                  "Candidate portal and application tracking",
                ].map((item) => (
                  <div key={item} className="flex items-center justify-between rounded-[22px] border border-charcoal/10 bg-[#FBF7F2] px-5 py-4 text-lg font-display font-bold text-charcoal">
                    <span>{item}</span>
                    <ArrowRight className="h-5 w-5 text-coral" />
                  </div>
                ))}
              </div>
            </div>
          </div>
        </section>

        <section className="border-t border-charcoal/10 bg-white">
          <div className="mx-auto max-w-6xl px-6 py-16">
            <h2 className="text-5xl font-display font-bold text-charcoal">Ready to make an impact?</h2>
            <div className="mt-8">
              <Link
                to="/candidate/login"
                className="inline-flex h-12 px-7 rounded-full bg-coral text-white text-sm font-bold uppercase tracking-widest items-center justify-center gap-2 hover:bg-coral-dark transition"
              >
                Express your interest <ArrowRight className="h-4 w-4" />
              </Link>
            </div>
          </div>
        </section>
      </main>
    </div>
  );
}
