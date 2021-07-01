import { RectButtonProps } from 'react-native-gesture-handler'

export interface Rent {
  period: string
  price: number
}

export interface CarProps extends RectButtonProps {
  brand: string
  name: string
  rent: Rent
  thumbnail: string
}
