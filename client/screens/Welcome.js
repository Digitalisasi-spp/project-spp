import {
  View,
  Text,
  StatusBar,
  Image,
  TouchableOpacity,
  SafeAreaView,
} from "react-native";
import React from "react";
import { useNavigation } from "@react-navigation/native";

const Welcome = () => {
  const navigation = useNavigation();

  return (
    <SafeAreaView className="flex-1 bg-white py-10">
      <View className="flex-1 flex-col items-center justify-center">
        <StatusBar
          barStyle="light-content"
          backgroundColor="#107BD0"
          style="auto"
        />

        <View className="justify-center items-center">
          <Image source={require("../assets/images/welcome1.png")} />
        </View>
        <Text className="font-bold text-3xl text-center mt-10">
          Feedo start now
        </Text>
        <Text className="font-bold text-md mt-3 text-center opacity-25">
          Check your payment history now!
        </Text>
        <View className="justify-center items-center mt-14">
          <TouchableOpacity
            onPress={() => navigation.navigate("login")}
            className="bg-blue-500 text-white py-3 rounded-full w-[130px] "
          >
            <Text className="uppercase font-semibold text-white text-center ">
              get started
            </Text>
          </TouchableOpacity>
        </View>
      </View>
    </SafeAreaView>
  );
};

export default Welcome;
