import React, { useState, useEffect } from 'react'
import { useNavigation, useRoute } from '@react-navigation/native'
import { Alert, StatusBar } from 'react-native'
import { Feather } from '@expo/vector-icons'
import { RFValue } from 'react-native-responsive-fontsize'
import { format } from 'date-fns'

import { getPlataformDate } from '../../utils/getPlataformDate'
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
import { api } from '../../service/api'

interface RouteParams {
  car: CarDto
  dates: string[]
}

interface RentalPeriod {
  start: string
  end: string
}

export const SchedulingDetails: React.FC = () => {
  const [rentalPeriod, setRentalPeriod] = useState<RentalPeriod>({} as RentalPeriod)

  const navigation = useNavigation()
  const route = useRoute()
  const { car, dates } = route.params as RouteParams

  const rentTotal = Number(dates.length * car.rent.price)

  const handleRentalConfirm = async () => {
    const unavailableDates = await api.get(`/schedules_bycars/${car.id}`)

    const unavaulableDates = {
      ...unavailableDates.data.unavailable_dates,
      ...dates,
    }

    await api.post('/schedules_byuser', {
      user_id: 1,
      car,
    })

    api
      .put(`/schedules_bycars/${car.id}`, {
        id: car.id,
        unavailable_dates: unavaulableDates,
      })
      .then(() => navigation.navigate('SchedulingComplete'))
      .catch(() => Alert.alert('Ocorreu um erro ao alugar.'))
  }

  const handleGoBack = () => {
    navigation.goBack()
  }

  useEffect(() => {
    setRentalPeriod({
      start: format(getPlataformDate(new Date(dates[0])), 'dd/MM/yyyy'),
      end: format(getPlataformDate(new Date(dates[dates.length - 1])), 'dd/MM/yyyy'),
    })
  }, [])

  return (
    <Container>
      <StatusBar translucent barStyle="dark-content" backgroundColor="transparent" />

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
            <Period>Ao dia</Period>
            <Price>R$ {car.rent.price}</Price>
          </Rent>
        </Details>

        <Accessories>
          {car.accessories.map(accessory => (
            <Accessory
              key={accessory.type}
              name={accessory.name}
              icon={getAcessoryIcon(accessory.type)}
            />
          ))}
        </Accessories>

        <RentalPeriod>
          <CalendarIcon>
            <Feather name="calendar" size={RFValue(24)} color={theme.colors.shape} />
          </CalendarIcon>

          <DateInfo>
            <DateTitle>DE</DateTitle>
            <DateValue>{rentalPeriod.start}</DateValue>
          </DateInfo>

          <Feather name="chevron-right" size={RFValue(10)} color={theme.colors.text} />

          <DateInfo>
            <DateTitle>Até</DateTitle>
            <DateValue>{rentalPeriod.end}</DateValue>
          </DateInfo>
        </RentalPeriod>

        <RentalPrice>
          <RentalPriceLabel>Total</RentalPriceLabel>
          <RentalPriceDetails>
            <RentalPriceQuota>
              R$ {car.rent.price} x{dates.length} diárias
            </RentalPriceQuota>
            <RentalPriceTotal>R$ {rentTotal}</RentalPriceTotal>
          </RentalPriceDetails>
        </RentalPrice>
      </Content>

      <Footer>
        <FooterContent>
          <Button title="Alugar agora" color={theme.colors.success} onPress={handleRentalConfirm} />
        </FooterContent>
      </Footer>
    </Container>
  )
}
