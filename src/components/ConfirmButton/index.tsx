import React from 'react'
import { ConfirmButtonProps } from './intefaces'

import { Container, Title } from './styles'

export const ConfirmButton: React.FC<ConfirmButtonProps> = ({
  title,
  ...rest
}: ConfirmButtonProps) => (
  <Container {...rest}>
    <Title>{title ? title : 'OK'}</Title>
  </Container>
)
