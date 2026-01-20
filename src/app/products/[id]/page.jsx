'use client';
import React, { useState, useEffect } from 'react';
import { useParams, useRouter } from 'next/navigation';
import axios from 'axios';
import Image from 'next/image';
import Link from 'next/link';
import { 
  ArrowLeft, 
  Heart, 
  ShoppingCart, 
  Star, 
  Share2, 
  Truck, 
  Shield, 
  RotateCcw,
  Check,
  Plus,
  Minus,
  Eye,
  Package
} from 'lucide-react';

export default function ProductDetails() {
  const params = useParams();
  const router = useRouter();
  const [product, setProduct] = useState(null);
  const [relatedProducts, setRelatedProducts] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  const [isFavorite, setIsFavorite] = useState(false);
  const [quantity, setQuantity] = useState(1);
  const [selectedImage, setSelectedImage] = useState(0);

  useEffect(() => {
    const fetchProduct = async () => {
      try {
        setLoading(true);
        const response = await axios.get(
          `https://techmart-server-gamma.vercel.app/products`,
        );
        const foundProduct = response.data.find(p => p.id === parseInt(params.id));
        
        if (foundProduct) {
          setProduct(foundProduct);
          
          // Get related products from the same category
          const related = response.data
            .filter(p => p.category === foundProduct.category && p.id !== foundProduct.id)
            .slice(0, 4); // Show only 4 related products
          setRelatedProducts(related);
        } else {
          setError('Product not found');
        }
        setLoading(false);
      } catch (err) {
        setError('Failed to fetch product details');
        setLoading(false);
      }
    };

    if (params.id) {
      fetchProduct();
    }
  }, [params.id]);

  const handleAddToCart = () => {
    // Add to cart logic here
    console.log(`Added ${quantity} of product ${product.id} to cart`);
    // You can add toast notification here
  };

  const handleBuyNow = () => {
    // Buy now logic here
    console.log(`Buy now: ${quantity} of product ${product.id}`);
    // Redirect to checkout
  };

  if (loading) {
    return (
      <div className="min-h-screen bg-gray-50 dark:bg-gray-900 flex items-center justify-center">
        <div className="text-center">
          <div className="animate-spin rounded-full h-12 w-12 border-b-2 border-blue-600 dark:border-blue-400 mx-auto mb-4"></div>
          <p className="text-gray-600 dark:text-gray-400">Loading product details...</p>
        </div>
      </div>
    );
  }

  if (error || !product) {
    return (
      <div className="min-h-screen bg-gray-50 dark:bg-gray-900 flex items-center justify-center">
        <div className="text-center">
          <p className="text-red-600 dark:text-red-400 mb-4">{error || 'Product not found'}</p>
          <Link
            href="/products"
            className="bg-blue-600 hover:bg-blue-700 dark:bg-blue-500 dark:hover:bg-blue-600 text-white px-6 py-2 rounded-lg transition-colors"
          >
            Back to Products
          </Link>
        </div>
      </div>
    );
  }

  // Create multiple images array (using same image for demo)
  const productImages = [
    product.image,
    product.image,
    product.image,
    product.image
  ];

  return (
    <div className="min-h-screen bg-gray-50 dark:bg-gray-900">
      <div className="max-w-7xl mx-auto px-4 py-8">
        {/* Breadcrumb */}
        <div className="flex items-center space-x-2 text-sm text-gray-600 dark:text-gray-400 mb-6">
          <Link href="/" className="hover:text-blue-600 dark:hover:text-blue-400 transition-colors">Home</Link>
          <span>/</span>
          <Link href="/products" className="hover:text-blue-600 dark:hover:text-blue-400 transition-colors">Products</Link>
          <span>/</span>
          <span className="text-gray-800 dark:text-gray-200">{product.title}</span>
        </div>

        {/* Back Button */}
        <button
          onClick={() => router.back()}
          className="flex items-center space-x-2 text-gray-600 dark:text-gray-400 hover:text-blue-600 dark:hover:text-blue-400 mb-6 transition-colors"
        >
          <ArrowLeft className="w-5 h-5" />
          <span>Back to Products</span>
        </button>

        <div className="bg-white dark:bg-gray-800 rounded-2xl shadow-lg border border-gray-200 dark:border-gray-700 overflow-hidden">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 p-8">
            {/* Product Images */}
            <div className="space-y-4">
              {/* Main Image */}
              <div className="aspect-square relative overflow-hidden rounded-xl bg-gray-100 dark:bg-gray-700">
                <Image
                  src={productImages[selectedImage]}
                  alt={product.title}
                  fill
                  className="object-cover"
                  priority
                />
              </div>
              
              {/* Thumbnail Images */}
              <div className="grid grid-cols-4 gap-2">
                {productImages.map((image, index) => (
                  <button
                    key={index}
                    onClick={() => setSelectedImage(index)}
                    className={`aspect-square relative overflow-hidden rounded-lg border-2 transition-all ${
                      selectedImage === index 
                        ? 'border-blue-600 dark:border-blue-400 ring-2 ring-blue-200 dark:ring-blue-800' 
                        : 'border-gray-200 dark:border-gray-600 hover:border-gray-300 dark:hover:border-gray-500'
                    }`}
                  >
                    <Image
                      src={image}
                      alt={`${product.title} ${index + 1}`}
                      fill
                      className="object-cover"
                    />
                  </button>
                ))}
              </div>
            </div>

            {/* Product Info */}
            <div className="space-y-6">
              {/* Category Badge */}
              <div className="inline-flex items-center px-3 py-1 bg-blue-100 dark:bg-blue-900/30 text-blue-800 dark:text-blue-300 rounded-full text-sm font-medium">
                {product.category}
              </div>

              {/* Title and Rating */}
              <div>
                <h1 className="text-3xl font-bold text-gray-900 dark:text-gray-100 mb-2">
                  {product.title}
                </h1>
                <div className="flex items-center space-x-2">
                  <div className="flex items-center">
                    {[...Array(5)].map((_, i) => (
                      <Star key={i} className="w-5 h-5 fill-yellow-400 text-yellow-400" />
                    ))}
                  </div>
                  <span className="text-gray-600 dark:text-gray-400">(4.5)</span>
                  <span className="text-gray-400 dark:text-gray-500">•</span>
                  <span className="text-gray-600 dark:text-gray-400">128 reviews</span>
                </div>
              </div>

              {/* Price */}
              <div className="flex items-center space-x-4">
                <span className="text-4xl font-bold text-blue-600 dark:text-blue-400">
                  ${product.price.toFixed(2)}
                </span>
                <span className="text-lg text-gray-500 dark:text-gray-400 line-through">
                  ${(product.price * 1.2).toFixed(2)}
                </span>
                <span className="bg-red-100 dark:bg-red-900/30 text-red-800 dark:text-red-300 px-2 py-1 rounded-full text-sm font-medium">
                  17% OFF
                </span>
              </div>

              {/* Description */}
              <div>
                <h3 className="text-lg font-semibold text-gray-900 dark:text-gray-100 mb-2">Description</h3>
                <p className="text-gray-600 dark:text-gray-400 leading-relaxed">
                  {product.description}
                </p>
              </div>

              {/* Product Details */}
              {product.details && (
                <div>
                  <h3 className="text-lg font-semibold text-gray-900 dark:text-gray-100 mb-3">Specifications</h3>
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                    {Object.entries(product.details).map(([key, value]) => (
                      <div key={key} className="flex justify-between items-center p-3 bg-gray-50 dark:bg-gray-700 rounded-lg border border-gray-200 dark:border-gray-600">
                        <span className="text-gray-600 dark:text-gray-400 capitalize">
                          {key.replace('_', ' ')}:
                        </span>
                        <span className="font-medium text-gray-900 dark:text-gray-100">{value}</span>
                      </div>
                    ))}
                  </div>
                </div>
              )}

              {/* Quantity Selector */}
              <div className="flex items-center space-x-4">
                <span className="text-gray-700 dark:text-gray-300 font-medium">Quantity:</span>
                <div className="flex items-center border border-gray-300 dark:border-gray-600 bg-white dark:bg-gray-700 rounded-lg">
                  <button
                    onClick={() => setQuantity(Math.max(1, quantity - 1))}
                    className="p-2 hover:bg-gray-100 dark:hover:bg-gray-600 text-gray-700 dark:text-gray-300 transition-colors"
                  >
                    <Minus className="w-4 h-4" />
                  </button>
                  <span className="px-4 py-2 font-medium text-gray-900 dark:text-gray-100">{quantity}</span>
                  <button
                    onClick={() => setQuantity(quantity + 1)}
                    className="p-2 hover:bg-gray-100 dark:hover:bg-gray-600 text-gray-700 dark:text-gray-300 transition-colors"
                  >
                    <Plus className="w-4 h-4" />
                  </button>
                </div>
              </div>

              {/* Action Buttons */}
              <div className="flex space-x-4">
                <button
                  onClick={handleAddToCart}
                  className="flex-1 bg-blue-600 hover:bg-blue-700 dark:bg-blue-500 dark:hover:bg-blue-600 text-white px-6 py-3 rounded-lg font-semibold transition-colors flex items-center justify-center space-x-2 shadow-md hover:shadow-lg"
                >
                  <ShoppingCart className="w-5 h-5" />
                  <span>Add to Cart</span>
                </button>
                <button
                  onClick={handleBuyNow}
                  className="flex-1 bg-green-600 hover:bg-green-700 dark:bg-green-500 dark:hover:bg-green-600 text-white px-6 py-3 rounded-lg font-semibold transition-colors shadow-md hover:shadow-lg"
                >
                  Buy Now
                </button>
                <button
                  onClick={() => setIsFavorite(!isFavorite)}
                  className={`p-3 rounded-lg border-2 transition-all ${
                    isFavorite
                      ? 'border-red-500 bg-red-50 dark:bg-red-900/20 text-red-500'
                      : 'border-gray-300 dark:border-gray-600 hover:border-red-500 hover:text-red-500 text-gray-600 dark:text-gray-400'
                  }`}
                >
                  <Heart className={`w-6 h-6 ${isFavorite ? 'fill-current' : ''}`} />
                </button>
                <button className="p-3 rounded-lg border-2 border-gray-300 dark:border-gray-600 hover:border-blue-500 hover:text-blue-500 text-gray-600 dark:text-gray-400 transition-all">
                  <Share2 className="w-6 h-6" />
                </button>
              </div>

              {/* Features */}
              <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 pt-6 border-t border-gray-200 dark:border-gray-700">
                <div className="flex items-center space-x-3">
                  <div className="p-2 bg-green-100 dark:bg-green-900/30 rounded-lg">
                    <Truck className="w-5 h-5 text-green-600 dark:text-green-400" />
                  </div>
                  <div>
                    <p className="font-medium text-gray-900 dark:text-gray-100">Free Shipping</p>
                    <p className="text-sm text-gray-600 dark:text-gray-400">On orders over $100</p>
                  </div>
                </div>
                
                <div className="flex items-center space-x-3">
                  <div className="p-2 bg-blue-100 dark:bg-blue-900/30 rounded-lg">
                    <Shield className="w-5 h-5 text-blue-600 dark:text-blue-400" />
                  </div>
                  <div>
                    <p className="font-medium text-gray-900 dark:text-gray-100">2 Year Warranty</p>
                    <p className="text-sm text-gray-600 dark:text-gray-400">Full coverage</p>
                  </div>
                </div>
                
                <div className="flex items-center space-x-3">
                  <div className="p-2 bg-orange-100 dark:bg-orange-900/30 rounded-lg">
                    <RotateCcw className="w-5 h-5 text-orange-600 dark:text-orange-400" />
                  </div>
                  <div>
                    <p className="font-medium text-gray-900 dark:text-gray-100">30-Day Returns</p>
                    <p className="text-sm text-gray-600 dark:text-gray-400">Easy returns</p>
                  </div>
                </div>
              </div>

              {/* Stock Status */}
              <div className="flex items-center space-x-2 p-4 bg-green-50 dark:bg-green-900/20 border border-green-200 dark:border-green-800 rounded-lg">
                <Check className="w-5 h-5 text-green-600 dark:text-green-400" />
                <span className="text-green-800 dark:text-green-300 font-medium">In Stock - Ready to Ship</span>
              </div>
            </div>
          </div>
        </div>

        {/* Related Products Section */}
        <div className="mt-16">
          <h2 className="text-2xl font-bold text-gray-900 dark:text-gray-100 mb-6">Related Products</h2>
          {relatedProducts.length > 0 ? (
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
              {relatedProducts.map((relatedProduct) => (
                <div key={relatedProduct.id} className="bg-white dark:bg-gray-800 rounded-xl shadow-lg hover:shadow-xl dark:hover:shadow-2xl transition-all duration-300 overflow-hidden group border border-gray-200 dark:border-gray-700 hover:border-gray-300 dark:hover:border-gray-600">
                  <div className="relative">
                    <div className="aspect-square relative overflow-hidden bg-gray-100 dark:bg-gray-700">
                      <Image
                        src={relatedProduct.image}
                        alt={relatedProduct.title}
                        fill
                        className="object-cover group-hover:scale-105 transition-transform duration-300"
                      />
                    </div>
                    
                    {/* Category badge */}
                    <div className="absolute top-3 left-3 bg-blue-600 dark:bg-blue-500 text-white px-2 py-1 rounded-full text-xs font-medium shadow-lg">
                      {relatedProduct.category}
                    </div>
                  </div>

                  <div className="p-4">
                    <h3 className="text-lg font-semibold text-gray-800 dark:text-gray-100 mb-2 line-clamp-2 group-hover:text-blue-600 dark:group-hover:text-blue-400 transition-colors">
                      {relatedProduct.title}
                    </h3>
                    <p className="text-gray-600 dark:text-gray-400 text-sm mb-3 line-clamp-2">
                      {relatedProduct.description}
                    </p>

                    <div className="flex items-center justify-between mb-4">
                      <span className="text-xl font-bold text-blue-600 dark:text-blue-400">
                        ${relatedProduct.price.toFixed(2)}
                      </span>
                      <div className="flex items-center space-x-1">
                        {[...Array(5)].map((_, i) => (
                          <Star key={i} className="w-3 h-3 fill-yellow-400 text-yellow-400" />
                        ))}
                        <span className="text-xs text-gray-500 dark:text-gray-400 ml-1">(4.5)</span>
                      </div>
                    </div>

                    <div className="flex space-x-2">
                      <Link
                        href={`/products/${relatedProduct.id}`}
                        className="flex-1 bg-gray-100 dark:bg-gray-700 hover:bg-gray-200 dark:hover:bg-gray-600 text-gray-800 dark:text-gray-200 px-3 py-2 rounded-lg text-sm font-medium transition-all duration-300 flex items-center justify-center space-x-1 border border-gray-200 dark:border-gray-600"
                      >
                        <Eye className="w-4 h-4" />
                        <span>View</span>
                      </Link>
                      <button
                        onClick={() => console.log(`Add ${relatedProduct.id} to cart`)}
                        className="flex-1 bg-blue-600 hover:bg-blue-700 dark:bg-blue-500 dark:hover:bg-blue-600 text-white px-3 py-2 rounded-lg text-sm font-medium transition-all duration-300 flex items-center justify-center space-x-1 shadow-md hover:shadow-lg"
                      >
                        <ShoppingCart className="w-4 h-4" />
                        <span>Add</span>
                      </button>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          ) : (
            <div className="text-center py-12 bg-white dark:bg-gray-800 rounded-xl shadow-lg border border-gray-200 dark:border-gray-700">
              <div className="w-16 h-16 bg-gray-100 dark:bg-gray-700 rounded-full flex items-center justify-center mx-auto mb-4">
                <Package className="w-8 h-8 text-gray-400 dark:text-gray-500" />
              </div>
              <p className="text-gray-600 dark:text-gray-400 text-lg mb-2">No related products found</p>
              <p className="text-gray-500 dark:text-gray-500 text-sm">Check out our other products</p>
              <Link
                href="/products"
                className="inline-block mt-4 bg-blue-600 hover:bg-blue-700 dark:bg-blue-500 dark:hover:bg-blue-600 text-white px-6 py-2 rounded-lg transition-colors"
              >
                Browse All Products
              </Link>
            </div>
          )}
        </div>
      </div>
    </div>
  );
}