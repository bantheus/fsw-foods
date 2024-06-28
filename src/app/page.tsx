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
    </main>
  );
}
