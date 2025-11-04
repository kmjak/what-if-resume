"use client";

import { ReactElement } from "react";

import Link from "next/link";
import { usePathname } from "next/navigation";

import { navItems } from "@/shared/constants/navigation";
import { cn } from "@/shared/lib/utils";
import { Button } from "@/shared/shadcn/components/ui/button";

export default function DefaultNav(): ReactElement {
  const pathname = usePathname();

  return (
    <nav className="hidden lg:flex items-center gap-1">
      {navItems.map((item) => {
        const Icon = item.icon;

        return (
          <Link key={item.href} href={item.href} className="focus-visible:outline-none">
            <Button
              variant={pathname === item.href ? "secondary" : "ghost"}
              size="sm"
              className={cn(
                "gap-2 font-medium transition-all",
                pathname === item.href ? "bg-secondary shadow-sm" : "hover:bg-accent/50"
              )}
            >
              <Icon className="size-4" />
              {item.label}
            </Button>
          </Link>
        );
      })}
    </nav>
  );
}
