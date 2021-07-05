import React, { useEffect } from 'react'
import { StatusBar } from 'react-native'
import { useNavigation } from '@react-navigation/native'
import { RFValue } from 'react-native-responsive-fontsize'

import { api } from '../../service/api'

import { Container, Header, HeaderContent, TotalCars, CarList } from './styles'

import Logo from '../../assets/logo.svg'

import { Car } from '../../components/Car'
import { CarProps } from '../../components/Car/interfaces'
import { useState } from 'react'
import { Load } from '../../components/Load'

export const Home: React.FC = () => {
  const navigation = useNavigation()
  const [isLoading, setIsLoading] = useState(true)
  const [cars, setCars] = useState<CarProps[]>([])

  const handleCarDetails = () => {
    navigation.navigate('CarDetails')
  }

  useEffect(() => {
    try {
      api.get<CarProps[]>('/cars').then(response => {
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
          <TotalCars>Total de 12 carros</TotalCars>
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
              onPress={handleCarDetails}
            />
          )}
        />
      )}
    </Container>
  )
}
