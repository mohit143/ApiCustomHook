import React from "react";
import {
  View,
  Text,
  StyleSheet,
  FlatList,
  ActivityIndicator
} from "react-native";

import requestHook from "./requestHook.js";

const [data, isLoading, error] = requestHook(
  "https://jsonplaceholder.typicode.com/users"
);

function App() {
  return (
    <View style={styles.app}>
      {isLoading && <ActivityIndicator style={styles.loader} size="large" />}
      {error && <Text style={styles.error}>Error: {error}</Text>}
      {!isLoading && (
        <FlatList
          data={data}
          renderItem={({ item }) => (
            <View style={styles.item}>
              <Text style={styles.title}>{item.name}</Text>
              <Text style={styles.body}>{item.email}</Text>
            </View>
          )}
        />
      )}
    </View>
  );
}

const styles = StyleSheet.create({
  app: {
    flex: 1
  },
  loader: {
    flex: 1,
    justifyContent: "center",
    alignContent: "center"
  },
  item: {
    backgroundColor: "#f9c2ff",
    padding: 20,
    marginVertical: 8,
    marginHorizontal: 16
  },
  title: {
    fontSize: 32
  },
  body: {
    fontSize: 20
  },
  error: {
    color: "red",
    fontSize: 20,
    textAlign: "center"
  }
});

export default App;
