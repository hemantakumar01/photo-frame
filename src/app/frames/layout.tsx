import FilterDrawer from "@/components/FilterDrawer";
import Navbar from "@/components/Navbar";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Frames",
  description: "Your Custum Frame",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className="overflow-hidden">
        <Navbar />
        {children}
        <FilterDrawer />
      </body>
    </html>
  );
}
