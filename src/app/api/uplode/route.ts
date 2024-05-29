import { UplodeImage } from "@/app/utils/uplodeImage";
import { NextRequest, NextResponse } from "next/server";

export const POST = async (req: NextRequest) => {
  try {
    const file = await req.formData();
    const img = file.get("file");

    const data: any = await UplodeImage(img as File, "temp-uplode");

    return NextResponse.json(
      { message: "success", url: data?.secure_url! },
      { status: 200 }
    );
  } catch (error: any) {
    return NextResponse.json({ message: error.message }, { status: 400 });
  }
};
