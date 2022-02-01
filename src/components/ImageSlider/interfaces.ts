import { ViewToken } from 'react-native'

export interface ImageIndexProps {
  active: boolean
}

export interface ImageSliderProps {
  imageUrl: string[]
}

export interface ChangeImageProps {
  viewableItems: ViewToken[]
  changed: ViewToken[]
}
