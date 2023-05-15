import React, { Component } from "react";
import { StyleSheet, View } from "react-native";
import MaterialButtonLight from "./components/MaterialButtonLight";

function Index(props) {
  return (
    <View style={styles.container}>
      <MaterialButtonLight
        style={styles.materialButtonLight}
      ></MaterialButtonLight>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    width: 100,
    height: 36
  },
  materialButtonLight: {
    height: 36,
    width: 100,
    shadowColor: "rgba(62,168,150,1)",
    shadowOffset: {
      width: 3,
      height: 3
    },
    elevation: 5,
    shadowOpacity: 1,
    shadowRadius: 0,
    backgroundColor: "rgba(80,175,136,1)"
  }
});

export default Index;
