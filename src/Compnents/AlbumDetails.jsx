import React from "react";
import { useParams } from "react-router-dom";
import { vinylData } from "./vinyldata";
import { useCart } from "../../context/StateContext";
import Navbar from "./Navbar";
import { FaShoppingCart } from "react-icons/fa";
import Hero from "./Hero";
import NewsLetter from "./NewsLetter";
import Fotter from "./Fotter";
import Rec from "./Rec";
const AlbumDetails = ({ history }) => {
  const { id } = useParams();
  const albumId = parseInt(id);
  const album = vinylData.find((item) => item.id === albumId);
  const { addToCart, cartItems, removeFromCart } = useCart();

  if (!album) {
    return <div>Album not found</div>;
  }

  const cartItem = cartItems.find((item) => item.id === album.id);
  const quantity = cartItem ? cartItem.quantity : 0;

  const handleAddToCart = () => {
    if (!cartItem) {
      // Add to cart only if the item is not already in the cart
      addToCart(album);
    }
    history.push("/cart");
  };

  const handleIncrement = () => {
    addToCart(album);
  };

  const handleDecrement = () => {
    if (quantity > 0) {
      removeFromCart(album.id);
    }
  };

  return (
    <div>
      <Hero
        url={
          "https://static.thehoneycombers.com/wp-content/uploads/sites/6/2021/12/vinyl-shops-lead-image-900x643.jpg"
        }
      ></Hero>
      <div className="flex justify-center p-10 ">
        <div className="bg-white border border-gray-200 rounded-lg shadow dark:bg-gray-800 dark:border-gray-700  ">
          <div className="flex justify-center">
            {/* Center the image */}
            <img
              className="max-w-full h-auto lg:max-w-2xl"
              src={album.src}
              alt=""
            />
          </div>

          <div className="p-5">
            <h5 className="mb-2 text-2xl font-bold tracking-tight text-gray-900 dark:text-white">
              {album?.album} - {album?.artist}
            </h5>
            <h2>${album?.price}</h2>
            <p className="mb-3 font-normal text-gray-700 dark:text-gray-400 max-w-5xl">
              {album.description}
            </p>
            <div className="flex items-center space-x-4 ">
              <button
                className="p-4 inline-flex items-center px-3 py-2 text-sm font-medium text-center text-white bg-blue-700 rounded-lg hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800 max-w-md"
                onClick={handleAddToCart}
              >
                Add to Cart <FaShoppingCart className=" bgh " />
              </button>

              <button
                className="p-4 inline-flex items-center px-3 py-2 text-sm font-medium text-center text-white bg-blue-700 rounded-lg hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800 max-w-md"
                onClick={handleDecrement}
              >
                -
              </button>
              <span className="text-2xl text-white bg-wh"> {quantity}</span>
              <button
                className="p-4 inline-flex items-center px-3 py-2 text-sm font-medium text-center text-white bg-blue-700 rounded-lg hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800 max-w-md"
                onClick={handleIncrement}
              >
                +
              </button>
            </div>
          </div>
        </div>
      </div>
      <div className="text-center">
        <h2 className="ml-20 font-bold text-6xl text-center text-white">
          You may also like
        </h2>
      </div>
      <Rec></Rec>
    </div>
  );
};

export default AlbumDetails;
