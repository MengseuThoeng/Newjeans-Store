export type ProductType = {
	id: number;
	name: string;
	price: number;
	desc: string;
	category: string;
	image: string;
	quantity: number;
	onClick?: () => void;
};

export type CartProductType = {
	name: string;
	image: string;
	price: number;
	id: number;
	category: string;
	desc: string;
	quantity: number; 
	onClick?: () => void;
};