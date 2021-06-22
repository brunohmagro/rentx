import React from 'react'

import {
  Container,
  Details,
  Brand,
  Name,
  About,
  Rent,
  Period,
  Price,
  Type,
  CarImage,
} from './styles'

import GasolineSvg from '../../assets/gasoline.svg'

interface Rent {
  period: string
  price: number
}

interface CarProps {
  brand: string
  name: string
  rent: Rent
  thumbnail: string
}

export const Car: React.FC<CarProps> = ({ brand, name, rent, thumbnail }: CarProps) => {
  return (
    <Container>
      <Details>
        <Brand>{brand}</Brand>
        <Name>{name}</Name>

        <About>
          <Rent>
            <Period>{rent.period}</Period>
            <Price>{`R$ ${rent.price}`}</Price>
          </Rent>

          <Type>
            <GasolineSvg />
          </Type>
        </About>
      </Details>

      <CarImage
        source={{
          uri: thumbnail,
        }}
        resizeMode="contain"
      />
    </Container>
  )
}
