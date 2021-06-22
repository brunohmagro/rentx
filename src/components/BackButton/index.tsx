import React from 'react'
import { useTheme } from 'styled-components'
import { MaterialIcons } from '@expo/vector-icons'

import { BackButtonProps } from './interfaces'

import { Container } from './styles'

export const BackButton: React.FC<BackButtonProps> = ({
  color,
  size,
  ...rest
}: BackButtonProps) => {
  const theme = useTheme()
  return (
    <Container {...rest}>
      <MaterialIcons
        name="chevron-left"
        size={size ? size : 24}
        color={color ? color : theme.colors.text}
      />
    </Container>
  )
}
