import { ChevronRightIcon } from "lucide-react";
import CategoryList from "./_components/categoryList";
import Header from "./_components/header";
import ProductList from "./_components/productList";
import PromoBanner from "./_components/promBanner";
import RestaurantList from "./_components/restaurantList";
import Search from "./_components/search";
import Title from "./_components/title";
import { Button } from "./_components/ui/button";
import { db } from "./_lib/prisma";

export default async function Home() {
  const products = await db.product.findMany({
    where: {
      discountPercentage: {
        gt: 0,
      },
    },
    take: 10,
    include: {
      restaurant: {
        select: {
          name: true,
        },
      },
    },
  });

  return (
    <main>
      <Header />

      <div className="px-5 pt-6">
        <Search />
      </div>

      <CategoryList />

      <div className="px-5">
        <PromoBanner src="/promo_1.png" alt="Até 30% de descontos em pizzas" />
      </div>

      <div className="space-y-4 pt-6">
        <div className="flex items-center justify-between px-5">
          <Title title="Pedidos recomendados" />

          <Button
            variant="ghost"
            className="flex h-fit items-center p-0 text-primary hover:bg-transparent"
          >
            Ver todos
            <ChevronRightIcon size={16} />
          </Button>
        </div>
        <ProductList products={products} />
      </div>

      <div className="px-5 pt-6">
        <PromoBanner src="/promo_2.png" alt="A partir de R$17,90 em lanches" />
      </div>

      <div className="space-y-4 py-6">
        <div className="flex items-center justify-between gap-x-1 px-5">
          <Title title="Restaurantes recomendados" />

          <Button
            variant="ghost"
            className="flex h-fit items-center p-0 text-primary hover:bg-transparent"
          >
            Ver todos
            <ChevronRightIcon size={16} />
          </Button>
        </div>
        <RestaurantList />
      </div>
    </main>
  );
}
