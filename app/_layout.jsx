import { Drawer } from 'expo-router/drawer';
import { GestureHandlerRootView } from 'react-native-gesture-handler';

export default function Layout() {
  return ( <GestureHandlerRootView style={{ flex: 1 }}>
    <Drawer 
      screenOptions={{
        headerStyle: {
          backgroundColor: '#a67ef0ff',
        },
        headerTintColor: '#fff',
        drawerStyle: {
          backgroundColor: '#a67ef0ff',
        },
        drawerLabelStyle: {
          color: "#fff"
        }
      }} 
    >
      <Drawer.Screen 
        name="index" 
        options={{ 
          headerShown: false,
          drawerItemStyle: {display: 'none'}
        }} 
      />
      <Drawer.Screen 
        name="add-task/index" 
        options={{ 
          drawerItemStyle: {display: 'none'}
        }} 
      />

      <Drawer.Screen 
        name="pomodoro" 
        options={{ 
          drawerLabel: 'Timer',
          title: ''
        }} 
      />
      <Drawer.Screen 
        name="tasks/index" 
        options={{ 
          drawerLabel: 'Lista de Tarefas',
          title: ''
        }} 
      />
    </Drawer>
  </GestureHandlerRootView>
  );
}