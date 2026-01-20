export default function Contact() {
  return (
    <div className="min-h-screen bg-gray-50 dark:bg-gray-900">
      <div className="container mx-auto px-4 py-16">
        <div className="text-center mb-12">
          <h1 className="text-4xl md:text-5xl font-bold text-gray-800 dark:text-gray-100 mb-4">
            Contact Us
          </h1>
          <p className="text-xl text-gray-600 dark:text-gray-300 max-w-2xl mx-auto">
            Get in touch with our team
          </p>
        </div>
        
        <div className="max-w-2xl mx-auto">
          <div className="bg-white dark:bg-gray-800 p-8 rounded-xl shadow-lg border border-gray-200 dark:border-gray-700">
            <div className="space-y-6">
              <div>
                <h3 className="text-lg font-semibold text-gray-800 dark:text-gray-100 mb-2">Email</h3>
                <p className="text-gray-600 dark:text-gray-300">support@techmart.com</p>
              </div>
              <div>
                <h3 className="text-lg font-semibold text-gray-800 dark:text-gray-100 mb-2">Phone</h3>
                <p className="text-gray-600 dark:text-gray-300">+1 (555) 123-4567</p>
              </div>
              <div>
                <h3 className="text-lg font-semibold text-gray-800 dark:text-gray-100 mb-2">Address</h3>
                <p className="text-gray-600 dark:text-gray-300">123 Tech Street, Digital City, TC 12345</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}