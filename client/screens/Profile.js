import {
  View,
  Text,
  Image,
  ScrollView,
  TouchableOpacity,
  SafeAreaView,
} from "react-native";
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
    <SafeAreaView className="flex-1 bg-blue-dark">
      <Modal visible={visible} setVisible={setVisible} />
      <View
        style={{ zIndex: 999 }}
        className="w-full flex-col absolute items-center top-14 justify-center"
      >
        <Image
          source={require("../assets/images/testprofile.png")}
          className="w-[130px] h-[130px]"
        />
      </View>
      <ScrollView className="bg-white flex-1 mt-[130px]  rounded-t-[40px]">
        <View className="mt-16 items-center">
          <Text className="text-2xl font-bold">Eireinei Fangidae</Text>
          <Text className="text-[14px] text-gray-400 mt-2">Kelas 12</Text>
          <Text className="text-[14px] text-gray-400 mt-1">
            Jurusan Teknik Komputer Jaringan
          </Text>
          <Text className="text-[14px] text-gray-400 mt-1">
            Tahun Ajaran 2020/2023
          </Text>
        </View>
        <View className="w-full mt-7">
          <ProfileData title="Nis Siswa" data="6915">
            <UserCircleIconOutline size={25} color="#555" />
          </ProfileData>
          <ProfileData title="Email" data="wendi.6915@ski.sch.id">
            <MailIconOutline size={25} color="#555" />
          </ProfileData>
          <ProfileData title="No Hp" data="8953-8761-4518">
            <DeviceMobileIconOutline size={25} color="#555" />
          </ProfileData>
          <ProfileData title="Alamat" data="Jalan Pramuka,Pontianak">
            <LocationMarkerIconOutline size={25} color="#555" />
          </ProfileData>
        </View>
        <View className="mt-7 px-7">
          <Text className="text-md font-bold">Kartu Pelajar</Text>
          <Image
            source={require("../assets/images/testkp.png")}
            className="w-full h-[170px] mt-5 rounded-md"
            resizeMode="cover"
          />
        </View>
        <TouchableOpacity
          className="flex-row items-center px-7 py-5 "
          onPress={() => setVisible(true)}
        >
          <LogoutIconOutline size={28} color="#107BD0" />
          <Text className="text-md ml-2 font-semibold text-[#107BD0]">
            Logout
          </Text>
        </TouchableOpacity>
      </ScrollView>
    </SafeAreaView>
  );
};

export default Profile;
