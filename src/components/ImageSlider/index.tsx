import React from 'react'

import { ImageSliderProps } from './interfaces'

import { Container, ImageIndexes, ImageIndex, CarImageWrapper, CarImage } from './styles'

export const ImageSlider: React.FC<ImageSliderProps> = ({ imageUrl }: ImageSliderProps) => {
  return (
    <Container>
      <ImageIndexes>
        <ImageIndex active={true} />
        <ImageIndex active={false} />
        <ImageIndex active={false} />
        <ImageIndex active={false} />
      </ImageIndexes>

      <CarImageWrapper>
        <CarImage source={{ uri: imageUrl[0] }} resizeMode="contain" />
      </CarImageWrapper>
    </Container>
  )
}
