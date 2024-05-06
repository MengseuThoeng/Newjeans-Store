// import React, { useState } from "react";
// import Shop from "@/app/(user)/shop/page";
// import { useDispatch, useSelector } from "react-redux";
// import {
//   addToCart,
//   removeFromCart,
//   selectProducts,
//   setProductsIeam
// } from "@/redux/features/cart/cartSlice";
// import { ProductType } from "@/lib/definitions";

// export default function ParentComponent() {
//   const cartItemsFromStore = useSelector(selectProducts);
//   const dispatch = useDispatch();
//   const totalPrice = cartItemsFromStore.reduce(
//     (total, item) => total + item.price * item.quantity,
//     0
//   );

//   const deleteItem = (id: number) => {
//     console.log("Item deleted:", id);
//     const remainingProducts = cartItemsFromStore.filter(
//       (item) => item.id !== id
//     );
//     dispatch(setProductsIeam(remainingProducts));
//   };

//   const handleAddToCart = (product: ProductType) => {
//     const existingItemIndex = cartItemsFromStore.findIndex(
//       (item) => item.id === product.id
//     );

//     if (existingItemIndex !== -1) {
//       const updatedCartItems = [...cartItemsFromStore];
//       const updatedItem = {
//         ...updatedCartItems[existingItemIndex],
//         quantity: updatedCartItems[existingItemIndex].quantity - 1
//       };
//       updatedCartItems[existingItemIndex] = updatedItem;
//       dispatch(addToCart(updatedItem));
//     } else {
//       dispatch(addToCart({ ...product, quantity: 1 }));
//     }
//   };

//   const handleRemoveFromCart = (id: number) => {
//     dispatch(removeFromCart(id));
//   };

//   return (
//     <>
//       <Shop
//         totalPrice={totalPrice}
//         deleteItem={deleteItem}
//         handleAddToCart={handleAddToCart}
//         handleRemoveFromCart={handleRemoveFromCart}
//       />
//     </>
//   );
// }