import React, { useRef, useState } from 'react'
import { FlatList } from 'react-native'

import { ImageSliderProps, ChangeImageProps } from './interfaces'

import { Container, ImageIndexes, ImageIndex, CarImageWrapper, CarImage } from './styles'

export const ImageSlider: React.FC<ImageSliderProps> = ({ imageUrl }: ImageSliderProps) => {
  const [imageIndex, setImageIndex] = useState(0)

  const indexChanged = useRef((info: ChangeImageProps) => {
    const index = Number(info.viewableItems[0].index)
    setImageIndex(index)
  })

  return (
    <Container>
      <ImageIndexes>
        {imageUrl.map((_, index) => (
          <ImageIndex key={String(index)} active={index === imageIndex} />
        ))}
      </ImageIndexes>

      <FlatList
        data={imageUrl}
        keyExtractor={key => key}
        horizontal
        showsHorizontalScrollIndicator={false}
        renderItem={({ item }) => (
          <CarImageWrapper>
            <CarImage source={{ uri: item }} resizeMode="contain" />
          </CarImageWrapper>
        )}
        onViewableItemsChanged={indexChanged.current}
      />
    </Container>
  )
}
