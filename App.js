
import { createStackNavigator } from '@react-navigation/stack';
import { NavigationContainer } from '@react-navigation/native';
import Getstarted from './screens/Getstarted';
import Home from './screens/Home';
import Screen1 from './screens/Screen1';
import Screen2 from './screens/Screen2';
import Screen3 from './screens/Screen3';
import Screen4 from './screens/Screen4';
import Screen5 from './screens/Screen5';
import FlatList from './screens/Flatlist';
import WebView from './screens/WebView';
import Video from './screens/Video';
import ViewPager from './screens/ViewPager';
import Svg from './screens/SVG';
const Stack = createStackNavigator();

export default function App() {
  return (
   
    <NavigationContainer>
    <Stack.Navigator screenOptions={{ headerShown: false}}>
    <Stack.Screen
      name="GetStarted"
      component={Getstarted}
      options={{
        title: 'WELCOME',
        headerTitleAlign: 'center', 
      }}
    />
      <Stack.Screen name="Home" component={Home}  options={{
        title: 'MAIN MENU',
        headerTitleAlign: 'center', 
      }}/>
      <Stack.Screen name="Screen1" component={Screen1} />
      <Stack.Screen name="Screen2" component={Screen2} />
      <Stack.Screen name="Screen3" component={Screen3} />
      <Stack.Screen name="Screen4" component={Screen4} />
      <Stack.Screen name="Screen5" component={Screen5} />
      <Stack.Screen name="Web" component={WebView} />
      <Stack.Screen name="FlatList" component={FlatList} />
      <Stack.Screen name="Video" component={Video} />
      <Stack.Screen name="View" component={ViewPager} />
      <Stack.Screen name="Svg" component={Svg} />
    </Stack.Navigator>
    </NavigationContainer>
   
  );
}


