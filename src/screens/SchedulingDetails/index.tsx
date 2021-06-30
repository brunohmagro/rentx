import React from 'react'
import { Feather } from '@expo/vector-icons'
import { RFValue } from 'react-native-responsive-fontsize'

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
  Footer,
  FooterContent,
  RentalPeriod,
  CalendarIcon,
  DateInfo,
  DateTitle,
  DateValue,
  RentalPrice,
  RentalPriceLabel,
  RentalPriceDetails,
  RentalPriceQuota,
  RentalPriceTotal,
} from './styles'
import { Button } from '../../components/Button'
import theme from '../../global/styles/theme'

export const SchedulingDetails: React.FC = () => (
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

      <RentalPeriod>
        <CalendarIcon>
          <Feather name="calendar" size={RFValue(24)} color={theme.colors.shape} />
        </CalendarIcon>

        <DateInfo>
          <DateTitle>DE</DateTitle>
          <DateValue>18/06/2021</DateValue>
        </DateInfo>

        <Feather name="chevron-right" size={RFValue(10)} color={theme.colors.text} />

        <DateInfo>
          <DateTitle>DE</DateTitle>
          <DateValue>18/06/2021</DateValue>
        </DateInfo>
      </RentalPeriod>

      <RentalPrice>
        <RentalPriceLabel>Total</RentalPriceLabel>
        <RentalPriceDetails>
          <RentalPriceQuota>R$ 580 x3 diárias</RentalPriceQuota>
          <RentalPriceTotal>R$ 2.900</RentalPriceTotal>
        </RentalPriceDetails>
      </RentalPrice>
    </Content>

    <Footer>
      <FooterContent>
        <Button title="Enviar" />
      </FooterContent>
    </Footer>
  </Container>
)
