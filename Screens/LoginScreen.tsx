import { useState } from "react";
import {
  View,
  Image,
  Keyboard,
  KeyboardAvoidingView,
  TouchableWithoutFeedback,
  Platform,
} from "react-native";
import { useNavigation } from "@react-navigation/native";
import { authStyles } from "@/Screens/authStyles";
import { Button } from "@/components/Button";
import { PasswordInput } from "@/components/PasswordField";
import { AddButton } from "@/components/AddButton";
import { Input } from "@/components/Input";
import { TextVariant } from "@/components/TextVariant";
import { StackNavigationProp } from "@react-navigation/stack";
import { RoutesType } from "@/App";

type LoginScreenProps = {};

export default function LoginScreen({}: LoginScreenProps) {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const navigation = useNavigation<StackNavigationProp<RoutesType>>();

  const handleSubmit = () => {
    if (email.trim() === "" || password.trim() === "") {
      alert("Усі поля мають бути заповнені");
      return;
    }
    Keyboard.dismiss();
    setEmail("");
    setPassword("");
    navigation.navigate("home");
  };

  return (
    <TouchableWithoutFeedback onPress={Keyboard.dismiss}>
      <View style={authStyles.wrapper}>
        <Image
          source={require("@/assets/images/bgImage.jpg")}
          style={authStyles.bgImage}
        />
        <KeyboardAvoidingView
          behavior={Platform.OS == "ios" ? "padding" : "height"}
        >
          <View style={authStyles.container}>
            <View style={authStyles.importImage}>
              <Image style={authStyles.userIcon} />
              <AddButton
                onPress={() => console.log("Add")}
                style={authStyles.addButton}
              />
            </View>
            <TextVariant variant="h2" title="Увійти" />
            <View style={authStyles.formContainer}>
              <Input
                onChangeText={setEmail}
                value={email}
                autoComplete="email"
                placeholder="Адреса електронної пошти"
                secureTextEntry={false}
              />
              <PasswordInput
                type="new-password"
                onChangeText={(item: string) => setPassword(item)}
                value={password}
              />
              <View style={authStyles.signIn}>
                <Button title="Увійти" onPress={handleSubmit} />
                <Button
                  onPress={() => navigation.navigate("registration")}
                  variant="transparent"
                  title="Немає акаунту?"
                  underLineTitle={"Зареєструватися"}
                />
              </View>
            </View>
          </View>
        </KeyboardAvoidingView>
      </View>
    </TouchableWithoutFeedback>
  );
}
