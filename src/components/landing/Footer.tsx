import { Twitter, Linkedin, Github } from "lucide-react";
import { HireIqLogo } from "@/components/HireIqLogo";

export const Footer = () => (
  <footer className="bg-cream-warm border-t border-charcoal/10">
    <div className="container py-16">
      <div className="grid md:grid-cols-4 gap-10">
        <div>
          <HireIqLogo />
          <p className="mt-4 text-lg text-charcoal-muted max-w-[220px]">
            Autonomous hiring for teams who'd rather build than screen.
          </p>
          <div className="mt-5 flex gap-3">
            {[Twitter, Linkedin, Github].map((Icon, i) => (
              <a key={i} href="#" className="h-9 w-9 rounded-full border border-charcoal/15 flex items-center justify-center text-charcoal-muted hover:bg-coral hover:text-cream hover:border-coral transition">
                <Icon className="h-4 w-4" />
              </a>
            ))}
          </div>
        </div>
        <FooterCol title="Product" links={["Resume scoring", "Video interviews", "Coding tests", "Integrations"]} />
        <FooterCol title="Company" links={["About", "Customers", "Careers", "Blog"]} />
        <FooterCol title="Legal" links={["Privacy", "Terms", "DPA", "Security"]} />
      </div>
      <div className="mt-14 pt-6 border-t border-charcoal/10 text-lg text-charcoal-muted text-center">
        © 2025 HireIQ · Built by  HireIQ Partner Solutions · Hyderabad, India
      </div>
    </div>
  </footer>
);

const FooterCol = ({ title, links }: { title: string; links: string[] }) => (
  <div>
    <div className="text-lg font-semibold text-charcoal mb-4">{title}</div>
    <ul className="space-y-2.5">
      {links.map((l) => (
        <li key={l}><a href="#" className="text-lg text-charcoal-muted hover:text-charcoal transition">{l}</a></li>
      ))}
    </ul>
  </div>
);