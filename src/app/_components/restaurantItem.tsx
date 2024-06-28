import { Restaurant } from "@prisma/client";
import { BikeIcon, Clock, Heart, Star } from "lucide-react";
import Image from "next/image";
import { formatCurrency } from "../_helpers/price";
import { Button } from "./ui/button";

interface RestaurantItemProps {
  restaurant: Restaurant;
}

const RestaurantItem = ({ restaurant }: RestaurantItemProps) => {
  return (
    <div className="min-w-64 max-w-64 space-y-3">
      <div className="relative h-32 w-full">
        <Image
          src={restaurant.imageUrl}
          alt={restaurant.name}
          fill
          className="absolute left-0 top-0 rounded-lg object-cover shadow-sm"
        />

        <div className="absolute left-2 top-2 flex items-center gap-0.5 rounded-full bg-white px-2 py-0.5 text-xs font-medium">
          <Star size={12} className="fill-yellow-500 text-yellow-500" />
          <span>5.0</span>
        </div>

        <Button className="absolute right-2 top-2 flex size-7 items-center justify-center rounded-full bg-gray-600 p-0">
          <Heart size={14} className="fill-white text-white" />
        </Button>
      </div>

      <div className="pl-1">
        <h2 className="text-sm font-semibold">{restaurant.name}</h2>

        <div className="mt-0.5 flex items-center gap-4">
          {/* custo de entrega */}
          <div className="flex items-center gap-1">
            <BikeIcon className="text-primary" size={14} />
            <span className="text-xs text-muted-foreground">
              {Number(restaurant.deliveryFee) === 0
                ? "Entrega grátis"
                : formatCurrency(Number(restaurant.deliveryFee))}
            </span>
          </div>
          {/* tempo de entrega */}
          <div className="flex items-center gap-1">
            <Clock className="text-primary" size={14} />
            <span className="text-xs text-muted-foreground">
              {restaurant.deliveryTimeMinutes} min
            </span>
          </div>
        </div>
      </div>
    </div>
  );
};

export default RestaurantItem;
