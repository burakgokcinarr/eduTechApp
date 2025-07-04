import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { Header } from '../components';
import { Onboarding, SignIn, SignUp } from '../screens/auth';
import { TabView, Detail } from '../screens/main';

const Stack = createNativeStackNavigator();

export default function Router() {

    const stackOption = {
        headerShown: false,
        gestureEnabled: false,
        headerBackVisible: false,
        headerShadowVisible: false,
        header: (props) => <Header {...props} />
    }

    return (
        <Stack.Navigator screenOptions={stackOption}>
            <Stack.Screen name="onboarding" component={Onboarding} />
            <Stack.Screen name="signin" component={SignIn} />
            <Stack.Screen name="signup" component={SignUp} options={ { title: "", headerShown: true }}/>
            <Stack.Screen name="home" component={TabView} />
            <Stack.Screen name="detail" component={Detail} options={{headerShown: true}}/>
        </Stack.Navigator>
    )
}