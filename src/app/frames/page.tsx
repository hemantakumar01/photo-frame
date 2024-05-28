"use client";
import Frame from "@/components/Frame";
import { Upload } from "lucide-react";
import { useState } from "react";

type Props = {};

const Page = (props: Props) => {
  const [selectedImage, setSelectedImage] = useState<any>(null);
  const handleFileChange = (event: any) => {
    const selectedFile = event.target.files[0];
    if (selectedFile) {
      const imageUrl = URL.createObjectURL(selectedFile);
      setSelectedImage(imageUrl);
    }
  };
  return (
    <section className="py-8">
      <input
        type="file"
        onChange={handleFileChange}
        id="image"
        className=" hidden"
      />

      <label
        htmlFor="image"
        className="px-10 text-sm  text-white bg-primary py-3 rounded-sm  ml-5 flex items-center justify-center gap-2"
      >
        <Upload />
        Uplode Your Image
      </label>

      <div className="flex items-center gap-3 flex-wrap justify-center p-1 mt-4">
        <Frame
          src={selectedImage}
          borderColour="#635505"
          borderStyle="groove"
          borderWidth="15px"
        />
        <Frame
          src={selectedImage}
          borderColour="#808080"
          borderStyle="groove"
          borderWidth="15px"
        />
        <Frame
          src={selectedImage}
          borderColour=""
          borderStyle="ridge"
          borderWidth="15px"
        />
        <Frame
          src={selectedImage}
          borderColour="#991b1b"
          borderStyle="groove"
          borderWidth="15px"
        />
      </div>
    </section>
  );
};

export default Page;
