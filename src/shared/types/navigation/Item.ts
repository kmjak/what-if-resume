import { ForwardRefExoticComponent, RefAttributes } from "react";

import { LucideProps } from "lucide-react";

type NavItem = {
  href: string;
  label: string;
  icon: ForwardRefExoticComponent<Omit<LucideProps, "ref"> & RefAttributes<SVGSVGElement>>;
};

export type { NavItem };
