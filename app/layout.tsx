import "@/styles/global.scss";
import type { Metadata } from "next";

import Cursor from "@/components/layout/cursor";
import Header from "@/components/layout/header";
import { AuthProvider } from "@/contexts/auth-context";

export const metadata: Metadata = {
  metadataBase: new URL("https://hdain.dev"),
  title: {
    default: "Ham Dain",
    template: "%s | Ham Dain",
  },
  description: "Personal developer website of Ham Dain",
  authors: {
    name: "Ham Dain",
  },
  openGraph: {
    title: "Ham Dain",
    description: "Personal developer website of Ham Dain",
    url: "https://hdain.dev",
    siteName: "Ham Dain",
    images: [
      {
        url: "https://hdain.dev/og-image.jpeg",
        width: 1920,
        height: 1080,
        alt: "Ham Dain",
      },
    ],
    type: "website",
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-video-preview": -1,
      "max-image-preview": "large",
      "max-snippet": -1,
    },
  },
  verification: {
    google: "_m9ZGJ5gm5uX5uPhlM7SIStKYOqzDl3A_LCvszBU3PA",
    other: {
      "naver-site-verification": "ace430b728469da989818229e3dcd6288529f5ae",
    },
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body>
        <AuthProvider>
          <main>
            <Cursor />
            <Header />
            <div className="contents">{children}</div>
          </main>
        </AuthProvider>
      </body>
    </html>
  );
}
