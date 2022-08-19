import { useState } from "react";
import {
  View,
  Text,
  StatusBar,
  TouchableOpacity,
  SafeAreaView,
  TextInput,
  Image,
} from "react-native";
import {
  EyeOffIcon as EyeOffIconOutline,
  EyeIcon as EyeIconOutline,
} from "react-native-heroicons/outline";
import { useNavigation } from "@react-navigation/native";

const Auth = () => {
  const navigation = useNavigation();
  const [isSignUp, setIsSignUp] = useState(false);
  const [userForm, setUserForm] = useState({
    email: "",
    nis: "",
    password: "",
  });
  const [showError, setShowError] = useState({
    isOpen: false,
    message: "",
  });
  const [showPass, setShowPass] = useState(true);

  const handleSubmit = () => {
    if (
      userForm.nis === "" ||
      userForm.email === "" ||
      userForm.password === ""
    ) {
      navigation.navigate("home");
      return setShowError({
        isOpen: true,
        message: "Mohon data penguna dilengkapi",
      });
    }

    setShowError({ isOpen: false });
  };

  return (
    <SafeAreaView className="flex-1 bg-white flex-col items-center justify-center">
      <StatusBar
        barStyle="light-content"
        backgroundColor="#107BD0"
        style="auto"
      />
      <View className="w-full">
        <View className="justify-center flex-row">
          <Image
            source={require("../assets/images/login1.png")}
            style={{ width: 190 }}
          />
        </View>
        <View>
          <Text className="font-bold capitalize text-3xl text-center">
            {isSignUp ? "Register" : "Login"}
          </Text>
          <Text className="text-md mt-3 text-center text-gray-500 font-mediums">
            Enter your details below to continue
          </Text>
        </View>
        <View className="px-10 mt-7">
          {/* <View>
            <TextInput
              defaultValue={userForm.nis}
              onChangeText={(value) => setUserForm({ ...userForm, nis: value })}
              placeholder="NIS..."
              placeholderTextColor={showError.isOpen ? "#101010" : "#ddd"}
              className={`w-full rounded-md border ${
                showError.isOpen ? "border-red-600" : "border-gray-400"
              } py-[6px] px-3 ${
                showError.isOpen ? "bg-red-200" : "bg-transparent"
              } `}
            />
          </View> */}
          <View className="my-3">
            <TextInput
              defaultValue={userForm.email}
              onChangeText={(value) =>
                setUserForm({ ...userForm, email: value })
              }
              placeholder="Email..."
              placeholderTextColor={showError.isOpen ? "#101010" : "#ddd"}
              className={`w-full rounded-md border transition duration-200 ${
                showError.isOpen ? "border-red-600" : "border-gray-400"
              } py-[6px] px-3 ${
                showError.isOpen ? "bg-red-200" : "bg-transparent"
              }`}
            />
          </View>
          <View className="relative">
            <TextInput
              defaultValue={userForm.password}
              onChangeText={(value) =>
                setUserForm({ ...userForm, password: value })
              }
              placeholder="Password..."
              placeholderTextColor={showError.isOpen ? "#101010" : "#ddd"}
              secureTextEntry={showPass}
              className={`w-full rounded-md border ${
                showError.isOpen ? "border-red-600" : "border-gray-400"
              } py-[6px] px-3 ${
                showError.isOpen ? "bg-red-200" : "bg-transparent"
              }`}
            />
            <TouchableOpacity
              className="absolute right-3 top-[20%] -translate-y-[50%]"
              onPress={() => setShowPass(!showPass)}
            >
              {showPass ? (
                <EyeIconOutline size={21} color="#ddd" />
              ) : (
                <EyeOffIconOutline size={21} color="#ddd" />
              )}
            </TouchableOpacity>
          </View>
          <TouchableOpacity
            onPress={() => handleSubmit()}
            className="bg-blue-500 mt-10 py-3 px-3 rounded-full"
          >
            <Text className="text-md text-center text-white font-semibold">
              Login
            </Text>
          </TouchableOpacity>
          <Text className="text-center text-red-500 font-semibold text-md mt-5">
            {showError?.message}
          </Text>
        </View>
      </View>
    </SafeAreaView>
  );
};

export default Auth;
