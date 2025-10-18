import { Pressable, StyleSheet, Text } from "react-native";

export const ActionButton = ({active, onPress, display}) => {
    return (
        <Pressable
          style={active ? styles.contextButtonActive : null}
          onPress={onPress}
        >
          
          <Text style={styles.contextButtonText}>
            {display}
          </Text>
        </Pressable>
)}

const styles = StyleSheet.create({
  contextButtonText: {
    fontSize: 14,
    fontWeight: "bold",
    color: "#FFF", 
    padding: 8
  },
  contextButtonActive: {
    backgroundColor: "#fa9aedff",
    fontSize: 12.5,
    color: "#FFF", 
    padding: 8,
    borderRadius: 8
  }
})