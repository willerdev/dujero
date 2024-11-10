import { useState } from 'react';
import { Calendar, Clock, CheckCircle, Monitor, Laptop, Smartphone, Printer, Camera, Shield, Battery, Cpu } from 'lucide-react';

const services = [
  {
    id: 1,
    name: "Computer Laptop",
    description: "Wide range of laptops for business, gaming, and personal use",
    price: "From $499",
    duration: "Same day delivery",
    image: "https://images.unsplash.com/photo-1496181133206-80ce9b88a853?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80",
    icon: <Laptop className="text-[#b31e32]" />
  },
  {
    id: 2,
    name: "Computer Desktop",
    description: "Custom-built and branded desktop computers for all needs",
    price: "From $699",
    duration: "Same day delivery",
    image: "https://images.unsplash.com/photo-1593640408182-31c70c8268f5?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80",
    icon: <Monitor className="text-[#b31e32]" />
  },
  {
    id: 3,
    name: "Mobile Phone",
    description: "Latest smartphones and mobile devices from top brands",
    price: "From $299",
    duration: "Immediate pickup",
    image: "https://images.unsplash.com/photo-1511707171634-5f897ff02aa9?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80",
    icon: <Smartphone className="text-[#b31e32]" />
  },
  {
    id: 4,
    name: "Printer",
    description: "Professional and home office printers and supplies",
    price: "From $199",
    duration: "Next day delivery",
    image: "https://images.unsplash.com/photo-1612815154858-60aa4c59eaa6?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80",
    icon: <Printer className="text-[#b31e32]" />
  },
  {
    id: 5,
    name: "Security Camera",
    description: "Advanced surveillance systems for home and business",
    price: "From $299",
    duration: "Installation included",
    image: "https://images.unsplash.com/photo-1557324232-b8917d3c3dcb?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80",
    icon: <Shield className="text-[#b31e32]" />
  },
  {
    id: 6,
    name: "Photography Camera",
    description: "Professional cameras and photography equipment",
    price: "From $599",
    duration: "Expert setup available",
    image: "https://images.unsplash.com/photo-1502920917128-1aa500764cbd?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80",
    icon: <Camera className="text-[#b31e32]" />
  },
  {
    id: 7,
    name: "Electronic Accessories",
    description: "Comprehensive range of computer and mobile accessories",
    price: "From $19",
    duration: "Immediate pickup",
    image: "https://images.unsplash.com/photo-1601524909162-ae8725290836?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80",
    icon: <Cpu className="text-[#b31e32]" />
  },
  {
    id: 8,
    name: "UPS",
    description: "Reliable power backup solutions for all equipment",
    price: "From $199",
    duration: "Installation available",
    image: "https://images.unsplash.com/photo-1518770660439-4636190af475?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80",
    icon: <Battery className="text-[#b31e32]" />
  },
  {
    id: 9,
    name: "Repair & Maintenance",
    description: "Expert repair services for all electronic devices",
    price: "From $49",
    duration: "Quick turnaround",
    image: "https://images.unsplash.com/photo-1581092921461-eab62e97a780?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80",
    icon: <Battery className="text-[#b31e32]" />
  }
];

