import { Heart, Award, Users, Utensils } from "lucide-react";
import ScrollReveal from "@/components/ScrollReveal";
import gallery1 from "@/assets/gallery-1.jpg";
import gallery2 from "@/assets/gallery-2.jpg";
import heroImage from "@/assets/hero-food.jpg";
import { siteConfig as c } from "@/config/site";

const icons = [Heart, Award, Users, Utensils];

const values = c.about.values.map((v, i) => ({
  ...v,
  icon: icons[i],
}));

const AboutPage = () => (
  <div className="pt-28 pb-20">
    <div className="container">
      <ScrollReveal>
        <div className="text-center mb-16">
          <span className="text-primary text-sm font-semibold tracking-widest uppercase">About Us</span>
          <h1 className="text-4xl md:text-5xl font-display font-bold mt-2">Our Story</h1>
          <p className="text-muted-foreground mt-3 max-w-md mx-auto">{c.about.subtitle}</p>
          <div className="section-divider max-w-xs mx-auto mt-6" />
        </div>
      </ScrollReveal>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center mb-24 max-w-5xl mx-auto">
        <ScrollReveal direction="left">
          <div className="relative">
            <img src={gallery1} alt="restaurant interior" className="rounded-2xl w-full h-80 object-cover object-center shadow-xl" loading="lazy" />
            <img src={gallery2} alt="Chef preparing food" className="absolute -bottom-6 -right-4 w-40 h-40 object-cover object-center rounded-2xl border-4 border-background shadow-lg hidden md:block" loading="lazy" />
          </div>
        </ScrollReveal>
        <ScrollReveal direction="right">
          <div className="space-y-5 text-muted-foreground leading-relaxed">
            <p>{c.about.story[0]}</p>
            <p>{c.about.story[1]}</p>
            <p className="font-medium text-foreground">{c.about.story[2]}</p>
          </div>
        </ScrollReveal>
      </div>

      {/* Full-width image banner (Now much taller) */}
      <ScrollReveal>
        <div className="relative rounded-2xl overflow-hidden mb-24 h-96 md:h-[500px] max-w-5xl mx-auto">
          <img src={heroImage} alt="food spread" className="w-full h-full object-cover object-center" loading="lazy" />
          <div className="absolute inset-0 bg-gradient-to-r from-foreground/60 to-transparent flex items-center">
            <div className="p-8 md:p-12 max-w-md">
              <h2 className="text-3xl font-display font-bold text-primary-foreground mb-2">{c.about.bannerHeadline}</h2>
              <p className="text-primary-foreground/70">{c.about.bannerSub}</p>
            </div>
          </div>
        </div>
      </ScrollReveal>

      {/* Values */}
      <ScrollReveal>
        <div className="text-center mb-12">
          <span className="text-primary text-sm font-semibold tracking-widest uppercase">Our Values</span>
          <h2 className="text-3xl md:text-4xl font-display font-bold mt-2">{c.about.valuesHeading}</h2>
          <div className="section-divider max-w-xs mx-auto mt-4" />
        </div>
      </ScrollReveal>
      <div className="grid grid-cols-1 sm:grid-cols-2 gap-6 max-w-4xl mx-auto">
        {values.map((v, i) => (
          <ScrollReveal key={v.title} delay={i * 0.1}>
            <div className="p-8 rounded-2xl bg-card border border-border card-hover group">
              <div className="w-14 h-14 rounded-2xl bg-primary/10 flex items-center justify-center mb-5 group-hover:bg-primary/20 transition-colors">
                <v.icon size={24} className="text-primary" />
              </div>
              <h3 className="font-display font-bold text-lg mb-2">{v.title}</h3>
              <p className="text-sm text-muted-foreground leading-relaxed">{v.desc}</p>
            </div>
          </ScrollReveal>
        ))}
      </div>
    </div>
  </div>
);

export default AboutPage;
