import { Clock, Users, Globe, Award } from 'lucide-react';

const About = () => {
  const team = [
    {
      name: "John Smith",
      role: "CEO & Founder",
      image: "https://images.unsplash.com/photo-1560250097-0b93528c311a?ixlib=rb-4.0.3&auto=format&fit=crop&w=256&q=80"
    },
    {
      name: "Sarah Johnson",
      role: "COO",
      image: "https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?ixlib=rb-4.0.3&auto=format&fit=crop&w=256&q=80"
    },
    {
      name: "Michael Chen",
      role: "CTO",
      image: "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?ixlib=rb-4.0.3&auto=format&fit=crop&w=256&q=80"
    },
    {
      name: "Emily Brown",
      role: "Director of Operations",
      image: "https://images.unsplash.com/photo-1580489944761-15a19d654956?ixlib=rb-4.0.3&auto=format&fit=crop&w=256&q=80"
    }
  ];

  return (
    <div>
      {/* Hero Section */}
      <section className="bg-gradient-to-r from-gray-900 to-gray-800 text-white py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h1 className="heading-xl mb-6">About Dujero Business Group</h1>
          <p className="text-xl max-w-3xl mx-auto">
            A legacy of excellence in business solutions and professional services
          </p>
        </div>
      </section>

      {/* Company History */}
      <section className="section-padding">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="heading-lg mb-6">Our Story</h2>
              <p className="text-gray-600 mb-4">
                Founded in 2010, Dujero Business Group has grown from a small consultancy to a leading provider of comprehensive business solutions. Our journey has been marked by continuous innovation and unwavering commitment to excellence.
              </p>
              <p className="text-gray-600">
                Today, we serve clients across multiple industries, helping them navigate the complexities of modern business landscape while achieving sustainable growth.
              </p>
            </div>
            <div className="grid grid-cols-2 gap-4">
              {[
                { icon: <Clock size={32} />, label: "Years of Experience", value: "13+" },
                { icon: <Users size={32} />, label: "Happy Clients", value: "500+" },
                { icon: <Globe size={32} />, label: "Countries Served", value: "25+" },
                { icon: <Award size={32} />, label: "Awards Won", value: "50+" }
              ].map((stat, index) => (
                <div key={index} className="bg-white p-6 rounded-lg shadow-md text-center">
                  <div className="text-[#b31e32] mb-2 flex justify-center">{stat.icon}</div>
                  <div className="text-2xl font-bold mb-1">{stat.value}</div>
                  <div className="text-sm text-gray-600">{stat.label}</div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Team Section */}
      <section className="section-padding bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="heading-lg mb-4">Our Leadership Team</h2>
            <p className="text-gray-600 max-w-2xl mx-auto">
              Meet the experts behind Dujero's success
            </p>
          </div>
          
          <div className="grid md:grid-cols-4 gap-8">
            {team.map((member, index) => (
              <div key={index} className="bg-white rounded-lg shadow-md overflow-hidden">
                <img
                  src={member.image}
                  alt={member.name}
                  className="w-full h-64 object-cover"
                />
                <div className="p-4 text-center">
                  <h3 className="font-semibold text-lg mb-1">{member.name}</h3>
                  <p className="text-gray-600">{member.role}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Values Section */}
      <section className="section-padding bg-[#b31e32] text-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="heading-lg mb-12">Our Core Values</h2>
          <div className="grid md:grid-cols-4 gap-8">
            {[
              "Innovation First",
              "Client Success",
              "Excellence Always",
              "Integrity & Trust"
            ].map((value, index) => (
              <div key={index} className="border-2 border-white/20 rounded-lg p-6">
                <h3 className="text-xl font-semibold">{value}</h3>
              </div>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
};

export default About;