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
  Quote,
} from "lucide-react";

const peopleImage =
  "https://images.unsplash.com/photo-1522202176988-66273c2fd55f?auto=format&fit=crop&w=1400&q=80";
const portraitImage =
  "https://images.unsplash.com/photo-1500648767791-00dcc994a43e?auto=format&fit=crop&w=900&q=80";

export default function CandidateLanding() {
  return (
    <div className="min-h-screen bg-cream text-charcoal">
      {/* HEADER */}
      <header className="sticky top-0 z-50 border-b border-charcoal/10 bg-white/90 backdrop-blur">
        <div className="mx-auto flex h-16 max-w-6xl items-center justify-between px-6">
          <div className="flex items-center gap-8">
            <HireIqLogo />
            <nav className="hidden items-center gap-6 text-[11px] font-bold uppercase tracking-widest text-charcoal-muted md:flex">
              <a href="#culture" className="transition hover:text-charcoal">Culture</a>
              <a href="#recognition" className="transition hover:text-charcoal">Recognition</a>
              <a href="#people" className="transition hover:text-charcoal">People</a>
              <a href="#roles" className="transition hover:text-charcoal">Roles</a>
            </nav>
          </div>
          <Link
            to="/candidate/login"
            className="h-10 px-5 rounded-full bg-coral text-white text-[11px] font-bold uppercase tracking-widest flex items-center justify-center hover:bg-coral-dark transition"
          >
            Candidate Login
          </Link>
        </div>
      </header>

      <main>
        {/* HERO */}
        <section className="relative overflow-hidden">
          <div className="absolute -top-40 -right-40 h-[500px] w-[500px] coral-glow opacity-25 pointer-events-none" />
          <div className="absolute -bottom-20 -left-40 h-[400px] w-[400px] amber-glow opacity-20 pointer-events-none" />

          <div className="relative mx-auto max-w-6xl px-6 pt-12 pb-20">
            <div className="text-[10px] font-bold uppercase tracking-widest text-coral/80">Home / Careers</div>

            <div className="mt-10 grid gap-10 lg:grid-cols-[1.15fr_0.85fr] items-start">
              {/* Left */}
              <div className="space-y-7">
                <div className="inline-flex items-center gap-2 rounded-full border border-charcoal/10 bg-white px-3 py-1.5 text-[10px] font-bold uppercase tracking-widest text-charcoal shadow-sm">
                  <Sparkles className="h-3.5 w-3.5 text-coral" />
                  Careers at HireIQ
                </div>

                <h1 className="max-w-3xl text-5xl font-display font-bold leading-[1.02] text-charcoal md:text-[5rem]">
                  Hello change-makers, we&rsquo;ve been expecting you.
                </h1>

                <p className="max-w-xl text-base leading-7 text-charcoal-muted">
                  Build products that make hiring clearer, faster, and more human. At HireIQ, we bring together structured assessments, AI-assisted interviews, and candidate-first workflows so ambitious teams can hire with confidence.
                </p>

                <div className="flex flex-wrap gap-3">
                  <Link
                    to="/candidate/login"
                    className="h-12 px-6 rounded-full bg-coral text-white text-xs font-bold uppercase tracking-widest flex items-center justify-center gap-2 hover:bg-coral-dark transition shadow-lg shadow-coral/20"
                  >
                    Explore opportunities <ArrowRight className="h-4 w-4" />
                  </Link>
                  <a
                    href="#roles"
                    className="flex h-12 items-center justify-center rounded-full border border-charcoal/15 bg-white px-6 text-xs font-bold uppercase tracking-widest text-charcoal transition hover:bg-cream"
                  >
                    View open roles
                  </a>
                </div>

                <div className="grid gap-3 sm:grid-cols-3 pt-4">
                  {[
                    ["Candidate journey", "Application, assessment, interview, and tracking in one flow"],
                    ["Team style", "Small high-ownership teams with strong product craft"],
                    ["How we work", "Structured hiring, thoughtful feedback, global candidate reach"],
                  ].map(([title, body]) => (
                    <div key={title} className="rounded-2xl border border-charcoal/10 bg-white p-4 shadow-sm">
                      <p className="text-[9px] font-bold uppercase tracking-widest text-coral">{title}</p>
                      <p className="mt-2 text-xs leading-5 text-charcoal/80">{body}</p>
                    </div>
                  ))}
                </div>
              </div>

              {/* Right */}
              <div className="space-y-3 lg:pt-12">
                <div className="grid grid-cols-3 gap-3">
                  {[
                    ["Job Search", "Find roles that match your craft"],
                    ["Campus", "Early career pathways and growth"],
                    ["Who We Are", "Meet the teams behind the platform"],
                  ].map(([title, text]) => (
                    <div key={title} className="rounded-2xl border border-charcoal/10 bg-white p-3.5 shadow-sm hover:border-coral/40 transition cursor-pointer">
                      <p className="text-[11px] font-bold text-charcoal">{title}</p>
                      <p className="mt-1.5 text-[10px] leading-4 text-charcoal-muted">{text}</p>
                    </div>
                  ))}
                </div>

                <div className="rounded-3xl border border-charcoal/10 bg-white p-6 shadow-sm">
                  <p className="text-[10px] font-bold uppercase tracking-widest text-coral">Featured role</p>
                  <h2 className="mt-3 text-2xl font-display font-bold text-charcoal leading-tight">Senior Backend Engineer</h2>
                  <div className="mt-5 space-y-2.5 text-xs text-charcoal-muted">
                    <div className="flex items-center gap-2"><Briefcase className="h-3.5 w-3.5 text-coral shrink-0" /> Engineering · Full-time · Remote</div>
                    <div className="flex items-center gap-2"><Globe className="h-3.5 w-3.5 text-coral shrink-0" /> Hyderabad, India</div>
                    <div className="flex items-center gap-2"><BadgeCheck className="h-3.5 w-3.5 text-coral shrink-0" /> Skills assessment, video interview, coding round</div>
                  </div>
                  <Link to="/candidate/login" className="mt-5 inline-flex items-center gap-1.5 text-[11px] font-bold text-coral hover:underline">
                    View role <ArrowRight className="h-3.5 w-3.5" />
                  </Link>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* CULTURE */}
        <section id="culture" className="py-20 bg-white border-y border-charcoal/10">
          <div className="mx-auto max-w-6xl px-6">
            <div className="overflow-hidden rounded-[32px] border border-charcoal/10 bg-cream shadow-sm">
              <img src={peopleImage} alt="Team members collaborating" className="h-[320px] w-full object-cover" />
              <div className="grid gap-6 px-8 py-10 md:grid-cols-3">
                {[
                  {
                    title: "Forward thinkers wanted",
                    text: "Our people make progress happen. We hire for curiosity, ownership, and the ability to build systems that stand up to real use.",
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
                  <div key={title} className="space-y-3">
                    <div className="flex h-11 w-11 items-center justify-center rounded-2xl bg-coral/10 text-coral">
                      <Icon className="h-5 w-5" />
                    </div>
                    <h3 className="text-xl font-display font-bold leading-tight text-charcoal">{title}</h3>
                    <p className="text-sm leading-6 text-charcoal-muted">{text}</p>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </section>

        {/* RECOGNITION */}
        <section id="recognition" className="py-20 bg-cream">
          <div className="mx-auto max-w-6xl px-6">
            <div className="text-center mb-10">
              <div className="inline-block text-[11px] font-bold text-coral uppercase tracking-[0.2em]">Awards</div>
              <h2 className="mt-2 text-4xl font-display font-bold text-charcoal">Featured recognition</h2>
            </div>

            <div className="grid gap-4 md:grid-cols-3">
              {[
                { brand: "Forbes", title: "One of the World\u2019s Best Employers", year: "2025" },
                { brand: "Forbes", title: "Best Employers for Women", year: "2025" },
                { brand: "Ethisphere", title: "World\u2019s Most Ethical Companies", year: "2025" },
              ].map(({ brand, title, year }) => (
                <div key={title} className="rounded-3xl border border-charcoal/10 bg-white p-6 text-center shadow-sm hover:shadow-md transition">
                  <div className="flex h-14 w-14 mx-auto items-center justify-center rounded-2xl bg-coral/10 text-coral mb-4">
                    <Award className="h-6 w-6" />
                  </div>
                  <p className="text-[10px] font-bold uppercase tracking-widest text-charcoal-muted">{brand}</p>
                  <p className="mt-3 text-lg font-display font-bold leading-snug text-charcoal min-h-[3.5rem]">{title}</p>
                  <p className="mt-4 inline-block text-[10px] font-bold text-coral uppercase tracking-widest bg-coral/5 rounded-full px-3 py-1">{year}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* MEET PEOPLE */}
        <section id="people" className="py-20 bg-white border-y border-charcoal/10">
          <div className="mx-auto max-w-6xl px-6">
            <div className="text-center mb-10 max-w-2xl mx-auto">
              <div className="inline-block text-[11px] font-bold text-coral uppercase tracking-[0.2em]">Stories</div>
              <h2 className="mt-2 text-4xl font-display font-bold text-charcoal">Meet our people</h2>
              <p className="mt-3 text-sm leading-6 text-charcoal-muted">
                Hear from builders and operators who care deeply about product quality, candidate experience, and the long game of doing meaningful work well.
              </p>
            </div>

            <div className="rounded-[32px] border border-charcoal/10 bg-cream p-6 shadow-sm md:p-10 max-w-4xl mx-auto">
              <div className="grid gap-8 md:grid-cols-[260px_1fr] items-center">
                <img src={portraitImage} alt="Team member portrait" className="h-[280px] w-full rounded-3xl object-cover" />
                <div className="relative">
                  <Quote className="absolute -top-2 -left-1 h-8 w-8 text-coral/20" />
                  <p className="text-lg leading-7 text-charcoal pl-7">
                    The best part of working here is the combination of sharp thinking, real ownership, and a product surface that genuinely affects how people experience hiring.
                  </p>
                  <div className="mt-6 flex items-center gap-3">
                    <div className="h-10 w-10 rounded-full bg-coral/10 flex items-center justify-center text-coral text-xs font-bold">JS</div>
                    <div>
                      <p className="text-xs font-bold text-charcoal">Jordan S.</p>
                      <p className="text-[10px] font-bold uppercase tracking-widest text-coral">Platform Engineering</p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* ROLES */}
        <section id="roles" className="py-20 bg-cream">
          <div className="mx-auto max-w-6xl px-6">
            <div className="rounded-[32px] border border-charcoal/10 bg-white p-8 shadow-sm md:p-12">
              <div className="grid gap-10 lg:grid-cols-[1fr_1fr] items-start">
                <div>
                  <p className="text-[11px] font-bold uppercase tracking-[0.2em] text-coral">Job hub</p>
                  <h2 className="mt-3 text-4xl md:text-5xl font-display font-bold leading-[1.05] text-charcoal">
                    Find the path that fits how you want to build.
                  </h2>
                  <p className="mt-5 max-w-md text-sm leading-6 text-charcoal-muted">
                    From backend engineering to product and data, explore the areas where you can create impact, move through structured interviews, and track every stage from one candidate portal.
                  </p>
                </div>

                <div className="space-y-2.5">
                  {[
                    "Engineering roles",
                    "Product and design roles",
                    "Data and operations roles",
                    "Candidate portal and tracking",
                  ].map((item) => (
                    <Link
                      to="/candidate/jobs"
                      key={item}
                      className="flex items-center justify-between rounded-2xl border border-charcoal/10 bg-cream px-5 py-4 text-sm font-bold text-charcoal hover:border-coral hover:bg-coral/5 transition group"
                    >
                      <span>{item}</span>
                      <ArrowRight className="h-4 w-4 text-coral group-hover:translate-x-1 transition" />
                    </Link>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* CTA */}
        <section className="py-20 bg-charcoal text-white relative overflow-hidden">
          <div className="absolute inset-0 grid-bg opacity-10" />
          <div className="absolute -top-20 left-1/2 -translate-x-1/2 h-[400px] w-[600px] coral-glow opacity-25 pointer-events-none" />
          <div className="mx-auto max-w-3xl px-6 text-center relative">
            <h2 className="text-4xl md:text-5xl font-display font-bold leading-tight">
              Ready to make <span className="italic text-coral">an impact?</span>
            </h2>
            <p className="mt-4 text-sm text-white/60 max-w-md mx-auto">
              Join a team that ships meaningful work and treats hiring as a craft.
            </p>
            <Link
              to="/candidate/login"
              className="mt-8 inline-flex h-12 px-7 rounded-full bg-coral text-white text-sm font-bold uppercase tracking-widest items-center justify-center gap-2 hover:bg-coral-dark transition shadow-lg shadow-coral/30"
            >
              Express your interest <ArrowRight className="h-4 w-4" />
            </Link>
          </div>
        </section>
      </main>
    </div>
  );
}
