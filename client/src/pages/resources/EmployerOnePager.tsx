
import React from 'react';
import SEO from '@/components/SEO';

const EmployerOnePager = () => {
  return (
    <>
      <SEO
        title="Employer Safety One-Pager | MySentry"
        description="A concise employer overview of MySentry Panic Alarm, Safety Checks, eligible incident detection, professional monitoring, privacy, and limitations."
        canonical="https://mysentry.ai/resources/employer-one-pager"
      />
    <div className="bg-[#e8f5e9] min-h-screen font-sans">
      <style>
        {`
          @media print {
            body {
              -webkit-print-color-adjust: exact;
              print-color-adjust: exact;
            }
            .no-print {
              display: none;
            }
          }
        `}
      </style>
      <div className="max-w-4xl mx-auto p-8 bg-white shadow-lg print:shadow-none">

        {/* Header */}
        <header className="flex justify-between items-center pb-4 border-b-2 border-gray-200">
          <p className="text-4xl font-bold text-gray-800 font-heading">MySentry.ai</p>
          <p className="text-lg text-gray-600">Peace of Mind for Your Workforce</p>
        </header>

        {/* Main Content */}
        <main className="mt-8">

          {/* Duty of Care Section */}
          <section className="text-center mb-12">
            <h1 className="text-5xl font-bold text-gray-800 font-heading leading-tight">Add a Personal Safety Workflow for Lone Workers</h1>
            <p className="mt-4 text-xl text-gray-600">MySentry adds user-activated alerts, scheduled check-ins, eligible incident detection, and professional monitoring to a broader workplace safety program.</p>
          </section>

          {/* Key Benefits Section */}
          <section className="mb-12">
            <h3 className="text-3xl font-bold text-center text-gray-800 font-heading mb-8">Key Benefits</h3>
            <div className="grid md:grid-cols-3 gap-8">
              <div className="bg-[#f0f9f4] p-6 rounded-lg text-center">
                <h4 className="text-2xl font-bold text-gray-800 font-heading mb-2">Permitted Alert Context</h4>
                <p className="text-gray-600">Eligible alerts may include supported location, audio, video, or account context when the required permissions and connection are available.</p>
              </div>
              <div className="bg-[#f0f9f4] p-6 rounded-lg text-center">
                <h4 className="text-2xl font-bold text-gray-800 font-heading mb-2">Safety Checks and Detection</h4>
                <p className="text-gray-600">Workers can schedule a Safety Check, and a supported device may identify an eligible fall or crash-like event and begin a check-in.</p>
              </div>
              <div className="bg-[#f0f9f4] p-6 rounded-lg text-center">
                <h4 className="text-2xl font-bold text-gray-800 font-heading mb-2">Professional Monitoring</h4>
                <p className="text-gray-600">An eligible monitoring agent may review an alert, attempt contact, and coordinate with designated contacts or emergency services when appropriate.</p>
              </div>
            </div>
          </section>

          {/* How It Works Section */}
          <section className="mb-12">
            <h3 className="text-3xl font-bold text-center text-gray-800 font-heading mb-8">How It Works</h3>
            <div className="flex flex-col md:flex-row justify-around items-center text-center">
              <div className="flex flex-col items-center mb-6 md:mb-0">
                <div className="bg-[#e8f5e9] rounded-full w-24 h-24 flex items-center justify-center text-4xl font-bold text-gray-800 mb-4">1</div>
                <p className="text-lg text-gray-600">A worker starts a Panic Alarm or Safety Check, or an eligible device event begins a check-in.</p>
              </div>
              <div className="flex flex-col items-center mb-6 md:mb-0">
                <div className="bg-[#e8f5e9] rounded-full w-24 h-24 flex items-center justify-center text-4xl font-bold text-gray-800 mb-4">2</div>
                <p className="text-lg text-gray-600">The alert may include the permitted context available from the supported device.</p>
              </div>
              <div className="flex flex-col items-center">
                <div className="bg-[#e8f5e9] rounded-full w-24 h-24 flex items-center justify-center text-4xl font-bold text-gray-800 mb-4">3</div>
                <p className="text-lg text-gray-600">An eligible agent may review the alert and coordinate the next configured step.</p>
              </div>
            </div>
          </section>

          {/* Rollout Checklist Section */}
          <section className="bg-[#f0f9f4] p-8 rounded-lg mb-12">
            <h3 className="text-3xl font-bold text-center text-gray-800 font-heading mb-6">Employer Rollout Checklist</h3>
            <ul className="mx-auto grid max-w-2xl gap-3 text-left text-lg text-gray-700">
              <li>Identify eligible workers, work areas, and connectivity gaps.</li>
              <li>Confirm supported devices, plans, permissions, and regional availability.</li>
              <li>Document designated contacts, escalation procedures, and a disconnected-area backup plan.</li>
              <li>Review privacy, labor, safety, and legal requirements with qualified advisors.</li>
            </ul>
          </section>

          {/* CTA Section */}
          <section className="text-center">
            <h3 className="text-3xl font-bold text-gray-800 font-heading mb-4">Ready to Protect Your Team?</h3>
            <p className="text-xl text-gray-600 mb-8">Request a demo to review current capabilities, eligibility, privacy, and limitations for your team.</p>
            <a href="/contact" className="bg-[#0b6848] text-white font-bold py-4 px-8 rounded-lg text-xl hover:bg-[#084f38] transition duration-300 no-print">Book a Demo</a>
          </section>

        </main>

        {/* Footer */}
        <footer className="mt-12 text-center text-gray-500 text-sm pt-4 border-t-2 border-gray-200">
          <p>&copy; {new Date().getFullYear()} MySentry.ai. All rights reserved.</p>
          <p className="no-print">For more information, visit www.mysentry.ai</p>
        </footer>

      </div>
    </div>
    </>
  );
};

export default EmployerOnePager;
