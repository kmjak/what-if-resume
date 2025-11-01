import type { Metadata } from "next";

import { WhatIfView } from "@/features/personal/components";

export const metadata: Metadata = {
  title: "あなたの自分史",
};

export default async function WhatIf(): Promise<React.ReactElement> {
  return <WhatIfView />;
}
