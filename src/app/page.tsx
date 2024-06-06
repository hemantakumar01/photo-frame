"use client";
import Link from "next/link";
import { useWindowSize } from "react-hooks-window-size";
export default function Home() {
  const { width } = useWindowSize();
  return (
    <main className="flex min-h-screen flex-col items-center  p-24">
      <Link href={"/frames"}>Images</Link>
      <Link
        href={
          "https://mahattaart.com/product-customization?product=wall_art&product_type=framing&print_type=archival_standard&print_surface=39&image_size=7X7&image_id=307719&frame_code=MA-EV-426-4-BLGD&mount1_code=&mount2_code=&mount3_code=&mount1_size=0.5&mount2_size=0.5&mount3_size=0.5&glass_type=GLS_001&is_table_frame=0&filter=undefined"
        }
        target="_blank"
      >
        Mahattaart
      </Link>
      <strong>{width}</strong>
    </main>
  );
}
