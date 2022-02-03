import React, { useEffect } from 'react'
import { StatusBar, BackHandler } from 'react-native'
import { useNavigation } from '@react-navigation/native'
import { RFValue } from 'react-native-responsive-fontsize'
import { useTheme } from 'styled-components/native'
import { PanGestureHandler } from 'react-native-gesture-handler'

import Animated, {
  useAnimatedStyle,
  useSharedValue,
  useAnimatedGestureHandler,
} from 'react-native-reanimated'

import { api } from '../../service/api'

import { Container, Header, HeaderContent, TotalCars, CarList, MyCarsButton } from './styles'

import Logo from '../../assets/logo.svg'
import { Ionicons } from '@expo/vector-icons'

import { Car } from '../../components/Car'
import { CarDto } from '../../components/Car/interfaces'
import { useState } from 'react'
import { LoadAnimation } from '../../components/LoadAnimation'

export const Home: React.FC = () => {
  const navigation = useNavigation()
  const [isLoading, setIsLoading] = useState(true)
  const [cars, setCars] = useState<CarDto[]>([] as CarDto[])

  const theme = useTheme()

  const positionY = useSharedValue(0)
  const positionX = useSharedValue(0)

  const MyCarsButtonStyle = useAnimatedStyle(() => {
    return {
      transform: [{ translateX: positionX.value }, { translateY: positionY.value }],
    }
  })

  const handleGestureEvent = useAnimatedGestureHandler({
    onStart(_, ctx: any) {
      ctx.positionX = positionX.value
      ctx.positionY = positionY.value
    },
    onActive(event, ctx: any) {
      positionX.value = ctx.positionX + event.translationX
      positionY.value = ctx.positionY + event.translationY
    },
  })

  const handleCarDetails = (car: CarDto) => {
    navigation.navigate('CarDetails', { car })
  }

  const handleMyCars = () => {
    navigation.navigate('MyCars')
  }

  useEffect(() => {
    try {
      api.get<CarDto[]>('/cars').then(response => {
        setCars(response.data)
        setIsLoading(false)
      })
    } catch (error) {
      console.error(error)
    }
  }, [])

  useEffect(() => {
    BackHandler.addEventListener('hardwareBackPress', () => true)
  }, [])

  return (
    <Container>
      <StatusBar barStyle="light-content" backgroundColor="transparent" translucent />
      <Header>
        <HeaderContent>
          <Logo width={RFValue(108)} height={RFValue(12)} />
          <TotalCars>Total de {cars.length} carros</TotalCars>
        </HeaderContent>
      </Header>

      {isLoading ? (
        <LoadAnimation />
      ) : (
        <CarList
          data={cars}
          keyExtractor={item => item.brand}
          renderItem={({ item }) => (
            <Car
              brand={item.brand}
              name={item.name}
              thumbnail={item.thumbnail}
              rent={item.rent}
              fuel_type={item.fuel_type}
              onPress={() => handleCarDetails(item)}
            />
          )}
        />
      )}

      <PanGestureHandler onGestureEvent={handleGestureEvent}>
        <Animated.View style={MyCarsButtonStyle}>
          <MyCarsButton onPress={handleMyCars}>
            <Ionicons name="ios-car-sport" size={38} color={theme.colors.shape} />
          </MyCarsButton>
        </Animated.View>
      </PanGestureHandler>
    </Container>
  )
}
