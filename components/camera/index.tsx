import Global from "@/constants/Global";
import { Entypo } from "@expo/vector-icons";
import { Camera } from "expo-camera";
import { useRef, useState } from "react";
import {
  Button,
  Modal,
  Pressable,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
} from "react-native";
import { IconButton } from "react-native-paper";

interface Props {
  value: any;
  setValue: any;
}

const Index = ({ value, setValue }: Props) => {
  const [image, setImage] = useState<any>(value);
  const [permission, requestPermission] = Camera.useCameraPermissions();
  const [isCamera, setIsCamera] = useState(false);
  const [camera, setCamera] = useState<any>();
  const cameraRef = useRef(null);

  if (!permission) {
    return <View />;
  }

  if (!permission.granted) {
    return (
      <View>
        <Text style={{ textAlign: "center" }}>
          We need your permission to show the camera
        </Text>
        <Button onPress={requestPermission} title="grant permission" />
      </View>
    );
  }

  const onPressCapture = async () => {
    const data = await camera?.takePictureAsync(null);
    setImage(data?.uri);
    setValue(data?.uri);
    setIsCamera(false);
  };
  const onCameraPress = () => {
    setIsCamera(!isCamera);
    cameraRef.current = null;
  };

  return (
    <Pressable style={style.pressable} onPress={onCameraPress}>
      <View style={{ display: "flex", alignItems: "center" }}>
        <Entypo name="camera" size={24} color={Global.colors.green} />
        <Text style={style.pressable_text}>Камер</Text>
      </View>
      <Modal visible={isCamera}>
        <Camera ref={(ref) => setCamera(ref)} style={styles.camera}></Camera>
        <View style={styles.close}>
          <IconButton
            icon="close"
            onPress={() => {
              setIsCamera(false);
            }}
          />
        </View>
        <View style={styles.buttonContainer}>
          <TouchableOpacity style={styles.button} onPress={onPressCapture}>
            <Entypo name="camera" size={50} color={Global.colors.whiteGreen} />
          </TouchableOpacity>
        </View>
      </Modal>
    </Pressable>
  );
};

const style = StyleSheet.create({
  pressable: {
    borderColor: Global.colors.whiteBorder,
    borderWidth: 1,
    borderRadius: 16,
    backgroundColor: Global.colors.whiteGreen,
    width: "40%",
    padding: 16,
    display: "flex",
    flexDirection: "column",
    justifyContent: "space-between",
    alignItems: "center",
  },
  pressable_text: {
    color: Global.colors.green,
    fontWeight: "bold",
  },
  image: {
    height: "50%",
    width: "50%",
  },
});

const styles = StyleSheet.create({
  camera: {
    position: "absolute",
    width: "100%",
    height: "100%",
    flex: 1,
  },
  close: {
    position: "absolute",
    top: 30,
    right: 20,
  },
  buttonContainer: {
    flex: 1,
    flexDirection: "row",
    backgroundColor: "transparent",
    margin: 64,
  },
  button: {
    flex: 1,
    alignSelf: "flex-end",
    alignItems: "center",
  },
  text: {
    fontSize: 24,
    fontWeight: "bold",
    color: "white",
  },
});

export default Index;
