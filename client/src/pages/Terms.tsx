import Layout from "@/components/Layout";
import SEO from "@/components/SEO";
import HeroSection from "@/components/HeroSection";

export default function Terms() {
  return (
    <Layout>
      <SEO />
      
      <HeroSection
        label="Legal"
        title="Terms & Conditions"
        imageSrc="/images/cdn/IElpNKDyEyZQAZJG.jpg"
        imageAlt="Terms & Conditions"
      />

      <div className="container mx-auto px-4 py-24 max-w-4xl">
        <div id="terms-content" className="bg-white p-8 md:p-16 rounded-3xl shadow-xl border border-gray-100 prose prose-lg max-w-none prose-headings:font-barlow prose-headings:uppercase prose-headings:font-bold prose-headings:text-gray-900 prose-headings:mt-16 prose-headings:mb-8 prose-a:text-[#386758] prose-a:no-underline hover:prose-a:underline prose-p:text-gray-900 prose-p:leading-relaxed prose-p:mb-8 prose-li:text-gray-900 prose-li:mb-4">
          
          <section className="mb-12">
            <h2 className="text-2xl mb-4 text-gray-900 font-bold">1. Introduction</h2>
            <p className="text-gray-900">
              Welcome to MySentry. These Terms and Conditions ("Terms") govern the use of the MySentry services, including the MySentry mobile app, website, and related services ("Services"). By using MySentry, you agree to comply with these Terms.
            </p>
            <h3 className="text-xl mt-6 mb-3 font-semibold text-gray-900">Definitions</h3>
            <ul className="list-disc pl-6 space-y-2">
              <li><strong>End User:</strong> An individual who subscribes to or uses MySentry's services for personal safety and wellness.</li>
              <li><strong>Dealer:</strong> A third-party entity authorized to distribute and manage licenses for MySentry services.</li>
              <li><strong>Organization:</strong> A business, institution, or company that manages users through the MySentry service.</li>
              <li><strong>Account Management Dashboard:</strong> A control panel used by Dealers and Organizations to manage accounts, licenses, and user activity.</li>
            </ul>
          </section>

          <section className="mb-12">
            <h2 className="text-2xl mb-4 text-gray-900 font-bold">2. Use of Services</h2>
            
            <h3 className="text-xl mt-6 mb-3 font-semibold text-gray-900">2.1 End User</h3>
            <p className="text-gray-900">
              As an End User, you are granted a limited, non-transferable license to use the MySentry mobile app and associated services solely for personal use. Your use of MySentry’s services is subject to:
            </p>
            <ul className="list-disc pl-6 space-y-2 mt-2">
              <li>Providing accurate and complete information during onboarding.</li>
              <li>Allowing required permissions such as location, camera, microphone, and notifications to enable MySentry’s safety features.</li>
              <li>Complying with all safety protocols and configurations as outlined in the app.</li>
            </ul>

            <h3 className="text-xl mt-8 mb-3 font-semibold text-gray-900">2.2 Dealer</h3>
            <p className="text-gray-900">
              Dealers are responsible for distributing MySentry licenses and managing user and organization accounts. As a Dealer:
            </p>
            <ul className="list-disc pl-6 space-y-2 mt-2">
              <li>You must maintain the necessary licenses to sell and distribute MySentry subscriptions in your region.</li>
              <li>You are responsible for ensuring that MySentry services are provided under proper contracts, ensuring consumer protection laws are followed, including cancellation rights.</li>
              <li>You are prohibited from accessing other Dealer accounts or data without explicit consent.</li>
            </ul>

            <h3 className="text-xl mt-8 mb-3 font-semibold text-gray-900">2.3 Organization</h3>
            <p className="text-gray-900">
              Organizations use the Account Management Dashboard to manage employees or members. As an Organization:
            </p>
            <ul className="list-disc pl-6 space-y-2 mt-2">
              <li>You are responsible for assigning licenses and managing user activity.</li>
              <li>You must maintain the security and privacy of user data within your organization and ensure compliance with MySentry’s terms.</li>
            </ul>
          </section>

          <section className="mb-12">
            <h2 className="text-2xl mb-4 text-gray-900 font-bold">3. Account Management</h2>
            
            <h3 className="text-xl mt-6 mb-3 font-semibold text-gray-900">3.1 Creating an Account</h3>
            <p className="text-gray-900">
              To use MySentry's services, you must create an account. For End Users, this involves providing personal details and emergency contact information. For Dealers and Organizations, account setup involves business information and details of the individual managing the dashboard.
            </p>

            <h3 className="text-xl mt-8 mb-3 font-semibold text-gray-900">3.2 Account Security</h3>
            <p className="text-gray-900">
              You are responsible for maintaining the confidentiality of your account credentials. Notify MySentry immediately if you suspect unauthorized access to your account.
            </p>

            <h3 className="text-xl mt-8 mb-3 font-semibold text-gray-900">3.3 License and Subscription Plans</h3>
            <ul className="list-disc pl-6 space-y-2 mt-2">
              <li><strong>Individual Plan:</strong> Grants access to individual safety features.</li>
              <li><strong>Family Plan:</strong> Includes additional family safety features.</li>
              <li><strong>Dealer and Organization Plan:</strong> Includes tools for managing multiple users, distributing licenses, and tracking activity.</li>
            </ul>
            <p className="mt-4">
              Subscriptions are non-refundable, and you may cancel at any time. Access will continue until the end of the billing period.
            </p>
          </section>

          <section className="mb-12">
            <h2 className="text-2xl mb-4 text-gray-900 font-bold">4. Privacy and Data Protection</h2>
            <p className="text-gray-900">
              MySentry is committed to protecting your privacy. By using our services, you consent to the collection and use of personal data as described in our Privacy Policy. This includes health and location data for safety and wellness monitoring. We will store and process your data securely in compliance with applicable data protection laws.
            </p>
          </section>

          <section className="mb-12">
            <h2 className="text-2xl mb-4 text-gray-900 font-bold">5. Service Availability</h2>
            <p className="text-gray-900">
              MySentry strives to provide continuous service. However, we do not guarantee uninterrupted or error-free service. We will make reasonable efforts to restore services in case of downtime or technical issues.
            </p>
          </section>

          <section className="mb-12">
            <h2 className="text-2xl mb-4 text-gray-900 font-bold">6. Features and Limitations</h2>
            <p className="text-gray-900">
              MySentry offers a variety of safety features, including Panic Alarms, Crash Detection, Health Monitoring, and MeetSafe. These features rely on device sensors, internet connectivity, and correct configuration. You acknowledge that:
            </p>
            <ul className="list-disc pl-6 space-y-2 mt-2">
              <li>Panic Alarm functionality may be limited if the phone lacks internet connectivity or battery.</li>
              <li>Health Monitoring depends on device sensors and may not provide medically accurate data.</li>
            </ul>
          </section>

          <section className="mb-12">
            <h2 className="text-2xl mb-4 text-gray-900 font-bold">7. Dealer Responsibilities and Agreements</h2>
            
            <h3 className="text-xl mt-6 mb-3 font-semibold text-gray-900">7.1 Compliance with Legal Requirements</h3>
            <p className="text-gray-900">
              Dealers must comply with all local, state, and federal laws regarding MySentry subscription sales and distribution. They must hold the necessary licenses to operate in their jurisdiction.
            </p>

            <h3 className="text-xl mt-8 mb-3 font-semibold text-gray-900">7.2 Subscriber Contracts</h3>
            <p className="text-gray-900">
              Dealers must use the approved Subscriber Contracts or End User License Agreements (EULAs) provided by MySentry. These contracts should clearly outline the service terms, cancellation rights, and liabilities. Dealers are responsible for ensuring that these agreements are compliant with consumer protection laws and are properly signed by subscribers.
            </p>

            <h3 className="text-xl mt-8 mb-3 font-semibold text-gray-900">7.3 Service Payment and Charges</h3>
            <p className="text-gray-900">
              Dealers must pay MySentry’s service charges on time. MySentry reserves the right to modify the pricing with 30 days' notice.
            </p>

            <h3 className="text-xl mt-8 mb-3 font-semibold text-gray-900">7.4 Liability and Indemnity</h3>
            <p className="text-gray-900">
              Dealers indemnify and hold MySentry harmless from any claims arising out of their operations. This includes damage, loss, or injury due to the dealer's failure to comply with contractual obligations.
            </p>

            <h3 className="text-xl mt-8 mb-3 font-semibold text-gray-900">7.5 Termination and Default</h3>
            <p className="text-gray-900">
              MySentry or the Dealer may terminate the agreement with proper notice. Dealers are responsible for paying any outstanding charges upon termination, including fees for services already provided.
            </p>
          </section>

          <section className="mb-12">
            <h2 className="text-2xl mb-4 text-gray-900 font-bold">8. Termination of Dealer Agreement</h2>
            <p className="text-gray-900">
              Either MySentry or the Dealer may terminate the agreement in case of default or non-compliance with the terms. A 30-day notice is required for termination, and any outstanding charges must be paid in full.
            </p>
          </section>

          <section className="mb-12">
            <h2 className="text-2xl mb-4 text-gray-900 font-bold">9. Miscellaneous Provisions</h2>
            
            <h3 className="text-xl mt-6 mb-3 font-semibold text-gray-900">9.1 Dispute Resolution</h3>
            <p className="text-gray-900">
              Any disputes arising from these Terms shall be resolved through binding arbitration under the laws of the State of New York.
            </p>

            <h3 className="text-xl mt-8 mb-3 font-semibold text-gray-900">9.2 Modification of Terms</h3>
            <p className="text-gray-900">
              MySentry reserves the right to modify or update these Terms. Changes will be effective once posted on the website or within the app.
            </p>

            <h3 className="text-xl mt-8 mb-3 font-semibold text-gray-900">9.3 Limitation of Liability</h3>
            <p className="text-gray-900">
              MySentry’s liability is limited to a maximum of $500. We are not liable for any indirect, incidental, special, or consequential damages.
            </p>

            <h3 className="text-xl mt-8 mb-3 font-semibold text-gray-900">9.4 Indemnity</h3>
            <p className="text-gray-900">
              Dealers and Organizations agree to indemnify MySentry against any claims or damages arising from their use of the Services.
            </p>
          </section>

          <section className="mb-12">
            <h2 className="text-2xl mb-4 text-gray-900 font-bold">10. Term and Duration</h2>
            <p className="text-gray-900">
              These Terms are effective upon signing or use of MySentry services and remain in effect until terminated by either party with appropriate notice. The Terms will automatically renew for subsequent periods unless a party provides at least 30 days’ notice of intent to terminate.
            </p>
          </section>

          <section className="border-t border-gray-200 pt-12 mt-12">
            <h2 className="text-2xl mb-6">Contact Information</h2>
            <p className="mb-4">
              For any questions regarding these Terms or to contact MySentry for support, please reach out to:
            </p>
            <ul className="list-none space-y-2">
              <li>
                <strong>Email:</strong> <a href="mailto:support@mysentry.ai" className="text-primary hover:underline">support@mysentry.ai</a>
              </li>
              <li>
                <strong>Website:</strong> <a href="https://mysentry.ai" target="_blank" rel="noopener noreferrer" className="text-primary hover:underline">mysentry.ai</a>
              </li>
            </ul>
          </section>

        </div>
      </div>
    </Layout>
  );
}
