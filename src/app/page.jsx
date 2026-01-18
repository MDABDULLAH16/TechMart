import Image from "next/image";
import Banner from "@/components/Banner/Banner";

export default function Home() {
  return (
    <div className="min-h-screen bg-gray-50">
      {/* Banner Section */}
      <section className="max-w-7xl mx-auto px-4 py-8">
        <Banner />
      </section>
      
      {/* Welcome Section */}
      <section className=" mx-auto px-4 py-12 text-center">
        <h1 className="text-4xl font-bold text-gray-800 mb-4">Welcome To Tech Mart</h1>
        <p className="text-xl text-gray-600 max-w-2xl mx-auto">
          Your one-stop destination for the latest technology, gadgets, and smart solutions
        </p>
      </section>
    </div>
  );
}
