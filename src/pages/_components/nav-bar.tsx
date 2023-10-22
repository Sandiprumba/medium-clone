import Container from "@/components/container";
import { Button } from "@/components/ui/button";
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

  return (
    <div className="w-full z-50 bg-transparent backdrop-blur-sm fixed top-0">
      <div className="py-4 border-b-[1px] border-slate-950">
        <Container>
          <div className="flex items-center justify-between">
            <div>
              <img src="/xedium.svg" alt="Logo" />
            </div>
            <div className="flex items-center justify-between space-x-4 font-intel transition">
              {menus.map((menu) => (
                <Link className="hidden lg:block px-1 text-sm" to={menu.path}>
                  {menu.label}
                </Link>
              ))}
              <Link className="hidden sm:block px-1 text-sm" to="/signin">
                Sign in
              </Link>
              <Button
                size="sm"
                className="rounded-full px-5 mx-4 bg-black text-sm"
              >
                Get started
              </Button>
            </div>
          </div>
        </Container>
      </div>
    </div>
  );
};

export default Navbar;
