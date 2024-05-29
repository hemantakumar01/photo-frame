"use client";
import Frame from "@/components/Frame";
import axios from "axios";
import { Upload } from "lucide-react";
import { useState } from "react";
import { useDispatch } from "react-redux";
import { setLocalUrl } from "../redux/features/imgSlice";
import { AppDispatch, useAppSelector } from "../redux/store";
type Props = {};

const Page = (props: Props) => {
  const [selectedImage, setSelectedImage] = useState<any>(null);
  const [loading, setLoading] = useState<boolean>(false);
  const dispatch = useDispatch<AppDispatch>();
  const handleFileChange = async (event: any) => {
    setLoading(true);
    const selectedFile = event.target.files[0];
    if (selectedFile) {
      const fd = new FormData();
      fd.append("file", selectedFile);
      const { data } = await axios.post("/api/uplode", fd);
      setSelectedImage(data.url);
      dispatch(setLocalUrl(data.url));
    }
    setLoading(false);
  };
  const localUrl = useAppSelector((state) => state.ImageReducer.localURL);

  return (
    <section className="py-8">
      <input
        type="file"
        onChange={handleFileChange}
        id="image"
        className=" hidden"
        accept="image/*"
      />

      <label
        htmlFor="image"
        className="px-10 text-sm  text-white bg-primary py-3 rounded-sm  ml-5 flex items-center justify-center gap-2"
      >
        <Upload />
        Uplode Your Image
      </label>

      {loading ? (
        <>lodding</>
      ) : (
        <div className="flex items-center gap-3 flex-wrap justify-center p-1 mt-4">
          <Frame
            src={selectedImage || localUrl}
            borderColour="#635505"
            borderStyle="groove"
            borderWidth="15px"
          />
          <Frame
            src={localUrl || selectedImage}
            borderColour="#808080"
            borderStyle="groove"
            borderWidth="15px"
          />
          <Frame
            src={selectedImage || localUrl}
            borderColour=""
            borderStyle="ridge"
            borderWidth="15px"
          />
          <Frame
            src={selectedImage || localUrl}
            borderColour="#991b1b"
            borderStyle="groove"
            borderWidth="15px"
          />
          <div _ngcontent-my-app-c292="" class="frame" style="border-width: 10.9375px; border-image: url(&quot;https://content.mahattaart.com/products/whole_frame_image_MA-EV-369-4.jpg&quot;) 60 / 1 / 0 stretch; border-style: solid;"><div _ngcontent-my-app-c292="" style="padding: 0px;"><div _ngcontent-my-app-c292="" style="padding: 0px;"><div _ngcontent-my-app-c292="" style="padding: 0px;"><img _ngcontent-my-app-c292="" alt="" src="https://content.mahattaart.com/image_upload/image1716916048_Pasport.jpg.jpeg" style="max-height: 328.125px; width: 277.083px;"></div></div></div></div>
        </div>
      )}
    </section>
  );
};

export default Page;
