// import React, { useState, useEffect, useRef } from "react";
// import { View, Text, TextInput, TouchableOpacity, StyleSheet, Dimensions, ScrollView, Pressable } from "react-native";
// import MapView, { Marker, Polyline } from "react-native-maps";
// import * as Location from "expo-location";
// import BottomSheet from "@gorhom/bottom-sheet";
// import { GestureHandlerRootView } from 'react-native-gesture-handler'; // Import GestureHandlerRootView

// const { height } = Dimensions.get('window');

// interface SinglePlace {
//     latitude: number;
//     longitude: number;
// }

// interface AllPlaces {
//     fsq_id: string;
//     name: string;
// }

// export default function App() {
//     const [location, setLocation] = useState<null | any>(null);
//     const [errorMsg, setErrorMsg] = useState<null | string>(null);
//     const [search, setSearch] = useState("");
//     const [places, setPlaces] = useState<null | AllPlaces[]>(null);
//     const [singlesearchPlace, setsinglesearchPlace] = useState<null | SinglePlace>(null);
//     const [region, setRegion] = useState<any>(null);
//     const [direction, setDirection] = useState<boolean>(false);

//     const sheetRef = useRef(null);

//     useEffect(() => {
//         (async () => {
//             let { status } = await Location.requestForegroundPermissionsAsync();
//             if (status !== "granted") {
//                 setErrorMsg("Permission to access location was denied");
//                 return;
//             }

//             let location = await Location.getCurrentPositionAsync({});
//             setLocation(location);
//             setRegion({
//                 latitude: location.coords.latitude,
//                 longitude: location.coords.longitude,
//                 latitudeDelta: 0.005,
//                 longitudeDelta: 0.005,
//             });
//         })();
//     }, []);

//     const renderContent = () => (
//         <View style={styles.drawerContent}>
//             <ScrollView horizontal showsHorizontalScrollIndicator={false} style={styles.rideOptions}>
//                 {['Moto', 'Ride Mini', 'Ride A/C', 'Auto', 'City'].map((option, index) => (
//                     <TouchableOpacity key={index} style={styles.optionButton}>
//                         <Text style={styles.optionText}>{option}</Text>
//                     </TouchableOpacity>
//                 ))}
//             </ScrollView>
//             <TextInput style={styles.input1} placeholder="To" placeholderTextColor="#888" onFocus={() => sheetRef.current?.snapToIndex(0)} />
//             <TextInput style={styles.input1} placeholder="PKR Offer your fare" placeholderTextColor="#888" />
//             <TouchableOpacity style={styles.findDriverButton} onPress={() => sheetRef.current?.snapToIndex(0)}>
//                 <Text style={styles.findDriverText}>Find a driver</Text>
//             </TouchableOpacity>
//         </View>
//     );

//     return (
//         <GestureHandlerRootView style={{ flex: 1 }}>
//             <View style={styles.container}>
//                 {location && (
//                     <MapView
//                         region={region}
//                         onRegionChangeComplete={setRegion}
//                         style={styles.map}
//                     >
//                         <Marker coordinate={{ latitude: location.coords.latitude, longitude: location.coords.longitude }} title="You are here" />
//                         {singlesearchPlace && (
//                             <Marker coordinate={{ latitude: singlesearchPlace.latitude, longitude: singlesearchPlace.longitude }} title="Selected Place" pinColor="blue" />
//                         )}
//                         {singlesearchPlace && direction && (
//                             <Polyline coordinates={[{ latitude: location.coords.latitude, longitude: location.coords.longitude }, singlesearchPlace]} strokeWidth={4} strokeColor="blue" />
//                         )}
//                     </MapView>
//                 )}
//                 <BottomSheet
//                     ref={sheetRef}
//                     index={-1} // Initially closed
//                     snapPoints={["50%", "100%"]}
//                     enablePanDownToClose={true}
//                 >
//                     {renderContent()}
//                 </BottomSheet>
//             </View>
//         </GestureHandlerRootView>
//     );
// }

// const styles = StyleSheet.create({
//     container: { flex: 1, backgroundColor: "#f5f5f5" },
//     map: { width: "100%", height: "100%" },
//     drawerContent: { backgroundColor: 'white', padding: 20, height: 300 },
//     rideOptions: { flexDirection: 'row', marginBottom: 15 },
//     optionButton: { paddingHorizontal: 10, paddingVertical: 5, backgroundColor: '#f0f0f0', borderRadius: 8, marginHorizontal: 5 },
//     optionText: { fontSize: 14, color: '#333' },
//     input1: { height: 45, borderRadius: 8, borderWidth: 1, borderColor: '#ccc', paddingLeft: 10, marginVertical: 10, backgroundColor: '#f5f5f5' },
//     findDriverButton: { backgroundColor: '#32CD32', borderRadius: 8, paddingVertical: 15, alignItems: 'center', marginTop: 10 },
//     findDriverText: { color: '#fff', fontSize: 18, fontWeight: 'bold' },
// });
