import React from 'react'

import { getAcessoryIcon } from '../../utils/getAcessoryIcons'

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

import { CarProps } from './interfaces'

export const Car: React.FC<CarProps> = ({
  brand,
  name,
  rent,
  thumbnail,
  fuel_type,
  ...rest
}: CarProps) => {
  const MotorIcon = getAcessoryIcon(fuel_type)
  return (
    <Container {...rest}>
      <Details>
        <Brand>{brand}</Brand>
        <Name>{name}</Name>

        <About>
          <Rent>
            <Period>{rent ? rent.period : ''}</Period>
            <Price>{`R$ ${rent ? rent.price : ''}`}</Price>
          </Rent>

          <Type>
            <MotorIcon />
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
