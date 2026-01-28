import React from 'react';
import Navbar from '../components/Navbar';
import Footer from '../components/Footer';
import HeroSection from "@/components/HeroSection";

export const Privacy = () => {
  return (
    <div className="min-h-screen bg-white font-sans text-[#1a1a1a]">
      <Navbar />
      
      <HeroSection
        label="Legal"
        title="Privacy Policy"
        description="Last Updated: January 22, 2026"
        imageSrc="/images/smartwatches-display.jpg"
        imageAlt="Privacy Policy"
      />

      <div className="container mx-auto px-4 py-24 max-w-4xl">
        <div className="bg-white p-8 md:p-16 rounded-3xl shadow-xl border border-gray-100 prose prose-lg max-w-none prose-headings:font-barlow prose-headings:uppercase prose-headings:font-bold prose-headings:text-[#1a1a1a] prose-headings:mt-16 prose-headings:mb-8 prose-a:text-[#386758] prose-a:no-underline hover:prose-a:underline prose-p:text-gray-900 prose-p:leading-relaxed prose-p:mb-8 prose-li:text-gray-900 prose-li:mb-4">
          
          <p className="lead text-xl text-gray-900 font-medium mb-12">
            At MySentry.ai, our dedication to user privacy and security is paramount. In this Privacy Policy, we explain the types of personal information that may be collected through the MySentry app (referred to as "the App"), how this information might be used and shared, and the choices available to users with respect to their personal information.
          </p>

          <h3 className="text-2xl border-b border-gray-100 pb-4">Collection of User Information</h3>
          <p>
            During app usage, we gather various types of personal data from users, including:
          </p>
          <ol className="space-y-6 mb-12">
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

          <h3 className="text-2xl border-b border-gray-100 pb-4">Utilization of Collected Information</h3>
          <p>
            The information we collect from users is utilized for various purposes, including:
          </p>
          <ol className="space-y-6 mb-12">
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

          <h3 className="text-2xl border-b border-gray-100 pb-4">Sharing of Information</h3>
          <p>
            We might share personal information of users with these entities:
          </p>
          <ol className="space-y-6 mb-12">
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

          <h3 className="text-2xl border-b border-gray-100 pb-4">Permission to Access Contacts</h3>
          <div className="bg-[#e8f5e9] p-8 rounded-2xl border border-[#386758]/20 my-10 shadow-sm">
            <ul className="m-0 space-y-4">
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

          <h3 className="text-2xl border-b border-gray-100 pb-4">Data Retention</h3>
          <p className="mb-12">
            We maintain users' personal data for the duration necessary to achieve the purposes for which it was gathered, comply with legal obligations, settle disputes, uphold our rights, or support other legitimate business needs.
          </p>

          <h3 className="text-2xl border-b border-gray-100 pb-4">Data Security & Compliance</h3>
          <p className="mb-6">
            MySentry is committed to the highest standards of data security and regulatory compliance. We employ enterprise-grade encryption and strict access controls to protect your sensitive health and location data.
          </p>
          <ul className="space-y-4 mb-12 list-disc pl-6">
            <li><strong>HIPAA Compliance:</strong> We adhere to HIPAA standards to ensure the confidentiality, integrity, and availability of protected health information (PHI).</li>
            <li><strong>GDPR Compliance:</strong> For users in the European Union, we fully comply with the General Data Protection Regulation (GDPR), guaranteeing your rights to data access, rectification, and erasure.</li>
            <li><strong>SOC 2 Type II:</strong> Our infrastructure and processes are audited to meet SOC 2 Type II standards for security, availability, and confidentiality.</li>
            <li><strong>End-to-End Encryption:</strong> All data transmitted between your device and our servers is encrypted using TLS 1.3. Data at rest is encrypted using AES-256.</li>
          </ul>

          <h3 className="text-2xl border-b border-gray-100 pb-4">Rights and Choices for Users</h3>
          <p>
            Users are entitled to specific rights and choices concerning their personal data, including the following:
          </p>
          <ol className="space-y-6 mb-12">
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

          <h3 className="text-2xl border-b border-gray-100 pb-4">Requesting Data Deletion</h3>
          <p className="mb-12">
            Users can ask for the removal of their personal information from our records by reaching out to us. Note that certain data may be retained as required by law or for valid business reasons.
          </p>

          <h3 className="text-2xl border-b border-gray-100 pb-4">Privacy for Children</h3>
          <p className="mb-12">
            Our App is not designed for children below 13 years. We do not intentionally gather personal data from children under 13. If it comes to our attention that such information has been collected without parental consent, we will promptly take measures to remove it.
          </p>

          <h3 className="text-2xl border-b border-gray-100 pb-4">Updates to Our Privacy Policy</h3>
          <p className="mb-12">
            We reserve the right to modify our Privacy Policy as needed. Any updates will be reflected on this page, along with the revision date. We advise users to regularly check this policy for any changes. Continued use of the App following any policy updates implies acceptance of the new terms.
          </p>

          <h3 className="text-2xl border-b border-gray-100 pb-4">Contact Us</h3>
          <p className="mb-12">
            For inquiries, concerns, or requests related to this Privacy Policy or the privacy practices of the MySentry App, users can reach us at <a href="mailto:support@mysentry.ai">support@mysentry.ai</a>. By utilizing the MySentry App, users agree to and authorize the gathering, utilization, and disclosure of their personal information as outlined in this Privacy Policy.
          </p>

        </div>
      </div>

      <Footer />
    </div>
  );
};

export default Privacy;
