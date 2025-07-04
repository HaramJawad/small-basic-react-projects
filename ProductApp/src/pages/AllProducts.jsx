import { React, useState, useEffect } from 'react'
import { Container, ProductCard } from "../components"
function AllProducts() {
  const [allProducts, setAllProducts] = useState([])
  const [loading, setLoading] = useState(true)
  const [error, setError] = useState('')
  const [searchProduct, setSearchProduct] = useState("")
  const [selectCategory, setSelectCategory] = useState("")
  const filteredProducts = allProducts.filter(product =>
    product.title.toLowerCase().includes(searchProduct.toLowerCase()) &&
    (selectCategory === "" || product.category === selectCategory)
  );
  useEffect(() => {
    const FetchAllProducts = async () => {
      try {
        const response = await fetch('https://api.freeapi.app/api/v1/public/randomproducts?page=1&limit=10&inc=category%2Cprice%2Cthumbnail%2Cimages%2Ctitle%2Cid&query=mens-watches ')
        if (!response.ok) {
          throw new Error(`HTTP error! status: ${response.status}`);
        }
        const json = await response.json();
        setAllProducts(json.data.data);
      }
      catch (error) {
        setError(error)
      }
      finally {
        setLoading(false)
      }
    };
    FetchAllProducts();
  }, [])
  const uniqueCategories = [...new Set(allProducts.map(p => p.category))];
  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-50 to-white py-10 px-4">
      <Container>
        <div className="mb-8 flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4"  >
          <label className="text-lg font-semibold text-gray-700" htmlFor="Search Input">Search Products</label>
          <input type="text" id="Search Input" value={searchProduct} onChange={(e) => setSearchProduct(e.target.value)} placeholder="Search" className="w-full sm:w-80 px-4 py-2 border border-gray-300 rounded-lg shadow-sm focus:outline-none focus:ring-2 focus:ring-blue-400 transition duration-200" />
        </div>
        <div className="mb-8 flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4">
          <label className="text-lg font-semibold text-gray-700" htmlFor="Category Select">Select Category</label>
          <select
            id="Category Select"
            value={selectCategory}
            onChange={(e) => setSelectCategory(e.target.value)}
            className="w-full sm:w-80 px-4 py-2 border border-gray-300 rounded-lg shadow-sm focus:outline-none focus:ring-2 focus:ring-blue-400 transition duration-200 bg-white text-gray-700"
          >
            <option value="">All Categories</option>
            {uniqueCategories.map((cat, index) => (
              <option key={index} value={cat}>{cat}</option>
            ))}
          </select>
        </div>
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6"   >
          {filteredProducts.map((product) => (
            <ProductCard category={product.category} key={product.id} price={product.price} thumbnail={product.thumbnail} images={product.images} title={product.title} id={product.id} />
          ))}
          {/*allProducts
            .map((product) =>
            (
              <ProductCard category={product.category} price={product.price} thumbnail={product.thumbnail} images={product.images} title={product.title} id={product.id} />
            ))*/}
        </div>
      </Container>
    </div>
  )
}
export default AllProducts