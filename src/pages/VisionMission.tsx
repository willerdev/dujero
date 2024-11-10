import { Lightbulb, Compass, Target } from 'lucide-react';

const VisionMission = () => {
  return (
    <div className="bg-gray-50">
      {/* Hero Section */}
      <section className="bg-[#b31e32] text-white py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h1 className="heading-xl mb-6">Vision & Mission</h1>
          <p className="text-xl max-w-3xl mx-auto">
            Guiding principles that drive our commitment to excellence and innovation
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
                To be the leading innovative force in business solutions, setting new standards of excellence and transforming how companies operate in the digital age.
              </p>
              <ul className="space-y-4">
                <li className="flex items-start gap-3">
                  <Target className="w-6 h-6 text-[#b31e32] flex-shrink-0 mt-1" />
                  <span>Pioneering technological advancements</span>
                </li>
                <li className="flex items-start gap-3">
                  <Target className="w-6 h-6 text-[#b31e32] flex-shrink-0 mt-1" />
                  <span>Creating sustainable business solutions</span>
                </li>
                <li className="flex items-start gap-3">
                  <Target className="w-6 h-6 text-[#b31e32] flex-shrink-0 mt-1" />
                  <span>Empowering global business growth</span>
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
                To deliver exceptional value to our clients through innovative solutions, expert consultation, and unwavering commitment to their success.
              </p>
              <ul className="space-y-4">
                <li className="flex items-start gap-3">
                  <Target className="w-6 h-6 text-[#b31e32] flex-shrink-0 mt-1" />
                  <span>Providing cutting-edge business solutions</span>
                </li>
                <li className="flex items-start gap-3">
                  <Target className="w-6 h-6 text-[#b31e32] flex-shrink-0 mt-1" />
                  <span>Fostering long-term client relationships</span>
                </li>
                <li className="flex items-start gap-3">
                  <Target className="w-6 h-6 text-[#b31e32] flex-shrink-0 mt-1" />
                  <span>Maintaining highest quality standards</span>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* Values Section */}
      <section className="section-padding bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="heading-lg text-center mb-12">Our Core Values</h2>
          <div className="grid md:grid-cols-3 gap-8">
            {[
              {
                title: "Innovation",
                description: "Constantly pushing boundaries and embracing new technologies"
              },
              {
                title: "Integrity",
                description: "Maintaining highest ethical standards in all our dealings"
              },
              {
                title: "Excellence",
                description: "Striving for perfection in everything we do"
              }
            ].map((value, index) => (
              <div key={index} className="text-center">
                <h3 className="text-xl font-semibold mb-4">{value.title}</h3>
                <p className="text-gray-600">{value.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
};

export default VisionMission;