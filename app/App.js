import { NavigationContainer } from '@react-navigation/native'
import { createNativeStackNavigator } from '@react-navigation/native-stack'
import Home from './Screens/Home'
import Technology from './Screens/Technology'
import Manu from './Screens/Manu'
import Wellness from './Screens/Wellness'
import Community from './Screens/Community'
import Story from './Screens/Story'
import Language from './Screens/Language'

const Stack = createNativeStackNavigator()
export default function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator>
        <Stack.Screen name='Home' component={Home} />
        <Stack.Screen name='Technology' component={Technology} />
        <Stack.Screen name='Story' component={Story} />
        <Stack.Screen name='Wellness' component={Wellness} />
        <Stack.Screen name='Manu' component={Manu} />
        <Stack.Screen name='Community' component={Community} />
        <Stack.Screen name='Language' component={Language} />
      </Stack.Navigator>
    </NavigationContainer>
  )
}
