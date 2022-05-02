import { NavigationContainer } from '@react-navigation/native'
import { createNativeStackNavigator } from '@react-navigation/native-stack'
import { DefaultTheme } from '@react-navigation/native'
import Home from './Screens/Home'
import QR from './Screens/QR'
import { ThemeProvider } from './hooks/useTheme'
import Layout from './Components/Layout'
import components from './components'
import { ContentProvider } from './hooks/useContent'

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
