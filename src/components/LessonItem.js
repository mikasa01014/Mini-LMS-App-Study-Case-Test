import { TouchableOpacity, Text, View, LayoutAnimation } from "react-native";
import React from "react";
import { colors } from "../theme/colors";
import { useLesson } from "../context/LessonContext";
import Ionicons from "@expo/vector-icons/Ionicons";

const LessonItem = ({ lesson, index }) => {
  const { complete, toggleLesson } = useLesson();
  const done = complete.includes(lesson.id);

  const handlePress = () => {
    LayoutAnimation.configureNext(LayoutAnimation.Presets.easeInEaseOut);
    toggleLesson(lesson.id);
  };

  return (
    <TouchableOpacity
      onPress={handlePress}
      style={{
        flexDirection: "row",
        justifyContent: "space-between",
        padding: 16,
        marginBottom: 12,
        borderRadius: 14,
        backgroundColor: colors.card,
        alignItems: "center",

        shadowColor: "#000",
        shadowOpacity: 0.2,
        shadowRadius: 5,
        shadowOffset: { width: 0, height: 2 },
        elevation: 2,
      }}
    >
      <View
        style={{
          width: 36,
          height: 36,
          borderRadius: 18,
          backgroundColor: done ? "#22C55E" : "#E5E7EB",
          justifyContent: "center",
          alignItems: "center",
          marginRight: 12,
        }}
      >
        <Ionicons
          name={done ? "checkmark" : "play"}
          size={18}
          color={done ? "#fff" : "#64748B"}
        />
      </View>

      <View style={{ flex: 1 }}>
        <Text
          style={{
            fontWeight: "600",
            fontSize: 14,
            color: done ? "#94A3B8" : "#0F172A",
            textDecorationLine: done ? "line-through" : "none",
          }}
        >
          {index + 1}. {lesson.title}
        </Text>

        <Text style={{ fontSize: 12, color: "#64748B", marginTop: 2 }}>
          {done ? "Completed" : "Tap to mark as complete"}
        </Text>
      </View>

      <Ionicons
        name={done ? "checkmark-circle" : "ellipse-outline"}
        size={22}
        color={done ? "#22C55E" : "#CBD5F5"}
      />
    </TouchableOpacity>
  );
};

export default LessonItem;
