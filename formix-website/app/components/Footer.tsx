export default function Footer() {
  const navigation = [
    "Services",
    "Why Us",
    "Benefits",
    "Work",
    "Pricing",
    "Reviews",
    "FAQs"
  ];

  const socials = [
    { name: "X/Twitter", link: "#" },
    { name: "LinkedIn", link: "#" },
    { name: "YouTube", link: "#" }
  ];

  const scrollToSection = (id: string) => {
    const element = document.getElementById(id.toLowerCase().replace(/\s+/g, "-"));
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <footer className="border-t border-white/10 py-16 px-6">
      <div className="max-w-7xl mx-auto">
        {/* Main Footer Content */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 mb-12">
          {/* Brand Section */}
          <div className="lg:col-span-2">
            <h2 className="text-2xl font-bold mb-4">FORMIX</h2>
            <p className="text-lg font-semibold mb-4">
              WORLD-CLASS DESIGN PARTNER FOR STARTUPS
            </p>
            <p className="text-white/60">
              Fast, reliable, and scalable design solutions tailored for your growing startup.
            </p>
          </div>

          {/* Navigation */}
          <div>
            <h3 className="font-semibold mb-4">NAVIGATION</h3>
            <ul className="space-y-3">
              {navigation.map((item, index) => (
                <li key={index}>
                  <button
                    onClick={() => scrollToSection(item.toLowerCase().replace(/\s+/g, "-"))}
                    className="text-white/60 hover:text-white transition-colors text-left"
                  >
                    {item}
                  </button>
                </li>
              ))}
            </ul>
          </div>

          {/* Socials */}
          <div>
            <h3 className="font-semibold mb-4">SOCIALS</h3>
            <ul className="space-y-3">
              {socials.map((social, index) => (
                <li key={index}>
                  <a
                    href={social.link}
                    className="text-white/60 hover:text-white transition-colors"
                  >
                    {social.name}
                  </a>
                </li>
              ))}
            </ul>
          </div>
        </div>

        {/* Newsletter */}
        <div className="border-t border-white/10 pt-12 mb-12">
          <div className="max-w-md">
            <h3 className="font-semibold mb-4">JOIN 5K+ READERS</h3>
            <div className="flex gap-4">
              <input
                type="email"
                placeholder="Enter your email"
                className="flex-1 px-6 py-3 bg-white/5 border border-white/10 rounded-full focus:border-white/30 focus:outline-none transition-colors"
              />
              <button className="px-6 py-3 bg-white text-black font-semibold rounded-full hover:bg-white/90 transition-all hover:scale-105">
                Subscribe
              </button>
            </div>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="border-t border-white/10 pt-8 flex flex-col md:flex-row justify-between items-center gap-4 text-sm text-white/60">
          <div className="flex flex-wrap gap-6 items-center">
            <span>©2025 Formix.</span>
            <span>Designed By Marso</span>
            <a href="#" className="hover:text-white transition-colors">
              Privacy Policy
            </a>
            <a href="#" className="hover:text-white transition-colors">
              Terms of Service
            </a>
          </div>
          <button className="px-6 py-2 border border-white/20 rounded-full hover:bg-white/5 transition-all">
            Buy Template
          </button>
        </div>
      </div>
    </footer>
  );
}
