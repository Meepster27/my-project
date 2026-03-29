import { View } from "react-native";
import Box from "./box";
import styles from "./styles";
export default function App() {
  return (
    <View style={styles.container}>
      <Box>#1</Box>
      <Box>#2</Box>
    </View>
  );
}
