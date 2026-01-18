export default function About() {
  return (
    <div className="min-h-screen bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 py-16">
        <div className="text-center mb-12">
          <h1 className="text-4xl md:text-5xl font-bold text-gray-800 mb-4">
            About TechMart
          </h1>
          <p className="text-xl text-gray-600 max-w-2xl mx-auto">
            Your trusted partner in technology solutions
          </p>
        </div>
        
        <div className="max-w-4xl mx-auto">
          <div className="bg-white p-8 rounded-xl shadow-lg">
            <h2 className="text-2xl font-semibold mb-4">Our Story</h2>
            <p className="text-gray-600 mb-6">
              TechMart has been at the forefront of technology retail for over a decade. 
              We specialize in bringing you the latest and greatest in consumer electronics, 
              from smartphones and laptops to gaming gear and smart home solutions.
            </p>
            <p className="text-gray-600">
              Our mission is to make cutting-edge technology accessible to everyone, 
              backed by exceptional customer service and competitive prices.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}