import { NavigationContainer } from '@react-navigation/native'
import { createNativeStackNavigator } from '@react-navigation/native-stack'
import Home from './Screens/Home'
import Technology from './Screens/Technology'
import Manu from './Screens/Manu'
import Wellness from './Screens/Wellness'
import Community from './Screens/Community'
import Story from './Screens/Story'
import Language from './Screens/Language'
import { View, Text } from 'react-native'
import NavBar from './Components/NavBar'

const Stack = createNativeStackNavigator()

// TODO: Theme

export default function App() {
  return (
    <NavigationContainer>
      <View style={{ flex: 1 }}>
        <View
          style={{
            flex: 1,
            paddingTop: 50,
            paddingHorizontal: 10,
            backgroundColor: 'white',
          }}
        >
          <Stack.Navigator
            initialRouteName='Home'
            screenOptions={{ headerShown: false }}
          >
            <Stack.Screen name='Home' component={Home} />
            <Stack.Screen name='Technology' component={Technology} />
            <Stack.Screen name='Story' component={Story} />
            <Stack.Screen name='Wellness' component={Wellness} />
            <Stack.Screen name='Manu' component={Manu} />
            <Stack.Screen name='Community' component={Community} />
            <Stack.Screen name='Language' component={Language} />
          </Stack.Navigator>
        </View>
        <NavBar />
      </View>
    </NavigationContainer>
  )
}
