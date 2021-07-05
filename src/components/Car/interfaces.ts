import { RectButtonProps } from 'react-native-gesture-handler'

export interface Rent {
  period: string
  price: number
}

export interface Acessory {
  type: string
  name: string
}

export interface CarProps extends RectButtonProps {
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
