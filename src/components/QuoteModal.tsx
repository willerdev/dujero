import { X, Trash2 } from 'lucide-react';
import { useForm } from 'react-hook-form';
import emailjs from '@emailjs/browser';

interface Product {
  id: number;
  name: string;
  price: number;
  category: string;
}

interface QuoteModalProps {
  products: Product[];
  onClose: () => void;
  onRemoveProduct: (productId: number) => void;
}

interface QuoteFormData {
  email: string;
  phone: string;
  address: string;
  message: string;
}

const QuoteModal = ({ products, onClose, onRemoveProduct }: QuoteModalProps) => {
  const { register, handleSubmit, formState: { errors }, reset } = useForm<QuoteFormData>();

  const formatPrice = (price: number) => {
    return new Intl.NumberFormat('rw-RW', { 
      style: 'currency', 
      currency: 'RWF'
    }).format(price);
  };

  const totalPrice = products.reduce((sum, product) => sum + product.price, 0);

  const onSubmit = async (data: QuoteFormData) => {
    const quoteRequest = {
      products,
      totalPrice,
      ...data,
      timestamp: new Date().toISOString()
    };

    // Prepare email template parameters
    const templateParams = {
      to_email: data.email,
      from_name: "Dujero Business Group",
      to_name: data.email.split('@')[0], // Use first part of email as name
      phone: data.phone,
      address: data.address,
      message: data.message,
      products_list: products.map(p => 
        `${p.name} (${formatPrice(p.price)})`
      ).join('\n'),
      total_price: formatPrice(totalPrice)
    };

    try {
      const response = await emailjs.send(
        'service_5w02ryo', // Replace with your EmailJS service ID
        'YOUR_TEMPLATE_ID', // Replace with your EmailJS template ID
        templateParams,
        'YOUR_PUBLIC_KEY' // Replace with your EmailJS public key
      );

      if (response.status === 200) {
        alert('Quote request sent successfully!');
        reset(); // Reset form
        onClose();
      }
    } catch (error) {
      console.error('Failed to send email:', error);
      alert('Failed to send quote request. Please try again later.');
    }
  };

  if (products.length === 0) return null;

  return (
    <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center p-4 z-50">
      <div className="bg-white rounded-lg max-w-2xl w-full p-6 max-h-[90vh] overflow-y-auto">
        <div className="flex justify-between items-center mb-6">
          <h2 className="text-2xl font-bold">Request Quote</h2>
          <button onClick={onClose} className="text-gray-500 hover:text-gray-700">
            <X size={24} />
          </button>
        </div>

        <div className="mb-6">
          <h3 className="font-semibold mb-4">Selected Products</h3>
          <div className="space-y-4">
            {products.map(product => (
              <div key={product.id} className="flex justify-between items-center p-4 bg-gray-50 rounded-lg">
                <div>
                  <h4 className="font-medium">{product.name}</h4>
                  <p className="text-sm text-gray-600">Category: {product.category}</p>
                  <p className="text-[#b31e32] font-semibold">{formatPrice(product.price)}</p>
                </div>
                <button
                  onClick={() => onRemoveProduct(product.id)}
                  className="text-gray-500 hover:text-red-500"
                >
                  <Trash2 size={20} />
                </button>
              </div>
            ))}
          </div>
          <div className="mt-4 p-4 bg-gray-100 rounded-lg">
            <div className="flex justify-between items-center font-bold">
              <span>Total:</span>
              <span>{formatPrice(totalPrice)}</span>
            </div>
          </div>
        </div>

        <form onSubmit={handleSubmit(onSubmit)} className="space-y-4">
          <div>
            <label className="block text-sm font-medium text-gray-700 mb-1">
              Email Address
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
              <span className="text-red-500 text-sm">{errors.email.message}</span>
            )}
          </div>

          <div>
            <label className="block text-sm font-medium text-gray-700 mb-1">
              Phone Number
            </label>
            <input
              type="tel"
              {...register("phone", {
                required: "Phone number is required",
                pattern: {
                  value: /^[0-9+\s-()]{8,}$/,
                  message: "Invalid phone number"
                }
              })}
              className="w-full px-4 py-2 border rounded-lg focus:ring-[#b31e32] focus:border-[#b31e32]"
              placeholder="+250"
            />
            {errors.phone && (
              <span className="text-red-500 text-sm">{errors.phone.message}</span>
            )}
          </div>

          <div>
            <label className="block text-sm font-medium text-gray-700 mb-1">
              Delivery Address
            </label>
            <textarea
              {...register("address", { required: "Address is required" })}
              rows={3}
              className="w-full px-4 py-2 border rounded-lg focus:ring-[#b31e32] focus:border-[#b31e32]"
            />
            {errors.address && (
              <span className="text-red-500 text-sm">{errors.address.message}</span>
            )}
          </div>

          <div>
            <label className="block text-sm font-medium text-gray-700 mb-1">
              Additional Message (Optional)
            </label>
            <textarea
              {...register("message")}
              rows={2}
              className="w-full px-4 py-2 border rounded-lg focus:ring-[#b31e32] focus:border-[#b31e32]"
            />
          </div>

          <button type="submit" className="btn-primary w-full">
            Submit Quote Request
          </button>
        </form>
      </div>
    </div>
  );
};

export default QuoteModal;