import { NavigationContainer } from '@react-navigation/native'
import { createNativeStackNavigator } from '@react-navigation/native-stack'
import { DefaultTheme } from '@react-navigation/native'
import Home from './Screens/Home'
import { ThemeProvider } from './hooks/useTheme'
import Layout from './Components/Layout'
import components from './components'

const Stack = createNativeStackNavigator()

export default function App() {
  return (
    <NavigationContainer
      theme={{
        ...DefaultTheme,
        colors: {
          background: '#fff',
        },
      }}
    >
      <ThemeProvider>
        <Layout>
          <Stack.Navigator
            initialRouteName='Home'
            screenOptions={{ headerShown: false, gestureEnabled: false }}
          >
            <Stack.Screen name='Home' component={Home} />
            {components.map(({ name, component }) => {
              return (
                <Stack.Screen key={name} name={name} component={component} />
              )
            })}
          </Stack.Navigator>
        </Layout>
      </ThemeProvider>
    </NavigationContainer>
  )
}
