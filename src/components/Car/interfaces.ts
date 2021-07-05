import { RectButtonProps } from 'react-native-gesture-handler'

export interface Rent {
  period: string
  price: number
}

export interface Acessory {
  type: string
  name: string
}

export interface CarDto {
  id: string
  brand: string
  name: string
  about: string
  rent: Rent
  fuel_type: string
  thumbnail: string
  accessories: Acessory[]
  photos: string[]
}

export interface CarProps extends RectButtonProps {
  brand: string
  name: string
  rent: Rent
  thumbnail: string
}
