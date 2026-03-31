import type { Metadata } from "next";
import { Playfair_Display, Space_Grotesk } from "next/font/google";
import { ThemeProvider } from "next-themes";
import "./globals.css";

const siteUrl = process.env.NEXT_PUBLIC_SITE_URL ?? "https://sowmyavunnam.github.io";

const display = Playfair_Display({
  variable: "--font-playfair",
  subsets: ["latin"],
});

const sans = Space_Grotesk({
  variable: "--font-space-grotesk",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  metadataBase: new URL(siteUrl),
  title: {
    default: "Sowmya Vunnam | Strategy and Analytics Portfolio",
    template: "%s | Sowmya Vunnam",
  },
  description:
    "Portfolio of Sowmya Vunnam, a strategy and analytics consultant focused on healthcare technology, market intelligence, and decision-ready storytelling.",
  alternates: {
    canonical: "/",
  },
  openGraph: {
    title: "Sowmya Vunnam | Strategy and Analytics Portfolio",
    description:
      "Recruiter-ready portfolio for strategy, analytics, market intelligence, and healthcare technology roles.",
    url: "/",
    siteName: "Sowmya Vunnam Portfolio",
    type: "website",
    images: [
      {
        url: "/opengraph-image",
        width: 1200,
        height: 630,
        alt: "Sowmya Vunnam strategy and analytics portfolio preview",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Sowmya Vunnam | Strategy and Analytics Portfolio",
    description:
      "Recruiter-ready portfolio focused on healthcare strategy, analytics, market intelligence, and decision storytelling.",
    images: ["/twitter-image"],
  },
  icons: {
    icon: [{ url: "/icon.svg", type: "image/svg+xml" }],
    shortcut: ["/icon.svg"],
    apple: [{ url: "/apple-icon" }],
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="en"
      className={`${display.variable} ${sans.variable} h-full antialiased`}
      suppressHydrationWarning
    >
      <body className="min-h-full flex flex-col">
        <ThemeProvider
          attribute="class"
          defaultTheme="light"
          enableSystem
          disableTransitionOnChange
        >
          {children}
        </ThemeProvider>
      </body>
    </html>
  );
}
