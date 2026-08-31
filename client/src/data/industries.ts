import { LucideIcon, Stethoscope, Building2, Briefcase, Gamepad2, Wifi, ShoppingBag, Home, Clapperboard, GraduationCap, Landmark, Banknote } from "lucide-react";

export interface IndustryContent {
  id: string;
  title: string;
  icon: LucideIcon;
  peace: {
    problems: string[];
    empathy: string;
    answer: string;
    change: string;
    endResult: string;
  };
  image: string;
}

export const industries: IndustryContent[] = [
  {
    id: "home-healthcare",
    title: "Home Healthcare",
    icon: Stethoscope,
    peace: {
      problems: [
        "Nurses entering strangers' homes alone with zero backup.",
        "Unpredictable patient behavior or aggressive family members.",
        "Medical emergencies happening to staff in remote locations."
      ],
      empathy: "We know the anxiety of sending your staff into unpredictable environments where help feels miles away.",
      answer: "MySentry provides a discreet panic button on their watch and automatic check-ins for high-risk visits.",
      change: "Your caregivers go from feeling vulnerable and isolated to being constantly connected to professional protection.",
      endResult: "A confident care team that focuses on patients, not their own safety."
    },
    image: "/images/industries/home-healthcare.jpg"
  },
  {
    id: "healthcare-pharma",
    title: "Healthcare & Pharma",
    icon: Building2,
    peace: {
      problems: [
        "Rising aggression from patients and visitors in ERs and wards.",
        "Staff working late shifts in large, empty parking structures.",
        "High-stress environments leading to unmonitored health incidents."
      ],
      empathy: "It's unacceptable that those who care for others often fear for their own physical safety at work.",
      answer: "MySentry delivers prompt duress alarms that alert security teams with precise indoor location data.",
      change: "Staff move from looking over their shoulders to focusing entirely on saving lives.",
      endResult: "A secure healing environment where safety incidents are de-escalated in seconds."
    },
    image: "/images/industries/healthcare-pharma.jpg"
  },
  {
    id: "business-ops",
    title: "Business Operations",
    icon: Briefcase,
    peace: {
      problems: [
        "Lone workers in warehouses invisible when accidents happen.",
        "Late-night office staff leaving buildings unescorted.",
        "Health emergencies (heart attack, stroke) going unnoticed."
      ],
      empathy: "You worry that if an employee falls or has a medical emergency, no one will know until it's too late.",
      answer: "MySentry detects falls and health anomalies automatically, dispatching help even if they can't speak.",
      change: "Shift from reactive tragedy management to proactive, real-time workforce protection.",
      endResult: "Zero unassisted incidents and a workforce that knows you have their back 24/7."
    },
    image: "/images/industries/business-ops.jpg"
  },
  {
    id: "gaming-entertainment",
    title: "Gaming & Entertainment",
    icon: Gamepad2,
    peace: {
      problems: [
        "Intoxicated patrons creating volatile situations.",
        "Loud environments where radio calls go unheard.",
        "Cash handling staff targeted for theft or coercion."
      ],
      empathy: "Managing large crowds shouldn't mean accepting abuse or physical threats as 'part of the job'.",
      answer: "MySentry empowers staff to silently summon security backup without escalating the situation.",
      change: "Transform a chaotic, high-risk floor into a controlled environment with rapid response capabilities.",
      endResult: "Staff who feel empowered to enforce rules, knowing backup is just a tap away."
    },
    image: "/images/industries/gaming.jpg"
  },
  {
    id: "tech-telecom",
    title: "Tech & Telecom",
    icon: Wifi,
    peace: {
      problems: [
        "Field techs working in remote towers miles from help.",
        "High-voltage or height-related accident risks.",
        "Driving fatigue leading to vehicle accidents."
      ],
      empathy: "The isolation of field work creates a dangerous gap between an accident and medical attention.",
      answer: "MySentry monitors vitals and location, bridging the gap between remote sites and emergency responders.",
      change: "Technicians stop being 'out of reach' and start being 'always connected' to safety.",
      endResult: "Remote operations that are as safe and monitored as your headquarters."
    },
    image: "/images/industries/telecom.jpg"
  },
  {
    id: "retail-hospitality",
    title: "Retail & Hospitality",
    icon: ShoppingBag,
    peace: {
      problems: [
        "Frontline staff facing verbal and physical harassment.",
        "Opening and closing stores alone at vulnerable hours.",
        "Theft interventions turning violent unexpectedly."
      ],
      empathy: "Your team shouldn't have to choose between providing great service and protecting themselves.",
      answer: "MySentry puts a security guard on their wrist, ready to intervene the moment a situation turns sour.",
      change: "Employees go from feeling exposed at the counter to feeling secure and supported.",
      endResult: "A welcoming customer experience built on the foundation of staff safety."
    },
    image: "/images/industries/retail.jpg"
  },
  {
    id: "real-estate",
    title: "Real Estate",
    icon: Home,
    peace: {
      problems: [
        "Meeting absolute strangers in empty properties.",
        "Showings in secluded or dead-zone areas.",
        "Predictable patterns making agents easy targets."
      ],
      empathy: "The 'open house' shouldn't be a gamble with your personal safety.",
      answer: "MySentry's MeetSafe feature sets automatic timers for showings -if you don't check in, we send help.",
      change: "Agents stop fearing the 'what if' and start showing properties with total confidence.",
      endResult: "More showings, more sales, and zero safety compromises."
    },
    image: "/images/industries/real-estate.jpg"
  },
  {
    id: "media-creative",
    title: "Media & Creative",
    icon: Clapperboard,
    peace: {
      problems: [
        "Journalists covering protests or volatile events.",
        "Crews carrying expensive gear in high-crime areas.",
        "Irregular hours in unfamiliar locations."
      ],
      empathy: "Chasing the story shouldn't mean becoming the story due to a safety incident.",
      answer: "MySentry tracks location and health status, ensuring crews are safe even in volatile environments.",
      change: "From high-risk exposure to calculated, monitored safety during every assignment.",
      endResult: "Bold storytelling supported by an invisible, unbreakable safety net."
    },
    image: "/images/industries/media.jpg"
  },
  {
    id: "education",
    title: "Education",
    icon: GraduationCap,
    peace: {
      problems: [
        "Active threat scenarios requiring prompt lockdown.",
        "Medical emergencies in classrooms or sports fields.",
        "Staff facing aggression from students or parents."
      ],
      empathy: "Educators are there to teach, not to be first responders without support.",
      answer: "MySentry connects every classroom directly to campus security and local police promptly.",
      change: "Schools transform from soft targets into interconnected, responsive safety networks.",
      endResult: "A campus where safety is handled by the system, letting teachers focus on students."
    },
    image: "/images/industries/education.jpg"
  },
  {
    id: "government",
    title: "Government",
    icon: Landmark,
    peace: {
      problems: [
        "Field workers entering unregulated environments.",
        "Public counters facing agitated citizens.",
        "Privacy concerns limiting safety tool options."
      ],
      empathy: "Serving the public shouldn't come at the cost of personal security.",
      answer: "MySentry provides discreet, reliable duress alarms that comply with strict privacy and security standards.",
      change: "Civil servants move from vulnerability to protected, monitored engagements.",
      endResult: "Uninterrupted public service delivered by a safe and confident workforce."
    },
    image: "/images/industries/government.jpg"
  },
  {
    id: "banking",
    title: "Banking & Finance",
    icon: Banknote,
    peace: {
      problems: [
        "High-value target for armed robbery.",
        "Coercion of staff for access to assets.",
        "Opening/closing procedures with high vulnerability."
      ],
      empathy: "The responsibility of handling assets brings a constant, underlying threat of violence.",
      answer: "MySentry links silent alarms directly to law enforcement, bypassing delays.",
      change: "Staff shift from hyper-vigilance to trusting the system to handle the threat.",
      endResult: "Secure financial institutions where staff safety is as fortified as the vault."
    },
    image: "/images/industries/banking.jpg"
  }
];
