import React from 'react';
import { TextInputProps } from 'react-native';
import { Feather } from '@expo/vector-icons'

import { useTheme } from 'styled-components'

import { Container, IconContainer, TextInput } from './styles';

interface inputProps extends TextInputProps {
  iconName: React.ComponentProps<typeof Feather>['name']
}

export const Input: React.FC<inputProps> = ({ iconName, ...rest }: inputProps) => {
  const theme = useTheme()
  return (
  <Container>
    <IconContainer>
      <Feather name={iconName} size={24} color={theme.colors.text_detail} />
    </IconContainer>
    
    <TextInput {...rest} />
  </Container>
)}