"use client";

import { motion } from "framer-motion";

interface Links {
  name: string;
  href: string;
}

const containerMotion = {
  visible: {
    top: 0,
    transition: {
      duration: 0.5,
      when: "beforeChildren",
      staggerChildren: 0.2,
    },
  },
  hidden: {
    top: "-100%",
  },
};

const linkMotion = {
  visible: {
    y: 0,
    opacity: 1,
  },
  hidden: {
    y: 50,
    opacity: 0,
  },
};

const links: Links[] = [
  {
    name: "Home",
    href: "/",
  },
  {
    name: "My reservations",
    href: "/profile/reservations",
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

const MobileMenu = () => {
  return (
    <motion.div
      variants={containerMotion}
      initial="hidden"
      animate="visible"
      className="fixed left-0 top-0 z-40 flex h-screen w-screen items-center justify-center bg-white"
    >
      <div className="space-y-6 text-slate-700">
        {links.map(({ name, href }: Links) => (
          <motion.a
            href={href}
            variants={linkMotion}
            className="block font-semibold"
          >
            {name}
          </motion.a>
        ))}
      </div>
    </motion.div>
  );
};

export default MobileMenu;
