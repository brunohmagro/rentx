import React, { useState, useEffect } from 'react'
import { StatusBar, FlatList } from 'react-native'
import { useNavigation } from '@react-navigation/core'
import { useTheme } from 'styled-components'

import { CarDto } from '../../components/Car/interfaces'
import { api } from '../../service/api'
import { BackButton } from '../../components/BackButton'

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
} from './styles'
import { Car } from '../../components/Car'

interface CarProps {
    id: string;
    user_id: string;
    car: CarDto;
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

      <Content>
        <Appointments>
          <AppointmentTitle>Agendamentos feitos</AppointmentTitle>
          <AppointmentQuantity>05</AppointmentQuantity>
        </Appointments>

        <FlatList
          data={cars}
          keyExtractor={item => item.car.id}
          showsVerticalScrollIndicator={false}
          renderItem={({ item }) => (
            <Car
              brand={item.car.brand}
              name={item.car.name}
              thumbnail={item.car.thumbnail}
              rent={item.car.rent}
              fuel_type={item.car.fuel_type}
              onPress={() => handleCarDetails(item.car)}
            />
          )}
        />
      </Content>
    </Container>
  )
}
