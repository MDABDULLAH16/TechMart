export default function Support() {
  return (
    <div className="min-h-screen bg-gray-50 dark:bg-gray-900">
      <div className="container mx-auto px-4 py-16">
        <div className="text-center mb-12">
          <h1 className="text-4xl md:text-5xl font-bold text-gray-800 dark:text-gray-100 mb-4">
            Customer Support
          </h1>
          <p className="text-xl text-gray-600 dark:text-gray-300 max-w-2xl mx-auto">
            We're here to help you 24/7
          </p>
        </div>
        
        <div className="max-w-4xl mx-auto">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <div className="bg-white dark:bg-gray-800 p-6 rounded-xl shadow-lg border border-gray-200 dark:border-gray-700">
              <h3 className="text-xl font-semibold text-gray-800 dark:text-gray-100 mb-4">FAQ</h3>
              <div className="space-y-4">
                <div>
                  <h4 className="font-medium text-gray-800 dark:text-gray-100 mb-2">How do I track my order?</h4>
                  <p className="text-gray-600 dark:text-gray-300 text-sm">You can track your order using the tracking number sent to your email.</p>
                </div>
                <div>
                  <h4 className="font-medium text-gray-800 dark:text-gray-100 mb-2">What's your return policy?</h4>
                  <p className="text-gray-600 dark:text-gray-300 text-sm">We offer 30-day returns on all products in original condition.</p>
                </div>
              </div>
            </div>
            
            <div className="bg-white dark:bg-gray-800 p-6 rounded-xl shadow-lg border border-gray-200 dark:border-gray-700">
              <h3 className="text-xl font-semibold text-gray-800 dark:text-gray-100 mb-4">Contact Support</h3>
              <div className="space-y-4">
                <div>
                  <h4 className="font-medium text-gray-800 dark:text-gray-100 mb-2">Live Chat</h4>
                  <p className="text-gray-600 dark:text-gray-300 text-sm">Available 24/7 for instant assistance</p>
                </div>
                <div>
                  <h4 className="font-medium text-gray-800 dark:text-gray-100 mb-2">Email Support</h4>
                  <p className="text-gray-600 dark:text-gray-300 text-sm">support@techmart.com</p>
                </div>
                <div>
                  <h4 className="font-medium text-gray-800 dark:text-gray-100 mb-2">Phone Support</h4>
                  <p className="text-gray-600 dark:text-gray-300 text-sm">+1 (555) 123-4567</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}