import {
  View,
  Text,
  SafeAreaView,
  StatusBar,
  FlatList,
  TouchableOpacity,
} from "react-native";
import React, { useState } from "react";
import { ArrowNarrowLeftIcon as ArrowNarrowLeftIconOutline } from "react-native-heroicons/outline";
import { useNavigation } from "@react-navigation/native";
import { TransactionStatus } from "../components";

const dummyData = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

const Message = () => {
  const navigation = useNavigation();
  const [contentPage, setContentPage] = useState("notifikasi");

  const RenderItem = ({ item }) => {
    return (
      <View className="flex-row mt-4">
        <View className="flex-row items-start flex-1">
          <View className="w-2 h-2 rounded-full bg-blue-500 mr-3 mt-1"></View>
          <View className="flex-1">
            <Text className="font-semibold text-xs">
              Selamat Datang di Aplikasi Digital SPP!
            </Text>
            <Text className="mt-1 text-[10px] font-medium text-gray-400 leading-4">
              Halo Angel, terimakasih telah melakukan registrasi di Aplikasi
              Digital SPP. Menikmati beragam fitur untuk...
            </Text>
          </View>
        </View>
        <Text className="text-[9px] text-gray-500">28 Jan</Text>
      </View>
    );
  };
  return (
    <SafeAreaView className="flex-1 bg-white px-7">
      <StatusBar
        barStyle="light-content"
        backgroundColor="#107BD0"
        barStyle="light-content"
      />
      <View className="py-7 flex-row items-center">
        <TouchableOpacity onPress={() => navigation.goBack()}>
          <ArrowNarrowLeftIconOutline
            size={26}
            color="#000"
            className="inline-block"
          />
        </TouchableOpacity>
        <Text className="ml-6 text-lg font-semibold">Pesan</Text>
      </View>
      <View
        className="flex-row"
        style={{
          borderBottomWidth: 1,
          borderBottomColor: "#ddd",
          paddingBottom: 10,
        }}
      >
        <TouchableOpacity
          onPress={() => setContentPage("notifikasi")}
          className="flex-1 relative"
        >
          <Text
            className={`text-center ${
              contentPage === "notifikasi" ? "text-blue-500" : "text-gray-500"
            } font-semibold`}
          >
            Notifikasi
          </Text>
          {contentPage === "notifikasi" && (
            <View className="absolute -bottom-3 rounded-t-lg w-full left-0 bg-blue-500 h-1"></View>
          )}
        </TouchableOpacity>
        <TouchableOpacity
          onPress={() => setContentPage("transaksi")}
          className="flex-1 relative"
        >
          <Text
            className={`text-center  font-semibold ${
              contentPage === "transaksi" ? "text-blue-500" : "text-gray-500"
            }`}
          >
            Status Transaksi
          </Text>
          {contentPage === "transaksi" && (
            <View className="absolute -bottom-3 rounded-t-lg w-full left-0 bg-blue-500 h-1"></View>
          )}
        </TouchableOpacity>
      </View>
      {contentPage === "notifikasi" ? (
        <FlatList
          data={dummyData}
          keyExtractor={(item) => item}
          renderItem={RenderItem}
          style={{ marginVertical: 5 }}
          showsVerticalScrollIndicator={false}
        />
      ) : (
        <TransactionStatus />
      )}
    </SafeAreaView>
  );
};

export default Message;
