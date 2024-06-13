"use client";
import { Button } from "@/components/ui/button";
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogFooter,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog";
import { DialogClose } from "@radix-ui/react-dialog";
import axios from "axios";
import { ReactElement, useEffect, useState } from "react";
import { FaUpload } from "react-icons/fa";
import { IoCloseCircle } from "react-icons/io5";
import { useDispatch } from "react-redux";
import { GridLoader } from "react-spinners";
import { AppDispatch } from "../redux/store";
import { setLocalUrl, setUplodedImage } from "../redux/features/imgSlice";
type Props = {
  children: ReactElement;
};

const EditImage = (props: Props) => {
  const [image, setImage] = useState<[]>();
  const [file, setFile] = useState<boolean>(false);
  const [loading, setLoading] = useState<boolean>(false);
  const dispatch = useDispatch<AppDispatch>();
  const getImages = async () => {
    try {
      setLoading(true);
      const { data } = await axios.get("/api/frame");
      if (data.success) {
        setImage(data.data);
        dispatch(setUplodedImage(data.data));
      }
      setLoading(false);
    } catch (error) {
      console.log(error);
      setLoading(false);
    }
  };

  const handleUplode = async (e: any) => {
    try {
      setLoading(true);
      const file = e.target.files[0];

      if (!file) throw new Error("Provide file");
      const formData = new FormData();
      formData.append("file", file!);
      setFile(!file);
      const { data } = await axios.post("/api/frame", formData);
      dispatch(setLocalUrl(data.data?.img));
      await getImages();
      setFile(!file);
    } catch (error) {
      setFile(!file);

      console.log(error);
    }
  };
  useEffect(() => {
    getImages();
  }, [file]);
  const handleDelete = async (id: string) => {
    try {
      setLoading(true);
      await axios.delete(`/api/frame/${id}`);
      await getImages();
      dispatch(setLocalUrl(""));
      setLoading(false);
    } catch (error) {
      console.log(error);
      setLoading(false);
    }
  };
  return (
    <Dialog>
      <DialogTrigger asChild>{props.children}</DialogTrigger>
      <DialogContent className="sm:max-w-[425px] w-[90%] rounded-sm">
        <DialogHeader>
          <DialogTitle>Uplode Image</DialogTitle>
          <DialogDescription>
            Uplode Images which you want to view inside frame. Click save when
            youre done.
          </DialogDescription>
        </DialogHeader>
        <div
          className="w-full h-[100px] cursor-pointer flex items-center justify-center border-[2px] border-dashed rounded-sm border-black"
          onClick={() => {
            setLoading(true);
            (document.querySelector(".input-image") as HTMLElement).click();
          }}
        >
          <input
            type="file"
            accept="image/*"
            className="input-image"
            hidden
            onChange={handleUplode}
          />
          <span className="flex items-center gap-2 px-8 py-3 rounded bg-black text-white">
            <FaUpload /> Uplode Image
          </span>
        </div>
        <div className="flex items-center flex-wrap gap-2">
          {!loading ? (
            image?.map((i: any, index) => (
              <div className="relative" key={index}>
                <div className="min-h-[45px] min-w-[35px]">
                  <IoCloseCircle
                    onClick={() => handleDelete(i._id)}
                    className="absolute -right-2 -top-2 cursor-pointer"
                  />
                  <DialogClose>
                    {" "}
                    <img
                      src={i?.img!}
                      className="h-[45px] w-[35px] object-cover"
                      alt=""
                      loading="lazy"
                      onClick={() => dispatch(setLocalUrl(i.img))}
                    />
                  </DialogClose>
                </div>
              </div>
            ))
          ) : (
            <div className="flex items-center justify-center  w-full">
              <GridLoader color="#000000" />
            </div>
          )}
        </div>
        <DialogClose>
          <DialogFooter>
            <Button type="submit">Close</Button>
          </DialogFooter>
        </DialogClose>
      </DialogContent>
    </Dialog>
  );
};

export default EditImage;
