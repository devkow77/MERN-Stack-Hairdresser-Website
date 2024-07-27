import {
  Container,
  DesktopMenu,
  HamburgerBtn,
  ServicesNavigation,
} from "./index";
import { useMediaQuery } from "usehooks-ts";

const Navbar = () => {
  const desktop = useMediaQuery("(min-width: 1024px)");

  return (
    <nav className="flex items-center py-6 text-sm">
      <Container>
        <div className="flex items-center justify-between lg:mb-6">
          <h1 className="font-bold text-slate-700">Haier.com</h1>
          {desktop ? <DesktopMenu /> : <HamburgerBtn />}
        </div>
        {desktop ? <ServicesNavigation /> : null}
      </Container>
    </nav>
  );
};

export default Navbar;
