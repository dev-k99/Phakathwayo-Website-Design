import tileWork from "@/assets/projects/tile-work.jpeg";
import plumbing from "@/assets/projects/plumbing.jpeg";
import jacuzzi from "@/assets/projects/jacuzzi.jpeg";
import interiorRepairs from "@/assets/projects/interior-repairs.jpeg";
import homeAddition from "@/assets/projects/home-addition.jpeg";
import waterFiltration from "@/assets/projects/water-filtration.jpeg";

const projects = [
  {
    image: homeAddition,
    title: "Home Addition Construction",
    category: "Construction",
  },
  {
    image: tileWork,
    title: "Bathroom Tile Work",
    category: "Renovations",
  },
  {
    image: waterFiltration,
    title: "Water Filtration System",
    category: "Plumbing",
  },
  {
    image: plumbing,
    title: "Gas Geyser Installation",
    category: "Plumbing",
  },
  {
    image: jacuzzi,
    title: "Jacuzzi Installation",
    category: "Outdoor",
  },
  {
    image: interiorRepairs,
    title: "Interior Structural Repairs",
    category: "Repairs",
  },
];

const Projects = () => {
  return (
    <section id="projects" className="py-20 lg:py-32 bg-background">
      <div className="container mx-auto px-4">
        {/* Header */}
        <div className="text-center mb-16">
          <span className="text-primary font-semibold uppercase tracking-wider text-sm">Portfolio</span>
          <h2 className="font-display text-4xl sm:text-5xl lg:text-6xl text-foreground mt-4 mb-6">
            Recent Projects
          </h2>
          <p className="text-muted-foreground max-w-2xl mx-auto text-lg">
            Take a look at some of our completed projects showcasing our quality workmanship.
          </p>
        </div>

        {/* Projects Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 lg:gap-8">
          {projects.map((project) => (
            <div
              key={project.title}
              className="group relative overflow-hidden rounded-lg aspect-[4/3] cursor-pointer"
            >
              <img
                src={project.image}
                alt={project.title}
                className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-background via-background/20 to-transparent opacity-80 group-hover:opacity-90 transition-opacity" />
              <div className="absolute bottom-0 left-0 right-0 p-6">
                <span className="text-primary text-sm font-medium uppercase tracking-wider">
                  {project.category}
                </span>
                <h3 className="font-display text-2xl text-foreground mt-1">
                  {project.title}
                </h3>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Projects;
