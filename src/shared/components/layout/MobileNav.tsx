"use client";

import { ReactElement } from "react";

import { Menu, X } from "lucide-react";
import Link from "next/link";
import { usePathname } from "next/navigation";

import { navItems } from "@/shared/constants/navigation";
import { useMobileNav } from "@/shared/hooks/useMobileNav";
import { cn } from "@/shared/lib/utils";
import { Button } from "@/shared/shadcn/components/ui/button";

type MobileNavProps = {
  isAuthenticated: boolean;
};

function MobileNav({ isAuthenticated }: MobileNavProps): ReactElement {
  const { isOpen, handleClose, handleToggle } = useMobileNav();
  const pathname = usePathname();

  return (
    <>
      <Button variant="ghost" size="icon" onClick={handleToggle} aria-label="メニュー">
        {isOpen ? <X className="size-5" /> : <Menu className="size-5" />}
      </Button>

      {isOpen && (
        <>
          <div
            className="fixed inset-0 z-50 bg-background/80 backdrop-blur-sm"
            onClick={handleClose}
            aria-hidden="true"
          />

          <div className="fixed right-0 top-16 z-50 h-[calc(100vh-4rem)] w-full max-w-xs border-l bg-background p-6 shadow-lg animate-in slide-in-from-right duration-300">
            <nav className="flex flex-col gap-2">
              {navItems.map((item) => {
                const Icon = item.icon;
                const isActive =
                  pathname === item.href || (item.href !== "/" && pathname.startsWith(item.href));

                return (
                  <Link key={item.href} href={item.href} onClick={handleClose}>
                    <Button
                      variant={isActive ? "secondary" : "ghost"}
                      className={cn(
                        "w-full justify-start gap-3 h-12 text-base",
                        isActive && "bg-secondary shadow-sm"
                      )}
                    >
                      <Icon className="size-5" />
                      {item.label}
                    </Button>
                  </Link>
                );
              })}

              <div className="my-4 border-t" />

              {isAuthenticated ? (
                <div className="flex flex-col gap-2">
                  <Link href="/auth/profile" onClick={handleClose}>
                    <Button variant="outline" className="w-full justify-start gap-3 h-12 text-base">
                      プロフィール
                    </Button>
                  </Link>
                </div>
              ) : (
                <div className="flex flex-col gap-2">
                  <Link href="/auth/login" onClick={handleClose}>
                    <Button variant="outline" className="w-full justify-start gap-3 h-12 text-base">
                      ログイン
                    </Button>
                  </Link>
                  <Link href="/auth/register" onClick={handleClose}>
                    <Button className="w-full justify-start gap-3 h-12 text-base">新規登録</Button>
                  </Link>
                </div>
              )}
            </nav>
          </div>
        </>
      )}
    </>
  );
}

export default MobileNav;
