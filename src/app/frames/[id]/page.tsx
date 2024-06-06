"use client";
import ChangeFrame from "@/app/changeFrame/ChangeFrame";
import EditImage from "@/app/editImage/EditImage";
import { useAppSelector } from "@/app/redux/store";
import { Button } from "@/components/ui/button";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel";
import { Skeleton } from "@/components/ui/skeleton";
import axios from "axios";
import { Edit2, Upload } from "lucide-react";
import Link from "next/link";
import { useParams, usePathname, useRouter } from "next/navigation";
import { useEffect, useState } from "react";
import { FaWhatsapp } from "react-icons/fa";

type Props = {};

const Page = (props: Props) => {
  const whatsappLink = `https://wa.me/9395585260?text=${encodeURIComponent(
    window.location.href
  )}`;
  if (typeof window !== "undefined") {
    const width = window.innerWidth;
    // Use window.innerWidth here
  }
  const initialPadding = 18;
  const [padding, setPadding] = useState(initialPadding);
  const image = useAppSelector((state) => state.ImageReducer);
  const id = useParams().id;
  const route = useRouter();
  const [frame, setFrame] = useState<any>(null);
  const path = window.location.href;

  const getFrame = async () => {
    try {
      const { data } = await axios.get(`/api/newFrame/${id}`);
      if (data.success) {
        setFrame(data.data);
      }
    } catch (error) {
      console.log(error);
    }
  };

  useEffect(() => {
    getFrame();
  }, []);
  const handleBuyNow = async () => {
    await route.push("/pages/checkout");
  };
  return (
    <div>
      {frame ? (
        <div className="flex flex-col justify-center items-center md:flex-row ">
          <div className="flex-1 flex items-center justify-center">
            <Carousel className="w-full max-w-xs justify-center">
              <CarouselContent className="items-center">
                <CarouselItem>
                  <div
                    style={{
                      borderImageSource: `url('${frame.frameUrl}')`,
                      borderImageSlice: frame.borderCSS.imageSlice,
                      borderImageWidth: frame.borderCSS.imageWidth,
                      borderImageRepeat: frame.borderCSS.borderRepeat,
                      padding: padding,
                    }}
                    className="  w-[305px] h-[calc(1.414*305px)]"
                  >
                    <img
                      style={{ zIndex: -9999 }}
                      src={image.localURL || "/frame5.jpg"}
                      alt="Selected Image"
                      className="h-full w-full object-fill "
                    />
                  </div>
                </CarouselItem>
                <CarouselItem>
                  <div className="relative">
                    <img className="w-[375px]" src="/frame5.jpg" alt="" />
                    <img
                      style={{
                        borderImageSource: `url('${frame.frameUrl}')`,
                        borderImageSlice: "73 70 70 66",
                        borderImageWidth: "5px",
                        borderImageRepeat: "stretch",
                        padding: "7px",
                      }}
                      src={image.localURL || "/frame5.jpg"}
                      alt=""
                      className="absolute w-[95px] h-[calc(1.414*95px)]  top-[28px]  left-[11rem] bg-white shadow-md shadow-slate-500"
                    />
                  </div>
                </CarouselItem>
                <CarouselItem>
                  <div className="relative">
                    <img className="w-[375px]" src="/frame4.jpg" alt="" />
                    <img
                      style={{
                        borderImageSource:
                          `url('${frame.frameUrl}')` || "url('/frame.jpg')",
                        borderImageSlice: "73 70 70 66",
                        borderImageWidth: "5px",
                        borderImageRepeat: "stretch",
                        padding: "7px",
                      }}
                      src={image.localURL || "/frame5.jpg"}
                      alt=""
                      className="absolute w-[90px] h-[calc(1.414*90px)]  top-[20px]  left-16 bg-white shadow-md shadow-slate-500"
                    />
                  </div>
                </CarouselItem>
                <CarouselItem>
                  <div className="relative">
                    <img className="w-[305px] h-[432px]" src="/A4.jpg" alt="" />
                  </div>
                </CarouselItem>
              </CarouselContent>
              <CarouselPrevious />
              <CarouselNext />
            </Carousel>
          </div>
          <div className="flex-1">
            <div className="flex  gap-2 flex-col">
              <p className="text-xl font-semibold text-gray-600">
                {frame.name}
              </p>
              <p className="flex items-center gap-1 text-sm">
                <span>Frame Size:</span>
                {frame.frameSize}
              </p>
              <p className="flex items-center gap-1 text-sm">
                <span>Photo Size:</span>
                {frame.photoSize}
              </p>
              <p className="flex items-center gap-1 text-sm">
                <span>Frame Type:</span> Golden Wood{" "}
                <ChangeFrame>
                  <span className="px-3 cursor-pointer py-1 bg-primary flex items-center gap-1 text-white rounded-sm">
                    <Edit2 size={15} /> change
                  </span>
                </ChangeFrame>
              </p>
              <p className="flex items-center gap-1 text-sm">
                <span>Image:</span>
                <EditImage>
                  <span className="px-3 cursor-pointer py-1 bg-primary flex items-center gap-1 text-white rounded-sm">
                    <Upload size={15} /> change image
                  </span>
                </EditImage>
              </p>
              <div className="py-3">
                <input
                  type="range"
                  className="w-full"
                  value={padding}
                  onChange={(e) => {
                    const value = Number(e.target.value);
                    if (value < initialPadding) return;
                    setPadding(value);
                  }}
                />
              </div>
              <p>
                Lorem, ipsum dolor sit amet consectetur adipisicing elit.
                Temporibus neque magni facilis aut explicabo, commodi quae
                autem. Corporis soluta facilis cupiditate, omnis, consequuntur
                assumenda beatae minima nemo vero possimus quidem.
              </p>
            </div>
            <div className="actions flex gap-4 flex-col  items-center">
              <Link href={whatsappLink} className="w-full">
                <Button
                  className="w-full items-center gap-2"
                  variant={"outline"}
                >
                  <FaWhatsapp className="text-xl bg-green-400 text-white p-[2px] rounded-sm" />{" "}
                  Buy on Whatsapp
                </Button>
              </Link>
              <Button className="w-full" onClick={handleBuyNow}>
                Buy Now
              </Button>
            </div>
          </div>
        </div>
      ) : (
        <div className="">
          <div className="p-3  sm:flex gap-6 sm:p-4 ">
            <Skeleton className="min-w-xs h-[400px]  flex-1 w-full" />

            <div className="flex-1">
              <Skeleton className=" h-[30px] mt-2" />
              <Skeleton className=" h-[20px] mt-2" />
              <div className="flex items-center gap-5 mt-3">
                <Skeleton className="h-5 w-[100px] " />
                <Skeleton className="h-5 w-[120px] " />
              </div>
              <div className="flex items-center gap-5 mt-3">
                <Skeleton className="h-5 w-[100px] " />
                <Skeleton className="h-5 w-[120px] " />
              </div>
              <div className="flex items-center gap-5 mt-3">
                <Skeleton className="h-5 w-[100px] " />
                <Skeleton className="h-5 w-[120px] " />
              </div>
              <Skeleton className=" h-[30px] mt-2" />
              <Skeleton className=" h-[20px] mt-2" />
            </div>
          </div>
          <Skeleton className="h-[640px] mt-6" />
        </div>
      )}

      <div className="py-6"></div>
    </div>
  );
};

export default Page;
