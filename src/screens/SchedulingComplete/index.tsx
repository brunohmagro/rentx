import React from 'react'
import { useWindowDimensions } from 'react-native'

import { Container, Content, Title, Message, Footer } from './styles'

import { ConfirmButton } from '../../components/ConfirmButton'

import BrandSvg from '../../assets/logo_background_gray.svg'
import DoneSvg from '../../assets/done.svg'

export const SchedulingComplete: React.FC = () => {
  const { width } = useWindowDimensions()
  return (
    <Container>
      <BrandSvg width={width} />

      <Content>
        <DoneSvg width={80} height={80} />
        <Title>Carro alugado!</Title>
        <Message>
          Agora você só precisa ir{'\n'}
          até a concessionária da RENTX{'\n'}
          pegar o seu automóvel.
        </Message>
        <Footer>
          <ConfirmButton />
        </Footer>
      </Content>
    </Container>
  )
}
