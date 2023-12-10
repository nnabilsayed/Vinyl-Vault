import React from "react";
import { useCart } from "../../context/StateContext";
import { Link } from "react-router-dom";
import { TbGardenCartOff } from "react-icons/tb";

const Cart = () => {
  const { cartItems, totalPrice, addToCart, removeFromCart } = useCart();

  const handleIncrement = (id) => {
    addToCart(cartItems.find((item) => item.id === id));
  };

  const handleDecrement = (id) => {
    removeFromCart(id);
  };

  return (
    <div>
      <div className="min-h-screen flex justify-center items-center ">
        {cartItems.length === 0 ? (
          <div className="flex flex-col items-center text-center">
            <p className="text-6xl">Your cart is empty</p>
            <TbGardenCartOff className="text-6xl" />
          </div>
        ) : (
          <div className="p-10 flex flex-col">
            <div className="grid grid-rows-10">
              {cartItems.map((item) => (
                <div key={item.id} className="max-w-xl">
                  <div className="grid grid-cols-2">
                    <div className="">
                      <Link to={`/albumdetails/${item.id}`} key={item.id}>
                        <img src={item.src} alt="" />
                      </Link>
                      <p>{item.album}</p>
                    </div>

                    <div className="flex items-center space-x-2 p-4">
                      <button
                        className="bg-white w-14 rounded-2xl text-black text-3xl"
                        onClick={() => handleDecrement(item.id)}
                      >
                        -
                      </button>
                      <span className="text-2xl text-white">
                        {item.quantity}
                      </span>
                      <button
                        className="bg-white w-14 rounded-2xl text-black text-3xl"
                        onClick={() => handleIncrement(item.id)}
                      >
                        +
                      </button>
                    </div>

                    <div className="">Price: ${item.quantity * item.price}</div>
                  </div>
                </div>
              ))}
            </div>{" "}
            <div className="text-right text-4xl">
              <p>Total Price: ${totalPrice}</p>
            </div>
          </div>
        )}
      </div>
    </div>
  );
};

export default Cart;
