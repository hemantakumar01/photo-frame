import { Frame } from "@/app/models/FrameModle";
import { connectDB } from "@/app/utils/connectDB";
import mongoose from "mongoose";
import { NextRequest, NextResponse } from "next/server";

export async function GET(req: NextRequest, context: any) {
  try {
    const id = context.params.id;

    const validate = mongoose.isValidObjectId(id);

    if (!validate)
      return NextResponse.json(
        { success: false, message: "InValidId" },
        { status: 400 }
      );
    await connectDB();
    const data = await Frame.findById(id);

    return NextResponse.json(
      { success: true, message: "", data },
      { status: 200 }
    );
  } catch (error) {
    console.log(error);
    return NextResponse.json(
      { success: false, message: "Error On Delete" },
      { status: 400 }
    );
  }
}
