import { useWishList } from "../Context/WishListContext";

function WishlistPage() {
  const { wishlistItems, toggleWishList } = useWishList();

  return (
    <div className="p-8">
      <h2 className="text-2xl font-bold mb-4">Your Wishlist</h2>
      {wishlistItems.length === 0 ? (
        <p>No items in your wishlist.</p>
      ) : (
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6">
          {wishlistItems.map((item) => (
            <div key={item.id} className="border p-4 rounded">
              <img src={item.thumbnail} alt={item.title} className="w-full h-40 object-cover mb-2" />
              <h3 className="font-semibold">{item.title}</h3>
              <p>${item.price}</p>
              <button
                onClick={() => toggleWishList(item)}
                className="mt-2 text-sm text-red-500"
              >
                Remove from Wishlist
              </button>
            </div>
          ))}
        </div>
      )}
    </div>
  );
}

export default WishlistPage;
