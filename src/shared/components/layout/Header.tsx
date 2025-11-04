import { ReactElement } from "react";

import { Sparkles, User } from "lucide-react";
import Link from "next/link";

import { Button } from "@/shared/shadcn/components/ui/button";

import DefaultNav from "./DefaultNav";
import MobileNav from "./MobileNav";

function Header(): ReactElement {
  // TODO: 認証状態に応じて変更する
  const isAuthenticated = false;

  return (
    <header className="sticky top-0 z-50 w-full border-b bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60">
      <div className="container flex min-h-16 items-center justify-between px-4 mx-auto">
        <div className="flex items-center gap-6 md:gap-8">
          <Link
            href="/"
            className="flex items-center gap-2 transition-opacity hover:opacity-80 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 rounded-sm"
          >
            <div className="flex items-center justify-center size-8 rounded-lg bg-gradient-to-br from-primary to-primary/80 text-primary-foreground shadow-sm">
              <Sparkles className="size-5" />
            </div>
            <span className="font-bold text-lg md:text-xl hidden sm:inline-block">
              となりの履歴書
            </span>
          </Link>

          <DefaultNav />
        </div>

        <div className="flex items-center gap-2">
          {isAuthenticated ? (
            <div className="hidden lg:flex w-6 md:w-10 h-6 md:h-10 rounded-full bg-black relative cursor-pointer">
              <User className="size-6 absolute inset-0 m-auto text-white" />
            </div>
          ) : (
            <div className="hidden lg:flex items-center gap-2">
              <Link href="/auth/login">
                <Button variant="ghost" size="sm" className="gap-2">
                  <User className="size-4" />
                  ログイン
                </Button>
              </Link>
              <Link href="/auth/register">
                <Button size="sm" className="gap-2">
                  新規登録
                </Button>
              </Link>
            </div>
          )}

          <div className="lg:hidden">
            <MobileNav isAuthenticated={isAuthenticated} />
          </div>
        </div>
      </div>
    </header>
  );
}

export default Header;
