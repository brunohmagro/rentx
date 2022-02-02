import React from 'react'
import { Button, StyleSheet, Dimensions } from 'react-native'

import Animated, {
  useSharedValue,
  useAnimatedStyle,
  withTiming,
  Easing,
} from 'react-native-reanimated'

const WITH = Dimensions.get('window').width

import { Container } from './styles'

export const Splash: React.FC = () => {
  const animation = useSharedValue(0)

  const animatedStyles = useAnimatedStyle(() => {
    return {
      transform: [
        {
          translateX: withTiming(animation.value, {
            duration: 500,
            easing: Easing.bounce,
          }),
        },
      ],
    }
  })

  const handleAnimationPosition = () => {
    if (animation.value >= WITH - 100) {
      animation.value = 0
    } else {
      animation.value += 100
    }
  }

  return (
    <Container>
      <Animated.View style={[styles.box, animatedStyles]} />
      <Button title="Mover" onPress={handleAnimationPosition} />
    </Container>
  )
}

const styles = StyleSheet.create({
  box: {
    width: 100,
    height: 100,
    backgroundColor: 'red',
  },
})
