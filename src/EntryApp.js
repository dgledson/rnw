import React from "react";
import { StyleSheet, Text, View } from "react-native";

import { Router, Route, Link } from "./components/react-router";

const Home = () => <Text>Home</Text>;

const About = () => <Text>About</Text>;

const App = () => (
  <Router>
    <View style={styles.container}>
      <View style={styles.nav}>
        <View style={styles.link}>
          <Link to="/">
            <Text style={styles.text}>Home</Text>
          </Link>
        </View>
        <View style={styles.link}>
          <Link to="/about">
            <Text style={styles.text}>About</Text>
          </Link>
        </View>
      </View>

      <Route exact path="/" component={Home} />
      <Route path="/about" component={About} />
    </View>
  </Router>
);

const styles = StyleSheet.create({
  container: {
    marginTop: 25,
    padding: 10
  },
  nav: {
    flexDirection: "row",
    justifyContent: "space-around"
  },
  link: {
    backgroundColor: "#3C4F76",
    padding: 8,
    width: "50%",
    alignItems: 'center',    
  },
  text: {
    fontSize: 20,
    textAlign: "center",
    color: "white"
  }
});

export default App;
