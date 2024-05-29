import { v2 as cloudinary } from "cloudinary";
cloudinary.config({
  cloud_name: process.env.CLOUDINARY_CLOUD_NAME,
  api_key: process.env.CLOUDINARY_API_KEY,
  api_secret: process.env.CLOUDINARY_API_SECRET,
});

export const UplodeImage = async (file: File, folder: string) => {
  try {
    const buffer = await file.arrayBuffer();
    const bufferFile = await Buffer.from(buffer);
    return new Promise(async (resolve, reject) => {
      cloudinary.uploader
        .upload_stream(
          {
            resource_type: "auto",
            folder,
          },
          async (err, result) => {
            if (err) reject(err?.message);
            resolve(result);
          }
        )
        .end(bufferFile);
    });
  } catch (error) {
    console.log(error);
  }
};
