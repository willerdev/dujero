import { useState } from 'react';
import { ShoppingCart, Star } from 'lucide-react';
import QuoteModal from '../components/QuoteModal';
import QuoteCart from '../components/QuoteCart';

interface Product {
  id: number;
  name: string;
  description: string;
  price: number;
  image: string;
  category: string;
}

const products: Product[] = [
  {
    id: 1,
    name: "Enterprise Suite Pro",
    description: "Complete business management solution for large enterprises",
    price: 999990, // Price in RWF
    image: "https://images.unsplash.com/photo-1551288049-bebda4e38f71?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80",
    category: "Software"
  },
  {
    id: 2,
    name: "Analytics Dashboard",
    description: "Real-time business analytics and reporting tool",
    price: 499990,
    image: "https://images.unsplash.com/photo-1460925895917-afdab827c52f?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80",
    category: "Analytics"
  },
  {
    id: 3,
    name: "Cloud Security Package",
    description: "Advanced security solutions for cloud infrastructure",
    price: 799990,
    image: "https://images.unsplash.com/photo-1563986768609-322da13575f3?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80",
    category: "Security"
  },
  {
    id: 4,
    name: "HR Management System",
    description: "Comprehensive human resource management solution",
    price: 599990,
    image: "https://images.unsplash.com/photo-1454165804606-c3d57bc86b40?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80",
    category: "Software"
  },
  {
    id: 5,
    name: "CRM Elite",
    description: "Advanced customer relationship management platform",
    price: 699990,
    image: "https://images.unsplash.com/photo-1552664730-d307ca884978?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80",
    category: "Software"
  },
  {
    id: 6,
    name: "Financial Analytics Tool",
    description: "Powerful financial analysis and forecasting solution",
    price: 899990,
    image: "https://images.unsplash.com/photo-1554224155-6726b3ff858f?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80",
    category: "Analytics"
  }
];

const categories = ["All", "Software", "Analytics", "Security"];

const Products = () => {
  const [selectedCategory, setSelectedCategory] = useState("All");
  const [searchQuery, setSearchQuery] = useState("");
  const [showQuoteModal, setShowQuoteModal] = useState(false);
  const [selectedProducts, setSelectedProducts] = useState<Product[]>([]);

  const filteredProducts = products.filter(product => {
    const matchesCategory = selectedCategory === "All" || product.category === selectedCategory;
    const matchesSearch = product.name.toLowerCase().includes(searchQuery.toLowerCase()) ||
                         product.description.toLowerCase().includes(searchQuery.toLowerCase());
    return matchesCategory && matchesSearch;
  });

  const formatPrice = (price: number) => {
    return new Intl.NumberFormat('rw-RW', { 
      style: 'currency', 
      currency: 'RWF'
    }).format(price);
  };

  const handleAddToQuote = (product: Product) => {
    if (!selectedProducts.some(p => p.id === product.id)) {
      setSelectedProducts([...selectedProducts, product]);
    }
  };

  const handleRemoveFromQuote = (productId: number) => {
    setSelectedProducts(selectedProducts.filter(p => p.id !== productId));
  };

  return (
    <div className="bg-gray-50">
      {/* Hero Section */}
      <section className="bg-[#b31e32] text-white py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h1 className="heading-xl mb-6">Our Products</h1>
          <p className="text-xl max-w-3xl mx-auto">
            Discover our range of innovative business solutions
          </p>
        </div>
      </section>

      {/* Products Section */}
      <section className="section-padding">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          {/* Filters */}
          <div className="mb-8 flex flex-col sm:flex-row gap-4 justify-between items-center">
            <div className="flex gap-4">
              {categories.map(category => (
                <button
                  key={category}
                  onClick={() => setSelectedCategory(category)}
                  className={`px-4 py-2 rounded-lg ${
                    selectedCategory === category
                      ? 'bg-[#b31e32] text-white'
                      : 'bg-white text-gray-700 hover:bg-gray-100'
                  }`}
                >
                  {category}
                </button>
              ))}
            </div>
            <input
              type="text"
              placeholder="Search products..."
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              className="px-4 py-2 border rounded-lg w-full sm:w-auto"
            />
          </div>

          {/* Product Grid */}
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {filteredProducts.map(product => (
              <div key={product.id} className="bg-white rounded-lg shadow-md overflow-hidden">
                <img
                  src={product.image}
                  alt={product.name}
                  className="w-full h-48 object-cover"
                />
                <div className="p-6">
                  <div className="flex justify-between items-start mb-2">
                    <h3 className="text-xl font-semibold">{product.name}</h3>
                    <span className="bg-[#b31e32] text-white px-2 py-1 rounded text-sm">
                      {product.category}
                    </span>
                  </div>
                  <p className="text-gray-600 mb-4">{product.description}</p>
                  <div className="flex justify-between items-center">
                    <span className="text-2xl font-bold">{formatPrice(product.price)}</span>
                    <button 
                      className={`btn-primary flex items-center gap-2 ${
                        selectedProducts.some(p => p.id === product.id) ? 'opacity-50 cursor-not-allowed' : ''
                      }`}
                      onClick={() => handleAddToQuote(product)}
                      disabled={selectedProducts.some(p => p.id === product.id)}
                    >
                      
                      {selectedProducts.some(p => p.id === product.id) ? 'Added to Quote' : ' Quote'}
                    </button>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Features Section */}
      {/* <section className="section-padding bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="heading-lg mb-4">Why Choose Our Products</h2>
            <p className="text-gray-600 max-w-2xl mx-auto">
              Experience the difference with our premium business solutions
            </p>
          </div>
          
          <div className="grid md:grid-cols-3 gap-8">
            {[
              {
                title: "Premium Quality",
                description: "Built with enterprise-grade technology and security"
              },
              {
                title: "24/7 Support",
                description: "Round-the-clock technical support and assistance"
              },
              {
                title: "Regular Updates",
                description: "Continuous improvements and feature updates"
              }
            ].map((feature, index) => (
              <div key={index} className="text-center">
                <div className="mb-4 flex justify-center">
                  <Star className="w-12 h-12 text-[#b31e32]" />
                </div>
                <h3 className="text-xl font-semibold mb-2">{feature.title}</h3>
                <p className="text-gray-600">{feature.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section> */}

      {/* Quote Cart Button */}
      <QuoteCart
        count={selectedProducts.length}
        onClick={() => setShowQuoteModal(true)}
      />

      {/* Quote Modal */}
      {showQuoteModal && (
        <QuoteModal 
          products={selectedProducts}
          onClose={() => setShowQuoteModal(false)}
          onRemoveProduct={handleRemoveFromQuote}
        />
      )}
    </div>
  );
};

export default Products;