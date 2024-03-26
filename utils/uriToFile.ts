import { Asset } from "expo-asset";
import * as FileSystem from "expo-file-system";

async function uriToFile(uri: string): Promise<string | undefined | Asset> {
  const fileInfo = await FileSystem.getInfoAsync(uri);
  if (fileInfo.exists) {
    const data = await FileSystem.readAsStringAsync(uri);
    console.log("🚀 ~ uriToFile ~ data:", data);

    return data;
  } else {
    console.error("File not found");
  }
}

export default uriToFile;
