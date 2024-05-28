"use client";
import { useAppSelector } from "@/app/redux/store";
type Props = {};

const Page = (props: Props) => {
  const data = useAppSelector((state) => state?.ImageReducer);

  return (
    <div>
      <div className="">
        this is image
        {data?.base64URL && <img src={data.base64URL} alt="" />}
      </div>
    </div>
  );
};

export default Page;
