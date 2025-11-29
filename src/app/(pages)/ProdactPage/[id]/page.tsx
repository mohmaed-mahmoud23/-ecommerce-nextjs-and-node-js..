import { Button } from "@/components/ui/Button";
import { SingleProductResponse } from "@/types/ApiResponse";
import { Star } from "lucide-react";
import ImageGallery from "@/components/ImageGallery";

interface Iprp {
  params: {
    id: string;
  };
}

async function FetacgProdactDetails(id: string) {
  const data: SingleProductResponse = await fetch(
    `https://ecommerce.routemisr.com/api/v1/products/${id}`
  ).then((res) => res.json());

  console.log("progect", data);
  return data.data;
}

const Prodactdetails = async ({ params }: Iprp) => {
  const product = await FetacgProdactDetails(params.id);
  const inStock = product.quantity > 0;

  return (
    <div className="max-w-6xl mx-auto p-6">
      <div className="grid md:grid-cols-2 gap-10">
        {/* Image Section */}
        <ImageGallery images={product.images} />

        {/* Details Section */}
        <div className="flex flex-col gap-4">
          {/* Brand */}
          <span className="text-xs uppercase text-gray-500 font-medium">
            {product.brand.name}
          </span>

          {/* Title */}
          <h1 className="text-3xl font-bold text-gray-900">{product.title}</h1>

          {/* Rating */}
          <div className="flex items-center gap-2">
            <div className="flex">
              {Array.from({ length: 5 }).map((_, i) => (
                <Star
                  key={i}
                  size={16}
                  className={
                    i < Math.round(product.ratingsAverage)
                      ? "fill-yellow-400 text-yellow-400"
                      : "text-gray-300"
                  }
                />
              ))}
            </div>

            <span className="text-sm text-gray-500">
              {product.ratingsAverage}
            </span>

            <span className="text-sm text-gray-400">
              ({product.ratingsQuantity} )
            </span>

            <span className="text-sm text-gray-400">{product.sold} sold</span>
          </div>

          {/* Price */}
          <p className="text-3xl font-bold text-black">
            ${product.price.toLocaleString()}
          </p>

          {/* Description */}
          <div className="space-y-1">
            <h3 className="font-semibold text-gray-900">Description</h3>
            <p className="text-sm text-gray-600 leading-relaxed">
              {product.description}
            </p>
          </div>

          <div className="flex flex-wrap gap-2">
            {/* Category */}
            <span className="w-fit text-xs px-3 py-1 rounded-full bg-gray-100 text-gray-700">
              {product.category.name}
            </span>

            {product.subcategory.map((sub) => (
              <span
                key={sub._id}
                className="text-xs px-3 py-1 rounded-full bg-gray-200 text-gray-700"
              >
                {sub.name}
              </span>
            ))}
          </div>
          {/* Stock */}
          <p
            className={`text-sm font-medium ${
              inStock ? "text-green-600" : "text-red-600"
            }`}
          >
            {inStock ? `Stock: ${product.quantity} available` : "Out of Stock"}
          </p>

          {/* Action */}
          <Button
            className="mt-4 h-12 text-base font-semibold"
            variant="default"
            disabled={!inStock}
          >
            {inStock ? "Add to Cart" : "Unavailable"}
          </Button>
        </div>
      </div>
    </div>
  );
};

export default Prodactdetails;
