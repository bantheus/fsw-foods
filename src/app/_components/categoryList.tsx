import { db } from "../_lib/prisma";
import CategoryItem from "./categoryItem";

const CategoryList = async () => {
  const categories = await db.category.findMany({});

  return (
    <div className="no-scrollbar flex items-center justify-between space-x-4 overflow-x-scroll px-5 py-6">
      {categories.map((category) => (
        <CategoryItem key={category.id} category={category} />
      ))}
    </div>
  );
};

export default CategoryList;
