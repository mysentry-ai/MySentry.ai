import { Link } from "wouter";
import { ArrowRight, Check, Heart, Shield, Activity, Phone, Users, Clock, AlertTriangle, ChevronDown } from "lucide-react";
import { Button } from "@/components/ui/button";
import { motion } from "framer-motion";
import Layout from "@/components/Layout";
import SEO from "@/components/SEO";
import GetStartedSection from "@/components/GetStartedSection";
import { useState } from "react";

const faqs = [
  {
    question: "Does my parent need to be tech-savvy to use MySentry?",
    answer: "MySentry is designed around a practiced setup. A family can configure supported automatic events, Safety Checks, trusted contacts, and several Panic Alarm triggers, including an eligible voice command when the phone or watch is out of reach."
  },
  {
    question: "What happens if my parent falls and cannot reach their phone?",
    answer: "A supported Apple or Samsung watch event can start the configured MySentry Panic Alarm workflow. Family and eligible 24/7 professional monitoring can receive the event with permitted context. After verification, monitoring can contact emergency services, including 911, when appropriate. No watch detects every fall."
  },
  {
    question: "How is MySentry different from a medical alert pendant?",
    answer: "MySentry combines supported watch events with configured voice and device panic triggers, AI-supported wellness analysis, trusted contacts, live location, permitted phone audio or video, and eligible 24/7 professional monitoring. Confirm device, plan, permission, connectivity, and regional eligibility before setup."
  },
  {
    question: "Can I monitor my parent's safety from my own phone?",
    answer: "A configured family member can receive supported alert notifications and authorized context on iOS or Android. MySentry does not provide unrestricted continuous access to another adult's location or private wellness information."
  },
  {
    question: "What health metrics does MySentry track?",
    answer: "On eligible wearable configurations, MySentry can use supported heart rate, heart rate variability, blood oxygen, activity, and motion readings for wellness analysis. Availability varies by device and configuration, and the results are not a medical diagnosis."
  },
  {
    question: "Does MySentry work if my parent lives in a rural area?",
    answer: "Alert delivery and shared context require an available supported connection. Rural coverage, indoor location, app state, battery, device support, and permissions can affect operation, so keep a separate plan for disconnected locations."
  }
];

