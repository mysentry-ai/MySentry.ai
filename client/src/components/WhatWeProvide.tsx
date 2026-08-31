import { ShieldCheck, HeartPulse, Activity, Phone, Zap, Bell } from "lucide-react";

export default function WhatWeProvide() {
  return (
    <section className="py-24 bg-white">
      <div className="container">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <span className="text-[#255044] font-bold uppercase tracking-widest text-sm mb-4 block">How MySentry Helps</span>
          <h2 className="text-4xl md:text-5xl font-heading font-bold uppercase tracking-tight mb-6 text-[#1a1a1a]">
            Personal Safety and Health Monitoring
          </h2>
          <p className="text-xl text-gray-600">
            MySentry brings user-activated safety tools, supported-device detection, wellness signals, trusted contacts, and eligible professional monitoring into one connected experience.
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
                  <h4 className="font-bold text-lg text-[#1a1a1a] mb-1">Supported-Device Detection</h4>
                  <p className="text-gray-600">Compatible phone and watch sensors may identify fall-like or crash-like events. Detection depends on device, settings, connectivity, and conditions.</p>
                </div>
              </li>
              <li className="flex gap-4">
                <Phone className="h-6 w-6 text-blue-600 shrink-0" />
                <div>
                  <h4 className="font-bold text-lg text-[#1a1a1a] mb-1">24/7 Professional Monitoring</h4>
                  <p className="text-gray-600">Eligible alerts may be routed to the monitoring team and trusted contacts. Agents can review available context and coordinate next steps when appropriate.</p>
                </div>
              </li>
              <li className="flex gap-4">
                <ShieldCheck className="h-6 w-6 text-blue-600 shrink-0" />
                <div>
                  <h4 className="font-bold text-lg text-[#1a1a1a] mb-1">Configured Safety Tools</h4>
                  <p className="text-gray-600">Set up contacts, permissions, devices, and alert preferences before you need them. No system can detect or resolve every event.</p>
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
                  <h4 className="font-bold text-lg text-[#1a1a1a] mb-1">Supported Wellness Signals</h4>
                  <p className="text-gray-600">View available signals such as heart rate, HRV, blood oxygen, and activity from a compatible wearable. Signal availability varies by device.</p>
                </div>
              </li>
              <li className="flex gap-4">
                <Bell className="h-6 w-6 text-green-600 shrink-0" />
                <div>
                  <h4 className="font-bold text-lg text-[#1a1a1a] mb-1">Wellness Notifications</h4>
                  <p className="text-gray-600">Supported devices may surface notifications about available wellness signals. These notifications are informational and are not a diagnosis or emergency prediction.</p>
                </div>
              </li>
              <li className="flex gap-4">
                <HeartPulse className="h-6 w-6 text-green-600 shrink-0" />
                <div>
                  <h4 className="font-bold text-lg text-[#1a1a1a] mb-1">24/7 Professional Monitoring</h4>
                  <p className="text-gray-600">When a safety alert is active, permitted wellness context may be available to the monitoring workflow. Availability depends on plan, device, permissions, connectivity, and region.</p>
                </div>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </section>
  );
}
