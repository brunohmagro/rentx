import React from 'react'

import { ButtonProps } from './interfaces'

import { Container, Title } from './styles'

export const Button: React.FC<ButtonProps> = ({ title, color, ...rest }: ButtonProps) => (
  <Container {...rest} color={color}>
    <Title>{title}</Title>
  </Container>
)