export default function SeniorsAgingInPlace() {
  const [openFaq, setOpenFaq] = useState<number | null>(null);

  const schema = [
    {
      "@context": "https://schema.org",
      "@type": "FAQPage",
      "mainEntity": faqs.map(faq => ({
        "@type": "Question",
        "name": faq.question,
        "acceptedAnswer": {
          "@type": "Answer",
          "text": faq.answer
        }
      }))
    },
    {
      "@context": "https://schema.org",
      "@type": "Article",
      "headline": "Senior Safety for Aging in Place: How to Keep Your Parents Safe at Home",
      "description": "A complete guide to helping seniors age safely in their own homes with modern safety technology, fall detection, and 24/7 professional monitoring.",
      "author": { "@type": "Organization", "name": "MySentry" }
    }
  ];

  return (
    <Layout>
      <SEO
        schema={schema}
      />

      {/* Hero  -  title + subtitle + CTAs only */}
      <section className="min-h-[calc(100vh-80px)] flex items-center bg-gradient-to-b from-[#e8f5e9] to-white">
        <div className="container max-w-6xl mx-auto px-4 py-16">
          <div className="max-w-3xl">
            <span className="text-primary font-bold tracking-widest uppercase text-sm mb-4 block">SENIOR SAFETY</span>
            <h1 className="text-4xl md:text-[55px] leading-tight font-heading font-bold text-[#1a1a1a] mb-3 uppercase tracking-tighter">
              Keep Your Parents Safe at Home.
            </h1>
            <p className="text-xl text-primary font-semibold mb-8">
              Peace of mind without taking away their independence.
            </p>
            <div className="flex flex-wrap gap-4">
              <Link href="/pricing#pricing-plans">
                <Button size="lg" className="bg-[#6AD990] hover:bg-[#5bc97e] text-[#1a1a1a] font-bold text-lg px-8 py-6 rounded-full uppercase tracking-wider">
                  Review Plans and Eligibility
                  <ArrowRight className="ml-2 w-5 h-5" />
                </Button>
              </Link>
              <Link href="/how-it-works">
                <Button variant="outline" size="lg" className="border-2 border-[#1a1a1a] text-[#1a1a1a] font-bold text-lg px-8 py-6 rounded-full uppercase tracking-wider hover:bg-[#1a1a1a] hover:text-white">
                  See How It Works
                </Button>
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* Overview  -  moved from hero */}
      <section className="py-16 bg-white">
        <div className="container max-w-4xl mx-auto px-4">
          <p className="text-lg text-gray-700 mb-4 leading-relaxed">
            Your mom wants to stay in her own home. She loves her garden, her neighbors, and the independence she has built over a lifetime. But you worry. What if she falls in the bathroom at 2 AM? What if her heart rate spikes and nobody notices?
          </p>
          <p className="text-lg text-gray-600 leading-relaxed">
            You are not alone in this worry. Over 36 million falls happen among older adults every year, and the fear of falling is one of the top reasons seniors lose their independence. But it does not have to be that way.
          </p>
        </div>
      </section>

      {/* The Real Problem */}
      <section className="py-16 bg-white">
        <div className="container max-w-4xl mx-auto px-4">
          <h2 className="text-3xl md:text-4xl font-heading font-bold text-[#1a1a1a] mb-8">
            The Silent Worry That Never Goes Away
          </h2>
          <div className="space-y-6 text-lg text-gray-700 leading-relaxed">
            <p>
              Every time your phone rings late at night, your stomach drops. Is it the hospital? Did something happen? This constant, low-level anxiety is something millions of adult children share. You want to respect your parents' independence, but you also want to know they are safe.
            </p>
            <p>
              Traditional medical alert pendants were supposed to solve this problem. But let us be honest. Many seniors refuse to wear them because they feel stigmatizing. And even when they do wear them, those devices only work if your parent can reach the button and press it. During a serious fall or a cardiac event, that is often not possible.
            </p>
            <p>
              What you really need is a safety net that works automatically, without your parent having to do anything. Something that watches over them quietly and calls for help the moment something goes wrong.
            </p>
          </div>
        </div>
      </section>

      {/* The Guide - MySentry */}
      <section className="py-16 bg-[#f0f9f4]">
        <div className="container max-w-6xl mx-auto px-4">
          <h2 className="text-3xl md:text-4xl font-heading font-bold text-[#1a1a1a] mb-4 text-center">
            MySentry: The Invisible Safety Net for Your Parents
          </h2>
          <p className="text-lg text-gray-600 text-center mb-12 max-w-2xl mx-auto">
            MySentry turns the smartphone and smartwatch your parent already owns into a powerful safety system that works around the clock.
          </p>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {[
              {
                icon: <Shield className="w-8 h-8 text-primary" />,
                title: "Automatic Fall Detection",
                description: "Advanced sensors detect when your parent falls, even if they cannot press a button. Our monitoring center is alerted in seconds and help arrives in a few steps."
              },
              {
                icon: <Heart className="w-8 h-8 text-primary" />,
                title: "24/7 Health Monitoring",
                description: "Continuous tracking of heart rate, HRV, and blood oxygen levels. If something looks abnormal, both you and our professional team are notified immediately."
              },
              {
                icon: <Activity className="w-8 h-8 text-primary" />,
                title: "Live Video Response",
                description: "When an alert triggers, our agents can see what is happening through your parent's phone camera. This gives first responders critical visual context before they arrive."
              },
              {
                icon: <Phone className="w-8 h-8 text-primary" />,
                title: "Voice-Activated Panic",
                description: "Your parent can trigger an emergency alert just by speaking. No fumbling with buttons or trying to find their phone during a crisis."
              },
              {
                icon: <Users className="w-8 h-8 text-primary" />,
                title: "Family Notifications",
                description: "You receive prompt alerts when something happens. Stay informed about your parent's safety without hovering or micromanaging their daily life."
              },
              {
                icon: <Clock className="w-8 h-8 text-primary" />,
                title: "Safety Check-Ins",
                description: "Schedule regular check-ins so your parent confirms they are okay. If they miss a check-in, our team follows up and you are notified."
              }
            ].map((feature, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.1 }}
                className="bg-white rounded-2xl p-6 shadow-sm"
              >
                <div className="mb-4">{feature.icon}</div>
                <h3 className="text-xl font-heading font-bold text-[#1a1a1a] mb-2">{feature.title}</h3>
                <p className="text-gray-600">{feature.description}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* The Plan */}
      <section className="py-16 bg-white">
        <div className="container max-w-4xl mx-auto px-4">
          <h2 className="text-3xl md:text-4xl font-heading font-bold text-[#1a1a1a] mb-8 text-center">
            Getting Started Takes Less Than 5 Minutes
          </h2>
          <div className="space-y-8">
            {[
              {
                step: "1",
                title: "Download MySentry on Your Parent's Phone",
                description: "Available for iPhone and Android. You can set it up during your next visit or walk them through it over a video call. The app runs quietly in the background once configured."
              },
              {
                step: "2",
                title: "Pair Their Smartwatch",
                description: "Connect their Apple Watch or Samsung Galaxy Watch to unlock fall detection from the wrist, heart rate monitoring, and one-tap panic alerts. If they do not have a smartwatch, the phone alone still provides core safety features."
              },
              {
                step: "3",
                title: "Add Yourself as an Emergency Contact",
                description: "You will receive prompt notifications whenever an alert triggers. Our 24/7 professional monitoring team handles the emergency response while keeping you informed every step of the way."
              }
            ].map((item, i) => (
              <div key={i} className="flex items-start gap-6">
                <div className="w-12 h-12 rounded-full bg-[#004F7B] text-white flex items-center justify-center text-xl font-bold shrink-0">
                  {item.step}
                </div>
                <div>
                  <h3 className="text-xl font-heading font-bold text-[#1a1a1a] mb-2">{item.title}</h3>
                  <p className="text-gray-600 leading-relaxed">{item.description}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Success - The Transformation */}
      <section className="py-16 bg-[#004F7B] text-white">
        <div className="container max-w-4xl mx-auto px-4 text-center">
          <h2 className="text-3xl md:text-4xl font-heading font-bold mb-8">
            Independence with Dignity. Peace of Mind for Everyone.
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {[
              { stat: "2 min", label: "Average emergency response time after fall detection" },
              { stat: "24/7", label: "Professional monitoring with live video response" },
              { stat: "36M+", label: "Falls among older adults each year that MySentry helps prevent" }
            ].map((item, i) => (
              <div key={i}>
                <div className="text-4xl font-bold text-[#6AD990] mb-2">{item.stat}</div>
                <p className="text-white/80">{item.label}</p>
              </div>
            ))}
          </div>
          <p className="text-lg text-white/90 mt-8 max-w-2xl mx-auto leading-relaxed">
            With MySentry, your parent gets to keep living life on their terms. They tend their garden, visit friends, and enjoy their home. And you get to sleep at night knowing that if anything happens, help is already on the way.
          </p>
        </div>
      </section>

      {/* Having the Conversation */}
      <section className="py-16 bg-white">
        <div className="container max-w-4xl mx-auto px-4">
          <h2 className="text-3xl md:text-4xl font-heading font-bold text-[#1a1a1a] mb-6">
            How to Talk to Your Parents About Safety
          </h2>
          <div className="space-y-6 text-lg text-gray-700 leading-relaxed">
            <p>
              Bringing up safety with your parents can feel awkward. Nobody wants to feel like they are losing their independence. Here are some tips that families have found helpful:
            </p>
            <div className="space-y-4">
              {[
                "Frame it as a gift, not a restriction. \"I got this for my own peace of mind, so I worry less about you.\"",
                "Emphasize that it uses their existing phone and watch. No bulky pendants or medical-looking devices.",
                "Point out that it works automatically. They do not need to remember to do anything.",
                "Share that it also monitors health metrics, which many seniors find genuinely useful and interesting.",
                "Offer to set it up together so they feel comfortable and in control."
              ].map((tip, i) => (
                <div key={i} className="flex items-start gap-3">
                  <Check className="w-5 h-5 text-primary shrink-0 mt-1" />
                  <span>{tip}</span>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* FAQs */}
      <section className="py-16 bg-[#f0f9f4]">
        <div className="container max-w-4xl mx-auto px-4">
          <h2 className="text-3xl md:text-4xl font-heading font-bold text-[#1a1a1a] mb-8 text-center">
            Frequently Asked Questions
          </h2>
          <div className="space-y-3">
            {faqs.map((faq, i) => (
              <div key={i} className="bg-white border border-gray-200 rounded-xl overflow-hidden">
                <button
                  onClick={() => setOpenFaq(openFaq === i ? null : i)}
                  className="w-full flex items-center justify-between p-5 text-left hover:bg-gray-50 transition-colors"
                >
                  <span className="font-bold text-[#1a1a1a] pr-4">{faq.question}</span>
                  <ChevronDown className={`w-5 h-5 text-gray-500 shrink-0 transition-transform ${openFaq === i ? 'rotate-180' : ''}`} />
                </button>
                {openFaq === i && (
                  <div className="px-5 pb-5">
                    <p className="text-gray-700 leading-relaxed">{faq.answer}</p>
                  </div>
                )}
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Related Links */}
      <section className="py-12 bg-white">
        <div className="container max-w-4xl mx-auto px-4">
          <h3 className="font-bold text-[#1a1a1a] mb-4">Explore More</h3>
          <div className="flex flex-wrap gap-3">
            {[
              { text: "Fall Detection Feature", href: "/features/fall-detection-app" },
              { text: "Health Monitoring", href: "/features/health-monitoring" },
              { text: "Medical Alert App for Seniors", href: "/use-cases/medical-alert-app-for-seniors" },
              { text: "Senior Safety Planning Guide", href: "/guides/senior-safety-planning" },
              { text: "Pricing Plans", href: "/pricing" },
            ].map((link, i) => (
              <Link key={i} href={link.href} onClick={() => window.scrollTo(0, 0)}>
                <span className="inline-flex items-center gap-1 px-4 py-2 bg-gray-100 hover:bg-primary/10 text-gray-700 hover:text-primary rounded-full text-sm font-medium transition-colors cursor-pointer">
                  {link.text}
                  <ArrowRight className="w-3 h-3" />
                </span>
              </Link>
            ))}
          </div>
        </div>
      </section>

      <GetStartedSection />
    </Layout>
  );
}
