import React from 'react'

import { ButtonProps } from './interfaces'

import { Container, Title } from './styles'

export const Button: React.FC<ButtonProps> = ({
  title,
  color,
  enabled = true,
  ...rest
}: ButtonProps) => (
  <Container {...rest} color={color} enabled={enabled} style={{ opacity: enabled ? 1 : 0.5 }}>
    <Title>{title}</Title>
  </Container>
)
