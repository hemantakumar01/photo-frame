export async function convertUrlToBase64(url: string): Promise<string | null> {
  try {
    const response = await fetch(url);
    if (!response.ok) {
      throw new Error(`Failed to fetch image: ${response.statusText}`);
    }
    const blob = await response.blob();
    const reader = new FileReader();
    return new Promise((resolve, reject) => {
      reader.onloadend = () => {
        if (reader.result) {
          resolve(reader.result.toString().replace(/^data:,/, ""));
        } else {
          reject(new Error("Failed to read image data"));
        }
      };
      reader.readAsDataURL(blob);
    });
  } catch (error) {
    console.error("Error converting image:", error);
    return null;
  }
}
