import { createStackNavigator } from '@react-navigation/stack';
import HomeScreen from '../components/Dashboard/Dashboard';
import Login from '../components/Login/Login';
import WorkoutDetail from '../components/WorkoutDetail/WorkoutDetail';

const Stack = createStackNavigator();

export default function StackNavigator() {
  return (
    <Stack.Navigator
        initialRouteName="Login" // should be Login, testing with home for now
        screenOptions={{
            headerShown: false,
        }}
    >
    <Stack.Screen name="Home" component={HomeScreen} />
    <Stack.Screen name="Login" component={Login} />
    <Stack.Screen name="WorkoutDetail" component={WorkoutDetail} />
    </Stack.Navigator>
  );
}