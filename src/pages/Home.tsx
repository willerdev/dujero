import { ArrowRight, Award, Users, Target } from 'lucide-react';
import { Link } from 'react-router-dom';

const Home = () => {
  return (
    <div>
      {/* Hero Section */}
      <section className="relative bg-gradient-to-r from-gray-900 to-gray-800 text-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-24 md:py-32">
          <div className="max-w-3xl">
            <h1 className="text-4xl md:text-6xl font-bold mb-6">
              Transforming Business Through Innovation
            </h1>
            <p className="text-xl text-gray-300 mb-8">
              Dujero Business Group provides cutting-edge solutions to help your business thrive in today's competitive market.
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

      {/* Features Section */}
      <section className="section-padding bg-gray-50">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="heading-lg mb-4">Why Choose Dujero</h2>
            <p className="text-gray-600 max-w-2xl mx-auto">
              We combine expertise, innovation, and dedication to deliver exceptional results for our clients.
            </p>
          </div>
          
          <div className="grid md:grid-cols-3 gap-8">
            {[
              {
                icon: <Award className="w-12 h-12 text-[#b31e32]" />,
                title: "Excellence",
                description: "Committed to delivering the highest quality solutions and services."
              },
              {
                icon: <Users className="w-12 h-12 text-[#b31e32]" />,
                title: "Expert Team",
                description: "Skilled professionals with years of industry experience."
              },
              {
                icon: <Target className="w-12 h-12 text-[#b31e32]" />,
                title: "Results Driven",
                description: "Focused on achieving measurable outcomes for our clients."
              }
            ].map((feature, index) => (
              <div key={index} className="bg-white p-6 rounded-lg shadow-md">
                <div className="mb-4">{feature.icon}</div>
                <h3 className="text-xl font-semibold mb-2">{feature.title}</h3>
                <p className="text-gray-600">{feature.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="section-padding bg-[#b31e32] text-white">
        <div className="max-w-7xl mx-auto text-center">
          <h2 className="heading-lg mb-6">Ready to Transform Your Business?</h2>
          <p className="text-xl mb-8 max-w-2xl mx-auto">
            Let's work together to achieve your business goals and create lasting success.
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