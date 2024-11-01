import { useState } from "react";
import {
  View,
  Image,
  Keyboard,
  KeyboardAvoidingView,
  TouchableWithoutFeedback,
  Platform,
} from "react-native";
import { RoutesType } from "@/App";
import { Button } from "@/components/Button";
import { PasswordInput } from "@/components/PasswordField";
import { AddButton } from "@/components/AddButton";
import { Input } from "@/components/Input";
import { TextVariant } from "@/components/TextVariant";
import { useNavigation } from "@react-navigation/native";
import { StackNavigationProp } from "@react-navigation/stack";
import { authStyles } from "@/Screens/authStyles";

type RegistrationScreenProps = {};

export default function RegistrationScreen({}: RegistrationScreenProps) {
  const [username, setUsername] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const navigation = useNavigation<StackNavigationProp<RoutesType>>();

  const handleSubmit = () => {
    if (
      username.trim() === "" ||
      email.trim() === "" ||
      password.trim() === ""
    ) {
      alert("Усі поля мають бути заповнені");
      return;
    }
    Keyboard.dismiss();

    setUsername("");
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
            <TextVariant variant="h2" title="Реєстрація" />
            <View style={authStyles.formContainer}>
              <Input
                onChangeText={setUsername}
                value={username}
                autoComplete="username-new"
                placeholder="Логін"
              />
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
                <Button title="Зареєстуватися" onPress={handleSubmit} />
                <Button
                  onPress={() => navigation.navigate("login")}
                  variant="transparent"
                  title="Вже є акаунт?"
                  underLineTitle="Увійти"
                />
              </View>
            </View>
          </View>
        </KeyboardAvoidingView>
      </View>
    </TouchableWithoutFeedback>
  );
}
