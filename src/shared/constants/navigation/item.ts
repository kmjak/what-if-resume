import { FileText, Home, Sparkles } from "lucide-react";

import type { NavItem } from "@/shared/types/navigation";

export const navItems = [
  {
    href: "/",
    label: "ホーム",
    icon: Home,
  },
  {
    href: "/resume/register",
    label: "履歴書登録",
    icon: FileText,
  },
  {
    href: "/what-if",
    label: "あなたの個人史",
    icon: Sparkles,
  },
] as const satisfies readonly NavItem[];
