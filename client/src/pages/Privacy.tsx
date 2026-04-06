import { useState, useEffect } from 'react';
import Navbar from '../components/Navbar';
import Footer from '../components/Footer';
import SEO from '../components/SEO';
import HeroSection from "@/components/HeroSection";
import { Menu, X } from 'lucide-react';

export const Privacy = () => {
  const [activeSection, setActiveSection] = useState<string | null>(null);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  const tableOfContents = [
    { title: "Collection of User Information", id: "collection-user-information" },
    { title: "Utilization of Collected Information", id: "utilization-collected-information" },
    { title: "Sharing of Information", id: "sharing-information" },
    { title: "Permission to Access Contacts", id: "permission-access-contacts" },
    { title: "Data Security & Compliance", id: "data-security-compliance" },
    { title: "Rights and Choices for Users", id: "rights-choices-users" },
    { title: "Requesting Data Deletion", id: "requesting-data-deletion" },
    { title: "Privacy for Children", id: "privacy-children" },
    { title: "How We Use Personal Information", id: "how-we-use-personal-information" },
    { title: "AI Features and Model Training", id: "ai-features-model-training" },
    { title: "Data Retention", id: "data-retention" },
    { title: "Sharing of Information with Third Parties", id: "third-party-sharing" },
    { title: "Privacy Rights and Data Requests", id: "privacy-rights-requests" },
    { title: "User Choices and Opt-Out Options", id: "opt-out-options" },
    { title: "Effect of Opting Out of Certain Data Uses", id: "effect-of-opting-out" },
    { title: "When Authorized Personnel May Access Customer Data", id: "authorized-access" },
    { title: "How Users Can Access, Review, and Control Their Data", id: "user-data-control" },
    { title: "Updates to AI-Enabled Features and Service Capabilities", id: "ai-updates" },
    { title: "Updates to Our Privacy Policy", id: "updates-privacy-policy" },
    { title: "Contact Us", id: "contact-us" },
  ];

  // Scroll to section on page load if anchor is present
  useEffect(() => {
    const hash = window.location.hash.slice(1);
    if (hash) {
      setTimeout(() => {
        const element = document.getElementById(hash);
        if (element) {
          element.scrollIntoView({ behavior: 'smooth' });
          setActiveSection(hash);
        }
      }, 100);
    }
  }, []);

  // Track active section on scroll
  useEffect(() => {
    const handleScroll = () => {
      const sections = tableOfContents.map(item => item.id);
      let currentActive = null;

      for (const sectionId of sections) {
        const element = document.getElementById(sectionId);
        if (element) {
          const rect = element.getBoundingClientRect();
          if (rect.top <= 200) {
            currentActive = sectionId;
          } else {
            break;
          }
        }
      }

      setActiveSection(currentActive);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const scrollToSection = (id: string) => {
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
      setActiveSection(id);
      setIsMobileMenuOpen(false);
      // Update URL hash without page reload
      window.history.pushState(null, '', `#${id}`);
    }
  };

  return (
    <div className="min-h-screen bg-white font-sans text-gray-900">
      <SEO 
        title="Privacy Policy | MySentry" 
        description="Read MySentry's privacy policy. Learn how we collect, use, and protect your personal data, health information, and location data."
        canonical="https://mysentry.ai/privacy"
      />
      <Navbar />
      
      <HeroSection
        label="Legal"
        title="Privacy Policy"
        description="Last Updated: January 22, 2026"
        imageSrc="https://files.manuscdn.com/user_upload_by_module/session_file/310519663247484611/IElpNKDyEyZQAZJG.jpg"
        imageAlt="Privacy Policy"
      />

      <div className="flex gap-8 max-w-7xl mx-auto px-4 py-12">
        {/* Sticky TOC - Desktop */}
        <aside className="hidden lg:block w-64 flex-shrink-0">
          <div className="sticky top-24 bg-[#f0f7f4] p-6 rounded-2xl border border-[#386758]/20 max-h-[calc(100vh-120px)] overflow-y-auto">
            <h3 className="text-lg font-bold text-gray-900 mb-6">On This Page</h3>
            <nav className="space-y-2">
              {tableOfContents.map((item) => (
                <button
                  key={item.id}
                  onClick={() => scrollToSection(item.id)}
                  className={`w-full text-left px-4 py-2 rounded-lg transition-all duration-200 text-sm font-medium ${
                    activeSection === item.id
                      ? 'bg-[#386758] text-white'
                      : 'text-[#386758] hover:bg-[#386758]/10'
                  }`}
                >
                  {item.title}
                </button>
              ))}
            </nav>
          </div>
        </aside>

        {/* Mobile TOC Toggle */}
        <div className="lg:hidden mb-6">
          <button
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
            className="flex items-center gap-2 px-4 py-2 bg-[#f0f7f4] text-[#386758] rounded-lg font-medium"
          >
            {isMobileMenuOpen ? <X size={20} /> : <Menu size={20} />}
            {isMobileMenuOpen ? 'Close' : 'Table of Contents'}
          </button>
          
          {isMobileMenuOpen && (
            <nav className="mt-4 space-y-2 bg-[#f0f7f4] p-4 rounded-lg border border-[#386758]/20">
              {tableOfContents.map((item) => (
                <button
                  key={item.id}
                  onClick={() => scrollToSection(item.id)}
                  className={`w-full text-left px-4 py-2 rounded-lg transition-all duration-200 text-sm font-medium ${
                    activeSection === item.id
                      ? 'bg-[#386758] text-white'
                      : 'text-[#386758] hover:bg-[#386758]/10'
                  }`}
                >
                  {item.title}
                </button>
              ))}
            </nav>
          )}
        </div>

        {/* Main Content */}
        <main className="flex-1 max-w-3xl">
          {/* Section 1 */}
          <section id="collection-user-information" className="mb-12 scroll-mt-24">
            <h2 className="text-3xl font-bold text-gray-900 mb-4">Collection of User Information</h2>
            <div className="prose prose-lg max-w-none text-gray-700">
              <p className="mb-4">
                [Paste your content for "Collection of User Information" here]
              </p>
            </div>
          </section>

          {/* Section 2 */}
          <section id="utilization-collected-information" className="mb-12 scroll-mt-24">
            <h2 className="text-3xl font-bold text-gray-900 mb-4">Utilization of Collected Information</h2>
            <div className="prose prose-lg max-w-none text-gray-700">
              <p className="mb-4">
                [Paste your content for "Utilization of Collected Information" here]
              </p>
            </div>
          </section>

          {/* Section 3 */}
          <section id="sharing-information" className="mb-12 scroll-mt-24">
            <h2 className="text-3xl font-bold text-gray-900 mb-4">Sharing of Information</h2>
            <div className="prose prose-lg max-w-none text-gray-700">
              <p className="mb-4">
                [Paste your content for "Sharing of Information" here]
              </p>
            </div>
          </section>

          {/* Section 4 */}
          <section id="permission-access-contacts" className="mb-12 scroll-mt-24">
            <h2 className="text-3xl font-bold text-gray-900 mb-4">Permission to Access Contacts</h2>
            <div className="prose prose-lg max-w-none text-gray-700">
              <p className="mb-4">
                [Paste your content for "Permission to Access Contacts" here]
              </p>
            </div>
          </section>

          {/* Section 5 */}
          <section id="data-security-compliance" className="mb-12 scroll-mt-24">
            <h2 className="text-3xl font-bold text-gray-900 mb-4">Data Security & Compliance</h2>
            <div className="prose prose-lg max-w-none text-gray-700">
              <p className="mb-4">
                [Paste your content for "Data Security & Compliance" here]
              </p>
            </div>
          </section>

          {/* Section 6 */}
          <section id="rights-choices-users" className="mb-12 scroll-mt-24">
            <h2 className="text-3xl font-bold text-gray-900 mb-4">Rights and Choices for Users</h2>
            <div className="prose prose-lg max-w-none text-gray-700">
              <p className="mb-4">
                [Paste your content for "Rights and Choices for Users" here]
              </p>
            </div>
          </section>

          {/* Section 7 */}
          <section id="requesting-data-deletion" className="mb-12 scroll-mt-24">
            <h2 className="text-3xl font-bold text-gray-900 mb-4">Requesting Data Deletion</h2>
            <div className="prose prose-lg max-w-none text-gray-700">
              <p className="mb-4">
                [Paste your content for "Requesting Data Deletion" here]
              </p>
            </div>
          </section>

          {/* Section 8 */}
          <section id="privacy-children" className="mb-12 scroll-mt-24">
            <h2 className="text-3xl font-bold text-gray-900 mb-4">Privacy for Children</h2>
            <div className="prose prose-lg max-w-none text-gray-700">
              <p className="mb-4">
                [Paste your content for "Privacy for Children" here]
              </p>
            </div>
          </section>

          {/* Section 9 */}
          <section id="how-we-use-personal-information" className="mb-12 scroll-mt-24">
            <h2 className="text-3xl font-bold text-gray-900 mb-4">How We Use Personal Information</h2>
            <div className="prose prose-lg max-w-none text-gray-700">
              <p className="mb-4">
                [Paste your content for "How We Use Personal Information" here]
              </p>
            </div>
          </section>

          {/* Section 10 */}
          <section id="ai-features-model-training" className="mb-12 scroll-mt-24">
            <h2 className="text-3xl font-bold text-gray-900 mb-4">AI Features and Model Training</h2>
            <div className="prose prose-lg max-w-none text-gray-700">
              <p className="mb-4">
                [Paste your content for "AI Features and Model Training" here]
              </p>
            </div>
          </section>

          {/* Section 11 */}
          <section id="data-retention" className="mb-12 scroll-mt-24">
            <h2 className="text-3xl font-bold text-gray-900 mb-4">Data Retention</h2>
            <div className="prose prose-lg max-w-none text-gray-700">
              <p className="mb-4">
                [Paste your content for "Data Retention" here]
              </p>
            </div>
          </section>

          {/* Section 12 */}
          <section id="third-party-sharing" className="mb-12 scroll-mt-24">
            <h2 className="text-3xl font-bold text-gray-900 mb-4">Sharing of Information with Third Parties</h2>
            <div className="prose prose-lg max-w-none text-gray-700">
              <p className="mb-4">
                [Paste your content for "Sharing of Information with Third Parties" here]
              </p>
            </div>
          </section>

          {/* Section 13 */}
          <section id="privacy-rights-requests" className="mb-12 scroll-mt-24">
            <h2 className="text-3xl font-bold text-gray-900 mb-4">Privacy Rights and Data Requests</h2>
            <div className="prose prose-lg max-w-none text-gray-700">
              <p className="mb-4">
                [Paste your content for "Privacy Rights and Data Requests" here]
              </p>
            </div>
          </section>

          {/* Section 14 */}
          <section id="opt-out-options" className="mb-12 scroll-mt-24">
            <h2 className="text-3xl font-bold text-gray-900 mb-4">User Choices and Opt-Out Options</h2>
            <div className="prose prose-lg max-w-none text-gray-700">
              <p className="mb-4">
                [Paste your content for "User Choices and Opt-Out Options" here]
              </p>
            </div>
          </section>

          {/* Section 15 */}
          <section id="effect-of-opting-out" className="mb-12 scroll-mt-24">
            <h2 className="text-3xl font-bold text-gray-900 mb-4">Effect of Opting Out of Certain Data Uses</h2>
            <div className="prose prose-lg max-w-none text-gray-700">
              <p className="mb-4">
                [Paste your content for "Effect of Opting Out of Certain Data Uses" here]
              </p>
            </div>
          </section>

          {/* Section 16 */}
          <section id="authorized-access" className="mb-12 scroll-mt-24">
            <h2 className="text-3xl font-bold text-gray-900 mb-4">When Authorized Personnel May Access Customer Data</h2>
            <div className="prose prose-lg max-w-none text-gray-700">
              <p className="mb-4">
                [Paste your content for "When Authorized Personnel May Access Customer Data" here]
              </p>
            </div>
          </section>

          {/* Section 17 */}
          <section id="user-data-control" className="mb-12 scroll-mt-24">
            <h2 className="text-3xl font-bold text-gray-900 mb-4">How Users Can Access, Review, and Control Their Data</h2>
            <div className="prose prose-lg max-w-none text-gray-700">
              <p className="mb-4">
                [Paste your content for "How Users Can Access, Review, and Control Their Data" here]
              </p>
            </div>
          </section>

          {/* Section 18 */}
          <section id="ai-updates" className="mb-12 scroll-mt-24">
            <h2 className="text-3xl font-bold text-gray-900 mb-4">Updates to AI-Enabled Features and Service Capabilities</h2>
            <div className="prose prose-lg max-w-none text-gray-700">
              <p className="mb-4">
                [Paste your content for "Updates to AI-Enabled Features and Service Capabilities" here]
              </p>
            </div>
          </section>

          {/* Section 19 */}
          <section id="updates-privacy-policy" className="mb-12 scroll-mt-24">
            <h2 className="text-3xl font-bold text-gray-900 mb-4">Updates to Our Privacy Policy</h2>
            <div className="prose prose-lg max-w-none text-gray-700">
              <p className="mb-4">
                [Paste your content for "Updates to Our Privacy Policy" here]
              </p>
            </div>
          </section>

          {/* Section 20 */}
          <section id="contact-us" className="mb-12 scroll-mt-24">
            <h2 className="text-3xl font-bold text-gray-900 mb-4">Contact Us</h2>
            <div className="prose prose-lg max-w-none text-gray-700">
              <p className="mb-4">
                [Paste your content for "Contact Us" here]
              </p>
            </div>
          </section>
        </main>
      </div>

      <Footer />
    </div>
  );
};

export default Privacy;
