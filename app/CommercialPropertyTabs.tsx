import { createMaterialTopTabNavigator } from "@react-navigation/material-top-tabs";
import BuyCommercialProp from "@/components/Investments/RealEstate/CommercialProperty";
import BuyPersonelProp from "@/components/Investments/RealEstate/PersonalProperty";

const Tab = createMaterialTopTabNavigator();

export default function CommercialPropertyTabs() {
  return (
    <Tab.Navigator>
      <Tab.Screen name="Owned" component={BuyCommercialProp} />
      <Tab.Screen name="Market" component={BuyCommercialProp} />
    </Tab.Navigator>
  );
}