const Services = () => {
  const [selectedService, setSelectedService] = useState<number | null>(null);
  const [bookingStep, setBookingStep] = useState(1);
  const [bookingData, setBookingData] = useState({
    date: '',
    time: '',
    name: '',
    email: '',
    phone: '',
    notes: ''
  });

  const handleBooking = (serviceId: number) => {
    setSelectedService(serviceId);
    setBookingStep(1);
  };

  const handleBookingSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    console.log('Booking submitted:', bookingData);
    setSelectedService(null);
    setBookingStep(1);
    setBookingData({
      date: '',
      time: '',
      name: '',
      email: '',
      phone: '',
      notes: ''
    });
  };

  return (
    <div className="bg-gray-50">
      {/* Hero Section */}
      <section className="bg-[#b31e32] text-white py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h1 className="heading-xl mb-6">Our Services</h1>
          <p className="text-xl max-w-3xl mx-auto">
            Quality electronics and professional services for all your needs
          </p>
        </div>
      </section>

      {/* Services Grid */}
      <section className="section-padding">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid md:grid-cols-3 gap-8">
            {services.map(service => (
              <div key={service.id} className="bg-white rounded-lg shadow-md overflow-hidden hover:shadow-xl transition-shadow">
                <div className="relative h-48">
                  <img
                    src={service.image}
                    alt={service.name}
                    className="w-full h-full object-cover"
                  />
                  <div className="absolute top-4 right-4 bg-white p-2 rounded-full shadow-lg">
                    {service.icon}
                  </div>
                </div>
                <div className="p-6">
                  <h3 className="text-xl font-semibold mb-2">{service.name}</h3>
                  <p className="text-gray-600 mb-4">{service.description}</p>
                  <div className="flex items-center justify-between mb-6">
                    <div className="text-[#b31e32] font-semibold">{service.price}</div>
                    <div className="flex items-center gap-2 text-sm text-gray-600">
                      <Clock size={16} />
                      <span>{service.duration}</span>
                    </div>
                  </div>
                  <button
                    onClick={() => handleBooking(service.id)}
                    className="btn-primary w-full"
                  >
                    Book Service
                  </button>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Booking Modal */}
      {selectedService && (
        <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center p-4 z-50">
          <div className="bg-white rounded-lg max-w-md w-full p-6">
            <h2 className="text-2xl font-bold mb-4">
              Book {services.find(s => s.id === selectedService)?.name}
            </h2>
            
            <div className="mb-6">
              <div className="flex items-center mb-4">
                {[1, 2, 3].map(step => (
                  <div key={step} className="flex-1 flex items-center">
                    <div className={`w-8 h-8 rounded-full flex items-center justify-center ${
                      step === bookingStep ? 'bg-[#b31e32] text-white' : 'bg-gray-200'
                    }`}>
                      {step}
                    </div>
                    {step < 3 && (
                      <div className={`flex-1 h-1 ${
                        step < bookingStep ? 'bg-[#b31e32]' : 'bg-gray-200'
                      }`} />
                    )}
                  </div>
                ))}
              </div>
            </div>

            <form onSubmit={handleBookingSubmit} className="space-y-4">
              {bookingStep === 1 && (
                <>
                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-1">
                      Preferred Date
                    </label>
                    <input
                      type="date"
                      value={bookingData.date}
                      onChange={(e) => setBookingData({...bookingData, date: e.target.value})}
                      className="w-full px-4 py-2 border rounded-lg"
                      required
                    />
                  </div>
                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-1">
                      Preferred Time
                    </label>
                    <input
                      type="time"
                      value={bookingData.time}
                      onChange={(e) => setBookingData({...bookingData, time: e.target.value})}
                      className="w-full px-4 py-2 border rounded-lg"
                      required
                    />
                  </div>
                </>
              )}

              {bookingStep === 2 && (
                <>
                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-1">
                      Full Name
                    </label>
                    <input
                      type="text"
                      value={bookingData.name}
                      onChange={(e) => setBookingData({...bookingData, name: e.target.value})}
                      className="w-full px-4 py-2 border rounded-lg"
                      required
                    />
                  </div>
                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-1">
                      Email
                    </label>
                    <input
                      type="email"
                      value={bookingData.email}
                      onChange={(e) => setBookingData({...bookingData, email: e.target.value})}
                      className="w-full px-4 py-2 border rounded-lg"
                      required
                    />
                  </div>
                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-1">
                      Phone
                    </label>
                    <input
                      type="tel"
                      value={bookingData.phone}
                      onChange={(e) => setBookingData({...bookingData, phone: e.target.value})}
                      className="w-full px-4 py-2 border rounded-lg"
                      required
                    />
                  </div>
                </>
              )}

              {bookingStep === 3 && (
                <>
                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-1">
                      Additional Notes
                    </label>
                    <textarea
                      value={bookingData.notes}
                      onChange={(e) => setBookingData({...bookingData, notes: e.target.value})}
                      className="w-full px-4 py-2 border rounded-lg"
                      rows={4}
                      placeholder="Any specific requirements or questions?"
                    ></textarea>
                  </div>
                  <div className="bg-gray-50 p-4 rounded-lg">
                    <h4 className="font-semibold mb-2">Booking Summary</h4>
                    <p>Date: {bookingData.date}</p>
                    <p>Time: {bookingData.time}</p>
                    <p>Name: {bookingData.name}</p>
                    <p>Email: {bookingData.email}</p>
                    <p>Phone: {bookingData.phone}</p>
                  </div>
                </>
              )}

              <div className="flex justify-between">
                <button
                  type="button"
                  onClick={() => setSelectedService(null)}
                  className="px-4 py-2 text-gray-600 hover:text-gray-800"
                >
                  Cancel
                </button>
                <div className="space-x-4">
                  {bookingStep > 1 && (
                    <button
                      type="button"
                      onClick={() => setBookingStep(step => step - 1)}
                      className="px-4 py-2 border rounded-lg hover:bg-gray-50"
                    >
                      Previous
                    </button>
                  )}
                  {bookingStep < 3 ? (
                    <button
                      type="button"
                      onClick={() => setBookingStep(step => step + 1)}
                      className="btn-primary"
                    >
                      Next
                    </button>
                  ) : (
                    <button type="submit" className="btn-primary">
                      Confirm Booking
                    </button>
                  )}
                </div>
              </div>
            </form>
          </div>
        </div>
      )}

      {/* Why Choose Us */}
      <section className="section-padding bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="heading-lg mb-4">Why Choose Our Services</h2>
            <p className="text-gray-600 max-w-2xl mx-auto">
              Experience excellence with our professional services and quality products
            </p>
          </div>
          
          <div className="grid md:grid-cols-4 gap-8">
            {[
              {
                title: "Quality Products",
                description: "Authorized dealer of premium brands"
              },
              {
                title: "Expert Support",
                description: "Certified technicians at your service"
              },
              {
                title: "Quick Service",
                description: "Fast turnaround on repairs and delivery"
              },
              {
                title: "Warranty Assured",
                description: "Guaranteed protection for your purchases"
              }
            ].map((feature, index) => (
              <div key={index} className="text-center">
                <div className="mb-4 flex justify-center">
                  <CheckCircle className="w-12 h-12 text-[#b31e32]" />
                </div>
                <h3 className="text-xl font-semibold mb-2">{feature.title}</h3>
                <p className="text-gray-600">{feature.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
};

export default Services;