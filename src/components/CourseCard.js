import { Text, View, StyleSheet } from "react-native";
import React from "react";
import { colors } from "../theme/colors";
import Ionicons from "@expo/vector-icons/Ionicons";
import AnimatedPressable from "./AnimatedPressable";

const CourseCard = ({ course, onPress, progress }) => {
  return (
    <AnimatedPressable onPress={onPress} style={styles.shadow}>
      <View style={styles.card}>
        <View style={styles.cardFeatured}>
          <Text style={styles.featured}>Featured Course</Text>
        </View>

        <View style={styles.row}>
          <Ionicons name="book-outline" size={25} color={colors.primary} />

          <View style={{ marginLeft: 10, width: `85%` }}>
            <Text style={styles.title}>{course.title}</Text>
            <Text style={styles.subs}>{course.lessons.length} lessons</Text>
            <View
              style={{
                marginTop: 10,
                height: 6,
                backgroundColor: "#E5E7EB",
                borderRadius: 10,
              }}
            >
              <View
                style={{
                  width: `${progress}%`,
                  height: "100%",
                  backgroundColor: "#22C55E",
                  borderRadius: 10,
                }}
              />
            </View>

            <Text style={{ fontSize: 12, marginTop: 6, color: "#64748B" }}>
              {progress}% completed
            </Text>
          </View>
        </View>
      </View>
    </AnimatedPressable>
  );
};

export default CourseCard;

const styles = StyleSheet.create({
  shadow: {
    shadowColor: "#000",
    shadowOpacity: 0.3,
    shadowRadius: 10,
    elevation: 3,
  },
  card: {
    marginHorizontal: 15,
    marginTop: 15,
    borderRadius: 15,
    backgroundColor: colors.card,
    overflow: "hidden",
    marginBottom: 10,
  },
  cardFeatured: {
    height: 150,
    backgroundColor: "#1e3a8a",
    justifyContent: "flex-end",
    padding: 15,
  },
  row: {
    flexDirection: "row",
    alignItems: "center",
    padding: 15,
  },
  featured: {
    color: "#fff",
    fontWeight: "600",
    fontSize: 16,
  },
  title: {
    fontSize: 16,
    fontWeight: "700",
    color: colors.text,
  },
  subs: {
    fontSize: 13,
    color: colors.subtext,
    marginTop: 10,
  },
});
