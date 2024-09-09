import { createMaterialTopTabNavigator } from "@react-navigation/material-top-tabs";
import HomeScreen from "@/components/Business/Home";
import BusinessScreen from "@/components/Business/BusinessScreen";
import RelationsScreen from "@/components/Business/RelationsScreen";

const Tab = createMaterialTopTabNavigator();

export default function BusinessTabs() {
  return (
      <Tab.Navigator>
        <Tab.Screen name="Home" component={HomeScreen} />
        <Tab.Screen name="Capital" component={BusinessScreen} />
        <Tab.Screen name="Relations" component={RelationsScreen} />
      </Tab.Navigator>
  );
}
