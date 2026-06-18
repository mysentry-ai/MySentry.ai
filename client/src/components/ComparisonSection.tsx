import { Check, X, Info, Smartphone } from "lucide-react";
import { Link } from "wouter";
import {
  Tooltip,
  TooltipContent,
  TooltipProvider,
  TooltipTrigger,
} from "@/components/ui/tooltip";

export default function ComparisonSection() {
  const features = [
    {
      category: "SAFETY, HEALTH & MONITORING",
      color: "bg-blue-50",
      headerColor: "text-blue-900",
      items: [
        {
          name: "Real-Time Health Monitoring",
          mysentry: true,
          life360: false,
          medical: false,
          wearables: true,
          tooltip: "Continuously tracks vital signs like heart rate and alerts you to irregularities."
        },
        {
          name: "Voice-Activated Panic Alarm",
          mysentry: true,
          life360: false,
          medical: "BUTTON ONLY",
          wearables: false,
          tooltip: "Trigger a silent alarm just by speaking a safe phrase, even if you can't reach your phone."
        },
        {
          name: "One-Tap Panic Button (Phone & Watch)",
          mysentry: true,
          life360: true,
          medical: true,
          wearables: false,
          tooltip: "Instant help button available on both your smartphone and smartwatch."
        },
        {
          name: "24/7 Professional Monitoring",
          mysentry: true,
          life360: "PREMIUM ONLY",
          medical: true,
          wearables: false,
          tooltip: "Live agents monitor alerts 24/7 and can dispatch emergency services immediately."
        },
        {
          name: "Live Video Evidence",
          mysentry: true,
          life360: false,
          medical: false,
          wearables: false,
          tooltip: "Automatically streams live video to monitoring agents when an alarm is triggered."
        },
        {
          name: "Crash & Fall Detection",
          mysentry: true,
          life360: "CRASH ONLY",
          medical: "FALL ONLY",
          wearables: "LIMITED",
          tooltip: "Detects severe car crashes and hard falls, automatically calling for help if you're unresponsive."
        }
      ]
    },
    {
      category: "CONNECTIVITY",
      color: "bg-purple-50",
      headerColor: "text-purple-900",
      items: [
        {
          name: "Bring Your Own Device (Apple/Samsung)",
          mysentry: true,
          life360: true,
          medical: false,
          wearables: "LIMITED",
          tooltip: "Works with the smartwatch and phone you already own. No need to buy bulky specialized hardware."
        },
        {
          name: "Automated Location Sharing",
          mysentry: true,
          life360: true,
          medical: false,
          wearables: false,
          tooltip: "Automatically shares your real-time location with emergency contacts during an alert."
        },
        {
          name: "Emergency Contacts",
          mysentry: "UP TO 5",
          life360: "CIRCLES",
          medical: "LIMITED",
          wearables: "VARIES",
          tooltip: "Notify up to 5 trusted contacts instantly with your location and status."
        },
        {
          name: "Smart Ring/Band Integration",
          mysentry: "COMING SOON",
          life360: false,
          medical: false,
          wearables: true,
          tooltip: "Future support for Oura Ring, Whoop, and other smart wearables."
        }
      ]
    },
    {
      category: "LONGEVITY & WELLNESS",
      color: "bg-green-50",
      headerColor: "text-green-900",
      items: [
        {
          name: "Labs Integration",
          mysentry: "COMING SOON",
          life360: false,
          medical: false,
          wearables: false,
          tooltip: "Connect your lab results for a comprehensive view of your health trends."
        },
        {
          name: "Nutrition Guide",
          mysentry: "COMING SOON",
          life360: false,
          medical: false,
          wearables: "LIMITED",
          tooltip: "Personalized nutrition advice based on your health data and goals."
        },
        {
          name: "Physical Activity Guide",
          mysentry: "COMING SOON",
          life360: false,
          medical: false,
          wearables: true,
          tooltip: "Tailored workout plans and activity tracking to keep you moving safely."
        },
        {
          name: "Mental Wellness Guide",
          mysentry: "COMING SOON",
          life360: false,
          medical: false,
          wearables: "LIMITED",
          tooltip: "Resources and tracking for stress management and mental well-being."
        }
      ]
    }
  ];

  const renderCell = (value: boolean | string) => {
    if (value === true) {
      return (
        <div className="flex justify-center">
          <div className="bg-primary rounded-full p-1">
            <Check className="w-6 h-6 text-white stroke-[3]" />
          </div>
        </div>
      );
    }
    if (value === false) {
      return <X className="w-6 h-6 text-gray-300 mx-auto" />;
    }
    return (
      <span className={`text-sm font-bold uppercase tracking-wider ${
        value === "COMING SOON" ? "text-primary bg-primary/10 px-2 py-1 rounded text-xs" : "text-gray-500"
      }`}>
        {value}
      </span>
    );
  };

  return (
    <section className="py-24 bg-white">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-black text-gray-900 mb-6 tracking-tight">
            COMPARE THE VALUE
          </h2>
          <p className="text-xl text-gray-600 max-w-2xl mx-auto">
            See why MySentry is the only complete safety and health solution for you and your family.
          </p>
        </div>

        <div className="overflow-x-auto pb-8">
          <div className="min-w-[900px]">
            {/* Header Row */}
            <div className="grid grid-cols-5 gap-4 mb-8 items-end">
              <div className="col-span-1 text-left pb-4">
                <h3 className="text-2xl font-black text-gray-900 uppercase tracking-tighter leading-none">
                  COMPARE<br />FEATURES
                </h3>
              </div>
              
              {/* MySentry Column Header */}
              <div className="col-span-1 relative">
                <div className="absolute -top-6 left-0 right-0 flex justify-center">
                  <div className="bg-white p-2 rounded-xl shadow-sm border border-gray-100">
                     <img 
                      src="/images/logo.png" 
                      alt="MySentry" 
                      className="h-12 w-auto object-contain"
                      loading="lazy"
                      width="360" height="160"
                    />
                  </div>
                </div>
                <div className="bg-[#e8f5e9] rounded-t-2xl pt-12 pb-6 text-center border-x border-t border-primary/20">
                  <h4 className="text-xl font-black text-gray-900">MySentry</h4>
                  <p className="text-sm font-bold text-primary mt-1">ALL-IN-ONE</p>
                </div>
              </div>

              <div className="col-span-1 text-center pb-6">
                <div className="mx-auto w-12 h-12 bg-gray-100 rounded-xl flex items-center justify-center mb-3">
                  <Smartphone className="w-6 h-6 opacity-40" />
                </div>
                <h4 className="text-lg font-bold text-gray-400">Location Apps</h4>
                <p className="text-xs text-gray-400 mt-1">e.g. Life360</p>
              </div>

              <div className="col-span-1 text-center pb-6">
                <div className="mx-auto w-12 h-12 bg-gray-100 rounded-xl flex items-center justify-center mb-3">
                  <img src="https://static.thenounproject.com/png/4440884-200.png" className="w-6 h-6 opacity-40" alt="Alert" loading="lazy" width="24" height="24" />
                </div>
                <h4 className="text-lg font-bold text-gray-400">Senior Alerts</h4>
                <p className="text-xs text-gray-400 mt-1">e.g. Medical Guardian</p>
              </div>

              <div className="col-span-1 text-center pb-6">
                <div className="mx-auto w-12 h-12 bg-gray-100 rounded-xl flex items-center justify-center mb-3">
                  <img src="https://static.thenounproject.com/png/3090399-200.png" className="w-6 h-6 opacity-40" alt="Watch" loading="lazy" width="24" height="24" />
                </div>
                <h4 className="text-lg font-bold text-gray-400">Wearables</h4>
                <p className="text-xs text-gray-400 mt-1">e.g. Oura, Whoop</p>
              </div>
            </div>

            {/* Feature Rows */}
            <div className="space-y-12">
              {features.map((section, sIdx) => (
                <div key={sIdx} className={`rounded-3xl p-6 ${section.color}`}>
                  <div className="flex items-center gap-4 mb-8">
                    <div className="h-1 bg-gray-900/10 flex-1 rounded-full"></div>
                    <h5 className={`text-2xl font-black uppercase tracking-widest ${section.headerColor}`}>
                      {section.category}
                    </h5>
                    <div className="h-1 bg-gray-900/10 flex-1 rounded-full"></div>
                  </div>

                  <div className="space-y-3">
                    {section.items.map((item, idx) => (
                      <div 
                        key={idx} 
                        className="grid grid-cols-5 gap-4 items-center py-6 px-6 rounded-2xl bg-white shadow-sm hover:shadow-md transition-all border border-gray-100"
                      >
                        <div className="col-span-1 flex items-center gap-2">
                          <span className="font-bold text-gray-800 text-lg">{item.name}</span>
                          <TooltipProvider>
                            <Tooltip>
                              <TooltipTrigger>
                                <Info className="w-4 h-4 text-gray-400 hover:text-primary transition-colors cursor-help" />
                              </TooltipTrigger>
                              <TooltipContent>
                                <p className="max-w-xs text-sm">{item.tooltip}</p>
                              </TooltipContent>
                            </Tooltip>
                          </TooltipProvider>
                        </div>

                        {/* MySentry Cell */}
                        <div className="col-span-1 text-center py-2 rounded-lg bg-[#e8f5e9]/50 border border-primary/10">
                          {renderCell(item.mysentry)}
                        </div>

                        <div className="col-span-1 text-center">
                          {renderCell(item.life360)}
                        </div>
                        <div className="col-span-1 text-center">
                          {renderCell(item.medical)}
                        </div>
                        <div className="col-span-1 text-center">
                          {renderCell(item.wearables)}
                        </div>
                      </div>
                    ))}
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>

        <div className="mt-16 text-center">
          <Link href="/pricing#pricing-plans" className="inline-flex items-center justify-center px-8 py-4 text-lg font-bold text-white bg-primary hover:bg-primary/90 rounded-full transition-all hover:scale-105 shadow-lg shadow-primary/25">
            Start Your 7-Day Free Trial
          </Link>
          <p className="mt-4 text-gray-500 text-sm">
            Cancel anytime.
          </p>
        </div>
      </div>
    </section>
  );
}
