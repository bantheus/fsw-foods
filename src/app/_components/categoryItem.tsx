import { Category } from "@prisma/client";
import Image from "next/image";

interface CategoryItemProps {
  category: Category;
}

const CategoryItem = ({ category }: CategoryItemProps) => {
  return (
    <div className="flex min-w-[160px] items-center justify-center gap-3 rounded-3xl bg-white px-4 py-3 shadow-sm">
      <Image
        src={category.imageUrl}
        alt={category.name}
        width={30}
        height={30}
        className="size-8 object-contain"
      />

      <span className="text-sm font-semibold">{category.name}</span>
    </div>
  );
};

export default CategoryItem;
