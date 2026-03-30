
import { StatusBar, View } from "react-native";
import Box from "./box";
import Column from "./column";
import Row from "./row";
import styles from "./styles";

export default function App() {
  return (
     <View style={styles.container}>
      <StatusBar hidden={false} />
      <Column>
        <Row><Box>#1</Box></Row>
        <Row><Box>#2</Box></Row>
        <Row><Box>#3</Box></Row>
        <Row><Box>#4</Box></Row>
        <Row><Box>#5</Box></Row>
        <Row><Box>#6</Box></Row>
        </Column>
      <Column>
        <Row><Box>#7</Box></Row>
        <Row><Box>#8</Box></Row>
        <Row><Box>#9</Box></Row>
        <Row><Box>#10</Box></Row>
        <Row><Box>#11</Box></Row>
        <Row><Box>#12</Box></Row>
      </Column>
    </View>
  );
}