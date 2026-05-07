import { Twitter, Linkedin, Github } from "lucide-react";
import { HireIqLogo } from "@/components/HireIqLogo";

export const Footer = () => (
  <footer className="bg-charcoal text-white border-t border-charcoal/10">
    <div className="container py-16">
      <div className="grid md:grid-cols-4 gap-10">
        <div>
          <HireIqLogo variant="light" />
          <p className="mt-4 text-sm text-white/60 max-w-[220px] leading-relaxed">
            Autonomous hiring for teams who&apos;d rather build than screen.
          </p>
          <div className="mt-5 flex gap-3">
            {[Twitter, Linkedin, Github].map((Icon, i) => (
              <a
                key={i}
                href="#"
                className="h-9 w-9 rounded-full border border-white/15 flex items-center justify-center text-white/60 hover:bg-coral hover:text-white hover:border-coral transition"
              >
                <Icon className="h-4 w-4" />
              </a>
            ))}
          </div>
        </div>
        <FooterCol
          title="Product"
          links={[
            "Resume scoring",
            "Video interviews",
            "Coding tests",
            "Integrations",
          ]}
        />
        <FooterCol
          title="Company"
          links={["About", "Customers", "Careers", "Blog"]}
        />
        <FooterCol
          title="Legal"
          links={["Privacy", "Terms", "DPA", "Security"]}
        />
      </div>
      <div className="mt-14 pt-6 border-t border-white/10 text-xs text-white/50 text-center">
        © 2025 HireIQ · Built by HireIQ Partner Solutions · Hyderabad, India
      </div>
    </div>
  </footer>
);

const FooterCol = ({ title, links }) => (
  <div>
    <div className="text-[11px] font-bold uppercase tracking-[0.2em] text-coral mb-4">
      {title}
    </div>
    <ul className="space-y-2.5">
      {links.map((l) => (
        <li key={l}>
          <a
            href="#"
            className="text-sm text-white/70 hover:text-white transition"
          >
            {l}
          </a>
        </li>
      ))}
    </ul>
  </div>
);
