export default function Projects() {
  const projects = [
    {
      name: "GENESY",
      category: "Branding",
      color: "from-purple-500 to-pink-500",
    },
    {
      name: "ETERY",
      category: "Development",
      color: "from-blue-500 to-cyan-500",
    },
    {
      name: "NEONIX",
      category: "Branding",
      color: "from-green-500 to-emerald-500",
    },
    {
      name: "AVEN",
      category: "UI/UX & Development",
      color: "from-orange-500 to-red-500",
    },
  ];

  return (
    <section id="projects" className="py-20 px-6 bg-black">
      <div className="max-w-7xl mx-auto">
        {/* Section Label */}
        <div className="text-cyan-400 text-sm mb-4 font-mono">
          // Work // Work // Work //
        </div>

        {/* Heading */}
        <h2 className="text-4xl md:text-6xl font-bold mb-16">
          PROJECTS THAT
          <br />
          DELIVERED RESULTS
        </h2>

        {/* Projects Grid */}
        <div className="grid md:grid-cols-2 gap-8">
          {projects.map((project, index) => (
            <div
              key={index}
              className="group relative bg-gray-900/50 border border-gray-800 rounded-2xl overflow-hidden hover:border-cyan-500/50 transition-all cursor-pointer"
            >
              {/* Project Image Placeholder */}
              <div
                className={`h-80 bg-gradient-to-br ${project.color} opacity-20 group-hover:opacity-30 transition-opacity`}
              ></div>

              {/* Project Info */}
              <div className="absolute bottom-0 left-0 right-0 p-8 bg-gradient-to-t from-black to-transparent">
                <div className="text-sm text-cyan-400 mb-2">
                  {project.category}
                </div>
                <h3 className="text-3xl font-bold">{project.name}</h3>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
