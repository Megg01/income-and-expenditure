import React, { ReactElement, memo } from "react";
import * as Native from "react-native";

type Props = {
  truth?: React.ReactNode | undefined;
  untruth?: React.ReactNode | undefined;
  condition: boolean;
};

const Index: React.FC<Props> = ({ truth, untruth, condition }) => {
  if (condition) {
    return truth;
  } else {
    return untruth;
  }
};

export default memo(Index);
