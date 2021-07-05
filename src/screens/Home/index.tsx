import React, { useEffect } from 'react'
import { StatusBar } from 'react-native'
import { useNavigation } from '@react-navigation/native'
import { RFValue } from 'react-native-responsive-fontsize'

import { api } from '../../service/api'

import { Container, Header, HeaderContent, TotalCars, CarList } from './styles'

import Logo from '../../assets/logo.svg'

import { Car } from '../../components/Car'
import { CarDto } from '../../components/Car/interfaces'
import { useState } from 'react'
import { Load } from '../../components/Load'
import { isTemplateLiteral } from 'typescript'

export const Home: React.FC = () => {
  const navigation = useNavigation()
  const [isLoading, setIsLoading] = useState(true)
  const [cars, setCars] = useState<CarDto[]>([])

  const handleCarDetails = (car: CarDto) => {
    navigation.navigate('CarDetails', { car })
  }

  useEffect(() => {
    try {
      api.get<CarDto[]>('/cars').then(response => {
        setCars(response.data)
        setIsLoading(false)
      })
    } catch (error) {
      console.error(error)
    }
  }, [])

  return (
    <Container>
      <StatusBar barStyle="light-content" backgroundColor="transparent" translucent />
      <Header>
        <HeaderContent>
          <Logo width={RFValue(108)} height={RFValue(12)} />
          <TotalCars>Total de {cars.length} carros</TotalCars>
        </HeaderContent>
      </Header>

      {isLoading ? (
        <Load />
      ) : (
        <CarList
          data={cars}
          keyExtractor={item => item.brand}
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
      )}
    </Container>
  )
}
