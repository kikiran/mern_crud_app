import React, { useEffect } from "react";
import Card from "../components/Card";
import { useProductStore } from "../store/product";

const HomePage = () => {
  const { fetchProducts, products } = useProductStore();

  useEffect(() => {
    fetchProducts();
  }, [fetchProducts]);

  return (
    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
      {products?.length !== 0 ? (
        products?.map((product) => <Card data={product} />)
      ) : (
        <div className="flex flex-col justify-center items-center p-4 gap-5">
          <h1 className="text-3xl text-amber-700">
            No Products to show 😔
            </h1>
            <a  href="/new" className="bg-blue-400 text-white p-4 w-auto rounded-md" >
              Add Product
            </a>
        </div>
      )}
    </div>
  );
};

export default HomePage;
