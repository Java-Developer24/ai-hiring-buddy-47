import { useState, useEffect, useRef } from "react";
import { CandidateLayout } from "@/components/layout/CandidateLayout";
import {
  Volume2,
  Lightbulb,
  Play,
  ArrowRight,
  CheckCircle2,
  Mic,
  Camera,
  Loader2
} from "lucide-react";
import { useNavigate } from "react-router-dom";

const VideoInterview = () => {
  const [state, setState] = useState<"prep" | "recording" | "uploading" | "complete">("prep");
  const [currentQuestion, setCurrentQuestion] = useState(1);
  const [countdown, setCountdown] = useState(24);
  const videoRef = useRef<HTMLVideoElement>(null);
  const navigate = useNavigate();

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

  const handleNext = () => {
    if (state === "recording") {
      if (videoRef.current && videoRef.current.srcObject) {
        (videoRef.current.srcObject as MediaStream).getTracks().forEach(track => track.stop());
      }
      setState("uploading");
      setTimeout(() => {
        if (currentQuestion < 3) { // Demo only 3 questions
          setCurrentQuestion(currentQuestion + 1);
          setCountdown(24);
          setState("prep");
        } else {
          setState("complete");
        }
      }, 2000);
    }
  };

  return (
    <CandidateLayout className="bg-[#0f1117]" showLogo={true}>

      <div className="flex-1 flex flex-col items-center justify-center p-6 relative overflow-hidden">
        {/* Background glow effects */}
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 h-[500px] w-[500px] bg-coral/10 blur-[120px] rounded-full pointer-events-none" />

        {state === "prep" && (
          <div className="max-w-[600px] w-full space-y-12 text-center animate-in fade-in zoom-in-95 duration-700 relative z-10">
            <div className="space-y-6">
              <h2 className="text-2xl md:text-3xl font-display font-bold text-white leading-tight">
                Describe a time you had to debug a critical production issue under pressure. What was your approach?
              </h2>
              <button className="inline-flex items-center gap-2 px-4 py-2 rounded-full border border-white/10 text-xs font-bold text-white/60 hover:text-white hover:bg-white/5 transition">
                <Volume2 className="h-4 w-4" /> Replay question
              </button>
            </div>

            <div className="space-y-8">
              <div className="flex items-center justify-center gap-4 mb-4">
                 <span className="text-xs font-bold text-white/40 uppercase tracking-widest">Question {currentQuestion} of 3</span>
                 <div className="flex gap-1">
                    {[1, 2, 3].map(i => (
                      <div key={i} className={`h-1 w-4 rounded-full ${i <= currentQuestion ? 'bg-coral' : 'bg-white/10'}`} />
                    ))}
                 </div>
              </div>
              <div className="relative h-40 w-40 mx-auto flex items-center justify-center">
                <svg className="absolute inset-0 h-full w-full -rotate-90" viewBox="0 0 160 160">
                  <circle cx="80" cy="80" r="72" fill="transparent" stroke="currentColor" strokeWidth="6" className="text-white/5" />
                  <circle
                    cx="80" cy="80" r="72"
                    fill="transparent" stroke="currentColor" strokeWidth="6"
                    className="text-white transition-all duration-1000"
                    strokeDasharray={452}
                    strokeDashoffset={452 - (452 * countdown / 24)}
                    strokeLinecap="round"
                  />
                </svg>
                <div className="text-center">
                  <span className="text-5xl font-display font-bold text-white block">{countdown}</span>
                  <span className="text-[10px] font-bold text-white/40 uppercase tracking-widest">seconds</span>
                </div>
              </div>
              <p className="text-xs font-bold text-white/40 uppercase tracking-widest">to prepare</p>
            </div>

            <div className="max-w-[400px] mx-auto p-4 rounded-2xl bg-white/5 border border-white/5 backdrop-blur-md space-y-2">
              <p className="text-[11px] font-bold text-white/80 flex items-center justify-center gap-2">
                <Lightbulb className="h-3.5 w-3.5 text-amber" /> STAR method: Situation → Task → Action → Result
              </p>
            </div>

            <button
              onClick={() => setState("recording")}
              className="text-sm font-bold text-white/60 hover:text-white transition underline underline-offset-4"
            >
              Start recording now
            </button>

            <p className="text-[10px] text-white/20 italic">Recording will start automatically when the timer ends.</p>
          </div>
        )}

        {state === "recording" && (
          <div className="w-full max-w-4xl space-y-8 animate-in fade-in duration-500">
             <div className="text-center space-y-2">
                <p className="text-sm font-medium text-white/60 line-clamp-1 max-w-xl mx-auto">
                  Describe a time you had to debug a critical production issue...
                </p>
             </div>

             <div className="aspect-video w-full bg-black rounded-[32px] border border-white/10 relative overflow-hidden shadow-2xl group">
                <video
                  ref={videoRef}
                  autoPlay
                  muted
                  className="absolute inset-0 w-full h-full object-cover mirror"
                />
                <style>{`.mirror { transform: scaleX(-1); }`}</style>

                <div className="absolute top-6 left-6 flex items-center gap-2.5 bg-black/40 backdrop-blur-md px-3 py-1.5 rounded-full border border-white/10">
                  <div className="h-2 w-2 rounded-full bg-[hsl(var(--coral))] animate-pulse" />
                  <span className="text-[11px] font-bold text-white uppercase tracking-wider">Recording</span>
                </div>

                <div className="absolute top-6 right-6 flex items-center gap-4">
                  <div className="px-3 py-1.5 rounded-full bg-black/40 backdrop-blur-md border border-white/10 text-[11px] font-mono font-bold text-white">
                    1:24 / 1:30
                  </div>
                </div>

                {/* Progress bar at bottom of camera */}
                <div className="absolute bottom-0 inset-x-0 h-1.5 bg-white/10">
                   <div className="h-full bg-[hsl(var(--coral))] w-[90%] transition-all duration-1000" />
                </div>
             </div>

             <div className="flex flex-col items-center gap-6">
                <button
                  onClick={handleNext}
                  className="h-14 px-10 bg-white text-charcoal font-bold rounded-2xl flex items-center justify-center gap-2 hover:bg-cream transition shadow-xl"
                >
                  Done answering
                </button>
                <p className="text-[11px] text-white/40 font-medium">Speak clearly and naturally. The AI will analyse your full answer.</p>
             </div>
          </div>
        )}

        {state === "uploading" && (
          <div className="max-w-[480px] w-full text-center space-y-8 animate-in fade-in zoom-in-95 duration-500">
            <div className="h-20 w-20 rounded-full bg-[#00CC88]/20 flex items-center justify-center text-[#00CC88] mx-auto">
              <CheckCircle2 className="h-10 w-10" />
            </div>
            <div className="space-y-2">
              <h2 className="text-2xl font-display font-bold text-white">Answer saved</h2>
              <p className="text-sm text-white/40">Preparing your next question…</p>
            </div>
            <div className="space-y-3">
              <div className="h-1.5 w-full bg-white/5 rounded-full overflow-hidden">
                <div className="h-full bg-[#00CC88] w-[90%] rounded-full animate-pulse" />
              </div>
              <p className="text-[10px] font-mono text-white/20 uppercase tracking-widest">Uploading to secure storage · 248KB of 276KB</p>
            </div>
          </div>
        )}

        {state === "complete" && (
          <div className="max-w-[520px] w-full text-center space-y-10 animate-in fade-in zoom-in-95 duration-700">
            <div className="h-24 w-24 rounded-full bg-[#2D5BFF]/10 flex items-center justify-center text-[#2D5BFF] mx-auto border border-[#2D5BFF]/20 relative">
               <div className="absolute inset-0 bg-[#2D5BFF]/20 rounded-full blur-2xl animate-pulse" />
               <CheckCircle2 className="h-12 w-12 relative z-10" />
            </div>
            <div className="space-y-3">
              <h2 className="text-4xl font-display font-bold text-white tracking-tight">Interview complete</h2>
              <p className="text-base text-white/60">Thanks, Jordan. The AI is now analysing your answers.</p>
            </div>

            <div className="space-y-6 pt-4">
              <div className="flex items-center justify-center gap-3 text-sm font-bold text-white/40">
                <Loader2 className="h-4 w-4 animate-spin" /> Processing…
              </div>

              <div className="p-6 rounded-[24px] bg-white/5 border border-white/5 backdrop-blur-sm space-y-6">
                <div className="space-y-1.5">
                  <p className="text-xs font-bold text-white/80 uppercase tracking-widest">Submission complete</p>
                  <p className="text-base font-semibold text-white">Your interview answers are ready to submit.</p>
                </div>
                <button
                  onClick={() => navigate("/assessment-coding")}
                  className="h-14 w-full bg-[#2D5BFF] text-white font-bold rounded-xl flex items-center justify-center gap-2 hover:bg-[#2D5BFF]/80 transition shadow-xl shadow-[#2D5BFF]/20"
                >
                  Finish and continue with Machine coding round <ArrowRight className="h-4 w-4" />
                </button>
              </div>
            </div>
          </div>
        )}
      </div>
    </CandidateLayout>
  );
};

export default VideoInterview;
