import { toPng } from "html-to-image";
export const HTML_TO_IMAGE = async (ref: any) => {
  try {
    if (ref.current === null) {
      return;
    }

    const data = await toPng(ref.current, { cacheBust: true });

    return data;
  } catch (error: any) {
    console.log(error);
  }
};
