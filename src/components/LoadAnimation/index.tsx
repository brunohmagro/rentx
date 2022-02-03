import React from 'react'

import LoadingCar from '../../assets/lottie/loading_splash.json'

import { Container, Lottie } from './styles'

export const LoadAnimation: React.FC = () => (
  <Container>
    <Lottie source={LoadingCar} autoPlay resizeMode="contain" loop />
  </Container>
)
