import { colors } from '@/colors';
import { globalStyles } from '@/styles/global';
import React, {useState} from 'react'
import { StyleSheet, View, Text, TextInput, TouchableOpacity } from 'react-native'
import Feather from "@expo/vector-icons/Feather";
import { Link, router } from 'expo-router';
import { UserData } from '@/types';
import * as SecureStore from 'expo-secure-store'
import useLogin from '../Queries/loginQuery';



function Login() {

  const {handleLogin, loading, data } = useLogin()  
  const [userData, setUserData] = useState<UserData>({
    email: '',
    password: '',
  });


  const handleChange = (name: string, text: string) => {
    setUserData((prev) => {
      return {
        ...prev,
        [name]: text
      }
    })
  }


  const handleSubmit = async () => {
    const res = await  handleLogin(userData)
    console.log(res)
    if (res.token) {
      router.replace('/(tabs)')
    }
  }

  



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
            placeholder="Email"
            style={[localStyles.input, globalStyles.shadow_small]}
            textContentType="emailAddress"
            onChangeText={(text) => handleChange("email", text)}
          />
          <TextInput
            placeholder="Password"
            secureTextEntry
            onChangeText={(text) => handleChange("password", text)}
            textContentType="password"
            returnKeyType="done"
            onSubmitEditing={handleSubmit}
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
            onPress={handleSubmit}
          >
            <Text style={localStyles.buttonText}>
              {loading ? "Loading" : "Login"}
            </Text>
            <Feather name="arrow-right" size={22} color="#FFFF" />
          </TouchableOpacity>
        </View>
        <View style={[globalStyles.flexRowContainer]}>
          <Text>Don't have an account? </Text>
          <Link href="/signup" style={{ textDecorationLine: "none" }} asChild>
            <TouchableOpacity>
              <Text
                style={[
                  localStyles.textColorPrimary,
                  globalStyles.fontWeightMedium,
                ]}
              >
                Signup
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
  }

});
export default Login