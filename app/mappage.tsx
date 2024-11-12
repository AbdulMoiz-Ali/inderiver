

import React from "react";
import { View, Text, Image, TouchableOpacity, StyleSheet, Dimensions } from "react-native";

// Get the device dimensions
const { width, height } = Dimensions.get("window");


export default function mappage() {
    return (
        <View style={styles.container}>
            <Image source={require('@/assets/images/map.jpg')} style={styles.locationImage} />
            <Text style={styles.message}>
                We can't find where you are. Probably we aren't represented in this city
            </Text>
            <TouchableOpacity style={styles.chooseButton}>
                <Text style={styles.chooseButtonText}>Choose another city</Text>
            </TouchableOpacity>
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
        marginTop: 30,
        width: width * 0.5, // Adjust width as needed
        height: height * 0.3, // Adjust height as needed
        resizeMode: "contain",
        marginBottom: 20,
    },
    message: {
        fontSize: 18,
        fontWeight: "bold",
        color: "#333",
        textAlign: "center",
        marginBottom: 30,
        paddingHorizontal: 20,
    },
    chooseButton: {
        backgroundColor: "#b4ed50",
        paddingVertical: 15,
        paddingHorizontal: 30,
        borderRadius: 8,
        width: "100%",
        alignItems: "center",
    },
    chooseButtonText: {
        color: "#fff",
        fontSize: 16,
        fontWeight: "bold",
    },
});
