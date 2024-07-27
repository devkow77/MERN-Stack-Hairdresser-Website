import { Link } from "react-router-dom";

const links = [
  {
    name: "My reservations",
    href: "/reservation",
  },
  {
    name: "Service List",
    href: "/services",
  },
  {
    name: "News",
    href: "/news",
  },
  {
    name: "Contact",
    href: "/contact",
  },
];

const DesktopMenu = () => {
  const auth: boolean = false;

  return (
    <section>
      <div className="flex items-center gap-6 font-semibold text-slate-700">
        {links.map(({ name, href }) => (
          <Link
            to={href}
            key={name}
            className="font-semibold text-slate-700 hover:text-black hover:underline"
          >
            {name}
          </Link>
        ))}
        <Link
          to={auth ? "/auth/signout" : "/auth/signin"}
          className="rounded-full bg-gradient-to-r from-blue-500 to-purple-500 px-6 py-2 text-white hover:from-blue-700 hover:to-purple-700"
        >
          {auth ? "Sign Out" : "Sign In"}
        </Link>
        <Link
          to="/admin"
          className="rounded-md bg-slate-700 px-6 py-2 text-white duration-200 hover:bg-slate-900"
        >
          Admin
        </Link>
      </div>
    </section>
  );
};

export default DesktopMenu;
