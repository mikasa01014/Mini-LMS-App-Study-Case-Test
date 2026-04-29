import {
  View,
  Text,
  StatusBar,
  FlatList,
  Animated,
  RefreshControl,
  TouchableOpacity,
} from "react-native";
import React, { useState, useEffect } from "react";
import { useLesson } from "../context/LessonContext";
import { courses } from "../data/courses";
import { useAuth } from "../context/AuthContext";
import CourseCard from "../components/CourseCard";
// import { SafeAreaView } from "react-native-safe-area-context";
import SkeletonCard from "../components/SkeletonCard";
import useFadeIn from "../hook/UseFadeIn";
import Ionicons from "@expo/vector-icons/Ionicons";
import { colors } from "../theme/colors";

const CourseListScreen = ({ navigation }) => {
  const { complete } = useLesson();
  const { logout } = useAuth();
  const fade = useFadeIn();

  const [loading, setLoading] = useState(true);
  const [refresh, setRefresh] = useState(false);

  const onRefresh = () => {
    setRefresh(true);
    setTimeout(() => setRefresh(false), 1000);
  };

  useEffect(() => {
    setTimeout(() => setLoading(false), 800 + Math.random() * 800);
  }, []);

  const getProgress = (course) => {
    const total = course.lessons.length;
    const done = course.lessons.filter((l) => complete.includes(l.id)).length;

    return total === 0 ? 0 : Math.round((done / total) * 100);
  };

  return (
    // <SafeAreaView
    //   style={{
    //     flex: 1,
    //     backgroundColor: "#FDF6EC",
    //     padding: 24,
    //   }}
    // >
    //   <StatusBar barStyle={"dark-content"} />
    <Animated.View
      style={{ flex: 1, opacity: fade, backgroundColor: "#FDF6EC" }}
    >
      <View
        style={{
          padding: 20,
          backgroundColor: "#2563eb",
          borderBottomLeftRadius: 22,
          borderBottomRightRadius: 22,
          paddingTop: 70,
          flexDirection: "row",
          justifyContent: "space-between",
        }}
      >
        <View>
          <Text
            style={{
              color: "#fff",
              opacity: 0.8,
            }}
          >
            Welcome back 👋
          </Text>

          <Text
            style={{
              color: "#fff",
              fontSize: 26,
              fontWeight: "700",
              marginTop: 4,
            }}
          >
            Continue your journey
          </Text>
        </View>
        <View
          style={{
            justifyContent: "center",
            alignItems: "center",
            marginRight: 0,
          }}
        >
          <TouchableOpacity onPress={logout}>
            <Ionicons name="log-out" color={"#fff"} size={40} />
          </TouchableOpacity>
        </View>
      </View>

      <Text
        style={{
          marginTop: 20,
          marginHorizontal: 16,
          fontSize: 16,
          fontWeight: "600",
        }}
      >
        Your Courses
      </Text>

      {loading ? (
        <>
          <SkeletonCard />
          <SkeletonCard />
          <SkeletonCard />
        </>
      ) : (
        <FlatList
          data={courses}
          keyExtractor={(i) => i.id}
          showsVerticalScrollIndicator={false}
          contentContainerStyle={{ paddingBottom: 20 }}
          refreshControl={
            <RefreshControl 
              refreshing={refresh} 
              onRefresh={onRefresh} 
              tintColor={colors.primary}         
          colors={[colors.primary, colors.success]}
            />
          }
          renderItem={({ item }) => {
            const progress = getProgress(item);

            return (
              <CourseCard
                course={item}
                progress={progress}
                onPress={() => navigation.navigate("CourseDetail", { course: item })}
              />
            );
          }}
        />
      )}
    </Animated.View>
    //</SafeAreaView>
  );
};

export default CourseListScreen;
