export default function Deals() {
  return (
    <div className="min-h-screen bg-gray-50 dark:bg-gray-900">
      <div className="container mx-auto px-4 py-16">
        <div className="text-center mb-12">
          <h1 className="text-4xl md:text-5xl font-bold text-gray-800 dark:text-gray-100 mb-4">
            Special Deals
          </h1>
          <p className="text-xl text-gray-600 dark:text-gray-300 max-w-2xl mx-auto">
            Don't miss out on our amazing offers and discounts
          </p>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          <div className="bg-white dark:bg-gray-800 p-6 rounded-xl shadow-lg border-2 border-red-200 dark:border-red-800">
            <div className="bg-red-500 text-white px-3 py-1 rounded-full text-sm font-semibold mb-4 inline-block">
              50% OFF
            </div>
            <h3 className="text-xl font-semibold text-gray-800 dark:text-gray-100 mb-2">Gaming Laptops</h3>
            <p className="text-gray-600 dark:text-gray-300">High-performance gaming laptops at unbeatable prices</p>
          </div>
          
          <div className="bg-white dark:bg-gray-800 p-6 rounded-xl shadow-lg border-2 border-blue-200 dark:border-blue-800">
            <div className="bg-blue-500 text-white px-3 py-1 rounded-full text-sm font-semibold mb-4 inline-block">
              30% OFF
            </div>
            <h3 className="text-xl font-semibold text-gray-800 dark:text-gray-100 mb-2">Smartphones</h3>
            <p className="text-gray-600 dark:text-gray-300">Latest smartphone models with amazing discounts</p>
          </div>
          
          <div className="bg-white dark:bg-gray-800 p-6 rounded-xl shadow-lg border-2 border-green-200 dark:border-green-800">
            <div className="bg-green-500 text-white px-3 py-1 rounded-full text-sm font-semibold mb-4 inline-block">
              FREE SHIPPING
            </div>
            <h3 className="text-xl font-semibold text-gray-800 dark:text-gray-100 mb-2">All Orders</h3>
            <p className="text-gray-600 dark:text-gray-300">Free shipping on orders over $100</p>
          </div>
        </div>
      </div>
    </div>
  );
}