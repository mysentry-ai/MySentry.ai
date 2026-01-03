import { Check, X, Minus, ArrowRight, Activity, Shield, Zap, Heart, Brain, Utensils } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Link } from "wouter";
import { cn } from "@/lib/utils";

export default function ComparisonSection() {
  const features = [
    {
      category: "Safety & Security",
      items: [
        { name: "24/7 Professional Monitoring", life360: false, senior: true, wearable: false, mysentry: true, longevity: true },
        { name: "Live Video Evidence", life360: false, senior: false, wearable: false, mysentry: true, longevity: true },
        { name: "Crash & Fall Detection", life360: "Crash Only", senior: "Fall Only", wearable: "Limited", mysentry: true, longevity: true },
      ]
    },
    {
      category: "Health & Vitals",
      items: [
        { name: "Real-Time Vitals (HR, SpO2)", life360: false, senior: false, wearable: true, mysentry: true, longevity: true },
        { name: "Critical Health Alerts", life360: false, senior: false, wearable: "Passive", mysentry: "Active", longevity: true },
      ]
    },
    {
      category: "Longevity & Wellness",
      items: [
        { name: "Health Predictions (AI)", life360: false, senior: false, wearable: "Score Only", mysentry: false, longevity: true },
        { name: "Labs & Nutrition Integration", life360: false, senior: false, wearable: false, mysentry: false, longevity: true },
        { name: "Mental Wellness Guide", life360: false, senior: false, wearable: "Stress Only", mysentry: false, longevity: true },
      ]
    }
  ];

  const renderCell = (value: boolean | string) => {
    if (value === true) return <div className="flex justify-center"><div className="bg-[#386758] rounded-full p-1"><Check className="w-4 h-4 text-white" strokeWidth={4} /></div></div>;
    if (value === false) return <div className="flex justify-center"><X className="w-5 h-5 text-gray-300" /></div>;
    return <span className="text-xs font-bold text-gray-500 uppercase">{value}</span>;
  };

  return (
    <section className="py-24 bg-white overflow-hidden">
      <div className="container px-4 md:px-6">
        {/* StoryBrand Header */}
        <div className="text-center max-w-4xl mx-auto mb-16">
          <span className="text-[#004F7B] font-bold tracking-widest uppercase text-sm mb-4 block">
            Stop Piecing It Together
          </span>
          <h2 className="text-4xl md:text-6xl font-heading font-bold text-[#1a1a1a] mb-6 leading-tight uppercase tracking-tighter">
            Why settle for <span className="text-gray-400">partial protection?</span>
          </h2>
          <p className="text-xl text-gray-600 leading-relaxed max-w-2xl mx-auto">
            Life360 tracks location. Oura tracks sleep. Medical alerts track falls. <br className="hidden md:block" />
            <strong>MySentry does it all, saves your life and helps you live longer & healthier.</strong>
          </p>
        </div>

        {/* Comparison Table Container */}
        <div className="relative overflow-x-auto pb-12 -mx-4 px-4 md:mx-0 md:px-0">
          <div className="min-w-[900px]">
            <div className="grid grid-cols-6 gap-4 mb-8 items-end text-center">
              {/* Feature Column Header */}
              <div className="col-span-1 text-left font-bold text-gray-400 text-sm uppercase tracking-wider pb-4 pl-4">
                Features
              </div>

              {/* Competitors */}
              <div className="col-span-1 pb-4">
                <div className="font-bold text-gray-600 mb-1">Life360</div>
                <div className="text-xs text-gray-400">Location Apps</div>
              </div>
              <div className="col-span-1 pb-4">
                <div className="font-bold text-gray-600 mb-1">Senior Apps</div>
                <div className="text-xs text-gray-400">Medical Alerts</div>
              </div>
              <div className="col-span-1 pb-4">
                <div className="font-bold text-gray-600 mb-1">Wearables</div>
                <div className="text-xs text-gray-400">Oura / Whoop</div>
              </div>

              {/* MySentry Complete */}
              <div className="col-span-1 relative bg-[#e8f5e9] rounded-t-2xl pt-8 pb-4 border-t-4 border-[#386758] shadow-[-10px_-10px_30px_rgba(0,0,0,0.05)]">
                <div className="absolute -top-5 left-1/2 -translate-x-1/2 bg-[#386758] text-white px-4 py-1 rounded-full text-xs font-bold uppercase tracking-wider whitespace-nowrap shadow-lg">
                  Best Value
                </div>
                <div className="font-heading font-bold text-xl text-[#1a1a1a] leading-none mb-1">MySentry</div>
                <div className="text-xs font-bold text-[#386758] uppercase tracking-wide">Complete</div>
              </div>

              {/* MySentry Longevity */}
              <div className="col-span-1 relative bg-[#1a1a1a] rounded-t-2xl pt-8 pb-4 border-t-4 border-[#6AD990] shadow-2xl">
                <div className="absolute -top-5 left-1/2 -translate-x-1/2 bg-[#6AD990] text-[#1a1a1a] px-4 py-1 rounded-full text-xs font-bold uppercase tracking-wider whitespace-nowrap shadow-lg flex items-center gap-1">
                  <Zap className="w-3 h-3 fill-current" /> Coming Soon
                </div>
                <div className="font-heading font-bold text-xl text-white leading-none mb-1">MySentry</div>
                <div className="text-xs font-bold text-[#6AD990] uppercase tracking-wide">Longevity</div>
              </div>
            </div>

            {/* Table Body */}
            <div className="space-y-8">
              {features.map((section, idx) => (
                <div key={idx}>
                  <div className="text-sm font-bold text-gray-900 uppercase tracking-widest border-b border-gray-200 pb-2 mb-4 pl-4">
                    {section.category}
                  </div>
                  <div className="space-y-2">
                    {section.items.map((item, i) => (
                      <div key={i} className="grid grid-cols-6 gap-4 items-center py-3 hover:bg-gray-50 rounded-lg transition-colors">
                        <div className="col-span-1 pl-4 font-medium text-gray-700 text-sm">
                          {item.name}
                        </div>
                        <div className="col-span-1 text-center">{renderCell(item.life360)}</div>
                        <div className="col-span-1 text-center">{renderCell(item.senior)}</div>
                        <div className="col-span-1 text-center">{renderCell(item.wearable)}</div>
                        
                        {/* MySentry Complete Column */}
                        <div className={`col-span-1 text-center py-2 ${i % 2 === 0 ? 'bg-[#e8f5e9]/50' : 'bg-[#e8f5e9]/30'} rounded-lg mx-2`}>
                          {renderCell(item.mysentry)}
                        </div>

                        {/* MySentry Longevity Column */}
                        <div className={`col-span-1 text-center py-2 ${i % 2 === 0 ? 'bg-[#1a1a1a]/5' : 'bg-transparent'} rounded-lg mx-2 border-l border-dashed border-gray-200`}>
                          {renderCell(item.longevity)}
                        </div>
                      </div>
                    ))}
                  </div>
                </div>
              ))}
            </div>

            {/* Table Footer / CTAs */}
            <div className="grid grid-cols-6 gap-4 mt-8 items-start">
              <div className="col-span-1"></div>
              <div className="col-span-3 text-center text-sm text-gray-400 pt-4">
                *Competitor features based on standard plans.
              </div>
              
              {/* MySentry Complete CTA */}
              <div className="col-span-1 px-2">
                <Link href="/pricing" className="inline-flex items-center justify-center w-full bg-[#386758] hover:bg-[#2d5246] text-white font-bold uppercase tracking-wider py-6 rounded-md shadow-lg hover:shadow-xl transition-all hover:-translate-y-1 h-14">
                  Start Free Trial
                </Link>
                <p className="text-center text-xs text-gray-500 mt-2 font-medium">
                  7-Day Free Trial
                </p>
              </div>

              {/* MySentry Longevity CTA */}
              <div className="col-span-1 px-2">
                <Button disabled className="w-full bg-gray-900 text-gray-400 font-bold uppercase tracking-wider py-6 border border-gray-800 cursor-not-allowed opacity-80">
                  Join Waitlist
                </Button>
                <p className="text-center text-xs text-[#6AD990] mt-2 font-bold uppercase tracking-wide">
                  Coming 2026
                </p>
              </div>
            </div>
          </div>
        </div>

        {/* Longevity Teaser Card */}
        <div className="mt-20 max-w-5xl mx-auto bg-[#1a1a1a] rounded-[2.5rem] p-8 md:p-12 relative overflow-hidden shadow-2xl">
          <div className="absolute top-0 right-0 w-[600px] h-[600px] bg-[#6AD990] opacity-10 blur-[120px] rounded-full pointer-events-none" />
          
          <div className="relative z-10 grid md:grid-cols-2 gap-12 items-center">
            <div>
              <div className="inline-flex items-center gap-2 bg-[#6AD990] text-[#1a1a1a] px-4 py-1.5 rounded-full text-xs font-bold uppercase tracking-wider mb-6">
                <Zap className="w-4 h-4 fill-current" />
                The Future of Health
              </div>
              <h3 className="text-4xl md:text-5xl font-heading font-bold text-white mb-6 leading-tight">
                MySentry <span className="text-[#6AD990]">Longevity</span>
              </h3>
              <p className="text-xl text-gray-400 mb-8 leading-relaxed">
                Imagine a system that doesn't just save your life in an emergency, but helps you live longer. Personalized AI health predictions, lab integration, and wellness coaching—all in one place.
              </p>
              
              <div className="space-y-4">
                {[
                  { icon: Brain, text: "AI Health Predictions" },
                  { icon: Activity, text: "Labs & Bloodwork Integration" },
                  { icon: Utensils, text: "Nutrition & Activity Guides" },
                  { icon: Heart, text: "Mental Wellness Coaching" }
                ].map((feature, i) => (
                  <div key={i} className="flex items-center gap-4 text-gray-300">
                    <div className="w-10 h-10 rounded-full bg-white/10 flex items-center justify-center">
                      <feature.icon className="w-5 h-5 text-[#6AD990]" />
                    </div>
                    <span className="font-medium">{feature.text}</span>
                  </div>
                ))}
              </div>
            </div>

            <div className="relative">
              <div className="aspect-square rounded-3xl bg-gradient-to-br from-gray-800 to-black border border-gray-700 p-8 flex flex-col justify-between relative overflow-hidden group">
                <div className="absolute inset-0 bg-[url('https://images.unsplash.com/photo-1576091160399-112ba8d25d1d?q=80&w=2670&auto=format&fit=crop')] opacity-20 bg-cover bg-center mix-blend-overlay transition-opacity duration-700 group-hover:opacity-30" />
                
                <div className="relative z-10">
                  <div className="flex justify-between items-start mb-8">
                    <Activity className="w-12 h-12 text-[#6AD990]" />
                    <span className="text-xs font-bold text-gray-500 uppercase tracking-widest border border-gray-600 px-3 py-1 rounded-full">
                      Preview
                    </span>
                  </div>
                  
                  <div className="space-y-2">
                    <div className="text-sm text-gray-400 uppercase tracking-wider">Daily Prediction</div>
                    <div className="text-3xl font-bold text-white">
                      Optimal Recovery
                    </div>
                    <p className="text-gray-400 text-sm leading-relaxed">
                      Based on your HRV and sleep data, today is a prime day for high-intensity training. Your cardiovascular readiness is at 94%.
                    </p>
                  </div>
                </div>

                <div className="mt-8 pt-8 border-t border-gray-700/50 flex justify-between items-center">
                  <div className="text-xs text-gray-500">Powered by MySentry AI</div>
                  <div className="w-2 h-2 rounded-full bg-[#6AD990] animate-pulse" />
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
