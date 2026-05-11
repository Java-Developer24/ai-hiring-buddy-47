import { Link } from "react-router-dom";
import { useEffect, useState } from "react";
import { HireIqLogo } from "@/components/HireIqLogo";
import {
  ArrowRight,
  Award,
  BadgeCheck,
  Briefcase,
  Building2,
  Globe,
  HeartHandshake,
  Users,
  Quote,
} from "lucide-react";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
} from "@/components/ui/carousel";

const peopleImage =
  "https://images.unsplash.com/photo-1522202176988-66273c2fd55f?auto=format&fit=crop&w=1400&q=80";
const stories = [
  {
    quote:
      "The best part of working here is the combination of sharp thinking, real ownership, and a product surface that genuinely affects how people experience hiring.",
    name: "Jordan S.",
    role: "Platform Engineering",
    initials: "JS",
    accent: "from-coral/10 to-white",
    image:
      "https://images.unsplash.com/photo-1500648767791-00dcc994a43e?auto=format&fit=crop&w=900&q=80",
    tenure: "2.5 years",
    team: "Platform",
  },
  {
    quote:
      "I joined to improve candidate experience, and I stayed because the team turns feedback into shipped product decisions incredibly fast.",
    name: "Maya R.",
    role: "Product Management",
    initials: "MR",
    accent: "from-amber-soft to-white",
    image:
      "https://images.unsplash.com/photo-1494790108377-be9c29b29330?auto=format&fit=crop&w=900&q=80",
    tenure: "1.8 years",
    team: "Product",
  },
  {
    quote:
      "There is a rare amount of trust here. You can own a problem end to end, ask hard questions, and still feel deeply supported by the people around you.",
    name: "Chris T.",
    role: "Design Systems",
    initials: "CT",
    accent: "from-[#E8EDFF] to-white",
    image:
      "https://images.unsplash.com/photo-1506794778202-cad84cf45f1d?auto=format&fit=crop&w=900&q=80",
    tenure: "3.1 years",
    team: "Design",
  },
  {
    quote:
      "Every launch feels meaningful because it affects both employers and candidates. That dual perspective keeps the bar high and the work interesting.",
    name: "Anika P.",
    role: "Customer Success",
    initials: "AP",
    accent: "from-coral/5 to-amber-soft/60",
    image:
      "https://images.unsplash.com/photo-1488426862026-3ee34a7d66df?auto=format&fit=crop&w=900&q=80",
    tenure: "2.2 years",
    team: "Success",
  },
];

