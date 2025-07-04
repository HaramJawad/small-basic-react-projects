import { createContext, useContext, useState, useEffect } from 'react';
const WishListContext = createContext();
export const useWishList = () => useContext(WishListContext);
export const WishListProvider = ({ children }) => {
  const [wishlistItems, setWishListItems] = useState(() => {
    const stored = localStorage.getItem("wishlistItems");
    return stored ? JSON.parse(stored) : [];
  });
  useEffect(() => {
    localStorage.setItem("wishlistItems", JSON.stringify(wishlistItems));
  }, [wishlistItems]);
  const toggleWishList = (product) => {
    setWishListItems((prev) => {
      const exists = prev.find((item) => item.id === product.id);
      if (exists) {
        return prev.filter((item) => item.id !== product.id);
      } else {
        return [...prev, product];
      }
    });
  };
  const isInWishList = (id) => {
    return wishlistItems.some((item) => item.id === id);
  };
  return (
    <WishListContext.Provider value={{ wishlistItems, toggleWishList, isInWishList }}>
      {children}
    </WishListContext.Provider>
  )
};

