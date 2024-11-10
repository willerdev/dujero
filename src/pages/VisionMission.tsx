import { Lightbulb, Compass, Target } from 'lucide-react';

const VisionMission = () => {
  return (
    <div className="bg-gray-50">
      {/* Hero Section */}
      <section className="bg-[#b31e32] text-white py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h1 className="heading-xl mb-6">Vision & Mission</h1>
          <p className="text-xl max-w-3xl mx-auto">
            Guiding principles that drive our commitment to excellence and innovation in Rwanda
          </p>
        </div>
      </section>

      {/* Vision & Mission Content */}
      <section className="section-padding">
        <div className="max-w-7xl mx-auto">
          <div className="grid md:grid-cols-2 gap-12">
            {/* Vision */}
            <div className="bg-white p-8 rounded-lg shadow-md">
              <div className="flex items-center gap-4 mb-6">
                <Lightbulb className="w-10 h-10 text-[#b31e32]" />
                <h2 className="heading-md">Our Vision</h2>
              </div>
              <p className="text-gray-600 mb-6">
                To be the premier hands-on business advisory and consulting firm for SMEs in Rwanda, specializing in Construction, Media, Digital Marketing, and IT services.
              </p>
              <ul className="space-y-4">
                <li className="flex items-start gap-3">
                  <Target className="w-6 h-6 text-[#b31e32] flex-shrink-0 mt-1" />
                  <span>Leading business advisory services</span>
                </li>
                <li className="flex items-start gap-3">
                  <Target className="w-6 h-6 text-[#b31e32] flex-shrink-0 mt-1" />
                  <span>Specialized industry expertise</span>
                </li>
                <li className="flex items-start gap-3">
                  <Target className="w-6 h-6 text-[#b31e32] flex-shrink-0 mt-1" />
                  <span>Empowering SME growth in Rwanda</span>
                </li>
              </ul>
            </div>

            {/* Mission */}
            <div className="bg-white p-8 rounded-lg shadow-md">
              <div className="flex items-center gap-4 mb-6">
                <Compass className="w-10 h-10 text-[#b31e32]" />
                <h2 className="heading-md">Our Mission</h2>
              </div>
              <p className="text-gray-600 mb-6">
                Delivering enterprise-grade business solutions to SMEs in Rwanda, enabling sustainable growth and vision achievement.
              </p>
              <ul className="space-y-4">
                <li className="flex items-start gap-3">
                  <Target className="w-6 h-6 text-[#b31e32] flex-shrink-0 mt-1" />
                  <span>Enterprise-level solutions</span>
                </li>
                <li className="flex items-start gap-3">
                  <Target className="w-6 h-6 text-[#b31e32] flex-shrink-0 mt-1" />
                  <span>Sustainable business growth</span>
                </li>
                <li className="flex items-start gap-3">
                  <Target className="w-6 h-6 text-[#b31e32] flex-shrink-0 mt-1" />
                  <span>Vision achievement support</span>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* Core Values Section */}
      <section className="section-padding bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="heading-lg text-center mb-12">Our Core Values</h2>
          <div className="grid md:grid-cols-4 gap-6">
            {[
              "Professionalism & Transparency",
              "Honesty & Integrity",
              "Ethics & Confidentiality",
              "Team Work",
              "Excellence & Efficiency",
              "Reliability & Competency",
              "Objectivity & Best Practices"
            ].map((value, index) => (
              <div key={index} className="bg-gray-50 p-6 rounded-lg shadow-md text-center">
                <h3 className="text-lg font-semibold text-[#b31e32]">{value}</h3>
              </div>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
};

export default VisionMission;