export default function CandidateLanding() {
  const [carouselApi, setCarouselApi] = useState();
  const [activeStory, setActiveStory] = useState(0);
  const sectionContainerClass =
    "mx-auto w-full max-w-[1240px] px-8 lg:px-12 xl:px-14";

  useEffect(() => {
    if (!carouselApi) return;

    const syncSelected = () => setActiveStory(carouselApi.selectedScrollSnap());
    syncSelected();
    carouselApi.on("select", syncSelected);

    const interval = window.setInterval(() => {
      const nextIndex = carouselApi.selectedScrollSnap() + 1;
      const lastIndex = carouselApi.scrollSnapList().length - 1;
      if (nextIndex > lastIndex) {
        carouselApi.scrollTo(0);
        return;
      }
      carouselApi.scrollTo(nextIndex);
    }, 4500);

    return () => {
      window.clearInterval(interval);
      carouselApi.off("select", syncSelected);
    };
  }, [carouselApi]);

  return (
    <div className="min-h-screen bg-cream text-charcoal">
      {/* HEADER */}
      <header className="sticky top-0 z-50 border-b border-charcoal/10 bg-white/90 backdrop-blur">
        <div
          className={`${sectionContainerClass} flex h-16 items-center justify-between`}
        >
          <div className="flex items-center gap-8">
            <HireIqLogo />
            <nav className="hidden items-center gap-6 text-[11px] font-bold uppercase tracking-widest text-charcoal-muted md:flex">
              <a href="#culture" className="transition hover:text-charcoal">
                Culture
              </a>
              <a href="#recognition" className="transition hover:text-charcoal">
                Recognition
              </a>
              <a href="#people" className="transition hover:text-charcoal">
                People
              </a>
              <a href="#roles" className="transition hover:text-charcoal">
                Roles
              </a>
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
          {/* Ambient glows */}
          <div className="absolute -top-40 -right-40 h-[560px] w-[560px] coral-glow opacity-30 pointer-events-none" />
          <div className="absolute top-40 -left-48 h-[460px] w-[460px] amber-glow opacity-25 pointer-events-none" />
          {/* Subtle grid */}
          <div className="absolute inset-0 grid-bg opacity-60 pointer-events-none [mask-image:radial-gradient(ellipse_at_center,black,transparent_75%)]" />

          <div className={`${sectionContainerClass} relative pt-10 pb-20`}>
            <div className="grid items-stretch gap-10 xl:grid-cols-[1fr_1.05fr]">
              {/* Left */}
              <div className="space-y-2 relative">
                {/* Trust pill */}
                <div className="inline-flex items-center gap-2 rounded-full border border-charcoal/10 bg-white/80 backdrop-blur px-3 py-1.5 text-[10px] font-bold uppercase tracking-widest text-charcoal shadow-sm">
                  <span className="relative flex h-2 w-2">
                    <span className="absolute inline-flex h-full w-full rounded-full bg-coral animate-pulse-dot" />
                    <span className="relative inline-flex h-2 w-2 rounded-full bg-coral" />
                  </span>
                  <span>Now hiring · 24 open roles</span>
                  <span className="h-3 w-px bg-charcoal/15" />
                  <span className="text-coral">Apply in 3 mins</span>
                </div>

                <h1 className="max-w-3xl text-5xl font-display font-bold leading-[1.02] text-charcoal md:text-[5.25rem]">
                  Hello change-makers,{" "}
                  <span className="relative inline-block">
                    <span className="relative z-10 italic bg-gradient-to-r from-coral via-coral to-amber bg-clip-text text-transparent">
                      we&rsquo;ve been expecting you.
                    </span>
                    <svg
                      className="absolute -bottom-2 left-0 w-full h-3 text-amber/60"
                      viewBox="0 0 300 12"
                      preserveAspectRatio="none"
                      fill="none"
                    >
                      <path
                        d="M2 9 Q 75 1, 150 6 T 298 5"
                        stroke="currentColor"
                        strokeWidth="3"
                        strokeLinecap="round"
                      />
                    </svg>
                  </span>
                </h1>

                <p className="max-w-xl text-base leading-7 text-charcoal-muted">
                  Build products that make hiring clearer, faster, and more
                  human. At HireIQ, we bring together structured assessments,
                  AI-assisted interviews, and candidate-first workflows — so
                  ambitious teams can hire with confidence and you can do the
                  best work of your career.
                </p>

                <div className="flex flex-wrap items-center gap-3">
                  <Link
                    to="/candidate/login"
                    className="group h-12 px-6 rounded-full bg-coral text-white text-xs font-bold uppercase tracking-widest flex items-center justify-center gap-2 hover:bg-coral-dark transition shadow-lg shadow-coral/30"
                  >
                    Explore opportunities
                    <ArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-1" />
                  </Link>
                  <a
                    href="#roles"
                    className="flex h-12 items-center justify-center rounded-full border border-charcoal/15 bg-white px-6 text-xs font-bold uppercase tracking-widest text-charcoal transition hover:bg-cream"
                  >
                    View open roles
                  </a>

                  <div className="flex items-center gap-3 pl-2">
                    <div className="flex -space-x-2">
                      {["JS", "MR", "CT", "AP"].map((i, idx) => (
                        <div
                          key={i}
                          className={`h-8 w-8 rounded-full border-2 border-cream flex items-center justify-center text-[10px] font-bold text-white ${
                            idx % 2 === 0 ? "bg-coral" : "bg-charcoal"
                          }`}
                        >
                          {i}
                        </div>
                      ))}
                    </div>
                    <div className="text-[11px] leading-tight text-charcoal-muted">
                      <p className="font-bold text-charcoal">12,400+</p>
                      <p>candidates joined this month</p>
                    </div>
                  </div>
                </div>

                
              </div>

              {/* Right — Featured role mock card stack */}
              <div className="relative">
                {/* Floating activity card */}
                <div
                  className="hidden md:flex absolute -top-6 -left-6 z-20 items-center gap-2.5 rounded-full border border-charcoal/10 bg-white pl-1.5 pr-4 py-1.5 shadow-md animate-float-slow"
                  style={{ animationDelay: "0.4s" }}
                >
                  <div className="h-7 w-7 rounded-full bg-amber-soft flex items-center justify-center">
                    <BadgeCheck className="h-4 w-4 text-coral" />
                  </div>
                  <div className="text-[10px] leading-tight">
                    <p className="font-bold text-charcoal">Maya R. · hired</p>
                    <p className="text-charcoal-muted">2 hours ago</p>
                  </div>
                </div>

                {/* Floating mini stat */}
                <div
                  className="hidden md:flex absolute -right-4 top-24 z-20 flex-col rounded-2xl border border-charcoal/10 bg-charcoal text-white px-4 py-3 shadow-lg animate-float-slow"
                  style={{ animationDelay: "1.6s" }}
                >
                  <span className="text-[9px] font-bold uppercase tracking-widest text-amber">
                    Live
                  </span>
                  <span className="mt-1 text-lg font-display font-bold">
                    342 hiring
                  </span>
                  <span className="text-[10px] text-white/60">
                    teams this week
                  </span>
                </div>

                {/* Main card */}
                <div className="relative rounded-[32px] border border-charcoal/10 bg-white p-7 md:p-8 shadow-[0_30px_80px_-30px_rgba(22,25,22,0.25)]">
                  <div className="flex items-start justify-between gap-4">
                    <div>
                      <p className="text-[11px] font-bold uppercase tracking-widest text-coral">
                        Featured role
                      </p>
                      <h2 className="mt-2 text-3xl md:text-[34px] font-display font-bold text-charcoal leading-[1.1]">
                        Senior Backend Engineer
                      </h2>
                      <p className="mt-2 text-xs text-charcoal-muted">
                        Platform team · Reports to VP Engineering
                      </p>
                    </div>
                    <span className="rounded-full bg-amber-soft px-3 py-1.5 text-[10px] font-bold uppercase tracking-widest text-charcoal whitespace-nowrap">
                      New
                    </span>
                  </div>

                  <div className="mt-6 grid grid-cols-2 gap-2.5 text-xs">
                    <div className="flex items-center gap-2 rounded-xl bg-cream px-3.5 py-2.5 text-charcoal">
                      <Briefcase className="h-4 w-4 text-coral shrink-0" />
                      Full-time
                    </div>
                    <div className="flex items-center gap-2 rounded-xl bg-cream px-3.5 py-2.5 text-charcoal">
                      <Globe className="h-4 w-4 text-coral shrink-0" />
                      Remote · India
                    </div>
                    <div className="flex items-center gap-2 rounded-xl bg-cream px-3.5 py-2.5 text-charcoal">
                      <Award className="h-4 w-4 text-coral shrink-0" />
                      ₹ 28–42 LPA
                    </div>
                    <div className="flex items-center gap-2 rounded-xl bg-cream px-3.5 py-2.5 text-charcoal">
                      <Users className="h-4 w-4 text-coral shrink-0" />
                      4–7 yrs exp
                    </div>
                    <div className="flex items-center gap-2 rounded-xl bg-cream px-3.5 py-2.5 text-charcoal col-span-2">
                      <BadgeCheck className="h-4 w-4 text-coral shrink-0" />
                      Skills assessment · Video interview · Coding round
                    </div>
                  </div>

                  {/* Tech stack */}
                  <div className="mt-5">
                    <p className="text-[10px] font-bold uppercase tracking-widest text-charcoal-muted">
                      You&apos;ll work with
                    </p>
                    <div className="mt-2.5 flex flex-wrap gap-1.5">
                      {["Go", "PostgreSQL", "Kafka", "AWS", "gRPC", "Redis"].map(
                        (t) => (
                          <span
                            key={t}
                            className="rounded-full border border-charcoal/10 bg-white px-2.5 py-1 text-[10px] font-bold text-charcoal"
                          >
                            {t}
                          </span>
                        ),
                      )}
                    </div>
                  </div>

                  {/* Pipeline progress */}
                  <div className="mt-6">
                    <div className="flex items-center justify-between text-[10px] font-bold uppercase tracking-widest text-charcoal-muted">
                      <span>Application progress</span>
                      <span className="text-coral">3 / 4 steps</span>
                    </div>
                    <div className="mt-2 flex gap-1.5">
                      {[1, 2, 3, 4].map((s) => (
                        <div
                          key={s}
                          className={`h-2 flex-1 rounded-full ${
                            s <= 3 ? "bg-coral" : "bg-charcoal/10"
                          }`}
                        />
                      ))}
                    </div>
                    <div className="mt-2 flex justify-between text-[9px] uppercase tracking-widest text-charcoal-muted">
                      <span>Apply</span>
                      <span>Assess</span>
                      <span>Interview</span>
                      <span>Offer</span>
                    </div>
                  </div>

                  <div className="mt-6 flex items-center justify-between border-t border-charcoal/10 pt-5">
                    <div className="flex items-center gap-2.5">
                      <div className="flex -space-x-1.5">
                        {["A", "B", "C", "D"].map((i, idx) => (
                          <div
                            key={i}
                            className={`h-7 w-7 rounded-full border-2 border-white flex items-center justify-center text-[10px] font-bold text-white ${
                              idx === 1 ? "bg-amber" : "bg-coral"
                            }`}
                          >
                            {i}
                          </div>
                        ))}
                      </div>
                      <span className="text-[11px] text-charcoal-muted">
                        128 applied · 14 in interview
                      </span>
                    </div>
                    <Link
                      to="/candidate/login"
                      className="inline-flex items-center gap-1.5 rounded-full bg-charcoal text-white px-4 py-2 text-[11px] font-bold uppercase tracking-widest hover:bg-coral transition"
                    >
                      View role <ArrowRight className="h-3.5 w-3.5" />
                    </Link>
                  </div>
                </div>

                {/* Pathway tiles below */}
                <div className="mt-3 grid grid-cols-3 gap-3">
                  {[
                    ["Job Search", "Find roles that match your craft"],
                    ["Campus", "Early career pathways"],
                    ["Who We Are", "Meet the teams"],
                  ].map(([title, text]) => (
                    <div
                      key={title}
                      className="rounded-2xl border border-charcoal/10 bg-white/80 backdrop-blur p-3.5 shadow-sm hover:border-coral/40 hover:-translate-y-0.5 transition cursor-pointer"
                    >
                      <p className="text-[11px] font-bold text-charcoal">
                        {title}
                      </p>
                      <p className="mt-1.5 text-[10px] leading-4 text-charcoal-muted">
                        {text}
                      </p>
                    </div>
                  ))}
                </div>
              </div>
            </div>

            
          </div>
        </section>

        {/* CULTURE */}
        <section
          id="culture"
          className="py-20 bg-white border-y border-charcoal/10"
        >
          <div className={sectionContainerClass}>
            <div className="overflow-hidden rounded-[32px] border border-charcoal/10 bg-cream shadow-sm">
              <img
                src={peopleImage}
                alt="Team members collaborating"
                className="h-[320px] w-full object-cover"
              />
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
                    <h3 className="text-xl font-display font-bold leading-tight text-charcoal">
                      {title}
                    </h3>
                    <p className="text-sm leading-6 text-charcoal-muted">
                      {text}
                    </p>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </section>

        {/* RECOGNITION */}
        <section id="recognition" className="py-20 bg-cream">
          <div className={sectionContainerClass}>
            <div className="text-center mb-10">
              <div className="inline-block text-[11px] font-bold text-coral uppercase tracking-[0.2em]">
                Awards
              </div>
              <h2 className="mt-2 text-4xl font-display font-bold text-charcoal">
                Featured recognition
              </h2>
            </div>

            <div className="overflow-hidden rounded-[36px] border border-charcoal/10 bg-charcoal text-white shadow-[0_24px_70px_-28px_rgba(26,39,68,0.45)]">
              <div className="grid gap-0 lg:grid-cols-[1.2fr_0.8fr]">
                <div className="relative overflow-hidden p-8 md:p-10">
                  <div className="absolute -left-16 top-10 h-48 w-48 rounded-full bg-coral/20 blur-3xl" />
                  <div className="absolute bottom-0 right-0 h-56 w-56 rounded-full bg-amber/15 blur-3xl" />
                  <div className="relative">
                    <div className="inline-flex items-center gap-2 rounded-full border border-white/10 bg-white/5 px-3 py-1 text-[10px] font-bold uppercase tracking-[0.24em] text-coral">
                      <Award className="h-3.5 w-3.5" /> Employer recognition
                    </div>
                    <h3 className="mt-5 max-w-lg text-3xl font-display font-bold leading-tight md:text-4xl">
                      Recognized for building high-trust teams and
                      candidate-first hiring experiences.
                    </h3>
                    <p className="mt-4 max-w-xl text-sm leading-6 text-white/70">
                      From ethics to inclusion to operator growth, our
                      recognition reflects the same values candidates feel
                      throughout the interview experience.
                    </p>
                    <div className="mt-8 grid gap-3 sm:grid-cols-3">
                      {[
                        ["2025", "Global employer awards"],
                        ["72", "Team NPS benchmark"],
                        ["4", "Regional hubs supporting growth"],
                      ].map(([value, label]) => (
                        <div
                          key={label}
                          className="rounded-2xl border border-white/10 bg-white/5 px-4 py-4 backdrop-blur"
                        >
                          <p className="text-2xl font-display font-bold text-amber">
                            {value}
                          </p>
                          <p className="mt-1 text-[11px] uppercase tracking-widest text-white/60">
                            {label}
                          </p>
                        </div>
                      ))}
                    </div>
                  </div>
                </div>
                <div className="grid gap-px bg-white/10 lg:grid-cols-1">
                  {[
                    {
                      brand: "Forbes",
                      title: "One of the World\u2019s Best Employers",
                      year: "2025",
                      note: "Recognised for team culture, growth, and operator-first leadership.",
                    },
                    {
                      brand: "Forbes",
                      title: "Best Employers for Women",
                      year: "2025",
                      note: "Celebrated for inclusive progression, support, and leadership visibility.",
                    },
                    {
                      brand: "Ethisphere",
                      title: "World\u2019s Most Ethical Companies",
                      year: "2025",
                      note: "Honoured for transparent systems, fairness, and responsible product decisions.",
                    },
                  ].map(({ brand, title, year, note }) => (
                    <div
                      key={title}
                      className="bg-white/5 p-6 backdrop-blur transition hover:bg-white/10"
                    >
                      <div className="flex items-center justify-between gap-3">
                        <span className="text-[10px] font-bold uppercase tracking-[0.22em] text-coral">
                          {brand}
                        </span>
                        <span className="rounded-full bg-coral/15 px-3 py-1 text-[10px] font-bold uppercase tracking-widest text-amber">
                          {year}
                        </span>
                      </div>
                      <p className="mt-4 text-xl font-display font-bold leading-snug text-white">
                        {title}
                      </p>
                      <p className="mt-3 text-sm leading-6 text-white/65">
                        {note}
                      </p>
                    </div>
                  ))}
                </div>
              </div>
            </div>

            <div className="mt-5 grid gap-4 md:grid-cols-3">
              {[
                [
                  "Growth",
                  "Career acceleration and ownership are designed into how teams operate.",
                ],
                [
                  "Inclusion",
                  "Recognition is backed by visible progression, support, and fairness in practice.",
                ],
                [
                  "Integrity",
                  "The same rigor we apply to hiring also guides how we build and make decisions.",
                ],
              ].map(([title, body]) => (
                <div
                  key={title}
                  className="rounded-3xl border border-charcoal/10 bg-white px-5 py-5 shadow-sm"
                >
                  <p className="text-[10px] font-bold uppercase tracking-[0.22em] text-coral">
                    {title}
                  </p>
                  <p className="mt-3 text-sm leading-6 text-charcoal-muted">
                    {body}
                  </p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* MEET PEOPLE */}
        <section
          id="people"
          className="py-20 bg-white border-y border-charcoal/10"
        >
          <div className={sectionContainerClass}>
            <div className="text-center mb-10 max-w-2xl mx-auto">
              <div className="inline-block text-[11px] font-bold text-coral uppercase tracking-[0.2em]">
                Stories
              </div>
              <h2 className="mt-2 text-4xl font-display font-bold text-charcoal">
                Meet our people
              </h2>
              <p className="mt-3 text-sm leading-6 text-charcoal-muted">
                Hear from builders and operators who care deeply about product
                quality, candidate experience, and the long game of doing
                meaningful work well.
              </p>
            </div>

            <div className="mx-auto max-w-6xl rounded-[32px] border border-charcoal/10 bg-cream p-6 shadow-sm md:p-10">
              <Carousel
                setApi={setCarouselApi}
                opts={{ loop: true }}
                className="w-full"
              >
                <CarouselContent>
                  {stories.map((story) => (
                    <CarouselItem key={story.name}>
                      <div className="grid items-center gap-8 md:grid-cols-[260px_1fr]">
                        <div
                          className={`overflow-hidden rounded-3xl border border-charcoal/10 bg-gradient-to-br ${story.accent} p-4`}
                        >
                          <img
                            src={story.image}
                            alt={`${story.name} portrait`}
                            className="h-[280px] w-full rounded-[24px] object-cover"
                          />
                          <div className="mt-4 grid grid-cols-2 gap-3">
                            <div className="rounded-2xl bg-white/80 px-3 py-2">
                              <p className="text-[9px] font-bold uppercase tracking-widest text-charcoal-muted">
                                Tenure
                              </p>
                              <p className="mt-1 text-sm font-bold text-charcoal">
                                {story.tenure}
                              </p>
                            </div>
                            <div className="rounded-2xl bg-white/80 px-3 py-2">
                              <p className="text-[9px] font-bold uppercase tracking-widest text-charcoal-muted">
                                Team
                              </p>
                              <p className="mt-1 text-sm font-bold text-charcoal">
                                {story.team}
                              </p>
                            </div>
                          </div>
                        </div>
                        <div className="relative">
                          <Quote className="absolute -top-2 -left-1 h-8 w-8 text-coral/20" />
                          <p className="pl-7 text-lg leading-7 text-charcoal">
                            {story.quote}
                          </p>
                          <div className="mt-6 flex items-center gap-3">
                            <div className="flex h-10 w-10 items-center justify-center rounded-full bg-coral/10 text-coral text-xs font-bold">
                              {story.initials}
                            </div>
                            <div>
                              <p className="text-xs font-bold text-charcoal">
                                {story.name}
                              </p>
                              <p className="text-[10px] font-bold uppercase tracking-widest text-coral">
                                {story.role}
                              </p>
                            </div>
                          </div>
                          <div className="mt-6 flex flex-wrap gap-2">
                            {[
                              "High ownership",
                              "Flexible collaboration",
                              "Clear candidate focus",
                            ].map((tag) => (
                              <span
                                key={`${story.name}-${tag}`}
                                className="rounded-full border border-charcoal/10 bg-white px-3 py-1 text-[10px] font-bold uppercase tracking-widest text-charcoal-muted"
                              >
                                {tag}
                              </span>
                            ))}
                          </div>
                        </div>
                      </div>
                    </CarouselItem>
                  ))}
                </CarouselContent>
              </Carousel>
              <div className="mt-6 flex justify-center gap-2">
                {stories.map((story, index) => (
                  <button
                    key={story.name}
                    type="button"
                    onClick={() => carouselApi?.scrollTo(index)}
                    className={`h-2.5 rounded-full transition-all ${
                      activeStory === index
                        ? "w-8 bg-coral"
                        : "w-2.5 bg-charcoal/15"
                    }`}
                    aria-label={`Go to story ${index + 1}`}
                  />
                ))}
              </div>
            </div>
          </div>
        </section>

     
        {/* ROLES */}
        <section id="roles" className="py-20 bg-cream">
          <div className={sectionContainerClass}>
            <div className="rounded-[32px] border border-charcoal/10 bg-white p-8 shadow-sm md:p-12">
              <div className="grid gap-10 lg:grid-cols-[1fr_1fr] items-start">
                <div>
                  <p className="text-[11px] font-bold uppercase tracking-[0.2em] text-coral">
                    Job hub
                  </p>
                  <h2 className="mt-3 text-4xl md:text-5xl font-display font-bold leading-[1.05] text-charcoal">
                    Find the path that fits how you want to build.
                  </h2>
                  <p className="mt-5 max-w-md text-sm leading-6 text-charcoal-muted">
                    From backend engineering to product and data, explore the
                    areas where you can create impact, move through structured
                    interviews, and track every stage from one candidate portal.
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
          <div className="relative mx-auto max-w-4xl px-6 text-center">
            <h2 className="text-4xl md:text-5xl font-display font-bold leading-tight">
              Ready to make{" "}
              <span className="italic text-coral">an impact?</span>
            </h2>
            <p className="mt-4 text-sm text-white/60 max-w-md mx-auto">
              Join a team that ships meaningful work and treats hiring as a
              craft.
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
