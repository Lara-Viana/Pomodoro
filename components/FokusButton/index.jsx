import { Pressable, StyleSheet, Text } from "react-native";

export const FokusButton = ({onPress, title, icon}) => {
    return (
        <Pressable style={styles.button} onPress= {onPress}>
          {icon}
          <Text style={styles.buttonText}>
            {title}
          </Text>
        </Pressable>        
    )
}

const styles = StyleSheet.create({
  button : {
    borderRadius: 32,
    backgroundColor: "#b78affff",
    padding: 8,
    flexDirection: "row",
    gap: 12,
    alignItems: "center",
    justifyContent: "center"
  },
  buttonText : {
    textAlign: "center",
    color: '#fff',
    fontSize: 18
  }
})