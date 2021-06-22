import React from 'react'

import { Container, Name } from './styles'

import { AcessoryProps } from './interfaces'

export const Acessory: React.FC<AcessoryProps> = ({ name, icon: Icon }: AcessoryProps) => {
  return (
    <Container>
      <Icon width={32} height={32} />
      <Name>{name}</Name>
    </Container>
  )
}
