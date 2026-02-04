import { CheckCircle, Star } from "lucide-react";

const highlights = [
  "Professional & reliable team",
  "Quality workmanship guaranteed",
  "On-time project delivery",
  "Competitive pricing",
  "Licensed & insured",
  "Free project consultations",
];

const About = () => {
  return (
    <section id="about" className="py-20 lg:py-32 bg-card">
      <div className="container mx-auto px-4">
        <div className="grid lg:grid-cols-2 gap-12 lg:gap-20 items-center">
          {/* Left Content */}
          <div>
            <span className="text-primary font-semibold uppercase tracking-wider text-sm">About Us</span>
            <h2 className="font-display text-4xl sm:text-5xl lg:text-6xl text-foreground mt-4 mb-6">
              Building Excellence in Richards Bay
            </h2>
            <p className="text-muted-foreground text-lg mb-6">
              Phakathwayo JMS is a trusted construction company serving Richards Bay and the surrounding KwaZulu-Natal region. With over a decade of experience, we specialize in delivering high-quality construction, renovation, and civil engineering services.
            </p>
            <p className="text-muted-foreground text-lg mb-8">
              Our commitment to excellence has earned us a perfect 5-star rating from our satisfied clients. We take pride in every project, treating each home as if it were our own.
            </p>

            {/* Highlights */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              {highlights.map((item) => (
                <div key={item} className="flex items-center gap-3">
                  <CheckCircle className="h-5 w-5 text-primary flex-shrink-0" />
                  <span className="text-foreground">{item}</span>
                </div>
              ))}
            </div>
          </div>

          {/* Right - Testimonial Card */}
          <div className="relative">
            <div className="bg-secondary rounded-2xl p-8 lg:p-10 shadow-card">
              <div className="flex gap-1 mb-4">
                {[...Array(5)].map((_, i) => (
                  <Star key={i} className="h-6 w-6 fill-accent text-accent" />
                ))}
              </div>
              <blockquote className="text-xl lg:text-2xl text-foreground font-medium mb-6">
                "The work was done on time and with great quality. Highly recommended for any construction or renovation project!"
              </blockquote>
              <div className="flex items-center gap-4">
                <div className="w-12 h-12 bg-primary/20 rounded-full flex items-center justify-center">
                  <span className="font-display text-xl text-primary">A</span>
                </div>
                <div>
                  <div className="font-semibold text-foreground">Verified Client</div>
                  <div className="text-sm text-muted-foreground">Google Review</div>
                </div>
              </div>
            </div>

            {/* Decorative Element */}
            <div className="absolute -top-4 -right-4 w-24 h-24 bg-primary/10 rounded-full blur-2xl" />
            <div className="absolute -bottom-4 -left-4 w-32 h-32 bg-accent/10 rounded-full blur-2xl" />
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
