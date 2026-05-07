import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { BrowserRouter, Route, Routes, Navigate } from "react-router-dom";
import { Toaster as Sonner } from "@/components/ui/sonner";
import { Toaster } from "@/components/ui/toaster";
import { TooltipProvider } from "@/components/ui/tooltip";
import ScrollToTop from "@/components/ScrollToTop";
import Index from "./pages/Index";
import NotFound from "./pages/NotFound";
import Login from "./pages/Login";
import Onboarding from "./pages/Onboarding";
import Dashboard from "./pages/Dashboard";

// Recruiter Pages
import JobsList from "./pages/recruiter/JobsList";
import CreateJobWizard from "./pages/recruiter/CreateJobWizard";
import JobDetails from "./pages/recruiter/JobDetails";
import PipelineView from "./pages/recruiter/PipelineView";
import CandidateProfile from "./pages/recruiter/CandidateProfile";
import ReviewQueue from "./pages/recruiter/ReviewQueue";
import Settings from "./pages/recruiter/Settings";

// Candidate Pages
import CandidateLanding from "./pages/candidate/CandidateLanding";
import CandidateLogin from "./pages/candidate/CandidateLogin";
import CandidateJobs from "./pages/candidate/CandidateJobs";
import CandidateMailbox from "./pages/candidate/CandidateMailbox";
import ApplicationTracking from "./pages/candidate/ApplicationTracking";
import ApplyPage from "./pages/candidate/ApplyPage";
import DeviceCheck from "./pages/candidate/DeviceCheck";
import PracticeQuestion from "./pages/candidate/PracticeQuestion";
import VideoInterview from "./pages/candidate/VideoInterview";
import AssessmentMCQ from "./pages/candidate/AssessmentMCQ";
import AssessmentCoding from "./pages/candidate/AssessmentCoding";
import SubmissionDone from "./pages/candidate/SubmissionDone";

const queryClient = new QueryClient();

const App = () => (
  <QueryClientProvider client={queryClient}>
    <TooltipProvider>
      <Toaster />
      <Sonner />
      <BrowserRouter>
        <ScrollToTop />
        <Routes>
          <Route path="/" element={<Index />} />
          <Route path="/login" element={<Login />} />
          <Route path="/onboarding" element={<Onboarding />} />
          <Route path="/dashboard" element={<Dashboard />} />

          {/* Recruiter Routes */}
          <Route path="/jobs" element={<JobsList />} />
          <Route path="/jobs/new" element={<CreateJobWizard />} />
          <Route path="/jobs/edit/:id" element={<CreateJobWizard />} />
          <Route path="/jobs/:id" element={<JobDetails />} />
          <Route path="/jobs/:id/pipeline" element={<PipelineView />} />
          <Route path="/candidates/:id" element={<CandidateProfile />} />
          <Route path="/review" element={<ReviewQueue />} />
          <Route path="/settings" element={<Settings />} />

          {/* Candidate Routes */}
          <Route
            path="/candidate"
            element={<Navigate to="/candidate/landing" replace />}
          />
          <Route path="/candidate/landing" element={<CandidateLanding />} />
          <Route path="/candidate/login" element={<CandidateLogin />} />
          <Route
            path="/candidate/dashboard"
            element={<Navigate to="/candidate/jobs" replace />}
          />
          <Route path="/candidate/jobs" element={<CandidateJobs />} />
          <Route path="/candidate/mailbox" element={<CandidateMailbox />} />
          <Route path="/candidate/tracking" element={<ApplicationTracking />} />

          <Route path="/apply/:jobId" element={<ApplyPage />} />
          <Route path="/device-check" element={<DeviceCheck />} />
          <Route path="/device-check/:step" element={<DeviceCheck />} />
          <Route path="/practice" element={<PracticeQuestion />} />
          <Route path="/interview" element={<VideoInterview />} />
          <Route path="/assessment-mcq" element={<AssessmentMCQ />} />
          <Route path="/assessment-coding" element={<AssessmentCoding />} />
          <Route path="/submission-done" element={<SubmissionDone />} />
          <Route path="/submission-done/:step" element={<SubmissionDone />} />

          {/* ADD ALL CUSTOM ROUTES ABOVE THE CATCH-ALL "*" ROUTE */}
          <Route path="*" element={<NotFound />} />
        </Routes>
      </BrowserRouter>
    </TooltipProvider>
  </QueryClientProvider>
);

export default App;
