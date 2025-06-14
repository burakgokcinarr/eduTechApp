import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { Feather, Ionicons, AntDesign, Entypo } from '@expo/vector-icons';
import Course from './Course';
import Profile from './Profile';
import Settings from './Settings';
import { Colors, Font } from '../../../constants';

const Tab = createBottomTabNavigator();

export default function TabView() {

  return (
    <Tab.Navigator
      screenOptions={({ route }) => ({
        tabBarIcon: ({ focused, color, size }) => {

          if (route.name === 'Course') {
            return <Feather name="book" size={size} color={color} />;
          } else if (route.name === 'Profile') {
            return <Entypo name="user" size={size} color={color} />;
          } else if (route.name === 'Settings') {
            return <Ionicons name="settings" size={size} color={color} />;
          }
        },
        tabBarActiveTintColor: 'tomato',
        tabBarInactiveTintColor: Colors.COLOR_3,
        tabBarLabelStyle: {
          fontSize: 13,
          fontFamily: Font.medium,
        },
        tabBarStyle: {
          borderTopRightRadius: 16,
          borderTopLeftRadius: 16
        },
      })}
    >
      <Tab.Screen name="Course" component={Course} />
      <Tab.Screen name="Profile" component={Profile} />
      <Tab.Screen name="Settings" component={Settings} />
    </Tab.Navigator>
  );
}