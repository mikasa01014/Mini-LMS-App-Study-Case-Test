import { View, Text, StatusBar } from 'react-native'
import React from 'react'
import { useLesson } from '../context/LessonContext'
import LessonItem from '../components/LessonItem'
import { SafeAreaView } from "react-native-safe-area-context";

const CourseDetailScreen = ({ navigation, route }) => {
  const { course } = route.params;
  const { toggleLesson, complete } = useLesson();
  return (
    // <SafeAreaView
    //   style={{
    //     flex: 1,
    //     backgroundColor: "#FDF6EC",
    //     padding: 20,
    //   }}
    // >

    <View style={{}}>
      <View
        style={{
          height: 180,
          backgroundColor: "#1E3A8A",
          justifyContent: "flex-end",
          padding: 16,
          borderBottomLeftRadius: 20,
          borderBottomRightRadius: 20,
          marginBottom: 20,
        }}
      >
        <Text
          style={{
            color: "#fff",
            fontSize: 20,
            fontWeight: "700",
          }}
        >
          {course.title}
        </Text>
      </View>
      <View
        style={{ padding: 20 }}
      >
        {course.lessons.map((i, j) => (
          <LessonItem
            key={i.id}
            lesson={i}
            done={complete.includes(i.id)}
            onPress={() => toggleLesson(i.id)}
            index={j}
          />
        ))}
      </View>
    </View>
    //</SafeAreaView>
  );
};

export default CourseDetailScreen