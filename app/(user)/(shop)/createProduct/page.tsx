import Link from "next/link";

const CreateProduct = () => {
  return (
    <div className="max-w-md mx-auto bg-white rounded p-8 shadow-md font-Staatliches">
      <form className="mb-4">
        <h2 className="font-semibold mb-4 text-3xl tracking-wider">Create New Item</h2>
        
        <div className="mb-4">
          <label
            htmlFor="name"
            className="block tracking-wider text-sm font-medium text-gray-700"
          >
            Name
          </label>
          <input
            type="text"
            id="name"
            name="name"
            className="mt-1 block w-full border-gray-300 rounded-md shadow-sm focus:border-indigo-500 focus:ring focus:ring-indigo-200 focus:ring-opacity-50"
          />
        </div>
        <div className="mb-4">
          <label
            htmlFor="description"
            className="block tracking-wider text-sm font-medium text-gray-700"
          >
            Description
          </label>
          <textarea name="description" id="description" className="w-full resize-none h-28 mt-1 block border-gray-300 rounded-md shadow-sm focus:border-indigo-500 focus:ring focus:ring-indigo-200 focus:ring-opacity-50" />
        </div>
        <div className="mb-4">
          <label
            htmlFor="price"
            className="block tracking-wider  text-sm font-medium text-gray-700"
          >
            Price
          </label>
          <input
            type="number"
            id="price"
            name="price"
           
            className="mt-1 block w-full border-gray-300 rounded-md shadow-sm focus:border-indigo-500 focus:ring focus:ring-indigo-200 focus:ring-opacity-50"
          />
        </div>
        <div className="mb-4">
          <label
            htmlFor="quantity"
            className="block tracking-wider text-sm font-medium text-gray-700"
          >
            Quantity
          </label>
          <input
            type="text"
            id="quantity"
            name="quantity"
            
            className="mt-1 block w-full border-gray-300 rounded-md shadow-sm focus:border-indigo-500 focus:ring focus:ring-indigo-200 focus:ring-opacity-50"
          />
        </div>
        <div className="mb-4">
          <label
            htmlFor="product_image"
            className="block tracking-wider text-sm font-medium text-gray-700"
          >
            Product Image
          </label>
          <input
            type="file"
            id="product_image"
            name="product_image"
            className="mt-1 block w-full border-gray-300 rounded-md shadow-sm focus:border-indigo-500 focus:ring focus:ring-indigo-200 focus:ring-opacity-50"
          />
        </div>
        <button
          type="submit"
          className="bg-blue-500 hover:bg-blue-600 text-white font-semibold py-2 px-4 rounded"
        >
          Create
        </button>
      </form>

      <div>
        <Link href="/shop">
          <div className="bg-black text-white py-3 px-2">Back to Shop</div>
        </Link>
      </div>
    </div>
  );
};

export default CreateProduct;
