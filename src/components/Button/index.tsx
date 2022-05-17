import React from 'react'
import { ActivityIndicator } from 'react-native'
import { useTheme } from 'styled-components'

import { ButtonProps } from './interfaces'

import { Container, Title } from './styles'

export const Button: React.FC<ButtonProps> = ({
  title,
  color,
  enabled = true,
  loading = false,
  light = false,
  ...rest
}: ButtonProps) => {
  const theme = useTheme()

  return (
    <Container
      {...rest}
      color={color}
      enabled={enabled}
      style={{ opacity: enabled === false || loading === true ? 0.5 : 1 }}>
      {loading ? <ActivityIndicator color={theme.colors.shape} /> : <Title light={light}>{title}</Title>}
    </Container>
  )
}
