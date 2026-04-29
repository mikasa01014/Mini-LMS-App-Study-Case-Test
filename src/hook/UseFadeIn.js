import { useEffect, useRef } from "react";
import { Animated } from "react-native";

export default function useFadeIn() {
  const fade = useRef(new Animated.Value(0)).current;

  useEffect(() => {
    Animated.timing(fade, {
      toValue: 1,
      duration: 500,
      useNativeDriver: true,
    }).start();
  }, []);

  return fade;
}
