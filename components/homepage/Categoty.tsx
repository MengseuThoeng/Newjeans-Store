"use client";
import { useEffect, useState } from "react";
import { Badge, IconButton, Menu, Table, Tooltip } from "@mui/material";
import { FaShoppingCart } from "react-icons/fa";
import Link from "next/link";
import { ProductType } from "@/lib/definitions";
import { AiOutlineClose } from "react-icons/ai";
import { useDispatch, useSelector } from "react-redux";
import DeleteIcon from "@mui/icons-material/Delete";
import {
  addToCart,
  setProductsItem,
  removeFromCart,
  selectProducts,
} from "@/redux/features/cart/cartSlice";

interface Props {
  categoryService: string;
}

const Category: React.FC<Props> = ({ categoryService }: Props) => {
  const [anchorEl, setAnchorEl] = useState<null | HTMLElement>(null);
  const open = Boolean(anchorEl);
  const dispatch = useDispatch();
  const cartItemsFromStore = useSelector(selectProducts);

  const handleClose = () => {
    setAnchorEl(null);
  };

  const totalPrice = cartItemsFromStore.reduce(
    (total, item) => total + item.price * item.quantity,
    0
  );

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

  return (
    <div>
      <Link href={"/cart"}>
        <div className="flex cursor-pointer position-relative right-4">
          <Badge
            badgeContent={cartItemsFromStore.length}
            color="primary"
            className="position-relative text-xl"
            id="basic-button"
            aria-controls={open ? "basic-menu" : undefined}
            aria-haspopup="true"
            aria-expanded={open ? "true" : undefined}
            onClick={(event) => setAnchorEl(event.currentTarget)}
          >
            <FaShoppingCart color="action" />
          </Badge>
        </div>
      </Link>
    </div>
  );
};

export default Category;
