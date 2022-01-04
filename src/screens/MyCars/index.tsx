import React, { useState, useEffect } from 'react'
import { StatusBar, FlatList } from 'react-native'
import { useNavigation } from '@react-navigation/core'
import { AntDesign } from '@expo/vector-icons'
import { useTheme } from 'styled-components'

import { CarDto } from '../../components/Car/interfaces'
import { api } from '../../service/api'
import { BackButton } from '../../components/BackButton'
import { Load } from '../../components/Load'

import {
  Container,
  Header,
  HeaderContainer,
  Title,
  SubTitle,
  Content,
  Appointments,
  AppointmentTitle,
  AppointmentQuantity,
  CarWrapper,
  CarWrapperFooter,
  CarWrapperFooterTitle,
  CarWrapperFooterPeriod,
  CarWrapperFooterPeriodDate,
} from './styles'
import { Car } from '../../components/Car'

interface CarProps {
  id: string
  user_id: string
  car: CarDto
  startDate: string
  endDate: string
}

export const MyCars: React.FC = () => {
  const [cars, setCars] = useState<CarProps[]>([])
  const [loading, setLoading] = useState(true)

  const navigation = useNavigation()
  const theme = useTheme()

  useEffect(() => {
    ;(async () => {
      try {
        const response = await api.get<CarProps[]>('/schedules_byuser?user_id=1')
        setCars(response.data)
      } catch (e) {
        console.log(e)
      } finally {
        setLoading(false)
      }
    })()
  }, [])

  const handleCarDetails = (car: CarDto) => {
    navigation.navigate('CarDetails', { car })
  }

  const handleGoBack = () => {
    navigation.goBack()
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

          <SubTitle>Conforto, segurança e praticidade.</SubTitle>
        </HeaderContainer>
      </Header>

      {loading ? (
        <Load />
      ) : (
        <Content>
          <Appointments>
            <AppointmentTitle>Agendamentos feitos</AppointmentTitle>
            <AppointmentQuantity>{cars.length}</AppointmentQuantity>
          </Appointments>

          <FlatList
            data={cars}
            keyExtractor={item => item.car.id}
            showsVerticalScrollIndicator={false}
            renderItem={({ item }) => (
              <CarWrapper>
                <Car
                  brand={item.car.brand}
                  name={item.car.name}
                  thumbnail={item.car.thumbnail}
                  rent={item.car.rent}
                  fuel_type={item.car.fuel_type}
                  onPress={() => handleCarDetails(item.car)}
                />
                <CarWrapperFooter>
                  <CarWrapperFooterTitle>Período</CarWrapperFooterTitle>
                  <CarWrapperFooterPeriod>
                    <CarWrapperFooterPeriodDate>{item.startDate}</CarWrapperFooterPeriodDate>
                    <AntDesign
                      name="arrowright"
                      color={theme.colors.title}
                      style={{ marginHorizontal: 10 }}
                    />
                    <CarWrapperFooterPeriodDate>{item.endDate}</CarWrapperFooterPeriodDate>
                  </CarWrapperFooterPeriod>
                </CarWrapperFooter>
              </CarWrapper>
            )}
          />
        </Content>
      )}
    </Container>
  )
}
