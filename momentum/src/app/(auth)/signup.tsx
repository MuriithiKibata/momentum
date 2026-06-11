import { colors } from "@/colors";
import { globalStyles } from "@/styles/global";
import React from "react";
import {
  StyleSheet,
  View,
  Text,
  TextInput,
  TouchableOpacity,
} from "react-native";
import Feather from "@expo/vector-icons/Feather";
import { Link } from "expo-router";
function Signup() {
  return (
    <View style={[localStyles.centering, localStyles.mainContainer]}>
      <View
        style={[
          localStyles.centering,
          localStyles.container,
          localStyles.containerWidth,
          globalStyles.shadow_small,
        ]}
      >
        <Text
          style={[
            globalStyles.title,
            localStyles.textColorPrimary,
            globalStyles.textLarge,
          ]}
        >
          ZenTask
        </Text>
        <Text
          style={[
            globalStyles.font,
            globalStyles.fontWeightMedium,
            localStyles.textColorGray,
          ]}
        >
          Your personal task manager.
        </Text>
        <View
          style={[
            localStyles.centering,
            localStyles.containerWidth,
            localStyles.inputContainer,
          ]}
        >
          <TextInput
            placeholder="Full Name"
            style={[localStyles.input, globalStyles.shadow_small]}
          />
          <TextInput
            placeholder="Email"
            style={[localStyles.input, globalStyles.shadow_small]}
          />
          <TextInput
            placeholder="Password"
            secureTextEntry
            style={[localStyles.input, globalStyles.shadow_small]}
          />
          <TouchableOpacity
            style={{
              display: "flex",
              alignSelf: "flex-end",
              marginHorizontal: 35,
            }}
          >
            <Text
              style={[
                localStyles.textColorPrimary,
                globalStyles.fontWeightMedium,
              ]}
            >
              Forgot Password?
            </Text>
          </TouchableOpacity>
          <TouchableOpacity
            style={[globalStyles.shadow, localStyles.button]}
            onPress={() => {}}
          >
            <Text style={localStyles.buttonText}>Signup</Text>
            <Feather name="arrow-right" size={22} color="#FFFF" />
          </TouchableOpacity>
        </View>
        <View style={[globalStyles.flexRowContainer]}>
          <Text>Have an account? </Text>
          <Link href="/login" style={{ textDecorationLine: "none" }} asChild>
          <TouchableOpacity>
            <Text
              style={[
                localStyles.textColorPrimary,
                globalStyles.fontWeightMedium,
              ]}
            >
             Login
            </Text>
          </TouchableOpacity>
          </Link>
        </View>
      </View>
    </View>
  );
}

const localStyles = StyleSheet.create({
  containerWidth: {
    width: "90%",
  },

  centering: {
    display: "flex",
    alignItems: "center",
  },

  container: {
    paddingTop: 50,
    borderRadius: 20,
    paddingVertical: 10,
    height: "90%",
  },

  mainContainer: {
    marginTop: 80,
  },

  inputContainer: {
    display: "flex",
    gap: 20,
    width: "100%",
    marginTop: 20,
  },

  textColorPrimary: {
    color: colors.primary,
  },

  textColorGray: {
    color: colors.lightgray,
  },

  input: {
    borderRadius: 5,
    borderBottomWidth: 1,
    borderColor: colors.gray,
    width: "90%",
    padding: 10,
    backgroundColor: "#F0F0F0",
  },

  button: {
    marginTop: 10,
    marginBottom: 20,
    backgroundColor: colors.primary,
    padding: 10,
    borderRadius: 10,
    width: "90%",
    display: "flex",
    flexDirection: "row",
    justifyContent: "center",
    alignItems: "center",
    gap: 10,
    fontSize: 76,
  },

  buttonText: {
    color: "#FFFF",
    fontSize: 16,
    fontWeight: "bold",
  },
});
export default Signup;
