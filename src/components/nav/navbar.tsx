import { NavBottom } from "./nav-bottom";
import { NavTop } from "./nav-top";

export const Navbar = () => {
  return (
    <div
      className="max-w-[1350px] mx-auto px-8 py-6  space-y-8
    "
    >
      <NavTop />
      <NavBottom />
    </div>
  );
};
