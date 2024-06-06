import { Frame } from "@/app/models/FrameModle";
import { Image } from "@/app/models/imageModles";
import { connectDB } from "@/app/utils/connectDB";
import { NextRequest, NextResponse } from "next/server";

export async function POST(req: NextRequest) {
  try {
    const {
      name,
      price,
      frameSize,
      photoSize,
      frameType,
      frameSizeImageUrl,
      frameUrl,
      description,
      borderCSS,
    } = await req.json();

    if (
      !name ||
      !price ||
      !frameSize ||
      !photoSize ||
      !frameType ||
      !frameSizeImageUrl ||
      !frameUrl ||
      !description ||
      !borderCSS
    )
      return NextResponse.json(
        { success: false, message: "Provide All Fields" },
        { status: 400 }
      );

    await connectDB();

    const data = await Frame.create({
      name,
      price,
      frameSize,
      photoSize,
      frameType,
      frameSizeImageUrl,
      frameUrl,
      description,
      borderCSS,
    });

    await Frame.create();
    return NextResponse.json({
      message: "Success",
    });
  } catch (error: any) {
    console.log(error);
    return NextResponse.json(
      { success: false, message: error.message },
      { status: 400 }
    );
  }
}

export async function GET(req: NextRequest) {
  try {
    await connectDB();
    const data = await Frame.find({}).select({
      frameUrl: 1,
      _id: 1,
      borderCSS: 1,
    });

    return NextResponse.json(
      { success: true, message: "", data },
      { status: 200 }
    );
  } catch (error: any) {
    console.log(error);
    return NextResponse.json(
      { success: false, message: error.message },
      { status: 400 }
    );
  }
}
