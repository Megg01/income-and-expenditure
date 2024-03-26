import DateTimePicker from "@react-native-community/datetimepicker";
import { memo, useState } from "react";
import { StyleSheet } from "react-native";

interface Props {
  value: Date;
  setValue: (value: Date) => void;
}

const Index = ({ value, setValue }: Props) => {
  const [date, setDate] = useState(value);

  const onChange = (event: any, selectedDate?: Date) => {
    const currentDate = selectedDate || date;
    setDate(currentDate);
    setValue(currentDate);
  };

  return (
    <DateTimePicker
      testID="dateTimePicker"
      value={date}
      mode="datetime"
      display="default"
      onChange={onChange}
      style={style.picker}
      locale="mn-MN"
    />
  );
};

export default memo(Index);

const style = StyleSheet.create({
  picker: {
    width: "100%",
  },
});
