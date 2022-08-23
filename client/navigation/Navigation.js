import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import { Home, Message, Profile } from "../screens";
import {
  HomeIcon as HomeIconOutline,
  DocumentTextIcon as DocumentTextIconOutline,
  UserIcon as UserIconOutline,
} from "react-native-heroicons/outline";

const Tab = createBottomTabNavigator();

const Tabs = () => {
  return (
    <Tab.Navigator
      screenOptions={{
        headerShown: false,
        tabBarStyle: {
          paddingVertical: 10,
          elevation: 20,
          borderTopWidth: 1,
          borderColor: "#101010",
        },
      }}
    >
      <Tab.Screen
        options={{
          tabBarIcon: ({ focused }) => {
            return (
              <HomeIconOutline
                size={25}
                color={focused ? "#0096FE" : "#636366"}
              />
            );
          },
        }}
        name="home"
        component={Home}
      />
      <Tab.Screen
        options={{
          tabBarIcon: ({ focused }) => {
            return (
              <DocumentTextIconOutline
                size={25}
                color={focused ? "#0096FE" : "#636366"}
              />
            );
          },
        }}
        name="pesan"
        component={Message}
      />
      <Tab.Screen
        options={{
          tabBarIcon: ({ focused }) => {
            return (
              <UserIconOutline
                size={25}
                color={focused ? "#0096FE" : "#636366"}
              />
            );
          },
        }}
        name="profile"
        component={Profile}
      />
    </Tab.Navigator>
  );
};

export default Tabs;
