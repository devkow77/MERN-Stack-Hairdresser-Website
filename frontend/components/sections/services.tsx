import { Link } from "react-router-dom";
import { Container } from "../index";
import {
  Building2,
  Clock,
  Book,
  Shield,
  Earth,
  CalendarCheck,
} from "lucide-react";

type Services = {
  name: string;
  href: string;
  img: string;
};

const services: Services[] = [
  {
    name: "Hairdresser",
    href: "/services/hairdresser",
    img: "/hairdresser.jpg",
  },
  {
    name: "Barber",
    href: "/services/barber",
    img: "/barber.jpg",
  },
  {
    name: "Cosmetelogy",
    href: "/services/cosmetology",
    img: "/cosmetology.jpg",
  },
  {
    name: "Salon",
    href: "/services/salon",
    img: "/salon.jpg",
  },
  {
    name: "Spa",
    href: "/services/spa",
    img: "/spa.jpg",
  },
  {
    name: "Stylist",
    href: "/services/stylist",
    img: "/stylist.jpg",
  },
  {
    name: "Makeup",
    href: "/services/makeup",
    img: "/makeup.jpg",
  },
];

const Services = () => {
  return (
    <section className="py-12">
      {/* LIST OF SERVICES */}
      <Container className="mb-12">
        <div className="grid grid-cols-2 gap-4 sm:grid-cols-2 md:grid-cols-3 md:gap-6">
          {services.map(({ name, img, href }: Services) => (
            <Link
              to={href}
              className="relative aspect-square rounded-2xl lg:aspect-video lg:rounded-none"
            >
              <img
                src={img}
                alt={name}
                className="absolute h-full w-full rounded-2xl object-cover object-center lg:rounded-none"
              />
              <div className="absolute h-full w-full rounded-2xl bg-black/50 duration-200 hover:bg-black/30 lg:rounded-none" />
              <div className="absolute bottom-2 left-2 lg:left-4">
                <h3 className="font-semibold lg:text-lg">{name}</h3>
                <p className="text-xs lg:text-sm">74 Locals</p>
              </div>
            </Link>
          ))}
        </div>
      </Container>
      {/* BANER 3 STEPS TO MAKE RESERVATION */}
      <section className="w-full bg-gradient-to-r from-blue-600 to-pink-600 py-8 lg:py-16">
        <Container>
          <div className="mb-6 items-center justify-between lg:mb-10 lg:flex">
            <h2 className="mb-2 text-xl font-extrabold lg:text-3xl">
              3 EASY STEPS <br /> TO MAKE RESERVATION
            </h2>
            <p className="max-w-md text-sm lg:text-right lg:text-base">
              Application allows you to make a reservation with your favourite
              maker at convinient time.
            </p>
          </div>
          <section className="grid grid-cols-1 gap-6 sm:grid-cols-2 md:grid-cols-3">
            <div className="flex items-center gap-4">
              <div className="flex h-12 w-12 cursor-pointer items-center justify-center rounded-full bg-black/20 duration-300 hover:bg-sky-600">
                <Building2 />
              </div>
              <h3 className="font-semibold lg:text-lg">1. Choose a city</h3>
            </div>
            <div className="flex items-center gap-4">
              <div className="flex h-12 w-12 cursor-pointer items-center justify-center rounded-full bg-black/20 duration-300 hover:bg-violet-600">
                <CalendarCheck />
              </div>
              <h3 className="font-semibold lg:text-lg">
                2. Pick convinient date
              </h3>
            </div>
            <div className="flex items-center gap-4">
              <div className="flex h-12 w-12 cursor-pointer items-center justify-center rounded-full bg-black/20 duration-300 hover:bg-pink-600">
                <Book />
              </div>
              <h3 className="font-semibold lg:text-lg">
                3. Book your reservation
              </h3>
            </div>
          </section>
        </Container>
      </section>
      {/* 3 ADVANTAGES OF OUR SERVICES */}
      <section className="w-full bg-slate-900 py-8 lg:py-16">
        <Container>
          <h2 className="mb-6 text-xl font-extrabold lg:mb-10 lg:text-3xl">
            3 ADVANTAGES OF <br /> OUR SERVICE
          </h2>
          <section className="grid grid-cols-1 gap-6 sm:grid-cols-2 md:grid-cols-3">
            <div className="flex flex-col gap-2">
              <div className="flex h-12 w-12 cursor-pointer items-center justify-center rounded-full bg-black/20 duration-300 hover:bg-sky-600">
                <Clock />
              </div>
              <h3 className="font-semibold lg:text-lg">I. Time Fast</h3>
              <p className="text-sm lg:text-base">
                You need only 9 seconds to make reservation
              </p>
            </div>
            <div className="flex flex-col gap-2">
              <div className="flex h-12 w-12 cursor-pointer items-center justify-center rounded-full bg-black/20 duration-300 hover:bg-yellow-600">
                <Shield />
              </div>
              <h3 className="font-semibold lg:text-lg">II. Security</h3>
              <p className="text-sm lg:text-base">
                You need only 9 seconds to make reservation
              </p>
            </div>
            <div className="flex flex-col gap-2">
              <div className="flex h-12 w-12 cursor-pointer items-center justify-center rounded-full bg-black/20 duration-300 hover:bg-green-600">
                <Earth />
              </div>
              <h3 className="font-semibold lg:text-lg">III. Available</h3>
              <p className="text-sm lg:text-base">
                You need only 9 seconds to make reservation
              </p>
            </div>
          </section>
        </Container>
      </section>
    </section>
  );
};

export default Services;
