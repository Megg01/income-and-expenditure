import { SkPath } from "@shopify/react-native-skia";
import React, { memo, useState } from "react";
import { StyleSheet, View } from "react-native";
import { CartesianChart, Line } from "victory-native";

interface Props {
  min: number;
  max: number;
  curve: SkPath;
}

const Index: React.FC = ({}) => {
  const [value, setValue] = useState("");

  return (
    <View style={style.container}>
      <CartesianChart data={DATA} xKey="day" yKeys={["y"]}>
        {({ points }) => (
          //👇 pass a PointsArray to the Line component, as well as options.
          <Line
            points={points?.y}
            color="red"
            strokeWidth={3}
            animate={{ type: "timing", duration: 300 }}
          />
        )}
      </CartesianChart>
    </View>
  );
};

const style = StyleSheet.create({
  container: {
    display: "flex",
    flexDirection: "column",
    alignItems: "flex-start",
    paddingVertical: 15,
  },
});

export default memo(Index);
