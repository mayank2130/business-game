import { createMaterialTopTabNavigator } from "@react-navigation/material-top-tabs";
import StockMarket from "@/components/Investments/Stocks";
import RealEstate from "@/components/Investments/RealEstate";
import Crypto from "@/components/Investments/Crypto";

const Tab = createMaterialTopTabNavigator();

export default function InvestmentTabs() {
  return (
    <Tab.Navigator>
      <Tab.Screen name="Stock Market" component={StockMarket} />
      <Tab.Screen name="Real Estate" component={RealEstate} />
      <Tab.Screen name="Crypto" component={Crypto} />
    </Tab.Navigator>
  );
}
