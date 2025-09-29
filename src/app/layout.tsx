import type { Metadata } from "next";
import localFont from "next/font/local";
import "./globals.css";
import Header from "@/components/layout/header";

const cascadia = localFont({
  src: [
    {
      path: "../../public/fonts/cascadia-extralight.ttf",
      weight: "200",
      style: "normal",
    },
    {
      path: "../../public/fonts/cascadia-light.ttf",
      weight: "300",
      style: "normal",
    },
    {
      path: "../../public/fonts/cascadia-regular.ttf",
      weight: "400",
      style: "normal",
    },
    {
      path: "../../public/fonts/cascadia-medium.ttf",
      weight: "500",
      style: "normal",
    },
    {
      path: "../../public/fonts/cascadia-semibold.ttf",
      weight: "600",
      style: "normal",
    },
    {
      path: "../../public/fonts/cascadia-bold.ttf",
      weight: "700",
      style: "normal",
    },
  ],
});

export const metadata: Metadata = {
  title: "George Hum",
  description:
    "George Hum's personal website, blogs, life experiences, projects and more.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={`${cascadia.className} antialiased flex justify-center`}>
        <div className="w-full max-w-2xl mx-5 my-8 sm:my-16 text-sm">
          <Header />
          <div className="mt-12 text-left">{children}</div>
        </div>
      </body>
    </html>
  );
}
