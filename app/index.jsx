impo
import { Image, StyleSheet, Text, View } from 'react-native';
import { FokusButton } from '../components/FokusButton';

export default function Index() {
  return (<View style={styles.container}>
    <Image
      source={require('../assets/images/Fokus.png')}/>
    <View style={styles.inner}>
      <Text style={styles.title}>
        Organize sua mente{'\n'}  e se concentre{'\n'}
      </Text>
        <Text style={styles.bold}>
          concentre no que importa
        </Text>
      <Image source={require('../assets/images/iconHome.png')}/>
      <FokusButton tittle={"Quero iniciar"}/>
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
    gap: 40
  },
  inner: {
    gap: 16
  },
  title: {
    color: "#fff",
    textAlign: "center",
    fontSize: 26,
  },
  bold: {
    fontWeight: "bold"
  },
  footer: {
    width: "80%"
  },
  footerText: {
    color: "#fff",
    textAlign: "center",
    fontSize: 12.5
  },
    image: {
    width: width, 
    height: width
  }
})