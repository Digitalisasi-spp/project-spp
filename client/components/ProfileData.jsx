import { TouchableOpacity, View, Text, TextInput } from "react-native";
import {
  PencilAltIcon as PencilAltIconOutline,
  XCircleIcon as XCircleIconOutline,
} from "react-native-heroicons/outline";
import { useState } from "react";

const ProfileData = ({ title, data, children }) => {
  const [showForm, setShowForm] = useState(false);

  return (
    <View className="mt-3">
      <Text className="font-medium mb-3">{title}</Text>
      {showForm ? (
        <View className="flex-1 flex-row border-b border-gray-300 pb-3">
          <View className="flex-1">
            <TextInput placeholder={`Enter your ${title}`} />
          </View>
          <TouchableOpacity onPress={() => setShowForm(false)}>
            <XCircleIconOutline size={21} color="#555" />
          </TouchableOpacity>
        </View>
      ) : (
        <View
          style={{ borderBottomWidth: 1, borderColor: "#ddd" }}
          className="flex-row justify-between items-center"
        >
          <View className="pb-2 flex-row flex-1">
            {children}
            <Text className="text-gray-400 ml-2">{data}</Text>
          </View>
          <TouchableOpacity onPress={() => setShowForm(!showForm)}>
            <PencilAltIconOutline size={21} color="#929292" />
          </TouchableOpacity>
        </View>
      )}
    </View>
  );
};

export default ProfileData;
