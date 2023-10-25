// import Container from "@/components/container";
import Container from "@/components/container";
import { Button } from "@/components/ui/button";
import { useScrollTop } from "@/hooks/use-scroll";
import { cn } from "@/lib/utils";
import { Link } from "react-router-dom";

type TMenu = {
  label: string;
  path: string;
};

const Navbar = () => {
  const menus: TMenu[] = [
    { label: "Our Story", path: "/about-us" },
    { label: "Membership", path: "/signin" },
    { label: "Write", path: "/write" },
  ];

  const scrolled = useScrollTop();

  return (
    <div
      className={cn(
        "w-full z-50 bg-amber-400/50 backdrop-blur-sm fixed top-0 transition-colors ease-in-out duration-200",
        scrolled && "bg-white",
      )}
    >
      <div className="py-4 border-b-[1px] border-slate-950">
        <Container>
          <nav className="flex items-center justify-between">
            <div>
              <img src="/xedium.svg" alt="Logo" />
            </div>
            <div className="flex flex-1 items-center justify-end space-x-4 font-intel transition">
              {menus.map((menu) => (
                <Link
                  key={menu.label}
                  className="hidden lg:block px-1 text-sm"
                  to={menu.path}
                >
                  {menu.label}
                </Link>
              ))}
              <Link className="hidden sm:block px-1 text-sm" to="/signin">
                Sign in
              </Link>
              <Button
                size="sm"
                className={cn(
                  "rounded-full px-5 mx-4 bg-black text-sm",
                  scrolled && "bg-green-700",
                )}
              >
                Get started
              </Button>
            </div>
          </nav>
        </Container>
      </div>
    </div>
  );
};

export default Navbar;
