import { createMaterialTopTabNavigator } from "@react-navigation/material-top-tabs";
import BuyPersonelProp from "@/components/Investments/RealEstate/PersonalProperty";
import OwnedPersonalProp from "@/components/Investments/RealEstate/PersonalProperty/owned";

const Tab = createMaterialTopTabNavigator();

export default function PersonalPropertyTabs() {
  return (
    <Tab.Navigator>
      <Tab.Screen name="Owned" component={OwnedPersonalProp} />
      <Tab.Screen name="Market" component={BuyPersonelProp} />
    </Tab.Navigator>
  );
}
