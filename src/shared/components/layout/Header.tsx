import { ReactElement } from "react";

import { SignedIn, SignedOut, SignInButton, SignUpButton, UserButton } from "@clerk/nextjs";
import { Sparkles } from "lucide-react";
import Link from "next/link";

import { Button } from "@/shared/shadcn/components/ui/button";

import DefaultNav from "./DefaultNav";
import MobileNav from "./MobileNav";

function Header(): ReactElement {
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

        <div className="items-center gap-2 hidden lg:flex">
          <SignedIn>
            <UserButton />
          </SignedIn>
          <SignedOut>
            <SignInButton mode="modal">
              <Button className="text-black border border-input bg-background hover:bg-accent hover:text-accent-foreground rounded-full font-medium text-sm sm:text-base h-10 sm:h-12 px-4 sm:px-5 cursor-pointer transition-colors">
                ログイン
              </Button>
            </SignInButton>
            <SignUpButton mode="modal">
              <Button className="bg-primary hover:bg-primary/90 text-primary-foreground rounded-full font-medium text-sm sm:text-base h-10 sm:h-12 px-4 sm:px-5 cursor-pointer transition-colors shadow-sm">
                新規登録
              </Button>
            </SignUpButton>
          </SignedOut>
        </div>

        <div className="flex lg:hidden">
          <MobileNav />
        </div>
      </div>
    </header>
  );
}

export default Header;
