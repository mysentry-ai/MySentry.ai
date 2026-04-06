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
    { title: "How We Use Personal Information", id: "how-we-use-personal-information" },
    { title: "AI Features and Model Training", id: "ai-features-model-training" },
    { title: "Data Retention", id: "data-retention" },
    { title: "Sharing with Third Parties", id: "third-party-sharing" },
    { title: "Privacy Rights", id: "privacy-rights-requests" },
    { title: "Opt-Out Options", id: "opt-out-options" },
    { title: "Effect of Opting Out", id: "effect-of-opting-out" },
    { title: "Authorized Access", id: "authorized-access" },
    { title: "User Data Control", id: "user-data-control" },
    { title: "AI Updates", id: "ai-updates" },
  ];

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
            className="flex items-center gap-2 px-4 py-2 bg-[#f0f7f4] border border-[#386758]/20 rounded-lg text-[#386758] font-medium hover:bg-[#386758]/10 transition-all"
          >
            {isMobileMenuOpen ? <X size={20} /> : <Menu size={20} />}
            {isMobileMenuOpen ? 'Close' : 'Contents'}
          </button>

          {/* Mobile TOC Menu */}
          {isMobileMenuOpen && (
            <div className="mt-4 bg-[#f0f7f4] p-6 rounded-2xl border border-[#386758]/20">
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
          )}
        </div>

        {/* Main Content */}
        <main className="flex-1 max-w-4xl">
          <div id="privacy-content" className="bg-white p-8 md:p-12 rounded-3xl shadow-xl border border-gray-100">
            
            <p className="lead text-xl text-gray-900 font-medium mb-12">
              At MySentry.ai, our dedication to user privacy and security is paramount. In this Privacy Policy, we explain the types of personal information that may be collected through the MySentry app (referred to as "the App"), how this information might be used and shared, and the choices available to users with respect to their personal information.
            </p>

            {/* Original Sections */}
            <h3 className="text-2xl border-b border-gray-100 pb-4 text-gray-900 font-bold">Collection of User Information</h3>
            <p className="text-gray-900 mb-6">
              During app usage, we gather various types of personal data from users, including:
            </p>
            <ol className="space-y-6 mb-12 text-gray-900">
              <li>
                <strong>User-Provided Information:</strong> When users register for an account, create a profile, or engage with specific features of the App, they may voluntarily give us personal information. This can encompass details like their name, email address, phone number, location information, emergency contacts, and other relevant data.
              </li>
              <li>
                <strong>Automated Data Collection:</strong> When users access or use the App, certain information is automatically gathered. This includes device specifics (like type of device, operating system, and unique identifiers), log details (such as IP address, app usage statistics, and crash reports), and location data (obtained through GPS or other methods).
              </li>
              <li>
                <strong>Usage of Cookies and Related Technologies:</strong> To gather information about how users interact with the App, enhance their experience, and assess usage patterns, we employ cookies, beacons, and similar technologies. Users have the option to disable cookies via their device settings, though doing so may impact on the App's functionality.
              </li>
            </ol>

            <h3 className="text-2xl border-b border-gray-100 pb-4 text-gray-900 font-bold">Utilization of Collected Information</h3>
            <p className="text-gray-900 mb-6">
              The information we collect from users is utilized for various purposes, including:
            </p>
            <ol className="space-y-6 mb-12 text-gray-900">
              <li>
                <strong>Enhancing App Services:</strong> We use the data to provide and refine the App's services, such as personalized safety features, location sharing capabilities, and emergency response services.
              </li>
              <li>
                <strong>User Communication:</strong> We communicate with users about their accounts, updates to the App, promotional offers, and other relevant information pertaining to the App.
              </li>
              <li>
                <strong>Analysis and Improvement:</strong> The information aids in analyzing app usage trends and user preferences, which helps in enhancing the App's functionality, performance, and overall user experience.
              </li>
              <li>
                <strong>Legal and Security Compliance:</strong> We use the information to adhere to legal requirements, enforce our terms of use, and safeguard the rights, safety, and security of MySentry, its users, and the public.
              </li>
            </ol>

            <h3 className="text-2xl border-b border-gray-100 pb-4 text-gray-900 font-bold">Sharing of Information</h3>
            <p className="text-gray-900 mb-6">
              We might share personal information of users with these entities:
            </p>
            <ol className="space-y-6 mb-12 text-gray-900">
              <li>
                <strong>Third-Party Service Providers:</strong> We collaborate with external service providers who help us deliver the App's services. This may include sharing personal information for purposes such as hosting, data analysis, customer support, and other relevant functions.
              </li>
              <li>
                <strong>Emergency responders:</strong> In emergency situations, we may disclose users' location and pertinent details to emergency response teams. This includes law enforcement, medical staff, and other authorized individuals, as needed to offer assistance and guarantee the safety of our users.
              </li>
              <li>
                <strong>Compliance with Legal Requests:</strong> We may provide personal information to law enforcement, governmental bodies, or other authorized organizations in response to legal demands, such as court orders, or to adhere to relevant laws and regulations.
              </li>
              <li>
                <strong>Business Transactions:</strong> In events like a merger, acquisition, or asset sale involving MySentry, personal information may be transferred to the third party involved as a component of the transaction.
              </li>
              <li>
                <strong>Use of Non-Personal Data:</strong> We might share data that is aggregated or anonymized, ensuring it does not personally identify users, for various purposes including marketing, analytics, and research.
              </li>
            </ol>

            <h3 className="text-2xl border-b border-gray-100 pb-4 text-gray-900 font-bold">Permission to Access Contacts</h3>
            <div className="bg-[#e8f5e9] p-8 rounded-2xl border border-[#386758]/20 my-10 shadow-sm">
              <ul className="m-0 space-y-4 text-gray-900">
                <li>
                  <strong>Mysentry Vital Companion</strong> requires access to your contact list to allow you to designate emergency contacts who can be alerted in case of an emergency. When you grant permission, we will upload your contact list to our secure servers.
                </li>
                <li>
                  This allows the app to quickly identify and notify your chosen emergency contacts. Your contact information is used solely for this purpose: identifying and contacting your designated emergency contacts in an emergency situation initiated by you.
                </li>
                <li>
                  We do not share your contact information with any third parties, and we retain this data only as long as you use the app and maintain your list of emergency contacts. You can remove your consent and delete your contact information from our servers at any time within the app settings.
                </li>
              </ul>
            </div>

            <h3 className="text-2xl border-b border-gray-100 pb-4 text-gray-900 font-bold">Data Security & Compliance</h3>
            <p className="mb-6">
              MySentry is committed to the highest standards of data security and regulatory compliance. We employ enterprise-grade encryption and strict access controls to protect your sensitive health and location data.
            </p>
            <ul className="space-y-4 mb-12 list-disc pl-6 text-gray-900">
              <li><strong>HIPAA Compliance:</strong> We adhere to HIPAA standards to ensure the confidentiality, integrity, and availability of protected health information (PHI).</li>
              <li><strong>GDPR Compliance:</strong> For users in the European Union, we fully comply with the General Data Protection Regulation (GDPR), guaranteeing your rights to data access, rectification, and erasure.</li>
              <li><strong>SOC 2 Type II:</strong> Our infrastructure and processes are audited to meet SOC 2 Type II standards for security, availability, and confidentiality.</li>
              <li><strong>End-to-End Encryption:</strong> All data transmitted between your device and our servers is encrypted using TLS 1.3. Data at rest is encrypted using AES-256.</li>
            </ul>

            <h3 className="text-2xl border-b border-gray-100 pb-4 text-gray-900 font-bold">Rights and Choices for Users</h3>
            <p className="text-gray-900 mb-6">
              Users are entitled to specific rights and choices concerning their personal data, including the following:
            </p>
            <ol className="space-y-6 mb-12 text-gray-900">
              <li>
                <strong>Access and Update:</strong> Users can access and modify their personal information by logging into their account on the App and adjusting their profile settings.
              </li>
              <li>
                <strong>Opt-Out Choices:</strong> Users can choose not to receive our promotional communications by adhering to the opt-out instructions provided in each message or by reaching out to us directly.
              </li>
              <li>
                <strong>Location Sharing Preferences:</strong> Users have the choice to turn on or off the location sharing function in the App at any time.
              </li>
              <li>
                <strong>Cookie Preferences:</strong> Users can change their device's settings to block cookies or similar technologies utilized by the App, though this may impact the App's performance.
              </li>
            </ol>

            <h3 className="text-2xl border-b border-gray-100 pb-4 text-gray-900 font-bold">Requesting Data Deletion</h3>
            <p className="mb-12">
              Users can ask for the removal of their personal information from our records by reaching out to us. Note that certain data may be retained as required by law or for valid business reasons.
            </p>

            <h3 className="text-2xl border-b border-gray-100 pb-4 text-gray-900 font-bold">Privacy for Children</h3>
            <p className="mb-12">
              Our App is not designed for children below 13 years. We do not intentionally gather personal data from children under 13. If it comes to our attention that such information has been collected without parental consent, we will promptly take measures to remove it.
            </p>

            {/* NEW SECTIONS */}

            <h2 id="how-we-use-personal-information" className="text-2xl border-b border-gray-100 pb-4 text-gray-900 font-bold mt-16 mb-8 scroll-mt-24">How We Use Personal Information</h2>
            <p className="text-gray-900 mb-6">
              We process personal information only for legitimate business and service-related purposes, including to provide and operate MySentry's safety, security, wellness, communication, connected-device, and emergency response services; to authenticate users and manage accounts; to enable alerts, incident response, live communications, and location-aware assistance; to support connected cameras, sensors, devices, and third-party integrations authorized by the user; to improve service reliability, performance, and safety; to detect, prevent, and investigate fraud, misuse, abuse, and security incidents; and to comply with applicable legal, regulatory, and contractual obligations.
            </p>

            <h2 id="ai-features-model-training" className="text-2xl border-b border-gray-100 pb-4 text-gray-900 font-bold mt-16 mb-8 scroll-mt-24">AI Features and Model Training</h2>
            <p className="text-gray-900 mb-6">
              MySentry may use automated, algorithmic, or AI-enabled features to support certain product capabilities. Unless specifically disclosed otherwise, personal data is not used to train general-purpose AI models in a manner inconsistent with this Privacy Policy or applicable law. Where customer data is used to develop, test, improve, tune, validate, or monitor AI-enabled features, MySentry will describe the categories of data involved, the purpose of such use, the safeguards applied, and any user choices or controls that are available. Where required by law, MySentry will obtain consent or provide an appropriate opt-out mechanism.
            </p>

            <h2 id="data-retention" className="text-2xl border-b border-gray-100 pb-4 text-gray-900 font-bold mt-16 mb-8 scroll-mt-24">Data Retention</h2>
            <p className="text-gray-900 mb-6">
              MySentry retains personal information only for as long as reasonably necessary for the purposes described in this Privacy Policy, including to provide the services requested by the user, maintain account functionality, support emergency response and safety-related workflows, investigate misuse or incidents, comply with legal obligations, resolve disputes, enforce agreements, and protect the rights, safety, and security of users, MySentry, and others. Retention periods may vary based on the type of data, the feature involved, user settings, whether the data relates to an active or past incident, and applicable legal or contractual requirements.
            </p>

            <h2 id="third-party-sharing" className="text-2xl border-b border-gray-100 pb-4 text-gray-900 font-bold mt-16 mb-8 scroll-mt-24">Sharing of Information with Third Parties and Service Providers</h2>
            <p className="text-gray-900 mb-6">
              MySentry may share personal information with third parties only where necessary to operate, secure, support, and improve its services, or where otherwise permitted or required by law. These third parties may include cloud hosting and storage providers, communications providers, authentication providers, analytics and infrastructure providers, customer support vendors, professional monitoring providers, emergency contacts or other recipients designated by the user, emergency responders where appropriate, and device, camera, smart-home, or other integration partners that the user chooses to connect. MySentry may also disclose information in connection with legal requests, corporate transactions, or to protect rights, safety, and security. Where applicable, MySentry requires service providers and sub-processors to handle data subject to contractual, confidentiality, and data protection obligations.
            </p>

            <h2 id="privacy-rights-requests" className="text-2xl border-b border-gray-100 pb-4 text-gray-900 font-bold mt-16 mb-8 scroll-mt-24">Privacy Rights and Data Requests</h2>
            <p className="text-gray-900 mb-6">
              Subject to applicable law, users may have the right to request access to personal information, request correction of inaccurate information, request deletion of certain information, object to or restrict certain processing, withdraw consent where processing is based on consent, and request a portable copy of eligible information. Users may exercise these rights through available in-app settings, by contacting MySentry through the contact details provided in this Privacy Policy, or by submitting a verified privacy request using the methods identified on our website. MySentry may take reasonable steps to verify the identity of the requester before processing certain requests.
            </p>

            <h2 id="opt-out-options" className="text-2xl border-b border-gray-100 pb-4 text-gray-900 font-bold mt-16 mb-8 scroll-mt-24">User Choices and Opt-Out Options</h2>
            <p className="text-gray-900 mb-6">
              MySentry provides users with choices regarding certain categories of data use, depending on the feature, jurisdiction, and legal basis for processing. These choices may include opting out of promotional communications, managing device permissions such as location, camera, microphone, contacts, or notifications, disabling optional analytics or similar data collection where offered, adjusting cookie or tracking preferences where applicable, and controlling participation in certain AI-enabled or automated features where legally required or operationally supported. Some opt-out options may be available through device settings, browser controls, in-app settings, or by contacting MySentry directly.
            </p>

            <h2 id="effect-of-opting-out" className="text-2xl border-b border-gray-100 pb-4 text-gray-900 font-bold mt-16 mb-8 scroll-mt-24">Effect of Opting Out of Certain Data Uses</h2>
            <p className="text-gray-900 mb-6">
              Where MySentry offers a user choice to opt out of certain data uses, including model improvement or similar feature-development activities, that choice generally will not prevent the user from accessing core service functionality. However, opting out may reduce MySentry's ability to improve, personalize, test, or enhance certain AI-enabled, automated, or adaptive product capabilities over time. If a specific opt-out materially affects a feature or service experience, MySentry will disclose that impact at the point where the choice is offered or in the applicable product documentation.
            </p>

            <h2 id="authorized-access" className="text-2xl border-b border-gray-100 pb-4 text-gray-900 font-bold mt-16 mb-8 scroll-mt-24">When Authorized Personnel May Access Customer Data</h2>
            <p className="text-gray-900 mb-6">
              Authorized MySentry personnel, service providers, or monitoring personnel may access customer data only when reasonably necessary for legitimate operational, safety, legal, or support-related purposes. This may include responding to an active emergency or assistance event, providing customer support, troubleshooting service issues, investigating abuse or security incidents, complying with legal obligations, enforcing policies or agreements, or maintaining and improving service integrity. Access to personal data is limited to authorized individuals with a legitimate need to know and is subject to applicable safeguards, confidentiality obligations, and access controls.
            </p>

            <h2 id="user-data-control" className="text-2xl border-b border-gray-100 pb-4 text-gray-900 font-bold mt-16 mb-8 scroll-mt-24">How Users Can Access, Review, and Control Their Data</h2>
            <p className="text-gray-900 mb-6">
              MySentry provides users with tools and settings to access, review, manage, and in some cases delete or modify certain categories of data associated with their account and service use. Depending on the feature, users may be able to review account information, emergency contacts, location-sharing preferences, connected devices, event history, communications records, recordings, images, or other user-generated or device-generated content through the application, account dashboard, or available support channels. The scope of available controls may vary depending on the type of data, the product feature, the source of the data, and legal or operational requirements.
            </p>

            <h2 id="ai-updates" className="text-2xl border-b border-gray-100 pb-4 text-gray-900 font-bold mt-16 mb-8 scroll-mt-24">Updates to AI-Enabled Features and Service Capabilities</h2>
            <p className="text-gray-900 mb-6">
              MySentry may update, enhance, refine, or modify AI-enabled, automated, or detection-related capabilities from time to time. When material changes are made, MySentry may inform users through one or more of the following: updates to this Privacy Policy or other legal documentation, in-app notices, release notes, help-center materials, onboarding updates, email communications, or other reasonable methods. Where required by law or where changes materially affect how personal data is processed, MySentry will provide additional notice and, if applicable, obtain consent or offer updated choices.
            </p>

            <h2 className="text-2xl border-b border-gray-100 pb-4 text-gray-900 font-bold mt-16 mb-8">Updates to Our Privacy Policy</h2>
            <p className="text-gray-900 mb-12">
              We reserve the right to modify our Privacy Policy as needed. Any updates will be reflected on this page, along with the revision date. We advise users to regularly check this policy for any changes. Continued use of the App following any policy updates implies acceptance of the new terms.
            </p>

            <h2 className="text-2xl border-b border-gray-100 pb-4 text-gray-900 font-bold mt-16 mb-8">Contact Us</h2>
            <p className="text-gray-900 mb-12">
              For inquiries, concerns, or requests related to this Privacy Policy or the privacy practices of the MySentry App, users can reach us at <a href="mailto:support@mysentry.ai" className="text-[#386758] hover:underline">support@mysentry.ai</a>. By utilizing the MySentry App, users agree to and authorize the gathering, utilization, and disclosure of their personal information as outlined in this Privacy Policy.
            </p>
          </div>
        </main>
      </div>

      <Footer />
    </div>
  );
};

export default Privacy;
