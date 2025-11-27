"use client";
import ProductCard from "@/components/ProductCard";
import { Product } from "@/interfaces/prudacts";
import { ProductsResponse } from "@/types/ApiResponse";
import React, { useEffect, useState } from "react";

const Prodatcpage = () => {
  const [prodact, setprodact] = useState<Product[]>([]);
  const [lodaing, setlodaig] = useState(false);

  async function getallprodact() {
    setlodaig(true);
    const data: ProductsResponse = await fetch(
      "https://ecommerce.routemisr.com/api/v1/products"
    ).then((res) => res.json());
    setlodaig(false);
    setprodact(data.data);
  }

  useEffect(() => {
    getallprodact();
  }, []);

  if (lodaing && prodact.length === 0) {
    return <p>loding....</p>;
  }
  return (
    <div className="      px-2  py-2   grid grid-cols-2 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-5  gap-2  ">
      {prodact.map((prodact) => (
        <ProductCard key={prodact._id} prodact={prodact} />
      ))}
    </div>
  );
};

export default Prodatcpage;
