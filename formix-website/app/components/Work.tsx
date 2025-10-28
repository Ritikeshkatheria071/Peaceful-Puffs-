export default function Work() {
  const projects = [
    {
      name: "GENESY",
      category: "Branding",
      color: "from-purple-500/20 to-pink-500/20"
    },
    {
      name: "ETERY",
      category: "Development",
      color: "from-blue-500/20 to-cyan-500/20"
    },
    {
      name: "NEONIX",
      category: "Branding",
      color: "from-green-500/20 to-emerald-500/20"
    },
    {
      name: "AVEN",
      category: "UI/UX & Development",
      color: "from-orange-500/20 to-red-500/20"
    }
  ];

  return (
    <section id="work" className="py-20 px-6 bg-white/5">
      <div className="max-w-7xl mx-auto">
        {/* Section Divider */}
        <div className="text-center mb-12">
          <span className="text-white/40 text-sm tracking-widest">// WORK //</span>
        </div>

        {/* Section Header */}
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl lg:text-6xl font-bold tracking-tight">
            PROJECTS THAT DELIVERED RESULTS.
          </h2>
        </div>

        {/* Projects Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {projects.map((project, index) => (
            <div
              key={index}
              className="group relative overflow-hidden rounded-2xl border border-white/10 hover:border-white/30 transition-all cursor-pointer"
            >
              {/* Project Image Placeholder */}
              <div className={`aspect-video bg-gradient-to-br ${project.color} flex items-center justify-center`}>
                <div className="text-6xl font-bold text-white/20">
                  {project.name[0]}
                </div>
              </div>

              {/* Project Info */}
              <div className="p-6 bg-black/50 backdrop-blur-sm">
                <h3 className="text-2xl font-bold mb-2">
                  {project.name}
                </h3>
                <p className="text-white/60">
                  {project.category}
                </p>
              </div>

              {/* Hover Overlay */}
              <div className="absolute inset-0 bg-white/5 opacity-0 group-hover:opacity-100 transition-opacity" />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
