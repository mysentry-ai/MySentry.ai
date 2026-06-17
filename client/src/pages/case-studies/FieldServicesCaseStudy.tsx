import React from 'react';

// Mock components to make the code self-contained for now.
// In a real project, these would be imported from a components library.
const Layout = ({ children }: { children: React.ReactNode }) => <div className="font-sans">{children}</div>;
const SEO = ({ seoTitle, seoDescription, canonical }: { seoTitle: string, seoDescription: string, canonical: string }) => (
  <head>
    <title>{seoTitle}</title>
    <meta name="description" content={seoDescription} />
    <link rel="canonical" href={`https://mysentry.ai${canonical}`} />
  </head>
);
const Section = ({ children, className }: { children: React.ReactNode, className?: string }) => <section className={`py-16 md:py-24 ${className}`}>{children}</section>;
const Button = ({ children, className }: { children: React.ReactNode, className?: string }) => <a href="/pricing#pricing-plans" className={`inline-block bg-green-600 text-white font-bold py-3 px-6 rounded-lg hover:bg-green-700 transition-colors ${className}`}>{children}</a>;
const ArrowRight = () => <span className="ml-2">→</span>;

const FieldServicesCaseStudy = () => {
  return (
    <Layout>
      <SEO
        seoTitle="MySentry Case Study: Field Services Safety Transformation"
        seoDescription="Discover how a national field services company enhanced worker safety, achieved 100% OSHA compliance, and saw a 78% reduction in claims with MySentry."
        canonical="/case-studies/field-services"
      />
      <div className="bg-[#f0f9f4] py-12 md:py-20">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto text-center">
            <p className="text-sm font-semibold text-green-700 uppercase tracking-wider">
              Case Study: Field Services
            </p>
            <h1 className="font-heading mt-2 text-4xl md:text-5xl font-bold text-gray-800" style={{ fontFamily: '"Teko", sans-serif' }}>
              Enhancing Lone Worker Safety and Achieving Full OSHA Compliance
            </h1>
            <p className="mt-4 text-lg text-gray-600">
              How a leading field services company transformed its safety protocols and achieved a significant return on investment with MySentry's advanced monitoring solutions.
            </p>
          </div>
        </div>
      </div>

      <Section>
        <div className="container mx-auto px-4">
          <div className="grid md:grid-cols-3 gap-12 items-start">
            <div className="md:col-span-1">
              <h2 className="font-heading text-3xl font-bold text-gray-800" style={{ fontFamily: '"Teko", sans-serif' }}>The Challenge</h2>
            </div>
            <div className="md:col-span-2">
              <p className="text-lg text-gray-700 mb-4">
                A national field services company, with a team of over 300 technicians, faced significant challenges ensuring the safety of its lone workers. These technicians often worked in remote and potentially hazardous environments, leading to critical safety concerns.
              </p>
              <p className="text-lg text-gray-700">
                The company had recently experienced two serious incidents where workers were injured in falls, and emergency response was delayed due to a lack of immediate communication. Furthermore, an internal audit revealed several gaps in their compliance with OSHA regulations for lone worker safety, putting the company at risk of penalties and reputational damage.
              </p>
            </div>
          </div>
        </div>
      </Section>

      <div className="bg-[#e8f5e9]">
        <Section>
          <div className="container mx-auto px-4">
            <div className="grid md:grid-cols-3 gap-12 items-start">
              <div className="md:col-span-1">
                <h2 className="font-heading text-3xl font-bold text-gray-800" style={{ fontFamily: '"Teko", sans-serif' }}>The Solution</h2>
              </div>
              <div className="md:col-span-2">
                <p className="text-lg text-gray-700 mb-4">
                  MySentry was deployed company-wide, providing a comprehensive safety net for every lone worker. The solution included automatic fall and crash detection, proactive health monitoring, and precise GPS tracking for rapid location identification.
                </p>
                <p className="text-lg text-gray-700">
                  Each technician was equipped with a discreet wearable device and a smartphone app, ensuring they were always connected. In the event of a fall, an alert is automatically sent to the monitoring center within 2 minutes, enabling immediate dispatch of emergency services. This proactive approach closed the company's OSHA compliance gaps and created a much safer working environment.
                </p>
              </div>
            </div>
          </div>
        </Section>
      </div>

      <Section>
        <div className="container mx-auto px-4">
          <div className="grid md:grid-cols-3 gap-12 items-start">
            <div className="md:col-span-1">
              <h2 className="font-heading text-3xl font-bold text-gray-800" style={{ fontFamily: '"Teko", sans-serif' }}>The Results</h2>
            </div>
            <div className="md:col-span-2">
              <p className="text-lg text-gray-700 mb-6">
                The implementation of MySentry yielded transformative results across safety, compliance, and finance.
              </p>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-8">
                <div className="bg-white p-6 rounded-lg shadow-md">
                  <p className="text-4xl font-bold text-green-600">100%</p>
                  <p className="mt-2 text-gray-600">OSHA Compliance Achieved</p>
                </div>
                <div className="bg-white p-6 rounded-lg shadow-md">
                  <p className="text-4xl font-bold text-green-600">45%</p>
                  <p className="mt-2 text-gray-600">Faster Emergency Response</p>
                </div>
                <div className="bg-white p-6 rounded-lg shadow-md">
                  <p className="text-4xl font-bold text-green-600">78%</p>
                  <p className="mt-2 text-gray-600">Reduction in Workers' Comp Claims</p>
                </div>
                <div className="bg-white p-6 rounded-lg shadow-md">
                  <p className="text-4xl font-bold text-green-600">6</p>
                  <p className="mt-2 text-gray-600">Months to Full ROI</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </Section>

      <div className="bg-gray-800 text-white">
        <Section>
          <div className="container mx-auto px-4 text-center">
            <h2 className="font-heading text-4xl font-bold" style={{ fontFamily: '"Teko", sans-serif' }}>Ready to Transform Your Worker Safety?</h2>
            <p className="mt-4 text-lg text-gray-300 max-w-2xl mx-auto">
              See how MySentry can help you protect your team, ensure compliance, and improve your bottom line. Get started with a free trial today.
            </p>
            <div className="mt-8">
              <Button className="text-lg">
                Start 7-Day Free Trial <ArrowRight />
              </Button>
            </div>
          </div>
        </Section>
      </div>
    </Layout>
  );
};

export default FieldServicesCaseStudy;