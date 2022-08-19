import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import { TailwindProvider } from "tailwindcss-react-native";

import Tabs from "./navigation/Navigation";
import { Auth, Welcome, Home } from "./screens";

const Stack = createNativeStackNavigator();

export default function App() {
  return (
    <NavigationContainer>
      <TailwindProvider>
        <Stack.Navigator
          screenOptions={{
            headerShown: false,
          }}
          initialRouteName="welcome"
        >
          <Stack.Screen name="welcome" component={Welcome} />
          <Stack.Screen name="login" component={Auth} />
          <Stack.Screen name="home" component={Tabs} />
        </Stack.Navigator>
      </TailwindProvider>
    </NavigationContainer>
  );
}
