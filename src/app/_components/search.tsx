import { SearchIcon } from "lucide-react";
import { Button } from "./ui/button";
import { Input } from "./ui/input";

const Search = () => {
  return (
    <div className="flex gap-1 rounded-md bg-background">
      <Input
        placeholder="Buscar restaurantes"
        className="border-none focus-visible:ring-0 focus-visible:ring-offset-0"
      />
      <Button size="icon" className="w-12">
        <SearchIcon size={18} />
      </Button>
    </div>
  );
};

export default Search;
