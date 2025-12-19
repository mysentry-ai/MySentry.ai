import React from 'react';
import SEO from '../components/SEO';

const Privacy = () => {
  return (
    <div className="min-h-screen bg-background pt-24">
      <SEO 
        title="Privacy Policy | MySentry" 
        description="Read our Privacy Policy to understand how MySentry collects, uses, and protects your personal information."
      />

      <div className="container mx-auto px-4 py-12 max-w-4xl">
        <h1 className="text-4xl font-bold text-primary mb-8">Privacy Policy</h1>
        
        <div className="prose prose-lg dark:prose-invert max-w-none">
          <p className="lead text-xl text-muted-foreground mb-8">
            At MySentry.ai, our dedication to user privacy and security is paramount. In this Privacy Policy, we explain the types of personal information that may be collected through the MySentry app (referred to as "the App"), how this information might be used and shared, and the choices available to users with respect to their personal information.
          </p>

          <h2 className="text-2xl font-bold text-foreground mt-12 mb-6">Collection of User Information</h2>
          <p className="text-muted-foreground mb-4">In the course of app usage, we gather various types of personal data from users, including:</p>
          <ul className="list-disc pl-6 space-y-4 text-muted-foreground mb-8">
            <li>
              <strong className="text-foreground">User-Provided Information:</strong> When users register for an account, create a profile, or engage with specific features of the App, they may voluntarily give us personal information. This can encompass details like their name, email address, phone number, location information, emergency contacts, and other relevant data.
            </li>
            <li>
              <strong className="text-foreground">Automated Data Collection:</strong> When users access or use the App, certain information is automatically gathered. This includes device specifics (like type of device, operating system, and unique identifiers), log details (such as IP address, app usage statistics, and crash reports), and location data (obtained through GPS or other methods).
            </li>
            <li>
              <strong className="text-foreground">Usage of Cookies and Related Technologies:</strong> To gather information about how users interact with the App, enhance their experience, and assess usage patterns, we employ cookies, beacons, and similar technologies. Users have the option to disable cookies via their device settings, though doing so may impact the App's functionality.
            </li>
          </ul>

          <h2 className="text-2xl font-bold text-foreground mt-12 mb-6">Utilization of Collected Information</h2>
          <p className="text-muted-foreground mb-4">The information we collect from users is utilized for various purposes, including:</p>
          <ul className="list-disc pl-6 space-y-4 text-muted-foreground mb-8">
            <li>
              <strong className="text-foreground">Enhancing App Services:</strong> We use the data to provide and refine the App's services, such as personalized safety features, location sharing capabilities, and emergency response services.
            </li>
            <li>
              <strong className="text-foreground">User Communication:</strong> We communicate with users about their accounts, updates to the App, promotional offers, and other relevant information pertaining to the App.
            </li>
            <li>
              <strong className="text-foreground">Analysis and Improvement:</strong> The information aids in analyzing app usage trends and user preferences, which helps in enhancing the App's functionality, performance, and overall user experience.
            </li>
            <li>
              <strong className="text-foreground">Legal and Security Compliance:</strong> We use the information to adhere to legal requirements, enforce our terms of use, and safeguard the rights, safety, and security of MySentry, its users, and the public.
            </li>
          </ul>

          <h2 className="text-2xl font-bold text-foreground mt-12 mb-6">Sharing of Information</h2>
          <p className="text-muted-foreground mb-4">We might share personal information of users with these entities:</p>
          <ul className="list-disc pl-6 space-y-4 text-muted-foreground mb-8">
            <li>
              <strong className="text-foreground">Third-Party Service Providers:</strong> We collaborate with external service providers who help us deliver the App's services. This may include sharing personal information for purposes such as hosting, data analysis, customer support, and other relevant functions.
            </li>
            <li>
              <strong className="text-foreground">Emergency responders:</strong> In emergency situations, we may disclose users' location and pertinent details to emergency response teams. This includes law enforcement, medical staff, or other authorized individuals, as needed to offer assistance and guarantee the safety of our users.
            </li>
            <li>
              <strong className="text-foreground">Compliance with Legal Requests:</strong> We may provide personal information to law enforcement, governmental bodies, or other authorized organizations in response to legal demands, such as court orders, or to adhere to relevant laws and regulations.
            </li>
          </ul>

          <h2 className="text-2xl font-bold text-foreground mt-12 mb-6">Permission to Access Contacts</h2>
          <div className="bg-secondary/30 p-6 rounded-xl mb-8">
            <p className="text-muted-foreground mb-4">
              MySentry Vital Companion requires access to your contact list to allow you to designate emergency contacts who can be alerted in case of an emergency. When you grant permission, we upload your contact list to our secure servers.
            </p>
            <p className="text-muted-foreground mb-4">
              This allows the app to quickly identify and notify your chosen emergency contacts. Your contact information is used solely for this purpose: identifying and contacting your designated emergency contacts in an emergency situation initiated by you.
            </p>
            <p className="text-muted-foreground">
              We do not share your contact information with any third parties, and we retain this data only as long as you use the app and maintain your list of emergency contacts. You can remove your consent and delete your contact information from our servers at any time within the app settings.
            </p>
          </div>

          <h2 className="text-2xl font-bold text-foreground mt-12 mb-6">Contact Us</h2>
          <p className="text-muted-foreground mb-8">
            For inquiries, concerns, or requests related to this Privacy Policy or the privacy practices of the MySentry App, users can reach us at <a href="mailto:support@mysentry.ai" className="text-primary hover:underline">support@mysentry.ai</a>.
          </p>
        </div>
      </div>
    </div>
  );
};

export default Privacy;
