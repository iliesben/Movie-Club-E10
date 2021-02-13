import React, { useEffect, useRef } from 'react'
import { Animated, Easing } from "react-native";

export const FadeAnimation = (props) => {

  const { initValue, toValue, duration } = props

  const fadeAnim = useRef(new Animated.Value(initValue)).current;

  useEffect(() => {

    Animated.timing(fadeAnim, {
      toValue: toValue ?? 1,
      duration: duration ?? 5000,
      easing: Easing.linear,
      useNativeDriver: true
    }).start();

  }, [])

  return (
    <Animated.View style={[props.customStyles, { opacity: fadeAnim }]}>
      {props.children}
    </Animated.View>
  )

}

export const FadeSpringAnimation = (props) => {

  const { initValue, toValue, speed, bounciness, index } = props

  const fadeSpringAnim = useRef(new Animated.Value(initValue)).current;

  useEffect(() => {

    Animated.spring(fadeSpringAnim, {
      toValue: toValue,
      speed: speed,
      bounciness: bounciness,
      delay: 300 * (index % 20),
      useNativeDriver: true
    }).start();

  }, [])

  return (
    <Animated.View style={[props.customStyles, { transform: [{ translateX: fadeSpringAnim }] }]}>
      {props.children}
    </Animated.View>
  )

}

export const ScaleAnimation = (props) => {

  const { initValue, toValue, duration } = props

  const ScaleAnim = useRef(new Animated.Value(initValue)).current;

  useEffect(() => {

    Animated.timing(ScaleAnim, {
      toValue: toValue ?? 1,
      duration: duration ?? 5000,
      easing: Easing.linear,
      useNativeDriver: true
    }).start();

  }, [])

  return (
    <Animated.View style={[props.customStyles, { transform: [{ scale: ScaleAnim }] }]}>
      {props.children}
    </Animated.View>
  )
}