import { MenuIcon } from "lucide-react";
import Image from "next/image";
import { Button } from "./ui/button";

const Header = () => {
  return (
    <header className="flex items-center justify-between px-5 pt-6">
      <Image
        src="/logo.svg"
        alt="Logo fsw foods"
        width={100}
        height={30}
        priority
      />

      <Button size="icon" variant="ghost" aria-label="menu">
        <MenuIcon />
      </Button>
    </header>
  );
};

export default Header;
