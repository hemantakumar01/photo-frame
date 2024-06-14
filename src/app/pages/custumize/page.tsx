"use client";
import EditImage from "@/app/editImage/EditImage";
import { convertUrlToBase64 } from "@/app/helper/convertUrlToBase64";
import { useAppSelector } from "@/app/redux/store";
import { Button } from "@/components/ui/button";
import {
  Tooltip,
  TooltipContent,
  TooltipProvider,
  TooltipTrigger,
} from "@/components/ui/tooltip";
import { fabric } from "fabric";
import { MoveRight, UploadIcon } from "lucide-react";
import { useEffect, useRef, useState } from "react";
import { FaTrashAlt } from "react-icons/fa";
import { ImBrightnessContrast } from "react-icons/im";
import { MdContrast } from "react-icons/md";
import { RiContrastDropFill } from "react-icons/ri";

type Props = {};
const size = 20;
const toolsIcons = [
  {
    name: "Delete",
    icon: <FaTrashAlt size={size} />,
  },
  {
    name: "Brightness",
    icon: <ImBrightnessContrast size={size} />,
  },
  {
    name: "Contrast",
    icon: <MdContrast size={size} />,
  },
  {
    name: "Hue",
    icon: <RiContrastDropFill size={size} />,
  },
];
const Page = (props: Props) => {
  const canvasRef = useRef(null);
  const [canvas, setCanvas] = useState<any>(null);
  const [downloadUrl, setDownloadUrl] = useState<string>("");
  const [canvasBackground, setCanvasBackground] = useState("");
  const image = useAppSelector((state) => state.ImageReducer.uplodedImage);

  const downloadCanvas = async () => {
    try {
      const dataURL = await canvas.toDataURL({
        format: "png",
        quality: 0.8,
      });
      if (dataURL) {
        setDownloadUrl(dataURL);
      }
      setTimeout(() => {
        document.getElementById("downlode-image")?.click();
      }, 800);
    } catch (error) {
      console.log(error);
    }
  };

  const setBacgroundImageToCanvas = async () => {
    try {
      const data: any = await convertUrlToBase64(
        "https://res.cloudinary.com/dsvkkpgyj/image/upload/v1718255893/cokies-Images/hro1roel5z6qrng64dwo.jpg"
      );
      setCanvasBackground(data);
    } catch (error) {
      console.log(error);
    }
  };

  useEffect(() => {
    setBacgroundImageToCanvas();

    const canvasInstance = new fabric.Canvas(canvasRef.current);
    const canvasWidth = canvasInstance.getWidth();
    const canvasHeight = canvasInstance.getHeight();
    const imageWidth = 300;
    const imageHeight = 424;

    const offsetX = (canvasWidth - imageWidth) / 2;
    const offsetY = (canvasHeight - imageHeight) / 2;
    canvasInstance.setBackgroundImage(
      canvasBackground,
      canvasInstance.renderAll.bind(canvasInstance),
      {
        scaleX: 1,
        scaleY: 1,
        left: offsetX,
        top: offsetY,
      }
    );

    setCanvas(canvasInstance);

    return () => {
      canvasInstance.dispose();
    };
  }, [canvasBackground]);

  const addImage = async (img: string) => {
    try {
      const imageUrl = await convertUrlToBase64(img);
      if (imageUrl) {
        fabric.Image.fromURL(imageUrl, (img) => {
          // Set image properties (optional)
          img.set({
            left: 100, // Initial position on X-axis
            top: 100, // Initial position on Y-axis
            scaleX: 0.1,
            scaleY: 0.1,
          }); // Add the image to the canvas

          canvas.add(img);
        });
      }
    } catch (error) {
      console.log(error);
    }
  };
  function deleteSelectedItems(canvas: any) {
    const selectedObjects = canvas.getActiveObjects();

    if (selectedObjects) {
      // Handle multiple selected objects (group or individual)
      if (selectedObjects.length > 1) {
        selectedObjects.forEach((object: any) => canvas.remove(object));
      } else {
        canvas.remove(selectedObjects[0]);
      }
      canvas.discardActiveGroup().renderAll();
    } else {
      // No object selected, handle as needed (e.g., display a message)
      console.log("No object selected to delete.");
    }
  }

  return (
    <div className="flex items-center justify-center">
      <div className="flex gap-3 w-[1000px] p-7 border-2 flex-col-reverse">
        <div className=" w-full lg:w-[400px]  p-3 flex flex-col gap-4 justify-between ">
          <h1 className="text-center font-bold text-xl">
            Select Image To Edit
          </h1>

          <div className=" flex flex-col gap-4">
            <div className="flex items-center gap-3 flex-wrap p-3 border rounded-md">
              {image?.map((item: { _id: string; img: string }, idx) => (
                <div
                  className="  cursor-pointer"
                  key={idx}
                  onClick={() => addImage(item.img)}
                >
                  <img src={item.img} alt="" className=" w-[40px] rounded-sm" />
                </div>
              ))}
            </div>
            <TooltipProvider>
              <div className="icons flex items-center gap-3 cursor-pointer">
                {toolsIcons.map((item, idx) => (
                  <Tooltip key={idx}>
                    <TooltipTrigger>
                      <div
                        onClick={() => deleteSelectedItems(canvas)}
                        className="flex items-center justify-center p-3 rounded-md bg-gray-100 cursor-pointer"
                      >
                        {item.icon}
                      </div>
                    </TooltipTrigger>
                    <TooltipContent>
                      <p>{item.name}</p>
                    </TooltipContent>
                  </Tooltip>
                ))}
              </div>
            </TooltipProvider>
            {downloadUrl && (
              <a
                href={downloadUrl}
                download="myCanvas.png"
                id="downlode-image"
                className="hidden"
              />
            )}

            <EditImage>
              <div className="py-4 px-3 border-black border-2 rounded-sm border-dashed flex items-center justify-center gap-2">
                <UploadIcon />
                Uplode New Image
              </div>
            </EditImage>

            <Button onClick={downloadCanvas} className="w-full gap-2 py-6">
              Save <MoveRight />
            </Button>
          </div>
        </div>
        <div className="flex flex-1 items-center justify-center">
          {canvasRef && (
            <canvas ref={canvasRef} width={"350px"} height={"474px"} />
          )}
        </div>
      </div>
    </div>
  );
};

export default Page;
