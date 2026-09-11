import { Inter } from "next/font/google";
import "./globals.css";

const inter = Inter({
  subsets: ["latin"],
  display: "swap"
});

export const metadata = {
  title: "Avijeet Shah | Full-Stack Portfolio",
  description: "Full-stack developer passionate about modern interfaces and creative solutions."
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <head>
        <link
          rel="stylesheet"
          href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/6.0.0-beta3/css/all.min.css"
        />
      </head>
      <body className={`${inter.className} px-6 py-8 max-[780px]:p-4`}>{children}</body>
    </html>
  );
}
