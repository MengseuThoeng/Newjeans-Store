"use client";
import { Alert, IconButton, Tooltip } from "@mui/material";
import React, { useEffect, useState } from "react";
import DeleteIcon from "@mui/icons-material/Delete";
import FavoriteIcon from "@mui/icons-material/Favorite";
import { useDispatch, useSelector } from "react-redux";
import ExpandMoreIcon from "@mui/icons-material/ExpandMore";
import {
  addToCart,
  removeFromCart,
  selectProducts,
  setProductsItem,
} from "@/redux/features/cart/cartSlice";
import { ProductType } from "@/lib/definitions";

export default function Shop() {
  const [cartItemsFromStore, setCartItemsFromStore] = useState<ProductType[]>(
    []
  );
  const [showDiscountField, setShowDiscountField] = useState(false);
  const [expandMoreActive, setExpandMoreActive] = useState(false);
  const [discountCode, setDiscountCode] = useState("");
  const [discountAmount, setDiscountAmount] = useState(0);
  const [invalidDiscount, setInvalidDiscount] = useState(false);
  const [successAlert, setSuccessAlert] = useState(false);
  const dispatch = useDispatch();
  const productsState = useSelector(selectProducts);
  const totalPrice = cartItemsFromStore.reduce(
    (total, item) => total + item.price * item.quantity,
    0
  );

  useEffect(() => {
    setCartItemsFromStore(productsState);
  }, [productsState]);

  const deleteItem = (id: number) => {
    console.log("Item deleted:", id);
    const remainingProducts = cartItemsFromStore.filter(
      (item) => item.id !== id
    );
    dispatch(setProductsItem(remainingProducts));
  };

  const handleAddToCart = (product: ProductType) => {
    const existingItemIndex = cartItemsFromStore.findIndex(
      (item) => item.id === product.id
    );

    if (existingItemIndex !== -1) {
      const updatedCartItems = [...cartItemsFromStore];
      const updatedItem = {
        ...updatedCartItems[existingItemIndex],
        quantity: updatedCartItems[existingItemIndex].quantity - 1,
      };
      updatedCartItems[existingItemIndex] = updatedItem;
      dispatch(addToCart(updatedItem));
    } else {
      dispatch(addToCart({ ...product, quantity: 1 }));
    }
  };

  const handleRemoveFromCart = (id: number) => {
    dispatch(removeFromCart(id));
  };

  const toggleDiscountField = () => {
    setShowDiscountField((prev) => !prev);
    setExpandMoreActive((prev) => !prev);
  };

  const applyDiscount = () => {
    if (discountCode === "DISCOUNT10") {
      // Can you take the code "DISCOUNT10"
      setDiscountAmount(10);
      setInvalidDiscount(false);
      setSuccessAlert(true);
      setTimeout(() => {
        setSuccessAlert(false);
      }, 3000);
    } else {
      setDiscountAmount(0);
      setInvalidDiscount(true);
      setSuccessAlert(false);

      setTimeout(() => {
        setInvalidDiscount(false);
      }, 3000);
    }
  };

  return (
    <div className="container mx-auto">
      <div className="grid gap-5 font-Staatliches my-6">
        <h1 className="text-3xl tracking-wider pl-4">Your Shopping Cart</h1>

        <section className="cart-items flex gap-5 lg:flex-col">
          <div className="cart-list flex-col w-full gap-5">
            {productsState.map((product) => (
              <div
                key={product.id}
                className="cart-item flex items-start justify-between border border-slate-600 p-5"
              >
                <div className="product-info flex items-start gap-5">
                  <img
                    src={product.image}
                    alt={product.name}
                    className="w-24 h-24 object-cover"
                  />
                  <div className="flex flex-col gap-2">
                    <h2 className="tracking-wider text-lg">{product.name}</h2>
                    <p className="text-gray-500">{product.category}</p>
                  </div>
                </div>

                <div className="product-actions flex flex-col items-end gap-3">
                  <div className="quantity-control flex items-center border border-gray-300 rounded">
                    <button
                      onClick={() => handleRemoveFromCart(product.id)}
                      className="bg-gray-200 p-2 hover:bg-gray-300"
                    >
                      -
                    </button>
                    <span className="border-y border-gray-300 px-3">
                      {" "}
                      {product.quantity}{" "}
                    </span>
                    <button
                      onClick={() => handleAddToCart(product)}
                      className="bg-gray-200 p-2 hover:bg-gray-300"
                    >
                      +
                    </button>
                  </div>
                  <p className="tracking-wider">Price: ${product.price}</p>
                  <div className="flex items-center gap-3">
                    <Tooltip title="Delete">
                      <IconButton onClick={() => deleteItem(product.id)}>
                        <DeleteIcon />
                      </IconButton>
                    </Tooltip>
                    <Tooltip title="Favorite">
                      <IconButton>
                        <FavoriteIcon />
                      </IconButton>
                    </Tooltip>
                  </div>
                </div>
              </div>
            ))}
          </div>

          <aside className="cart-summary sticky top-5 w-[550px] lg:w-1/3 border border-slate-600 p-3 pr-4">
            <div className="summary-header flex items-center justify-between text-lg font-semibold mb-3">
              <h2>Order Summary</h2>
            </div>

            <div className="total-price flex items-center justify-between border-b py-2 border-slate-200">
              <span>Total Price:</span>
              <span className="font-bold text-lg">$ {totalPrice}</span>
            </div>

            <button className="w-full bg-black text-white py-2 mt-3 rounded hover:bg-gray-800">
              Proceed to Checkout
            </button>
          </aside>
        </section>
      </div>
    </div>
  );
}
