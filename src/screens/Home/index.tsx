import React from 'react'
import { StatusBar } from 'react-native'
import { RFValue } from 'react-native-responsive-fontsize'

import { Container, Header, HeaderContent, TotalCars } from './styles'

import Logo from '../../assets/logo.svg'

import { Car } from '../../components/Car'

export const Home: React.FC = () => {
  const car = {
    brand: 'audi',
    name: 'RS 5 coupé',
    rent: {
      period: 'Ao dia',
      price: 120,
    },
    thumbnail: 'https://freepikpsd.com/media/2020/01/White-Audi-Car-PNG.png',
  }

  return (
    <Container>
      <StatusBar barStyle="light-content" backgroundColor="transparent" translucent />
      <Header>
        <HeaderContent>
          <Logo width={RFValue(108)} height={RFValue(12)} />
          <TotalCars>Total de 12 carros</TotalCars>
        </HeaderContent>
      </Header>

      <Car brand={car.brand} name={car.name} thumbnail={car.thumbnail} rent={car.rent} />

      <Car brand={car.brand} name={car.name} thumbnail={car.thumbnail} rent={car.rent} />
    </Container>
  )
}
