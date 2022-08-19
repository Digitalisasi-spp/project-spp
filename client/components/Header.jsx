import { View, Text, Image } from "react-native";

const Header = () => {
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

export default Header;
