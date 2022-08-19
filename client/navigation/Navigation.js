import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import { Home } from "../screens";
import { HomeIcon as HomeIconOutline } from "react-native-heroicons/outline";

const Tab = createBottomTabNavigator();

const Tabs = () => {
  return (
    <Tab.Navigator
      screenOptions={{
        headerShown: false,
      }}
    >
      <Tab.Screen name="home" component={Home} />
      <Tab.Screen name="message" />
      <Tab.Screen name="profile" />
    </Tab.Navigator>
  );
};

export default Tabs;
