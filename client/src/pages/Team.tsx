import React from 'react';
import Navbar from '../components/Navbar';
import Footer from '../components/Footer';
import { motion } from 'framer-motion';
import { Linkedin } from 'lucide-react';

const leadership = [
  {
    name: "Qasim Mueen",
    role: "Chief Executive Officer (CEO)",
    bio: "Co-Founder & CEO of Zigron (Multi-million-dollar IT Services company) & FraudLens and DentaLens (Medical and Dental FWA Solutions) – acquired. Fmr. Partner Abode Systems (Smart Home Security sold to NICE S.P.A. for $50M). Co-Founder TransparentHands.org.",
    image: "/images/team-zigron.png",
    linkedin: "https://www.linkedin.com/in/zigron/"
  },
  {
    name: "Kashif Mueen",
    role: "Chief Technology Officer (CTO)",
    bio: "Co-founder & CTO of Zigron and FraudLens, 25+ years experience in enterprise architecture, cloud, AI & ML and analytics. Former Partner and Tech Lead Abode Systems. Co-Founder of FraudLens, WhereverTV (IPTV) and TransparentHands.org.",
    image: "/images/team-kashif.png",
    linkedin: "https://www.linkedin.com/in/kashif-mueen-2321361/"
  },
  {
    name: "Andrew Caldwell",
    role: "Chief Revenue Officer (CRO)",
    bio: "CRO at Shmoop, with previous leadership roles as CEO of Invigulus, CRO at Proctorio, CEO of ProctorFree, and VP of Business Development at ProctorU. A seasoned executive with a track record of driving growth and innovation in the tech and education sectors.",
    image: "/images/team-andrew.png",
    linkedin: "https://www.linkedin.com/in/andrew-caldwell-39429b1/"
  }
];

const advisors = [
  {
    name: "Peter Michel",
    role: "Business Advisor",
    bio: "Experienced senior executive and CEO with a track record in leading companies like ISECURETRAC, Brink's Home Security, and NEP Broadcasting. Board member, strategic advisor, and investing partner at NextGen Venture Partners. Former federal service in the White House and US Dept of HUD. Specializes in turnaround leadership and marketing.",
    image: "/images/team-peter.png",
    linkedin: "https://www.linkedin.com/in/peter-michel-7048133/"
  }
];

const productTeam = [
  {
    name: "Muhammad Fayyaz",
    role: "Product Lead",
    bio: "Experienced in Agile methodologies and product development, specializing in bridging the gap between business objectives and technical execution. Skilled in leading cross-functional teams to build and enhance digital products that align with user needs and business goals.",
    image: "/images/team-fayyaz.png",
    linkedin: "https://www.linkedin.com/in/muhammad-fayyaz-35b307228/"
  },
  {
    name: "Saleha Usman",
    role: "Product Marketing Lead",
    bio: "Experienced in digital marketing with a background in social sciences and eCommerce, having worked on platforms such as Amazon. Represented Pakistan at the 2022 Clinton Global Initiative, connecting with global leaders to drive impactful marketing strategies.",
    image: "/images/team-saleha.png",
    linkedin: "https://www.linkedin.com/in/saleha-usman/"
  }
];

const TeamSection = ({ title, subtitle, members, bgColor = "bg-white" }: { title: string, subtitle: string, members: typeof leadership, bgColor?: string }) => (
  <section className={`py-24 ${bgColor}`}>
    <div className="container mx-auto px-4">
      <div className="max-w-6xl mx-auto">
        <div className="text-center mb-20">
          <h2 className="text-4xl md:text-5xl font-black mb-6 font-barlow uppercase text-[#386758]">{title}</h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto leading-relaxed">
            {subtitle}
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-12 justify-center">
          {members.map((member, index) => (
            <motion.div 
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1 }}
              className="group"
            >
              <div className="relative overflow-hidden rounded-3xl mb-6 aspect-[4/5] shadow-lg">
                <img 
                  src={member.image} 
                  alt={member.name} 
                  className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent opacity-100 lg:opacity-0 lg:group-hover:opacity-100 transition-opacity duration-300 flex items-end p-6">
                  <a href={member.linkedin} target="_blank" rel="noopener noreferrer" className="text-white hover:text-[#4ADE80] transition-colors">
                    <Linkedin className="w-6 h-6" />
                  </a>
                </div>
              </div>
              
              <h3 className="text-2xl font-bold text-[#1a1a1a] mb-1 font-barlow uppercase">{member.name}</h3>
              <p className="text-[#386758] font-bold uppercase text-sm tracking-wider mb-4">{member.role}</p>
              <p className="text-gray-600 leading-relaxed text-sm">
                {member.bio}
              </p>
            </motion.div>
          ))}
        </div>
      </div>
    </div>
  </section>
);

export const Team = () => {
  return (
    <div className="min-h-screen bg-white font-sans text-[#1a1a1a]">
      <Navbar />
      
      {/* Hero Section - Standardized */}
      <section className="relative min-h-[80vh] flex items-center bg-[#e8f5e9] pt-32 overflow-hidden">
        <div className="absolute inset-0 z-0">
          <img 
            src="/images/team-hero.jpg" 
            alt="MySentry Team" 
            className="absolute inset-0 w-full h-full object-cover opacity-60"
          />
          <div className="absolute inset-0 bg-gradient-to-r from-[#e8f5e9] via-[#e8f5e9]/90 to-transparent z-10" />
        </div>
        
        <div className="relative z-20 container mx-auto px-4">
          <motion.div 
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="max-w-4xl"
          >
            <span className="text-[#386758] font-bold tracking-widest uppercase text-sm mb-4 block">
              Our Team
            </span>
            <h1 className="text-[55px] font-black mb-8 font-barlow uppercase leading-[0.9] tracking-tighter text-[#1a1a1a]">
              The Right Team<br/>
              <span className="text-gray-600">For A Safer Tomorrow.</span>
            </h1>
            <p className="text-xl md:text-2xl text-gray-700 mb-10 leading-relaxed max-w-2xl font-medium">
              At MySentry.ai, safety begins with empathy. Our team brings together innovators, AI experts, and wellness advocates driven by one shared purpose: to make safety and well-being accessible for everyone.
            </p>
          </motion.div>
        </div>
      </section>

      <TeamSection 
        title="Leadership: Vision with Heart"
        subtitle="Our leaders drive MySentry’s mission forward, building technology that protects, empowers, & connects."
        members={leadership}
      />

      <TeamSection 
        title="Board of Advisors: Guided by Experience"
        subtitle="Industry pioneer who help us grow responsibly, stay people-first, and think beyond technology."
        members={advisors}
        bgColor="bg-gray-50"
      />

      <TeamSection 
        title="Marketing & Product Team: Turning Ideas Into Impact"
        subtitle="The minds behind every experience, designing solutions that feel human, intuitive, and safe."
        members={productTeam}
      />

      <Footer />
    </div>
  );
};

export default Team;
