"use client";
import Link from "next/link";
import { usePathname } from "next/navigation";
import React, { ReactNode, useEffect, useState } from "react";
import { MenuList } from "./menu";
import { FaUser } from "react-icons/fa";
import { IoMdClose, IoMdMenu } from "react-icons/io";
import { selectProducts } from "@/redux/features/cart/cartSlice";
import { ProductType } from "@/lib/definitions";
import { useSelector } from "react-redux";
import { signOut, useSession } from "next-auth/react";
import {
  Avatar,
  Box,
  Divider,
  IconButton,
  ListItemIcon,
  Menu,
  MenuItem as MuiMenuItem,
  Tooltip,
} from "@mui/material";

import Settings from "@mui/icons-material/Settings";
import Logout from "@mui/icons-material/Logout";
import PersonAdd from "@mui/icons-material/PersonAdd";
import Category from "../homepage/Categoty";

type MenuItem = {
  name: ReactNode;
  path: string;
  active: boolean;
};

export default function NavbarComponent() {
  const pathname = usePathname();
  const [menu, setMenu] = useState<MenuItem[]>(MenuList);
  const [menuOpen, setMenuOpen] = useState(false);
  const cartItems = useSelector(selectProducts);
  const [products, setProducts] = useState<ProductType[]>([]);
  const [anchorEl, setAnchorEl] = useState<null | HTMLElement>(null); // Initialize state with null
  const open = Boolean(anchorEl);
  const { data: session, status } = useSession();

  const handleClick = (event: React.MouseEvent<HTMLElement>) => {
    setAnchorEl(event.currentTarget);
  };

  const handleClose = () => {
    setAnchorEl(null);
  };

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await fetch("https://store.istad.co/api/products/");
        if (!response.ok) {
          throw new Error("Failed to fetch products");
        }
        const data = await response.json();
        setProducts(data);
      } catch (error) {
        console.error("Error fetching products:", error);
      }
    };

    fetchData();
  }, []);

  const getMenuStyle = () => {
    if (typeof window !== 'undefined' && document.documentElement.clientWidth <= 2600) {
      return { left: menuOpen ? "0" : "-200%" };
    } else {
      setMenuOpen(false);
      return {};
    }
  };
  

  const handleSignOut = () => {
    signOut();
  };

  return (
    <div className="container mx-auto w-full pt-2 pb-2 z-[1] bg-white">
      <div className="sticky w-full top-0 flex items-center justify-between">
        <Link href="/" className="flex place-items-center ">
          <IoMdMenu
            className="text-2xl text-slate-950 cursor-pointer menu dark:text-white"
            onClick={() => setMenuOpen((prev) => !prev)}
          />
          <div className="w-[80px] pl-3">
            <img
              src="https://img1.picmix.com/output/stamp/normal/3/1/2/5/2525213_cf584.png"
              alt="Logo"
            />
          </div>
        </Link>
        <p
          className="navigation flex text-black lg:border-t-[1px] lg:border-cyan-950  z-50"
          style={getMenuStyle()}
        >
          <div className="flex place-items-center justify-between">
            <IoMdClose
              className="text-2xl cursor-pointer text-slate-900 hidden lg:block dark:text-white"
              onClick={() => setMenuOpen((prev) => !prev)}
            />
          </div>
          <ul className="navbar w-full flex font-Staatliches tracking-wider items-center justify-center gap-6">
            {menu.map((item, index) => (
              <li key={index}>
                <Link href={item.path}>
                  <div className={item.path === pathname ? "active" : ""}>
                    {item.name}
                  </div>
                </Link>
              </li>
            ))}
          </ul>
        </p>
        
        <div className="flex place-items-center gap-7">
          <div className="relative text-xl">
            <div>
              <Category cartItems={cartItems} />
            </div>
          </div>
          <React.Fragment>
            {status === "loading" ? (
              <div>Please wait...</div>
            ) : session && session.user ? (
              <div>
                <Box
                  sx={{
                    display: "flex",
                    alignItems: "center",
                    textAlign: "center",
                  }}
                >
                  <Tooltip title="Account settings">
                    <IconButton
                      onClick={handleClick}
                      size="small"
                      sx={{ ml: 2 }}
                      aria-controls={open ? "account-menu" : undefined}
                      aria-haspopup="true"
                      aria-expanded={open ? "true" : undefined}
                    >
                      <Avatar
                        src={session.user.image}
                        alt={session.user.name}
                        style={{ width: "40px", borderRadius: "50%" }}
                      />
                    </IconButton>
                  </Tooltip>
                </Box>
                <Menu
                  anchorEl={anchorEl}
                  id="account-menu"
                  open={open}
                  onClose={handleClose}
                  onClick={handleClose}
                  PaperProps={{
                    elevation: 0,
                    sx: {
                      overflow: "visible",
                      filter: "drop-shadow(0px 2px 8px rgba(0,0,0,0.32))",
                      mt: 1.5,
                      "& .MuiAvatar-root": {
                        width: 32,
                        height: 32,
                        ml: -0.5,
                        mr: 1,
                      },
                      "&::before": {
                        content: '""',
                        display: "block",
                        position: "absolute",
                        top: 0,
                        right: 14,
                        width: 10,
                        height: 10,
                        bgcolor: "background.paper",
                        transform: "translateY(-50%) rotate(45deg)",
                        zIndex: 0,
                      },
                    },
                  }}
                  transformOrigin={{ horizontal: "right", vertical: "top" }}
                  anchorOrigin={{ horizontal: "right", vertical: "bottom" }}
                >
                  <MuiMenuItem
                    onClick={handleClose}
                    className="flex gap-3 items-center justify-center"
                  >
                    <img
                      src={session.user.image}
                      alt="User Avatar"
                      style={{ width: "40px", borderRadius: "50%" }}
                    />
                    <div>{session.user.name}</div>
                  </MuiMenuItem>
                  <Divider />
                  <MuiMenuItem onClick={handleClose}>
                    <ListItemIcon>
                      <PersonAdd fontSize="small" />
                    </ListItemIcon>
                    Add another account
                  </MuiMenuItem>
                  <MuiMenuItem onClick={handleClose}>
                    <ListItemIcon>
                      <Settings fontSize="small" />
                    </ListItemIcon>
                    Settings
                  </MuiMenuItem>
                  <MuiMenuItem onClick={handleSignOut}>
                    <ListItemIcon>
                      <Logout fontSize="small" />
                    </ListItemIcon>
                    Logout
                  </MuiMenuItem>
                </Menu>
              </div>
            ) : (
              <Link
                href="/login"
                className="inline-block bg-gradient-to-r from-gray-800 to-blue-500 hover:from-blue-500 hover:to-gray-800 text-white py-3 px-6 rounded-lg shadow-md transition duration-300 ease-in-out transform hover:-translate-y-1 hover:scale-105"
              >
                Login
              </Link>
            )}
          </React.Fragment>
        </div>
      </div>
    </div>
  );
}
