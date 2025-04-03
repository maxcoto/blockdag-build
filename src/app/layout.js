import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

const common = {
  title: "BlockDAG | Build",
  description: "BlockDAG is a Layer 1 proof of work consensus mechanism that evolves the crypto sphere with a cutting-edge Directed Acyclic Graph structure building on the foundations of Bitcoin.",
  keywords: "blockdag, blockdag.dev, blockdag build, blockdag build page, blockdag build site",
  image: "/favicon.png",
}

export const metadata = {
  title: common.title,
  keywords: common.keywords,
  description: common.description,
  icons: [
    { rel: "icon", url: "/favicon.png", type: "image/svg+xml" },
  ],
  openGraph: {
    title: common.title,
    keywords: common.keywords,
    description: common.description,
    url: "https://blockdag.dev",
    siteName: "BlockDAG",
    images: common.image,
  },
  twitter: {
    card: "summary_large_image",
    title: common.title,
    keywords: common.keywords,
    description: common.description,
    images: common.image,
  },
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased`}
      >
        {children}
      </body>
    </html>
  );
}
