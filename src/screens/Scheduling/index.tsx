import React from 'react'
import { StatusBar } from 'react-native'
import { useNavigation } from '@react-navigation/native'

import { BackButton } from '../../components/BackButton'
import { Button } from '../../components/Button'
import { DayProps, MarkedDateProps } from '../../components/Calendar/interface'
import { Calendar } from '../../components/Calendar'
import { generateInterval } from '../../components/Calendar/generateInterval'

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

export const Scheduling: React.FC = () => {
  const navigation = useNavigation()

  const [lastSelectedDate, setLastSelectedDate] = useState<DayProps>({} as DayProps)
  const [markedDates, setMarkedDates] = useState<MarkedDateProps>({} as MarkedDateProps)

  const handleConfirmRental = () => {
    navigation.navigate('SchedulingDetails')
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
              <DateValueWrapper selected={false}>
                <DateValue></DateValue>
              </DateValueWrapper>
            </DateInfo>

            <ArrowSvg />

            <DateInfo>
              <DateTitle>Até</DateTitle>
              <DateValueWrapper selected={false}>
                <DateValue>18/06/2021</DateValue>
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
