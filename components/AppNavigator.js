import * as React from "react";
import { createStackNavigator } from "@react-navigation/stack";
import { NavigationContainer } from "@react-navigation/native"; // Wrap your navigator
import HomeScreen from "./HomeScreen.js"; // No need for {} when using default export
import ScheduleScreen from "./ScheduleScreen.js";
import PaymentScreen from "./PaymentScreen.js";
import SplashScreen from "./components/SplashScreen"; // Splash Screen component
import LandingPage from "./components/LandingPage"; // Import your Landing Page

const Stack = createStackNavigator();

export const AppNavigator = () => {
  return (
    <NavigationContainer>
      <Stack.Navigator screenOptions={{ headerShown: false }}>
        {/* Splash Screen */}
        <Stack.Screen name="SplashScreen" component={SplashScreen} />
        {/* Landing Page (Login/Sign-Up) */}
        <Stack.Screen name="LandingPage" component={LandingPage} />
        {/* Other Screens */}
        <Stack.Screen name="Home" component={HomeScreen} />
        <Stack.Screen name="Schedule" component={ScheduleScreen} />
        <Stack.Screen name="Payment" component={PaymentScreen} />
      </Stack.Navigator>
    </NavigationContainer>
  );
};
