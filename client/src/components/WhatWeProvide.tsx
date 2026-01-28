import { ShieldCheck, HeartPulse, Activity, Phone, Zap, Bell } from "lucide-react";

export default function WhatWeProvide() {
  return (
    <section className="py-24 bg-white">
      <div className="container">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <span className="text-primary font-bold uppercase tracking-widest text-sm mb-4 block">Our Promise</span>
          <h2 className="text-4xl md:text-5xl font-heading font-bold uppercase tracking-tight mb-6 text-[#1a1a1a]">
            What We Provide
          </h2>
          <p className="text-xl text-gray-600">
            At MySentry, we deliver two things that matter most: Safety and Health.
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-8 lg:gap-16">
          {/* Safety Monitoring */}
          <div className="bg-blue-50 rounded-[3rem] p-8 md:p-12 border border-blue-100">
            <div className="w-16 h-16 bg-blue-100 rounded-2xl flex items-center justify-center mb-8">
              <ShieldCheck className="h-8 w-8 text-blue-600" />
            </div>
            <h3 className="text-3xl font-heading font-bold text-[#1a1a1a] mb-6">Safety Monitoring</h3>
            <ul className="space-y-6">
              <li className="flex gap-4">
                <Zap className="h-6 w-6 text-blue-600 shrink-0" />
                <div>
                  <h4 className="font-bold text-lg text-[#1a1a1a] mb-1">Immediate Detection</h4>
                  <p className="text-gray-600">Whether it's a fall, accident, or sudden emergency, MySentry detects issues instantly.</p>
                </div>
              </li>
              <li className="flex gap-4">
                <Phone className="h-6 w-6 text-blue-600 shrink-0" />
                <div>
                  <h4 className="font-bold text-lg text-[#1a1a1a] mb-1">24/7 Professional Monitoring</h4>
                  <p className="text-gray-600">Alerts are sent to your emergency contacts and MySentry's professional monitoring team, so help can be dispatched even if you're unable to reach out.</p>
                </div>
              </li>
              <li className="flex gap-4">
                <ShieldCheck className="h-6 w-6 text-blue-600 shrink-0" />
                <div>
                  <h4 className="font-bold text-lg text-[#1a1a1a] mb-1">Seamless Protection</h4>
                  <p className="text-gray-600">Works quietly in the background, so you're always protected without having to think about it.</p>
                </div>
              </li>
            </ul>
          </div>

          {/* Health Monitoring */}
          <div className="bg-green-50 rounded-[3rem] p-8 md:p-12 border border-green-100">
            <div className="w-16 h-16 bg-green-100 rounded-2xl flex items-center justify-center mb-8">
              <HeartPulse className="h-8 w-8 text-green-600" />
            </div>
            <h3 className="text-3xl font-heading font-bold text-[#1a1a1a] mb-6">Health Monitoring</h3>
            <ul className="space-y-6">
              <li className="flex gap-4">
                <Activity className="h-6 w-6 text-green-600 shrink-0" />
                <div>
                  <h4 className="font-bold text-lg text-[#1a1a1a] mb-1">Vital Tracking</h4>
                  <p className="text-gray-600">Monitors key health metrics like heart rate, blood pressure, and oxygen levels in real time.</p>
                </div>
              </li>
              <li className="flex gap-4">
                <Bell className="h-6 w-6 text-green-600 shrink-0" />
                <div>
                  <h4 className="font-bold text-lg text-[#1a1a1a] mb-1">Health Alerts</h4>
                  <p className="text-gray-600">If something is wrong, you'll get an alert before it becomes an emergency.</p>
                </div>
              </li>
              <li className="flex gap-4">
                <HeartPulse className="h-6 w-6 text-green-600 shrink-0" />
                <div>
                  <h4 className="font-bold text-lg text-[#1a1a1a] mb-1">24/7 Professional Monitoring</h4>
                  <p className="text-gray-600">Emergencies are sent to your emergency contacts and MySentry's professional monitoring team, so help can be dispatched even if you're unable to reach out.</p>
                </div>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </section>
  );
}
