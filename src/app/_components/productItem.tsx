import { Prisma } from "@prisma/client";
import { ArrowDown } from "lucide-react";
import Image from "next/image";
import { calculateProductTotalPrice, formatCurrency } from "../_helpers/price";

interface ProductItemProps {
  product: Prisma.ProductGetPayload<{
    include: {
      restaurant: {
        select: {
          name: true;
        };
      };
    };
  }>;
}

const ProductItem = ({ product }: ProductItemProps) => {
  return (
    <div className="w-36 min-w-36 space-y-2">
      <div className="relative h-36">
        <Image
          src={product.imageUrl}
          alt={product.name}
          fill
          sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
          className="absolute left-0 top-0 rounded-lg object-cover shadow-md"
        />

        {product.discountPercentage && (
          <div className="absolute left-2 top-2 flex items-center gap-0.5 rounded-full bg-primary px-2 py-0.5 text-xs font-medium text-white">
            <ArrowDown size={12} />
            <span>{product.discountPercentage}%</span>
          </div>
        )}
      </div>

      <div className="pl-1">
        <h2 className="truncate text-sm">{product.name}</h2>

        <div className="flex items-center gap-2">
          <h3 className="font-semibold">
            {formatCurrency(calculateProductTotalPrice(product))}
          </h3>

          {product.discountPercentage > 0 && (
            <span className="text-xs text-muted-foreground line-through">
              {formatCurrency(Number(product.price))}
            </span>
          )}
        </div>

        <span className="mt-0.5 block truncate text-xs text-muted-foreground">
          {product.restaurant.name}
        </span>
      </div>
    </div>
  );
};

export default ProductItem;
