import { RectButtonProps } from 'react-native-gesture-handler'

export interface ButtonProps extends RectButtonProps {
  title: string
  color?: string
  enabled?: boolean
}

export interface ButtonStyleProps {
  color?: string
}
