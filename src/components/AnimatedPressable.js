import { Pressable, Animated } from "react-native";
import { useRef } from "react";

/**
 * @param {Object} props
 * @param {import('react-native').StyleProp<import('react-native').ViewStyle>} props.style
 */

export default function AnimatedPressable({ children, onPress, style }) {
  const scale = useRef(new Animated.Value(1)).current;

  return (
    <Pressable
      onPress={onPress}
      onPressIn={() => {
        Animated.spring(scale, {
          toValue: 0.96,
          useNativeDriver: true,
        }).start();
      }}
      onPressOut={() => {
        Animated.spring(scale, { toValue: 1, useNativeDriver: true }).start();
      }}
      style={style}
    >
      <Animated.View style={{ transform: [{ scale }] }}>
        {children}
      </Animated.View>
    </Pressable>
  );
}
