import Image from "next/image";
import { Card, CardContent, CardFooter } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Star } from "lucide-react";
import { Product } from "@/interfaces/prudacts";
import { Button } from "./ui/Button";

interface ProductCardProps {
  prodact: Product;
}

export default function ProductCard({ prodact }: ProductCardProps) {
  return (
    <Card className="max-w-full  rounded-xl overflow-hidden border bg-white shadow-sm hover:shadow-md transition">
      {/* Image */}
      <div className="relative h-[220px] bg-gray-100">
        {prodact?.ratingsQuantity >= 4.5 && (
          <Badge className="absolute top-2 left-2 z-10 text-xs">Popular</Badge>
        )}

        <Image
          src={prodact?.images?.[0]}
          alt={prodact?.title}
          fill
          className="object-contain p-4"
        />
      </div>

      {/* Content */}
      <CardContent className="p-4 space-y-2">
        <p className="text-xs text-muted-foreground uppercase">
          {prodact?.brand?.name}
        </p>

        <h3 className="text-sm font-semibold line-clamp-2">{prodact?.sold}</h3>

        {/* Rating */}
        <div className="flex items-center gap-1">
          {Array.from({ length: Math.round(prodact?.ratingsAverage) }).map(
            (_, i) => (
              <Star
                key={i}
                size={14}
                className="fill-yellow-400 text-yellow-400"
              />
            )
          )}
          <span className="text-xs text-muted-foreground">
            ({prodact?.ratingsAverage})
          </span>
        </div>

        <p className="text-xs text-muted-foreground">
          {prodact?.category?.name}
        </p>

        <p className="font-bold text-base mt-1">
          £{prodact?.price.toLocaleString()}
        </p>
      </CardContent>
      <CardFooter>
        <Button className="w-full" variant={"default"}>
          Buy NOw
        </Button>
      </CardFooter>
    </Card>
  );
}
