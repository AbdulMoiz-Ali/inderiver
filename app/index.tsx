import React from "react";
import {
  View,
  Text,
  Image,
  TouchableOpacity,
  StyleSheet,
  ScrollView,
  Dimensions,
} from "react-native";

// Get the device dimensions
const { width, height } = Dimensions.get("window");

// Importing local images correctly


export default function App() {
  return (
    <View style={styles.container}>
      <Image source={require('@/assets/images/logo 1.jpg')} style={styles.logo} />

      {/* Image Slider */}
      <ScrollView
        horizontal
        pagingEnabled
        showsHorizontalScrollIndicator={false}
        style={styles.slider}
      >
        <View style={styles.imageContainer}>
          <Image source={require('@/assets/images/image1.jpg')} style={styles.sliderImage} />
        </View>

        <View style={styles.imageContainer}>
          <Image source={require('@/assets/images/image2.jpg')} style={styles.sliderImage} />
        </View>
      </ScrollView>

      <Text style={styles.title}>App where you set the price</Text>
      <Text style={styles.subtitle}>
        Find the best offers from drivers, passengers, and more
      </Text>
      <TouchableOpacity style={styles.phoneButton}>
        <Text style={styles.phoneButtonText}>Continue with phone</Text>
      </TouchableOpacity>
      <TouchableOpacity style={styles.googleButton}>
        <Image source={require('@/assets/images/Social_Icons.png')} style={styles.social} />
        <Text style={styles.googleButtonText}>Continue with Google</Text>
      </TouchableOpacity>
      <Text style={styles.footerText}>
        Joining our app means you agree with our{" "}
        <Text style={styles.link}>Terms of Use</Text> and{" "}
        <Text style={styles.link}>Privacy Policy</Text>
      </Text>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#ffffff",
    alignItems: "center",
    paddingHorizontal: 20,
    paddingTop: 50, // Add padding to the top for breathing room
  },
  logo: {
    width: 120,
    height: 50,
    marginBottom: 5,
    resizeMode: "contain",
  },
  social: {
    width: 30,
    height: 30,
    marginRight: 10,
  },
  slider: {
    width: width,
    height: height * 0.4,
    marginBottom: 20,
  },
  imageContainer: {
    width: width,  // Full-width for each slide
    justifyContent: "center",
    alignItems: "center",
    paddingHorizontal: 10,
  },
  sliderImage: {
    width: width * 0.8, // 80% of screen width
    height: height * 0.3, // Adjust height as needed
    resizeMode: "cover",
    borderRadius: 10, // Rounded corners for a modern look
  },
  title: {
    fontSize: 24,
    fontWeight: "bold",
    color: "#333",
    textAlign: "center",
  },
  subtitle: {
    fontSize: 16,
    color: "#666",
    textAlign: "center",
    marginTop: 10,
    marginBottom: 20,
  },
  phoneButton: {
    backgroundColor: "#c2f123",
    paddingVertical: 15,
    paddingHorizontal: 30,
    borderRadius: 8,
    marginBottom: 10,
    width: "100%",
    alignItems: "center",
  },
  phoneButtonText: {
    color: "#000",
    fontSize: 16,
    fontWeight: "bold",
  },
  googleButton: {
    backgroundColor: "#f1f1f1",
    paddingVertical: 15,
    paddingHorizontal: 30,
    borderRadius: 8,
    width: "100%",
    alignItems: "center",
    flexDirection:"row",
    justifyContent:"center"
  },
  googleButtonText: {
    color: "#333",
    fontSize: 16,
    fontWeight: "bold",
  },
  footerText: {
    fontSize: 12,
    color: "#666",
    textAlign: "center",
    marginTop: 20,
    lineHeight: 18,
  },
  link: {
    color: "#0000EE",
    textDecorationLine: "underline",
  },
});
