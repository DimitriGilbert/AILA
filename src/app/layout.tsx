import "~/styles/globals.css";

import { GeistSans } from "geist/font/sans";
import { type Metadata } from "next";
import { Providers } from "~/components/providers";

export const metadata: Metadata = {
  title: "AILA - AI License Agreement",
  description: "Generate your AI License Agreement",
  icons: [{ rel: "icon", url: "/favicon.ico" }],
};

export default function RootLayout({
  children,
}: Readonly<{ children: React.ReactNode }>) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body className={GeistSans.variable}>
        <Providers>{children}</Providers>
      </body>
    </html>
  );
}
