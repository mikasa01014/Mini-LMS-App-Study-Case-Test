import { View, Text } from "react-native";
import React from "react";
import { useLesson } from "../context/LessonContext";
import { useAuth } from "../context/AuthContext";
import { courses } from "../data/courses";
import AnimatedPressable from "../components/AnimatedPressable";

const ProgressScreen = () => {
  const { complete } = useLesson();
  const { logout } = useAuth();

  const total = courses.reduce((a, b) => a + b.lessons.length, 0);
  const percent = Math.round((complete.length / total) * 100);

  return (
    // <SafeAreaView
    //   style={{
    //     flex: 1,
    //     backgroundColor: "#FDF6EC",
    //     padding: 20,
    //   }}
    // >

    <View style={{ flex: 1, backgroundColor: "#FDF6EC" }}>
      {/* <StatusBar barStyle={"dark-content"} /> */}
      <View
        style={{
          backgroundColor: "#2563eb",
          paddingTop: 80,
          padding: 30,
          borderBottomRightRadius: 20,
          borderBottomLeftRadius: 20
        }}
      >
        <Text
          style={{
            fontSize: 18,
            fontWeight: "700",
            color: "#fff",
            opacity: 0.8,
          }}
        >
          Your learning progress
        </Text>

        <Text
          style={{
            color: "#fff",
            fontSize: 32,
            fontWeight: "700",
            marginTop: 10,
            marginBottom: 10,
          }}
        >
          {percent}%
        </Text>

        <View
          style={{
            height: 8,
            backgroundColor: "#1E40AF",
            borderRadius: 10,
            marginTop: 14,
          }}
        >
          <View
            style={{
              width: `${percent}%`,
              height: "100%",
              backgroundColor: "#22C55E",
              borderRadius: 10,
            }}
          />
        </View>
      </View>

      {complete.length === 0 ? (
        <View
          style={{
            alignItems: "center",
            marginTop: 30,
          }}
        >
          <Text style={{ fontSize: 35 }}>📚</Text>
          <Text
            style={{
              fontSize: 16,
              fontWeight: "600",
              marginTop: 10,
            }}
          >
            No Progress Yet
          </Text>

          <Text
            style={{
              fontSize: 13,
              color: "#64748b",
              marginTop: 5,
            }}
          >
            Start learning to track progress
          </Text>
        </View>
      ) : (
        <View
          style={{
            marginTop: 30,
            paddingHorizontal: 25,
            paddingVertical: 15,
          }}
        >
          <Text style={{ fontSize: 16, fontWeight: "600" }}>
            You’ve completed
          </Text>
          <Text
            style={{
              fontSize: 24,
              fontWeight: "700",
              marginTop: 5,
            }}
          >
            {complete.length} lessons 🚀
          </Text>
        </View>
      )}
      <View
        style={{
          padding: 25
        }}
      >
      <AnimatedPressable
        style={{
          alignItems: "center",
          marginTop: 20,
          shadowColor: "#000",
          shadowOpacity: 0.35,
          shadowRadius: 3,
          shadowOffset: {
            height: 1,
            width: 1,
          },
          elevation: 3,
          //padding: 10,
          backgroundColor: "#3B82F6",
          borderRadius: 10,
          width: "100%",
          paddingHorizontal: 20,
          paddingVertical: 20,
          justifyContent: "center",
        }}
        onPress={logout}
      >
        <Text
          style={{
            color: "#fff",
            marginLeft: 10,
            fontWeight: "600",
          }}
        >
          Logout
        </Text>
      </AnimatedPressable>
      </View>
    </View>
    //</SafeAreaView>
  );
};

export default ProgressScreen;
