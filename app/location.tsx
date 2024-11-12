

import React from "react";
import {
  View,
  Text,
  Image,
  TouchableOpacity,
  StyleSheet,
  Dimensions,
} from "react-native";

// Get the device dimensions
const { width, height } = Dimensions.get("window");


export default function Index() {
  return (
    <View style={styles.container}>
      <Image source={require('@/assets/images/location.jpg')} style={styles.locationImage} />
      <View>
        <Text style={styles.title}>Turn your location on</Text>
        <Text style={styles.subtitle}>
          You’ll be able to find yourself on the map, and drivers will be able to find you at the pickup point
        </Text>
      </View>
      <View style={styles.buttom}>
        <TouchableOpacity style={styles.enableButton}>
          <Text style={styles.enableButtonText}>Enable location services</Text>
        </TouchableOpacity>
        <TouchableOpacity style={styles.skipButton}>
          <Text style={styles.skipButtonText}>Skip</Text>
        </TouchableOpacity>
      </View>

    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#ffffff",
    alignItems: "center",
    justifyContent: "space-around",
    paddingHorizontal: 20,
  },
  locationImage: {
    width: width * 10, // Adjust width as needed
    height: height * 0.4, // Adjust height as needed
    resizeMode: "contain",
    marginBottom: 20,
  },
  buttom:{
    width:"100%"
  },
  title: {
    fontSize: 24,
    fontWeight: "bold",
    color: "#333",
    textAlign: "center",
    marginBottom: 10,
  },
  subtitle: {
    fontSize: 16,
    color: "#666",
    textAlign: "center",
    marginBottom: 30,
    paddingHorizontal: 20,
  },
  enableButton: {
    backgroundColor: "#c2f123",
    paddingVertical: 15,
    paddingHorizontal: 30,
    borderRadius: 8,
    width: "100%",
    alignItems: "center",
    marginBottom: 10,
  },
  enableButtonText: {
    color: "#fff",
    fontSize: 16,
    fontWeight: "bold",
  },
  skipButton: {
    backgroundColor: "#f1f1f1",
    paddingVertical: 15,
    paddingHorizontal: 30,
    borderRadius: 8,
    width: "100%",
    alignItems: "center",
  },
  skipButtonText: {
    color: "#333",
    fontSize: 16,
    fontWeight: "bold",
  },
});
