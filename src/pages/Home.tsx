import { ArrowRight, Award, Users, Target, Briefcase, Building, Monitor, ShoppingCart, CheckCircle, Workflow } from 'lucide-react';
import { Link } from 'react-router-dom';
import SectionHeading from '../components/SectionHeading';
import StatCard from '../components/StatCard';
import ProcessStep from '../components/ProcessStep';

const Home = () => {
  const industries = [
    "Industrial & Manufacturing",
    "Automotive",
    "Energy",
    "Government",
    "Information & Communications Technology",
    "Logistics & Transportation",
    "Professional Services",
    "Consumer Goods",
    "Marketing & Advertising",
    "Innovation & Technology"
  ];

  return (
    <div>
      {/* Hero Section */}
      <section className="relative bg-gradient-to-r from-gray-900 to-gray-800 text-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-24 md:py-32">
          <div className="max-w-3xl">
            <h1 className="text-4xl md:text-6xl font-bold mb-6">
              Premier Business Solutions in Rwanda
            </h1>
            <p className="text-xl text-gray-300 mb-8">
              A full-service business and IT advisory firm specializing in Construction, Media, Digital Marketing, and IT services for SMEs in Rwanda.
            </p>
            <div className="flex gap-4">
              <Link to="/services" className="btn-primary">
                Our Services
              </Link>
              <Link to="/contact" className="border border-white text-white px-6 py-2 rounded-lg hover:bg-white hover:text-gray-900 transition-colors">
                Contact Us
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* Company Overview */}
      <section className="section-padding bg-white">
        <div className="max-w-7xl mx-auto">
          <SectionHeading 
            title="Company Overview"
            subtitle="DUJERO BUSINESS GROUP Ltd is a premier full-service business and IT advisory firm serving Rwanda's growing businesses"
          />
          
          <div className="grid md:grid-cols-3 gap-8 mb-12">
            <StatCard
              icon={<Target className="w-12 h-12 text-[#b31e32]" />}
              title="5+ Active Practice Areas"
              description="Comprehensive business solutions across multiple domains"
            />
            <StatCard
              icon={<Building className="w-12 h-12 text-[#b31e32]" />}
              title="9+ Industry Specializations"
              description="Deep expertise across various business sectors"
            />
            <StatCard
              icon={<Award className="w-12 h-12 text-[#b31e32]" />}
              title="5+ Years Experience"
              description="Proven track record of business excellence"
            />
          </div>
        </div>
      </section>

      {/* Why Choose Us */}
      <section className="section-padding bg-gray-50">
        <div className="max-w-7xl mx-auto">
          <SectionHeading 
            title="Why Choose Us"
            subtitle="Our commitment to excellence and client success sets us apart"
          />
          
          <div className="grid md:grid-cols-3 gap-8">
            {[
              "Client-focused approach",
              "Deep industry expertise",
              "Clear understanding of objectives",
              "Proven track record",
              "Well-trained staff",
              "Affordable solutions"
            ].map((item, index) => (
              <div key={index} className="flex items-center gap-3 bg-white p-6 rounded-lg shadow-md">
                <CheckCircle className="w-6 h-6 text-[#b31e32] flex-shrink-0" />
                <span className="font-medium">{item}</span>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Our Process */}
      <section className="section-padding bg-white">
        <div className="max-w-7xl mx-auto">
          <SectionHeading 
            title="Our Process"
            subtitle="A systematic approach to delivering value"
          />
          
          <div className="grid md:grid-cols-3 gap-8">
            <ProcessStep
              number={1}
              title="Define Your Needs"
              description="We work closely with you to understand your specific requirements"
            />
            <ProcessStep
              number={2}
              title="Collaborate on Solutions"
              description="Our experts develop tailored strategies and recommendations"
            />
            <ProcessStep
              number={3}
              title="Drive Results"
              description="We help implement changes to improve efficiency and performance"
            />
          </div>
        </div>
      </section>

      {/* Business Incubator */}
      <section className="section-padding bg-gray-50">
        <div className="max-w-7xl mx-auto">
          <SectionHeading 
            title="Business Incubator Program"
            subtitle="Comprehensive support for 8-10 selected entrepreneurs"
          />
          
          <div className="grid md:grid-cols-3 gap-8">
            {[
              {
                icon: <Briefcase className="w-12 h-12 text-[#b31e32]" />,
                title: "Expert Guidance",
                description: "Access to experienced business advisors and mentors"
              },
              {
                icon: <Building className="w-12 h-12 text-[#b31e32]" />,
                title: "Professional Space",
                description: "Modern office space with complete support services"
              },
              {
                icon: <Workflow className="w-12 h-12 text-[#b31e32]" />,
                title: "Business Development",
                description: "Marketing assistance and capital raising services"
              }
            ].map((feature, index) => (
              <StatCard
                key={index}
                icon={feature.icon}
                title={feature.title}
                description={feature.description}
              />
            ))}
          </div>
        </div>
      </section>

      {/* Industries */}
      {/* <section className="section-padding bg-white">
        <div className="max-w-7xl mx-auto">
          <SectionHeading 
            title="Industries We Serve"
            subtitle="Comprehensive expertise across multiple sectors"
          />
          
          <div className="grid md:grid-cols-5 gap-4">
            {industries.map((industry, index) => (
              <div key={index} className="bg-gray-50 p-4 rounded-lg text-center">
                <span className="font-medium text-[#b31e32]">{industry}</span>
              </div>
            ))}
          </div>
        </div>
      </section> */}

      {/* CTA Section */}
      <section className="section-padding bg-[#b31e32] text-white">
        <div className="max-w-7xl mx-auto text-center">
          <h2 className="heading-lg mb-6">Ready to Transform Your Business?</h2>
          <p className="text-xl mb-8 max-w-2xl mx-auto">
            Let's work together to achieve your business goals and create lasting success in Rwanda.
          </p>
          <Link to="/contact" className="inline-flex items-center gap-2 bg-white text-[#b31e32] px-8 py-3 rounded-lg hover:bg-gray-100 transition-colors">
            Get Started
            <ArrowRight size={20} />
          </Link>
        </div>
      </section>
    </div>
  );
};

export default Home;