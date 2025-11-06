import { Link } from "react-router-dom";
import { useState } from "react";
import {Button} from "./ui/button";
import { ShoppingCart, X,Trash  } from 'lucide-react';
import product from "../assets/images/product.webp"

export default function Cart() {
    const [isCartOpen, setIsCartOpen] = useState(false);
    const toggleCart = () => setIsCartOpen(!isCartOpen);
    return (
        <div className="relative ">
            <div className="cursor-pointer relative" onClick={toggleCart}>
                <ShoppingCart className="w-6 h-6 text-blue-900" />
                {/* {cartCount > 0 && (
                <span className="absolute -top-1 -right-1 bg-red-600 text-white text-[10px] sm:text-xs font-bold rounded-full h-4 w-4 sm:h-5 sm:w-5 flex items-center justify-center">
                  {cartCount}
                </span> */}
                {/* )} */}
            </div>

            <div className={`fixed flex flex-col justify-start items-center border  inset-y-0 right-0 bg-white shadow-lg p-10 md:p-20 sm:p-4 max-w-md transition-transform duration-300 ease-in-out z-50 rounded-xl ${isCartOpen ? "translate-x-0 m-8" : "translate-x-full "}`}>
                {/* {cartItems.length > 0 ? (
                <>
                  <div className="space-y-3 sm:space-y-4 max-h-[50vh] sm:max-h-[60vh] overflow-y-auto">
                    {cartItems.map((product) => (
                      <div key={product.id} className="flex items-center gap-3 sm:gap-4 border-b pb-3 sm:pb-4">
                        <Image
                          src={product.image}
                          alt={product.name}
                          width={50}
                          height={50}
                          className="w-12 h-12 sm:w-14 sm:h-14 object-cover rounded"
                        />
                        <div className="flex-1 min-w-0">
                          <h4 className="font-semibold text-sm sm:text-base truncate">{product.name}</h4>
                          <p className="text-gray-600 text-xs sm:text-sm">Rs {product.price}</p>
                          <div className="flex items-center mt-1">
                            <button
                              onClick={() => handleQuantityChange(product.id, (product.inventory || 1) - 1)}
                              className="px-1 sm:px-2 bg-gray-200 rounded-l hover:bg-gray-300 text-xs sm:text-sm"
                            >
                              -
                            </button>
                            <span className="px-2 sm:px-3 bg-gray-100 text-xs sm:text-sm">{product.inventory || 1}</span>
                            <button
                              onClick={() => handleQuantityChange(product.id, (product.inventory || 1) + 1)}
                              className="px-1 sm:px-2 bg-gray-200 rounded-r hover:bg-gray-300 text-xs sm:text-sm"
                            >
                              +
                            </button>
                          </div>
                        </div>
                        <button
                          onClick={() => handleRemoveItem(product.id)}
                          className="text-red-500 hover:text-red-700 text-sm sm:text-base"
                        >
                          ×
                        </button>
                      </div>
                    ))}
                  </div>
                  <div className="mt-3 sm:mt-4 border-t pt-3 sm:pt-4">
                    <div className="flex justify-between font-bold text-base sm:text-lg">
                      <span>Total:</span>
                      <span>Rs {calculateTotal()}</span>
                    </div>




                    <button 
  onClick={handleCheckout}
  disabled={isLoading}
  className={`snipcart-checkout w-full mt-3 sm:mt-4 bg-red-600 hover:bg-red-700 text-white py-1.5 sm:py-2 rounded text-sm sm:text-base ${
    isLoading ? 'opacity-50 cursor-not-allowed' : ''
  }`}
>
  {isLoading ? 'Processing...' : 'Checkout'}
</button>

                  </div>
                </>
              ) : ( */}
                <div onClick={toggleCart} className="flex items-center justify-between fixed top-0 right-0 w-full p-5">
                  <h1>Your Cart</h1>
                    <X />
                </div>
               <div onClick={toggleCart} className="flex items-center justify-between fixed top-10 right-0 w-full p-5">
                  <h1 className="uppercase font-normal text-gray-600">Product</h1>
                    <h2 className="uppercase font-normal text-gray-600">Total</h2>
                </div>
                <hr className="border border-gray-200 w-full fixed top-28 "/>
                <div className="mt-32 flex items-start  justify-between gap-1">
<img src={product} alt="cart-product" className="w-20 h-20"/>
<span className="flex flex-col items-start space-y-1">
  <h1 className="uppercase text-sm font-medium  hover:text-red-500 transition-all duration-700">eclipse <br /> earbuds</h1>
  <h2>Rs:88800</h2>
  <h2>Color:Jet black</h2>
  <span className="flex items-center shadow-md w-full justify-between px-4 rounded-lg">
    <button>+</button>
    <h1>1</h1>
    <button>-</button>
  </span>
</span>
<span className="flex flex-col items-center justify-center">
  <h1 className="text-lg font-medium text-gray-600">Rs:17000</h1>
<Trash size={20}  className="text-gray-500 hover:text-red-500 transition-all duration-700"  />
</span>
                </div>
                <Button className="w-full bottom-0 fixed m-4" ><Link to={'/checkout'}>Checkout</Link></Button>
                {/* <div className="flex justify-center items-center flex-col  space-y-3">
                    <ShoppingCart className="w-6 h-6 sm:w-20 sm:h-20 text-blue-900" />
                    <p className="text-black text-center text-lg sm:text-xl">Your cart is feeling lonely</p>
                    <Link to="/bats">
                        <Button>
                            Continue Shopping
                        </Button>
                    </Link>
                </div> */}
                {/* )} */}
            </div>
            {isCartOpen && (
                <div
                    className="fixed inset-0 h-screen backdrop-blur-sm  z-40"
                    onClick={() => {

                        setIsCartOpen(false);
                    }}
                />
            )}
        </div>
    )
}