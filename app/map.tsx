import React, { useState, useEffect } from "react";
import {
  View,
  Text,
  TextInput,
  TouchableOpacity,
  FlatList,
  StyleSheet,
} from "react-native";
import MapView, { Marker, Polyline } from "react-native-maps";
import * as Location from "expo-location";

interface SinglePlace {
  latitude: number;
  longitude: number;
}

interface AllPlaces {
  fsq_id: string;
  name: string;
}

export default function App() {
  const [location, setLocation] = useState<null | any>(null);
  const [errorMsg, setErrorMsg] = useState<null | string>(null);
  const [search, setSearch] = useState("");
  const [places, setPlaces] = useState<null | AllPlaces[]>(null);
  const [singlesearchPlace, setsinglesearchPlace] =
    useState<null | SinglePlace>(null);
  const [region, setRegion] = useState<any>(null);
  const [direction, setDirection] = useState<boolean>(false);

  useEffect(() => {
    (async () => {
      let { status } = await Location.requestForegroundPermissionsAsync();
      if (status !== "granted") {
        setErrorMsg("Permission to access location was denied");
        return;
      }

      let location = await Location.getCurrentPositionAsync({});
      setLocation(location);
      setRegion({
        latitude: location.coords.latitude,
        longitude: location.coords.longitude,
        latitudeDelta: 0.005,
        longitudeDelta: 0.005,
      });
    })();
  }, []);

  const calculateCurvePoints = () => {
    if (!location || !singlesearchPlace) return [];

    const start = {
      latitude: location.coords.latitude,
      longitude: location.coords.longitude,
    };
    const end = {
      latitude: singlesearchPlace.latitude,
      longitude: singlesearchPlace.longitude,
    };

    const midPoint = {
      latitude: (start.latitude + end.latitude) / 2 + 0.0005,
      longitude: (start.longitude + end.longitude) / 2,
    };

    return [start, midPoint, end];
  };

  const searchPlaces = () => {
    const options = {
      method: "GET",
      headers: {
        accept: "application/json",
        Authorization: "fsq3ZaiQsXUuvFyXJda0umkDqzk+8pCYzoEqLI+kmm01dT4=",
      },
    };

    fetch(
      `https://api.foursquare.com/v3/places/search?query=${search}&ll=${location.coords.latitude}%2C${location.coords.longitude}&radius=100000`,
      options
    )
      .then((res) => res.json())
      .then((res) => {
        setPlaces(res.results);
      })
      .catch((err) => console.error(err));
  };

  const singlePlace = (item: any) => {
    setPlaces(null);
    setsinglesearchPlace({
      latitude: item.geocodes.main.latitude,
      longitude: item.geocodes.main.longitude,
    });
    setRegion({
      latitude: item.geocodes.main.latitude,
      longitude: item.geocodes.main.longitude,
      latitudeDelta: 0.005,
      longitudeDelta: 0.005,
    });
  };

  return (
    <View style={styles.container}>
      {/* <Text style={styles.header}>We couldn't find you on the map</Text> */}
      {/* <TextInput
        style={styles.input}
        onChangeText={setSearch}
        value={search}
        placeholder="Search for places..."
        placeholderTextColor="#888"
      />
      <TouchableOpacity onPress={searchPlaces} style={styles.button}>
        <Text style={styles.buttonText}>Search</Text>
      </TouchableOpacity> */}
      {/* {places && (
        <FlatList
          data={places}
          renderItem={({ item }: { item: { name: string } }) => (
            <TouchableOpacity
              style={styles.listItem}
              onPress={() => singlePlace(item)}
            >
              <Text style={styles.listText}>{item.name}</Text>
            </TouchableOpacity>
          )}
          keyExtractor={(item: { fsq_id: string }) => item.fsq_id}
          style={styles.list}
        />
      )} */}
      {location && (
        <MapView
          region={region}
          onRegionChangeComplete={setRegion}
          style={styles.map}
        >
          <Marker
            coordinate={{
              latitude: location.coords.latitude,
              longitude: location.coords.longitude,
            }}
            title="You are here"
          />
          {singlesearchPlace && (
            <Marker
              coordinate={{
                latitude: singlesearchPlace.latitude,
                longitude: singlesearchPlace.longitude,
              }}
              title="Selected Place"
              pinColor="blue"
            />
          )}
          {singlesearchPlace && direction && (
            <Polyline
              coordinates={calculateCurvePoints()}
              strokeWidth={4}
              strokeColor="blue"
            />
          )}
        </MapView>
      )}
      {/* <TouchableOpacity
        onPress={() => setDirection(!direction)}
        style={styles.directionButton}
      >
        <Text style={styles.directionButtonText}>Show Direction</Text>
      </TouchableOpacity> */}
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#f5f5f5",
  },
  header: {
    fontSize: 16,
    color: "#FFA500",
    textAlign: "center",
    marginVertical: 10,
  },
  map: {
    width: "100%",
    height: "100%",
  },
  input: {
    height: 45,
    width: "100%",
    borderRadius: 8,
    borderWidth: 1,
    borderColor: "#ccc",
    paddingLeft: 15,
    marginBottom: 10,
    fontSize: 16,
    backgroundColor: "#fff",
  },
  button: {
    backgroundColor: "#1E90FF",
    borderRadius: 8,
    paddingVertical: 10,
    alignItems: "center",
    marginBottom: 15,
  },
  buttonText: {
    color: "#fff",
    fontSize: 16,
    fontWeight: "600",
  },
  list: {
    marginBottom: 15,
  },
  listItem: {
    padding: 12,
    borderRadius: 8,
    backgroundColor: "#ffffff",
    marginBottom: 10,
    shadowColor: "#000",
    shadowOffset: { width: 0, height: 1 },
    shadowOpacity: 0.3,
    shadowRadius: 2,
    elevation: 2,
  },
  listText: {
    fontSize: 16,
    color: "#333",
  },
  directionButton: {
    backgroundColor: "#32CD32",
    borderRadius: 8,
    paddingVertical: 10,
    alignItems: "center",
    marginTop: 10,
  },
  directionButtonText: {
    color: "#fff",
    fontSize: 16,
    fontWeight: "600",
  },
});
