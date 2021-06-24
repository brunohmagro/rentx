import React from 'react'

import speedSvg from '../../assets/speed.svg'
import accelerationSvg from '../../assets/acceleration.svg'
import forceSvg from '../../assets/force.svg'
import gasolineSvg from '../../assets/gasoline.svg'
import exchangeSvg from '../../assets/exchange.svg'
import peopleSvg from '../../assets/people.svg'

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
  Acessories,
  About,
  Footer,
  FooterContent,
} from './styles'
import { Button } from '../../components/Button'

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

      <Acessories>
        <Acessory name="380Km/h" icon={speedSvg} />
        <Acessory name="3.2s" icon={accelerationSvg} />
        <Acessory name="800 HP" icon={forceSvg} />
        <Acessory name="Gasolina" icon={gasolineSvg} />
        <Acessory name="Auto" icon={exchangeSvg} />
        <Acessory name="2 pessoas" icon={peopleSvg} />
      </Acessories>

      <About>
        Este é automóvel desportivo. Surgiu do lendário touro de lide indultado na praça Real
        Maestranza de Sevilla. É um belíssimo carro para quem gosta de acelerar.
      </About>
    </Content>

    <Footer>
      <FooterContent>
        <Button title="Enviar" />
      </FooterContent>
    </Footer>
  </Container>
)
