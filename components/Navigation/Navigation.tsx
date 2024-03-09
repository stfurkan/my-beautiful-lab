'use client';
import React from 'react';
import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { Menu } from 'lucide-react';
import {
  NavigationMenu,
  NavigationMenuItem,
  NavigationMenuLink,
  NavigationMenuList,
  navigationMenuTriggerStyle,
} from "@/components/ui/navigation-menu";
import {
  Sheet,
  SheetClose,
  SheetContent,
  SheetHeader,
  SheetTitle,
  SheetTrigger,
} from "@/components/ui/sheet";
import { Button } from '../ui/button';

const navigationContent = [
  {
    title: "Home",
    href: "/",
  },
  {
    title: "Research",
    href: "/research",
  },
  {
    title: "Publications",
    href: "/publications",
  },
  {
    title: "Who We Are",
    href: "/who-we-are",
  },
  {
    title: "Lab Events",
    href: "/lab-events",
  },
  {
    title: "Contact",
    href: "/contact",
  },
];

export function Navigation() {
  const pathname = usePathname();

  return (
    <>
      <NavigationMenu className="hidden lg:block">
        <NavigationMenuList>
          {navigationContent.map((item, index) => (
            <NavigationMenuItem key={index} className={pathname === item.href ? 'underline underline-offset-4' : ''}>
              <Link href={item.href} legacyBehavior passHref>
                <NavigationMenuLink className={navigationMenuTriggerStyle()}>
                  {item.title}
                </NavigationMenuLink>
              </Link>
            </NavigationMenuItem>
          ))}
        </NavigationMenuList>
      </NavigationMenu>
      
      <div className="block lg:hidden">
        <Sheet>
          <SheetTrigger asChild>
            <Button variant="outline"><Menu /></Button>
          </SheetTrigger>
          <SheetContent>
            <SheetHeader>
              <SheetTitle className="text-center">Navigation</SheetTitle>
            </SheetHeader>
            
              <NavigationMenu className="">
                <NavigationMenuList className="flex flex-col justify-center">
                  {navigationContent.map((item, index) => (
                    <NavigationMenuItem key={index} className={pathname === item.href ? 'underline underline-offset-4' : ''}>
                      <Link href={item.href} legacyBehavior passHref>
                        <NavigationMenuLink className={navigationMenuTriggerStyle()}>
                          <SheetClose asChild>
                            <Button variant="none">{item.title}</Button>
                          </SheetClose>
                        </NavigationMenuLink>
                      </Link>
                    </NavigationMenuItem>
                  ))}
                </NavigationMenuList>
              </NavigationMenu>
            
          </SheetContent>
        </Sheet>
      </div>
    </>
  );
}
