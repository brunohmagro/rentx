import React from 'react'
import { Alert, StatusBar } from 'react-native'
import { useNavigation, useRoute } from '@react-navigation/native'
import { format } from 'date-fns'

import { getPlataformDate } from '../../utils/getPlataformDate'
import { BackButton } from '../../components/BackButton'
import { Button } from '../../components/Button'
import { DayProps, MarkedDateProps } from '../../components/Calendar/interface'
import { Calendar } from '../../components/Calendar'
import { generateInterval } from '../../components/Calendar/generateInterval'
import { CarDto } from '../../components/Car/interfaces'

import ArrowSvg from '../../assets/arrow.svg'

import {
  Container,
  Header,
  HeaderContainer,
  Title,
  RentalPeriod,
  DateInfo,
  DateTitle,
  DateValueWrapper,
  DateValue,
  Content,
  Footer,
  ContentFooter,
} from './styles'
import { useState } from 'react'

interface RentalPeriod {
  startFormatted: string
  endFormatted: string
}

interface CarDetailsParamsProps {
  car: CarDto
}

export const Scheduling: React.FC = () => {
  const navigation = useNavigation()
  const route = useRoute()
  const { car } = route.params as CarDetailsParamsProps

  const [lastSelectedDate, setLastSelectedDate] = useState<DayProps>({} as DayProps)
  const [markedDates, setMarkedDates] = useState<MarkedDateProps>({} as MarkedDateProps)
  const [rentalPeriod, setRentalPeriod] = useState<RentalPeriod>({} as RentalPeriod)

  const handleConfirmRental = () => {
    if (!rentalPeriod.startFormatted || !rentalPeriod.endFormatted) {
      Alert.alert('Selecione o intervalo para alugar.')
    } else {
      navigation.navigate('SchedulingDetails', {
        car,
        dates: Object.keys(markedDates),
      })
    }
  }

  const handleGoBack = () => {
    navigation.goBack()
  }

  const handleChangeDate = (date: DayProps) => {
    let start = !lastSelectedDate.timestamp ? date : lastSelectedDate
    let end = date

    if (start.timestamp > end.timestamp) {
      start = end
      end = start
    }

    setLastSelectedDate(end)

    const interval = generateInterval(start, end)
    setMarkedDates(interval)

    const firstDate = Object.keys(interval)[0]
    const endDate = Object.keys(interval)[Object.keys(interval).length - 1]

    setRentalPeriod({
      startFormatted: format(getPlataformDate(new Date(firstDate)), 'dd/MM/yyy'),
      endFormatted: format(getPlataformDate(new Date(endDate)), 'dd/MM/yyy'),
    })
  }

  return (
    <Container>
      <StatusBar translucent barStyle="light-content" backgroundColor="transparent" />
      <Header>
        <HeaderContainer>
          <BackButton onPress={handleGoBack} size={35} />
          <Title>
            Escolha uma{'\n'}
            data de início e{'\n'}
            fim do aluguel
          </Title>

          <RentalPeriod>
            <DateInfo>
              <DateTitle>de</DateTitle>
              <DateValueWrapper selected={!!rentalPeriod.startFormatted}>
                <DateValue>{rentalPeriod.startFormatted}</DateValue>
              </DateValueWrapper>
            </DateInfo>

            <ArrowSvg />

            <DateInfo>
              <DateTitle>Até</DateTitle>
              <DateValueWrapper selected={!!rentalPeriod.endFormatted}>
                <DateValue>{rentalPeriod.endFormatted}</DateValue>
              </DateValueWrapper>
            </DateInfo>
          </RentalPeriod>
        </HeaderContainer>
      </Header>

      <Content>
        <Calendar markedDates={markedDates} onDayPress={handleChangeDate} />
      </Content>

      <Footer>
        <ContentFooter>
          <Button title="Confirmar" onPress={handleConfirmRental} />
        </ContentFooter>
      </Footer>
    </Container>
  )
}
