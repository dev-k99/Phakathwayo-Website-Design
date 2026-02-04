import { Building2, Paintbrush, Home, Wrench, HardHat, Ruler, Palette, Hammer } from "lucide-react";

const services = [
  {
    icon: Building2,
    title: "Building Construction",
    description: "Complete building projects from foundation to finish with quality craftsmanship.",
  },
  {
    icon: HardHat,
    title: "Civil Engineering",
    description: "Professional civil engineering consulting for residential and commercial projects.",
  },
  {
    icon: Paintbrush,
    title: "Exterior Painting",
    description: "Premium exterior painting services to protect and beautify your property.",
  },
  {
    icon: Wrench,
    title: "Structural Repairs",
    description: "Expert interior and exterior structural repairs to restore integrity.",
  },
  {
    icon: Home,
    title: "Home Additions",
    description: "Expand your living space with professionally designed home additions.",
  },
  {
    icon: Hammer,
    title: "Home Renovations",
    description: "Transform your home with complete renovation and remodeling services.",
  },
  {
    icon: Palette,
    title: "Interior Decorating",
    description: "Beautiful interior design and decorating to create your dream space.",
  },
  {
    icon: Ruler,
    title: "Home Building",
    description: "Build your dream home from the ground up with our expert team.",
  },
];

const Services = () => {
  return (
    <section id="services" className="py-20 lg:py-32 bg-card">
      <div className="container mx-auto px-4">
        {/* Header */}
        <div className="text-center mb-16">
          <span className="text-primary font-semibold uppercase tracking-wider text-sm">What We Do</span>
          <h2 className="font-display text-4xl sm:text-5xl lg:text-6xl text-foreground mt-4 mb-6">
            Our Services
          </h2>
          <p className="text-muted-foreground max-w-2xl mx-auto text-lg">
            From construction to renovation, we provide comprehensive services to bring your vision to life.
          </p>
        </div>

        {/* Services Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {services.map((service, index) => (
            <div
              key={service.title}
              className="group bg-secondary/50 hover:bg-secondary p-6 rounded-lg transition-all duration-300 hover:shadow-card hover:-translate-y-1"
              style={{ animationDelay: `${index * 0.1}s` }}
            >
              <div className="w-14 h-14 bg-primary/10 rounded-lg flex items-center justify-center mb-4 group-hover:bg-primary/20 transition-colors">
                <service.icon className="h-7 w-7 text-primary" />
              </div>
              <h3 className="font-display text-xl text-foreground mb-2">{service.title}</h3>
              <p className="text-muted-foreground text-sm">{service.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Services;
