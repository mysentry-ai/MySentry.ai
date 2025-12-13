import Layout from "@/components/Layout";
import { Button } from "@/components/ui/button";
import { ArrowRight, Heart, ShieldCheck, Battery, Wifi, Phone, UserCheck } from "lucide-react";
import { Link } from "wouter";

export default function Seniors() {
  return (
    <Layout>
      {/* Hero Section */}
      <section className="relative min-h-[80vh] flex items-center bg-background overflow-hidden">
        <div className="container grid lg:grid-cols-2 gap-12 items-center py-20">
          <div className="order-2 lg:order-1 relative z-10">
            <div className="relative rounded-[2rem] overflow-hidden shadow-2xl border-4 border-white">
              <img 
                src="/images/hero-senior-monitoring.png" 
                alt="Senior Independence" 
                className="w-full h-auto transform hover:scale-105 transition-transform duration-700"
              />
              <div className="absolute bottom-0 left-0 right-0 bg-gradient-to-t from-black/70 to-transparent p-8">
                <p className="text-white font-medium italic">"I don't feel watched. I feel safe."</p>
                <p className="text-white/80 text-sm mt-1">— Martha, 78</p>
              </div>
            </div>
          </div>
          
          <div className="order-1 lg:order-2 space-y-8">
            <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-primary/10 text-primary text-sm font-bold">
              <Heart className="h-4 w-4 fill-current" />
              Independence, Not Surveillance
            </div>
            <h1 className="text-5xl md:text-6xl font-heading font-bold text-primary leading-tight">
              Stay in the Home <br/>
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-primary to-secondary">
                You Love.
              </span>
            </h1>
            <p className="text-xl text-muted-foreground leading-relaxed">
              Aging doesn't mean giving up your freedom. MySentry is the invisible safety net that lets you live life on your terms, knowing help is always there if you need it.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 pt-4">
              <Link href="/pricing">
                <Button size="lg" className="h-14 px-8 text-lg rounded-full shadow-lg hover:scale-105 transition-transform">
                  Get MySentry Today
                </Button>
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* Features Grid */}
      <section className="py-24 bg-muted/30">
        <div className="container">
          <div className="text-center max-w-3xl mx-auto mb-16">
            <h2 className="text-3xl md:text-4xl font-heading font-bold text-primary mb-6">
              Designed for Dignity
            </h2>
            <p className="text-lg text-muted-foreground">
              Traditional medical alerts are bulky, stigmatizing, and complicated. MySentry is different.
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            {[
              {
                icon: ShieldCheck,
                title: "Discreet Design",
                desc: "Looks like a modern smartwatch or jewelry, not a medical device. Wear it with pride."
              },
              {
                icon: Battery,
                title: "Long Battery Life",
                desc: "Go days without charging. We'll even remind you when it's time to plug in."
              },
              {
                icon: Wifi,
                title: "Works Everywhere",
                desc: "Cellular connection means you're protected at home, in the garden, or at the store."
              },
              {
                icon: Phone,
                title: "Two-Way Voice",
                desc: "Speak directly to our care team through the device in an emergency."
              },
              {
                icon: UserCheck,
                title: "Fall Detection",
                desc: "Automatically calls for help if a fall is detected, even if you can't press the button."
              },
              {
                icon: Heart,
                title: "Health Insights",
                desc: "Tracks heart rate and activity to spot potential health issues early."
              }
            ].map((feature, idx) => (
              <div key={idx} className="bg-background p-8 rounded-2xl border border-border hover:border-primary/30 transition-colors">
                <div className="h-12 w-12 rounded-xl bg-secondary/10 text-secondary flex items-center justify-center mb-6">
                  <feature.icon className="h-6 w-6" />
                </div>
                <h3 className="text-xl font-bold text-primary mb-3">{feature.title}</h3>
                <p className="text-muted-foreground">{feature.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* How It Works (StoryBrand: The Plan) */}
      <section className="py-24">
        <div className="container">
          <div className="grid md:grid-cols-2 gap-16 items-center">
            <div className="space-y-8">
              <h2 className="text-3xl md:text-4xl font-heading font-bold text-primary">
                Simple enough for anyone. <br/>
                Powerful enough for everyone.
              </h2>
              <div className="space-y-8">
                {[
                  {
                    step: "1",
                    title: "Put it On",
                    desc: "Wear it as a watch or pendant. It's comfortable and water-resistant."
                  },
                  {
                    step: "2",
                    title: "Live Your Life",
                    desc: "Go for walks, visit friends, or relax. We monitor silently in the background."
                  },
                  {
                    step: "3",
                    title: "Help is Instant",
                    desc: "Press the button or let fall detection alert us. We stay on the line until you're safe."
                  }
                ].map((item, idx) => (
                  <div key={idx} className="flex gap-6">
                    <div className="flex-shrink-0 h-12 w-12 rounded-full bg-primary text-primary-foreground font-bold text-xl flex items-center justify-center">
                      {item.step}
                    </div>
                    <div>
                      <h3 className="text-xl font-bold text-primary mb-2">{item.title}</h3>
                      <p className="text-muted-foreground">{item.desc}</p>
                    </div>
                  </div>
                ))}
              </div>
            </div>
            <div className="relative">
              <div className="absolute inset-0 bg-secondary/20 rounded-full blur-3xl transform translate-x-10 translate-y-10" />
              <img 
                src="/images/fall-detection-tech.png" 
                alt="Fall Detection Technology" 
                className="relative z-10 rounded-2xl shadow-2xl border border-border"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Testimonial */}
      <section className="py-20 bg-primary text-primary-foreground text-center">
        <div className="container max-w-4xl">
          <div className="mb-8 text-secondary">
            {[1, 2, 3, 4, 5].map((i) => (
              <span key={i} className="text-3xl">★</span>
            ))}
          </div>
          <blockquote className="text-2xl md:text-3xl font-heading font-medium leading-relaxed mb-8">
            "My kids were worried sick about me living alone. I refused to move to a home. MySentry was the compromise, and honestly? I forget I'm even wearing it. But I sleep better knowing it's there."
          </blockquote>
          <cite className="not-italic text-lg opacity-80 block">— Robert T., 82, Florida</cite>
        </div>
      </section>

      {/* CTA */}
      <section className="py-24 text-center bg-background">
        <div className="container">
          <h2 className="text-3xl md:text-4xl font-heading font-bold text-primary mb-6">
            Reclaim Your Independence
          </h2>
          <p className="text-xl text-muted-foreground mb-8 max-w-2xl mx-auto">
            Don't let fear dictate your life. Get the protection you need to live freely.
          </p>
          <Link href="/pricing">
            <Button size="lg" className="h-14 px-10 text-lg rounded-full shadow-lg hover:scale-105 transition-transform">
              View Plans & Pricing
            </Button>
          </Link>
        </div>
      </section>
    </Layout>
  );
}
