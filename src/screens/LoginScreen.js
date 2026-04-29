import {
  View,
  Text,
  TextInput,
  TouchableOpacity,
  StyleSheet,
  Alert,
  Platform,
  StatusBar,
  KeyboardAvoidingView
} from "react-native";
import React, { useState } from "react";
import { useAuth } from "../context/AuthContext";
import Feather from "@expo/vector-icons/Feather";
import FontAwesome from "@expo/vector-icons/FontAwesome";
import Ionicons from "@expo/vector-icons/Ionicons";
import { SafeAreaView } from "react-native-safe-area-context";
import { colors } from "../theme/colors";

const LoginScreen = () => {
  const { login } = useAuth();
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [secureTextEntry, setSecureTextEntry] = useState(true);

  const handleLogin = async () => {
    if (!email || !password) {
      Alert.alert("Error", "Please fill all fields");
      return;
    }

    const success = await login(email, password);

    if (!success) {
      Alert.alert("Email atau password salah");
    }
  };

  const handlePasswordChange = (val) => {
    setPassword(val);
  };

  const updateSecureTextEntry = () => {
    setSecureTextEntry(!secureTextEntry);
  };

  return (
    <SafeAreaView
      style={{
        flex: 1,
        backgroundColor: "#FDF6EC",
        padding: 24,
      }}
    >
      <StatusBar barStyle={"dark-content"} />
      <KeyboardAvoidingView
        behavior={Platform.OS === "ios" ? "padding" : undefined}
        style={{ flex: 1, backgroundColor: "#F8FAFC" }}
      >
        <View style={styles.container}>
          <View
            style={{
              flex: 2.5,
              justifyContent: "center",
            }}
          >
            <Text style={styles.title}>Mini LMS </Text>
            <Text
              style={{
                fontSize: 24,
                fontWeight: "700",
                color: "#0F172A",
              }}
            >
              Welcome Back 👋
            </Text>
            <Text
              style={{
                marginTop: 6,
                color: "#64748B",
                fontSize: 14,
                marginBottom: 30,
              }}
            >
              Continue your learning journey
            </Text>
            <Text
              style={[
                styles.text_footer,
                {
                  marginTop: 20,
                },
              ]}
            >
              Email
            </Text>
            <View style={styles.action}>
              <View style={styles.passContainer}>
                <View
                  style={{
                    alignItems: "center",
                    justifyContent: "center",
                    marginLeft: 10,
                  }}
                >
                  <Ionicons name="mail" color={colors.primary} size={23} />
                </View>
                <TextInput
                  autoCapitalize='none'
                  onChangeText={setEmail}
                  placeholder="Enter your email"
                  style={styles.textInput}
                  returnKeyType="done"
                  returnKeyLabel="Selesai"
                  value={email}
                  keyboardType="email-address"
                  placeholderTextColor={"grey"}
                />
              </View>
            </View>
            <Text
              style={[
                styles.text_footer,
                {
                  marginTop: 20,
                },
              ]}
            >
              Kata Sandi
            </Text>
            <View style={styles.action}>
              <View style={styles.passContainer}>
                <View
                  style={{
                    alignItems: "center",
                    justifyContent: "center",
                    marginLeft: 10,
                  }}
                >
                  <Ionicons name="lock-closed" color={colors.primary} size={23} />
                </View>
                <TextInput
                  autoCapitalize='none'
                  placeholder="Enter your password"
                  keyboardType="default"
                  style={styles.textInput}
                  secureTextEntry={secureTextEntry ? true : false}
                  onChangeText={(val) => handlePasswordChange(val)}
                  value={password}
                  placeholderTextColor={"grey"}
                  returnKeyType="done"
                  returnKeyLabel="Selesai"
                />
                <View
                  style={{
                    alignItems: "center",
                    justifyContent: "center",
                    marginRight: 5,
                  }}
                >
                  <TouchableOpacity
                    onPress={updateSecureTextEntry}
                    activeOpacity={1}
                    style={{
                      marginRight: 5
                    }}
                  >
                    {secureTextEntry ? (
                      <Ionicons name="eye-off-outline" color="grey" size={25} />
                    ) : (
                      <Ionicons name="eye-outline" color="grey" size={25} />
                    )}
                  </TouchableOpacity>
                </View>
              </View>
            </View>
          </View>

          <View style={styles.button}>
            <TouchableOpacity style={styles.btn} onPress={handleLogin}>
              <Ionicons name="log-in" size={24} color="white" />
              <View style={{ marginRight: 10 }} />
              <Text style={styles.btnText}>Login</Text>
            </TouchableOpacity>
          </View>

          {/* 🔑 DEMO INFO */}
          <View style={{ marginTop: 20 }}>
            <Text style={{ fontSize: 12, color: "#64748B" }}>
              Demo Account:
            </Text>
            <Text style={{ fontSize: 12, color: "#64748B" }}>
              test@test.com / 123456
            </Text>
          </View>
        </View>
      </KeyboardAvoidingView>
    </SafeAreaView>
  );
};

export default LoginScreen;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#FDF6EC",
    padding: 24,
  },
  title: { fontSize: 30, fontWeight: "700", marginBottom: 20 },
  text_footer: {
    color: colors.primary,
    // color: "red",
    fontSize: 16,
    fontWeight: "600",
    shadowColor: "#000",
    shadowOpacity: 0.5,
    shadowRadius: 10,
    shadowOffset: {
      height: 1,
      width: 1,
    },
    elevation: 3,
  },
  action: {
    flexDirection: "row",
    marginTop: 10,
    // borderBottomWidth: 2,
    // borderBottomColor: '#fff',
    paddingBottom: 5,
    alignItems: "center",
    justifyContent: "center",
    paddingLeft: 20,
    shadowColor: "#000",
    shadowOpacity: 0.2,
    shadowRadius: 10,
    shadowOffset: {
      height: 1,
      width: 1,
    },
    elevation: 3,
  },
  textInput: {
    flex: 1,
    marginTop: Platform.OS === "ios" ? 0 : 0,
    paddingLeft: 12,
    color: colors.primary,
    fontSize: 15,
    fontWeight: "bold",
  },
  button: {
    alignItems: "center",
    marginTop: 20,
    shadowColor: "#000",
    shadowOpacity: 0.35,
    shadowRadius: 10,
    shadowOffset: {
      height: 1,
      width: 1,
    },
    elevation: 3,
    flex: 1,
    justifyContent: "flex-end",
  },
  btn: {
    backgroundColor: colors.secondary,
    padding: 14,
    borderRadius: 10,
    width: "100%",
    paddingHorizontal: 15,
    paddingVertical: 16,
    borderWidth: 1,
    alignItems: "center",
    borderColor: colors.secondary,
    flexDirection: "row",
    justifyContent: "center",
    alignContent: "center",
  },
  btnText: { color: "#fff", textAlign: "center" },
  passContainer: {
    borderColor: "#fff",
    borderWidth: 4,
    width: 350,
    height: 50,
    alignItems: "center",
    justifyContent: "center",
    backgroundColor: "#fff",
    borderRadius: 15,
    marginRight: 20,
    flexDirection: "row",
  },
});
