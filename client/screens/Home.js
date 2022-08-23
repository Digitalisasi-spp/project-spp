import {
  FlatList,
  View,
  Text,
  SafeAreaView,
  StatusBar,
  Image,
  ScrollView,
  TouchableOpacity,
} from "react-native";
import { Header } from "../components";
import React from "react";
import {
  ClipboardListIcon as ClipboardListIconOutline,
  CameraIcon as CameraIconOutline,
  CreditCardIcon as CreditCardIconOutline,
  InformationCircleIcon as InformationCircleIconOutline,
} from "react-native-heroicons/outline";

const menuData = [
  {
    title: "Bukti",
    icon: <ClipboardListIconOutline size={32} color="#fff" />,
    page: "bukti",
  },
  {
    title: "Upload",
    icon: <CameraIconOutline size={32} color="#fff" />,
    page: "upload",
  },
  {
    title: "Bayar",
    icon: <CreditCardIconOutline size={32} color="#fff" />,
    page: "bayar",
  },
  {
    title: "Laporan",
    icon: <InformationCircleIconOutline size={32} color="#fff" />,
    page: "laporan",
  },
];

const Home = () => {
  const renderItem = ({ item }) => {
    return (
      <TouchableOpacity className="w-[22%] ">
        <View>
          <View className="py-4 bg-blue-dark rounded-md items-center justify-center">
            {item.icon}
          </View>
          <Text className="text-center text-xs font-semibold mt-2">
            {item.title}
          </Text>
        </View>
      </TouchableOpacity>
    );
  };

  return (
    <ScrollView
      vertical
      showsVerticalScrollIndicator={false}
      className="flex-1"
    >
      <StatusBar
        barStyle="light-content"
        backgroundColor="#107BD0"
        barStyle="light-content"
      />

      <View className="flex-1">
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
        <View className="px-7 mt-7">
          <Text className="text-lg font-bold text-sub-blue">
            Selamat Datang,
          </Text>
          <Text className="text-[23px] mt-1 font-bold text-blue-600">
            Angel Vanessa
          </Text>
        </View>
        <View className="px-5">
          <View className="mt-5 justify-center items-center border-2 rounded-xl border-red-200 bg-red-100 ">
            <Text className=" py-3 px-10 border-solid font-extrabold text-red-700 ">
              Spp Bulan September belum dibayar
            </Text>
          </View>
          <View className="py-2 px-5 mt-5 justify-center border-2 border-blue-400 bg-blue-100 rounded-xl">
            <Text className="mt-1 px-10 font-extrabold text-center">
              HARUS INGAT!!
            </Text>
            <Text className=" mt-1 font-semibold leading-3 text-center text-sm">
              SPP wajib dilunasi setiap bulan sebelum tanggal 15 dan menjelang
              ulangan umum / terima lapor. Jika mengalami kesulitan untuk
              pembayaran SPP dapat dikonsultasikan ke pihak sekolah.
            </Text>
          </View>
        </View>
        <View className="px-7 mt-7">
          <FlatList
            numColumns={4}
            columnWrapperStyle={{ justifyContent: "space-between" }}
            data={menuData}
            renderItem={renderItem}
          />
        </View>
        <View className="justify-center items-center mt-6">
          <Image
            source={require("../assets/images/page1.png")}
            className="object-cover"
          />
        </View>
      </View>
    </ScrollView>
  );
};

export default Home;
