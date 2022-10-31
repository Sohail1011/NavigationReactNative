import { useNavigation } from "@react-navigation/native";
import React from "react";
import { View, Text, StyleSheet, TouchableOpacity } from "react-native";

const HomeScreen = () => {

    const navigation = useNavigation();

    return (
        <View style={styles.containerCuztomed}>
            <Text style={{
                fontSize: 30,
                textAlign: "center",
                marginTop: "20%"
            }}
            >Home Screen</Text>
            <TouchableOpacity
                style={styles.buttonCuztomed}
                onPress={() => navigation.navigate("Stack")}>
                <Text style={styles.textCuztomed}>Go to Stack Screen</Text>
            </TouchableOpacity>
        </View>
    );
}
const styles = StyleSheet.create({
    containerCuztomed: {
        flex: 1
    },
    buttonCuztomed: {
        alignSelf: "center",
        backgroundColor: "black",
        padding: 10,
        width: '40%',
        marginTop: 30,
        borderRadius: 10,
        alignItems: "center"
    },
    textCuztomed: {
        color: 'white',
        fontSize: 15,
        fontWeight: 'bold'
    }
})

export default HomeScreen;