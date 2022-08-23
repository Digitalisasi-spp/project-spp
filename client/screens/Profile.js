import { View, Text, Image, ScrollView, TouchableOpacity } from "react-native";
import React from "react";
import {
  UserCircleIcon as UserCircleIconOutline,
  MailIcon as MailIconOutline,
  DeviceMobileIcon as DeviceMobileIconOutline,
  LocationMarkerIcon as LocationMarkerIconOutline,
  LogoutIcon as LogoutIconOutline,
} from "react-native-heroicons/outline";
import { ProfileData, Modal } from "../components";

const Profile = () => {
  const [visible, setVisible] = React.useState(false);

  return (
    <ScrollView
      showsVerticalScrollIndicator={false}
      className="relative bg-white flex-1"
    >
      <Modal visible={visible} setVisible={setVisible} />
      <View className="bg-blue-dark h-[200px] px-5 flex-row  items-center"></View>

      <View
        style={{ elevation: 10 }}
        className="bg-white w-[330px] absolute top-[80px] left-[11%]  rounded-lg"
      >
        <Image
          source={require("../assets/images/testprofile.png")}
          className="w-[120px] h-[120px] rounded-full border-white -top-[60px] absolute left-[32%]"
        />
        <View className="mt-[75px]">
          <Text className="text-center text-[22px] font-bold">
            Chintya Fernanda Elysia
          </Text>
          <Text className="text-center text-xs font-medium text-gray-400 mt-2">
            Kelas 12
          </Text>
          <Text className="text-center text-xs font-medium text-gray-400 mt-1">
            Jurusan Teknik Komputer dan Jaringan
          </Text>
          <Text className="text-center text-xs font-medium text-gray-400 mb-5 mt-1">
            Tahun Ajaran 2022/2023
          </Text>
        </View>
      </View>
      <View className="mt-[120px] text-lg px-8">
        <View>
          <Text className="font-medium mb-3">Nis Siswa</Text>
          <View
            style={{ borderBottomWidth: 1, borderColor: "#ddd" }}
            className="pb-2 flex-row "
          >
            <UserCircleIconOutline size={24} color="#555" />
            <Text className="text-gray-400 ml-2">6988</Text>
          </View>
        </View>
        <ProfileData title="Email siswa" data="wendi@gmail.com">
          <MailIconOutline size={24} color="#555" />
        </ProfileData>
        <ProfileData title="No HP siswa" data="0895-3876-14518">
          <DeviceMobileIconOutline size={24} color="#555" />
        </ProfileData>
        <ProfileData title="Alamat rumah" data="Jalan Pramuka,Pontianak">
          <LocationMarkerIconOutline size={24} color="#555" />
        </ProfileData>
      </View>
      <View className="px-8 mt-4">
        <Text className="font-medium mb-3">Kartu Pelajar</Text>
        <Image
          className="w-full rounded-lg h-[180px] object-cover"
          resizeMode="stretch"
          source={require("../assets/images/testkp.png")}
        />
        <TouchableOpacity
          onPress={() => setVisible(true)}
          className="flex-row items-center my-4"
        >
          <LogoutIconOutline size={28} color="#007ADC" />
          <Text className="ml-2 text-[#007ADC]">Log out</Text>
        </TouchableOpacity>
      </View>
    </ScrollView>
  );
};

export default Profile;
