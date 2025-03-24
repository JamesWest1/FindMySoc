"use client";

import Link from "next/link";
import {
  NavigationMenuLink,
  NavigationMenuList,
  NavigationMenu,
} from "@/components/ui/navigation-menu";
import { usePathname } from "next/navigation";

export default function NavMenu() {
  const pathname = usePathname();
  const menuItems = [
    // { label: "Home", href: "/", isActive: pathname === "/" },
    { label: "Browse Societies", href: "/", isActive: pathname === "/"  },
    // {
    //   label: "My Upcoming Events",
    //   href: "/upcoming-events",
    //   isActive:
    //     pathname.startsWith("/upcoming-events") ||
    //     pathname.startsWith("/event"),
    // },x
      {
        label: "Upcoming Events",
        href: "/upcoming-events",
        isActive: pathname.startsWith("/upcoming-events"),
      },
  ];

  const linkstyle = `group inline-flex h-9 w-max items-center justify-center 
  rounded-md px-4 py-2 text-base text-white font-medium bg-gray-950
  dark:bg-slate-50 dark:text-black `;

  const linknormal = `group inline-flex h-9 w-max items-center justify-center 
  rounded-md px-4 py-2 text-base font-medium hover:bg-gray-950
  hover:text-white dark:hover:bg-slate-50 dark:hover:text-black transition ease-in-out delay-15 hover:-translate-1 hover:scale-102 duration-300`;
  return (
    <NavigationMenu className="hidden md:flex">
      <NavigationMenuList>
        {menuItems.map((item) => (
          <NavigationMenuLink asChild>
            <Link
              className={item.isActive ? linkstyle : linknormal}
              href={item.href}
            >
              {item.label}
            </Link>
          </NavigationMenuLink>
        ))}
      </NavigationMenuList>
    </NavigationMenu>
  );
}