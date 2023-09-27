import { useState } from "react";
import { useDispatch } from "react-redux";
import { registerUser } from "../redux/operations/authOperations";
import {
  TouchableOpacity,
  Text,
  TextInput,
  View,
  TouchableWithoutFeedback,
  Keyboard,
} from "react-native";

import { KeyboardAwareScrollView } from "react-native-keyboard-aware-scroll-view";

import EyeIcon from "../assets/icons/EyeIcon";

const AddEmployeeScreen = ({ navigation }) => {
  const dispatch = useDispatch();

  const [fullName, setFullName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [showPassword, setShowPassword] = useState(true);

  const toggleShowPassword = () => setShowPassword(!showPassword);

  const handleRegistrationSubmit = async () => {
    Keyboard.dismiss();
    const newUserData = {
      username: fullName,
      email: email,
      password: password,
      role: "subadmin",
    };

    dispatch(registerUser(newUserData));
    setFullName("");
    setEmail("");
    setPassword("");
  };

  return (
    <KeyboardAwareScrollView
      resetScrollToCoords={{ x: 0, y: 0 }}
      scrollEnabled={false}
      className="flex-1"
    >
      <TouchableWithoutFeedback onPress={Keyboard.dismiss}>
        <View className="px-5 flex-1 justify-start items-start bottom-32">
          <Text className="shrink mt-48 mb-14 w-48 text-4xl font-medium">
            Add employee
          </Text>
          <Text className="shrink mb-8 w-full text-xl text-slate-400">
            Create accounts for your employees here
          </Text>

          <TextInput
            className="h-14 w-full mb-4 px-6 border border-cyan-700/[.16] rounded-xl text-cyan-700"
            value={fullName}
            onChangeText={setFullName}
            placeholder="Employee name"
            blurOnSubmit={true}
          />
          <TextInput
            className="h-14 w-full mb-4 px-6 border border-cyan-700/[.16] rounded-xl text-cyan-700"
            value={email}
            onChangeText={setEmail}
            autoCapitalize="none"
            placeholder="Employee e-mail"
            blurOnSubmit={true}
          />
          <View className="w-full">
            <TextInput
              className="h-14 mb-20 pl-6 pr-11 border border-cyan-700/[.16] rounded-xl text-cyan-700"
              value={password}
              onChangeText={setPassword}
              autoCapitalize="none"
              placeholder="Password"
              blurOnSubmit={true}
              secureTextEntry={showPassword}
            />
            <TouchableOpacity
              className="absolute items-center justify-center h-12 w-9 top-1 right-1"
              activeOpacity={0.5}
              onPress={toggleShowPassword}
            >
              <EyeIcon />
            </TouchableOpacity>
          </View>
          <TouchableOpacity
            className="flex-2 items-center justify-center w-full h-14 bg-sky-600 rounded-xl"
            onPress={handleRegistrationSubmit}
          >
            <Text className="text-white text-lg font-medium">Add account</Text>
          </TouchableOpacity>
        </View>
      </TouchableWithoutFeedback>
    </KeyboardAwareScrollView>
  );
};

export default AddEmployeeScreen;