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
  ListCar,
} from './styles'
import { Car } from '../../components/Car'

export const MyCars: React.FC = () => {
  const [cars, setCars] = useState<CarDto[]>([])
  const [loading, setLoading] = useState(true)

  const navigation = useNavigation()
  const theme = useTheme()

  useEffect(() => {
    ;(async () => {
      try {
        const response = await api.get<CarDto[]>('/schedules_byuser?user_id=1')
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

        <ListCar
          data={cars}
          keyExtractor={item => item.id}
          showsVerticalScrollIndicator={false}
          renderItem={({ item }) => (
            <Car
              brand={item.brand}
              name={item.name}
              thumbnail={item.thumbnail}
              rent={item.rent}
              fuel_type={item.fuel_type}
              onPress={() => handleCarDetails(item)}
            />
          )}
        />
      </Content>
    </Container>
  )
}
