import Layout from "@/components/Layout";
import { Button } from "@/components/ui/button";
import { ArrowRight, Heart, MapPin, Bell, Activity, Smartphone, Users } from "lucide-react";
import { Link } from "wouter";

export default function Families() {
  return (
    <Layout>
      {/* Hero Section */}
      <section className="relative py-20 bg-background overflow-hidden">
        <div className="container grid lg:grid-cols-2 gap-12 items-center">
          <div className="space-y-8 relative z-10">
            <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-secondary/10 text-secondary text-sm font-bold border border-secondary/20">
              <Users className="h-4 w-4" />
              For Families & Caregivers
            </div>
            <h1 className="text-5xl md:text-6xl font-heading font-bold text-primary leading-tight">
              Be There for Them, <br/>
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-primary to-secondary">
                Even When You Can't Be.
              </span>
            </h1>
            <p className="text-xl text-muted-foreground leading-relaxed">
              The distance between you and your loved ones doesn't have to feel so far. MySentry bridges the gap with real-time updates that replace anxiety with assurance.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 pt-4">
              <Link href="/pricing">
                <Button size="lg" className="h-14 px-8 text-lg rounded-full shadow-lg hover:scale-105 transition-transform">
                  Protect My Family
                </Button>
              </Link>
            </div>
          </div>
          
          <div className="relative z-10">
            <div className="relative rounded-3xl overflow-hidden shadow-2xl border border-border">
              <img 
                src="/images/family-connection.png" 
                alt="Family Connection App" 
                className="w-full h-auto"
              />
              {/* Floating UI Element */}
              <div className="absolute top-6 right-6 bg-white/90 backdrop-blur-md p-4 rounded-xl shadow-lg animate-in slide-in-from-top-5 duration-1000">
                <div className="flex items-center gap-3">
                  <div className="h-10 w-10 rounded-full bg-green-100 flex items-center justify-center text-green-600">
                    <Activity className="h-5 w-5" />
                  </div>
                  <div>
                    <p className="text-xs font-bold text-muted-foreground uppercase">Dad's Status</p>
                    <p className="text-sm font-bold text-primary">Active • Heart Rate Normal</p>
                  </div>
                </div>
              </div>
            </div>
            {/* Background Blob */}
            <div className="absolute -z-10 top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[120%] h-[120%] bg-primary/5 rounded-full blur-3xl" />
          </div>
        </div>
      </section>

      {/* The "Sandwich Generation" Problem */}
      <section className="py-24 bg-muted/30">
        <div className="container">
          <div className="max-w-3xl mx-auto text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-heading font-bold text-primary mb-6">
              The Weight of "What If?"
            </h2>
            <p className="text-lg text-muted-foreground">
              You're juggling work, your own kids, and the safety of aging parents. The mental load is exhausting.
            </p>
          </div>
          
          <div className="grid md:grid-cols-3 gap-8">
            {[
              {
                title: "The Missed Call Panic",
                desc: "When they don't answer the phone, your mind goes to the worst-case scenario instantly."
              },
              {
                title: "The Guilt of Distance",
                desc: "Feeling like you should be there more often, but life's demands make it impossible."
              },
              {
                title: "The Silent Health Decline",
                desc: "Not knowing if their health is deteriorating until a major crisis happens."
              }
            ].map((item, idx) => (
              <div key={idx} className="bg-background p-8 rounded-2xl border border-border shadow-sm">
                <div className="h-1 w-12 bg-destructive mb-6 rounded-full" />
                <h3 className="text-xl font-bold text-primary mb-3">{item.title}</h3>
                <p className="text-muted-foreground">{item.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* The Solution: The Care Circle App */}
      <section className="py-24">
        <div className="container">
          <div className="grid lg:grid-cols-2 gap-16 items-center">
            <div className="order-2 lg:order-1 grid grid-cols-2 gap-4">
              <div className="space-y-4 mt-8">
                <div className="bg-primary/5 p-6 rounded-2xl">
                  <MapPin className="h-8 w-8 text-primary mb-4" />
                  <h3 className="font-bold text-primary">Location Tracking</h3>
                  <p className="text-sm text-muted-foreground">Know they are safe at home or see where they are on a walk.</p>
                </div>
                <div className="bg-secondary/10 p-6 rounded-2xl">
                  <Bell className="h-8 w-8 text-secondary mb-4" />
                  <h3 className="font-bold text-primary">Instant Alerts</h3>
                  <p className="text-sm text-muted-foreground">Get notified immediately if a fall is detected or vitals spike.</p>
                </div>
              </div>
              <div className="space-y-4">
                <div className="bg-secondary/10 p-6 rounded-2xl">
                  <Activity className="h-8 w-8 text-secondary mb-4" />
                  <h3 className="font-bold text-primary">Health Trends</h3>
                  <p className="text-sm text-muted-foreground">Spot long-term changes in sleep, activity, and heart health.</p>
                </div>
                <div className="bg-primary/5 p-6 rounded-2xl">
                  <Smartphone className="h-8 w-8 text-primary mb-4" />
                  <h3 className="font-bold text-primary">Care Circle</h3>
                  <p className="text-sm text-muted-foreground">Invite siblings and caregivers to share the monitoring load.</p>
                </div>
              </div>
            </div>
            
            <div className="order-1 lg:order-2 space-y-8">
              <h2 className="text-3xl md:text-4xl font-heading font-bold text-primary">
                Your Window into Their Well-being
              </h2>
              <p className="text-lg text-muted-foreground">
                The MySentry Family App isn't just a dashboard; it's your peace of mind in your pocket. Check in without intruding. Protect without hovering.
              </p>
              <ul className="space-y-4">
                <li className="flex items-center gap-3">
                  <div className="h-6 w-6 rounded-full bg-green-100 text-green-600 flex items-center justify-center">
                    <Heart className="h-3 w-3 fill-current" />
                  </div>
                  <span className="font-medium text-primary">"Mom is up and moving" notifications</span>
                </li>
                <li className="flex items-center gap-3">
                  <div className="h-6 w-6 rounded-full bg-green-100 text-green-600 flex items-center justify-center">
                    <Heart className="h-3 w-3 fill-current" />
                  </div>
                  <span className="font-medium text-primary">Medication reminders and adherence tracking</span>
                </li>
                <li className="flex items-center gap-3">
                  <div className="h-6 w-6 rounded-full bg-green-100 text-green-600 flex items-center justify-center">
                    <Heart className="h-3 w-3 fill-current" />
                  </div>
                  <span className="font-medium text-primary">Direct 2-way communication through the device</span>
                </li>
              </ul>
              <div className="pt-4">
                <Link href="/pricing">
                  <Button size="lg" className="rounded-full px-8">
                    Start Your Family Plan
                  </Button>
                </Link>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Family Pricing Teaser */}
      <section className="py-20 bg-primary text-primary-foreground text-center">
        <div className="container max-w-3xl">
          <h2 className="text-3xl font-heading font-bold mb-6">
            Protection for the Whole Family
          </h2>
          <p className="text-xl text-primary-foreground/80 mb-8">
            Add up to 5 additional family members to your monitoring circle for just pennies a day.
          </p>
          <Link href="/pricing">
            <Button size="lg" variant="secondary" className="h-14 px-10 text-lg rounded-full shadow-xl hover:scale-105 transition-transform">
              See Family Pricing
            </Button>
          </Link>
        </div>
      </section>
    </Layout>
  );
}
