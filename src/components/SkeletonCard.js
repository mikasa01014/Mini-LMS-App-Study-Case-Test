import { Animated } from 'react-native';
import { useEffect, useRef } from 'react';

export default function SkeletonCard() {
  const opacity = useRef(new Animated.Value(0.3)).current;

  useEffect(() => {
    Animated.loop(
      Animated.sequence([
        Animated.timing(opacity, {
          toValue: 1,
          duration: 600,
          useNativeDriver: true,
        }),
        Animated.timing(opacity, {
          toValue: 0.3,
          duration: 600,
          useNativeDriver: true,
        }),
      ]),
    ).start();
  }, []);

  return (
    <Animated.View style={{
      opacity,
      height:160,
      margin:16,
      borderRadius:16,
      backgroundColor:'#E5E7EB'
    }} />
  );
}