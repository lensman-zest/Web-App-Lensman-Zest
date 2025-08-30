export default function Footer() {
  const sections = [
    {
      title: "Products",
      links: ["Houdini", "Houdini Engine", "Houdini Indie"],
    },
    {
      title: "Learn",
      links: ["Talks & Webinars", "Education Programs"],
    },
    {
      title: "Support",
      links: [
        "Customer Support",
        "Help Desk (FAQ)",
        "System Requirements",
        "Documentation",
        "Report a Bug - RFE",
      ],
    },
    {
      title: "Legal",
      links: [
        "Terms of Use",
        "Privacy Policy",
        "License Agreement",
        "Accessibility",
        "Responsible Disclosure",
      ],
    },
    {
      title: "Company",
      links: ["About SideFX", "Careers", "Press", "Internships", "Contact Info"],
    },
  ];

  return (
    <footer className="bg-[#1B1B1F] text-[#A8A8A8] px-4 sm:px-6 xl:px-12 py-16">
      <div className="max-w-7xl mx-auto grid grid-cols-2 sm:grid-cols-3 xl:grid-cols-5 gap-8">
        {sections.map((section, i) => (
          <div key={i}>
            <h4 className="text-white font-semibold mb-4 uppercase tracking-wide text-sm">
              {section.title}
            </h4>
            <ul className="space-y-2 text-sm">
              {section.links.map((link, j) => (
                <li key={j}>
                  <a
                    href="#"
                    className="hover:text-[#B84A39] transition-colors"
                  >
                    {link}
                  </a>
                </li>
              ))}
            </ul>
          </div>
        ))}
      </div>

      {/* Optional bottom bar */}
      <div className="mt-12 text-center text-xs text-[#666]">
        © {new Date().getFullYear()} Lensman Zest · All rights reserved.
      </div>
    </footer>
  );
}
