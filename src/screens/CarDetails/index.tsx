import React from 'react'
import { StatusBar } from 'react-native'
import { useNavigation, useRoute } from '@react-navigation/native'

import { CarDto } from '../../components/Car/interfaces'
import { getAcessoryIcon } from '../../utils/getAcessoryIcons'

import { BackButton } from '../../components/BackButton'
import { ImageSlider } from '../../components/ImageSlider'
import { Acessory } from '../../components/Acessory'

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

  const handleSelectRentalPeriod = () => {
    navigation.navigate('Scheduling')
  }

  const handleGoBack = () => {
    navigation.goBack()
  }

  return (
    <Container>
      <StatusBar barStyle="dark-content" backgroundColor="transparent" translucent />

      <Header>
        <ButtonContainer>
          <BackButton onPress={handleGoBack} size={35} />
        </ButtonContainer>
      </Header>

      <ImageSlider imageUrl={car.photos} />

      <Content>
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
            <Acessory
              key={acessory.type}
              name={acessory.name}
              icon={getAcessoryIcon(acessory.type)}
            />
          ))}
        </Accessories>

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
