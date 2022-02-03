import React from 'react'
import { StatusBar } from 'react-native'
import { useNavigation, useRoute } from '@react-navigation/native'

import Animated, {
  useAnimatedScrollHandler,
  useSharedValue,
  useAnimatedStyle,
  interpolate,
  Extrapolate,
} from 'react-native-reanimated'

import { CarDto } from '../../components/Car/interfaces'
import { getAcessoryIcon } from '../../utils/getAcessoryIcons'

import { BackButton } from '../../components/BackButton'
import { ImageSlider } from '../../components/ImageSlider'
import { Accessory } from '../../components/Accessory'

import {
  Container,
  Header,
  ButtonContainer,
  Content,
  Details,
  Desciption,
  Brand,
  Name,
  Rent,
  Period,
  Price,
  Accessories,
  About,
  Footer,
  FooterContent,
} from './styles'
import { Button } from '../../components/Button'

interface CarDetailsParamsProps {
  car: CarDto
}

export const CarDetails: React.FC = () => {
  const navigation = useNavigation()
  const route = useRoute()
  const { car } = route.params as CarDetailsParamsProps

  const scrollY = useSharedValue(0)

  const handleScroll = useAnimatedScrollHandler(event => {
    scrollY.value = event.contentOffset.y
  })

  const headerStyleAnimation = useAnimatedStyle(() => {
    return {
      height: interpolate(scrollY.value, [0, 200], [200, 85], Extrapolate.CLAMP),
    }
  })

  const sliderCarsStyleAnimation = useAnimatedStyle(() => {
    return {
      opacity: interpolate(scrollY.value, [0, 150], [1, 0], Extrapolate.CLAMP),
    }
  })

  const handleSelectRentalPeriod = () => {
    navigation.navigate('Scheduling', { car })
  }

  const handleGoBack = () => {
    navigation.goBack()
  }

  return (
    <Container>
      <StatusBar barStyle="dark-content" backgroundColor="transparent" translucent />

      <Animated.View style={headerStyleAnimation}>
        <Header>
          <ButtonContainer>
            <BackButton onPress={handleGoBack} size={35} />
          </ButtonContainer>
        </Header>

        <Animated.View style={sliderCarsStyleAnimation}>
          <ImageSlider imageUrl={car.photos} />
        </Animated.View>
      </Animated.View>

      <Content onScroll={handleScroll} scrollEventThrottle={16}>
        <Details>
          <Desciption>
            <Brand>{car.brand}</Brand>
            <Name>{car.name}</Name>
          </Desciption>

          <Rent>
            <Period>{car.rent.period}</Period>
            <Price>R$ {car.rent.price}</Price>
          </Rent>
        </Details>

        <Accessories>
          {car.accessories.map(acessory => (
            <Accessory
              key={acessory.type}
              name={acessory.name}
              icon={getAcessoryIcon(acessory.type)}
            />
          ))}
        </Accessories>

        <About>{car.about}</About>
        <About>{car.about}</About>
        <About>{car.about}</About>
      </Content>

      <Footer>
        <FooterContent>
          <Button title="Escolher período do aluguel" onPress={handleSelectRentalPeriod} />
        </FooterContent>
      </Footer>
    </Container>
  )
}
