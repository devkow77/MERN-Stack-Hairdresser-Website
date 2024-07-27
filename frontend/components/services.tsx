import { Link } from "react-router-dom";

type Services = {
  name: string;
  href: string;
};

const services: Services[] = [
  {
    name: "Hairdresser",
    href: "/services/hairdresser",
  },
  {
    name: "Barber",
    href: "/services/barber",
  },
  {
    name: "Cosmetelogy",
    href: "/services/cosmetology",
  },
  {
    name: "Salon",
    href: "/services/salon",
  },
  {
    name: "Spa",
    href: "/services/spa",
  },
  {
    name: "Stylist",
    href: "/services/stylist",
  },
  {
    name: "Makeup",
    href: "/services/makeup",
  },
];

const Services = () => {
  return (
    <section>
      <ul className="flex items-center justify-end gap-4">
        {services.map(({ name, href }: Services) => (
          <Link
            to={href}
            className="rounded-full border-2 border-black/70 px-3 py-2 text-xs font-semibold text-black/70 duration-200 hover:bg-black hover:text-white"
          >
            {name}
          </Link>
        ))}
      </ul>
    </section>
  );
};

export default Services;
