import React, { useEffect, useState } from "react";
import { View, StyleSheet, Text, ActivityIndicator } from "react-native";
import * as Location from "expo-location";
import { useIsFocused } from "@react-navigation/native";
import MapPreview from "./MapPreview";

const ShopLocation = (props) => {
  const [location, setLocation] = useState();
  const [loading, setLoading] = useState(true);
  const isFocused = useIsFocused();

  useEffect(async () => {
    let { status } = await Location.requestForegroundPermissionsAsync();
    if (status !== "granted") {
      setErrorMsg("Permission to access location was denied");
      return;
    }

    let userlocation = await Location.getCurrentPositionAsync({});
    // const parsedData = JSON.parse(location);
    console.log(userlocation.coords.latitude);
    setLocation(userlocation);
    setLoading(false);
  }, [isFocused]);

  return loading ? (
    <View style={styles.root}>
      <ActivityIndicator color={"blue"} size={20} />
    </View>
  ) : (
    <View style={{ width: "100%", height: 200 }}>
      <MapPreview
        location={{
          lat: location.coords.latitude,
          lng: location.coords.longitude,
        }}
      />
    </View>
  );
};

export default ShopLocation;

const styles = StyleSheet.create({
  root: {
    flex: 1,
    alignItems: "center",
    justifyContent: "center",
    width: "100%",
    height: "100%",
  },
});