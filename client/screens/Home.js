import { View, Text, SafeAreaView, StatusBar, Image } from "react-native";
import { Header } from "../components";
import React from "react";

const Home = () => {
  return (
    <SafeAreaView className="flex-1">
      <StatusBar
        barStyle="light-content"
        backgroundColor="#107BD0"
        barStyle="light-content"
      />

      <View className="flex-1">
        <Header />
        <View className="px-7 mt-7">
          <Text className="text-lg font-bold text-sub-blue">
            Selamat,Datang
          </Text>
          <Text className="text-[23px] mt-1 font-bold text-blue-600">
            Angel Vanessa
          </Text>
        </View>
      </View>
    </SafeAreaView>
  );
};

export default Home;
