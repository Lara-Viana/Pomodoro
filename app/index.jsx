import { useRouter } from 'expo-router';
import { Dimensions, Image, StyleSheet, Text, View } from 'react-native';
import { FokusButton } from '../components/FokusButton';

const { width } = Dimensions.get("window");

export default function Index() {
  const router = useRouter();

  return (<View style={styles.container}>
    <Image
      source={require('../assets/images/Fokus.png')} 
      />
    <View style={styles.inner}>
      <Text style={styles.title}>
        Organize sua mente{'\n'}  e se concentre{'\n'}
        <Text style={styles.bold}>
          no que importa
        </Text>
      </Text>
      <Image source={require('../assets/images/iconHome.png')}
      style={styles.image} resizeMode="contain"/>
      <FokusButton 
        title="Quero iniciar" 
          onPress={() => router.navigate('/pomodoro')}
      />
    </View>
    <View style={styles.footer}>
      <Text style= {styles.footerText}>
          Projeto fictício e sem fins comerciais.
      </Text>
      <Text style= {styles.footerText}>
        Desenvolvido durante as aulas da Alura.
      </Text>
    </View>

  </View>)
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: "center",
    justifyContent: "center",
    backgroundColor: "#fcd7faff",
    gap: 20
  },
  inner: {
    gap: 16
  },
  title: {
    color: "#fff",
    textAlign: "center",
    fontSize: 28
  },
  bold: {
    fontWeight: "bold",
  },
  footer: {
    width: "80%"
  },
  footerText: {
    color: "#915097ff",
    textAlign: "center",
    fontSize: 12.5
  },
  image: {
    width: width, 
    height: width
  }
})