import React, { useState } from "react";
import { Button, StyleSheet, Text, View } from "react-native";

const App = () => {
  const [count, setCount] = useState(0);
  return (
    <View style={styles.MainContainer}>
      <h1 style={{ color: "#FF00FF" }}>React Native Counter App</h1>
      <h2 style={{ color: "green" }}>Counter : {count}</h2>
      <View style={styles.container}>
        <Button
          title="Count(+)"
          onPress={() => setCount((count) => count + 1)}
          // style = { styles.button }
        />
        {/* <Separator /> */}
        <Button
          title="Reset"
          color="#f194ff"
          onPress={() => setCount(0)}
          // style = { styles.button }
        />
        <Button
          title="Count(-)"
          color="red"
          onPress={() => setCount((count) => count - 1)}
          // style = { styles.button }
        />
      </View>
    </View>
  );
};

export default App;

const styles = StyleSheet.create({
  MainContainer: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center"
  },
  container: {
    // flex: 1,
    flexDirection: "row"
    // justifyContent: 'space-between'
  }
  // button: {
  //   backgroundColor: 'green',
  //   width: 40,
  //   height: 40
  // }
});
