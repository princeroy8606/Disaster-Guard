import React from 'react'
import { createNativeStackNavigator } from '@react-navigation/native-stack'
import Landing from '../../screens/auth/Landing'
import Login from '../../screens/auth/Login'

const PublicRoutes = () => {
  const Stack = createNativeStackNavigator()
  return (
    <Stack.Navigator
      initialRouteName='landing'
      screenOptions={{
        headerShown: false
      }}
    >
      <Stack.Screen name='landing' component={Landing} />
      <Stack.Screen name='login' component={Login} />
    </Stack.Navigator>
  )
}

export default PublicRoutes