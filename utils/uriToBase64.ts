import * as FileSystem from "expo-file-system";

async function uriToBase64(uri: string): Promise<string | undefined> {
  try {
    const result = await FileSystem.readAsStringAsync(uri, {
      encoding: FileSystem.EncodingType.Base64,
    });
    return result;
  } catch (error: any) {
    console.error("Error reading file:", error);
    // Handle errors appropriately, e.g., display an error message to the user
    return undefined;
  }
}

export default uriToBase64;
