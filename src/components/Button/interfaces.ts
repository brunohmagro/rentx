import { RectButtonProps } from 'react-native-gesture-handler'

export interface ButtonProps extends RectButtonProps {
  title: string
  color?: string
}

export interface ButtonStyleProps {
  color?: string
}
