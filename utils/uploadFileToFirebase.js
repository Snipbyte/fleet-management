import { storage } from "./firebase-admin"; 
import { v4 as uuidv4 } from "uuid";

export const uploadImageToFirebase = async (folderName, buffer, filename) => {
  try {
    const fileName = `${folderName}/${uuidv4()}_${filename}`;
    const file = storage.file(fileName);

    await file.save(buffer);

    const [url] = await file.getSignedUrl({
      action: "read",
      expires: "03-09-2491", 
    });

    return url;
  } catch (error) {
    console.error("Error uploading image:", error);
    throw new Error("Image upload failed");
  }
};

export const deleteFileFromFirebase = async (fileUrl) => {
  if (!fileUrl) return;
  
  try {
    const urlParts = fileUrl.split('/');
    const fileName = urlParts.slice(urlParts.indexOf('o') + 1).join('/').split('?')[0];
    const decodedFileName = decodeURIComponent(fileName);
    
    const file = storage.file(decodedFileName);
    await file.delete();
    console.log(`File ${decodedFileName} deleted successfully`);
  } catch (error) {
    console.error("Error deleting file:", error);
    throw new Error("File deletion failed");
  }
};

//for chats
export const uploadToFirebase = async (folderName, buffer, filename) => {
  try {
    const fileName = `${folderName}/${uuidv4()}_${filename}`;
    const file = storage.file(fileName);

    await file.save(buffer);

    const [url] = await file.getSignedUrl({
      action: "read",
      expires: "03-09-2491", 
    });

    return url;
  } catch (error) {
    console.error("Error uploading image:", error);
    throw new Error("File upload failed");
  }
};
