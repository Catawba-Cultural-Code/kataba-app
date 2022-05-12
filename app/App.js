import { DefaultTheme } from '@react-navigation/native'
import Home from './Screens/Home'
import QR from './Screens/QR'
import { ThemeProvider } from './hooks/useTheme'
import Layout from './Components/Layout'
import components from './components'
import { ContentProvider } from './hooks/useContent'
import * as Linking from 'expo-linking'
import { NavigationContainer } from '@react-navigation/native'
import { createStackNavigator } from '@react-navigation/stack'
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs'
const Tab = createBottomTabNavigator()
const Stack = createStackNavigator()
const prefix = Linking.createURL('/')

export default function App() {
  const linking = {
    prefixes: [Linking.createURL('/'), 'https://kataba.app'],
    config: {
      screens: {
        Language: {
          initialRouteName: 'Dictionary',
          screens: {
            Dictionary: 'language/dictionary',
          },
        },
      },
    },
  }
  return (
    <NavigationContainer
      linking={linking}
      theme={{
        ...DefaultTheme,
        colors: {
          background: '#fff',
        },
      }}
    >
      <ContentProvider>
        <ThemeProvider>
          <Layout>
            <Stack.Navigator
              initialRouteName='Home'
              screenOptions={{ headerShown: false, gestureEnabled: false }}
            >
              <Stack.Screen name='Home' component={Home} />
              <Stack.Screen name='QR' component={QR} />
              {components.map(({ name, component }) => {
                return (
                  <Stack.Screen key={name} name={name} component={component} />
                )
              })}
            </Stack.Navigator>
          </Layout>
        </ThemeProvider>
      </ContentProvider>
    </NavigationContainer>
  )
}
