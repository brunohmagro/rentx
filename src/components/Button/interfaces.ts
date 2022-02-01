import { RectButtonProps } from 'react-native-gesture-handler'

export interface ButtonProps extends RectButtonProps {
  title: string
  color?: string
  enabled?: boolean
  loading?: boolean
}

export interface ButtonStyleProps {
  color?: string
}
