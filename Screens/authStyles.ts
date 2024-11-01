import { StyleSheet } from "react-native";

export const authStyles = StyleSheet.create({
  wrapper: {
    display: "flex",
    height: "100%",
    justifyContent: "flex-end",
  },

  bgImage: {
    backgroundColor: "red",
    width: "100%",
    height: "100%",
    position: "absolute",
  },
  container: {
    width: "100%",
    borderTopLeftRadius: 25,
    borderTopRightRadius: 25,
    backgroundColor: "#fff",
    position: "relative",
    paddingBottom: 30,
  },

  importImage: {
    backgroundColor: "#F6F6F6",
    borderRadius: 16,
    width: 120,
    height: 120,
    left: "50%",
    transform: [{ translateX: -60 }, { translateY: -60 }],
    position: "absolute",
  },
  userIcon: {
    width: 120,
    height: 120,
  },
  addButton: {
    transform: [{ translateX: 105 }, { translateY: -40 }],
  },
  formContainer: {
    alignItems: "center",
    gap: 16,
    width: "90%",
    marginHorizontal: "auto",
    paddingBottom: 0,
  },
  showPassword: {
    position: "absolute",
    right: 16,
    top: 15,
  },
  signIn: {
    marginTop: 40,
    width: "100%",
    gap: 0,
  },
});
