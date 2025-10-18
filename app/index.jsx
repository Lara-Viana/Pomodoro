import { useRef, useState } from "react";
import { Dimensions, Image, StyleSheet, Text, View } from "react-native";
import { ActionButton } from "../components/ActionButton";
import { FokusButton } from "../components/FokusButton";
import { PauseIcon, PlayIcon } from "../components/Icons";
import { Timer } from "../components/Timer";

const pomodoro = [
  {
    id: 'focus',
    initialValue: 25*60,
    image: require("./Pomodoro.png"),
    display: 'Foco',
    color: '#efb5f7ff'
  },
  {
    id: 'short',
    initialValue: 5*60,
    image: require("./Short.png"),
    display: 'Pausa Curta',
    color: '#a67ef0ff'
  },
  {
    id: 'long',
    initialValue: 15*60,
    image: require("./Long.png"),
    display: 'Pausa Longa',
    color: '#fc7bcaff'
  }
]
const { width } = Dimensions.get("window");

export default function Index() {

  const [timerType, setTimerType] = useState(pomodoro[0])
  const[timerRunning, setTimerRunning] = useState(false)
  const[seconds, setSeconds] = useState(pomodoro[0].initialValue)
  
  const timerRef = useRef(null)

  const clear = () => {
    if (timerRef.current != null) {
      clearInterval(timerRef.current)
      timerRef.current = null
      setTimerRunning (false)
    }
  }

  const toggleTimerType = (newTimerType) => {
    setTimerType(newTimerType)
    setSeconds(newTimerType.initialValue)
    clear()
  }

  const toggleTimer = () => {
    if (timerRef.current) {
      clear()
      return
    }

    setTimerRunning(true)
    
    const id = setInterval(() => { 
      setSeconds(oldState => {
        if (oldState === 0) {
          clear()
          return timerType.initialValue
        }
        return oldState - 1
      })
    }, 1000);
    timerRef.current = id
  }

  return (
    <View
      style={[styles.container, { backgroundColor: timerType.color }]} //muda a cor do background conforme o timer selecionado
    >
      <Image source={timerType.image} style={styles.image} resizeMode="contain" />
      <View style={styles.actions}>
        <View style={styles.context}> 
          {pomodoro.map(p => (
            <ActionButton
              key={p.id}
              active={ timerType.id == p.id}
              onPress= {() => toggleTimerType(p)}
              display={p.display}
            />
          ))} 
        </View>
        <Timer totalSeconds={seconds}/>
        <FokusButton 
          title={timerRunning ? "Pausar" : "Começar"}
          icon={timerRunning ? <PauseIcon/> : <PlayIcon/>}
          onPress={toggleTimer}
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
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: "center",
    justifyContent: "center",
    gap: 40
  },
  actions: { 
    padding: 24,
    backgroundColor: "#f8eaabff",
    width: "80%",
    borderRadius: 32, 
    borderWidth: 2,
    borderColor: "#fad46cff",
    gap: 32
  },
  context: {
    flexDirection: "row",
    justifyContent: "space-around",
    alignItems: "center",
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
