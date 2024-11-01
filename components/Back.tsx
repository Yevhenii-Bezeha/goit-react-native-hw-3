import { Feather } from "@expo/vector-icons";

type LogoutProps = {
  onPress: () => void;
};
export const Back = ({ onPress }: LogoutProps) => {
  return (
    <Feather
      name="arrow-left"
      size={24}
      onPress={onPress}
      style={{ padding: 10 }}
    />
  );
};
