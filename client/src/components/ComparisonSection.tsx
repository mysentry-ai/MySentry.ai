import { Check, X, Zap, Brain, Activity, Heart, Utensils, Shield, Smartphone, Watch } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Link } from "wouter";
import { cn } from "@/lib/utils";

export default function ComparisonSection() {
  const features = [
    {
      category: "Safety & Security",
      items: [
        { name: "Voice-Activated Panic Alarm", mysentry: true, life360: false, senior: "Button Only", wearable: false },
        { name: "One-Tap Panic Button", mysentry: true, life360: true, senior: true, wearable: false },
        { name: "24/7 Professional Monitoring", mysentry: true, life360: "Premium Only", senior: true, wearable: false },
        { name: "Live Video Evidence", mysentry: true, life360: false, senior: false, wearable: false },
        { name: "Crash & Fall Detection", mysentry: true, life360: "Crash Only", senior: "Fall Only", wearable: "Limited" },
      ]
    },
    {
      category: "Connectivity & Response",
      items: [
        { name: "Automated Location Sharing", mysentry: true, life360: true, senior: false, wearable: false },
        { name: "Up to 5 Emergency Contacts", mysentry: true, life360: false, senior: "Limited", wearable: false },
        { name: "Real-Time Health Response", mysentry: true, life360: false, senior: false, wearable: false },
      ]
    },
    {
      category: "Health & Vitals",
      items: [
        { name: "Real-Time Vitals (HR, SpO2)", mysentry: true, life360: false, senior: false, wearable: true },
        { name: "Critical Health Alerts", mysentry: "Active", life360: false, senior: false, wearable: "Passive" },
      ]
    },
    {
      category: "Longevity & Wellness (Coming Soon)",
      items: [
        { name: "AI Health Predictions", mysentry: "coming_soon", life360: false, senior: false, wearable: "Score Only" },
        { name: "Labs & Nutrition Integration", mysentry: "coming_soon", life360: false, senior: false, wearable: false },
        { name: "Mental Wellness Guide", mysentry: "coming_soon", life360: false, senior: false, wearable: "Stress Only" },
      ]
    }
  ];

  const renderCell = (value: boolean | string, isMySentry: boolean = false) => {
    if (value === true) {
      return (
        <div className="flex justify-center">
          <div className={cn(
            "rounded-full p-1",
            isMySentry ? "bg-[#386758] shadow-md scale-110" : "bg-gray-200"
          )}>
            <Check className={cn("w-4 h-4", isMySentry ? "text-white" : "text-gray-500")} strokeWidth={isMySentry ? 4 : 3} />
          </div>
        </div>
      );
    }
    
    if (value === false) {
      return (
        <div className="flex justify-center">
          <div className="w-6 h-6 flex items-center justify-center">
            <X className="w-4 h-4 text-gray-300" />
          </div>
        </div>
      );
    }

    if (value === "coming_soon") {
      return (
        <div className="flex justify-center">
          <span className="inline-flex items-center gap-1 px-2 py-1 rounded-full bg-[#6AD990]/20 text-[#386758] text-[10px] font-bold uppercase tracking-wider border border-[#6AD990]/30">
            <Zap className="w-3 h-3 fill-current" /> Coming Soon
          </span>
        </div>
      );
    }

    return (
      <span className={cn(
        "text-xs font-bold uppercase",
        isMySentry ? "text-[#386758]" : "text-gray-400"
      )}>
        {value}
      </span>
    );
  };

  return (
    <section className="py-24 bg-gray-50 overflow-hidden">
      <div className="container px-4 md:px-6">
        {/* StoryBrand Header */}
        <div className="text-center max-w-4xl mx-auto mb-20">
          <span className="text-[#004F7B] font-bold tracking-widest uppercase text-sm mb-4 block">
            The Clear Choice
          </span>
          <h2 className="text-4xl md:text-6xl font-heading font-bold text-[#1a1a1a] mb-6 leading-tight uppercase tracking-tighter">
            Don't Patch Together <br/>
            <span className="text-gray-400">A Partial Solution.</span>
          </h2>
          <p className="text-xl text-gray-600 leading-relaxed max-w-2xl mx-auto">
            Other apps and devices only solve <strong>one piece of the puzzle</strong>. <br className="hidden md:block" />
            MySentry is the <strong>only</strong> complete system that connects safety, health, and longevity.
          </p>
        </div>

        {/* Comparison Table Card */}
        <div className="max-w-6xl mx-auto bg-white rounded-[2.5rem] shadow-xl border border-gray-100 overflow-hidden relative">
          {/* Decorative Background Elements */}
          <div className="absolute top-0 right-0 w-[500px] h-[500px] bg-[#e8f5e9] rounded-full blur-[100px] opacity-50 pointer-events-none -z-10" />
          
          <div className="p-8 md:p-12 overflow-x-auto">
            <div className="min-w-[800px]">
              {/* Table Header */}
              <div className="grid grid-cols-5 gap-6 mb-8 items-end">
                <div className="col-span-1 pb-4">
                  <h3 className="font-heading font-bold text-2xl text-gray-300 uppercase tracking-tighter leading-none">
                    Compare<br/>Features
                  </h3>
                </div>
                
                {/* MySentry Header - The Hero (Now First) */}
                <div className="col-span-1 relative">
                  <div className="absolute inset-x-0 -top-12 -bottom-4 bg-[#386758]/5 rounded-t-3xl border-t border-x border-[#386758]/10 -z-10" />
                  <div className="text-center pb-4">
                    <div className="absolute -top-16 left-1/2 -translate-x-1/2 bg-[#386758] text-white px-4 py-1 rounded-full text-xs font-bold uppercase tracking-wider shadow-lg whitespace-nowrap">
                      The Vital Companion
                    </div>
                    <div className="w-16 h-16 mx-auto bg-[#386758] rounded-2xl flex items-center justify-center mb-3 shadow-lg shadow-[#386758]/20">
                      <img src="/images/mysentry-logo.png" alt="MySentry" className="w-10 h-10 object-contain" />
                    </div>
                    <div className="font-heading font-bold text-xl text-[#1a1a1a]">MySentry</div>
                    <div className="text-xs font-bold text-[#386758] mt-1 uppercase tracking-wide">All-in-One</div>
                  </div>
                </div>

                {/* Competitor Headers */}
                <div className="col-span-1 text-center pb-4 opacity-60 grayscale transition-all hover:grayscale-0 hover:opacity-100">
                  <div className="w-12 h-12 mx-auto bg-gray-100 rounded-2xl flex items-center justify-center mb-3">
                    <Smartphone className="w-6 h-6 text-gray-500" />
                  </div>
                  <div className="font-bold text-gray-600">Location Apps</div>
                  <div className="text-xs text-gray-400 mt-1">e.g. Life360</div>
                </div>
                
                <div className="col-span-1 text-center pb-4 opacity-60 grayscale transition-all hover:grayscale-0 hover:opacity-100">
                  <div className="w-12 h-12 mx-auto bg-gray-100 rounded-2xl flex items-center justify-center mb-3">
                    <Shield className="w-6 h-6 text-gray-500" />
                  </div>
                  <div className="font-bold text-gray-600">Senior Alerts</div>
                  <div className="text-xs text-gray-400 mt-1">e.g. Medical Guardian</div>
                </div>
                
                <div className="col-span-1 text-center pb-4 opacity-60 grayscale transition-all hover:grayscale-0 hover:opacity-100">
                  <div className="w-12 h-12 mx-auto bg-gray-100 rounded-2xl flex items-center justify-center mb-3">
                    <Watch className="w-6 h-6 text-gray-500" />
                  </div>
                  <div className="font-bold text-gray-600">Wearables</div>
                  <div className="text-xs text-gray-400 mt-1">e.g. Oura, Whoop</div>
                </div>
              </div>

              {/* Table Body */}
              <div className="space-y-10">
                {features.map((section, idx) => (
                  <div key={idx} className="relative">
                    <div className="flex items-center gap-4 mb-6">
                      <div className="h-px flex-1 bg-gray-100" />
                      <span className="text-xs font-bold text-gray-400 uppercase tracking-widest bg-white px-4">
                        {section.category}
                      </span>
                      <div className="h-px flex-1 bg-gray-100" />
                    </div>
                    
                    <div className="space-y-1">
                      {section.items.map((item, i) => (
                        <div key={i} className={cn(
                          "grid grid-cols-5 gap-6 items-center py-4 rounded-xl transition-colors group",
                          i % 2 === 0 ? "bg-gray-50/50" : "bg-white"
                        )}>
                          <div className="col-span-1 pl-4 font-medium text-gray-700 text-sm group-hover:text-[#1a1a1a] transition-colors">
                            {item.name}
                          </div>
                          
                          {/* MySentry Column Background Highlight */}
                          <div className="col-span-1 text-center relative">
                            <div className="absolute inset-0 bg-[#386758]/5 -mx-4 rounded-lg -z-10" />
                            {renderCell(item.mysentry, true)}
                          </div>

                          <div className="col-span-1 text-center">{renderCell(item.life360)}</div>
                          <div className="col-span-1 text-center">{renderCell(item.senior)}</div>
                          <div className="col-span-1 text-center">{renderCell(item.wearable)}</div>
                        </div>
                      ))}
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>

          {/* Bottom CTA Bar */}
          <div className="bg-[#1a1a1a] p-8 md:p-10 text-center relative overflow-hidden">
            <div className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-[#386758] via-[#6AD990] to-[#386758]" />
            <div className="relative z-10 max-w-2xl mx-auto">
              <h3 className="text-2xl md:text-3xl font-heading font-bold text-white mb-4">
                Ready to replace your partial solutions?
              </h3>
              <p className="text-gray-400 mb-8">
                Get 24/7 safety, health monitoring, and peace of mind in one simple app.
              </p>
              <Link href="/pricing" className="inline-flex items-center justify-center bg-[#6AD990] hover:bg-[#5bc482] text-[#1a1a1a] font-bold uppercase tracking-wider px-10 py-5 rounded-full text-lg shadow-lg hover:shadow-[#6AD990]/20 hover:scale-105 transition-all">
                Start Your 7-Day Free Trial
              </Link>
              <p className="text-gray-500 text-xs mt-4 font-medium">
                No credit card required for trial • Cancel anytime
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
