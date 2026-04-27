import { CandidateLayout } from "@/components/layout/CandidateLayout";
import {
  Volume2,
  Lightbulb,
  Play,
  ArrowRight,
  RefreshCw,
  Video,
  StopCircle
} from "lucide-react";
import { useState, useEffect, useRef } from "react";
import { Link } from "react-router-dom";

const PracticeQuestion = () => {
  const [state, setState] = useState<"prep" | "recording" | "playback">("prep");
  const [countdown, setCountdown] = useState(30);
  const videoRef = useRef<HTMLVideoElement>(null);

  useEffect(() => {
    if (state === "recording" && videoRef.current) {
      navigator.mediaDevices.getUserMedia({ video: true, audio: true })
        .then(stream => {
          if (videoRef.current) {
            videoRef.current.srcObject = stream;
          }
        })
        .catch(err => console.error("Camera error:", err));
    }
  }, [state]);

  useEffect(() => {
    let timer: any;
    if (state === "prep" && countdown > 0) {
      timer = setInterval(() => setCountdown(c => c - 1), 1000);
    } else if (state === "prep" && countdown === 0) {
      setState("recording");
    }
    return () => clearInterval(timer);
  }, [state, countdown]);

  return (
    <CandidateLayout className="bg-cream">
      <div className="flex h-[calc(100vh-4rem)] flex-col overflow-hidden">
        <div className="flex h-14 flex-none items-center justify-between border-b border-charcoal/5 bg-white px-5 md:px-8">
          <div className="flex items-center gap-6">
            <div className="flex items-center gap-2 text-xs font-bold text-charcoal-muted">
              <span className="text-[#00CC88]">Device check ✓</span>
              <div className="h-4 w-px bg-charcoal/10" />
              <div className="rounded-md bg-[hsl(var(--charcoal))] px-2 py-1 text-[10px] text-white">Practice</div>
              <div className="h-4 w-px bg-charcoal/10" />
              <span>Interview (3 questions)</span>
            </div>
          </div>
          <div className="hidden text-xs font-bold text-charcoal-muted lg:block">
            Senior Backend Engineer — HireIQ Partner Solutions
          </div>
        </div>

        <div className="flex flex-1 items-center justify-center overflow-hidden bg-[#F5F7FA] p-4 md:p-6">
          <div className="relative flex h-full w-full max-w-[760px] flex-col overflow-hidden rounded-[32px] border border-charcoal/10 bg-white shadow-sm">
            <div className="absolute inset-x-0 top-0 flex h-11 items-center justify-center gap-2 border-b border-amber-warm/5 bg-amber-soft/50 px-4 text-center">
              <span className="h-2 w-2 animate-pulse rounded-full bg-amber-warm" />
              <p className="text-[11px] font-bold uppercase tracking-wider text-amber-warm">Practice round · Not scored or submitted</p>
            </div>

            <div className="flex min-h-0 flex-1 flex-col px-5 pb-5 pt-16 text-center md:px-8 md:pb-8 md:pt-16">
              <div className="space-y-3">
                <span className="block text-[10px] font-bold uppercase tracking-widest text-charcoal-muted">Practice question</span>
                <h2 className="mx-auto max-w-xl text-2xl font-display font-bold leading-tight text-charcoal md:text-[2rem]">
                  Tell us something you enjoy doing outside of work.
                </h2>
                <button className="inline-flex items-center gap-2 rounded-full border border-charcoal/10 px-3 py-1.5 text-[11px] font-bold text-charcoal-muted transition hover:bg-cream">
                  <Volume2 className="h-3.5 w-3.5" /> Replay question audio
                </button>
              </div>

              <div className="mt-4 flex min-h-0 flex-1 flex-col items-center justify-center">
                {state === "prep" && (
                  <div className="animate-in fade-in flex flex-col items-center gap-5 duration-500">
                    <div className="relative mx-auto flex h-32 w-32 items-center justify-center md:h-36 md:w-36">
                      <svg className="absolute inset-0 h-full w-full -rotate-90" viewBox="0 0 144 144">
                        <circle
                          cx="72" cy="72" r="64"
                          fill="transparent"
                          stroke="currentColor"
                          strokeWidth="8"
                          className="text-charcoal/5"
                        />
                        <circle
                          cx="72" cy="72" r="64"
                          fill="transparent"
                          stroke="currentColor"
                          strokeWidth="8"
                          className="text-[hsl(var(--charcoal))] transition-all duration-1000"
                          strokeDasharray={402}
                          strokeDashoffset={402 - (402 * countdown / 30)}
                          strokeLinecap="round"
                        />
                      </svg>
                      <div className="text-center">
                        <span className="block text-4xl font-display font-bold text-charcoal">{countdown}</span>
                        <span className="text-[9px] font-bold uppercase text-charcoal-muted">seconds</span>
                      </div>
                    </div>

                    <div className="space-y-3">
                      <div className="inline-flex items-center gap-2.5 rounded-2xl bg-[#E8EDFF] px-4 py-2.5 text-[#2D5BFF]">
                        <Lightbulb className="h-4 w-4" />
                        <p className="text-[11px] font-bold">Tip: Speak naturally. This is just for warmup — nothing is recorded.</p>
                      </div>
                      <button
                        onClick={() => setState("recording")}
                        className="block mx-auto text-sm font-bold text-charcoal-muted transition hover:text-charcoal"
                      >
                        Start recording now
                      </button>
                    </div>
                  </div>
                )}

                {state === "recording" && (
                  <div className="animate-in zoom-in-95 flex w-full max-w-[640px] flex-col gap-5 duration-300">
                    <div className="relative aspect-video w-full overflow-hidden rounded-2xl border border-white/10 bg-charcoal shadow-2xl">
                      <video
                        ref={videoRef}
                        autoPlay
                        muted
                        className="mirror absolute inset-0 h-full w-full object-cover"
                      />
                      <style>{`.mirror { transform: scaleX(-1); }`}</style>
                      <div className="absolute left-4 top-4 z-10 flex items-center gap-2 rounded-full bg-black/40 px-2.5 py-1 backdrop-blur-md">
                        <div className="h-2 w-2 animate-pulse rounded-full bg-[hsl(var(--coral))]" />
                        <span className="text-[10px] font-bold uppercase tracking-wider text-white">REC</span>
                      </div>
                      <div className="absolute right-4 top-4 z-10 rounded-full bg-black/40 px-2.5 py-1 text-[10px] font-mono font-bold text-white backdrop-blur-md">
                        0:23 / 1:30
                      </div>
                    </div>
                    <button
                      onClick={() => {
                        if (videoRef.current && videoRef.current.srcObject) {
                          (videoRef.current.srcObject as MediaStream).getTracks().forEach(track => track.stop());
                        }
                        setState("playback");
                      }}
                      className="mx-auto flex h-12 items-center justify-center gap-2 rounded-2xl border border-[hsl(var(--coral))] bg-white px-8 font-bold text-[hsl(var(--coral))] transition hover:bg-coral/10"
                    >
                      <StopCircle className="h-5 w-5" /> Stop recording
                    </button>
                  </div>
                )}

                {state === "playback" && (
                  <div className="animate-in slide-in-from-bottom-4 flex w-full max-w-[680px] flex-1 flex-col justify-center gap-5 duration-500">
                    <div className="relative flex aspect-video w-full cursor-pointer items-center justify-center rounded-2xl border border-charcoal/10 bg-charcoal/5 shadow-sm">
                      <div className="flex h-14 w-14 items-center justify-center rounded-full bg-white text-charcoal shadow-lg transition group-hover:scale-110">
                        <Play className="h-6 w-6 fill-current" />
                      </div>
                      <div className="absolute bottom-4 left-6 text-[10px] font-bold uppercase tracking-widest text-charcoal-muted">
                        Review your practice attempt
                      </div>
                    </div>

                    <div className="space-y-4">
                      <div className="rounded-[24px] border border-charcoal/10 bg-[#FBF7F2] px-5 py-4">
                        <p className="text-sm leading-6 text-charcoal-muted">
                          Nice. You have tested your camera framing, voice level, and the same one-question flow the scored interview uses next.
                        </p>
                      </div>
                      <div className="flex flex-col items-center justify-center gap-3 md:flex-row">
                        <button
                          onClick={() => {
                            setState("prep");
                            setCountdown(30);
                          }}
                          className="flex h-12 w-full items-center justify-center gap-2 rounded-2xl border border-charcoal/10 bg-white px-8 font-bold text-charcoal transition hover:bg-cream md:w-auto"
                        >
                          <RefreshCw className="h-4 w-4" /> Re-record
                        </button>
                        <Link
                          to="/interview"
                          className="flex h-12 w-full items-center justify-center gap-2 rounded-2xl bg-[hsl(var(--charcoal))] px-8 font-bold text-white shadow-xl shadow-[hsl(var(--charcoal))]/10 transition hover:bg-charcoal md:w-auto"
                        >
                          I&apos;m ready — start interview <ArrowRight className="h-4 w-4" />
                        </Link>
                      </div>
                      <p className="text-[11px] italic text-charcoal-muted">
                        Once you start, you cannot return to previous questions.
                      </p>
                    </div>
                  </div>
                )}
              </div>
            </div>
          </div>
        </div>
      </div>
    </CandidateLayout>
  );
};

export default PracticeQuestion;
