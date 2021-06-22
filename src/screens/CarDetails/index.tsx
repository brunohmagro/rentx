import React from 'react'

import { BackButton } from '../../components/BackButton'
import { ImageSlider } from '../../components/ImageSlider'

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
  About,
} from './styles'

export const CarDetails: React.FC = () => (
  <Container>
    <Header>
      <ButtonContainer>
        <BackButton onPress={() => console.log('Quero voltar')} size={35} />
      </ButtonContainer>
    </Header>

    <ImageSlider imageUrl={['https://freepikpsd.com/media/2020/01/White-Audi-Car-PNG.png']} />

    <Content>
      <Details>
        <Desciption>
          <Brand>Lamborgini</Brand>
          <Name>Huracan</Name>
        </Desciption>

        <Rent>
          <Period>Ao dia</Period>
          <Price>R$ 580</Price>
        </Rent>
      </Details>

      <About>
        Este é automóvel desportivo. Surgiu do lendário touro de lide indultado na praça Real
        Maestranza de Sevilla. É um belíssimo carro para quem gosta de acelerar.
      </About>
    </Content>
  </Container>
)
