
import React from 'react';

const EmployerOnePager = () => {
  return (
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
          <h1 className="text-4xl font-bold text-gray-800 font-heading">MySentry.ai</h1>
          <p className="text-lg text-gray-600">Peace of Mind for Your Workforce</p>
        </header>

        {/* Main Content */}
        <main className="mt-8">

          {/* Duty of Care Section */}
          <section className="text-center mb-12">
            <h2 className="text-5xl font-bold text-gray-800 font-heading leading-tight">Uphold Your Duty of Care and Protect Your Lone Workers</h2>
            <p className="mt-4 text-xl text-gray-600">MySentry.ai provides a proactive safety net for your employees, ensuring their well-being and your compliance.</p>
          </section>

          {/* Key Benefits Section */}
          <section className="mb-12">
            <h3 className="text-3xl font-bold text-center text-gray-800 font-heading mb-8">Key Benefits</h3>
            <div className="grid md:grid-cols-3 gap-8">
              <div className="bg-[#f0f9f4] p-6 rounded-lg text-center">
                <h4 className="text-2xl font-bold text-gray-800 font-heading mb-2">Objective Evidence</h4>
                <p className="text-gray-600">Capture live video and audio during incidents, providing irrefutable evidence for investigations and claims.</p>
              </div>
              <div className="bg-[#f0f9f4] p-6 rounded-lg text-center">
                <h4 className="text-2xl font-bold text-gray-800 font-heading mb-2">Accident Prevention</h4>
                <p className="text-gray-600">Automatic fall and crash detection provides immediate alerts, enabling rapid response to potential accidents.</p>
              </div>
              <div className="bg-[#f0f9f4] p-6 rounded-lg text-center">
                <h4 className="text-2xl font-bold text-gray-800 font-heading mb-2">Cost Savings</h4>
                <p className="text-gray-600">Reduce insurance premiums and liability costs with a proven safety solution that minimizes workplace incidents.</p>
              </div>
            </div>
          </section>

          {/* How It Works Section */}
          <section className="mb-12">
            <h3 className="text-3xl font-bold text-center text-gray-800 font-heading mb-8">How It Works</h3>
            <div className="flex flex-col md:flex-row justify-around items-center text-center">
              <div className="flex flex-col items-center mb-6 md:mb-0">
                <div className="bg-[#e8f5e9] rounded-full w-24 h-24 flex items-center justify-center text-4xl font-bold text-gray-800 mb-4">1</div>
                <p className="text-lg text-gray-600">An incident is detected or a panic alarm is triggered.</p>
              </div>
              <div className="flex flex-col items-center mb-6 md:mb-0">
                <div className="bg-[#e8f5e9] rounded-full w-24 h-24 flex items-center justify-center text-4xl font-bold text-gray-800 mb-4">2</div>
                <p className="text-lg text-gray-600">Live video and audio are streamed to our 24/7 monitoring center.</p>
              </div>
              <div className="flex flex-col items-center">
                <div className="bg-[#e8f5e9] rounded-full w-24 h-24 flex items-center justify-center text-4xl font-bold text-gray-800 mb-4">3</div>
                <p className="text-lg text-gray-600">Our team assesses the situation and dispatches emergency services if needed.</p>
              </div>
            </div>
          </section>

          {/* ROI Snapshot Section */}
          <section className="bg-[#f0f9f4] p-8 rounded-lg mb-12">
            <h3 className="text-3xl font-bold text-center text-gray-800 font-heading mb-6">Return on Investment Snapshot</h3>
            <div className="text-center">
              <p className="text-xl text-gray-600 mb-4">Companies using MySentry.ai typically see a significant reduction in incident-related costs.</p>
              <div className="text-5xl font-bold text-green-600">25%</div>
              <p className="text-lg text-gray-600">Average reduction in insurance premiums within the first year.</p>
            </div>
          </section>

          {/* CTA Section */}
          <section className="text-center">
            <h3 className="text-3xl font-bold text-gray-800 font-heading mb-4">Ready to Protect Your Team?</h3>
            <p className="text-xl text-gray-600 mb-8">Request a demo to see how MySentry.ai can enhance your company's safety program.</p>
            <a href="/pricing#pricing-plans" className="bg-green-600 text-white font-bold py-4 px-8 rounded-lg text-xl hover:bg-green-700 transition duration-300 no-print">Start 7-Day Free Trial</a>
          </section>

        </main>

        {/* Footer */}
        <footer className="mt-12 text-center text-gray-500 text-sm pt-4 border-t-2 border-gray-200">
          <p>&copy; {new Date().getFullYear()} MySentry.ai. All rights reserved.</p>
          <p className="no-print">For more information, visit www.mysentry.ai</p>
        </footer>

      </div>
    </div>
  );
};

export default EmployerOnePager;
