import { React, useState } from 'react'
import Container from '../components/Container/Container.jsx'
function Home() {
  const [randomProduct, setRandomProduct] = useState(null);
  const [loading, setLoading] = useState(false);
  const FetchRandomProduct = async () => {
    setLoading(true)
    try {
      const response = await fetch('https://api.freeapi.app/api/v1/public/randomproducts/product/random')
      if (!response.ok) {
        throw new Error(`HTTP error! status: ${response.status}`);
      }
      const result = await response.json();
     /* console.log("result is:", result)*/
      setRandomProduct(result.data);
    }
    catch (error) {
      console.error('Error fetching data:', error);
    }
    finally {
      setLoading(false);
    }
  };
  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-100 via-white to-blue-50 py-12 px-4" >
      <Container>
        <div className="flex justify-center mb-10">
          <button onClick={FetchRandomProduct} className="bg-blue-600 hover:bg-blue-700 text-white px-6 py-3 rounded-full shadow-lg text-lg font-semibold transition-all duration-300 focus:outline-none focus:ring-4 focus:ring-blue-300"  >
            Show random Product
          </button>
        </div>
        {randomProduct && (
          <div className="mx-auto w-full max-w-4xl bg-white shadow-2xl rounded-3xl overflow-hidden transition-all duration-300 hover:shadow-blue-300">
            <img
              src={randomProduct.thumbnail}
              alt="Thumbnail"
              className="w-full h-64 sm:h-80 object-cover"
            />
            <div className="p-8 space-y-6">
              <h2 className="text-3xl sm:text-4xl font-extrabold text-blue-800"    >{randomProduct.title}</h2>
              <div className="grid grid-cols-2 sm:grid-cols-3 gap-4 text-gray-700 text-base"       >
                <p><span className="font-semibold">Brand:</span> {randomProduct.brand}</p>
                <p ><span className="font-semibold">Category:</span> {randomProduct.category}</p>
                <p> <span className="font-semibold">Price:</span><span className="text-green-600 font-semibold"  >${randomProduct.price}</span></p>
                <p><span className="font-semibold">Discount:</span> {randomProduct.discountPercentage}%</p>
                <p><span>Rating:</span> ⭐ {randomProduct.rating}</p>
                <p ><span className="font-semibold">Stock:</span> {randomProduct.stock}</p>
              </div>
              <p className="text-gray-600 leading-relaxed text-sm sm:text-base">{randomProduct.description}</p>

              <div className="flex flex-wrap gap-3 mt-4">
                {randomProduct.images
                  .map((img, index) => (
                    <img
                      key={index}
                      src={img}
                      /* onError={(e) => {
                         e.target.onerror = null; // 🔒 prevents infinite loop
                         e.target.src = "https://via.placeholder.com/100"; // or your fallback
                       }}*/
                      alt={`Product image ${index}`}
                      className="w-24 h-24  sm:w-28 sm:h-28 object-cover rounded-lg border border-gray-300 shadow-sm hover:scale-105 transition-transform duration-200 "
                    />
                  ))}
              </div>
            </div>
          </div>
        )}
      </Container>
    </div>
  )
}
export default Home  