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
      <Drawer.Screen name="index" options={{ title: 'Início' }} />
      <Drawer.Screen name="pomodoro" options={{ title: 'Pomodoro' }} />
      <Drawer.Screen name="tasks/index" options={{ title: 'Tarefas' }} />
      <Drawer.Screen name="add-task/index" options={{ headerShown:false }} />
    </Drawer>
  </GestureHandlerRootView>
  );
}