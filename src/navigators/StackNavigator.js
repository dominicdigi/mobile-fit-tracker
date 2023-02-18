import { createStackNavigator } from '@react-navigation/stack';
import HomeScreen from '../components/dashboard/Dashboard';
import Login from '../components/login/Login';

const Stack = createStackNavigator();

export default function StackNavigator() {
  return (
    <Stack.Navigator
        initialRouteName="Login"
        screenOptions={{
            headerShown: false,
        }}
    >
    <Stack.Screen name="Home" component={HomeScreen} />
    <Stack.Screen name="Login" component={Login} />
    </Stack.Navigator>
  );
}