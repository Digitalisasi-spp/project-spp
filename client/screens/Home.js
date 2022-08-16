import { View, Text, SafeAreaView, StatusBar, Image } from "react-native";
import React from "react";

const HeaderTop = () => {
  return (
    <View className="bg-blue-dark pt-10 pb-7 px-5 flex-row  items-center">
      <Image
        source={require("../assets/images/logo.png")}
        className="w-14 h-14"
      />
      <View className="flex-1 ml-4">
        <Text className="font-bold text-white text-xl">
          SMK Immanuel Pontianak
        </Text>
        <Text className="font-normal mt-1 text-md text-white">
          Jln.Letjen Sutoyo
        </Text>
      </View>
    </View>
  );
};

const Home = () => {
  return (
    <SafeAreaView className="flex-1">
      <StatusBar
        barStyle="light-content"
        backgroundColor="#107BD0"
        barStyle="light-content"
      />

      <View className="flex-1">
        <HeaderTop />
      </View>
    </SafeAreaView>
  );
};

export default Home;
