import React from 'react'
import { Link } from 'react-router-dom'
import { useWishList } from '../Context/WishListContext'
function ProductCard({ category, price, thumbnail, images, title, id }) {
  const { toggleWishList, isInWishList } = useWishList();
  const liked = isInWishList(id);
  return (
    <Link to={`/Product/${id}`}>
      <div className=" relative max-w-sm w-full mx-auto bg-white rounded-2xl shadow-lg hover:shadow-2xl  overflow-hidden transition-transform hover:scale-105 duration-300"    >
        <img
          src={thumbnail}
          alt=" Product Thumbnail"
          className="w-full h-52 sm:h-60 object-cover"
        />
        <div className="p-5 space-y-3">
          <h2 className="text-xl sm:text-2xl font-semibold text-gray-800 line-clamp-2">{title}</h2>
          <p className="text-xs sm:text-sm uppercase tracking-wider text-gray-500 font-medium"  >{category}</p>
          <p className="text-lg sm:text-xl  text-green-600 font-bold">${price}</p>
          <div className="flex flex-wrap gap-2 mt-4">
            {images?.map((img, index) => (
              <img
                key={index}
                src={img}
                alt="images"
                className="w-14 h-14 sm:w-16 sm:h-16  object-cover rounded-md  border border-gray-200     "
              />
            ))}
          </div>
          <button
            onClick={() => toggleWishList({ id, title, thumbnail, price, category })}
            className={`absolute top-2 right-2 text-xl ${liked ? "text-red-500" : "text-gray-300"
              }`}
          >
            ♥
          </button>
        </div>
      </div>
    </Link>
  )
}

export default ProductCard