import { Image } from "@/app/models/imageModles";
import { connectDB } from "@/app/utils/connectDB";
import cloudinery from "@/app/utils/uplodeImage";
import mongoose from "mongoose";
import { NextRequest, NextResponse } from "next/server";

export async function DELETE(req: NextRequest, context: any) {
  try {
    const id = context.params.id;

    const validate = mongoose.isValidObjectId(id);

    if (!validate)
      return NextResponse.json(
        { success: false, message: "InValidId" },
        { status: 400 }
      );
    await connectDB();
    const image = await Image.findByIdAndDelete(id);

    if (image) {
      await cloudinery.api.delete_resources([`${image.public_id}`], {
        type: "upload",
        resource_type: "image",
      });
    }
    return NextResponse.json(
      { success: true, message: "Deleted" },
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
