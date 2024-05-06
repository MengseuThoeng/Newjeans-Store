"use client";
import CardComponent from "@/components/card/CardComponent";
import { useSession } from "next-auth/react";

import { useRouter } from "next/navigation";
import React, { useEffect, useState } from "react";

const ENDPOINT = "https://fakestoreapi.com/products/";

export default function Service() {
	const { data: session } = useSession();
	const [products, setProducts] = useState([]);
	const router = useRouter();
	

	useEffect(() => {
		fetch(ENDPOINT)
			.then((res) => res.json())
			.then((data) => setProducts(data));
	}, []);


	return (
		<>
		{session ? <div className="h-screen mt-6 container mx-auto grid grid-cols-5 grid-flow-row gap-4">
			{products.map((product: any, index) => (
				<CardComponent
					onClick={() => router.push(`/service/${product.id}`)}
					key={index}
					id={product.id}
					category={product.title}
					image={product.image}
					price={product.price}
					desc={product.desc}
					quantity={product.quantity}
				/>
			))}
		</div> : <div className="w-full h-screen flex flex-col justify-center items-center">
			Unauthorize!</div>}
		</>
	);
}


import { ProductType } from '@/lib/definitions';

export async function fetchProductsByCategory(categoryService: string): Promise<ProductType[]> {
  try {
    const response = await fetch(`${process.env.NEXT_PUBLIC_DJANGO_API_URL}/products?category=${category}`);
    if (!response.ok) {
      throw new Error('Failed to fetch products');
    }
    return await response.json();
  } catch (error) {
    console.error('Error fetching products:', error);
    return [];
  }
}
