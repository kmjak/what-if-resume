import type { Metadata } from "next";

import { WhatIfView } from "@/features/personal/components";

export const metadata: Metadata = {
  title: "あなたの個人史",
};

export default async function WhatIf(): Promise<React.ReactElement> {
  return <WhatIfView />;
}
