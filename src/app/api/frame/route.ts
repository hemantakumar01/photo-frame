import { Image } from "@/app/models/imageModles";
import { connectDB } from "@/app/utils/connectDB";
import { UplodeImage } from "@/app/utils/uplodeImage";
import { cookies } from "next/headers";
import { NextRequest, NextResponse } from "next/server";
const { v4: uuidv4 } = require("uuid");

export async function GET() {
  try {
    await connectDB();
    const cookee = cookies().get("image");
    if (cookee) {
      const data = await Image.find({ uid: cookee.value });
      return NextResponse.json(
        { message: "Cookies Get", data, success: true },
        { status: 200 }
      );
    } else {
      const twentyDay = 24 * 10 * 60 * 60 * 1000;
      cookies().set("image", uuidv4(), { expires: Date.now() + twentyDay });
    }

    return NextResponse.json({
      message: "Success",
    });
  } catch (error: any) {
    return NextResponse.json(
      { success: false, message: error.message },
      { status: 400 }
    );
  }
}
export async function POST(req: NextRequest) {
  try {
    const formData = await req.formData();
    const file = formData.get("file") as File;
    if (!file)
      return NextResponse.json(
        { success: false, message: "Uplode file" },
        { status: 400 }
      );
    const cookee = cookies().get("image");
    connectDB();
    if (cookee) {
      const res: any = await UplodeImage(file, "cokies-Images");

      const data = await Image.create({
        img: res.secure_url,
        uid: cookee.value,
        public_id: res.public_id,
      });
      return NextResponse.json(
        { success: true, message: "Image Uploded", data },
        { status: 200 }
      );
    } else {
      return NextResponse.json(
        { success: false, message: "No cookies present" },
        { status: 200 }
      );
    }
  } catch (error: any) {
    return NextResponse.json(
      { success: false, error: error.message },
      { status: 400 }
    );
  }
}
