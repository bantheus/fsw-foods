import { ChevronRightIcon } from "lucide-react";
import Image from "next/image";
import CategoryList from "./_components/categoryList";
import Header from "./_components/header";
import ProductList from "./_components/productList";
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

      <Image
        src="/promo_1.png"
        alt="Até 30% de descontos em pizzas"
        width={0}
        height={0}
        sizes="100vw"
        priority
        className="h-auto w-full object-contain px-5"
      />

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
    </main>
  );
}
