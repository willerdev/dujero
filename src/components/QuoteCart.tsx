import { ShoppingCart } from 'lucide-react';

interface QuoteCartProps {
  count: number;
  onClick: () => void;
}

const QuoteCart = ({ count, onClick }: QuoteCartProps) => {
  return (
    <button
      onClick={onClick}
      className="fixed bottom-8 right-8 bg-[#b31e32] text-white p-4 rounded-full shadow-lg hover:bg-[#991929] transition-colors flex items-center gap-2"
    >
      <ShoppingCart size={24} />
      {count > 0 && (
        <span className="bg-white text-[#b31e32] w-6 h-6 rounded-full flex items-center justify-center font-bold">
          {count}
        </span>
      )}
    </button>
  );
};

export default QuoteCart;