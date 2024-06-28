import Image from "next/image";
import CategoryList from "./_components/categoryList";
import Header from "./_components/header";
import Search from "./_components/search";

export default function Home() {
  return (
    <main>
      <Header />

      <div className="px-5 pt-6">
        <Search />
      </div>

      <div>
        <CategoryList />
      </div>

      <Image
        src="/promo_1.png"
        alt="Até 30% de descontos em pizzas"
        width={0}
        height={0}
        sizes="100vw"
        className="h-auto w-full object-contain px-5 pt-6"
      />
    </main>
  );
}
