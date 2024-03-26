import axios from "axios";

// Function to upload a base64 image to Cloudinary
const uploadImage = async (base64: string) => {
  const data = new FormData();
  data.append("file", base64);
  data.append("upload_preset", "trmo_app");

  try {
    let cloudName = process.env.CLOUDINARY_CLOUD_NAME;
    let resourceType = "auto";
    let api = `https://api.cloudinary.com/v1_1/trmoapp/image/upload`;

    const res = await axios.post(api, data);
    const { secure_url } = res.data;
    console.log(secure_url);
    return secure_url;
  } catch (error) {
    console.error(error);
  }
};

export default uploadImage;
