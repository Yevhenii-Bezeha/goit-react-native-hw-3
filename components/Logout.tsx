import { Feather } from "@expo/vector-icons";

type LogoutProps = {
  onPress: () => void;
};
export const Logout = ({ onPress }: LogoutProps) => {
  return (
    <Feather
      name="log-out"
      size={24}
      onPress={onPress}
      style={{ color: "#BDBDBD", padding: 10 }}
    />
  );
};
