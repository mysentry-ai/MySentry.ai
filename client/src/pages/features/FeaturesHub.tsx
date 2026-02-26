
import SEO from "@/components/SEO";
import Layout from "@/components/Layout";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import {
  ShieldCheck,
  Activity,
  HeartPulse,
  Users,
  Video,
  Phone,
  Car,
  PersonStanding,
} from "lucide-react";
import { Link } from "wouter";

const features = [
  {
    title: "Panic Button App",
    description: "Instantly alert our 24/7 team and emergency contacts.",
    href: "/features/panic-button-app",
    icon: <ShieldCheck className="w-10 h-10 text-primary" />,
  },
  {
    title: "Fall Detection App",
    description: "Automatic alerts if a fall is detected, even if you can't respond.",
    href: "/features/fall-detection-app",
    icon: <PersonStanding className="w-10 h-10 text-primary" />,
  },
  {
    title: "Crash Detection",
    description: "Detects car accidents and automatically sends for help.",
    href: "/features/crash-detection",
    icon: <Car className="w-10 h-10 text-primary" />,
  },
  {
    title: "24/7 Professional Monitoring",
    description: "Our certified team is always ready to respond to any alert.",
    href: "/features/professional-monitoring",
    icon: <Phone className="w-10 h-10 text-primary" />,
  },
  {
    title: "Emergency Contacts",
    description: "Keep your trusted friends and family informed during an emergency.",
    href: "/features/emergency-contacts",
    icon: <Users className="w-10 h-10 text-primary" />,
  },
  {
    title: "Live Video Response",
    description: "Share live video with our team to get the right help, faster.",
    href: "/features/live-video-response",
    icon: <Video className="w-10 h-10 text-primary" />,
  },
  {
    title: "Health Monitoring",
    description: "Track key health metrics like HRV, SpO2, and heart rate.",
    href: "/features/health-monitoring",
    icon: <HeartPulse className="w-10 h-10 text-primary" />,
  },
  {
    title: "MeetSafe Check-Ins",
    description: "Set safety timers for meetings or appointments for peace of mind.",
    href: "/features/meetsafe-check-ins",
    icon: <Activity className="w-10 h-10 text-primary" />,
  },
];

export default function FeaturesHub() {
  return (
    <>
      <SEO
        title="Safety & Monitoring Features | MySentry"
        description="Explore all of MySentry's powerful safety and health monitoring features. From panic alarms to fall detection, see how we protect you 24/7."
        canonical="https://mysentry.ai/features"
      />
      <Layout>
        <div className="py-12 sm:py-16">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center">
              <h1 className="text-4xl font-extrabold text-gray-900 sm:text-5xl md:text-6xl">
                MySentry Features
              </h1>
              <p className="mt-3 max-w-md mx-auto text-base text-gray-500 sm:text-lg md:mt-5 md:text-xl md:max-w-3xl">
                One app for total peace of mind. Explore the powerful features that keep you safe and connected, 24/7.
              </p>
            </div>

            <div className="mt-12 grid gap-8 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4">
              {features.map((feature) => (
                <Link href={feature.href} key={feature.title} className="block hover:shadow-lg rounded-lg transition-shadow duration-300">
                  <Card className="h-full flex flex-col">
                    <CardHeader className="flex-shrink-0">
                      <div className="flex items-center justify-center h-12 w-12 rounded-md bg-primary/10 text-primary mx-auto">
                        {feature.icon}
                      </div>
                    </CardHeader>
                    <CardContent className="flex-grow flex flex-col text-center">
                      <CardTitle className="text-lg font-semibold text-gray-900">{feature.title}</CardTitle>
                      <p className="mt-2 text-sm text-gray-600 flex-grow">{feature.description}</p>
                    </CardContent>
                  </Card>
                </Link>
              ))}
            </div>
          </div>
        </div>
      </Layout>
    </>
  );
}

