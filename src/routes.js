import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import Home from "./screens/Profile";
import Profile from "./screens/Home";
import { MaterialCommunityIcons } from "@expo/vector-icons";



const Tab = createBottomTabNavigator();

export default function Routes() {
    return(
        <Tab.Navigator screenOptions={{
            headerShown: false,
            tabBarShownLabel: false,
            tabBarActiveTinColor: "black",
            tabBarActiveTinColor: "gray",
        }}>
            
            <Tab.Screen options={{tabBarIcon: ({ color}) => (
                <MaterialCommunityIcons name="home" color={color} size={32}/>)}} name="Home" component={Home}/>
            <Tab.Screen options={{tabBarIcon: ({ color}) => (
                <MaterialCommunityIcons name="account" color={color} size={32} />)}} name="Profile" component={Profile}/>
        </Tab.Navigator>
    )
}