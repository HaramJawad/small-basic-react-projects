import React from 'react';
import { useState, useEffect } from 'react';
import { Link, useNavigate, useParams } from 'react-router-dom';
import { Container } from "../components";
import { useCart } from '../Context/CartContext';
function Product() {
  const [Product, setProduct] = useState([])
  const navigate = useNavigate();
  const { id } = useParams();
  const { addToCart } = useCart();
  useEffect(() => {
    const fetchProduct = async () => {
      try {
        const response = await fetch(`https://api.freeapi.app/api/v1/public/randomproducts/${id}`)
        const result = await response.json()
        if (result.success) {
          console.log("THE RESULT IS:", result)
          setProduct(result.data)
        }
        else {
          navigate('/')
        }
      }
      catch (error) {
        console.error("Error fetching joke:", error);
        navigate('/')
      }
    };
    if (id) fetchProduct();
    else navigate('/')
  }, [id, navigate])
  return Product ? (
    <div className="min-h-screen bg-gradient-to-br from-white to-blue-50 py-10 px-4">
      <Container>
        <div className="max-w-4xl mx-auto bg-white rounded-2xl shadow-lg p-6 md:p-10 space-y-6">

          {/* Title */}
          <h1 className="text-3xl sm:text-4xl font-bold text-center text-blue-700">
            {Product.title}
          </h1>

          {/* Thumbnail */}
          <img
            src={Product.thumbnail}
            alt="Product thumbnail"
            className="w-full max-h-[400px] object-cover rounded-lg"
          />

          {/* Product Info */}
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-6 text-gray-800">
            <div className="space-y-2">
              <p><span className="font-semibold">Brand:</span> {Product.brand}</p>
              <p><span className="font-semibold">Category:</span> {Product.category}</p>
              <p><span className="font-semibold">Description:</span> {Product.description}</p>
            </div>
            <div className="space-y-2">
              <p><span className="font-semibold">Price:</span> ${Product.price}</p>
              <p><span className="font-semibold">Discount:</span> {Product.discountPercentage}%</p>
              <p><span className="font-semibold">Rating:</span> ⭐ {Product.rating}</p>
              <p><span className="font-semibold">Stock:</span> {Product.stock} units</p>
            </div>
          </div>

          {/* Product Images */}
          <div className="mt-6">
            <h2 className="text-xl font-semibold text-gray-700 mb-2">More Images:</h2>
            <div className="flex flex-wrap gap-3">
              {Product.images?.map((img, index) => (
                <img
                  key={index}
                  src={img}
                  alt={`product-img-${index}`}
                  className="w-24 h-24 object-cover rounded border"
                />
              ))}
            </div>
          </div>
        </div>
        <button
                onClick={() => addToCart(Product)}
                className="mt-4 px-4 py-2 bg-blue-600 text-white rounded hover:bg-blue-700"
              >
                Add to Cart
              </button>
      </Container>
    </div>
  ) : null;

}

export default Product