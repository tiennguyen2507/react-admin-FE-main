export const inputImgToBase64 = async (file: Blob | null) => {
  if (file !== null) {
    return await new Promise((resolve, reject) => {
      const reader = new FileReader();
      reader.readAsDataURL(file);
      reader.onload = () => resolve(reader.result);
      reader.onerror = reject;
    }).then((value) => {
      return value as string;
    });
  }
};
