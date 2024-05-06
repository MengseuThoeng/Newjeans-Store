import { useState, useEffect } from "react";
import LoadingComponent from "../loading";
import Link from "next/link";
import { ProductType } from "@/lib/definitions";
import CardComponent from "@/components/card/CardComponent";
import { AiFillControl } from "react-icons/ai";
import { Pagination } from "@mui/material";
import { addToCart } from "@/redux/features/cart/cartSlice";
import { useDispatch } from "react-redux";

async function fetchProducts(page: number): Promise<ProductType[]> {
  const productsResponse = await fetch(
    `https://store.istad.co/api/products/?page=${page}&page_size=8`,
    {
      cache: "no-store",
    }
  );
  const productsData: { results: ProductType[] } =
    await productsResponse.json();
  return productsData.results;
}

export default function ProductCard(): JSX.Element {
  const [products, setProducts] = useState<ProductType[]>([]);
  const [cartItems, setCartItems] = useState<ProductType[]>([]);
  const [currentPage, setCurrentPage] = useState<number>(1);
  const dispatch = useDispatch();

  useEffect(() => {
    fetchData(currentPage);
  }, [currentPage]);

  const fetchData = async (page: number) => {
    const data = await fetchProducts(page);
    setProducts(data);
  };

  const addToCartHandler = (product: ProductType): void => {
    dispatch(
      addToCart({
        ...product,
        quantity: 1,
        price: product.price,
      })
    );
  };

  const handlePageChange = (
    event: React.ChangeEvent<unknown>,
    page: number
  ) => {
    setCurrentPage(page);
  };

  return (
    <div>
      <br/>
      <br/>
      
      <h3 className="text-[40px] font-bold pl-3 m-auto">Popular Products</h3>
      <br/>
      <div className="grid grid-cols-4 gap-3 lg:grid-cols-3 mds:grid-cols-2 sml:grid-cols-1 mt-5">
        {products.map((product) => (
          <div key={product.id}>
            <CardComponent
              id={product.id}
              image={product.image}
              desc={product.desc}
              name={product.name}
              price={product.price}
              category={product.category}
              addToCart={() => addToCartHandler(product)}
              cartItems={cartItems}
            />
          </div>
        ))}
      </div>
      <Pagination
        count={50}
        page={currentPage}
        color="standard"
        onChange={handlePageChange}
        className="flex items-center justify-center my-5"
      />
    </div>
  );
}
