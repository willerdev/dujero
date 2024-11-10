import { useForm } from 'react-hook-form';
import { Phone, Mail, MapPin } from 'lucide-react';

const Contact = () => {
  const { register, handleSubmit, formState: { errors } } = useForm();

  const onSubmit = (data: any) => {
    console.log(data);
    // Handle form submission
  };

  return (
    <div className="bg-gray-50">
      {/* Hero Section */}
      <section className="bg-[#b31e32] text-white py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h1 className="heading-xl mb-6">Contact Us</h1>
          <p className="text-xl max-w-3xl mx-auto">
            Get in touch with our team for any inquiries or support
          </p>
        </div>
      </section>

      {/* Contact Information */}
      <section className="section-padding">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid md:grid-cols-3 gap-8 mb-16">
            {[
              {
                icon: <Phone className="w-8 h-8" />,
                title: "Phone",
                content: "+250 788 609 874",
                link: "tel:+250788609874"
              },
              {
                icon: <Mail className="w-8 h-8" />,
                title: "Email",
                content: "info@dujero.com",
                link: "mailto:info@dujero.com"
              },
              {
                icon: <MapPin className="w-8 h-8" />,
                title: "Address",
                content: "Kigali Rwanda Chic building",
                link: "#"
              }
            ].map((item, index) => (
              <a
                key={index}
                href={item.link}
                className="bg-white p-6 rounded-lg shadow-md text-center hover:shadow-lg transition-shadow"
              >
                <div className="text-[#b31e32] mb-4 flex justify-center">
                  {item.icon}
                </div>
                <h3 className="text-xl font-semibold mb-2">{item.title}</h3>
                <p className="text-gray-600">{item.content}</p>
              </a>
            ))}
          </div>

          <div className="grid md:grid-cols-2 gap-12">
            {/* Contact Form */}
            <div className="bg-white p-8 rounded-lg shadow-md">
              <h2 className="text-2xl font-bold mb-6">Send us a Message</h2>
              <form onSubmit={handleSubmit(onSubmit)} className="space-y-6">
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-1">
                    Name
                  </label>
                  <input
                    type="text"
                    {...register("name", { required: "Name is required" })}
                    className="w-full px-4 py-2 border rounded-lg focus:ring-[#b31e32] focus:border-[#b31e32]"
                  />
                  {errors.name && (
                    <span className="text-red-500 text-sm">{errors.name.message?.toString()}</span>
                  )}
                </div>

                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-1">
                    Email
                  </label>
                  <input
                    type="email"
                    {...register("email", {
                      required: "Email is required",
                      pattern: {
                        value: /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i,
                        message: "Invalid email address"
                      }
                    })}
                    className="w-full px-4 py-2 border rounded-lg focus:ring-[#b31e32] focus:border-[#b31e32]"
                  />
                  {errors.email && (
                    <span className="text-red-500 text-sm">{errors.email.message?.toString()}</span>
                  )}
                </div>

                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-1">
                    Subject
                  </label>
                  <input
                    type="text"
                    {...register("subject", { required: "Subject is required" })}
                    className="w-full px-4 py-2 border rounded-lg focus:ring-[#b31e32] focus:border-[#b31e32]"
                  />
                  {errors.subject && (
                    <span className="text-red-500 text-sm">{errors.subject.message?.toString()}</span>
                  )}
                </div>

                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-1">
                    Message
                  </label>
                  <textarea
                    {...register("message", { required: "Message is required" })}
                    rows={4}
                    className="w-full px-4 py-2 border rounded-lg focus:ring-[#b31e32] focus:border-[#b31e32]"
                  ></textarea>
                  {errors.message && (
                    <span className="text-red-500 text-sm">{errors.message.message?.toString()}</span>
                  )}
                </div>

                <button type="submit" className="btn-primary w-full">
                  Send Message
                </button>
              </form>
            </div>

            {/* Map */}
            <div className="bg-white p-8 rounded-lg shadow-md">
              <h2 className="text-2xl font-bold mb-6">Our Location</h2>
              <div className="aspect-w-16 aspect-h-9">
                <iframe
                  src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d193595.15830869428!2d-74.119763973046!3d40.69766374874431!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x89c24fa5d33f083b%3A0xc80b8f06e177fe62!2sNew%20York%2C%20NY%2C%20USA!5e0!3m2!1sen!2s!4v1677667896526!5m2!1sen!2s"
                  width="100%"
                  height="450"
                  style={{ border: 0 }}
                  allowFullScreen
                  loading="lazy"
                  referrerPolicy="no-referrer-when-downgrade"
                  className="rounded-lg"
                ></iframe>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Contact;